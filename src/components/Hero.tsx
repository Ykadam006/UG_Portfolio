"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { FireWave } from "@/components/FireWave";
import { hero, site } from "@/lib/data";

/* ─── Word-split stagger ─────────────────────────────────────────────────── */
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* Split headline into word spans for per-word stagger */
const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.28 } },
};
const wordItem = {
  hidden: { opacity: 0, y: 22, rotateX: -12 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function WordSplit({
  text,
  italic,
  className,
}: {
  text: string;
  italic?: boolean;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      variants={wordContainer}
      initial="hidden"
      animate="show"
      style={{ display: "inline-block", perspective: 600 }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={wordItem}
          style={{ display: "inline-block", transformOrigin: "bottom center" }}
          className={italic ? "font-display not-italic italic" : ""}
        >
          {word}
          {i < text.split(" ").length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, -52]);
  const parallaxY = useSpring(rawY, { stiffness: 80, damping: 20 });
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.82]);

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
            {/* Badge — floats gently */}
            <motion.p
              variants={fadeUp}
              className="animate-float animate-badge-pulse inline-flex items-center gap-2 rounded-full border border-border bg-[#111]/70 px-4 py-1.5 text-[0.65rem] font-semibold tracking-[0.22em] text-accent uppercase backdrop-blur-sm"
            >
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Open to new roles · Chicago, IL
            </motion.p>

            {/* Headline — word-by-word with perspective flip */}
            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-[3rem] leading-[1.06] tracking-tight text-foreground md:text-[5.25rem]"
              style={{ perspective: 800 }}
            >
              <WordSplit text="Marketing &" />
              {" "}
              <WordSplit text="Strategy," italic className="text-foreground" />
              <br />
              <WordSplit text="Backed by Data." />
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              {hero.subtext}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-3 sm:flex-row"
            >
              {/* Primary — shimmer on hover */}
              <Link
                href={hero.resumeHref}
                className="pressable group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-foreground/20 bg-foreground px-8 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                <span className="relative z-10">{hero.resumeLabel}</span>
                <span className="animate-shimmer pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
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
                className="pressable inline-flex h-12 items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-muted-foreground backdrop-blur-sm transition-all hover:border-accent/30 hover:text-foreground"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {!reduceMotion && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <a
            href="#about"
            aria-label="Scroll down"
            className="animate-scroll-bounce flex flex-col items-center gap-1.5 text-muted-foreground/50 transition-colors hover:text-accent"
          >
            <span className="text-[0.55rem] font-semibold tracking-[0.25em] uppercase">
              Scroll
            </span>
            <ChevronDown className="size-4" />
          </a>
        </motion.div>
      )}
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
