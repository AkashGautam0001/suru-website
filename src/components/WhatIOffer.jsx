// src/components/WhatIOffer.jsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PROCESS_CARDS } from "../data/siteData.js";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import "./whatIOfferSection.css";

const CARD_COUNT = PROCESS_CARDS.length;

function getScrollStepVh() {
  if (typeof window === "undefined") return 50;
  return window.matchMedia("(max-width: 639px)").matches ? 42 : 50;
}

export default function WhatIOffer() {
  const ref = useScrollAnimation();

  const stageRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const maxTranslateRef = useRef(0);

  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canGoForward, setCanGoForward] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [isScrollMode, setIsScrollMode] = useState(false);
  const [scrollStepVh, setScrollStepVh] = useState(getScrollStepVh);

  const measureLayout = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const maxScroll = Math.max(0, track.scrollWidth - viewport.clientWidth);
    maxTranslateRef.current = maxScroll;

    const scrollMode = maxScroll > 8;
    const centered = !scrollMode;

    setIsScrollMode(scrollMode);
    setIsCentered(centered);
    setScrollStepVh(getScrollStepVh());

    if (!scrollMode) {
      setTranslateX(0);
      setCanGoForward(false);
    }
  }, []);

  const syncScrollDrive = useCallback(() => {
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!stage || !viewport || !track || !isScrollMode) return;

    maxTranslateRef.current = Math.max(0, track.scrollWidth - viewport.clientWidth);
    const maxScroll = maxTranslateRef.current;

    const rect = stage.getBoundingClientRect();
    const stageTop = window.scrollY + rect.top;
    const scrollable = Math.max(stage.offsetHeight - window.innerHeight, 1);
    const progress = Math.min(1, Math.max(0, (window.scrollY - stageTop) / scrollable));

    setTranslateX(progress * maxScroll);

    const nextIndex =
      CARD_COUNT <= 1 ? 0 : Math.min(CARD_COUNT - 1, Math.round(progress * (CARD_COUNT - 1)));

    setActiveIndex(nextIndex);
    setCanGoForward(progress < 0.98);
  }, [isScrollMode]);

  useEffect(() => {
    measureLayout();
    if (isScrollMode) syncScrollDrive();
  }, [isScrollMode, measureLayout, syncScrollDrive]);

  useEffect(() => {
    const onResize = () => {
      measureLayout();
      if (isScrollMode) syncScrollDrive();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isScrollMode, measureLayout, syncScrollDrive]);

  useEffect(() => {
    if (!isScrollMode) return undefined;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        syncScrollDrive();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrollMode, syncScrollDrive]);

  const goForward = () => {
    const stage = stageRef.current;
    if (!stage || !isScrollMode) return;

    const nextIndex = Math.min(activeIndex + 1, CARD_COUNT - 1);
    const stageTop = window.scrollY + stage.getBoundingClientRect().top;
    const scrollable = Math.max(stage.offsetHeight - window.innerHeight, 1);
    const progress = CARD_COUNT <= 1 ? 0 : nextIndex / (CARD_COUNT - 1);

    window.scrollTo({
      top: stageTop + progress * scrollable,
      behavior: "smooth",
    });
  };

  const stageHeight =
    isScrollMode && CARD_COUNT > 1
      ? `calc(100dvh + ${(CARD_COUNT - 1) * scrollStepVh}dvh)`
      : "auto";

  const viewportClass = [
    "offer-track-viewport",
    isScrollMode && "offer-track-viewport--scroll-drive",
    isCentered && "offer-track-viewport--centered",
  ]
    .filter(Boolean)
    .join(" ");

  const trackClass = ["offer-track", isScrollMode && "offer-track--scroll-drive"]
    .filter(Boolean)
    .join(" ");

  return (
    <section id="offer" ref={ref} className="fade-up offer-section py-24">
      <div className="content-area">
        <p className="text-center text-base font-medium text-[#00c57e] md:text-4xl mb-3 tracking-wide">
          What I Offer
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-7xl font-medium text-center text-[#1f1f1f] leading-tight mb-5">
          A full UX capability
          <br />
          without full‑time cost.
        </h2>
        <p className="text-xl md:text-2xl text-center text-[#1f1f1f] mb-16">
          I act as your internal design head
        </p>
      </div>

      <div
        ref={stageRef}
        className={`offer-scroll-stage${isScrollMode ? " offer-scroll-stage--active" : ""}`}
        style={{ height: stageHeight }}
      >
        <div
          className={`offer-scroll-sticky${isScrollMode ? " offer-scroll-sticky--active" : ""}`}
        >
          <div className="content-area">
            <div className="offer-track-shell">
              <div ref={viewportRef} className={viewportClass}>
                <div
                  ref={trackRef}
                  className={trackClass}
                  style={
                    isScrollMode
                      ? { transform: `translate3d(-${translateX}px, 0, 0)` }
                      : undefined
                  }
                >
                  {PROCESS_CARDS.map((card) => (
                    <article key={card.num} className={`offer-card ${card.shadowClass}`}>
                      <div className="offer-card__head">
                        <div className="offer-card__num" style={{ color: card.color }}>
                          {card.num}
                        </div>
                        <ArrowRight
                          className="offer-card__arrow"
                          size={28}
                          strokeWidth={2.25}
                          style={{ color: card.color }}
                          aria-hidden
                        />
                      </div>
                      <h3 className="offer-card__title">{card.title}</h3>
                      <ul className="offer-card__list">
                        {card.items.map((item) => (
                          <li key={item} className="offer-card__item">
                            <span
                              className="offer-card__check"
                              style={{ color: card.color }}
                              aria-hidden
                            >
                              ✓
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="offer-forward-btn"
                onClick={goForward}
                disabled={!canGoForward}
                aria-label="Show next process step"
              >
                <ChevronRight size={22} strokeWidth={2.5} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
