import React from 'react';
import { Button } from '../ui/button';

export default function PricingCard({ name, price, items, featured = false }) {
  return (
    <div className={`p-8 rounded-2xl ${
      featured 
        ? 'bg-gradient-to-br from-blue-600 to-purple-600 border-2 border-white scale-105' 
        : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-400/30'
    }`}>
      <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-white'}`}>
        {name}
      </h3>
      <div className={`text-3xl font-bold mb-4 ${featured ? 'text-white' : 'text-blue-400'}`}>
        {price}
      </div>
      <ul className="space-y-3 mb-6">
        {items.map((item, j) => (
          <li key={j} className={`text-sm ${featured ? 'text-white' : 'text-gray-300'}`}>
            ✓ {item}
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all ${
        featured 
          ? 'bg-white text-purple-600 hover:bg-gray-100' 
          : 'bg-purple-500 text-white hover:bg-purple-600'
      }`}>
        Get Started
      </button>
    </div>
  );
}
