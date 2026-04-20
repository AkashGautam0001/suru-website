// src/components/Portfolio.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Image } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

const portfolioItems = [
  { id: 1, label: "SaaS Dashboard Redesign", category: "Product Design", color: "#c8e6ff", tall: false },
  { id: 2, label: "FinTech Mobile App", category: "Mobile UX", color: "#ffd1fd", tall: true },
  { id: 3, label: "EdTech Onboarding", category: "UX Strategy", color: "#d0ffe8", tall: false },
  { id: 4, label: "E-Commerce UX Audit", category: "Audit & Research", color: "#fff3c8", tall: false },
  { id: 5, label: "Healthcare Portal", category: "Web Design", color: "#ffe0f0", tall: false },
];

export default function Portfolio() {
  const ref = useScrollAnimation();

  return (
    <section
      id="portfolio"
      ref={ref}
      className="fade-up py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-screen-xl mx-auto"
    >
      {/* Top Label */}
      <p className="text-4xl sm:text-6xl font-semibold text-[#00c57e] text-center mb-3 tracking-widest ">
        Portfolio
      </p>

      {/* Subheading */}
      <h2 className="text-base sm:text-lg md:text-xl text-center text-[#555] mb-12 sm:mb-16 leading-relaxed px-2">
        From idea to execution, we move fast, think smart,
        <br className="hidden sm:block" />
        and design experiences that users love.
      </h2>

      {/* Row: Selected Work + View All Button */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1f1f1f] leading-tight">
          Selected Work
        </h2>
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 bg-[#00c57e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium no-underline hover:-translate-y-1 transition-transform duration-200 self-start sm:self-auto w-fit"
        >
          View All
          <ArrowUpRight size={20} strokeWidth={2} />
        </Link>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer flex flex-col justify-between p-6 ${
              item.tall
                ? "sm:row-span-2 min-h-[320px] sm:min-h-[500px] md:min-h-[620px]"
                : "h-64 sm:h-72"
            }`}
            style={{ background: item.color }}
          >
            {/* Top: icon placeholder */}
            <div className="flex items-center justify-center flex-1">
              <div className="bg-white/50 rounded-2xl p-6 group-hover:bg-white/70 transition-colors duration-200">
                <Image
                  size={item.tall ? 56 : 44}
                  className="text-[#1f1f1f]/50 group-hover:text-[#1f1f1f]/80 transition-colors duration-200"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Bottom: label + category + arrow */}
            <div className="flex items-end justify-between mt-4">
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#1f1f1f]/50 mb-1">
                  {item.category}
                </p>
                <p className="text-[#1f1f1f] font-semibold text-base sm:text-lg leading-snug">
                  {item.label}
                </p>
              </div>
              <div className="ml-3 flex-shrink-0 bg-white/60 group-hover:bg-[#00c57e] rounded-full p-2 transition-colors duration-200">
                <ArrowUpRight
                  size={18}
                  className="text-[#1f1f1f] group-hover:text-white transition-colors duration-200"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center sm:justify-start">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 bg-[#00c57e] text-white px-8 sm:px-12 py-4 rounded-full text-base sm:text-lg font-medium no-underline hover:-translate-y-1 transition-transform duration-200"
        >
          View All Portfolio
          <ArrowUpRight size={20} strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}