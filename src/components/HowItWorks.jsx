// src/components/HowItWorks.jsx
import React from "react";
import { HOW_STEPS } from "../data/siteData.js";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

const EXPERTS = [
  {
    name: "Rohit Gaur",
    role: "Founder - AI",
    college: "IIT - Mumbai",
    exCompany: "",
    exLogo: null,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    circleBg: "#e63946",
  },
  {
    name: "Persainjit Singh",
    role: "Founder - Linengrass",
    college: "IIT - Mumbai",
    exCompany: "zomato",
    exColor: "#E23744",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    circleBg: "#e0dede",
  },
  {
    name: "Divyansh Raj",
    role: "Founder - TheBlissHouse",
    college: "IIT - Mumbai",
    exCompany: "zomato",
    exColor: "#E23744",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    circleBg: "#c9b99a",
  },
  {
    name: "Divyansh Raj",
    role: "Founder - TheBlissHouse",
    college: "IIT - Mumbai",
    exCompany: "zomato",
    exColor: "#E23744",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    circleBg: "#b5c4d4",
  },
  {
    name: "Komal Sharma",
    role: "Founder - StyleHub",
    college: "IIT - Delhi",
    exCompany: "zomato",
    exColor: "#E23744",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    circleBg: "#d4b5c4",
  },
];

// Duplicate for infinite scroll
const SCROLL_ITEMS = [...EXPERTS, ...EXPERTS];

export default function HowItWorks() {
  const ref = useScrollAnimation();

  return (
    <section
      id="how"
      ref={ref}
      className="fade-up py-24"
      style={{
        background: "linear-gradient(135deg, #e8e6f5 0%, #f0eef8 40%, #eaf0fb 100%)",
      }}
    >
      {/* ── Top: How It Works Grid ── */}
      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start max-w-6xl mx-auto">

          {/* Left */}
          <div>
            <p className="text-base font-medium text-[#00c57e] mb-3 tracking-wide">
              How It Works
            </p>
            <h2
              className="font-bold text-[#353638] leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Simple,<br />fast,<br />results‑driven.
            </h2>
            <p className="text-lg text-black/50 mt-6 leading-relaxed max-w-sm">
              No long contracts, no bloated processes. Just focused design that
              moves your product forward.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-white px-9 py-4 rounded-full text-lg font-medium no-underline hover:-translate-y-0.5 transition-transform mt-8"
              style={{ background: "#2b2b2b" }}
            >
              Talk to an expert ↗
            </a>
          </div>

          {/* Right — Steps */}
          <div className="flex flex-col gap-10">
            {HOW_STEPS.map((step, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div
                  className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl shadow-sm"
                  style={{ background: "#ec74e8" }}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#353638] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-[#1f1f1f] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom: Scrolling Expert Cards ── */}
      <div className="mt-24 overflow-hidden relative">

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "100px",
            background: "linear-gradient(to right, #ece9f6, transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "100px",
            background: "linear-gradient(to left, #ece9f6, transparent)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex gap-6 w-max px-6"
          style={{
            animation: "scrollLeft 30s linear infinite",
            willChange: "transform",
          }}
        >
          {SCROLL_ITEMS.map((person, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center"
              style={{
                width: "clamp(200px, 22vw, 300px)",
              }}
            >
              {/* Arch Card */}
              <div
                className="w-full flex flex-col items-center pt-12 pb-8 px-6 relative"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  borderRadius: "9999px 9999px 24px 24px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  minHeight: "340px",
                }}
              >
                {/* Circle Avatar — overlaps top */}
                <div
                  className="flex-shrink-0 overflow-hidden"
                  style={{
                    width: "clamp(90px, 12vw, 130px)",
                    height: "clamp(90px, 12vw, 130px)",
                    borderRadius: "50%",
                    background: person.circleBg,
                    marginTop: "clamp(-45px, -6vw, -65px)",
                    border: "4px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <p
                  className="font-bold text-[#0f0f0f] text-center mt-5 leading-tight"
                  style={{ fontSize: "clamp(16px, 2vw, 22px)" }}
                >
                  {person.name}
                </p>

                {/* Role */}
                <p
                  className="text-[#555] text-center mt-1"
                  style={{ fontSize: "clamp(12px, 1.3vw, 15px)" }}
                >
                  {person.role}
                </p>

                {/* College */}
                <p
                  className="text-[#555] text-center mt-4"
                  style={{ fontSize: "clamp(12px, 1.3vw, 15px)" }}
                >
                  {person.college}
                </p>

                {/* Ex Company */}
                {person.exCompany && (
                  <div className="flex items-center gap-2 mt-6">
                    <span
                      className="text-[#555]"
                      style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
                    >
                      ex
                    </span>
                    <span
                      className="font-black italic"
                      style={{
                        color: person.exColor,
                        fontSize: "clamp(18px, 2.5vw, 28px)",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      {person.exCompany}
                    </span>
                  </div>
                )}

                {/* No company placeholder */}
                {!person.exCompany && (
                  <div className="mt-6">
                    <span
                      className="text-[#555]"
                      style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
                    >
                      ex
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      

      {/* ── Keyframe ── */}
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>

  );
}