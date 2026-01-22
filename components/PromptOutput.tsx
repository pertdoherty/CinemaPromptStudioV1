
import React, { useState, useCallback } from 'react';

interface PromptOutputProps {
  prompt: string;
}

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);


export const PromptOutput: React.FC<PromptOutputProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [prompt]);

  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg relative">
      <h2 className="text-lg font-semibold text-gray-200 mb-3">Generated Prompt</h2>
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Copy prompt"
      >
        {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <CopyIcon className="w-5 h-5 text-gray-300" />}
      </button>
      <textarea
        readOnly
        value={prompt}
        className="w-full h-64 bg-gray-900 text-gray-300 p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm leading-relaxed"
        aria-label="Generated prompt text"
      />
    </div>
  );
};
