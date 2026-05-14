// src/components/About.jsx
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import ashwaniImg from "../assets/images/ashwani.png";
import { PillCta } from "./PillCta.jsx";

import FigmaIcon from "../assets/icons/Figma.png";
import XDIcon from "../assets/icons/XD.png";
import IllustratorIcon from "../assets/icons/Illustrator.png";
import PhotoshopIcon from "../assets/icons/Photshop.png";
import AnimateIcon from "../assets/icons/Animate.png";
import ChatGPTIcon from "../assets/icons/ChatGPT.png";

const GREEN_MOBILE = "#00B16A";
const GREEN_DESKTOP = "#00c57e";

const TOOLS = [
  { name: "Figma", icon: FigmaIcon, shadow: "0px 8px 24px rgba(0, 0, 0, 0.6)" },
  { name: "XD", icon: XDIcon, shadow: "0px 8px 24px rgba(255, 61, 210, 0.60)" },
  { name: "Illustrator", icon: IllustratorIcon, shadow: "0px 8px 24px rgba(255, 122, 0, 0.60)" },
  { name: "Photoshop", icon: PhotoshopIcon, shadow: "0px 8px 24px rgba(0, 130, 255, 0.60)" },
  { name: "Animate", icon: AnimateIcon, shadow: "0px 8px 24px rgba(120, 80, 255, 0.60)" },
  { name: "ChatGPT", icon: ChatGPTIcon, shadow: "0px 8px 24px rgba(16, 185, 160, 0.60)" },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <div id="about" ref={ref} className="fade-up">
      {/* ── Mobile only (reference layout) ── */}
      <section
        className="md:hidden mx-4 overflow-hidden"
        style={{
          background: GREEN_MOBILE,
          borderTopLeftRadius: 0,
          borderTopRightRadius: "3rem",
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: "3rem",
          boxShadow: "0 20px 50px rgba(0, 177, 106, 0.22)",
        }}>
        {/* Profile: photo + fade into green */}
        <div className="flex flex-col items-center px-6 pt-10 pb-2">
          <div className="relative w-full max-w-[300px] mx-auto">
            <div className="relative w-full overflow-hidden rounded-t-lg aspect-[3/3.65] max-h-[320px]">
              <img src={ashwaniImg} alt="Ashwani Tyagi" className="w-full h-full object-cover object-top block" />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
                style={{
                  background: `linear-gradient(to top, ${GREEN_MOBILE} 0%, ${GREEN_MOBILE} 35%, transparent 100%)`,
                }}
              />
            </div>
          </div>
          <p className="text-white font-bold text-lg sm:text-xl mt-5 mb-0 text-center">Ashwani Tyagi</p>
          <p className="text-white/95 text-sm font-normal mt-1.5 text-center">UI/UX Strategy Partner</p>
        </div>

        {/* About copy: left-aligned */}
        <div className="px-6 pt-8 pb-10">
          <h2 className="font-bold text-white text-3xl sm:text-4xl leading-tight mb-5 text-left">About Me</h2>
          <p className="text-white leading-relaxed mb-4 text-sm sm:text-[15px] text-left">
            15+ years of experience in UI/UX design, product design, and digital transformation across{" "}
            <strong className="font-bold text-white">gaming, e-learning, publishing, and technology.</strong> Proven
            track record of driving user{" "}
            <strong className="font-bold text-white">trust, engagement, and revenue growth</strong> through design
            innovation.
          </p>
          <p className="text-white leading-relaxed mb-8 text-sm sm:text-[15px] text-left">
            Skilled at <strong className="font-bold text-white">end-to-end product journeys</strong> – from onboarding
            flows and in-app transactions to content design and referral systems.
          </p>

          <div className="mb-8 text-left">
            <PillCta
              as="a"
              href="https://www.linkedin.com/in/ashwanityagi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: "#EC74E8" }}
              className="text-sm sm:text-base">
              Linkedin
            </PillCta>
          </div>

          {/* Tools capsule — single row, centered */}
          <div className="flex justify-center">
            <div
              className="inline-flex flex-wrap items-end gap-4 sm:gap-5 overflow-x-auto max-w-full px-4 py-4 sm:px-6 sm:py-5"
              style={
                {
                  // background: "rgba(255,255,255,0.22)",
                  // backdropFilter: "blur(20px)",
                  // WebkitBackdropFilter: "blur(20px)",
                  // borderRadius: "999px",
                  // boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
                }
              }>
              {TOOLS.map(({ name, icon, shadow }) => (
                <div key={name} className="flex flex-col items-center gap-1.5 shrink-0 min-w-[44px]">
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "14px",
                      boxShadow: shadow,
                    }}>
                    <img src={icon} alt={name} className="w-full h-full object-contain rounded-[14px] block" />
                  </div>
                  <span className="text-white text-center font-normal leading-tight text-[10px] sm:text-[11px] max-w-[64px]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Desktop / tablet — unchanged from previous layout ── */}
      <section
        className="hidden md:block overflow-hidden"
        style={{
          background: GREEN_DESKTOP,
          borderRadius: "0 300px 300px 0",
          maxWidth: "95%",
        }}>
        <div className="flex flex-col md:flex-row items-center md:items-stretch px-6 sm:px-10 md:px-16 pt-10 md:pt-16 pb-10 md:pb-0 gap-10 md:gap-0">
          <div className="flex-1 flex flex-col justify-center md:pr-12 z-10 md:pb-16">
            <h2 className="font-bold text-white leading-tight mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              About Me
            </h2>
            <p className="text-white leading-relaxed mb-4 text-sm sm:text-base md:text-lg">
              15+ years of experience in UI/UX design, product design, and digital transformation across{" "}
              <strong className="font-bold">gaming, e-learning, publishing, and technology.</strong> Proven track record
              of driving user <strong className="font-bold">trust, engagement, and revenue growth</strong> through
              design innovation.
            </p>
            <p className="text-white leading-relaxed mb-8 text-sm sm:text-base md:text-lg">
              Skilled at <strong className="font-bold">end-to-end product journeys</strong> – from onboarding flows and
              in-app transactions to content design and referral systems.
            </p>
            <div className="mb-8">
              <PillCta
                as="a"
                href="https://www.linkedin.com/in/ashwanityagi"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#EC74E8" }}
                className="text-sm sm:text-base">
                Linkedin
              </PillCta>
            </div>
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
              }}>
              {TOOLS.map(({ name, icon, shadow }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "16px",
                      boxShadow: shadow,
                    }}>
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
                  <span
                    className="text-white text-center"
                    style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.2 }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative flex-shrink-0 flex items-end justify-center mx-auto md:mx-0 mb-14"
            style={{ width: "min(300px, 45vw)" }}>
            <img
              src={ashwaniImg}
              alt="Ashwani Tyagi"
              className="w-full object-cover object-top block"
              style={{
                height: "clamp(300px, 45vw, 460px)",
                borderRadius: "24px 24px 0 0",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 mb-4"
              style={{
                width: "min(500px, 45vw)",
                background: "#111111",
                borderRadius: "24px 0 24px 24px",
                padding: "14px 28px",
              }}>
              <p className="text-white font-bold m-0 text-base sm:text-lg">Ashwani Tyagi</p>
              <p className="m-0 mt-1 text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                UI/UX Strategy Partner
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
