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
    <div className="bg-white text-slate-900">
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
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Win More Marks. <br /> Close More Clients.
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mb-10">
              High-impact presentations, proposals, and visuals for students,
              architects, interior designers, and builders.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
              >
                Start Your Project <ArrowRight size={18} />
              </button>

              <Link
                to="/services"
                className="border border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* nav */}
        <button
          onClick={() =>
            setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)
          }
          className="absolute left-6 top-1/2 z-20 bg-white/80 p-3 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
          className="absolute right-6 top-1/2 z-20 bg-white/80 p-3 rounded-full"
        >
          <ChevronRight />
        </button>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            The Real Problem Isn’t Your Work
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl">
            Good ideas fail because they are poorly presented. Evaluators lose
            interest. Clients hesitate. Opportunities die before discussion even
            begins.
          </p>

          <div className="grid md:grid-cols-5 gap-6 mt-16">
            {[
              "No clear structure",
              "Too much text",
              "Weak storytelling",
              "Low visual impact",
              "Last-minute deadlines & pressure",
            ].map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl border p-6 font-medium bg-white group"
              >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-gray-500 to-gray-400 opacity-80 transition-all duration-500 animate-gradient"></div>

                {/* Content */}
                <span className="relative z-10">❌ {p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              How We Fix It
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don’t just design slides. We build structured communication
              systems that make your ideas clear, powerful, and convincing.
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Structured Flow",
                desc: "We convert raw ideas into a clear story: Problem → Solution → Impact → Result.",
                icon: "🧠",
              },
              {
                title: "Visual-First Design",
                desc: "We replace boring text with clean visuals, diagrams, and layouts that speak instantly.",
                icon: "🎨",
              },
              {
                title: "Storytelling Logic",
                desc: "Every slide follows a narrative that keeps clients, teachers, and investors engaged.",
                icon: "📖",
              },
              {
                title: "Fast & Strategic Delivery",
                desc: "Even with urgent deadlines, we deliver high-quality presentations without chaos.",
                icon: "⚡",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all group"
              >
                {/* Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Highlight Line */}
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-700 font-medium">
              Result? Better marks. Faster approvals. Higher conversions.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHO WE SERVE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Who We Work With
          </h2>
          <p className="text-xl text-slate-600 mb-16">
            Different roles. Same need — clarity & impact.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["🎓 Students", "Better marks & confident viva"],
              ["🏠 Interior Designers", "Client approvals & conversions"],
              ["🏗️ Architects", "Clear concept communication"],
              ["👷 Builders", "Sales & investor confidence"],
            ].map(([t, d], i) => (
              <div
                key={i}
                className="border relative p-8 rounded-xl hover:shadow-lg transition "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-gray-500 to-gray-400 opacity-50 transition-all duration-500 animate-gradient"></div>
                <h3 className="text-xl text-black font-bold mb-3">{t}</h3>
                <p className="text-black ">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">
            Presentation Systems We Build
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Academic Presentation Systems", "Projects, seminars, viva"],
              ["Client Pitch Systems", "Design & proposal decks"],
              ["Sales & Investor Systems", "Builder sales, brochures"],
            ].map(([t, d], i) => (
              <div key={i} className="bg-white p-8 rounded-xl border">
                <h3 className="text-xl font-bold mb-3">{t}</h3>
                <p className="text-slate-600">{d}</p>
                <ul className="mt-4 text-sm text-slate-500 list-disc list-inside">
                  <li>PPT / Slides</li>
                  <li>Visuals & content</li>
                  <li>Optional website</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
            Simple Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {["Discuss", "Design", "Refine", "Deliver"].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  0{i + 1}
                </div>
                <p className="font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6 text-center">
            Discuss Your Requirement
          </h2>
          <ContactFormComponent />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 bg-slate-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready to Present Like a Pro?
          </h2>
          <p className="text-xl text-white/70 mb-10">
            If clarity, structure, and results matter — let’s work.
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-lg font-semibold text-lg"
          >
            Start Now
          </button>
        </div>
      </section>
    </div>
  );
}
