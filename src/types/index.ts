export interface CodeReviewConfig {
  checkSecurity: boolean;
  checkPerformance: boolean;
  checkCodeQuality: boolean;
  checkBestPractices: boolean;
  aiProvider?: 'openai' | 'anthropic' | 'google';
  customRules?: CustomRule[];
}

export interface CustomRule {
  name: string;
  pattern: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
}

export interface CodeAnalysisResult {
  issues: string[];
  suggestions: string[];
  securityWarnings: string[];
  summary: {
    score: number;
    passed: boolean;
  };
}

export interface PullRequestReview {
  pullRequestId: number;
  repository: string;
  analysis: CodeAnalysisResult;
  timestamp: Date;
  reviewer: string;
}
