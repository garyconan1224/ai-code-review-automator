import { CodeAnalyzer } from '../src/analyzer';

describe('CodeAnalyzer', () => {
  let analyzer: CodeAnalyzer;

  beforeEach(() => {
    analyzer = new CodeAnalyzer();
  });

  test('should create analyzer instance', () => {
    expect(analyzer).toBeInstanceOf(CodeAnalyzer);
  });

  test('should analyze code and return result', async () => {
    const code = 'const x = 1;';
    const result = await analyzer.analyze(code, 'javascript');
    
    expect(result).toHaveProperty('issues');
    expect(result).toHaveProperty('suggestions');
    expect(result).toHaveProperty('securityWarnings');
    expect(result).toHaveProperty('summary');
  });
});
