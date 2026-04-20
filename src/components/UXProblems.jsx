import React, { useState } from "react";
import {
  DollarSign, GraduationCap, Compass,
  Users, BarChart2, RefreshCw
} from "lucide-react";

const PROBLEMS = {
  startup: [
    { icon: DollarSign, title: "Senior UX hire\nis expensive" },
    { icon: GraduationCap, title: "Juniors lack\nproduct maturity" },
    { icon: Compass, title: "Founders can't\nguide design" },
  ],
  product: [
    { icon: Users, title: "No design system\nor consistency" },
    { icon: BarChart2, title: "Hard to measure\nUX impact" },
    { icon: RefreshCw, title: "Design debt slows\nengineering" },
  ],
};

export default function UXProblems() {
  const [activeTab, setActiveTab] = useState("startup");

  return (
    <section id="problems" className="py-24 px-6 md:px-12">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-center text-[#1f1f1f] mb-12">
        The UX problems
      </h2>

      <div className="flex gap-0 bg-white/40 backdrop-blur-sm border border-[#d4d4d4] rounded-full p-1 w-fit mx-auto mb-16">
        {["startup", "product"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 md:px-10 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-250 cursor-pointer border-none ${
              activeTab === tab
                ? "bg-[#00c57e] text-white"
                : "bg-transparent text-[#808080] hover:text-[#1f1f1f]"
            }`}
          >
            {tab === "startup" ? "Startup" : "Running Product"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {PROBLEMS[activeTab].map(({ icon: Icon, title }, i) => (
          <div key={i} className="text-center">
            <div className="w-20 h-20 bg-white/60 rounded-full border border-[#d4d4d4] flex items-center justify-center mx-auto mb-4">
              <Icon size={32} className="text-[#808080]" />
            </div>
            <h3 className="text-lg font-medium leading-relaxed text-[#1f1f1f] whitespace-pre-line">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}