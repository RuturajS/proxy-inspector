# Proxy Inspector - Usage Guide

## Table of Contents
- [Getting Started](#getting-started)
- [Managing Proxy Profiles](#managing-proxy-profiles)
- [Switching Proxies](#switching-proxies)
- [Import & Export](#import--export)
- [Testing Connections](#testing-connections)
- [Advanced Configuration](#advanced-configuration)

---

## Getting Started

### First Launch
When you first install Proxy Inspector, you'll see:
- A "Direct Connection" profile (default)
- An empty profiles list
- The status badge showing "Direct Connection"

### Adding Your First Proxy

1. **Click the extension icon** in your browser toolbar
2. **Click "Add Profile"** button
3. **Fill in the form**:
   - **Profile Name**: A friendly name (e.g., "Work Proxy")
   - **Proxy Type**: Select HTTP, HTTPS, SOCKS4, or SOCKS5
   - **Host**: The proxy server address (e.g., `proxy.company.com` or `192.168.1.100`)
   - **Port**: The proxy port number (e.g., `8080`)
4. **Optional: Add Authentication**
   - Check "Requires Authentication"
   - Enter username and password
5. **Click "Save Profile"**

---

## Managing Proxy Profiles

### Editing a Profile
1. Find the profile in the list
2. Click the **edit icon** (pencil)
3. Modify the details
4. Click "Save Profile"

### Deleting a Profile
1. Find the profile in the list
2. Click the **delete icon** (trash)
3. Confirm the deletion

**Note**: The "Direct Connection" profile cannot be deleted.

### Profile Information Display
Each profile card shows:
- **Profile name** (bold)
- **Proxy type** (badge)
- **Host and port** (monospace font)
- **Authentication status** (🔐 icon if enabled)
- **Toggle switch** (to activate/deactivate)

---

## Switching Proxies

### Activating a Proxy
1. Find the desired proxy profile
2. **Toggle the switch** to ON
3. The status badge will turn **green**
4. Badge text will show the active profile name

### Deactivating a Proxy
**Option 1**: Toggle off the current proxy
- Click the toggle switch of the active profile
- Automatically switches to "Direct Connection"

**Option 2**: Switch to Direct Connection
- Toggle ON the "Direct Connection" profile
- Any active proxy will be disabled

### Visual Indicators
- **Green badge** = Proxy is active
- **Gray badge** = Direct connection (no proxy)
- **Pulsing dot** = Connection status indicator

---

## Import & Export

### Exporting Profiles

**Use Case**: Backup your profiles or share with team members

1. Click the **"Export"** button at the bottom
2. A JSON file will be downloaded
3. Filename format: `proxy-profiles-[timestamp].json`

**Example Export File**:
```json
[
  {
    "id": "proxy_1234567890_abc123",
    "name": "Office Proxy",
    "type": "http",
    "host": "proxy.company.com",
    "port": 8080,
    "username": "user",
    "password": "pass",
    "enabled": false
  }
]
```

### Importing Profiles

**Use Case**: Restore from backup or import shared configurations

1. Click the **"Import"** button
2. Select a previously exported JSON file
3. Profiles will be **merged** with existing ones
4. Duplicate IDs are automatically skipped
5. A toast notification shows how many profiles were imported

**Important Notes**:
- Import does NOT overwrite existing profiles
- Profiles with duplicate IDs are skipped
- Invalid JSON files will show an error

---

## Testing Connections

### Why Test?
- Verify proxy is reachable before activating
- Check authentication credentials
- Diagnose connection issues

### How to Test

1. **Open Add/Edit Profile modal**
2. **Enter proxy details**
3. **Click "Test Connection"**
4. **Wait 5 seconds** (timeout)
5. **View result**:
   - ✓ Green toast = Success
   - ✗ Red toast = Failed

### Test Process
The extension:
1. Temporarily applies the proxy configuration
2. Attempts to connect to `https://www.google.com`
3. Restores your previous proxy settings
4. Shows the result

**Note**: Testing does NOT save the profile. You must still click "Save Profile" after testing.

---

## Advanced Configuration

### Proxy Types Explained

#### HTTP Proxy
- **Protocol**: HTTP
- **Use Case**: Web browsing, API testing
- **Encryption**: No (traffic is not encrypted)
- **Example**: Corporate web filters

#### HTTPS Proxy
- **Protocol**: HTTPS
- **Use Case**: Secure web traffic
- **Encryption**: Yes (SSL/TLS)
- **Example**: Secure corporate proxies

#### SOCKS4 Proxy
- **Protocol**: SOCKS version 4
- **Use Case**: Legacy applications
- **Features**: TCP only, no authentication
- **Example**: Older proxy servers

#### SOCKS5 Proxy
- **Protocol**: SOCKS version 5
- **Use Case**: Modern applications
- **Features**: TCP + UDP, authentication support
- **Example**: SSH tunnels, VPN alternatives

### Authentication

**When to use**:
- Corporate proxies requiring login
- Paid proxy services
- Secure proxy servers

**How it works**:
1. Browser detects proxy requires authentication
2. Extension automatically provides credentials
3. Connection proceeds without user intervention

**Security**:
- Credentials stored in Chrome's encrypted storage
- Never transmitted to external servers
- Only sent to the configured proxy server

### Bypass List

The extension automatically bypasses proxy for:
- `localhost` - Local machine
- `127.0.0.1` - Loopback address
- `<local>` - Local network addresses

**Why?**
- Prevents proxy loops
- Ensures local development works
- Improves performance for local resources

---

## Keyboard Shortcuts

Currently, Proxy Inspector does not support keyboard shortcuts. This feature may be added in a future release.

To request this feature, please [open an issue](https://github.com/yourusername/proxy-inspector/issues).

---

## Best Practices

### Profile Naming
- Use descriptive names: "Office Proxy", "Home VPN", "Test Server"
- Avoid generic names: "Proxy 1", "Proxy 2"
- Include location if relevant: "US East Proxy", "EU Proxy"

### Security
- **Never share** profiles with passwords in public
- Use **Export** feature for personal backups only
- **Delete** unused profiles to reduce attack surface
- **Test** proxies before sharing with team

### Performance
- **Disable** proxy when not needed (use Direct Connection)
- **Delete** old/unused profiles
- **Test** proxies regularly to ensure they're still working

### Troubleshooting
- If a proxy stops working, **test the connection**
- Check if proxy server is still running
- Verify credentials haven't changed
- Try switching to Direct Connection and back

---

## Common Workflows

### Workflow 1: Daily Development
1. Start browser with Direct Connection
2. When testing behind proxy, toggle ON "Office Proxy"
3. Test application
4. Toggle OFF when done

### Workflow 2: Security Testing
1. Add Burp Suite proxy (127.0.0.1:8080)
2. Toggle ON when intercepting traffic
3. Analyze requests in Burp
4. Toggle OFF when done

### Workflow 3: Team Collaboration
1. Export your proxy profiles
2. Share JSON file with team (via secure channel)
3. Team members import the file
4. Everyone uses the same proxy configurations

---

## Tips & Tricks

### Quick Testing
- Use "Test Connection" before activating a new proxy
- Saves time debugging connection issues

### Profile Organization
- Create separate profiles for different environments
- Example: "Dev Proxy", "Staging Proxy", "Prod Proxy"

### Backup Regularly
- Export profiles monthly
- Store backups in secure location
- Helps recover from accidental deletions

### Monitor Status Badge
- Green = Proxy active (check if intentional)
- Gray = Direct connection (normal browsing)
- Prevents forgetting an active proxy

---

## Next Steps

- Read the [FAQ](faq.md) for common questions
- Check the [main README](../README.md) for installation
- Report issues on [GitHub](https://github.com/yourusername/proxy-inspector/issues)

---

**Need help?** Open an issue or start a discussion on GitHub!
