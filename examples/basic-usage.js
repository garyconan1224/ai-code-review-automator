// Basic usage example for AI Code Review Automator
const { CodeAnalyzer } = require('ai-code-review-automator');

async function main() {
  const analyzer = new CodeAnalyzer({
    checkSecurity: true,
    checkCodeQuality: true,
    checkBestPractices: true,
  });

  const code = `
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}
  `;

  const result = await analyzer.analyze(code, 'javascript');
  
  console.log('Code Review Results:');
  console.log('====================');
  console.log(`Score: ${result.summary.score}/100`);
  console.log(`Passed: ${result.summary.passed ? '✅ Yes' : '❌ No'}`);
  
  if (result.issues.length > 0) {
    console.log('\nIssues found:');
    result.issues.forEach((issue, i) => {
      console.log(`${i + 1}. ${issue}`);
    });
  }
  
  if (result.suggestions.length > 0) {
    console.log('\nSuggestions for improvement:');
    result.suggestions.forEach((suggestion, i) => {
      console.log(`${i + 1}. ${suggestion}`);
    });
  }
}

main().catch(console.error);
