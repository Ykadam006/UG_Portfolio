"use client";

import { cn } from "@/lib/utils";

type AuroraFieldProps = {
  className?: string;
  /** Footer #060606; full section uses --bg #0a0a0a; card uses #111 */
  vignette?: "footer" | "card" | "section";
  /** Extra wrapper class for animation phase offsets (e.g. contact-aurora) */
  phaseClass?: string;
};

/**
 * Full-bleed aurora ribbons + pillars. Uses `footer-ar-*` animations from globals.css.
 */
export function AuroraField({
  className,
  vignette = "footer",
  phaseClass,
}: AuroraFieldProps) {
  const fade =
    vignette === "card" ? "#111111" : vignette === "section" ? "#0a0a0a" : "#060606";
  const fadeSoft = 
    vignette === "card"
      ? "rgba(17,17,17,0.48)"
      : vignette === "section"
        ? "rgba(10,10,10,0.42)"
        : "rgba(6,6,6,0.45)";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        phaseClass,
        className
      )}
    >
      {/* Primary pillar — strong, starts the read from the left edge */}
      <div
        className="footer-ar-pillar absolute"
        style={{
          left: "-38%",
          bottom: "-28%",
          top: "-14%",
          width: "58%",
          borderRadius: "40%",
          background:
            "linear-gradient(180deg, rgba(30,12,95,0.55) 0%, rgba(100,45,210,0.4) 32%, rgba(130,70,245,0.3) 52%, rgba(60,24,150,0.22) 100%)",
          filter: "blur(46px)",
          transformOrigin: "28% 100%",
        }}
      />
      {/* Secondary pillar — soft fill on the right, arrives later */}
      <div
        className="footer-ar-pillar absolute"
        style={{
          right: "-32%",
          bottom: "-25%",
          top: "-12%",
          left: "auto",
          width: "42%",
          borderRadius: "40%",
          background:
            "linear-gradient(180deg, rgba(24,10,80,0.22) 0%, rgba(70,35,160,0.16) 40%, rgba(55,20,140,0.1) 100%)",
          filter: "blur(52px)",
          transformOrigin: "70% 100%",
          animationDelay: "4.2s",
        }}
      />

      <div
        className="footer-ar-base absolute"
        style={{
          left: "-40%",
          bottom: "-58%",
          top: "auto",
          width: "165%",
          height: "135%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse 78% 55% at 24% 71%, rgba(8,5,52,0.95) 0%, rgba(14,7,65,0.52) 34%, rgba(6,4,32,0.18) 62%, transparent 86%)",
          filter: "blur(56px)",
        }}
      />

      <div
        className="footer-ar-a absolute"
        style={{
          left: "-72%",
          bottom: "-16%",
          top: "auto",
          width: "230%",
          height: "26%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 84% 100% at 26% 50%,",
            "  rgba(72,35,178,0.78) 0%,",
            "  rgba(50,18,140,0.5)  26%,",
            "  rgba(28,8,85,0.1)   52%,",
            "  transparent 76%)",
          ].join(""),
          filter: "blur(24px)",
          transformOrigin: "22% 90%",
        }}
      />

      <div
        className="footer-ar-b absolute"
        style={{
          left: "-62%",
          bottom: "-2%",
          top: "auto",
          width: "210%",
          height: "15%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 80% 100% at 24% 50%,",
            "  rgba(118,65,242,0.8) 0%,",
            "  rgba(82,36,205,0.52) 22%,",
            "  rgba(50,14,148,0.1) 48%,",
            "  transparent 74%)",
          ].join(""),
          filter: "blur(13px)",
          transformOrigin: "20% 86%",
        }}
      />

      <div
        className="footer-ar-crest absolute"
        style={{
          left: "-55%",
          bottom: "4%",
          top: "auto",
          width: "200%",
          height: "6.5%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 74% 100% at 22% 50%,",
            "  rgba(198,165,255,0.72) 0%,",
            "  rgba(148,105,248,0.4) 22%,",
            "  rgba(95,48,205,0.05)  48%,",
            "  transparent 72%)",
          ].join(""),
          filter: "blur(7px)",
          transformOrigin: "18% 84%",
        }}
      />

      <div
        className="footer-ar-c absolute"
        style={{
          left: "-58%",
          bottom: "28%",
          top: "auto",
          width: "205%",
          height: "17%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 76% 100% at 28% 50%,",
            "  rgba(38,16,118,0.5) 0%,",
            "  rgba(24,8,88,0.18)  32%,",
            "  transparent 66%)",
          ].join(""),
          filter: "blur(34px)",
          transformOrigin: "24% 80%",
        }}
      />

      <div
        className="footer-ar-ambient absolute"
        style={{
          left: "-28%",
          bottom: "-26%",
          top: "auto",
          width: "145%",
          height: "78%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse 62% 54% at 26% 66%, rgba(28,10,95,0.42) 0%, rgba(16,5,58,0.12) 44%, transparent 70%)",
          filter: "blur(64px)",
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-[32%]"
        style={{
          background: `linear-gradient(to bottom, ${fade} 0%, ${fadeSoft} 45%, transparent 100%)`,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[22%]"
        style={{
          background: `linear-gradient(to top, ${fade} 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}
