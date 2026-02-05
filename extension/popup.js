/**
 * Proxy Inspector - Popup UI Controller
 * Author: Ruturaj
 * Lightweight proxy management with validation
 */

// State
let profiles = [];
let activeProfileId = null;
let editingProfileId = null;

// DOM Elements
const profilesList = document.getElementById('profilesList');
const addProfileBtn = document.getElementById('addProfileBtn');
const profileModal = document.getElementById('profileModal');
const closeModal = document.getElementById('closeModal');
const profileForm = document.getElementById('profileForm');
const requiresAuth = document.getElementById('requiresAuth');
const authFields = document.getElementById('authFields');
const statusBadge = document.getElementById('statusBadge');
const importBtn = document.getElementById('importBtn');
const exportBtn = document.getElementById('exportBtn');
const testProxyBtn = document.getElementById('testProxyBtn');

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await loadProfiles();
    setupEventListeners();
});

/**
 * Load profiles from storage
 */
async function loadProfiles() {
    const data = await chrome.storage.sync.get(['profiles', 'activeProfileId']);
    profiles = data.profiles || [];
    activeProfileId = data.activeProfileId || 'direct';

    renderProfiles();
    updateStatusBadge();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    addProfileBtn.addEventListener('click', () => openModal());
    closeModal.addEventListener('click', () => closeModalDialog());
    profileForm.addEventListener('submit', handleFormSubmit);
    requiresAuth.addEventListener('change', toggleAuthFields);
    importBtn.addEventListener('click', handleImport);
    exportBtn.addEventListener('click', handleExport);
    testProxyBtn.addEventListener('click', handleTestProxy);

    // Close modal on outside click
    profileModal.addEventListener('click', (e) => {
        if (e.target === profileModal) {
            closeModalDialog();
        }
    });
}

/**
 * Render profiles list
 */
