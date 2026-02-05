# 🚀 Installation & Testing Guide

## Quick Installation (5 minutes)

### Step 1: Verify Files
Ensure you have the complete extension structure:
```
extension/
├── background.js
├── popup.html
├── popup.js
├── styles.css
├── manifest.json
└── icons/
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

### Step 2: Load Extension in Chrome

1. **Open Chrome Extensions Page**
   - Type `chrome://extensions/` in the address bar
   - Or: Menu → More Tools → Extensions

2. **Enable Developer Mode**
   - Toggle the switch in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked"
   - Navigate to: `C:\Users\rutur\OneDrive\Desktop\Ai-Projects\Proxy-inspector\proxy-inspector\extension`
   - Click "Select Folder"

4. **Verify Installation**
   - You should see "Proxy Inspector" in your extensions list
   - Status should be "Enabled"
   - No errors should appear

5. **Pin the Extension**
   - Click the puzzle icon 🧩 in Chrome toolbar
   - Find "Proxy Inspector"
   - Click the pin icon 📌

---

## Testing the Extension

### Test 1: Basic Functionality

1. **Click the extension icon**
   - Should open a popup with dark theme
   - Should show "Direct Connection" profile
   - Status badge should be gray

2. **Add a test proxy**
   - Click "Add Profile"
   - Fill in:
     ```
     Name: Test Proxy
     Type: HTTP
     Host: 127.0.0.1
     Port: 8080
     ```
   - Click "Save Profile"

3. **Verify profile appears**
   - Should see "Test Proxy" card
   - Should show host:port (127.0.0.1:8080)
   - Toggle switch should be OFF

### Test 2: Proxy Activation

1. **Toggle the proxy ON**
   - Click the toggle switch
   - Status badge should turn GREEN
   - Badge text should show "Test Proxy"
   - Extension badge should show "ON"

2. **Check Chrome proxy settings**
   - Go to `chrome://settings/system`
   - Click "Open your computer's proxy settings"
   - Should show proxy is configured

3. **Toggle the proxy OFF**
   - Click toggle switch again
   - Status badge should turn GRAY
   - Badge text should show "Direct Connection"

### Test 3: Import/Export

1. **Export profiles**
   - Click "Export" button
   - Should download a JSON file
   - Open file to verify format

2. **Import profiles**
   - Click "Import" button
   - Select the exported JSON file
   - Should show success message

### Test 4: Connection Testing

1. **Open Add Profile modal**
2. **Enter proxy details**
3. **Click "Test Connection"**
4. **Verify result**
   - Should show success or failure message
   - Button should return to normal state

---

## Testing with Real Proxy

### Option 1: Local Proxy (Burp Suite / OWASP ZAP)

1. **Install Burp Suite Community Edition**
   - Download from: https://portswigger.net/burp/communitydownload
   - Install and run
   - Default proxy: 127.0.0.1:8080

2. **Configure in Proxy Inspector**
   ```
   Name: Burp Suite
   Type: HTTP
   Host: 127.0.0.1
   Port: 8080
   ```

3. **Activate and test**
   - Toggle ON
   - Visit any website
   - Should see traffic in Burp Suite

### Option 2: Free Public Proxy

**⚠️ Warning**: Public proxies are not secure. Use only for testing.

1. **Find a free proxy**
   - Visit: https://www.freeproxy.world/
   - Copy host and port

2. **Add to Proxy Inspector**
   ```
   Name: Public Test Proxy
   Type: HTTP
   Host: [from website]
   Port: [from website]
   ```

3. **Test connection**
   - Click "Test Connection"
   - If successful, activate

### Option 3: Corporate Proxy

If you have access to a corporate proxy:

1. **Get proxy details from IT**
   - Host, port, type
   - Username/password if required

2. **Add to Proxy Inspector**
   ```
   Name: Office Proxy
   Type: HTTP/HTTPS
   Host: proxy.company.com
   Port: 8080
   ✓ Requires Authentication
   Username: your-username
   Password: your-password
   ```

3. **Activate and verify**
   - Toggle ON
   - Visit internal resources
   - Should work seamlessly

