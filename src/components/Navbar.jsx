// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "../data/siteData.js";
import logo from "../assets/logo/logo.png";
import { PillCta } from "./PillCta.jsx";

const SCROLL_DELTA = 6;
const TOP_THRESHOLD = 56;
const GREEN = "#00c57e";

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
      className={`fixed top-0 left-0 z-50 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 transition-transform duration-300 ease-out sm:px-8 md:px-16 lg:px-20 ${
        hidden ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      <a href="#hero" className="justify-self-start no-underline" aria-label="Suru Design home">
        <img
          src={logo}
          alt="Suru Design"
          className="h-14 w-auto object-contain sm:h-16 md:h-[4.25rem]"
        />
      </a>

      <div className="col-start-2 hidden items-center justify-center md:flex">
        <div className="flex items-center gap-6 rounded-full border border-white/70 bg-white/75 px-8 py-2.5 text-[#1f1f1f] shadow-sm backdrop-blur-md lg:gap-10 lg:px-10 lg:py-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1f1f1f] no-underline transition-colors duration-200 hover:text-[#00c57e] lg:text-base"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="col-start-3 justify-self-end flex flex-col gap-1.5 p-2 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-[#1f1f1f] transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#1f1f1f] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#1f1f1f] transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {menuOpen && (
        <div className="pointer-events-auto absolute left-0 top-full flex w-full flex-col items-center gap-5 border-t border-black/5 bg-white/95 py-6 shadow-lg backdrop-blur-md md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-[#1f1f1f] no-underline transition-colors hover:text-[#00c57e]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <PillCta
            as="a"
            href="#contact"
            style={{ background: GREEN }}
            onClick={() => setMenuOpen(false)}
          >
            Free Consultation
          </PillCta>
        </div>
      )}
    </nav>
  );
}
