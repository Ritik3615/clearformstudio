import React from "react";
import PageHeader from "../components/layout/PageHeader";
import ContactFormComponent from "../components/forms/ContactForm";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 pb-10 bg-white">
      {/* HERO */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 mb-28">
        <PageHeader
          title="Strategic Presentation & Proposal Services"
          subtitle="Clear, persuasive presentations designed to help you win clients, approvals, and investors."
        />
      </section>
      <section className="py-10 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Core Services
            </h2>
            <p className="text-xl text-slate-600">
              Focused presentation solutions built for real decisions, not just
              visuals.
            </p>
          </div>

          <div className="space-y-10">
            {/* Service 1 */}
            <div className="group grid md:grid-cols-3 gap-8 border border-slate-200 rounded-2xl p-10 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative">
                <div className="absolute -left-4 top-1 h-8 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Client Proposal Presentations
                </h3>
              </div>

              <p className="text-lg text-slate-600">
                Structured proposal decks that help architects and designers
                explain scope, pricing, and value clearly during client
                meetings.
              </p>

              <ul className="space-y-2 text-slate-700">
                <li>• Proposal presentation deck</li>
                <li>• Scope and process visuals</li>
                <li>• Pricing explanation structure</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group grid md:grid-cols-3 gap-8 border border-slate-200 rounded-2xl p-10 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative">
                <div className="absolute -left-4 top-1 h-8 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Investor & Pitch Decks
                </h3>
              </div>

              <p className="text-lg text-slate-600">
                Clear, persuasive pitch decks designed to communicate your
                business model and attract funding.
              </p>

              <ul className="space-y-2 text-slate-700">
                <li>• Investor-ready pitch deck</li>
                <li>• Structured business narrative</li>
                <li>• Clean, professional visual design</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group grid md:grid-cols-3 gap-8 border border-slate-200 rounded-2xl p-10 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative">
                <div className="absolute -left-4 top-1 h-8 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Sales Presentations
                </h3>
              </div>

              <p className="text-lg text-slate-600">
                Professional sales decks used by builders and businesses to
                build trust and close deals.
              </p>

              <ul className="space-y-2 text-slate-700">
                <li>• Sales presentation deck</li>
                <li>• Value-focused slide structure</li>
                <li>• Consistent brand-aligned design</li>
              </ul>
            </div>
            {/* Service 4 */}
            <div className="group grid md:grid-cols-3 gap-8 border border-slate-200 rounded-2xl p-10 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative">
                <div className="absolute -left-4 top-1 h-8 w-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition" />
                <h3 className="text-2xl font-semibold text-slate-900">
                  Presentation Websites
                </h3>
              </div>

              <p className="text-lg text-slate-600">
                Clean, focused websites built to present your proposal, service,
                or pitch in a clear and persuasive format.
              </p>

              <ul className="space-y-2 text-slate-700">
                <li>• Proposal or pitch landing page</li>
                <li>• Structured communication flow</li>
                <li>• Clean, professional layout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600">
              A clear workflow designed to turn your ideas into decision-ready
              presentations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Understand the Goal",
                desc: "We identify the audience and the decision your presentation needs to drive.",
              },
              {
                step: "02",
                title: "Structure the Message",
                desc: "Your content is organized into a clear, logical narrative.",
              },
              {
                step: "03",
                title: "Design the Presentation",
                desc: "We create clean, professional visuals that support the message.",
              },
              {
                step: "04",
                title: "Deliver Ready Files",
                desc: "You receive a polished presentation ready for meetings or submissions.",
              },
            ].map((item, i) => (
              <div key={i} className="text-left">
                <div className="text-blue-600 text-sm font-semibold mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tell Us About Your Project
          </h2>
          <p className="text-slate-600 mb-12 text-lg">
            Share a few details and we’ll get back with the next steps.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
            <ContactFormComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
