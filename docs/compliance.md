# Chrome Web Store Compliance Guide

## Overview
This document outlines the requirements and best practices for publishing Proxy Inspector to the Chrome Web Store.

---

## Manifest V3 Compliance

### ✅ Current Status
Proxy Inspector is built with **Manifest V3**, which is required for all new Chrome extensions.

**Key V3 Features Used**:
- Service Worker instead of background pages
- `chrome.proxy` API for proxy management
- `chrome.storage.sync` for data persistence
- Declarative permissions model

---

## Required Permissions

### Declared Permissions
```json
{
  "permissions": [
    "proxy",
    "storage",
    "webRequest",
    "webRequestAuthProvider"
  ],
  "host_permissions": [
    "<all_urls>"
  ]
}
```

### Permission Justifications

| Permission | Justification |
|------------|---------------|
| `proxy` | **Required** to configure and manage proxy settings |
| `storage` | **Required** to save user's proxy profiles |
| `webRequest` | **Required** to handle proxy authentication |
| `webRequestAuthProvider` | **Required** to provide credentials to authenticated proxies |
| `<all_urls>` | **Required** for proxy to work on all websites |

**Note**: All permissions are essential for core functionality. No optional permissions are used.

---

## Privacy Policy

### Data Collection
**Proxy Inspector does NOT collect any data.**

**Privacy Statement**:
```
Proxy Inspector Privacy Policy

Last Updated: February 2026

Data Collection:
- We do NOT collect any personal information
- We do NOT track browsing history
- We do NOT send data to external servers

Data Storage:
- All proxy configurations are stored locally in your browser
- Data is encrypted using Chrome's storage API
- Data syncs across your devices if you're signed into Chrome

Third-Party Services:
- We do NOT use any third-party analytics
- We do NOT use any third-party tracking services

Contact:
For privacy questions, email: privacy@example.com
```

### Required Privacy Policy URL
Before publishing, host this privacy policy at a public URL (e.g., GitHub Pages, your website).

---

## Store Listing Requirements

### Extension Name
**Proxy Inspector**

### Short Description (132 characters max)
"One-click proxy switcher for Chrome. Manage multiple proxy profiles and switch instantly. Perfect for developers and testers."

### Detailed Description
```
Proxy Inspector is a lightweight, secure browser extension for managing and switching proxy configurations with one click.

🚀 KEY FEATURES
• One-click proxy switching - Enable/disable proxies instantly
• Multiple proxy profiles - Save unlimited configurations
• All proxy types - HTTP, HTTPS, SOCKS4, SOCKS5
• Secure authentication - Username/password support
• Connection testing - Verify proxies before activation
• Import/Export - Backup and share configurations

🎯 PERFECT FOR
• Developers testing behind corporate proxies
• QA testers validating geo-restricted features
• Security researchers analyzing network traffic
• Privacy-conscious users routing through proxies

🔒 PRIVACY & SECURITY
• No data collection - Zero tracking
• Local storage only - No external servers
• Encrypted credentials - Chrome's secure storage
• Open source - Fully transparent code

💡 HOW IT WORKS
1. Add proxy profiles with host, port, and credentials
2. Toggle any profile ON to activate
3. Switch between profiles instantly
4. No page reload required

📦 SUPPORTED PROXY TYPES
• HTTP - Standard web proxies
• HTTPS - Encrypted proxies
• SOCKS4 - Legacy protocol support
• SOCKS5 - Modern protocol with UDP

🛠️ ADVANCED FEATURES
• Test proxy connectivity before activation
• Import/Export profiles as JSON
• Visual status indicators
• Auto-fallback to direct connection on errors

Open source on GitHub: https://github.com/yourusername/proxy-inspector
```

### Category
**Developer Tools**

### Language
**English**

---

## Screenshots

### Required Screenshots (1280x800 or 640x400)

**Screenshot 1: Main Popup**
- Show the extension popup with multiple proxy profiles
- Highlight the clean UI and toggle switches
- Caption: "Manage multiple proxy profiles with one click"

**Screenshot 2: Add Profile Modal**
- Show the add/edit profile form
- Highlight proxy types and authentication
- Caption: "Easy configuration for all proxy types"

**Screenshot 3: Active Proxy**
- Show an active proxy with green status badge
- Highlight the visual indicators
- Caption: "Clear visual feedback for active proxies"

**Screenshot 4: Import/Export**
- Show the import/export functionality
- Caption: "Backup and share proxy configurations"

**Screenshot 5: Connection Testing**
- Show the test connection feature
- Caption: "Test proxies before activation"

### Promotional Images

**Small Tile (440x280)**
- Extension icon + "Proxy Inspector" text
- Tagline: "One-Click Proxy Switching"

**Large Tile (920x680)**
- Extension icon + feature highlights
- "Manage Proxies Like a Pro"

