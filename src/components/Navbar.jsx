// src/components/Navbar.jsx
import React, { useState } from "react";
import { NAV_LINKS } from "../data/siteData.js";
import logo from '../assets/logo/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-20 py-1 flex items-center justify-between">
      {/* Logo */}
      <a href="#hero" className="no-underline">
        <img src={logo} alt="Suru Logo" className="h-20 w-auto" />
      </a>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8 lg:gap-10 items-center bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/60">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-base lg:text-lg font-medium text-[#1f1f1f] no-underline hover:text-[#00c57e] transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Badge */}
      <div className="hidden md:flex gap-4 items-center bg-white/40 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium text-[#686868] border border-white/60">
        <span>Ashwani Tyagi</span>
        <span>Startup UI/UX Designer</span>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-[#1f1f1f] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[#1f1f1f] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-[#1f1f1f] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center py-6 gap-5 shadow-lg md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-[#1f1f1f] no-underline hover:text-[#00c57e] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#00c57e] text-white px-6 py-2 rounded-full font-semibold hover:-translate-y-0.5 transition-transform"
            onClick={() => setMenuOpen(false)}
          >
            Free Consultation ↗
          </a>
        </div>
      )}
    </nav>
  );
}
