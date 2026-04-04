"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useId } from "react";

import { hero } from "@/lib/data";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative scroll-mt-28 overflow-hidden border-b border-border bg-background pt-10 pb-20 md:pt-14 md:pb-28"
    >
      <PurpleWaveField />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-80"
      >
        <div
          className={cn(
            "hero-orb absolute -right-32 top-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(201,168,76,0.55),transparent_62%)] blur-3xl"
          )}
        />
        <div className="hero-orb absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.2),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        {reduceMotion ? (
          <div className="max-w-3xl space-y-8">
            <h1 className="font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
              {hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {hero.subtext}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <HeroButtons />
            </div>
          </div>
        ) : (
          <motion.div
            className="max-w-3xl space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={item}
              className="font-display text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl"
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              variants={item}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              {hero.subtext}
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <HeroButtons />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function PurpleWaveField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(55vh,560px)] opacity-[0.92]"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
      <div className="absolute inset-x-[-8%] bottom-[-18%] flex flex-col justify-end">
        <WaveRow
          trackClassName="is-slow is-reverse"
          wrapperClassName="-mb-[14%] min-h-[6.5rem] scale-[1.06] sm:min-h-[7.5rem]"
          tint="deep"
        />
        <WaveRow
          trackClassName=""
          wrapperClassName="hero-wave-bob-wrap -mb-[20%] min-h-[5.75rem] opacity-95 sm:min-h-[6.75rem]"
          tint="mid"
        />
        <WaveRow
          trackClassName="is-fast"
          wrapperClassName="-mb-[26%] min-h-[5rem] scale-y-[1.12] sm:min-h-[6rem]"
          tint="bright"
        />
      </div>
    </div>
  );
}

function WaveRow({
  trackClassName,
  wrapperClassName,
  tint,
}: {
  trackClassName: string;
  wrapperClassName?: string;
  tint: "deep" | "mid" | "bright";
}) {
  const colors = {
    deep: "text-[#4c1d95]",
    mid: "text-[#5b21b6]",
    bright: "text-[#7c3aed]",
  } as const;

  return (
    <div className={cn("relative w-full", colors[tint], wrapperClassName)}>
      <div
        className={cn(
          "hero-wave-track absolute bottom-0 left-0 flex h-full min-h-[inherit] w-[200%]",
          trackClassName
        )}
      >
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
    <svg
      className={cn("h-full w-full text-inherit", className)}
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradA}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.04" />
          <stop offset="32%" stopColor="currentColor" stopOpacity="0.42" />
          <stop offset="66%" stopColor="currentColor" stopOpacity="0.24" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id={gradB} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradA})`}
        d="M0 108 C140 48 280 150 420 88 C560 26 700 138 840 80 C982 22 1120 128 1260 84 C1330 56 1390 92 1440 74 L1440 200 L0 200 Z"
      />
      <path
        fill={`url(#${gradB})`}
        fillOpacity="0.4"
        d="M0 128 C180 78 300 152 480 104 C620 74 760 142 920 102 C1080 62 1220 148 1380 114 C1408 110 1425 118 1440 112 L1440 200 L0 200 Z"
      />
    </svg>
  );
}

function HeroButtons() {
  return (
    <>
      <Link
        href={hero.resumeHref}
        className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-[#0d0d0d] shadow-[0_12px_40px_-18px_rgba(201,168,76,0.85)] transition-transform hover:-translate-y-0.5"
      >
        {hero.resumeLabel}
      </Link>
      <a
        href={hero.projectsHref}
        className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        {hero.projectsLabel}
      </a>
    </>
  );
}
