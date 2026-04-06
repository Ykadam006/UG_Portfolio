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
      <div
        className="footer-ar-pillar absolute"
        style={{
          left: "-28%",
          bottom: "-25%",
          top: "-12%",
          width: "48%",
          borderRadius: "40%",
          background:
            "linear-gradient(180deg, rgba(24,10,80,0.45) 0%, rgba(90,40,200,0.32) 35%, rgba(124,58,237,0.24) 55%, rgba(55,20,140,0.18) 100%)",
          filter: "blur(44px)",
          transformOrigin: "50% 100%",
        }}
      />
      <div
        className="footer-ar-pillar absolute"
        style={{
          right: "-28%",
          bottom: "-25%",
          top: "-12%",
          left: "auto",
          width: "48%",
          borderRadius: "40%",
          background:
            "linear-gradient(180deg, rgba(24,10,80,0.4) 0%, rgba(90,40,200,0.28) 35%, rgba(124,58,237,0.2) 55%, rgba(55,20,140,0.16) 100%)",
          filter: "blur(44px)",
          transformOrigin: "50% 100%",
          animationDelay: "4.2s",
        }}
      />

      <div
        className="footer-ar-base absolute"
        style={{
          left: "-25%",
          bottom: "-55%",
          top: "auto",
          width: "150%",
          height: "130%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse 72% 52% at 50% 72%, rgba(8,5,52,0.92) 0%, rgba(14,7,65,0.55) 38%, rgba(6,4,32,0.2) 68%, transparent 88%)",
          filter: "blur(54px)",
        }}
      />

      <div
        className="footer-ar-a absolute"
        style={{
          left: "-55%",
          bottom: "-14%",
          top: "auto",
          width: "210%",
          height: "24%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 82% 100% at 48% 50%,",
            "  rgba(72,35,178,0.68) 0%,",
            "  rgba(50,18,140,0.48)  28%,",
            "  rgba(28,8,85,0.12)   55%,",
            "  transparent 78%)",
          ].join(""),
          filter: "blur(24px)",
          transformOrigin: "48% 88%",
        }}
      />

      <div
        className="footer-ar-b absolute"
        style={{
          left: "-48%",
          bottom: "0%",
          top: "auto",
          width: "196%",
          height: "14%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 78% 100% at 46% 50%,",
            "  rgba(118,65,242,0.72) 0%,",
            "  rgba(82,36,205,0.5)  24%,",
            "  rgba(50,14,148,0.12) 52%,",
            "  transparent 76%)",
          ].join(""),
          filter: "blur(13px)",
          transformOrigin: "46% 85%",
        }}
      />

      <div
        className="footer-ar-crest absolute"
        style={{
          left: "-42%",
          bottom: "5%",
          top: "auto",
          width: "184%",
          height: "6%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 72% 100% at 44% 50%,",
            "  rgba(198,165,255,0.62) 0%,",
            "  rgba(148,105,248,0.38) 24%,",
            "  rgba(95,48,205,0.06)   52%,",
            "  transparent 74%)",
          ].join(""),
          filter: "blur(7px)",
          transformOrigin: "44% 82%",
        }}
      />

      <div
        className="footer-ar-c absolute"
        style={{
          left: "-45%",
          bottom: "30%",
          top: "auto",
          width: "190%",
          height: "16%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 74% 100% at 45% 50%,",
            "  rgba(38,16,118,0.44) 0%,",
            "  rgba(24,8,88,0.2)   36%,",
            "  transparent 68%)",
          ].join(""),
          filter: "blur(34px)",
          transformOrigin: "45% 78%",
        }}
      />

      <div
        className="footer-ar-ambient absolute"
        style={{
          left: "-15%",
          bottom: "-22%",
          top: "auto",
          width: "130%",
          height: "75%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse 55% 50% at 50% 64%, rgba(28,10,95,0.36) 0%, rgba(16,5,58,0.14) 48%, transparent 72%)",
          filter: "blur(62px)",
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
