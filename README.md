# Proxy Inspector

<p align="center">
  <img src="extension/icons/icon128.png" alt="Proxy Inspector Logo" width="128" height="128">
</p>

<p align="center">
  <strong>One-Click Proxy Switcher for Chrome, Edge & Brave</strong>
</p>

<p align="center">
  A lightweight, secure, open-source browser extension for managing and switching proxy configurations instantly.
</p>

---

## ✨ Features

### 🚀 Core Functionality
- **One-Click Proxy Switching** - Enable/disable proxies instantly from the popup
- **Multiple Proxy Profiles** - Save and manage unlimited proxy configurations
- **Proxy Type Support** - HTTP, HTTPS, SOCKS4, and SOCKS5
- **Authentication** - Secure username/password support for authenticated proxies
- **Visual Status Indicator** - Clear badge showing active proxy state
- **Auto Fallback** - Graceful fallback to direct connection on errors

### 🎨 User Experience
- **Modern UI** - Beautiful, premium dark theme with smooth animations
- **Instant Switching** - No page reload required
- **Profile Management** - Easy add, edit, and delete operations
- **Connection Testing** - Test proxy connectivity before activation
- **Import/Export** - Backup and share proxy configurations (JSON format)

### 🔒 Security & Privacy
- **Secure Storage** - Credentials stored using Chrome's encrypted storage API
- **No External Servers** - All processing happens locally
- **No Data Collection** - Zero browsing data tracking
- **Open Source** - Fully transparent codebase

---

## 📦 Installation

### From Source (Developer Mode)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/proxy-inspector.git
   cd proxy-inspector
   ```

2. **Load the extension in Chrome/Edge/Brave**
   - Open `chrome://extensions/` (or `edge://extensions/`)
   - Enable **Developer mode** (toggle in top-right corner)
   - Click **Load unpacked**
   - Select the `extension` folder from this repository

3. **Pin the extension**
   - Click the puzzle icon in the browser toolbar
   - Find "Proxy Inspector" and click the pin icon

### From Chrome Web Store
> Coming soon! Extension will be published to the Chrome Web Store.

---

## 🎯 Usage

### Quick Start

1. **Click the extension icon** in your browser toolbar
2. **Add a proxy profile**:
   - Click "Add Profile"
   - Enter proxy details (name, type, host, port)
   - Optionally add authentication credentials
   - Click "Save Profile"

3. **Activate a proxy**:
   - Toggle the switch next to any profile
   - The status badge will turn green when active

4. **Disable proxy**:
   - Toggle off the active profile
   - Or switch to "Direct Connection"

### Proxy Profile Schema

```json
{
  "id": "proxy_1234567890_abc123",
  "name": "Office Proxy",
  "type": "http",
  "host": "proxy.company.com",
  "port": 8080,
  "username": "myuser",
  "password": "mypass",
  "enabled": false
}
```

### Import/Export Profiles

**Export:**
1. Click the "Export" button at the bottom
2. Save the JSON file to your computer

**Import:**
1. Click the "Import" button
2. Select a previously exported JSON file
3. Profiles will be merged with existing ones

---

## 🛠️ Advanced Features

### Test Proxy Connection
Before activating a proxy, you can test its connectivity:
1. Open the Add/Edit profile modal
2. Enter proxy details
3. Click "Test Connection"
4. Wait for the result (success/failure)

### Proxy Types Explained

| Type | Description | Use Case |
|------|-------------|----------|
| **HTTP** | Standard HTTP proxy | Web browsing, API testing |
| **HTTPS** | Encrypted HTTP proxy | Secure web traffic |
| **SOCKS4** | SOCKS version 4 | Legacy applications |
| **SOCKS5** | SOCKS version 5 | Modern apps, supports UDP |

### Bypass List
The extension automatically bypasses proxy for:
- `localhost`
- `127.0.0.1`
- `<local>` (local network addresses)

---

## 🏗️ Project Structure

```
proxy-inspector/
├── extension/
│   ├── background.js       # Service worker (proxy logic)
│   ├── popup.html          # Extension popup UI
│   ├── popup.js            # UI controller
│   ├── styles.css          # Premium styling
│   ├── manifest.json       # Extension configuration
│   └── icons/              # Extension icons
│       ├── icon16.png
│       ├── icon32.png
│       ├── icon48.png
│       └── icon128.png
├── docs/
│   ├── usage.md            # Detailed usage guide
│   └── faq.md              # Frequently asked questions
├── README.md               # This file
└── LICENSE                 # MIT License
```

---

## 🔧 Development

### Prerequisites
- Chrome/Edge/Brave browser (version 109+)
- Basic knowledge of JavaScript and Chrome Extension APIs

### Chrome APIs Used
- `chrome.proxy` - Proxy configuration management
- `chrome.storage.sync` - Synchronized storage for profiles
- `chrome.runtime` - Background script messaging
- `chrome.webRequest` - Network request handling
- `chrome.webRequestAuthProvider` - Proxy authentication

### Building from Source
No build process required! This is a pure JavaScript extension.

### Testing
1. Load the extension in developer mode
2. Open the popup and add a test proxy
3. Check the browser console for any errors
4. Test proxy switching and authentication

---

## 🐛 Troubleshooting

### Common Issues

**Proxy not working:**
- Verify host and port are correct
- Check if proxy requires authentication
- Test the proxy connection using the "Test Connection" button
- Ensure the proxy server is running and accessible

**Authentication failing:**
- Double-check username and password
- Some proxies may have IP restrictions
- Try without authentication first to isolate the issue

**Extension not loading:**
- Ensure you're using Chrome 109 or later
- Check for errors in `chrome://extensions/`
- Reload the extension

**Browser lockout:**
- The extension automatically falls back to direct connection on errors
- You can always disable the extension from `chrome://extensions/`

---

## 📚 Documentation

- **[Usage Guide](docs/usage.md)** - Detailed usage instructions
- **[FAQ](docs/faq.md)** - Frequently asked questions
- **[Chrome Web Store Compliance](docs/compliance.md)** - Publishing guidelines

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Test thoroughly before submitting
- Update documentation as needed
- Keep commits atomic and well-described

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by [FoxyProxy](https://getfoxyproxy.org/) and similar tools
- Built with modern Chrome Extension Manifest V3
- Icons designed for clarity and recognition

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/proxy-inspector/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/proxy-inspector/discussions)
- **Email**: support@example.com

---

## 🎯 Use Cases

### For Developers
- Test applications behind corporate proxies
- Debug API requests through proxy servers
- Switch between development/staging/production proxies

### For QA Testers
- Test geo-restricted features
- Validate proxy-based authentication
- Simulate different network conditions

### For Security Researchers
- Analyze network traffic through intercepting proxies (Burp Suite, OWASP ZAP)
- Test application behavior with different proxy configurations
- Audit security policies

### For Privacy-Conscious Users
- Route traffic through privacy-focused proxies
- Bypass regional restrictions
- Maintain multiple proxy profiles for different purposes

---

<p align="center">
  Made with ❤️ by the open-source community
</p>

<p align="center">
  <a href="https://github.com/yourusername/proxy-inspector/stargazers">⭐ Star this repo</a> •
  <a href="https://github.com/yourusername/proxy-inspector/issues">🐛 Report Bug</a> •
  <a href="https://github.com/yourusername/proxy-inspector/issues">💡 Request Feature</a>
</p>