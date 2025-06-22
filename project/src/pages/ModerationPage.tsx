import React from 'react';
import { ContentModerator } from '../components/features/ContentModerator';

export function ModerationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Content Moderation</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Automatically detect and filter inappropriate content to maintain platform safety. 
        Our AI-powered moderation system helps keep your content clean and safe.
      </p>
      <ContentModerator />
    </div>
  );
}