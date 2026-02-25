# Contributing to Video Conferencing App

First off, thank you for considering contributing to Video Conferencing App! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** explaining why this would be useful
- **Possible implementation** if you have ideas

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code, add tests if applicable
3. Ensure your code follows the existing style
4. Make sure your code lints without errors
5. Update documentation as needed
6. Write a clear commit message

## 🛠️ Development Setup

### Prerequisites

- Node.js (v14+)
- MongoDB (v4.4+)
- npm or yarn
- Agora Account

### Setup Steps

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Video-Conferencing-App.git
   cd Video-Conferencing-App
   ```

2. **Install server dependencies**
   ```bash
   cd code/server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd code/client
   npm install
   ```

4. **Configure environment variables**
   ```bash
   # Server
   cd code/server
   cp .env.example .env
   # Edit .env with your values

   # Client
   cd code/client/src
   cp AgoraSetup.example.js AgoraSetup.js
   cp AgoraRTMSetup.example.js AgoraRTMSetup.js
   # Edit with your Agora credentials
   ```

5. **Start MongoDB**
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```

6. **Run the development servers**
   ```bash
   # Terminal 1 - Server
   cd code/server
   npx nodemon index.js

   # Terminal 2 - Client
   cd code/client
   npm start
   ```

## 🔄 Pull Request Process

1. **Update your fork**
   ```bash
   git checkout main
   git pull upstream main
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update tests if applicable

4. **Test your changes**
   ```bash
   # Run client tests
   cd code/client
   npm test

   # Test server manually
   cd code/server
   npm start
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Link any related issues

## 📝 Coding Standards

### JavaScript/React

- Use **ES6+** syntax
- Use **functional components** with hooks
- Follow **React best practices**
- Use **meaningful variable names**
- Add **PropTypes** for components
- Keep components **small and focused**

### Code Style

```javascript
// ✅ Good
const getUserName = (user) => {
  return user?.name || 'Anonymous';
};

// ❌ Bad
const gun = (u) => u?.n || 'Anonymous';
```

### File Structure

- **Components**: PascalCase (e.g., `VideoPlayer.jsx`)
- **Utilities**: camelCase (e.g., `socketHelper.js`)
- **Constants**: UPPER_SNAKE_CASE
- **CSS**: match component names

### Comments

```javascript
// ✅ Good - Explains WHY
// Using setTimeout to prevent race condition with socket connection
setTimeout(() => initializeCall(), 100);

// ❌ Bad - Explains WHAT (obvious from code)
// Call the initialize call function after 100 milliseconds
setTimeout(() => initializeCall(), 100);
```

## 📬 Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, missing semicolons, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(chat): add emoji support to chat messages

fix(auth): resolve token expiration issue

docs(readme): update installation instructions

refactor(video): simplify video player component

perf(socket): optimize socket event handlers

test(auth): add unit tests for login controller
```

## 🧪 Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Test in multiple browsers if UI changes
- Test responsive design on mobile devices

## 📚 Documentation

- Update README.md for new features
- Add JSDoc comments for functions
- Update API documentation if backend changes
- Include screenshots for UI changes

## 🐛 Debugging Tips

### Common Issues

1. **Socket connection fails**
   - Check if server is running
   - Verify CORS settings
   - Check firewall settings

2. **Agora initialization fails**
   - Verify App ID is correct
   - Check token expiration
   - Ensure proper permissions

3. **MongoDB connection fails**
   - Verify MongoDB is running
   - Check connection string
   - Verify database permissions

## 💡 Feature Ideas

Looking for contribution ideas? Check out:

- [ ] Add virtual backgrounds
- [ ] Implement waiting room feature
- [ ] Add meeting scheduling
- [ ] Create mobile app
- [ ] Add end-to-end encryption
- [ ] Implement breakout rooms
- [ ] Add meeting analytics
- [ ] Create admin dashboard

## 📞 Getting Help

- 📧 Email: sabarish.edu2024@gmail.com
- 💼 LinkedIn: [Sabarish R](https://www.linkedin.com/in/sabarishr08)
- 🐛 GitHub Issues: Use for bugs and features

## 🙏 Thank You!

Your contributions make this project better for everyone. Thank you for taking the time to contribute!

---

**Happy Coding!** 💻✨
