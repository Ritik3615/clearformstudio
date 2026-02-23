import React from "react";
import ContactFormComponent from "../components/forms/ContactForm";

export default function ServicesPage() {
  const services = [
    {
      title: "Sales Proposal Kits",
      desc: "Structured decks that clearly explain scope, pricing, and value — built to win client decisions.",
      points: [
        "Proposal presentation deck",
        "Scope & process breakdown",
        "Pricing explanation structure",
      ],
    },
    {
      title: "Client Closing Decks",
      desc: "Professional sales presentations designed to build trust and accelerate deal closures.",
      points: [
        "Value-driven slide structure",
        "Brand-aligned design",
        "Clear persuasion flow",
      ],
    },
    {
      title: "Project Explanation Systems",
      desc: "Structured communication systems that simplify complex projects for clients and stakeholders.",
      points: [
        "Process clarity visuals",
        "Execution roadmap",
        "Decision-focused narrative",
      ],
    },
    {
      title: "Investor & Growth Pitch Structures",
      desc: "Clean, persuasive pitch decks that communicate your business model with confidence.",
      points: [
        "Investor-ready pitch deck",
        "Business narrative structure",
        "Scalable design system",
      ],
    },
    {
      title: "Web Application Presentation Sites",
      desc: "Focused web experiences designed to present proposals, services, or investment cases clearly.",
      points: [
        "Landing-style proposal websites",
        "Structured communication flow",
        "Clean professional UI",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            Strategic Presentation Systems
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Clear, persuasive communication systems designed to help you win approvals, clients, and investors.
          </p>
        </div>

        {/* WHY THIS MATTERS */}
        <section className="border-t border-gray-800 pt-20 mb-28">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Clarity Creates Confidence in Every Decision
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Great ideas fail when they are not presented clearly.
              Clients compare on price. Investors hesitate.
              Decision-makers delay approvals.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              We don’t just design slides. We build structured communication systems
              that increase clarity, confidence, and closing probability.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="space-y-20 mb-28">
          {services.map((service, i) => (
            <div
              key={i}
              className="grid md:grid-cols-3 gap-10 border-l border-gray-700 pl-10"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
              </div>

              <div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </div>

              <div>
                <ul className="space-y-2 text-gray-400">
                  {service.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* DIFFERENTIATION */}
        <section className="border-t border-gray-800 pt-20 mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Makes Our Systems Different
            </h2>
            <p className="text-gray-400">
              Built for real decisions — not just visual appeal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Decision-Focused Structure",
                desc: "Every presentation is designed around one goal — helping someone say yes.",
              },
              {
                title: "Strategic Narrative Flow",
                desc: "We structure content in a logical sequence that reduces confusion and builds trust.",
              },
              {
                title: "Clarity Over Decoration",
                desc: "No unnecessary visual noise. Clean systems built for understanding.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-t border-gray-800 pt-20 mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-gray-400">
              A focused workflow built for clarity and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Understand the Goal",
                desc: "Identify the audience and the decision you need to win.",
              },
              {
                step: "02",
                title: "Structure the Message",
                desc: "Organize content into a clear narrative flow.",
              },
              {
                step: "03",
                title: "Design the System",
                desc: "Build professional visuals that support persuasion.",
              },
              {
                step: "04",
                title: "Deliver Ready Files",
                desc: "Polished, presentation-ready output.",
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-blue-400 font-semibold mb-3">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="border-t border-gray-800 pt-20 mb-28">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              What You Get
            </h2>

            <ul className="space-y-4 text-gray-400 text-lg">
              <li>• Clearer client conversations</li>
              <li>• Faster approvals</li>
              <li>• Stronger pricing justification</li>
              <li>• Higher confidence during presentations</li>
              <li>• Structured reusable communication systems</li>
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-gray-800 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tell Us About Your Project
            </h2>
            <p className="text-gray-400">
              Share details and we’ll respond with next steps.
            </p>
          </div>

          <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-10">
            <ContactFormComponent />
          </div>
        </section>

      </div>
    </div>
  );
}