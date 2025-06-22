import React, { useState } from 'react';
import { History as HistoryIcon, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface HistoryProps {
  isOpen: boolean;
  onClose: () => void;
}

export function History({ isOpen, onClose }: HistoryProps) {
  const [activeTab, setActiveTab] = useState('chat');
  const { user } = useAuth();

  const tabs = [
    { id: 'chat', label: 'Chat' },
    { id: 'vision', label: 'Vision' },
    { id: 'logs', label: 'Logs' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'moderation', label: 'Moderation' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 h-full">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <HistoryIcon className="w-5 h-5" />
            History
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex border-b dark:border-gray-700 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 text-sm font-medium whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <p>History feature is available when database is connected.</p>
            <p className="text-sm mt-2">Currently using simplified authentication.</p>
          </div>
        </div>
      </div>
    </div>
  );
}