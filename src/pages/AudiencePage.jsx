import React from "react";
import PageHeader from "../components/layout/PageHeader";
import { FileText, ExternalLink, GraduationCap, Building2, Paintbrush, Rocket, HardHat } from "lucide-react"; // Recommended icon library
import proposalPdf from "../assets/business  proposal 1.pdf";
import profilePdf1 from "../assets/Steadwin group profle.pdf.pdf";
import profilePdf2 from "../assets/steadwin profile RAILING (1).pdf";
import templatePdf from "../assets/template1.pdf";

const projects = [
  { title: "Business Proposal", desc: "Structured deck for scope, pricing, and value.", link: proposalPdf, type: "PDF" },
  { title: "Steadwin Group Profile", desc: "Professional company profile for introductions.", link: profilePdf1, type: "PDF" },
  { title: "Railing System Profile", desc: "Focused specs and features for potential clients.", link: profilePdf2, type: "PDF" },
  { title: "Proposal Template", desc: "Reusable system for consistent client branding.", link: templatePdf, type: "PDF" },
  { title: "Steadwin Website", desc: "Clean, focused presentation of company services.", link: "https://steadwin.in", type: "Web" },
];

const industries = [
  { name: "Students & Academic", icon: <GraduationCap size={20} /> },
  { name: "Interior Design", icon: <Paintbrush size={20} /> },
  { name: "Architecture Firms", icon: <Building2 size={20} /> },
  { name: "Builders & Developers", icon: <HardHat size={20} /> },
  { name: "Startups & Business", icon: <Rocket size={20} /> },
];

export default function AudiencePage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <PageHeader 
          title="Selected Work" 
          subtitle="Examples of communication systems we've built to win decisions." 
        />

        {/* PROJECTS GRID */}
        <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-md">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">
                  {project.type} Project
                </span>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{project.desc}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-900 font-bold group-hover:gap-3 transition-all"
              >
                {project.type === "Web" ? "Visit Website" : "View Document"}
                {project.type === "Web" ? <ExternalLink size={18} /> : <FileText size={18} />}
              </a>
            </div>
          ))}
        </section>

        {/* REFINED WHO WE WORK WITH */}
        <section className="py-16 bg-slate-900 rounded-[2.5rem] px-8 md:px-16 text-white overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Work With</h2>
              <p className="text-slate-400 text-lg">Different industries, same goal — clear communication that helps win decisions.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-blue-400">{item.icon}</div>
                  <span className="font-medium text-slate-200">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />
        </section>
      </div>
    </div>
  );
}
