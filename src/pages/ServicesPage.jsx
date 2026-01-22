import React from "react";
import PageHeader from "../components/layout/PageHeader";
import ServiceCard from "../components/cards/ServiceCard";
import ContactFormComponent from "../components/forms/ContactForm";
import { servicesData, pricingPlans } from "../data/services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">

      {/* HERO */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <PageHeader
          title="Design Solutions That Actually Work"
          subtitle="We don’t just design slides or websites. We solve communication problems for students and businesses."
        />
      </section>

      {/* PROBLEMS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Problems People Face
          </h2>
          <p className="text-slate-600 mb-12 text-lg">
            Most people fail not because of bad ideas — but bad presentation.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "No clear structure",
              "Too much text, no visuals",
              "Weak storytelling",
              "Urgent deadlines & pressure",
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-6 rounded-xl font-medium shadow-sm hover:shadow-md transition-all"
              >
                ❌ {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            How Clearform Solves This
          </h2>
          <p className="text-slate-600 mb-12 text-lg">
            We convert ideas into clear, convincing, and visually powerful designs.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Structured storytelling",
              "Premium visual design",
              "Business-focused content",
              "Fast turnaround delivery",
            ].map((s, i) => (
              <div
                key={i}
                className="bg-blue-50 border border-blue-200 p-6 rounded-xl font-semibold text-blue-700 shadow-sm hover:shadow-md transition-all"
              >
                ✅ {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            Who This Is For
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Students & Colleges",
              "Interior Designers",
              "Architects",
              "Builders & Businesses",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-8 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all"
              >
                🎯 {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            How We Work
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Understand Requirement" },
              { step: "02", title: "Design Structure & Visuals" },
              { step: "03", title: "Review & Refine" },
              { step: "04", title: "Final Delivery" },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                Icon={service.icon}
                title={service.title}
                description={service.desc}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-purple-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Flexible Pricing
          </h2>
          <p className="text-slate-700 text-lg mb-12">
            Choose a plan that fits your requirement.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <PricingCard
                key={i}
                name={plan.name}
                price={plan.price}
                items={plan.items}
                featured={plan.featured}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* CONTACT FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tell Us Your Requirement
          </h2>
          <p className="text-slate-600 mb-12 text-lg">
            Share your idea. We’ll convert it into a powerful presentation or design.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10 shadow-sm">
            <ContactFormComponent />
          </div>
        </div>
      </section>

    </div>
  );
}