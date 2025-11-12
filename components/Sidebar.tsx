import React from 'react';
import { View } from '../App';
import { BookOpenIcon, BeakerIcon, ClipboardCheckIcon, ChartBarIcon, CheckCircleIcon, LightBulbIcon } from './icons';

interface SidebarProps {
  activeView: View;
  setActiveView: (view: View) => void;
}

const navItems = [
  { id: 'theory', label: 'Pattern Theory', icon: <BookOpenIcon />, completed: true },
  { id: 'demo', label: 'Interactive Demo', icon: <BeakerIcon />, completed: false },
  { id: 'challenge', label: 'AI Challenge', icon: <LightBulbIcon />, completed: false },
  { id: 'assessment', label: 'Assessment', icon: <ClipboardCheckIcon />, completed: true },
  { id: 'progress', label: 'Your Progress', icon: <ChartBarIcon />, completed: false },
];

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <aside className="w-64 flex-shrink-0 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 px-2">Modules</h2>
      <nav className="space-y-1">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id as View)}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-md text-left transition-colors duration-200 ${
              activeView === item.id
                ? 'bg-gray-200 text-gray-900 font-semibold'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {React.cloneElement(item.icon, { className: 'h-5 w-5' })}
            <span className="flex-grow text-sm font-medium">{item.label}</span>
            {item.completed && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;