function renderProfiles() {
    profilesList.innerHTML = '';

    if (profiles.length === 0) {
        profilesList.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke-width="2"/>
          <line x1="12" y1="8" x2="12" y2="12" stroke-width="2" stroke-linecap="round"/>
          <line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <p>No proxy profiles yet</p>
        <p class="empty-state-hint">Click "Add Profile" to create your first proxy</p>
      </div>
    `;
        return;
    }

    profiles.forEach(profile => {
        const profileCard = createProfileCard(profile);
        profilesList.appendChild(profileCard);
    });
}

/**
 * Create profile card element
 */
function createProfileCard(profile) {
    const isActive = profile.id === activeProfileId;
    const isDirect = profile.type === 'direct';

    const card = document.createElement('div');
    card.className = `profile-card ${isActive ? 'active' : ''}`;
    card.innerHTML = `
    <div class="profile-info">
      <div class="profile-header">
        <h3 class="profile-name">${escapeHtml(profile.name)}</h3>
        ${!isDirect ? `<span class="profile-type">${profile.type.toUpperCase()}</span>` : ''}
      </div>
      ${!isDirect ? `
        <div class="profile-details">
          <span class="profile-host">${escapeHtml(profile.host)}:${profile.port}</span>
          ${profile.username ? '<span class="profile-auth">🔐 Auth</span>' : ''}
        </div>
      ` : '<p class="profile-description">No proxy - direct internet connection</p>'}
    </div>
    
    <div class="profile-actions">
      ${!isDirect ? `
        <button class="icon-btn" data-action="edit" data-id="${profile.id}" title="Edit">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="icon-btn" data-action="delete" data-id="${profile.id}" title="Delete">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="3 6 5 6 21 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      ` : ''}
      <label class="toggle-switch" title="${isActive ? 'Disable' : 'Enable'}">
        <input type="checkbox" ${isActive ? 'checked' : ''} data-action="toggle" data-id="${profile.id}">
        <span class="toggle-slider"></span>
      </label>
    </div>
  `;

    // Add event listeners
    card.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', (e) => handleProfileAction(e, profile));
    });

    return card;
}

/**
 * Handle profile actions
 */
async function handleProfileAction(e, profile) {
    e.stopPropagation(); // Prevent event bubbling
    const action = e.currentTarget.dataset.action;

    switch (action) {
        case 'toggle':
            await toggleProfile(profile.id);
            break;
        case 'edit':
            openModal(profile);
            break;
        case 'delete':
            await deleteProfile(profile.id);
            break;
    }
}

/**
 * Toggle profile active state
 */
async function toggleProfile(profileId) {
    activeProfileId = profileId;
    await chrome.storage.sync.set({ activeProfileId });

    await loadProfiles();
    showToast('Proxy profile activated');
}

/**
 * Delete profile
 */
async function deleteProfile(profileId) {
    if (!confirm('Are you sure you want to delete this profile?')) {
        return;
    }

    profiles = profiles.filter(p => p.id !== profileId);

    // If deleted profile was active, switch to direct
    if (activeProfileId === profileId) {
        activeProfileId = 'direct';
        await chrome.storage.sync.set({ activeProfileId });
    }

    await chrome.storage.sync.set({ profiles });
    await loadProfiles();
    showToast('Profile deleted');
}

/**
 * Open modal for add/edit
 */
function openModal(profile = null) {
    editingProfileId = profile ? profile.id : null;

    document.getElementById('modalTitle').textContent = profile ? 'Edit Proxy Profile' : 'Add Proxy Profile';

    if (profile) {
        document.getElementById('profileName').value = profile.name;
        document.getElementById('proxyType').value = profile.type;
        document.getElementById('proxyHost').value = profile.host;
        document.getElementById('proxyPort').value = profile.port;
        document.getElementById('proxyUsername').value = profile.username || '';
        document.getElementById('proxyPassword').value = profile.password || '';
        requiresAuth.checked = !!(profile.username || profile.password);
        toggleAuthFields();
    } else {
        profileForm.reset();
        authFields.style.display = 'none';
    }

    profileModal.classList.add('show');
}

/**
 * Close modal
 */
function closeModalDialog() {
    profileModal.classList.remove('show');
    profileForm.reset();
    editingProfileId = null;
}

/**
 * Toggle auth fields visibility
 */
function toggleAuthFields() {
    authFields.style.display = requiresAuth.checked ? 'block' : 'none';
}

/**
 * Validate proxy profile data
 */
function validateProfileData(data) {
    const errors = [];

    // Validate name
    if (!data.name || data.name.length < 2) {
        errors.push('Profile name must be at least 2 characters');
    }
    if (data.name.length > 50) {
        errors.push('Profile name must be less than 50 characters');
    }

    // Validate host
    if (!data.host) {
        errors.push('Host is required');
    } else {
        // Check for valid IP or domain format
        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}$/;
        const domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9-_.]*[a-zA-Z0-9]$/;

        if (ipPattern.test(data.host)) {
            // Validate IP address octets
            const octets = data.host.split('.');
            if (octets.some(octet => parseInt(octet) > 255)) {
                errors.push('Invalid IP address (octets must be 0-255)');
            }
        } else if (!domainPattern.test(data.host)) {
            errors.push('Invalid host format (use IP address or domain name)');
        }
    }

    // Validate port
    if (!data.port || isNaN(data.port)) {
        errors.push('Port is required and must be a number');
    } else if (data.port < 1 || data.port > 65535) {
        errors.push('Port must be between 1 and 65535');
    }

    // Validate authentication
    if (data.username && !data.password) {
        errors.push('Password is required when username is provided');
    }

    return errors;
}

/**
 * Handle form submission
 */
async function handleFormSubmit(e) {
    e.preventDefault();

    const profileData = {
        id: editingProfileId || generateId(),
        name: document.getElementById('profileName').value.trim(),
        type: document.getElementById('proxyType').value,
        host: document.getElementById('proxyHost').value.trim(),
        port: parseInt(document.getElementById('proxyPort').value),
        username: requiresAuth.checked ? document.getElementById('proxyUsername').value.trim() : '',
        password: requiresAuth.checked ? document.getElementById('proxyPassword').value : '',
        enabled: false
    };

    // Validate
    const validationErrors = validateProfileData(profileData);
    if (validationErrors.length > 0) {
        showToast(validationErrors[0], 'error');
        return;
    }

    // Check for duplicate names (excluding current profile if editing)
    const duplicateName = profiles.find(p =>
        p.name.toLowerCase() === profileData.name.toLowerCase() &&
        p.id !== editingProfileId
    );
    if (duplicateName) {
        showToast('A profile with this name already exists', 'error');
        return;
    }

    if (editingProfileId) {
        // Update existing profile
        const index = profiles.findIndex(p => p.id === editingProfileId);
        profiles[index] = profileData;
    } else {
        // Add new profile
        profiles.push(profileData);
    }

    await chrome.storage.sync.set({ profiles });
    await loadProfiles();
    closeModalDialog();
    showToast(editingProfileId ? 'Profile updated' : 'Profile added');
}

/**
 * Handle import
 */
async function handleImport() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const text = await file.text();
            const importedProfiles = JSON.parse(text);

            if (!Array.isArray(importedProfiles)) {
                throw new Error('Invalid format');
            }

            // Merge with existing profiles (avoid duplicates)
            const existingIds = new Set(profiles.map(p => p.id));
            const newProfiles = importedProfiles.filter(p => !existingIds.has(p.id));

            profiles = [...profiles, ...newProfiles];
            await chrome.storage.sync.set({ profiles });
            await loadProfiles();
            showToast(`Imported ${newProfiles.length} profiles`);
        } catch (error) {
            showToast('Failed to import profiles', 'error');
            console.error(error);
        }
    };

    input.click();
}

/**
 * Handle export
 */
function handleExport() {
    const exportData = profiles.filter(p => p.type !== 'direct');
    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `proxy-profiles-${Date.now()}.json`;
    a.click();

    URL.revokeObjectURL(url);
    showToast('Profiles exported');
}

/**
 * Handle test proxy
 */
async function handleTestProxy() {
    const profileData = {
        type: document.getElementById('proxyType').value,
        host: document.getElementById('proxyHost').value.trim(),
        port: parseInt(document.getElementById('proxyPort').value),
        username: requiresAuth.checked ? document.getElementById('proxyUsername').value.trim() : '',
        password: requiresAuth.checked ? document.getElementById('proxyPassword').value : ''
    };

    if (!profileData.host || !profileData.port) {
        showToast('Please enter host and port', 'error');
        return;
    }

    testProxyBtn.disabled = true;
    testProxyBtn.textContent = 'Testing...';

    try {
        const response = await chrome.runtime.sendMessage({
            action: 'testProxy',
            profile: profileData
        });

        if (response.success) {
            showToast('✓ Proxy connection successful', 'success');
        } else {
            showToast('✗ Proxy connection failed', 'error');
        }
    } catch (error) {
        showToast('✗ Test failed: ' + error.message, 'error');
    } finally {
        testProxyBtn.disabled = false;
        testProxyBtn.textContent = 'Test Connection';
    }
}

/**
 * Update status badge
 */
function updateStatusBadge() {
    const activeProfile = profiles.find(p => p.id === activeProfileId);

    if (activeProfile) {
        const isDirect = activeProfile.type === 'direct';
        statusBadge.className = `status-badge ${isDirect ? 'status-direct' : 'status-active'}`;
        statusBadge.querySelector('.status-text').textContent = activeProfile.name;
    }
}

/**
 * Show toast notification
 */
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');

    toast.className = `toast toast-${type} show`;
    toastMessage.textContent = message;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Generate unique ID
 */
function generateId() {
    return `proxy_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
