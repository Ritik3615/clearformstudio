import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">

      {/* Dark glass background */}
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-xl border-b border-gray-800"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center">
              <img src="/clearformlogo.svg" alt="logo" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-bold text-white">Clearform</span>
              <span className="text-xs text-blue-400 font-semibold">
                Studio
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-2">
            {["Home", "Services", "Process", "Samples", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg text-gray-300 font-medium hover:text-white hover:bg-gray-800 transition"
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/login">
              <button className="px-6 cursor-pointer py-2 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 rounded-2xl bg-gray-900/95 backdrop-blur-xl shadow-xl border border-gray-800 p-4 space-y-2">
            {["Home", "Services", "Process", "Samples", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white font-medium transition"
                >
                  {item}
                </Link>
              )
            )}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-3 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}