import React from 'react';
import { LogParser } from '../components/features/LogParser';

export function LogsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Log Analysis</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Analyze log files to automatically identify patterns, issues, and insights. 
        Our system helps you make sense of complex log data quickly and efficiently.
      </p>
      <LogParser />
    </div>
  );
}