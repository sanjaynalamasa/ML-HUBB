// API Response Types
export interface GrokResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export interface AnalysisResult {
  sentiment?: string;
  keywords?: string[];
  language?: string;
  wordCount?: number;
  error?: string;
}

export interface ModerationResult {
  inappropriate?: boolean;
  spam?: boolean;
  harmful?: boolean;
  sensitive?: boolean;
  error?: string;
}

export interface APIError {
  message: string;
  code: string;
}