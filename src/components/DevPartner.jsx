// src/components/DevPartner.jsx
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { ArrowUpRight, Sparkles, Code2, Clock3 } from "lucide-react";

export default function DevPartner() {
  const ref = useScrollAnimation();

  const handleOpenLink = () => {
    window.open("https://jprtechnosoft.com/", "_blank", "noopener,noreferrer");
  };

  const stats = [
    { icon: <Clock3 size={18} />, label: "15+ Years Experience" },
    { icon: <Code2 size={18} />, label: "Full Stack Experts" },
    { icon: <Sparkles size={18} />, label: "Trusted Partner" },
  ];

  return (
    <div
      id="dev-partner"
      ref={ref}
      className="fade-up mx-6 md:mx-10 mb-16 rounded-[3rem] overflow-hidden relative"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,245,255,0.9) 100%)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 8px 60px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.8) inset",
        border: "1px solid rgba(255,255,255,0.6)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative flex flex-col md:flex-row items-center gap-12 md:gap-16 px-10 md:px-20 py-16">
        {/* Left */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1" }}>
            <Sparkles size={14} />
            Development Partner
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: "#1a1a2e" }}>
            Need{" "}
            <span style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Development
            </span>{" "}
            Support?
          </h2>
        </div>

        {/* Right */}
        <div className="flex-1 space-y-8">
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#4b5563" }}>
            Connect with{" "}
            <strong style={{ color: "#1a1a2e" }}>JPR Technology</strong> — our trusted tech
            partner delivering cutting-edge solutions with precision and passion.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap gap-3">
            {stats.map((s, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "#374151",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <span style={{ color: "#6366f1" }}>{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleOpenLink}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 cursor-pointer border-none"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              color: "#ffffff",
              boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(99,102,241,0.35)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Code2 size={20} />
            Visit JPR Technology
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  );
}