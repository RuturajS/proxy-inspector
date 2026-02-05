# Changelog

All notable changes to Proxy Inspector will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned Features
- Per-domain proxy rules
- PAC (Proxy Auto-Config) file support
- Temporary proxy timer (auto-disable after X minutes)
- Keyboard shortcuts for quick switching
- Proxy usage statistics
- Dark/Light theme toggle
- Chrome Web Store publication

---

## [1.0.0] - 2026-02-05

### Added
- **Core Features**
  - One-click proxy switching
  - Multiple proxy profile management
  - Support for HTTP, HTTPS, SOCKS4, SOCKS5 proxies
  - Proxy authentication (username/password)
  - Visual status indicators (badge and UI)
  - Auto-fallback to direct connection on errors

- **User Interface**
  - Modern, premium dark theme
  - Smooth animations and transitions
  - Profile cards with toggle switches
  - Add/Edit profile modal
  - Empty state messaging
  - Toast notifications

- **Profile Management**
  - Add new proxy profiles
  - Edit existing profiles
  - Delete profiles
  - Direct connection profile (default)

- **Import/Export**
  - Export profiles to JSON
  - Import profiles from JSON
  - Merge imported profiles with existing ones

- **Connection Testing**
  - Test proxy connectivity before activation
  - 5-second timeout for tests
  - Success/failure feedback
  - Automatic restoration of previous settings

- **Security & Privacy**
  - Secure credential storage using Chrome's encrypted storage
  - No external server communication
  - No browsing data collection
  - Open-source codebase

- **Documentation**
  - Comprehensive README with installation and usage
  - Detailed usage guide
  - FAQ with common questions and troubleshooting
  - Chrome Web Store compliance guide
  - Contributing guidelines

- **Developer Experience**
  - Manifest V3 compliance
  - Service Worker background script
  - Modern ES6+ JavaScript
  - Clean, maintainable code structure
  - Inline code documentation

### Technical Details
- **Manifest Version**: 3
- **Minimum Chrome Version**: 109
- **Permissions**: proxy, storage, webRequest, webRequestAuthProvider
- **APIs Used**: chrome.proxy, chrome.storage.sync, chrome.runtime, chrome.webRequest

### Known Limitations
- No per-domain proxy rules (global proxy only)
- No PAC file support
- No keyboard shortcuts
- Not yet published to Chrome Web Store

---

## Version History

### Version Numbering
- **Major (X.0.0)**: Breaking changes or major new features
- **Minor (1.X.0)**: New features, backward compatible
- **Patch (1.0.X)**: Bug fixes, backward compatible

### Release Schedule
- **Patch releases**: As needed for critical bugs
- **Minor releases**: Quarterly or when significant features are ready
- **Major releases**: Annually or for breaking changes

---

## How to Update

### For Users
1. Chrome extensions auto-update by default
2. Or manually: `chrome://extensions/` → Click "Update"

### For Developers
1. Pull latest changes: `git pull origin main`
2. Reload extension: `chrome://extensions/` → Click reload icon

---

## Upgrade Notes

### From Future Versions
Upgrade notes will be added here when new versions are released.

---

## Links
- [GitHub Repository](https://github.com/yourusername/proxy-inspector)
- [Issue Tracker](https://github.com/yourusername/proxy-inspector/issues)
- [Releases](https://github.com/yourusername/proxy-inspector/releases)

---

**Note**: This is the initial release. Future updates will be documented here.
