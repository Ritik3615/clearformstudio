import React from "react";

export default function AudienceCard({
  Icon,
  title,
  color,
  problems,
  solutions,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${color}`}
        >
          <Icon className="text-white" size={26} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>

      {/* Problems */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wide">
          Problems
        </h4>
        <ul className="space-y-2 text-slate-700 text-sm">
          {problems.map((p, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div>
        <h4 className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wide">
          Our Solutions
        </h4>
        <ul className="space-y-2 text-slate-700 text-sm">
          {solutions.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600">✅</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
          Explore Solutions →
        </button>
      </div>
    </div>
  );
}