import React from "react";
import PageHeader from "../components/layout/PageHeader";

export default function ProcessPage() {
  const steps = [
    { step: "01", title: "Understand the Goal", desc: "We begin by understanding your project, audience, and the decision you want to win." },
    { step: "02", title: "Structure the Message", desc: "Your content is organized into a clear narrative that’s easy to follow." },
    { step: "03", title: "Design the Presentation", desc: "We create clean, professional visuals that support the message." },
    { step: "04", title: "Review and Refine", desc: "You review the draft and we make focused revisions to improve clarity." },
    { step: "05", title: "Final Delivery", desc: "You receive a polished, ready-to-use presentation for meetings or submissions." },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 bg-white">
      {/* FULL WIDTH HEADER SECTION */}
      <div className="w-full bg-slate-50 border-b border-slate-200 py-20 mb-16">
        <div className="mx-auto px-6 lg:px-12 w-full">
          <PageHeader
            title="Our Process"
            subtitle="A clear, structured workflow designed to turn your ideas into decision-ready presentations."
          />
        </div>
      </div>

      <div className="mx-auto px-6 lg:px-12 w-full">
        {/* PROCESS STEPS - 2 COLUMN GRID FOR BETTER WIDTH USAGE */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {steps.map((item, i) => (
              <div key={i} className="group border-l-4 border-slate-100 hover:border-slate-900 pl-8 transition-all">
                <div className="text-slate-400 font-mono text-lg mb-4 group-hover:text-slate-900 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FULL WIDTH TIMELINE SUMMARY */}
        <section className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center lg:text-left">
            Typical Timeline
          </h2>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
            {[
              { day: "Day 1", task: "Project brief and content review." },
              { day: "Days 2–4", task: "Structure, design, and first draft delivery." },
              { day: "Days 5–6", task: "Revisions and final presentation delivery." }
            ].map((t, idx) => (
              <div key={idx} className="relative">
                <div className="text-blue-400 font-bold text-xl mb-4">{t.day}</div>
                <div className="h-px bg-white/20 w-full mb-6" />
                <p className="text-lg text-slate-300 leading-snug">{t.task}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
