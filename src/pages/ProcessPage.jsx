import React from "react";

export default function ProcessPage() {
  const steps = [
    {
      step: "01",
      title: "Understand the Goal",
      desc: "We begin by understanding your project, audience, and the decision you want to win.",
    },
    {
      step: "02",
      title: "Structure the Message",
      desc: "Your content is organized into a clear narrative that’s easy to follow.",
    },
    {
      step: "03",
      title: "Design the Presentation",
      desc: "We create clean, professional visuals that support the message.",
    },
    {
      step: "04",
      title: "Review and Refine",
      desc: "You review the draft and we make focused revisions to improve clarity.",
    },
    {
      step: "05",
      title: "Final Delivery",
      desc: "You receive a polished, ready-to-use presentation for meetings or submissions.",
    },
  ];

  const timeline = [
    { day: "Day 1", task: "Project brief and content review." },
    { day: "Days 2–4", task: "Structure, design, and first draft delivery." },
    { day: "Days 5–6", task: "Revisions and final presentation delivery." },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 text-white overflow-hidden">

      {/* SAME Background as ContactPage */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            Our Process
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A structured workflow designed to turn your ideas into decision-ready communication systems.
          </p>
        </div>

        {/* Process Steps */}
        <section className="mb-28">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">
            {steps.map((item, i) => (
              <div
                key={i}
                className="relative pl-12 border-l border-gray-700"
              >
                <div className="absolute -left-1 top-0 text-blue-400 font-bold text-lg">
                  {item.step}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <div className="border-t border-gray-800 pt-16">

            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Typical Timeline
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              {timeline.map((t, idx) => (
                <div key={idx}>
                  <div className="text-blue-400 font-semibold mb-4 text-lg">
                    {t.day}
                  </div>
                  <div className="h-px bg-gray-700 mb-6" />
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {t.task}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}