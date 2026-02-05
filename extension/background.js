/**
 * Proxy Inspector - Background Service Worker
 * Author: Ruturaj
 * Lightweight proxy management with keyboard shortcuts
 */

// Default proxy profiles
const DEFAULT_PROFILES = [
  {
    id: 'direct',
    name: 'Direct Connection',
    type: 'direct',
    host: '',
    port: 0,
    username: '',
    password: '',
    enabled: true,
    isDefault: true
  }
];

// Store last active proxy for quick toggle
let lastActiveProxyId = null;

// Initialize extension on install
chrome.runtime.onInstalled.addListener(async () => {
  console.log('Proxy Inspector installed');

  // Initialize storage with default profiles
  const { profiles } = await chrome.storage.sync.get('profiles');
  if (!profiles || profiles.length === 0) {
    await chrome.storage.sync.set({
      profiles: DEFAULT_PROFILES,
      activeProfileId: 'direct'
    });
  }

  // Set initial proxy state
  await applyDirectConnection();
});

// Listen for storage changes
chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace === 'sync' && changes.activeProfileId) {
    const { profiles } = await chrome.storage.sync.get('profiles');
    const activeProfile = profiles.find(p => p.id === changes.activeProfileId.newValue);

    if (activeProfile) {
      await applyProxyProfile(activeProfile);
    }
  }
});

// Handle proxy authentication
chrome.webRequest.onAuthRequired.addListener(
  async (details) => {
    const { activeProfileId } = await chrome.storage.sync.get('activeProfileId');
    const { profiles } = await chrome.storage.sync.get('profiles');
    const activeProfile = profiles.find(p => p.id === activeProfileId);

    if (activeProfile && activeProfile.username && activeProfile.password) {
      return {
        authCredentials: {
          username: activeProfile.username,
          password: activeProfile.password
        }
      };
    }

    return { cancel: false };
  },
  { urls: ['<all_urls>'] },
  ['blocking']
);

/**
 * Apply proxy profile configuration
 */
async function applyProxyProfile(profile) {
  try {
    if (profile.type === 'direct' || !profile.enabled) {
      await applyDirectConnection();
      return;
    }

    const config = {
      mode: 'fixed_servers',
      rules: {
        singleProxy: {
          scheme: getProxyScheme(profile.type),
          host: profile.host,
          port: parseInt(profile.port)
        },
        bypassList: ['localhost', '127.0.0.1', '<local>']
      }
    };

    await chrome.proxy.settings.set({
      value: config,
      scope: 'regular'
    });

    console.log('Proxy applied:', profile.name);
    updateBadge(true);
  } catch (error) {
    console.error('Error applying proxy:', error);
    await applyDirectConnection();
    showNotification('Proxy Error', `Failed to apply proxy: ${error.message}`);
  }
}

/**
 * Apply direct connection (no proxy)
 */
async function applyDirectConnection() {
  try {
    await chrome.proxy.settings.set({
      value: { mode: 'direct' },
      scope: 'regular'
    });

    console.log('Direct connection applied');
    updateBadge(false);
  } catch (error) {
    console.error('Error applying direct connection:', error);
  }
}

/**
 * Get proxy scheme from type
 */
function getProxyScheme(type) {
  const schemeMap = {
    'http': 'http',
    'https': 'https',
    'socks4': 'socks4',
    'socks5': 'socks5'
  };
  return schemeMap[type] || 'http';
}

/**
 * Update extension badge
 */
function updateBadge(isActive) {
  if (isActive) {
    chrome.action.setBadgeText({ text: 'ON' });
    chrome.action.setBadgeBackgroundColor({ color: '#10b981' });
  } else {
    chrome.action.setBadgeText({ text: '' });
  }
}

/**
 * Show notification to user
 */
function showNotification(title, message) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icons/icon128.png',
    title: title,
    message: message
  });
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'testProxy') {
    testProxyConnection(request.profile)
      .then(result => sendResponse(result))
      .catch(error => sendResponse({ success: false, error: error.message }));
    return true; // Keep channel open for async response
  }

  if (request.action === 'getProxyState') {
    chrome.proxy.settings.get({}, (config) => {
      sendResponse({ config });
    });
    return true;
  }
});

/**
 * Test proxy connection
 */
async function testProxyConnection(profile) {
  try {
    // Temporarily apply the proxy
    const config = {
      mode: 'fixed_servers',
      rules: {
        singleProxy: {
          scheme: getProxyScheme(profile.type),
          host: profile.host,
          port: parseInt(profile.port)
        }
      }
    };

    await chrome.proxy.settings.set({
      value: config,
      scope: 'regular'
    });

    // Try to fetch a test URL
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch('https://www.google.com', {
      signal: controller.signal,
      method: 'HEAD'
    });

    clearTimeout(timeoutId);

    // Restore previous proxy settings
    const { activeProfileId, profiles } = await chrome.storage.sync.get(['activeProfileId', 'profiles']);
    const activeProfile = profiles.find(p => p.id === activeProfileId);
    if (activeProfile) {
      await applyProxyProfile(activeProfile);
    }

    return {
      success: response.ok,
      status: response.status,
      message: response.ok ? 'Proxy connection successful' : 'Proxy connection failed'
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: 'Proxy connection failed'
    };
  }
}

/**
 * Keyboard command handler
 */
chrome.commands.onCommand.addListener(async (command) => {
  const { profiles, activeProfileId } = await chrome.storage.sync.get(['profiles', 'activeProfileId']);

  switch (command) {
    case 'toggle-proxy':
      // Toggle between last active proxy and direct connection
      if (activeProfileId === 'direct' && lastActiveProxyId) {
        // Enable last active proxy
        const lastProxy = profiles.find(p => p.id === lastActiveProxyId);
        if (lastProxy) {
          await chrome.storage.sync.set({ activeProfileId: lastActiveProxyId });
          showNotification('Proxy Enabled', `Activated: ${lastProxy.name}`);
        }
      } else {
        // Disable current proxy
        lastActiveProxyId = activeProfileId !== 'direct' ? activeProfileId : lastActiveProxyId;
        await chrome.storage.sync.set({ activeProfileId: 'direct' });
        showNotification('Proxy Disabled', 'Switched to Direct Connection');
      }
      break;

    case 'quick-enable':
      // Enable last active proxy
      if (lastActiveProxyId && lastActiveProxyId !== 'direct') {
        const proxy = profiles.find(p => p.id === lastActiveProxyId);
        if (proxy) {
          await chrome.storage.sync.set({ activeProfileId: lastActiveProxyId });
          showNotification('Proxy Enabled', `Activated: ${proxy.name}`);
        }
      } else {
        // Enable first non-direct proxy
        const firstProxy = profiles.find(p => p.type !== 'direct');
        if (firstProxy) {
          await chrome.storage.sync.set({ activeProfileId: firstProxy.id });
          lastActiveProxyId = firstProxy.id;
          showNotification('Proxy Enabled', `Activated: ${firstProxy.name}`);
        }
      }
      break;

    case 'quick-disable':
      // Disable proxy (direct connection)
      lastActiveProxyId = activeProfileId !== 'direct' ? activeProfileId : lastActiveProxyId;
      await chrome.storage.sync.set({ activeProfileId: 'direct' });
      showNotification('Proxy Disabled', 'Switched to Direct Connection');
      break;
  }
});

// Track last active proxy
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.activeProfileId) {
    const newId = changes.activeProfileId.newValue;
    if (newId && newId !== 'direct') {
      lastActiveProxyId = newId;
    }
  }
});
