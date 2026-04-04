"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useId } from "react";

import { hero, site } from "@/lib/data";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden border-b border-border bg-background"
    >
      {/* Atmospheric purple fog */}
      <AtmosphericFog />

      {/* Purple wave bands at the bottom */}
      <PurpleWaveField />

      {/* Bottom fade to merge waves into background */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-32"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-32 pt-28 text-center md:px-8">
        {reduceMotion ? (
          <HeroContent />
        ) : (
          <motion.div
            className="flex flex-col items-center gap-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-[#111]/70 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase backdrop-blur-sm"
            >
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Open to new roles · Chicago, IL
            </motion.p>

            <motion.h1
              variants={item}
              className="max-w-3xl text-[3rem] leading-[1.04] tracking-tight text-foreground md:text-[5.25rem]"
            >
              Marketing &amp;{" "}
              <em className="font-display not-italic italic">Strategy,</em>
              <br />
              Backed by Data.
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              {hero.subtext}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col items-center gap-3 sm:flex-row"
            >
              <Link
                href={hero.resumeHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground px-8 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                {hero.resumeLabel}
              </Link>
              <a
                href={hero.projectsHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground/80 backdrop-blur-sm transition-all hover:border-foreground/30 hover:text-foreground"
              >
                {hero.projectsLabel}
              </a>
              <a
                href={site.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-muted-foreground backdrop-blur-sm transition-all hover:text-foreground"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ── Static fallback (prefers-reduced-motion) ───────────────────────────── */
function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-7">
      <p className="inline-flex items-center gap-2 rounded-full border border-border bg-[#111]/70 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase">
        <span className="size-1.5 rounded-full bg-accent" />
        Open to new roles · Chicago, IL
      </p>
      <h1 className="max-w-3xl text-[3rem] leading-[1.04] tracking-tight text-foreground md:text-[5.25rem]">
        Marketing &amp;{" "}
        <em className="font-display not-italic italic">Strategy,</em>
        <br />
        Backed by Data.
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{hero.subtext}</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href={hero.resumeHref}
          className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground px-8 text-sm font-semibold text-background transition-all hover:-translate-y-0.5"
        >
          {hero.resumeLabel}
        </Link>
        <a
          href={hero.projectsHref}
          className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground/80 transition-all hover:text-foreground"
        >
          {hero.projectsLabel}
        </a>
      </div>
    </div>
  );
}

/* ── Moving purple fog ───────────────────────────────────────────────────── */
function AtmosphericFog() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="fog-a absolute"
        style={{
          left: "-15%", top: "-5%", width: "80%", height: "110%",
          background: "radial-gradient(ellipse at 35% 48%, rgba(148,55,255,0.72) 0%, rgba(110,22,210,0.48) 25%, rgba(65,12,150,0.22) 52%, transparent 70%)",
          filter: "blur(65px)",
        }}
      />
      <div
        className="fog-b absolute"
        style={{
          left: "-8%", top: "8%", width: "65%", height: "85%",
          background: "radial-gradient(ellipse at 22% 44%, rgba(175,40,255,0.55) 0%, rgba(130,5,190,0.32) 35%, rgba(75,0,140,0.12) 60%, transparent 76%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="fog-c absolute"
        style={{
          left: "-3%", top: "-8%", width: "58%", height: "72%",
          background: "radial-gradient(ellipse at 28% 38%, rgba(100,60,255,0.42) 0%, rgba(70,25,210,0.22) 42%, transparent 66%)",
          filter: "blur(75px)",
        }}
      />
      <div
        className="fog-a absolute"
        style={{
          left: "8%", top: "28%", width: "50%", height: "65%",
          background: "radial-gradient(ellipse at 18% 52%, rgba(200,20,220,0.32) 0%, rgba(160,0,180,0.16) 42%, transparent 68%)",
          filter: "blur(90px)",
          animationDelay: "3s",
          animationDuration: "17s",
        }}
      />
      {/* Vignette — keeps right side & text readable */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: [
            "radial-gradient(ellipse 62% 82% at 74% 50%, transparent 28%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.94) 86%)",
            "linear-gradient(to bottom, rgba(10,10,10,0.08) 0%, transparent 12%, transparent 78%, rgba(10,10,10,0.65) 100%)",
          ].join(", "),
        }}
      />
    </div>
  );
}

/* ── Flowing purple SVG waves (bottom of hero) ──────────────────────────── */
function PurpleWaveField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(50vh,500px)] opacity-[0.85]"
    >
      <div className="absolute inset-x-[-8%] bottom-[-18%] flex flex-col justify-end">
        <WaveRow trackClassName="is-slow is-reverse" wrapperClassName="-mb-[14%] min-h-[6.5rem] scale-[1.06] sm:min-h-[7.5rem]" tint="deep" />
        <WaveRow trackClassName="" wrapperClassName="hero-wave-bob-wrap -mb-[20%] min-h-[5.75rem] opacity-95 sm:min-h-[6.75rem]" tint="mid" />
        <WaveRow trackClassName="is-fast" wrapperClassName="-mb-[26%] min-h-[5rem] scale-y-[1.12] sm:min-h-[6rem]" tint="bright" />
      </div>
    </div>
  );
}

function WaveRow({ trackClassName, wrapperClassName, tint }: {
  trackClassName: string;
  wrapperClassName?: string;
  tint: "deep" | "mid" | "bright";
}) {
  const colors = {
    deep:   "text-[#4c1d95]",
    mid:    "text-[#5b21b6]",
    bright: "text-[#7c3aed]",
  } as const;

  return (
    <div className={cn("relative w-full", colors[tint], wrapperClassName)}>
      <div className={cn("hero-wave-track absolute bottom-0 left-0 flex h-full min-h-[inherit] w-[200%]", trackClassName)}>
        <WaveSvg className="h-full min-h-[inherit] w-1/2 shrink-0" />
        <WaveSvg className="h-full min-h-[inherit] w-1/2 shrink-0" />
      </div>
    </div>
  );
}

function WaveSvg({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const gradA = `hw-a-${uid}`;
  const gradB = `hw-b-${uid}`;

  return (
    <svg className={cn("h-full w-full text-inherit", className)} viewBox="0 0 1440 200"
      preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={gradA} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="currentColor" stopOpacity="0.04" />
          <stop offset="32%"  stopColor="currentColor" stopOpacity="0.42" />
          <stop offset="66%"  stopColor="currentColor" stopOpacity="0.24" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id={gradB} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#c4b5fd" stopOpacity="0.5" />
          <stop offset="55%"  stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradA})`}
        d="M0 108 C140 48 280 150 420 88 C560 26 700 138 840 80 C982 22 1120 128 1260 84 C1330 56 1390 92 1440 74 L1440 200 L0 200 Z" />
      <path fill={`url(#${gradB})`} fillOpacity="0.4"
        d="M0 128 C180 78 300 152 480 104 C620 74 760 142 920 102 C1080 62 1220 148 1380 114 C1408 110 1425 118 1440 112 L1440 200 L0 200 Z" />
    </svg>
  );
}
