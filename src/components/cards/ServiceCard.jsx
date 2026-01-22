import React from 'react';

export default function ServiceCard({ Icon, title, description, features }) {
  return (
    <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-purple-400/30 hover:border-purple-400/60 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all hover:shadow-xl hover:shadow-purple-500/20">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="text-white" size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-gray-800 mb-4">{description}</p>
      {features && (
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