**Marquee (1400x560)**
- Full feature showcase
- "The Ultimate Proxy Manager for Chrome"

---

## Icon Requirements

### Required Sizes
- ✅ 16x16 - Browser toolbar
- ✅ 32x32 - Extension management
- ✅ 48x48 - Extension management
- ✅ 128x128 - Chrome Web Store

**Format**: PNG with transparency

**Design**: Shield with network node symbol, blue gradient

---

## Code Quality Requirements

### Security
- ✅ No `eval()` or inline scripts
- ✅ Content Security Policy compliant
- ✅ No remote code execution
- ✅ Secure credential storage

### Performance
- ✅ Lightweight (< 100KB total)
- ✅ No memory leaks
- ✅ Efficient background script
- ✅ Fast UI rendering

### Best Practices
- ✅ Modern JavaScript (ES6+)
- ✅ Error handling
- ✅ User-friendly error messages
- ✅ Graceful degradation

---

## Pre-Submission Checklist

### Code
- [ ] All features tested and working
- [ ] No console errors or warnings
- [ ] Code is minified (optional but recommended)
- [ ] No hardcoded credentials or API keys

### Documentation
- [ ] README.md is complete
- [ ] Usage guide is clear
- [ ] FAQ covers common issues
- [ ] Privacy policy is hosted publicly

### Store Listing
- [ ] Extension name is unique
- [ ] Description is compelling and accurate
- [ ] Screenshots are high-quality
- [ ] Icons are all sizes (16, 32, 48, 128)
- [ ] Category is correct (Developer Tools)

### Legal
- [ ] License file is included (MIT)
- [ ] Privacy policy URL is set
- [ ] Terms of service (if applicable)
- [ ] Copyright notices are correct

### Testing
- [ ] Tested on Chrome (latest)
- [ ] Tested on Edge (latest)
- [ ] Tested on Brave (latest)
- [ ] No browser lockout scenarios
- [ ] Graceful error handling

---

## Submission Process

### 1. Create Developer Account
- Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- Pay one-time $5 registration fee
- Verify your email

### 2. Prepare Extension Package
```bash
cd extension
zip -r proxy-inspector.zip *
```

**Package Contents**:
- manifest.json
- background.js
- popup.html
- popup.js
- styles.css
- icons/ (all sizes)

### 3. Upload to Dashboard
- Click "New Item"
- Upload `proxy-inspector.zip`
- Fill in store listing details
- Upload screenshots and icons
- Set privacy policy URL
- Submit for review

### 4. Review Process
- **Timeline**: 1-3 business days (typically)
- **Possible Outcomes**:
  - ✅ Approved - Extension goes live
  - ⚠️ Needs Changes - Address feedback and resubmit
  - ❌ Rejected - Fix issues and resubmit

### 5. Post-Publication
- Monitor reviews and ratings
- Respond to user feedback
- Release updates as needed
- Track installation metrics

---

## Update Process

### For Minor Updates (Bug Fixes)
1. Fix the issue in code
2. Increment version in `manifest.json` (e.g., 1.0.0 → 1.0.1)
3. Create new zip package
4. Upload to dashboard
5. Submit for review

### For Major Updates (New Features)
1. Develop and test new features
2. Update documentation
3. Increment version (e.g., 1.0.0 → 1.1.0)
4. Update screenshots if UI changed
5. Create new zip package
6. Upload to dashboard
7. Submit for review

---

## Common Rejection Reasons

### Permission Issues
- **Problem**: Requesting unnecessary permissions
- **Solution**: Only request essential permissions, provide justifications

### Privacy Policy
- **Problem**: Missing or inadequate privacy policy
- **Solution**: Host a clear, comprehensive privacy policy

### Misleading Functionality
- **Problem**: Description doesn't match actual features
- **Solution**: Ensure store listing accurately describes the extension

### Code Quality
- **Problem**: Bugs, crashes, or poor performance
- **Solution**: Thoroughly test before submission

### Trademark Issues
- **Problem**: Using trademarked names without permission
- **Solution**: Use original branding (Proxy Inspector, not "FoxyProxy Clone")

---

## Monetization (Future)

### Current Status
**Free and open-source**

### Potential Future Options
- **Freemium**: Basic features free, advanced features paid
- **Donations**: Accept voluntary contributions
- **Premium Support**: Offer paid support for enterprises

**Note**: Any monetization must comply with Chrome Web Store policies.

---

## Support & Maintenance

### User Support Channels
- GitHub Issues (bug reports)
- GitHub Discussions (questions)
- Email support (optional)

### Maintenance Plan
- Monitor user reviews weekly
- Respond to issues within 48 hours
- Release updates quarterly (or as needed)
- Keep dependencies up to date

---

## Resources

- [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome Web Store Policies](https://developer.chrome.com/docs/webstore/program-policies/)

---

**Ready to publish?** Follow the checklist above and submit to the Chrome Web Store!
