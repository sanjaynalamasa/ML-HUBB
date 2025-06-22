import React from 'react';
import { ChatBot } from '../components/features/ChatBot';

export function ChatPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">AI Chat</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Engage in natural conversations with our advanced AI chatbot. Get instant responses, 
        support, and information on any topic.
      </p>
      <ChatBot />
    </div>
  );
}