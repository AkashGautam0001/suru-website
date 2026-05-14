// src/components/Services.jsx
import React from "react";
import {
  Target,
  Smartphone,
  Laptop,
  Rocket,
  Search,
  PenTool,
  UserRound,
  Clock,
  RefreshCw,
  Check,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import "./servicesSection.css";

const SERVICES = [
  {
    title: "Product UI/UX Design",
    accent: "#E53935",
    accentRgb: "229, 57, 53",
    geoHex: false,
    Icon: Target,
    items: [
      "End-to-end product design",
      "User research & flows",
      "Wireframes & high-fidelity UI",
      "Design systems",
      "UX audits & improvements",
    ],
  },
  {
    title: "Mobile App Design",
    accent: "#9333EA",
    accentRgb: "147, 51, 234",
    geoHex: true,
    Icon: Smartphone,
    items: [
      "iOS & Android app UI",
      "MVP design for startups",
      "Feature & interaction design",
      "Prototyping (Figma)",
      "Developer-ready files",
    ],
  },
  {
    title: "Website & Web App Design",
    accent: "#2563EB",
    accentRgb: "37, 99, 235",
    geoHex: false,
    Icon: Laptop,
    items: [
      "SaaS & dashboard design",
      "Marketing websites",
      "Landing pages",
      "Conversion-focused UX",
      "Responsive design",
    ],
  },
  {
    title: "MVP & Startup Design Support",
    accent: "#EA580C",
    accentRgb: "234, 88, 12",
    geoHex: true,
    Icon: Rocket,
    items: [
      "Idea → product design",
      "Rapid MVP design (2–4 weeks)",
      "Pitch deck & product visuals",
      "UX strategy",
      "Ongoing design support",
    ],
  },
  {
    title: "UX Audit",
    accent: "#16A34A",
    accentRgb: "22, 163, 74",
    geoHex: false,
    Icon: Search,
    items: [
      "Usability & heuristic evaluation",
      "User flow & journey analysis",
      "UX issues & friction points",
      "UI consistency",
      "Competitor UX review",
    ],
  },
  {
    title: "Brand & Visual Design (Optional)",
    accent: "#6D28D9",
    accentRgb: "109, 40, 217",
    geoHex: true,
    Icon: PenTool,
    items: [
      "Product branding",
      "Design system setup",
      "UI kits",
      "Iconography",
      "Visual consistency",
    ],
  },
  {
    title: "Part Time UI UX Consultant",
    accent: "#0284C7",
    accentRgb: "2, 132, 199",
    geoHex: false,
    dualIcon: true,
    Icon: UserRound,
    items: [
      "UX restructuring",
      "Wireframes & interactions",
      "High-fidelity app & web UI",
      "Design system & components",
      "Clickable Figma prototype",
      "Developer-ready handoff",
    ],
  },
  {
    title: "Redesign App & Web",
    accent: "#7C3AED",
    accentRgb: "124, 58, 237",
    geoHex: true,
    Icon: RefreshCw,
    items: [
      "UX restructuring",
      "Wireframes & interactions",
      "High-fidelity app & web UI",
      "Design system & components",
      "Clickable Figma prototype",
      "Developer-ready handoff",
    ],
  },
];

function ServiceCard({ service }) {
  const { title, accent, accentRgb, items, geoHex, Icon, dualIcon } = service;

  return (
    <article
      className="svc-card"
      style={
        {
          "--accent": accent,
          "--accent-rgb": accentRgb,
        }
      }
    >
      <div className="svc-card__dots" aria-hidden />
      <div className={geoHex ? "svc-card__geo svc-card__geo--hex" : "svc-card__geo"} aria-hidden />
      <div className="svc-card__blob" aria-hidden />

      <div
        className={`svc-card__icon-ring${dualIcon ? " svc-card__icon-ring--dual" : ""}`}
      >
        {dualIcon ? (
          <>
            <UserRound size={22} strokeWidth={2} color={accent} />
            <Clock size={17} strokeWidth={2} color={accent} />
          </>
        ) : (
          <Icon size={26} strokeWidth={2} color={accent} />
        )}
      </div>

      <h3 className="svc-card__title">{title}</h3>
      <div className="svc-card__rule" aria-hidden />

      <ul className="svc-card__list">
        {items.map((item) => (
          <li key={item}>
            <Check className="svc-card__check" size={16} strokeWidth={2.5} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="fade-up svc-section py-16 sm:py-20 md:py-28">
      <div className="svc-section__inner content-area">
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#00c57e] sm:text-left">
          Services
        </p>
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold leading-[1.12] tracking-tight text-[#0f172a] sm:text-left sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          Everything your product needs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:mx-0 sm:text-left sm:text-lg">
          From UX strategy to pixel-perfect delivery — all under one roof.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
