"use client";

import { cn } from "@/lib/utils";

/**
 * Aurora-borealis flowing background — hero only.
 * Curtain-of-light ribbons that skew, morph and drift like real aurora.
 * Parent must be `relative overflow-hidden`.
 */
export function FireWave({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
    >
      {/* ── Deep atmospheric base — dark navy cloud ──────────────────── */}
      <div
        className="aurora-base absolute"
        style={{
          left: "-25%",
          top: "5%",
          width: "95%",
          height: "85%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse 65% 62% at 40% 55%, rgba(8,5,52,0.98) 0%, rgba(14,7,65,0.72) 38%, rgba(6,4,32,0.28) 70%, transparent 88%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Ribbon A — main curtain band ─────────────────────────────── */}
      {/*   Wide & thin so skewX creates a dramatic windswept curve     */}
      <div
        className="aurora-ribbon-a absolute"
        style={{
          left: "-35%",
          top: "42%",
          width: "155%",
          height: "18%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 78% 100% at 50% 50%,",
            "  rgba(68,35,172,0.78) 0%,",
            "  rgba(50,18,140,0.55) 32%,",
            "  rgba(28,8,85,0.22)   62%,",
            "  transparent 82%)",
          ].join(""),
          filter: "blur(26px)",
          transformOrigin: "32% 58%",
        }}
      />

      {/* ── Ribbon B — brighter inner layer ─────────────────────────── */}
      <div
        className="aurora-ribbon-b absolute"
        style={{
          left: "-28%",
          top: "49%",
          width: "140%",
          height: "11%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 74% 100% at 48% 50%,",
            "  rgba(110,62,238,0.82) 0%,",
            "  rgba(82,36,205,0.58)  28%,",
            "  rgba(50,14,148,0.2)   58%,",
            "  transparent 78%)",
          ].join(""),
          filter: "blur(16px)",
          transformOrigin: "30% 55%",
        }}
      />

      {/* ── Crest — luminous bright leading edge ─────────────────────── */}
      <div
        className="aurora-crest absolute"
        style={{
          left: "-22%",
          top: "53%",
          width: "118%",
          height: "5%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 68% 100% at 46% 50%,",
            "  rgba(188,155,255,0.72) 0%,",
            "  rgba(148,105,248,0.46) 28%,",
            "  rgba(95,48,205,0.14)   58%,",
            "  transparent 78%)",
          ].join(""),
          filter: "blur(8px)",
          transformOrigin: "28% 52%",
        }}
      />

      {/* ── Ribbon C — upper secondary curtain ───────────────────────── */}
      <div
        className="aurora-ribbon-c absolute"
        style={{
          left: "-30%",
          top: "16%",
          width: "125%",
          height: "16%",
          borderRadius: "50%",
          background: [
            "radial-gradient(ellipse 70% 100% at 50% 50%,",
            "  rgba(38,16,118,0.52) 0%,",
            "  rgba(24,8,88,0.32)   40%,",
            "  transparent 72%)",
          ].join(""),
          filter: "blur(38px)",
          transformOrigin: "24% 68%",
        }}
      />

      {/* ── Ambient right — prevents flat right side ─────────────────── */}
      <div
        className="aurora-ambient absolute"
        style={{
          right: "-8%",
          top: "20%",
          width: "48%",
          height: "55%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse 52% 58% at 50% 50%, rgba(28,10,95,0.38) 0%, rgba(16,5,58,0.18) 52%, transparent 76%)",
          filter: "blur(70px)",
        }}
      />

      {/* ── Top fade ─────────────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 h-[30%]"
        style={{
          background: "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)",
        }}
      />
      {/* ── Bottom fade ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 h-[30%]"
        style={{
          background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
