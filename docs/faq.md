# Frequently Asked Questions (FAQ)

## General Questions

### What is Proxy Inspector?
Proxy Inspector is a browser extension that allows you to manage and switch between multiple proxy configurations with one click. It's designed for developers, QA testers, and security researchers who need to frequently change proxy settings.

### Which browsers are supported?
- Google Chrome (version 109+)
- Microsoft Edge (version 109+)
- Brave Browser (version 109+)
- Any Chromium-based browser with Manifest V3 support

### Is it free?
Yes! Proxy Inspector is completely free and open-source under the MIT License.

### Does it collect my data?
No. Proxy Inspector:
- Does NOT collect any browsing data
- Does NOT send data to external servers
- Stores all data locally in your browser
- Is fully open-source for transparency

---

## Installation & Setup

### How do I install the extension?
See the [Installation Guide](../README.md#installation) in the main README.

### Why do I need to enable Developer Mode?
Currently, the extension is not published to the Chrome Web Store. Developer Mode allows you to load unpacked extensions from source code.

### Can I install it from the Chrome Web Store?
Not yet, but we're working on it! The extension will be published to the Chrome Web Store soon.

### Do I need to configure anything after installation?
No. The extension works out of the box with a default "Direct Connection" profile. Simply add your proxy profiles and start using it.

---

## Proxy Configuration

### What proxy types are supported?
- HTTP
- HTTPS
- SOCKS4
- SOCKS5

### Can I use multiple proxies at once?
No. Only one proxy profile can be active at a time. However, you can quickly switch between profiles.

### How do I find my proxy settings?
Ask your network administrator or proxy service provider for:
- Proxy type (HTTP, HTTPS, SOCKS4, SOCKS5)
- Host address (e.g., `proxy.company.com` or `192.168.1.100`)
- Port number (e.g., `8080`)
- Username and password (if authentication is required)

### What's the difference between HTTP and SOCKS proxies?
- **HTTP/HTTPS**: Designed for web traffic, works at the application layer
- **SOCKS4/5**: More versatile, works at a lower network layer, supports more protocols
- **SOCKS5**: Adds authentication and UDP support over SOCKS4

### Can I use a VPN instead of a proxy?
This extension is specifically for proxy configuration, not VPNs. However, some VPN services provide SOCKS5 proxy endpoints that you can configure.

---

## Authentication

### My proxy requires authentication. How do I set it up?
1. When adding/editing a profile, check "Requires Authentication"
2. Enter your username and password
3. Save the profile
4. The extension will automatically provide credentials when needed

### Is my password stored securely?
Yes. Passwords are stored using Chrome's `chrome.storage.sync` API, which encrypts data and syncs it across your devices (if you're signed into Chrome).

### Can I use proxies without authentication?
Yes. Simply leave the "Requires Authentication" checkbox unchecked.

### What if my proxy uses IP-based authentication?
IP-based authentication works automatically. You don't need to enter credentials in the extension.

---

## Usage & Features

### How do I switch proxies?
Click the extension icon, then toggle the switch next to the desired proxy profile. See the [Usage Guide](usage.md#switching-proxies) for details.

### Do I need to reload pages after switching proxies?
No. The proxy change takes effect immediately for new connections. However, existing page connections may still use the old proxy until they reconnect.

### Can I test a proxy before activating it?
Yes! When adding/editing a profile, click "Test Connection" to verify the proxy works before saving.

### How do I disable all proxies?
Toggle ON the "Direct Connection" profile, or toggle OFF any active proxy profile.

### Can I import/export proxy configurations?
Yes. Use the Import/Export buttons at the bottom of the popup. This is useful for:
- Backing up your profiles
- Sharing configurations with team members
- Migrating to a new browser/computer

---

## Troubleshooting

### The proxy isn't working. What should I do?
1. **Verify proxy details**: Check host, port, and credentials
2. **Test the connection**: Use the "Test Connection" button
3. **Check proxy server**: Ensure it's running and accessible
4. **Try Direct Connection**: Toggle to Direct Connection, then back to the proxy
5. **Check browser console**: Open DevTools and look for errors

### I'm locked out of the internet!
Don't worry. You can:
1. **Disable the extension**: Go to `chrome://extensions/` and toggle off Proxy Inspector
2. **Switch to Direct Connection**: Open the popup and toggle ON "Direct Connection"
3. **The extension auto-fails to Direct**: If a proxy fails, it automatically falls back

### Authentication keeps failing
- Double-check username and password (case-sensitive)
- Verify the proxy server accepts your credentials
- Check if the proxy has IP restrictions
- Try without authentication first to isolate the issue

### The extension icon doesn't show
- Check if the extension is enabled in `chrome://extensions/`
- Pin the extension: Click the puzzle icon → Find Proxy Inspector → Click pin icon
- Reload the extension

### Profiles aren't saving
- Check browser storage permissions
- Ensure you're not in Incognito mode (unless you've enabled the extension for Incognito)
- Try exporting profiles to verify storage works

