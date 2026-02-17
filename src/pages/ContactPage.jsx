import React from 'react';
import { Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ContactFormComponent from '../components/forms/ContactForm';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email Us",
      value: "contact@clearformstudio.in",
      link: "mailto:contact@clearformstudio.in",
      desc: "For project inquiries and collaborations."
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      title: "Call Us",
      value: "+91 7338495036",
      link: "tel:+917338495036",
      desc: "Mon-Fri from 9am to 6pm IST."
    },
    {
      icon: <MessageSquare className="text-green-600" size={24} />,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/917338495036",
      desc: "Fastest for quick questions."
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      {/* FULL WIDTH HERO SECTION */}
      <section className="w-full bg-slate-50 border-b border-slate-200 py-24 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <PageHeader 
            title="Let’s Win Your Next Decision" 
            subtitle="Share your project details and we’ll help you build a communication system that works."
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: CONTACT INFO (FULL WIDTH STYLE) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Contact Information</h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                Whether you need a full pitch deck or a structured proposal template, we're here to help.
              </p>
            </div>

            <div className="space-y-8">
              {contactMethods.map((method, idx) => (
                <a 
                  key={idx} 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-6 p-6 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{method.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{method.value}</p>
                    <p className="text-sm text-slate-500">{method.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/40">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Send a Message</h2>
                <p className="text-slate-500 italic">Expected response time: within 24 hours.</p>
              </div>
              
              <ContactFormComponent />
            </div>
          </div>

        </div>
      </div>
      
      {/* OPTIONAL BOTTOM FULL-WIDTH CTA */}
      <section className="mt-32 mx-6 lg:mx-12 py-16 bg-slate-900 rounded-[3rem] text-center text-white overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4">Looking for our portfolio?</h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">See how we've helped architecture firms and startups communicate clearly.</p>
          <a href="/samples" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full font-bold transition-all">
            View Selected Work <ArrowRight size={18} />
          </a>
        </div>
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-[120px]" />
      </section>
    </div>
  );
}
