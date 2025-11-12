import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Theory from './components/Theory';
import InteractiveDemo from './components/InteractiveDemo';
import Assessment from './components/Assessment';
import Progress from './components/Progress';
import Challenge from './components/Challenge';

export type View = 'theory' | 'demo' | 'assessment' | 'progress' | 'challenge';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('theory');

  const renderContent = () => {
    switch (activeView) {
      case 'theory':
        return <Theory />;
      case 'demo':
        return <InteractiveDemo />;
      case 'assessment':
        return <Assessment />;
      case 'progress':
        return <Progress />;
      case 'challenge':
        return <Challenge />;
      default:
        return <Theory />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      <Header />
      <div className="flex-grow flex container mx-auto w-full max-w-7xl p-4 gap-4">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-grow">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;