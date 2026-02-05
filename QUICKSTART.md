# Quick Start Guide

Get Proxy Inspector up and running in 5 minutes!

---

## 📦 Installation (2 minutes)

### Step 1: Download the Extension
```bash
git clone https://github.com/yourusername/proxy-inspector.git
cd proxy-inspector
```

### Step 2: Load in Chrome
1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Navigate to and select the `extension` folder
5. ✅ Extension installed!

### Step 3: Pin the Extension
1. Click the **puzzle icon** 🧩 in the browser toolbar
2. Find **Proxy Inspector**
3. Click the **pin icon** 📌
4. Now you can access it with one click!

---

## 🚀 First Use (3 minutes)

### Add Your First Proxy

1. **Click the Proxy Inspector icon** in your toolbar
   
2. **Click "Add Profile"** button

3. **Fill in the form**:
   ```
   Profile Name: My Test Proxy
   Proxy Type: HTTP
   Host: 127.0.0.1
   Port: 8080
   ```

4. **Optional**: Check "Requires Authentication" if needed
   - Enter username
   - Enter password

5. **Click "Save Profile"**

### Activate the Proxy

1. Find your new profile in the list
2. **Toggle the switch to ON**
3. Status badge turns **green** ✅
4. You're now using the proxy!

### Disable the Proxy

1. **Toggle the switch to OFF**
   - OR -
2. **Toggle ON "Direct Connection"**

---

## 🎯 Common Use Cases

### For Developers

**Testing with Local Proxy**:
```
Name: Local Dev Proxy
Type: HTTP
Host: localhost
Port: 8080
```

**Corporate Proxy**:
```
Name: Office Proxy
Type: HTTP
Host: proxy.company.com
Port: 8080
✓ Requires Authentication
Username: your-username
Password: your-password
```

### For Security Testing

**Burp Suite**:
```
Name: Burp Suite
Type: HTTP
Host: 127.0.0.1
Port: 8080
```

**OWASP ZAP**:
```
Name: OWASP ZAP
Type: HTTP
Host: 127.0.0.1
Port: 8080
```

### For QA Testers

**Staging Proxy**:
```
Name: Staging Environment
Type: HTTPS
Host: staging-proxy.company.com
Port: 443
```

---

## 💡 Pro Tips

### Test Before Activating
1. In the Add/Edit modal, click **"Test Connection"**
2. Wait for result (✓ success or ✗ failed)
3. Fix any issues before saving

### Backup Your Profiles
1. Click **"Export"** at the bottom
2. Save the JSON file somewhere safe
3. Import later if needed

### Quick Switching
- Keep multiple profiles saved
- Toggle between them instantly
- No page reload needed!

### Visual Indicators
- **Green badge** = Proxy is active
- **Gray badge** = Direct connection
- **Profile card highlighted** = Currently active

---

## 🔧 Troubleshooting

### Extension Not Loading?
- Check Chrome version (need 109+)
- Look for errors in `chrome://extensions/`
- Try reloading the extension

### Proxy Not Working?
1. Verify host and port are correct
2. Check if proxy server is running
3. Try "Test Connection" feature
4. Check authentication credentials

### Can't Access Internet?
1. Toggle to "Direct Connection"
2. Or disable the extension temporarily
3. Extension auto-falls back on errors

---

## 📚 Next Steps

- Read the [Full Documentation](../README.md)
- Check out the [Usage Guide](docs/usage.md)
- Browse the [FAQ](docs/faq.md)
- Report issues on [GitHub](https://github.com/yourusername/proxy-inspector/issues)

---

## ✅ Checklist

- [ ] Extension installed and pinned
- [ ] First proxy profile created
- [ ] Tested proxy activation/deactivation
- [ ] Explored import/export features
- [ ] Read the documentation

---

**You're all set!** Start managing your proxies like a pro! 🎉

**Questions?** Check the [FAQ](docs/faq.md) or [open an issue](https://github.com/yourusername/proxy-inspector/issues).
