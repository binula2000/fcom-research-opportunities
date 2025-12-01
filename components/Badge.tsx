import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'green' | 'gray' | 'indigo' | 'yellow';
}

export const Badge: React.FC<BadgeProps> = ({ children, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-600/20',
    green: 'bg-green-50 text-green-700 ring-green-600/20',
    gray: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-600/20',
    yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
  };

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${colorClasses[color]} mr-2 mb-1`}>
      {children}
    </span>
  );
};