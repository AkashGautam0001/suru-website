// src/components/CTABanner.jsx
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation.js";
import { PillCta } from "./PillCta.jsx";

export default function CTABanner() {
  const ref = useScrollAnimation();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Ashwani! I'd like to discuss a UX project with you."
    );
    window.open(`https://wa.me/+918130903238?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    window.open(
      "mailto:ashwanityagi19@gmail.com?subject=UX Project Inquiry — Suru Design&body=Hi Ashwani,%0D%0A%0D%0AI'd like to discuss a UX project with you.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AProject Details:%0D%0A%0D%0AThanks!",
      "_blank"
    );
  };

  return (
    <div
      id="cta-banner"
      ref={ref}
      className="fade-up text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ec74e8 0%, #d45fd0 50%, #c44fc0 100%)",
        padding: "clamp(3rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)",
      }}
    >
      {/* ── Heading ── */}
      <h2
        className="font-light text-white leading-tight mx-auto"
        style={{
          fontSize: "clamp(2.2rem, 7vw, 6rem)",
          maxWidth: "800px",
          lineHeight: 1.15,
          marginBottom: "clamp(0.5rem, 2vw, 1rem)",
        }}
      >
        Cut UI/UX hiring
      </h2>
      <h2
        className="font-light text-white leading-tight mx-auto"
        style={{
          fontSize: "clamp(2.2rem, 7vw, 6rem)",
          maxWidth: "800px",
          lineHeight: 1.15,
          marginBottom: "clamp(1rem, 3vw, 2rem)",
        }}
      >
        costs by 70%.
      </h2>

      {/* ── Subtext ── */}
      <p
        className="text-white/90 mx-auto leading-relaxed"
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
          maxWidth: "600px",
          marginBottom: "clamp(2rem, 5vw, 4rem)",
        }}
      >
        Work with a senior UX expert — minus the salary, overhead &amp; HR hassle
      </p>

      {/* ── Buttons ── */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

        <PillCta
          as="button"
          type="button"
          onClick={handleWhatsApp}
          style={{ background: "#2b2b2b" }}
          leading={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              style={{ width: "clamp(18px, 2vw, 22px)", height: "clamp(18px, 2vw, 22px)", flexShrink: 0 }}
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          }
        >
          Quick Connect
        </PillCta>

        <PillCta
          as="button"
          type="button"
          onClick={handleEmail}
          variant="inverse"
          style={{ background: "#ffffff" }}
          leading={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#1a1a2e"
              strokeWidth="2"
              style={{ width: "clamp(18px, 2vw, 22px)", height: "clamp(18px, 2vw, 22px)", flexShrink: 0 }}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        >
          ashwanityagi19@gmail.com
        </PillCta>

      </div>

      {/* ── Bottom note ── */}
      <p
        className="text-white/60 mx-auto mt-8"
        style={{ fontSize: "clamp(12px, 1.2vw, 15px)" }}
      >
        Free consultation · No obligations · Reply within 48 hours
      </p>
    </div>
  );
}