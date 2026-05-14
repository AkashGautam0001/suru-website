// src/components/Testimonials.jsx
import React from "react";
import { Rocket, LineChart, Handshake, Building2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import "./testimonialsSection.css";

import persainImg from "../assets/images/persain_jeet_singh.png";
import luckyImg from "../assets/images/lucky_rohila.png";
import divyanshImg from "../assets/images/divyansh_raj.png";
import naveenImg from "../assets/images/naveen_goswami.png";

const THEMES = [
  { accent: "#7C3AED", accentRgb: "124, 58, 237", soft: "rgba(124, 58, 237, 0.16)" },
  { accent: "#2563EB", accentRgb: "37, 99, 235", soft: "rgba(37, 99, 235, 0.14)" },
  { accent: "#16A34A", accentRgb: "22, 163, 74", soft: "rgba(22, 163, 74, 0.14)" },
];

const FOOTER_ICONS = [Rocket, LineChart, Handshake, Building2];

const REVIEWS = [
  {
    name: "Persainjit Singh",
    credential: "IIT – Bombay",
    text: "I've worked with Ashwani for the last 7 years on multiple products, and his UI/UX understanding has always been exceptional. Currently, he is helping us build the automation app and software for LinenGrass. His product thinking, problem-solving skills, and calm nature make him a valuable part of any team.",
    image: persainImg,
    footerLabel: "Founder",
    footerCompany: "LinenGrass",
  },
  {
    name: "Lucky Rohilla",
    credential: "IIT – Delhi",
    text: "Ashwani brings rare clarity to complex product flows. From first wireframes to polished UI, he thinks like a founder and ships like a senior in-house designer. Quantel's dashboard and onboarding would not be where they are without his ownership.",
    image: luckyImg,
    footerLabel: "Founder",
    footerCompany: "Quantel.in",
  },
  {
    name: "Divyansh Raj",
    credential: "IIT – Mumbai",
    text: "Working with Ashwani feels effortless — strong communication, fast iterations, and designs that actually convert. He helped us rethink the entire customer journey and the uplift in engagement spoke for itself.",
    image: divyanshImg,
    footerLabel: "Founder",
    footerCompany: "The Bliss House",
  },
  {
    name: "Naveen Goswami",
    credential: "Product & Growth Lead",
    text: "I've partnered with Ashwani across multiple initiatives. Whether it's a quick UX audit or a full product redesign, he consistently delivers thoughtful, user-centred work and collaborates seamlessly with engineering.",
    image: naveenImg,
    footerLabel: "Entrepreneur",
    footerCompany: "Serial ventures",
  },
];

const LOOP_REVIEWS = [...REVIEWS, ...REVIEWS];

function QuoteGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path
        fill="currentColor"
        d="M7.5 5.5c-2.5 0-4 1.8-4 4.3 0 1.6 1 3 2.4 3.4L4.5 16c-.1.4.3.7.7.5l4.8-2.6c.8-.4 1.3-1.2 1.3-2.1V9.5c0-1.4-1.1-2.5-2.5-2.5H7.5zm9.5 0c-2.5 0-4 1.8-4 4.3 0 1.6 1 3 2.4 3.4L14 16c-.1.4.3.7.7.5l4.8-2.6c.8-.4 1.3-1.2 1.3-2.1V9.5c0-1.4-1.1-2.5-2.5-2.5H17z"
      />
    </svg>
  );
}

function ReviewCard({ review, theme, FooterIcon }) {
  const t = THEMES[theme % THEMES.length];

  return (
    <article
      className="tst-card"
      style={
        {
          "--tst-accent": t.accent,
          "--tst-accent-rgb": t.accentRgb,
          "--tst-soft": t.soft,
        }
      }
    >
      <div className="tst-card__media">
        <div className="tst-card__media-blob" aria-hidden />
        <div className="tst-card__media-dots" aria-hidden />
        <div className="tst-card__media-frame">
          <img src={review.image} alt={review.name} loading="lazy" decoding="async" />
        </div>
        <div className="tst-card__quote" aria-hidden>
          <QuoteGlyph />
        </div>
      </div>

      <h3 className="tst-card__name">{review.name}</h3>
      <p className="tst-card__cred">{review.credential}</p>
      <p className="tst-card__text">{review.text}</p>

      <div className="tst-card__foot">
        <div className="tst-card__foot-icon">
          <FooterIcon strokeWidth={2.2} />
        </div>
        <div className="tst-card__foot-text">
          <p className="tst-card__foot-label">{review.footerLabel}</p>
          <p className="tst-card__foot-company">{review.footerCompany}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section id="testimonials" ref={ref} className="fade-up tst-section py-16 md:py-24">
      <div className="content-area">
        <div className="tst-section__head">
        <h2 className="tst-section__title">
          10+ Entrepreneurs I&apos;ve Helped Shape Better Products
        </h2>
        <div className="tst-section__rule" aria-hidden />
        </div>
      </div>

      <div className="tst-marquee">
        <div className="tst-marquee__fade tst-marquee__fade--l" aria-hidden />
        <div className="tst-marquee__fade tst-marquee__fade--r" aria-hidden />

        <div className="tst-marquee__track">
          {LOOP_REVIEWS.map((review, i) => {
            const FooterIcon = FOOTER_ICONS[i % FOOTER_ICONS.length];
            return (
              <ReviewCard
                key={`${review.name}-${i}`}
                review={review}
                theme={i % THEMES.length}
                FooterIcon={FooterIcon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
