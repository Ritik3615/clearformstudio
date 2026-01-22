import React from "react";
import PageHeader from "../components/layout/PageHeader";
import ProcessStep from "../components/cards/ProcessStep";
import { stepsData, timeline } from "../data/process";

export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <PageHeader
          title="Our Process"
          subtitle="Simple. Clear. No unnecessary complications."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {stepsData.map((step, index) => (
            <ProcessStep
              key={index}
              step={step.number}
              Icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Timeline
          </h2>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`flex ${
                    i % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"
                    }`}
                  >
                    <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-200 shadow-sm">
                      <div className="font-bold text-slate-900">
                        {item.time}
                      </div>
                      <div className="text-sm text-slate-600">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}