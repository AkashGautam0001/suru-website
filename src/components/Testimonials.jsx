// src/components/Testimonials.jsx
import React, { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { Play } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Persainjit Singh",
    role: "Founder LinenGrass",
    text: "From idea to execution, we move fast, think smart, and design experiences that truly connect with users.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lucky Rohilla",
    role: "Founder Quantel.in",
    text: "From idea to execution, we move fast, think smart, and design experiences that truly connect.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Komal Sharma",
    role: "Founder The Bliss House",
    text: "From idea to execution, we move fast, think smart, and design experiences users love.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rahul Mehra",
    role: "Founder TechNova",
    text: "Ashwani understood our vision immediately and delivered beyond expectations every single time.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Priya Kapoor",
    role: "Founder StyleHub",
    text: "The designs were clean, conversion-focused, and delivered on time. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Verma",
    role: "Founder GrowthLab",
    text: "Working with Ashwani felt like having a senior designer embedded in our team full time.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Sneha Joshi",
    role: "Founder MindBridge",
    text: "Our user retention jumped 40% after the redesign. The UX thinking was next level.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Founder CloudBase",
    text: "Fast, reliable, and incredibly talented. The best design partner we've worked with.",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

// Duplicate for seamless infinite loop
const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const ref       = useScrollAnimation();
  const trackRef  = useRef(null);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="fade-up py-24 overflow-hidden"
      style={{ background: "#dff0fa" }}
    >
      {/* ── Heading ── */}
      <div className="text-center px-126 mb-36">
        <h1
          className="text-semibold text-[#0f0f0f] leading-tight mb-4"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
        >
          Trusted by Startup<br />Game-Changers
        </h1>
        <p className="text-[#444] text-base sm:text-lg font-normal">
          10+ Entrepreneurs I've Helped<br />Shape Better Products
        </p>
      </div>

      {/* ── Scrolling Track ── */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: "80px", background: "linear-gradient(to right, #dff0fa, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: "80px", background: "linear-gradient(to left, #dff0fa, transparent)" }}
        />

        {/* Animated row */}
        <div
          ref={trackRef}
          className="flex gap-5 w-max"
          style={{
            animation: "scrollLeft 35s linear infinite",
            willChange: "transform",
          }}
        >
          {ITEMS.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden"
              style={{
                width: "clamp(260px, 30vw, 440px)",
                borderRadius: "20px",
                background: "#fff",
                boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              }}
            >
              {/* Photo with play button */}
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Green play button */}
                <button
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center transition-transform hover:scale-110"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "#00c57e",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(0,197,126,0.45)",
                  }}
                >
                  <Play size={22} color="white" fill="white" />
                </button>
              </div>

              {/* Text content */}
              <div className="px-5 pt-4 pb-6">
                <p className="font-bold text-[#0f0f0f] text-base sm:text-lg mb-0.5">
                  {t.name}
                </p>
                <p
                  className="font-semibold text-sm mb-3"
                  style={{ color: "#378ADD" }}
                >
                  {t.role}
                </p>
                <p className="text-[#333] text-sm leading-relaxed line-clamp-3">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Keyframe animation ── */}
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}