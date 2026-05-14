// src/components/TrustedBy.jsx
import React from "react";
import { MARQUEE_ITEMS } from "../data/siteData.js";

export default function TrustedBy() {
  return (
    <div
      id="trusted"
      className="py-6 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.46)", backdropFilter: "blur(4px)", borderTop: "1px solid rgba(255,255,255,.6)", borderBottom: "1px solid rgba(255,255,255,.6)" }}
    >
      <div className="content-area">
        <p className="text-center text-sm font-medium text-black/40 mb-4 tracking-widest uppercase">
          Trusted by growing companies
        </p>
      </div>
      <div className="flex gap-20 animate-marquee whitespace-nowrap">
        {MARQUEE_ITEMS.map((item, i) => (
          <span key={i} className="text-2xl font-medium text-black/30 flex-shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
