import React from 'react';
import { TextAnalysis } from '../components/features/TextAnalysis';

export function AnalysisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Text Analysis</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Extract valuable insights from text content including sentiment analysis, 
        keyword extraction, and language detection.
      </p>
      <TextAnalysis />
    </div>
  );
}