// src/components/PillCta.jsx
import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Site-wide CTA: full pill radius, bold white label, optional leading slot, trailing ↗.
 * Flat — no border, no drop shadow. Background via `style` or Tailwind bg-* on `className`.
 */
export function PillCta({
  as: Comp = "button",
  children,
  className = "",
  style,
  leading,
  trailingArrow = true,
  variant = "solid",
  ...rest
}) {
  const isInverse = variant === "inverse";
  const arrowColor = isInverse ? "#1a1a2e" : "#ffffff";

  return (
    <Comp
      className={`pill-cta inline-flex items-center justify-center gap-2.5 border-none font-semibold shadow-none outline-none ${
        isInverse ? "text-[#1a1a2e]" : "text-white"
      } ${className}`.trim()}
      style={{
        boxShadow: "none",
        WebkitBoxShadow: "none",
        ...style,
      }}
      {...rest}
    >
      {leading}
      {children}
      {trailingArrow ? (
        <ArrowUpRight className="shrink-0" size={20} strokeWidth={2.25} color={arrowColor} aria-hidden />
      ) : null}
    </Comp>
  );
}
