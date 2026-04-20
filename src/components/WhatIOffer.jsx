// src/components/WhatIOffer.jsx
import React from "react";
import { PROCESS_CARDS } from "../data/siteData.js";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

export default function WhatIOffer() {
  const ref = useScrollAnimation();

  return (
    <section id="offer" ref={ref} className="fade-up py-24 px-6 md:px-12">
      <p className="text-center text-base font-medium text-[#00c57e] md:text-4xl mb-3 tracking-wide">
        What I Offer
      </p>
      <h2 className="text-5xl md:text-7xl lg:text-7xl font-medium text-center text-[#1f1f1f] leading-tight mb-5">
        A full UX capability<br/>without full‑time cost.
      </h2>
      <p className="text-xl md:text-2xl text-center text-[#1f1f1f] mb-16">
        I act as your internal design head
      </p>

      {/* Process Cards */}
      <div className="flex flex-wrap gap-4 justify-center">
        {PROCESS_CARDS.map((card) => (
          <div
            key={card.num}
            className={`bg-[#f1fbff] border border-[#1f1f1f] rounded-t-none rounded-b-[9rem] px-6 py-8 w-56 min-h-[380px] flex-shrink-0 flex flex-col ${card.shadowClass} transition-transform hover:-translate-y-1 duration-200`}
          >
            <div className="text-4xl font-black mb-2" style={{ color: card.color }}>
              {card.num}
            </div>
            <h3 className="text-2xl font-medium text-[#353638] mb-4">{card.title}</h3>
            <ul className="list-none space-y-2">
              {card.items.map((item) => (
                <li key={item} className="text-sm text-[#1f1f1f] flex items-start gap-2">
                  <span className="text-[#00c57e] font-bold flex-shrink-0">✓</span>
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
