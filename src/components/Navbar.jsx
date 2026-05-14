// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "../data/siteData.js";
import logo from "../assets/logo/logo.png";
import { PillCta } from "./PillCta.jsx";

const SCROLL_DELTA = 6;
const TOP_THRESHOLD = 56;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const frame = useRef(0);

  useEffect(() => {
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  useEffect(() => {
    lastY.current = window.scrollY || document.documentElement.scrollTop;

    const onScroll = () => {
      if (menuOpen) {
        setHidden(false);
        lastY.current = window.scrollY || document.documentElement.scrollTop;
        return;
      }

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const y = window.scrollY || document.documentElement.scrollTop;
        const delta = y - lastY.current;

        if (y < TOP_THRESHOLD) {
          setHidden(false);
        } else if (delta > SCROLL_DELTA) {
          setHidden(true);
        } else if (delta < -SCROLL_DELTA) {
          setHidden(false);
        }

        lastY.current = y;
        frame.current = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-1 transition-transform duration-300 ease-out md:px-20 ${
        hidden ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
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
        type="button"
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-[#1f1f1f] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#1f1f1f] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#1f1f1f] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="pointer-events-auto absolute left-0 top-full flex w-full flex-col items-center gap-5 bg-white/90 py-6 shadow-lg backdrop-blur-md md:hidden">
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
          <PillCta
            as="a"
            href="#contact"
            style={{ background: "#00c57e" }}
            onClick={() => setMenuOpen(false)}
          >
            Free Consultation
          </PillCta>
        </div>
      )}
    </nav>
  );
}
