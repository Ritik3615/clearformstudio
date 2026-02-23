import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactFormComponent from "../components/forms/ContactForm";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/presentation.jpg";
import image3 from "../assets/pitch.jpg";
import image4 from "../assets/poster.png";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: "Business Websites", bg: image1 },
    { title: "Professional Presentations", bg: image2 },
    { title: "Pitch Decks", bg: image3 },
    { title: "Posters & Creatives", bg: image4 },
  ];

  useEffect(() => {
    const i = setInterval(
      () => setCurrentSlide((p) => (p + 1) % slides.length),
      5000,
    );
    return () => clearInterval(i);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* SAME BACKGROUND AS CONTACT PAGE */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px]" />

      <div className="relative">
        {/* ================= HERO ================= */}
        <section className="relative h-screen overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${s.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/70" />
            </div>
          ))}

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Win Better Clients with Clear, Persuasive Proposals.
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mb-10">
                We build high-impact presentations, pitch decks, and proposal
                systems that help architects, designers, and businesses justify
                their value and close deals with confidence.
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => scrollTo("contact")}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
                >
                  Start Your Project <ArrowRight size={18} />
                </button>

                <Link
                  to="/services"
                  className="border border-white/40 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)
            }
            className="absolute left-6 top-1/2 z-20 bg-white/80 text-black p-3 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
            className="absolute right-6 top-1/2 z-20 bg-white/80 text-black p-3 rounded-full"
          >
            <ChevronRight />
          </button>
        </section>
        {/* ================= CONTENT SECTIONS ================= */}
        <section className="py-24 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Great Work Often Fails at the Presentation Stage
            </h2>

            <p className="text-xl text-gray-400 mb-16 max-w-3xl">
              Strong ideas are frequently misunderstood because the message
              isn’t structured clearly. Clients hesitate, evaluators lose focus,
              and decisions get delayed.
            </p>

            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-semibold mb-8">
                  What usually goes wrong
                </h3>

                <div className="space-y-6">
                  {[
                    "Unclear proposal structure",
                    "Overloaded slides and documents",
                    "Weak narrative or flow",
                    "Inconsistent visual communication",
                    "Last-minute, rushed presentations",
                  ].map((item, i) => (
                    <div key={i} className="border-b border-gray-700 pb-4">
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-10">
                <h3 className="text-2xl font-semibold mb-8">Our approach</h3>

                <div className="space-y-8">
                  {[
                    {
                      title: "Structured Flow",
                      desc: "We turn raw ideas into a clear narrative: problem, solution, value, and outcome.",
                    },
                    {
                      title: "Visual-First Communication",
                      desc: "Complex information is translated into clean, easy-to-understand visuals.",
                    },
                    {
                      title: "Strategic Storytelling",
                      desc: "Every presentation follows a logical flow that keeps decision-makers engaged.",
                    },
                    {
                      title: "Ready-to-Use Proposal Systems",
                      desc: "You receive structured, professional files designed for real client meetings.",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHO WE SERVE ================= */}
        <section className="py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Who We Work With
              </h2>
              <p className="text-xl text-gray-400">
                Different industries. Same goal — clear communication that helps
                win decisions.
              </p>
            </div>

            <div className="divide-y divide-gray-800">
              {[
                [
                  "Students",
                  "Clear academic presentations and confident final juries.",
                ],
                [
                  "Interior Designers",
                  "Client-facing proposals that improve approvals.",
                ],
                [
                  "Architects",
                  "Structured concept presentations that justify design decisions.",
                ],
                [
                  "Builders & Developers",
                  "Professional sales and investor presentations.",
                ],
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  className="py-8 grid md:grid-cols-2 gap-6 items-start group"
                >
                  <h3 className="text-2xl font-semibold text-white relative">
                    <span className="absolute -left-4 top-3 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                    {title}
                  </h3>
                  <p className="text-lg text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHAT WE PROVIDE ================= */}
        <section className="py-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Core Services
              </h2>
              <p className="text-xl text-gray-400">
                Strategic presentations and proposals designed to help you win
                clients, approvals, and investors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Client Proposal Presentations",
                  desc: "Structured proposal decks that help architects and designers explain scope, pricing, and value clearly.",
                },
                {
                  title: "Investor & Pitch Decks",
                  desc: "Clear, persuasive pitch decks designed to communicate your business model and attract funding.",
                },
                {
                  title: "Sales Presentations",
                  desc: "Professional sales decks used by builders and businesses to build trust and close deals.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 p-10 rounded-2xl hover:border-blue-500 transition"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="py-24 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-400">
                A clear, structured workflow designed to turn your ideas into
                decision-ready presentations.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-12">
              {[
                {
                  step: "01",
                  title: "Understand the Goal",
                  desc: "We start by understanding the project, audience, and the decision you need to win.",
                },
                {
                  step: "02",
                  title: "Structure the Message",
                  desc: "Your content is organized into a clear, logical flow that’s easy to follow.",
                },
                {
                  step: "03",
                  title: "Design the Presentation",
                  desc: "We create clean, professional visuals that support the message.",
                },
                {
                  step: "04",
                  title: "Deliver Ready-to-Use Files",
                  desc: "You receive a polished presentation prepared for real meetings or submissions.",
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-blue-400 text-sm font-semibold mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STRONG CTA ================= */}
        <section className="py-24 border-t border-gray-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Have a Project to Present?
            </h2>

            <p className="text-xl text-gray-400 mb-12">
              Let’s turn it into a clear, persuasive presentation built for real
              decisions.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/917338495036"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-8 py-4 rounded-lg font-semibold transition"
              >
                Start on WhatsApp
              </a>

              <a
                href="mailto:clearformstudio.office@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
              >
                Send an Email
              </a>

              <a
                href="#"
                className="border border-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
                onClick={() => {
                  alert("Calendly integration coming soon!");
                }}
              >
                Book a Call
              </a>
            </div>
          </div>
        </section>
        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-24 border-t border-gray-800">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold mb-6 text-center">
              Tell Us About Your Project
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Share a few details and we’ll get back with the next steps.
            </p>

            <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-10">
              <ContactFormComponent />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
