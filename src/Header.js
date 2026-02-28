import React, { useState } from "react";
import { Menu, X, Instagram, Twitter, Facebook } from "lucide-react";
import logo from "./assets/jatinLogo.jpeg";
import Belogo from "./assets/BeProfile.jpeg";

export default function PortfolioHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500"
          />
          <div className="leading-tight">
            <h1 className="text-sm sm:text-base font-bold text-gray-900 tracking-wide">
              Design Your Thoughts
            </h1>
            <p className="text-xs text-gray-500">
              Jatin Sachan
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* BeLogo always visible */}
          <a href="https://www.behance.net/jatinsachan24"><img
            src={Belogo}
            alt="Be Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-gray-300"
          /></a>
          

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {[Twitter, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="https://www.instagram.com/jatinsachan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md transition-all duration-300 hover:scale-110 text-gray-600 hover:text-blue-600"
              >
                <Icon size={18} />
              </a>
            ))}

            <a
              href="https://www.instagram.com/jatinsachan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Let's Connect ❤️
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        } bg-white/90 backdrop-blur-md border-t`}
      >
        <div className="flex flex-col items-center gap-4">

          <div className="flex gap-4">
            {[Twitter, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="https://www.instagram.com/jatinsachan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:scale-110 transition"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <a
            href="https://www.instagram.com/jatinsachan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-4/5 text-center px-5 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md"
          >
            Let's Connect ❤️
          </a>
        </div>
      </div>
    </header>
  );
}