"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP-powered gold gradient scroll progress bar pinned to the top of the page.
 * Uses ScrollTrigger scrub so it perfectly tracks scroll position.
 */
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const glow = glowRef.current;
    if (!bar || !glow) return;

    /* Set initial state */
    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(glow, { opacity: 0 });

    /* ScrollTrigger — scrubs the bar scaleX from 0 → 1 */
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.25,
      onUpdate: (self) => {
        gsap.set(bar, { scaleX: self.progress });
        /* Glow fades in once past 1% scroll */
        gsap.set(glow, { opacity: self.progress > 0.01 ? 1 : 0 });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[9999] w-full">
      {/* Bar */}
      <div
        ref={barRef}
        className="h-[2px] w-full origin-left"
        style={{
          background: "linear-gradient(90deg, #b8922a 0%, #c9a84c 30%, #f0d98a 60%, #c9a84c 80%, #b8922a 100%)",
        }}
      />
      {/* Glow trail at leading edge */}
      <div
        ref={glowRef}
        className="absolute right-0 top-0 h-[2px] w-24 opacity-0"
        style={{
          background: "linear-gradient(to left, rgba(240,217,138,0.9), transparent)",
          filter: "blur(3px)",
        }}
      />
    </div>
  );
}
