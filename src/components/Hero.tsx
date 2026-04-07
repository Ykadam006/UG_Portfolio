"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

import { FireWave } from "@/components/FireWave";
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.88]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-glow-line relative min-h-screen overflow-hidden bg-background"
    >
      <FireWave />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-32 pt-28 text-center md:px-8">
        {reduceMotion ? (
          <HeroContent />
        ) : (
          <motion.div
            className="flex flex-col items-center gap-7"
            style={{ y: parallaxY, opacity: parallaxOpacity }}
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
                className="pressable inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground px-8 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                {hero.resumeLabel}
              </Link>
              <a
                href={hero.projectsHref}
                className="pressable inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground/80 backdrop-blur-sm transition-all hover:border-foreground/30 hover:text-foreground"
              >
                {hero.projectsLabel}
              </a>
              <a
                href={site.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-muted-foreground backdrop-blur-sm transition-all hover:text-foreground"
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
          className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/20 bg-foreground px-8 text-sm font-semibold text-background"
        >
          {hero.resumeLabel}
        </Link>
        <a
          href={hero.projectsHref}
          className="inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground/80"
        >
          {hero.projectsLabel}
        </a>
      </div>
    </div>
  );
}
