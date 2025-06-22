import React from 'react';
import { ImageAnalysis } from '../components/features/ImageAnalysis';

export function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Image Understanding</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Upload or provide image URLs to analyze content, detect objects, and understand scenes 
        using our advanced computer vision capabilities.
      </p>
      <ImageAnalysis />
    </div>
  );
}