// src/components/About.jsx
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import ashwaniImg from "../assets/images/ashwani.png";
import { ArrowUpRight } from "lucide-react";

import FigmaIcon from "../assets/icons/Figma.png";
import XDIcon from "../assets/icons/XD.png";
import IllustratorIcon from "../assets/icons/Illustrator.png";
import PhotoshopIcon from "../assets/icons/Photshop.png";
import AnimateIcon from "../assets/icons/Animate.png";
import ChatGPTIcon from "../assets/icons/ChatGPT.png";

const TOOLS = [
  { name: "Figma",       icon: FigmaIcon,       shadow: "0px 8px 24px rgba(0, 0, 0, 0.6)"  },
  { name: "XD",          icon: XDIcon,          shadow: "0px 8px 24px rgba(255, 61, 210, 0.60)"  },
  { name: "Illustrator", icon: IllustratorIcon, shadow: "0px 8px 24px rgba(255, 122, 0,   0.60)" },
  { name: "Photoshop",   icon: PhotoshopIcon,   shadow: "0px 8px 24px rgba(0,   130, 255, 0.60)" },
  { name: "Animate",     icon: AnimateIcon,     shadow: "0px 8px 24px rgba(120, 80,  255, 0.60)" },
  { name: "ChatGPT",     icon: ChatGPTIcon,     shadow: "0px 8px 24px rgba(16,  185, 160, 0.60)" },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="fade-up overflow-hidden"
      style={{
        background: "#00c57e",
        borderRadius: "0 300px 300px 0",
        maxWidth: "95%",
      }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-stretch px-6 sm:px-10 md:px-16 pt-10 md:pt-16 pb-10 md:pb-0 gap-10 md:gap-0">

        {/* ── Left: Text Content ── */}
        <div className="flex-1 flex flex-col justify-center md:pr-12 z-10 md:pb-16">

          {/* Heading */}
          <h2 className="font-bold text-white leading-tight mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            About Me
          </h2>

          {/* Para 1 */}
          <p className="text-white leading-relaxed mb-4 text-sm sm:text-base md:text-lg">
            15+ years of experience in UI/UX design, product design, and digital
            transformation across{" "}
            <strong className="font-bold">
              gaming, e-learning, publishing, and technology.
            </strong>{" "}
            Proven track record of driving user{" "}
            <strong className="font-bold">
              trust, engagement, and revenue growth
            </strong>{" "}
            through design innovation.
          </p>

          {/* Para 2 */}
          <p className="text-white leading-relaxed mb-8 text-sm sm:text-base md:text-lg">
            Skilled at{" "}
            <strong className="font-bold">end-to-end product journeys</strong>{" "}
            – from onboarding flows and in-app transactions to content design
            and referral systems.
          </p>

          {/* LinkedIn Button */}
          <div className="mb-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium no-underline transition-transform hover:-translate-y-0.5 text-sm sm:text-base"
              style={{
                background: "#EC74E8",
                borderRadius: "999px",
                padding: "12px 26px",
              }}
            >
              Linkedin
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Tools Bar */}
          <div
            className="flex flex-wrap gap-6 sm:gap-8 items-center"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: "30px",
              padding: "20px 28px",
              width: "fit-content",
              maxWidth: "100%",
            }}
          >
            {TOOLS.map(({ name, icon, shadow }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                {/* Icon Box — no bg, only colored shadow */}
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "16px",
                    boxShadow: shadow,
                  }}
                >
                  <img
                    src={icon}
                    alt={name}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      borderRadius: "16px",
                      display: "block",
                    }}
                  />
                </div>
                {/* Label */}
                <span
                  className="text-white text-center"
                  style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.2 }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div
          className="relative flex-shrink-0 flex items-end justify-center mx-auto md:mx-0 mb-14"
          style={{ width: "min(300px, 45vw)" }}
        >
          <img
            src={ashwaniImg}
            alt="Ashwani Tyagi"
            className="w-full object-cover object-top block"
            style={{
              height: "clamp(300px, 45vw, 460px)",
              borderRadius: "24px 24px 0 0",
            }}
          />

          {/* Name Badge */}
          <div
            className="absolute bottom-0 left-0 right-0 mb-4"
            style={{
              width: "min(500px, 45vw)",
              background: "#111111",
              borderRadius: "24px 0 24px 24px",
              padding: "14px 28px",
            }}
          >
            <p className="text-white font-bold m-0 text-base sm:text-lg">
              Ashwani Tyagi
            </p>
            <p
              className="m-0 mt-1 text-xs sm:text-sm"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              UI/UX Strategy Partner
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}