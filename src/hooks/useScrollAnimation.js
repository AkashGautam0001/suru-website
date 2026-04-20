// src/hooks/useScrollAnimation.js
import { useEffect, useRef } from "react";

/**
 * Adds 'visible' class to the element when it enters the viewport.
 * The element should have the CSS class 'fade-up' to get the animation.
 */
export function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
