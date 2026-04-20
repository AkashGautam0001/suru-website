// src/components/Services.jsx
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import {
  Compass,
  Layers,
  Smartphone,
  FlaskConical,
  BarChart2,
  Repeat2,
} from "lucide-react";

const SERVICES = [
  {
    icon: Compass,
    color: "#ec74e8",
    bgColor: "rgba(236,116,232,0.12)",
    title: "UX Strategy & Research",
    items: [
      "User interviews & personas",
      "Journey mapping",
      "Competitive analysis",
      "Information architecture",
    ],
  },
  {
    icon: Layers,
    color: "#00c57e",
    bgColor: "rgba(0,197,126,0.12)",
    title: "UI Design & Design Systems",
    items: [
      "Component libraries",
      "Visual design language",
      "Responsive layouts",
      "Design tokens",
    ],
  },
  {
    icon: Smartphone,
    color: "#6198ff",
    bgColor: "rgba(97,152,255,0.12)",
    title: "Product & Mobile Design",
    items: [
      "iOS & Android design",
      "Onboarding flows",
      "In-app transactions",
      "Referral systems",
    ],
  },
  {
    icon: FlaskConical,
    color: "#f5a623",
    bgColor: "rgba(245,166,35,0.12)",
    title: "Prototyping & Testing",
    items: [
      "Interactive prototypes",
      "Usability testing",
      "A/B test design",
      "Accessibility audits",
    ],
  },
  {
    icon: BarChart2,
    color: "#e63946",
    bgColor: "rgba(230,57,70,0.12)",
    title: "Growth & Conversion Design",
    items: [
      "Landing page design",
      "Funnel optimization",
      "Retention-focused UX",
      "Revenue growth flows",
    ],
  },
  {
    icon: Repeat2,
    color: "#9b59b6",
    bgColor: "rgba(155,89,182,0.12)",
    title: "Ongoing Design Partnership",
    items: [
      "Dedicated design support",
      "Weekly sprints",
      "Async collaboration",
      "Slack & Figma access",
    ],
  },
];

export default function Services() {
  const ref = useScrollAnimation();

  return (
    <section
      id="services"
      ref={ref}
      className="fade-up py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12"
      style={{
        background: "linear-gradient(to top, #e5f4fa, #ffd1fd 50%)",
      }}
    >
      {/* ── Header ── */}
      <div className="max-w-6xl mx-auto">
        <p className="text-sm sm:text-base font-medium text-[#00c57e] mb-3 tracking-wide">
          Services
        </p>
        <h2
          className="font-medium text-[#1f1f1f] leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
        >
          Everything your product needs
        </h2>
        <p className="text-base sm:text-lg text-black/50 mb-10 sm:mb-14 leading-relaxed max-w-xl">
          From UX strategy to pixel-perfect delivery — all under one roof.
        </p>

        {/* ── Row 1: 4 cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5">
          {SERVICES.slice(0, 4).map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        {/* ── Row 2: 2 cards centered ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto">
          {SERVICES.slice(4).map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  const { icon: Icon, color, bgColor, title, items } = service;

  return (
    <div
      className="bg-white flex flex-col hover:shadow-lg transition-shadow duration-200"
      style={{
        borderRadius: "clamp(1.5rem, 3vw, 2.5rem)",
        padding: "clamp(1.5rem, 3vw, 2.5rem)",
        minHeight: "clamp(280px, 30vw, 380px)",
      }}
    >
      {/* Icon box */}
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: "clamp(52px, 7vw, 72px)",
          height: "clamp(52px, 7vw, 72px)",
          borderRadius: "clamp(12px, 1.5vw, 18px)",
          background: bgColor,
          marginBottom: "clamp(1rem, 2vw, 1.5rem)",
        }}
      >
        <Icon
          color={color}
          style={{
            width: "clamp(24px, 3.5vw, 34px)",
            height: "clamp(24px, 3.5vw, 34px)",
          }}
          strokeWidth={1.8}
        />
      </div>

      {/* Title */}
      <h3
        className="font-semibold text-[#1f1f1f] mb-4 leading-snug"
        style={{ fontSize: "clamp(15px, 1.6vw, 18px)" }}
      >
        {title}
      </h3>

      {/* Items */}
      <ul className="list-none space-y-2 mt-auto">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2"
            style={{ fontSize: "clamp(12px, 1.2vw, 14px)" }}
          >
            <span
              className="font-bold flex-shrink-0 mt-0.5"
              style={{ color: color }}
            >
              &gt;
            </span>
            <span className="text-[#444] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}