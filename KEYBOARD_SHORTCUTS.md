# Keyboard Shortcuts Guide

## Quick Access Shortcuts

Proxy Inspector now supports keyboard shortcuts for lightning-fast proxy management!

---

## Available Shortcuts

### Toggle Proxy (Ctrl+Shift+P / Cmd+Shift+P)
**Description**: Toggle between your last active proxy and direct connection

**How it works**:
- If proxy is OFF → Enables last active proxy
- If proxy is ON → Disables proxy (direct connection)

**Use case**: Quick on/off switching without opening the popup

---

### Quick Enable (Ctrl+Shift+E / Cmd+Shift+E)
**Description**: Instantly enable your last used proxy

**How it works**:
- Activates the last proxy you used
- If no previous proxy, activates the first available proxy

**Use case**: Fast proxy activation when you need it

---

### Quick Disable (Ctrl+Shift+D / Cmd+Shift+D)
**Description**: Instantly disable all proxies (direct connection)

**How it works**:
- Switches to direct connection
- Remembers your last proxy for quick re-enable

**Use case**: Quickly disable proxy without opening popup

---

## Keyboard Shortcut Reference

| Action | Windows/Linux | Mac | Description |
|--------|---------------|-----|-------------|
| **Toggle Proxy** | `Ctrl+Shift+P` | `Cmd+Shift+P` | Toggle last proxy on/off |
| **Quick Enable** | `Ctrl+Shift+E` | `Cmd+Shift+E` | Enable last proxy |
| **Quick Disable** | `Ctrl+Shift+D` | `Cmd+Shift+D` | Disable (direct) |

---

## Customizing Shortcuts

### Change Keyboard Shortcuts

1. **Open Chrome Extensions**
   - Go to `chrome://extensions/`

2. **Open Shortcuts Settings**
   - Click the menu icon (☰) in top-left
   - Select "Keyboard shortcuts"

3. **Find Proxy Inspector**
   - Scroll to "Proxy Inspector"
   - Click the pencil icon next to any command

4. **Set Your Custom Shortcut**
   - Press your desired key combination
   - Click "OK"

### Recommended Shortcuts

**For Power Users**:
```
Toggle: Ctrl+Alt+P
Enable: Ctrl+Alt+E
Disable: Ctrl+Alt+D
```

**For Developers**:
```
Toggle: Ctrl+Shift+X
Enable: Ctrl+Shift+Z
Disable: Ctrl+Shift+C
```

**For Security Researchers**:
```
Toggle: F9
Enable: F10
Disable: F11
```

---

## Usage Examples

### Example 1: Quick Testing Workflow

1. **Start browsing** (direct connection)
2. **Press `Ctrl+Shift+E`** → Proxy enabled
3. **Test your app** behind proxy
4. **Press `Ctrl+Shift+D`** → Proxy disabled
5. **Continue browsing** normally

### Example 2: Toggle During Development

1. **Working on local app** (direct connection)
2. **Need to test with proxy** → `Ctrl+Shift+P`
3. **Proxy enabled**, test features
4. **Done testing** → `Ctrl+Shift+P` again
5. **Back to direct connection**

### Example 3: Security Testing

1. **Start Burp Suite** (listening on 8080)
2. **Press `Ctrl+Shift+E`** → Traffic routes through Burp
3. **Analyze requests** in Burp Suite
4. **Press `Ctrl+Shift+D`** → Stop intercepting
5. **Normal browsing** resumes

---

## Tips & Tricks

### Tip 1: Muscle Memory
Practice the shortcuts a few times to build muscle memory:
- `Ctrl+Shift+P` → Toggle
- `Ctrl+Shift+E` → Enable
- `Ctrl+Shift+D` → Disable

### Tip 2: Visual Feedback
Watch the extension badge:
- **"ON"** badge = Proxy active
- **No badge** = Direct connection

