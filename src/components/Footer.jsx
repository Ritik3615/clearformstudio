import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP CTA STRIP */}
        {/* <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Need a powerful presentation?
            </h3>
            <p className="text-white/80 text-sm">
              Let’s design something that actually wins.
            </p>
          </div>
          <a
            href="#contact-form"
            className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-100 transition-all"
          >
            Get Started <ArrowRight size={18} />
          </a>
        </div> */}

        {/* MAIN FOOTER GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* BRAND */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-white">CF</span>
              </div>
              <span className="text-xl font-bold">Clearform Studio</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              High-impact presentations and digital solutions for students, designers, architects, and businesses.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Services</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              {["Presentations", "Pitch Decks", "Posters & Creatives", "Brochures & PDFs", "Websites"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 hover:text-blue-400 transition-colors"
                    >
                      {item}
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-all"
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* TARGET AUDIENCE */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">We Work With</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              {["Students", "Interior Designers", "Architects", "Builders"].map(
                (item, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Contact</h3>
            <div className="space-y-4 text-sm">

              <a
                href="mailto:clearformstudio3@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail size={16} />
                <span>clearformstudio3@gmail.com</span>
              </a>

              <a
                href="tel:+917338495036"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Phone size={16} />
                <span>+91 73384 95036</span>
              </a>

              <a
                href="https://wa.me/917338495036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Clearform Studio. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Designed to win marks & clients.
          </p>
        </div>

      </div>
    </footer>
  );
}