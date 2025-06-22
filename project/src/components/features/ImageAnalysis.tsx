import React, { useState } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { analyzeImage } from '../../lib/api/grokService';
import { useAuth } from '../../contexts/AuthContext';

export function ImageAnalysis() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const handleImageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl || isLoading) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await analyzeImage(imageUrl);
      setAnalysis(result);
    } catch (err) {
      setError('Failed to analyze image. Please check the URL and try again.');
      setAnalysis(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageError = () => {
    setError('Invalid image URL. Please provide a valid image URL.');
    setImageUrl('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <form onSubmit={handleImageSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 dark:bg-gray-700 dark:text-white"
            placeholder="Enter image URL..."
            disabled={isLoading}
          />
          <button 
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2 disabled:opacity-50 transition-colors"
            disabled={isLoading || !imageUrl}
          >
            <Upload className="w-5 h-5" />
            <span>{isLoading ? 'Analyzing...' : 'Analyze'}</span>
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
          {error}
        </div>
      )}

      {imageUrl && !error && (
        <div className="mt-4">
          <img 
            src={imageUrl} 
            alt="Analysis target" 
            className="max-w-full h-auto rounded-lg"
            onError={handleImageError}
          />
        </div>
      )}

      {analysis && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Analysis Results:</h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-gray-800 dark:text-gray-200">
            {analysis}
          </div>
        </div>
      )}
    </div>
  );
}