### Tip 3: Notification Alerts
Keyboard shortcuts show notifications:
- "Proxy Enabled: [Profile Name]"
- "Proxy Disabled: Direct Connection"

### Tip 4: Last Active Memory
The extension remembers your last active proxy:
- Switch to direct → Last proxy remembered
- Press enable → Last proxy activated
- No need to select from list!

---

## Troubleshooting

### Shortcuts Not Working?

**Check 1: Shortcuts Enabled**
- Go to `chrome://extensions/shortcuts`
- Verify Proxy Inspector shortcuts are set
- Re-assign if needed

**Check 2: Conflicting Shortcuts**
- Another extension might use the same shortcut
- Chrome will show a warning
- Change one of the conflicting shortcuts

**Check 3: Extension Enabled**
- Verify extension is enabled in `chrome://extensions/`
- Reload the extension if needed

### No Proxy to Enable?

**Problem**: Pressing `Ctrl+Shift+E` does nothing

**Solution**:
- You need at least one proxy profile
- Open popup and add a proxy
- Try the shortcut again

### Wrong Proxy Activated?

**Problem**: Shortcut enables wrong proxy

**Solution**:
- Shortcuts use the **last active** proxy
- Manually activate the desired proxy once
- Now shortcuts will use that proxy

---

## Advanced Usage

### Workflow Integration

**VS Code + Proxy Inspector**:
```
1. Coding in VS Code
2. Need to test API through proxy
3. Alt+Tab to browser
4. Ctrl+Shift+E (enable proxy)
5. Test API
6. Ctrl+Shift+D (disable)
7. Alt+Tab back to VS Code
```

**Burp Suite + Proxy Inspector**:
```
1. Start Burp Suite
2. Browser: Ctrl+Shift+E
3. Browse target site
4. Analyze in Burp
5. Done: Ctrl+Shift+D
```

**Multi-Environment Testing**:
```
1. Test on dev (direct)
2. Ctrl+Shift+E (staging proxy)
3. Test staging
4. Manually switch to prod proxy
5. Test prod
6. Ctrl+Shift+D (back to direct)
```

---

## Comparison: Before vs After

### Before (Without Shortcuts)
1. Click extension icon
2. Find profile in list
3. Click toggle switch
4. Close popup
5. **Total: 4 clicks, ~3 seconds**

### After (With Shortcuts)
1. Press `Ctrl+Shift+E`
2. **Total: 1 keypress, <1 second**

**Time saved**: ~2 seconds per toggle × 50 toggles/day = **100 seconds/day saved!**

---

## Accessibility

### For Users with Disabilities

**Keyboard-Only Navigation**:
- All features accessible via keyboard
- No mouse required for proxy switching
- Tab navigation in popup still available

**Screen Reader Support**:
- Notifications are announced
- Extension badge provides visual feedback
- Popup UI is screen-reader friendly

---

## FAQ

**Q: Can I disable keyboard shortcuts?**
A: Yes, go to `chrome://extensions/shortcuts` and clear the shortcuts for Proxy Inspector.

**Q: Do shortcuts work when popup is closed?**
A: Yes! Shortcuts work globally, even when popup is closed.

**Q: Can I use function keys (F1-F12)?**
A: Yes, you can customize shortcuts to use function keys.

**Q: Do shortcuts work in Incognito mode?**
A: Only if you've enabled the extension in Incognito mode.

**Q: What if I forget the shortcuts?**
A: Open the popup and hover over buttons for tooltips, or check this guide!

---

## Summary

| Feature | Benefit |
|---------|---------|
| **3 Shortcuts** | Toggle, Enable, Disable |
| **Cross-Platform** | Windows, Mac, Linux |
| **Customizable** | Change to your preference |
| **Fast** | <1 second activation |
| **Global** | Works without popup |
| **Memory** | Remembers last proxy |

---

**Master these shortcuts and become a proxy-switching ninja!** 🥷

**Questions?** Check the [main README](README.md) or [FAQ](docs/faq.md).
