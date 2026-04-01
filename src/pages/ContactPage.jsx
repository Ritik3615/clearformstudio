import React from "react";
import { Mail, Phone, MessageSquare } from "lucide-react";
import ContactFormComponent from "../components/forms/ContactForm";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "contact@clearformstudio.in",
      link: "mailto:contact@clearformstudio.in",
      desc: "For job opportunities and collaborations.",
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+91 9053407091",
      link: "tel:+919053407091",
      desc: "Available for discussion (Bangalore).",
    },
    {
      icon: <MessageSquare size={20} />,
      title: "WhatsApp",
      value: "Quick Chat",
      link: "https://wa.me/919053407091",
      desc: "Fastest way to reach me.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[160px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to backend-focused full stack roles, collaborations, and challenging engineering projects.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-12 gap-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-gray-400">
                Whether you're hiring, collaborating, or want to discuss a technical problem — feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-gray-800/70 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition"
                >
                  <div className="text-blue-400 mt-1">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {method.title}
                    </h3>
                    <p className="text-blue-400 text-sm">
                      {method.value}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {method.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-7">
            <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-400 text-sm">
                  I typically respond within 24 hours.
                </p>
              </div>

              <ContactFormComponent />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}