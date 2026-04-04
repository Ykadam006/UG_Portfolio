"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { hero, site } from "@/lib/data";

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
      {/* ── Svarog atmospheric blue/indigo fog ─────────────────────────── */}
      <AtmosphericFog />

      {/* ── Bottom fade ──────────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />

      {/* ── CENTERED content ─────────────────────────────────────────────── */}
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-32 pt-28 text-center md:px-8">
        {reduceMotion ? (
          <HeroContent />
        ) : (
          <motion.div
            className="flex flex-col items-center gap-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Badge */}
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-[#111]/70 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase backdrop-blur-sm"
            >
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Open to new roles · Chicago, IL
            </motion.p>

            {/* Mixed headline — Svarog style: sans + italic serif */}
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

      {/* Layer 1 — large vivid purple core, left-center */}
      <div
        className="fog-a absolute"
        style={{
          left: "-15%",
          top: "-5%",
          width: "80%",
          height: "110%",
          background:
            "radial-gradient(ellipse at 35% 48%, rgba(148,55,255,0.72) 0%, rgba(110,22,210,0.48) 25%, rgba(65,12,150,0.22) 52%, transparent 70%)",
          filter: "blur(65px)",
        }}
      />

      {/* Layer 2 — magenta/violet mix for depth */}
      <div
        className="fog-b absolute"
        style={{
          left: "-8%",
          top: "8%",
          width: "65%",
          height: "85%",
          background:
            "radial-gradient(ellipse at 22% 44%, rgba(175,40,255,0.55) 0%, rgba(130,5,190,0.32) 35%, rgba(75,0,140,0.12) 60%, transparent 76%)",
          filter: "blur(80px)",
        }}
      />

      {/* Layer 3 — cool blue-purple edge glow */}
      <div
        className="fog-c absolute"
        style={{
          left: "-3%",
          top: "-8%",
          width: "58%",
          height: "72%",
          background:
            "radial-gradient(ellipse at 28% 38%, rgba(100,60,255,0.42) 0%, rgba(70,25,210,0.22) 42%, transparent 66%)",
          filter: "blur(75px)",
        }}
      />

      {/* Layer 4 — warm pink accent for richness */}
      <div
        className="fog-a absolute"
        style={{
          left: "8%",
          top: "28%",
          width: "50%",
          height: "65%",
          background:
            "radial-gradient(ellipse at 18% 52%, rgba(200,20,220,0.32) 0%, rgba(160,0,180,0.16) 42%, transparent 68%)",
          filter: "blur(90px)",
          animationDelay: "3s",
          animationDuration: "17s",
        }}
      />

      {/* Vignette — right & bottom edges to keep text readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: [
            "radial-gradient(ellipse 62% 82% at 74% 50%, transparent 28%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.94) 86%)",
            "linear-gradient(to bottom, rgba(10,10,10,0.08) 0%, transparent 12%, transparent 78%, rgba(10,10,10,0.65) 100%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
