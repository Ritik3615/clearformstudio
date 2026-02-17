import React from "react";

export default function PageHeader({
  title,
  subtitle,
  gradient = "from-blue-600 to-blue-400",
}) {
  return (
    <div
      className={`text-center py-24 px-6 rounded-2xl bg-gradient-to-r ${gradient} text-white`}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
