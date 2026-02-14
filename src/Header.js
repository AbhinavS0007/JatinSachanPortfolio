import React, { useState } from "react";
import { Menu, X, Instagram, Twitter, Facebook, Heart } from "lucide-react";
import logo from './assets/jatinLogo.jpeg'

export default function PortfolioHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-100 px-4 sm:px-6 py-3 shadow-sm">

      {/* Top bar */}
      <div className="flex items-center justify-between">

        {/* Left: profile */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <div>
            <h1 className="text-sm sm:text-base font-semibold text-gray-900">
              Design Your Thoughts
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Jatin Sachan
            </p>
          </div>
        </div>

        {/* Desktop right section */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-gray-600 hover:bg-gray-50">
            <Twitter size={18} />
          </a>
          <a href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-gray-600 hover:bg-gray-50">
            <Instagram size={18} />
          </a>
          <a
            href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-gray-600 hover:bg-gray-50"
          >
            <Facebook size={18} />
          </a>


          <a href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer" className="w-full px-2 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
            Let's Connect   ❤️
          </a>

          {/* <button className="ml-2 px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
            Call on - +91-6565656565
          </button> */}
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 border-t pt-4">
          <div className="flex gap-3">
            <a href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-gray-600">
              <Twitter size={18} />
            </a>
            <a cla href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer" ssName="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-gray-600">
              <Instagram size={18} />
            </a>
            <a href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-gray-600">
              <Facebook size={18} />
            </a>
          </div>

          <a href="https://www.instagram.com/jatinsachan?igsh=ejVwaXY2ZTF4ZzZk&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer" className="w-full px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
            Let's Connect  ❤️
          </a>
          {/* <button className="w-full px-5 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
            Call on - +91-6565656565
          </button> */}
        </div>
      )}
    </header>
  );
}
