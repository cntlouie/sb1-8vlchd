import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg p-6 border border-gray-700 hover:border-red-700 transition-all duration-300 transform hover:scale-105 group">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-300 group-hover:text-red-400 transition-colors">{title}</h3>
        <div className="text-red-700 transform group-hover:scale-110 transition-transform">{icon}</div>
      </div>
      <p className="text-3xl font-bold text-gray-100 group-hover:text-red-300 transition-colors">{value}</p>
    </div>
  );
};

export default StatsCard;