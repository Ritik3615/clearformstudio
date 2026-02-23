import React from "react";
import {
  FileText,
  ExternalLink,
  GraduationCap,
  Building2,
  Paintbrush,
  Rocket,
  HardHat,
} from "lucide-react";

import proposalPdf from "../assets/business  proposal 1.pdf";
import profilePdf1 from "../assets/Steadwin group profle.pdf.pdf";
import profilePdf2 from "../assets/steadwin profile RAILING (1).pdf";
import templatePdf from "../assets/template1.pdf";

const projects = [
  {
    title: "Business Proposal",
    desc: "Structured deck for scope, pricing, and value presentation.",
    link: proposalPdf,
    type: "PDF",
  },
  {
    title: "Steadwin Group Profile",
    desc: "Professional company profile used for introductions and outreach.",
    link: profilePdf1,
    type: "PDF",
  },
  {
    title: "Railing System Profile",
    desc: "Technical specification and feature breakdown for clients.",
    link: profilePdf2,
    type: "PDF",
  },
  {
    title: "Proposal Template",
    desc: "Reusable system for structured and consistent branding.",
    link: templatePdf,
    type: "PDF",
  },
  {
    title: "Steadwin Website",
    desc: "Clean service presentation website built for production.",
    link: "https://steadwin.in",
    type: "Web",
  },
];

const industries = [
  { name: "Students & Academic", icon: <GraduationCap size={18} /> },
  { name: "Interior Design", icon: <Paintbrush size={18} /> },
  { name: "Architecture Firms", icon: <Building2 size={18} /> },
  { name: "Builders & Developers", icon: <HardHat size={18} /> },
  { name: "Startups & Business", icon: <Rocket size={18} /> },
];

export default function AudiencePage() {
  return (
    <div className="relative min-h-screen text-white pt-28 pb-20 overflow-hidden">

      {/* Background Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />

      {/* Blue Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[150px]" />

      {/* Purple Glow */}
      <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[170px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            Selected Work
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Examples of structured communication systems, profiles, and
            documentation built for real-world business execution.
          </p>
        </div>

        {/* PROJECT GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-4 block">
                  {project.type}
                </span>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:gap-3 transition-all"
              >
                {project.type === "Web" ? "Visit Website" : "View Document"}
                {project.type === "Web" ? (
                  <ExternalLink size={16} />
                ) : (
                  <FileText size={16} />
                )}
              </a>
            </div>
          ))}
        </section>

        {/* INDUSTRIES SECTION */}
        <section className="border-t border-gray-800 pt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Who This Was Built For
            </h2>
            <p className="text-gray-400">
              Structured documentation and presentation systems across
              industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-blue-500 transition"
              >
                <div className="text-blue-400">
                  {item.icon}
                </div>
                <span className="text-gray-300 text-sm">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}