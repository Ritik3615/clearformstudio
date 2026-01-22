import React from "react";

export default function ProcessStep({ step, Icon, title, description }) {
  return (
    <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg">
      <div className="flex items-start space-x-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
            <Icon className="text-white" size={28} />
          </div>
          <div className="text-4xl font-bold text-purple-300 group-hover:text-purple-500 transition-colors">
            {step}
          </div>
        </div>

        <div className="flex-1 pt-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}