### Import isn't working
- Verify the JSON file is valid (use a JSON validator)
- Check file format matches the export format
- Ensure the file isn't corrupted

---

## Performance & Limitations

### Does the extension slow down my browser?
No. The extension is lightweight and only activates when you interact with it. Proxy configuration is handled natively by Chrome.

### How many profiles can I save?
Chrome's storage limit is approximately 100KB for `chrome.storage.sync`. This allows for hundreds of proxy profiles.

### Can I use this extension on mobile?
No. Chrome extensions are not supported on mobile browsers.

### Does it work in Incognito mode?
By default, no. To enable:
1. Go to `chrome://extensions/`
2. Find Proxy Inspector
3. Click "Details"
4. Enable "Allow in Incognito"

---

## Privacy & Security

### Is my browsing data tracked?
No. The extension does not track, collect, or transmit any browsing data.

### Are my proxy credentials safe?
Yes. Credentials are:
- Stored using Chrome's encrypted storage API
- Never sent to external servers
- Only transmitted to your configured proxy server

### Can others see my proxy settings?
Only if you share your exported JSON file. Keep backups secure and never share files containing passwords publicly.

### Is the code auditable?
Yes! The entire codebase is open-source on GitHub. You can review every line of code.

---

## Advanced Usage

### Can I set per-domain proxy rules?
Not currently. This feature may be added in a future release. For now, the extension applies the proxy globally.

### Can I use PAC (Proxy Auto-Config) files?
Not currently. The extension uses fixed proxy configurations. PAC file support may be added in the future.

### Can I automate proxy switching?
Not directly. However, you could use Chrome's extension messaging API to build automation scripts.

### Can I use this with Burp Suite / OWASP ZAP?
Yes! These tools typically run on `127.0.0.1:8080`. Create a profile:
- Type: HTTP
- Host: `127.0.0.1`
- Port: `8080`
- No authentication needed

### Can I chain proxies?
No. The extension only supports a single proxy at a time. Proxy chaining would need to be configured at the proxy server level.

---

## Development & Contributing

### How can I contribute?
See the [Contributing Guide](../README.md#contributing) in the main README.

### I found a bug. Where do I report it?
Open an issue on [GitHub Issues](https://github.com/yourusername/proxy-inspector/issues).

### Can I request a feature?
Yes! Open a feature request on [GitHub Issues](https://github.com/yourusername/proxy-inspector/issues).

### How do I build from source?
No build process needed! Simply:
1. Clone the repository
2. Load the `extension` folder in Chrome
3. Start using it

### What technologies are used?
- Manifest V3
- Vanilla JavaScript (ES6+)
- Chrome Extension APIs (proxy, storage, webRequest)
- No external dependencies

---

## Comparison with Other Tools

### How is this different from FoxyProxy?
Proxy Inspector is:
- Built with Manifest V3 (modern Chrome standard)
- Lightweight and minimal
- Open-source with MIT license
- Focused on simplicity and speed

### How is this different from browser proxy settings?
Browser settings require:
- Multiple clicks to change
- Manual entry each time
- No profile management
- No quick switching

Proxy Inspector provides:
- One-click switching
- Profile management
- Import/export
- Connection testing

---

## Future Features

### What features are planned?
- Per-domain proxy rules
- PAC file support
- Temporary proxy timers
- Keyboard shortcuts
- Chrome Web Store publication

### How can I stay updated?
- Star the [GitHub repository](https://github.com/yourusername/proxy-inspector)
- Watch for releases
- Follow the project discussions

---

## Still Have Questions?

- **GitHub Issues**: [Report bugs or request features](https://github.com/yourusername/proxy-inspector/issues)
- **GitHub Discussions**: [Ask questions or share ideas](https://github.com/yourusername/proxy-inspector/discussions)
- **Email**: support@example.com

---

**Last Updated**: February 2026