---

## Verifying Proxy is Working

### Method 1: IP Check Website

1. **Without proxy**:
   - Visit: https://whatismyipaddress.com/
   - Note your IP address

2. **With proxy**:
   - Activate proxy in Proxy Inspector
   - Refresh the website
   - IP should change to proxy's IP

### Method 2: Test Page

1. **Open test page**
   - Navigate to: `file:///C:/Users/rutur/OneDrive/Desktop/Ai-Projects/Proxy-inspector/proxy-inspector/test-page.html`
   - Or double-click `test-page.html` in File Explorer

2. **Check connection info**
   - Should show your current IP
   - Should display connection status

3. **Activate proxy and refresh**
   - Toggle proxy ON in extension
   - Click "Refresh Connection Info" on test page
   - IP should change

### Method 3: Browser DevTools

1. **Open DevTools** (F12)
2. **Go to Network tab**
3. **Visit any website**
4. **Check request headers**
   - Should see proxy-related headers
   - Connection should route through proxy

---

## Troubleshooting

### Extension Not Loading

**Problem**: Extension doesn't appear in `chrome://extensions/`

**Solutions**:
- Verify you selected the `extension` folder (not the root folder)
- Check for errors in the extensions page
- Ensure all files are present
- Try reloading the extension

### Popup Not Opening

**Problem**: Clicking icon does nothing

**Solutions**:
- Check browser console for errors (F12)
- Reload the extension
- Verify `popup.html` exists
- Check manifest.json syntax

### Proxy Not Working

**Problem**: Proxy activated but not routing traffic

**Solutions**:
- Verify proxy server is running
- Check host and port are correct
- Test connection using the built-in tester
- Check browser console for errors
- Try a different proxy

### Authentication Failing

**Problem**: Proxy requires auth but keeps prompting

**Solutions**:
- Double-check username/password
- Ensure "Requires Authentication" is checked
- Verify proxy supports username/password auth
- Check if proxy has IP restrictions

### Can't Access Internet

**Problem**: No internet access after activating proxy

**Solutions**:
- Toggle to "Direct Connection"
- Or disable the extension
- Verify proxy server is accessible
- Check firewall settings

---

## Performance Verification

### Memory Usage
1. Open `chrome://extensions/`
2. Click "Details" on Proxy Inspector
3. Click "Inspect views: service worker"
4. Check memory usage (should be < 10 MB)

### Load Time
- Extension should load instantly
- Popup should open in < 100ms
- Proxy switching should be immediate

### No Errors
- Check browser console (F12)
- Should have no errors or warnings
- Service worker should be running

---

## Next Steps After Installation

1. ✅ **Read the documentation**
   - [README.md](README.md)
   - [QUICKSTART.md](QUICKSTART.md)
   - [docs/usage.md](docs/usage.md)

2. ✅ **Add your proxy profiles**
   - Corporate proxies
   - Development proxies
   - Testing proxies

3. ✅ **Export as backup**
   - Click "Export"
   - Save JSON file securely

4. ✅ **Test thoroughly**
   - Activate/deactivate
   - Switch between profiles
   - Verify authentication

5. ✅ **Share feedback**
   - Report bugs on GitHub
   - Suggest features
   - Contribute improvements

---

## Chrome Web Store Submission (Future)

When ready to publish:

1. **Create promotional materials**
   - Screenshots (1280x800)
   - Promotional images
   - Demo video (optional)

2. **Prepare store listing**
   - See [docs/compliance.md](docs/compliance.md)
   - Write compelling description
   - Set up privacy policy

3. **Package extension**
   ```bash
   cd extension
   zip -r proxy-inspector.zip *
   ```

4. **Submit for review**
   - Go to Chrome Web Store Developer Dashboard
   - Upload ZIP file
   - Fill in listing details
   - Submit for review

---

## Support

- **Documentation**: See `/docs` folder
- **Issues**: https://github.com/yourusername/proxy-inspector/issues
- **Discussions**: https://github.com/yourusername/proxy-inspector/discussions

---

**Congratulations!** 🎉 You now have a fully functional proxy switching extension!
