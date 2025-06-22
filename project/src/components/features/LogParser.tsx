import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { parseLogs } from '../../lib/api/grokService';
import { useAuth } from '../../contexts/AuthContext';

export function LogParser() {
  const [logs, setLogs] = useState('');
  const [results, setResults] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleParse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!logs.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const analysis = await parseLogs(logs);
      setResults(analysis);
    } catch (error) {
      setResults('Failed to parse logs. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <form onSubmit={handleParse} className="space-y-4">
        <textarea
          value={logs}
          onChange={(e) => setLogs(e.target.value)}
          className="w-full h-40 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 dark:bg-gray-700 dark:text-white resize-none"
          placeholder="Paste your logs here..."
          disabled={isLoading}
        />
        <button 
          type="submit"
          className="w-full p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2 disabled:opacity-50"
          disabled={isLoading}
        >
          <FileText className="w-5 h-5" />
          <span>{isLoading ? 'Analyzing...' : 'Parse Logs'}</span>
        </button>
      </form>

      {results && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Analysis Results:</h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg whitespace-pre-wrap font-mono text-sm text-gray-800 dark:text-gray-200">
            {results}
          </div>
        </div>
      )}
    </div>
  );
}