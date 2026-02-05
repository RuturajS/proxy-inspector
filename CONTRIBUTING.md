# Contributing to Proxy Inspector

Thank you for considering contributing to Proxy Inspector! We welcome contributions from the community.

## Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior
- Be respectful and considerate
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Publishing others' private information
- Any conduct that would be inappropriate in a professional setting

---

## How Can I Contribute?

### Reporting Bugs
Found a bug? Please help us fix it!

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser version and OS
   - Screenshots (if applicable)

### Suggesting Features
Have an idea for improvement?

1. **Check existing feature requests** to avoid duplicates
2. **Create a new issue** with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach (optional)

### Improving Documentation
Documentation improvements are always welcome!

- Fix typos or unclear explanations
- Add examples or use cases
- Improve README or guides
- Translate documentation (future)

### Writing Code
Ready to contribute code?

1. **Find an issue** to work on (or create one)
2. **Comment on the issue** to let others know you're working on it
3. **Fork the repository**
4. **Create a feature branch**
5. **Write your code**
6. **Test thoroughly**
7. **Submit a pull request**

---

## Development Setup

### Prerequisites
- Chrome/Edge/Brave browser (version 109+)
- Git
- Text editor (VS Code recommended)

### Getting Started

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/proxy-inspector.git
   cd proxy-inspector
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Load the extension**
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `extension` folder

5. **Make your changes**
   - Edit files in the `extension` folder
   - Reload the extension to see changes

6. **Test your changes**
   - Test all affected features
   - Check browser console for errors
   - Test on multiple browsers if possible

---

## Coding Standards

### JavaScript Style

**Use modern ES6+ syntax**:
```javascript
// Good
const profiles = await chrome.storage.sync.get('profiles');
const activeProfile = profiles.find(p => p.id === activeId);

// Avoid
var profiles = chrome.storage.sync.get('profiles', function(data) {
  var activeProfile = null;
  for (var i = 0; i < data.profiles.length; i++) {
    if (data.profiles[i].id === activeId) {
      activeProfile = data.profiles[i];
    }
  }
});
```

**Use descriptive variable names**:
```javascript
// Good
const activeProfileId = 'proxy_123';
const isAuthenticationRequired = true;

// Avoid
const id = 'proxy_123';
const auth = true;
```

**Add comments for complex logic**:
```javascript
// Good
/**
 * Apply proxy profile configuration
 * Falls back to direct connection on error
 */
async function applyProxyProfile(profile) {
  // Implementation
}

// Avoid
async function applyProxyProfile(profile) {
  // No comments for complex logic
}
```

### HTML/CSS Style

**Use semantic HTML**:
```html
<!-- Good -->
<header class="header">
  <h1 class="title">Proxy Inspector</h1>
</header>

<!-- Avoid -->
<div class="header">
  <div class="title">Proxy Inspector</div>
</div>
```

**Use CSS variables**:
```css
/* Good */
.button {
  background: var(--accent-primary);
  color: var(--text-primary);
}

/* Avoid */
.button {
  background: #3b82f6;
  color: #e8eaed;
}
```

### File Organization

**Keep files focused**:
- `background.js` - Service worker logic only
- `popup.js` - UI controller only
- `styles.css` - Styles only

**Use clear function names**:
```javascript
// Good
async function loadProfiles() { }
async function saveProfile(profile) { }
async function deleteProfile(profileId) { }

// Avoid
async function load() { }
async function save(p) { }
async function del(id) { }
```

---

## Submitting Changes

### Pull Request Process

1. **Update documentation** if needed
   - README.md
   - docs/usage.md
   - Code comments

2. **Test thoroughly**
   - All features work as expected
   - No console errors
   - No regressions

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add feature: one-line description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

### Commit Message Guidelines

**Format**:
```
<type>: <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples**:
```
feat: Add connection testing feature

Implement proxy connection testing before activation.
Users can now verify proxy connectivity in the add/edit modal.

Closes #42
```

```
fix: Resolve authentication loop issue

Fix infinite authentication prompt when credentials are incorrect.
Now shows error message and falls back to direct connection.

Fixes #38
```

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Edge
- [ ] Tested on Brave
- [ ] No console errors
- [ ] All features work

## Checklist
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No breaking changes
- [ ] Commit messages are clear

## Related Issues
Closes #issue_number
```

---

## Reporting Bugs

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- Browser: Chrome/Edge/Brave
- Version: 120.0.0
- OS: Windows/Mac/Linux
- Extension Version: 1.0.0

## Additional Context
Any other relevant information
```

---

## Suggesting Features

### Feature Request Template

```markdown
## Feature Description
Clear description of the feature

## Use Case
Why is this feature needed?

## Proposed Solution
How could this be implemented?

## Alternatives Considered
Other approaches you've thought about

## Additional Context
Mockups, examples, etc.
```

---

## Code Review Process

### What We Look For
- **Functionality**: Does it work as intended?
- **Code Quality**: Is it clean and maintainable?
- **Performance**: Is it efficient?
- **Security**: Are there any vulnerabilities?
- **Documentation**: Is it well-documented?

### Review Timeline
- Initial review: Within 3-5 days
- Follow-up reviews: Within 1-2 days
- Merge: After approval from maintainers

---

## Recognition

### Contributors
All contributors will be:
- Listed in the project README
- Credited in release notes
- Thanked in the community

### Maintainers
Active contributors may be invited to become maintainers with:
- Commit access
- Issue triage permissions
- Pull request review rights

---

## Questions?

- **GitHub Discussions**: Ask questions or discuss ideas
- **GitHub Issues**: Report bugs or request features
- **Email**: contact@example.com

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Proxy Inspector!** 🎉
