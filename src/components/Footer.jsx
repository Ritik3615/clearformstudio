import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";
import companyLogo from "/clearformlogo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white pt-24 pb-12 overflow-hidden">

      {/* Background (Studio Style) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617]" />
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-14 mb-16">

          {/* BRAND */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
                <img
                  src={companyLogo}
                  alt="Clearform Studio Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white">
                Clearform Studio
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Structured presentation systems and digital experiences
              built to help professionals communicate with clarity and confidence.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-5 text-blue-400 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Sales Proposal Kits",
                "Client Closing Decks",
                "Pitch Structures",
                "Presentation Websites",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 hover:text-white transition"
                  >
                    {item}
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WHO WE SERVE */}
          <div>
            <h3 className="font-semibold mb-5 text-blue-400 text-sm uppercase tracking-wider">
              We Work With
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Students",
                "Interior Designers",
                "Architects",
                "Builders & Developers",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-5 text-blue-400 text-sm uppercase tracking-wider">
              Contact
            </h3>

            <div className="space-y-4 text-sm">

              <a
                href="mailto:contact@clearformstudio.in"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Mail size={16} className="text-blue-400" />
                <span>contact@clearformstudio.in</span>
              </a>

              <a
                href="tel:+917338495036"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Phone size={16} className="text-blue-400" />
                <span>+91 9053407091</span>
              </a>

              <a
                href="https://wa.me/919053407091"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition"
              >
                <MessageCircle size={16} className="text-green-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Clearform Studio. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built for clarity. Designed for decisions.
          </p>
        </div>

      </div>
    </footer>
  );
}