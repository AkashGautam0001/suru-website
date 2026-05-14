// src/components/WhatIOffer.jsx
import React from "react";
import { PROCESS_CARDS } from "../data/siteData.js";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

export default function WhatIOffer() {
  const ref = useScrollAnimation();

  return (
    <section id="offer" ref={ref} className="fade-up py-24 px-6 md:px-12">
      <p className="text-center text-base font-medium text-[#00c57e] md:text-4xl mb-3 tracking-wide">What I Offer</p>
      <h2 className="text-5xl md:text-7xl lg:text-7xl font-medium text-center text-[#1f1f1f] leading-tight mb-5">
        A full UX capability
        <br />
        without full‑time cost.
      </h2>
      <p className="text-xl md:text-2xl text-center text-[#1f1f1f] mb-16">I act as your internal design head</p>

      {/* Horizontal scroll (all breakpoints) — left/right gutter inside scroll area */}
      <div
        className="flex w-full gap-4 overflow-x-auto scroll-smooth scroll-pl-6 scroll-pr-6 pb-3 pl-6 pr-6 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] snap-x snap-mandatory touch-pan-x md:scroll-pl-10 md:scroll-pr-10 md:pl-10 md:pr-10 lg:scroll-pl-14 lg:scroll-pr-14 lg:pl-14 lg:pr-14 [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}>
        {PROCESS_CARDS.map((card) => (
          <div
            key={card.num}
            className={`flex min-h-[380px] w-[200px] shrink-0 snap-start flex-col rounded-t-lg rounded-b-[9rem] border border-[#1f1f1f] bg-white px-6 py-8 sm:w-[280px] lg:w-[300px] ${card.shadowClass} transition-transform duration-200 md:hover:-translate-y-1`}>
            <div className="text-4xl font-black mb-2" style={{ color: card.color }}>
              {card.num}
            </div>
            <h3 className="text-2xl font-medium text-[#353638] mb-4">{card.title}</h3>
            <ul className="list-none space-y-2">
              {card.items.map((item) => (
                <li key={item} className="text-sm text-[#1f1f1f] flex items-start gap-2">
                  <span className="text-[#00D084] font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
