import React from 'react';
import { BadgeCheckIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 max-w-7xl flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Decorator Pattern Learning System
        </h1>
        <div className="flex items-center space-x-2 text-gray-600">
          <BadgeCheckIcon className="h-6 w-6" />
          <span>1 Badges</span>
        </div>
      </div>
    </header>
  );
};

export default Header;