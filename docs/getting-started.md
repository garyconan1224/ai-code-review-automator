# Getting Started with AI Code Review Automator

## Overview

AI Code Review Automator is a tool designed to help open-source maintainers and development teams automate their code review process using AI.

## Prerequisites

- Node.js 14 or higher
- GitHub account (for GitHub integration)
- OpenAI API key (for AI analysis)

## Installation

### Global Installation (CLI)
```bash
npm install -g ai-code-review-automator
# or
yarn global add ai-code-review-automator
```

### Project Installation
```bash
npm install ai-code-review-automator --save-dev
# or
yarn add ai-code-review-automator --dev
```

## Configuration

### Environment Variables
```bash
export OPENAI_API_KEY=your_openai_api_key_here
export GITHUB_TOKEN=your_github_personal_access_token_here
```

### Configuration File
Create a `code-review-config.yaml` file:

```yaml
rules:
  security: true
  code-quality: true
  best-practices: true

ai:
  provider: openai
  model: gpt-4

github:
  org: your-org
  repos: [your-repo]
```

## Basic Usage

### CLI Usage
```bash
# Review a local file
ai-review analyze ./src/myfile.js

# Review a GitHub pull request
ai-review github pr owner/repo 123

# Review a GitLab merge request
ai-review gitlab mr owner/repo 456
```

### Programmatic Usage
```javascript
const { CodeAnalyzer } = require('ai-code-review-automator');

const analyzer = new CodeAnalyzer();
const result = await analyzer.analyze(code, 'javascript');
```

## GitHub Actions Integration

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

## Advanced Configuration

See [Configuration Guide](configuration.md) for advanced options.
