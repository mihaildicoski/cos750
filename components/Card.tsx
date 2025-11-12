import React from 'react';

interface CardProps {
  icon?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  className?: string;
  padding?: 'p-0' | 'p-4' | 'p-6';
}

const Card: React.FC<CardProps> = ({ icon, title, children, className, padding = 'p-4' }) => {
  return (
    <section className={`bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden ${className}`}>
      {title && (
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3">
            {icon && <span className="text-blue-500">{icon}</span>}
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          </div>
        </div>
      )}
      <div className={padding}>
        {children}
      </div>
    </section>
  );
};

export default Card;