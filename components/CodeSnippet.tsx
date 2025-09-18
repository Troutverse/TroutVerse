'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSnippetProps {
  code: string;
  language: string;
}

export default function CodeSnippet({ code, language }: CodeSnippetProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 border rounded-lg overflow-hidden bg-gray-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-3 text-left hover:bg-gray-100 transition-colors focus:outline-none"
      >
        <span className="font-semibold text-sm text-gray-700">
          {isOpen ? '코드 접기' : '코드 보기'}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="border-t">
          <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers>
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}