import React from 'react';

export default function PageHeader({ title, subtitle, gradient = 'from-blue-600 to-blue-400' }) {
  return (
    <div className={`text-center mb-16 py-16 rounded-lg shadow-lg`}>
      <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">{title}</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  );
}
