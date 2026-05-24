// src/components/UXProblems.jsx
import React, { useState } from "react";
import "./uxProblemsSection.css";

import moneyIcon from "../assets/icons/ux_problems_icons/Money.png";
import infoIcon from "../assets/icons/ux_problems_icons/I.png";
import directionIcon from "../assets/icons/ux_problems_icons/Direction.png";
import horseIcon from "../assets/icons/ux_problems_icons/Hourse.png";
import snailIcon from "../assets/icons/ux_problems_icons/Snail.png";
import growthIcon from "../assets/icons/ux_problems_icons/Growth.png";
import droppingIcon from "../assets/icons/ux_problems_icons/Dropping.png";
import confusingIcon from "../assets/icons/ux_problems_icons/confusing.png";
import inconsistentIcon from "../assets/icons/ux_problems_icons/inconsistent.png";
import scaleUxIcon from "../assets/icons/ux_problems_icons/Scale_UX.png";
import slowIterationIcon from "../assets/icons/ux_problems_icons/slow_iteration.png";
import starIcon from "../assets/icons/ux_problems_icons/Star.png";

const UX_PROBLEM_SETS = {
  startup: {
    left: [
      {
        slot: "left1",
        icon: moneyIcon,
        parts: [
          { text: "Senior UX hiring is " },
          { text: "expensive", highlight: true },
        ],
      },
      {
        slot: "left2",
        icon: infoIcon,
        parts: [
          { text: "Juniors lack product " },
          { text: "maturity", highlight: true },
        ],
      },
    ],
    hero: {
      slot: "hero",
      icon: directionIcon,
      hero: true,
      stacked: true,
      iconScale: "lg",
      lines: [
        { text: "Founders struggle" },
        { text: "with" },
        { text: "UX direction", highlight: true },
      ],
    },
    right: [
      {
        slot: "right1",
        icon: horseIcon,
        parts: [
          { text: "No clear " },
          { text: "UX strategy", highlight: true },
        ],
      },
      {
        slot: "right2",
        icon: snailIcon,
        parts: [
          { text: "Slow product " },
          { text: "decisions", highlight: true },
        ],
      },
      {
        slot: "right3",
        icon: growthIcon,
        parts: [
          { text: "Poor UX " },
          { text: "slows growth", highlight: true },
        ],
      },
    ],
  },
  product: {
    left: [
      {
        slot: "left1",
        icon: droppingIcon,
        parts: [
          { text: "User retention starts " },
          { text: "dropping", highlight: true },
        ],
      },
      {
        slot: "left2",
        icon: confusingIcon,
        parts: [
          { text: "Features feel cluttered and " },
          { text: "confusing", highlight: true },
        ],
      },
    ],
    hero: {
      slot: "hero",
      icon: inconsistentIcon,
      hero: true,
      stacked: true,
      lines: [
        { text: "Product UX" },
        { text: "becomes" },
        { text: "inconsistent", highlight: true },
      ],
    },
    right: [
      {
        slot: "right1",
        icon: scaleUxIcon,
        parts: [
          { text: "Hard to " },
          { text: "scale UX", highlight: true },
        ],
      },
      {
        slot: "right2",
        icon: slowIterationIcon,
        parts: [
          { text: "Slow iteration ", highlight: true },
          { text: "across teams" },
        ],
      },
      {
        slot: "right3",
        icon: starIcon,
        parts: [
          { text: "No " },
          { text: "UX leadership", highlight: true },
        ],
      },
    ],
  },
};

function ProblemCard({ card }) {
  const prefix = card.parts?.filter((p) => !p.highlight) ?? [];
  const highlight = card.parts?.find((p) => p.highlight);

  if (card.hero && card.stacked) {
    return (
      <article className={`ux-card ux-card--${card.slot} ux-card--hero ux-card--hero-stacked`}>
        {card.icon ? (
          <div className="ux-card__icon-wrap">
            <img
              src={card.icon}
              alt=""
              className={`ux-card__icon${card.iconScale ? ` ux-card__icon--${card.iconScale}` : ""}`}
              aria-hidden
            />
          </div>
        ) : null}
        <div className="ux-card__copy">
          {card.lines.map((line, i) => (
            <p
              key={i}
              className={`ux-card__stack-line${line.highlight ? " ux-card__hl" : ""}`}
            >
              {line.text}
            </p>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className={`ux-card ux-card--${card.slot}${card.hero ? " ux-card--hero" : ""}`}>
      <img src={card.icon} alt="" className="ux-card__icon" aria-hidden />
      {card.hero ? (
        <div className="ux-card__copy">
          <p className="ux-card__line">{prefix.map((p) => p.text).join("")}</p>
          {highlight ? <p className="ux-card__hl">{highlight.text}</p> : null}
        </div>
      ) : (
        <p className="ux-card__text">
          {card.parts.map((part, i) =>
            part.highlight ? (
              <span key={i} className="ux-card__hl">
                {part.text}
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </p>
      )}
    </article>
  );
}

export default function UXProblems() {
  const [activeTab, setActiveTab] = useState("startup");
  const { left, hero, right } = UX_PROBLEM_SETS[activeTab];

  return (
    <section
      id="problems"
      className={`ux-problems py-16 sm:py-20 md:py-24 content-area${activeTab === "product" ? " ux-problems--product" : ""}`}
    >
      <h2 className="ux-problems__title">The UX problems</h2>

      <div className="ux-problems__toggle-wrap">
        <div className="ux-problems__toggle">
          {[
            { id: "startup", label: "Startup" },
            { id: "product", label: "Running Product" },
          ].map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`ux-problems__toggle-btn ux-problems__toggle-btn--${id}${activeTab === id ? " is-active" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="ux-bento" key={activeTab}>
        <div className="ux-bento__col ux-bento__col--left">
          {left.map((card) => (
            <ProblemCard key={`${activeTab}-${card.slot}`} card={card} />
          ))}
        </div>

        <div className="ux-bento__col ux-bento__col--center">
          <ProblemCard card={hero} />
        </div>

        <div className="ux-bento__col ux-bento__col--right">
          {right.map((card) => (
            <ProblemCard key={`${activeTab}-${card.slot}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
