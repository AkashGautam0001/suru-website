// src/pages/PortfolioPage.jsx
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const caseStudies = [
  { id: 1, title: "SaaS Dashboard Redesign", category: "Web App", color: "#c8e6ff", result: "40% retention boost" },
  { id: 2, title: "FinTech Mobile App", category: "Mobile", color: "#ffd1fd", result: "2× activation rate" },
  { id: 3, title: "EdTech Onboarding", category: "Web App", color: "#d0ffe8", result: "Onboarding time ↓ 60%" },
  { id: 4, title: "E-Commerce UX Audit", category: "Audit", color: "#fff3c8", result: "15 critical UX fixes" },
  { id: 5, title: "Healthcare Portal", category: "Enterprise", color: "#ffe0f0", result: "User satisfaction +35%" },
  { id: 6, title: "B2B Analytics Platform", category: "SaaS", color: "#e8e0ff", result: "Complex data simplified" },
];

export default function PortfolioPage() {
  return (
    <div className="bg-[#e5f4fa] min-h-screen font-[Poppins]">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12">
        <p className="text-base font-medium text-[#00c57e] mb-3 tracking-wide">All Work</p>
        <h1 className="text-5xl md:text-7xl font-medium text-[#1f1f1f] leading-tight mb-16">
          Selected Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200"
              style={{ background: item.color }}
            >
              <div className="h-56 flex items-center justify-center text-6xl">🖼️</div>
              <div className="p-6 bg-white">
                <span className="text-xs font-semibold text-[#00c57e] uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-[#1f1f1f] mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-black/50">Result: {item.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
