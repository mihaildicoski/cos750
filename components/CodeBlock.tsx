import React from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-200 my-4">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-700/50 border-b border-gray-600">
        <span className="text-xs font-sans text-gray-400">{language.toUpperCase()}</span>
        <button
          onClick={() => navigator.clipboard.writeText(code.trim())}
          className="text-xs text-gray-300 hover:text-white transition-colors p-1 rounded"
          aria-label="Copy code"
        >
          Copy
        </button>
      </div>
      <pre className="p-4 text-sm overflow-x-auto">
        <code className={`language-${language} text-gray-200`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;