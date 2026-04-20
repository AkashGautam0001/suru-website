// src/components/FAQ.jsx
import React, { useState } from "react";
import { FAQS } from "../data/siteData.js";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useScrollAnimation();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" ref={ref} className="fade-up py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start max-w-6xl mx-auto">
        {/* Left */}
        <div>
          <p className="font-medium text-4xl md:text-5xl text-[#00c57e] mb-3 tracking-wide">FAQs</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#353638] leading-tight mb-6">
            Have questions?<br />Get them answered
          </h2>
          <p className="text-2xl md:text-3xl text-[#1f1f1f] leading-relaxed">
            Join industry experts who've turned startup ideas into success stories
          </p>
        </div>

        {/* Right — Accordion */}
        <div className="flex flex-col">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-[#ccc] py-5 cursor-pointer ${i === FAQS.length - 1 ? "border-b-0" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center gap-4">
                <span className="text-base md:text-lg text-[#1f1f1f] font-normal leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border border-[#999] text-[#999] text-2xl transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
              {openIndex === i && (
                <p className="text-sm md:text-base text-[#555] leading-relaxed mt-3 pr-12">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
