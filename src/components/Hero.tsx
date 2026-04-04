"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
      >
        <div
          className={cn(
            "hero-orb absolute -right-32 top-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(201,168,76,0.55),transparent_62%)] blur-3xl"
          )}
        />
        <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.2),transparent_65%)] blur-3xl hero-orb" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
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
