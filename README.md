# AI Code Review Automator 🤖

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/garyconan1224/ai-code-review-automator?style=social)](https://github.com/garyconan1224/ai-code-review-automator)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)

An AI-powered automated code review tool that helps open-source maintainers and development teams automate code reviews, improve code quality, and reduce manual review workload.

## ✨ Features

- **AI-Powered Code Analysis**: Uses advanced AI models to analyze code changes
- **GitHub/GitLab Integration**: Seamlessly integrates with popular Git platforms
- **Customizable Rules**: Configure review criteria based on your project standards
- **Security Scanning**: Detects potential security vulnerabilities in code
- **Performance Suggestions**: Recommends performance improvements
- **CI/CD Ready**: Easy integration with GitHub Actions, GitLab CI, and other CI/CD pipelines
- **Multi-language Support**: Works with JavaScript, TypeScript, Python, Java, Go, and more

## 🚀 Use Cases

- **Open Source Maintainers**: Automate initial code reviews for pull requests
- **Development Teams**: Enforce coding standards and best practices
- **Code Quality Gates**: Prevent low-quality code from merging
- **Learning Tool**: Help developers learn best practices through AI feedback
- **Security Auditing**: Early detection of security issues

## 📦 Installation

```bash
npm install ai-code-review-automator
# or
yarn add ai-code-review-automator
# or
pnpm add ai-code-review-automator
```

## 🔧 Quick Start

1. **Set up environment variables:**
```bash
export OPENAI_API_KEY=your_openai_api_key
export GITHUB_TOKEN=your_github_token
```

2. **Basic usage in Node.js:**
```javascript
import { CodeReviewAutomator } from 'ai-code-review-automator';

const reviewer = new CodeReviewAutomator({
  openaiApiKey: process.env.OPENAI_API_KEY,
  githubToken: process.env.GITHUB_TOKEN,
});

const review = await reviewer.analyzePullRequest('owner/repo', 123);
console.log(review);
```

3. **GitHub Actions integration:**
```yaml
name: AI Code Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: garyconan1224/ai-code-review-automator@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

## 📁 Project Structure

```
ai-code-review-automator/
├── src/
│   ├── index.ts          # Main entry point
│   ├── analyzers/        # Code analysis modules
│   ├── integrations/     # GitHub/GitLab integrations
│   ├── utils/           # Utility functions
│   └── types/           # TypeScript type definitions
├── tests/               # Test files
├── examples/            # Usage examples
├── docs/                # Documentation
└── .github/             # GitHub workflows and templates
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/garyconan1224/ai-code-review-automator.git
cd ai-code-review-automator

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run linting
npm run lint
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Roadmap

- [ ] Support for more AI providers (Anthropic, Google AI, etc.)
- [ ] Advanced security vulnerability detection
- [ ] Performance benchmarking integration
- [ ] VS Code/IntelliJ IDE extensions
- [ ] Custom model training for specific codebases
- [ ] Code smell detection and refactoring suggestions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for the Codex/ChatGPT API
- GitHub for the extensive API and platform support
- The open-source community for inspiration and best practices

## 📬 Contact

Gary Conan - asd123wsx123@gmail.com

Project Link: [https://github.com/garyconan1224/ai-code-review-automator](https://github.com/garyconan1224/ai-code-review-automator)
