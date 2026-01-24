import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Liquid background layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-b border-white/30"></div>

      {/* Soft blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 right-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white font-bold flex items-center justify-center text-lg shadow-lg group-hover:scale-105 transition-transform">
              CF
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-bold text-slate-900">Clearform</span>
              <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Studio
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-2">
            {['Home', 'Services', 'Process', 'Samples', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="px-4 py-2 rounded-lg text-slate-800 font-medium hover:text-blue-600 hover:bg-white/40 transition-all"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
                Get Started
              </button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/40 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/40 p-4 space-y-2">
            {['Home', 'Services', 'Process', 'samples', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-slate-800 hover:bg-blue-50 hover:text-blue-600 font-medium transition"
              >
                {item}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-3 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
