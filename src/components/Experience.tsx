"use client";

import {
  AnimatePresence,
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Link as LinkIcon,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

import { DesignsGallery } from "@/components/DesignsGallery";
import { FireWave } from "@/components/FireWave";
import { SectionReveal } from "@/components/SectionReveal";
import { type ExperienceEntry, experiences, site } from "@/lib/data";
import { cn } from "@/lib/utils";

const EXPERIENCE_SECTION_BG = "#070707";

type BubbleSpec = {
  id: string;
  size: number;
  left: string;
  top: string;
  /** Soft fill */
  className: string;
  delay: number;
  duration: number;
  /** Vertical / horizontal flow amplitude */
  drift: number;
  /** Cursor parallax multiplier (0–1) — farther bubbles drift more with mouse */
  parallaxDepth: number;
};

const ORBIT_BUBBLES: BubbleSpec[] = [
  {
    id: "a",
    size: 56,
    left: "8%",
    top: "22%",
    className:
      "rounded-full bg-gradient-to-br from-violet-500/35 to-indigo-900/50 ring-1 ring-white/15",
    delay: 0,
    duration: 2.8,
    drift: 10,
    parallaxDepth: 0.85,
  },
  {
    id: "b",
    size: 40,
    left: "72%",
    top: "14%",
    className:
      "rounded-full bg-gradient-to-br from-accent/30 to-amber-900/25 ring-1 ring-white/12",
    delay: 0.35,
    duration: 3.2,
    drift: 8,
    parallaxDepth: 0.65,
  },
  {
    id: "c",
    size: 36,
    left: "78%",
    top: "58%",
    className:
      "rounded-full bg-gradient-to-br from-purple-600/30 to-slate-900/45 ring-1 ring-white/10",
    delay: 0.7,
    duration: 2.5,
    drift: 12,
    parallaxDepth: 1,
  },
  {
    id: "d",
    size: 44,
    left: "6%",
    top: "62%",
    className:
      "rounded-full bg-gradient-to-br from-fuchsia-500/25 to-violet-950/40 ring-1 ring-white/12",
    delay: 0.2,
    duration: 3.4,
    drift: 9,
    parallaxDepth: 0.75,
  },
  {
    id: "e",
    size: 28,
    left: "48%",
    top: "8%",
    className: "rounded-full bg-white/10 ring-1 ring-white/15",
    delay: 0.55,
    duration: 2.2,
    drift: 6,
    parallaxDepth: 0.5,
  },
  {
    id: "f",
    size: 22,
    left: "42%",
    top: "78%",
    className: "rounded-full bg-accent/25 ring-1 ring-accent/20",
    delay: 0.9,
    duration: 2.6,
    drift: 7,
    parallaxDepth: 0.55,
  },
];

const springConfig = { stiffness: 220, damping: 26, mass: 0.4 };

const easeFlow = [0.42, 0, 0.58, 1] as const;

function OrbitBubble({
  b,
  springX,
  springY,
  reduceMotion,
}: {
  b: BubbleSpec;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const px = useTransform(springX, (x) => x * 18 * b.parallaxDepth);
  const py = useTransform(springY, (y) => y * 14 * b.parallaxDepth);

  return (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute will-change-transform"
      style={{
        width: b.size,
        height: b.size,
        left: b.left,
        top: b.top,
        x: reduceMotion ? 0 : px,
        y: reduceMotion ? 0 : py,
      }}
    >
      <motion.span
        className={cn(
          "block size-full rounded-full shadow-lg",
          b.className,
        )}
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -b.drift * 1.15, b.drift * 0.55, -b.drift * 0.35, 0],
                x: [0, b.drift * 0.45, -b.drift * 0.5, b.drift * 0.2, 0],
                rotate: [0, 5, -4, 3, 0],
                scale: [1, 1.09, 0.94, 1.06, 1],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: b.duration * 1.2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: easeFlow,
                delay: b.delay,
              }
        }
      />
    </motion.span>
  );
}

/** Decorative moving bubbles + logo; no flyer thumbnails — click opens gallery. */
function DesignBubbleDance({
  pieceCount,
  onOpenGallery,
  className,
}: {
  pieceCount: number;
  onOpenGallery: () => void;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const btnRef = useRef<HTMLButtonElement>(null);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const stageX = useTransform(springX, (x) => x * 52);
  const stageY = useTransform(springY, (y) => y * 44);
  const stageRotate = useTransform(springX, (x) => x * 6);

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (reduceMotion) return;
    const el = btnRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
    const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
    cursorX.set(Math.max(-1, Math.min(1, nx)));
    cursorY.set(Math.max(-1, Math.min(1, ny)));
  };

  const handlePointerLeave = () => {
    cursorX.set(0);
    cursorY.set(0);
  };

  const centerParallaxX = useTransform(springX, (x) => x * 10);
  const centerParallaxY = useTransform(springY, (y) => y * 8);

  return (
    <div className={cn("flex min-h-0 w-full flex-1 flex-col", className)}>
      <motion.button
        ref={btnRef}
        type="button"
        onClick={onOpenGallery}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        whileHover={reduceMotion ? undefined : { scale: 1.012 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.2 }}
        className="group relative mx-auto flex min-h-[200px] w-full max-w-md flex-1 cursor-pointer flex-col overflow-visible rounded-2xl border border-white/[0.1] bg-black/30 p-6 text-left outline-none transition-colors hover:border-accent/35 hover:bg-black/45 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] md:min-h-[240px] md:p-8 lg:max-w-none"
        aria-label={`Open design gallery — ${pieceCount} pieces`}
      >
        <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_40px_-8px_rgba(201,168,76,0.25)]" />

        {/* Whole cluster: cursor-driven drift + tilt */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={
            reduceMotion
              ? undefined
              : {
                  x: stageX,
                  y: stageY,
                  rotate: stageRotate,
                }
          }
        >
          {/* Orbit bubbles — mirrored flow + per-bubble cursor parallax */}
          {ORBIT_BUBBLES.map((b) => (
            <OrbitBubble
              key={b.id}
              b={b}
              springX={springX}
              springY={springY}
              reduceMotion={Boolean(reduceMotion)}
            />
          ))}

          {/* Center “logo” cluster — parallax wrapper + inner flow */}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <motion.div
              aria-hidden
              style={
                reduceMotion
                  ? undefined
                  : { x: centerParallaxX, y: centerParallaxY }
              }
            >
              <motion.div
                className="relative flex size-[5.5rem] items-center justify-center rounded-full border-2 border-accent/40 bg-gradient-to-b from-black/60 to-black/90 shadow-[0_12px_40px_-12px_rgba(201,168,76,0.35)] ring-4 ring-accent/10 md:size-24"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -16, 4, -10, 0],
                        rotate: [0, 2.5, -2, 1.2, 0],
                        scale: [1, 1.04, 0.98, 1.03, 1],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 4.2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: easeFlow,
                      }
                }
              >
                <Palette className="size-9 text-accent md:size-10" strokeWidth={1.25} />
                <motion.span
                  className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full border border-white/20 bg-violet-600/80 text-[0.65rem] font-bold text-white shadow-md"
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.14, 0.95, 1.1, 1],
                          rotate: [0, 10, -8, 6, 0],
                          y: [0, -3, 2, 0],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 2.8,
                          repeat: Infinity,
                          repeatType: "mirror",
                          ease: easeFlow,
                          delay: 0.25,
                        }
                  }
                >
                  <Sparkles className="size-4" />
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <p className="pointer-events-none relative z-[1] mt-auto text-center text-[0.65rem] font-medium tracking-wide text-muted-foreground/90">
          Move the cursor over the bubbles · click to open gallery ·{" "}
          <span className="text-accent/90">{pieceCount} pieces</span>
        </p>
      </motion.button>
    </div>
  );
}

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [galleryEntry, setGalleryEntry] = useState<ExperienceEntry | null>(null);
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <>
      <section
        id="experience"
        className="section-glow-line scroll-mt-24 bg-[#070707] py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionReveal>
            <div className="mb-14 text-center md:mb-16">
              <h2 className="font-sans text-[2.25rem] font-bold leading-tight tracking-tight text-foreground md:text-[3.5rem]">
                Where I Build{" "}
                <em className="font-display not-italic italic">Campaigns</em>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Driving student engagement, brand visibility, and data-backed
                communications at Illinois Tech.
              </p>
            </div>
          </SectionReveal>

          <div className="space-y-6">
            {experiences.map((entry, index) =>
              entry.workFocus && entry.designs?.length ? (
                <SectionReveal key={entry.id} delay={index * 0.06}>
                  <ExperienceOverviewAndDesign
                    entry={entry}
                    onOpenGallery={() => setGalleryEntry(entry)}
                  />
                </SectionReveal>
              ) : (
                <TimelineRow
                  key={entry.id}
                  entry={entry}
                  open={openId === entry.id}
                  onToggle={() => toggle(entry.id)}
                  revealDelay={index * 0.09}
                  onShowDesigns={
                    entry.designs?.length
                      ? () => setGalleryEntry(entry)
                      : undefined
                  }
                />
              ),
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {galleryEntry?.designs && (
          <DesignsGallery
            designs={galleryEntry.designs}
            onClose={() => setGalleryEntry(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ExperienceOverviewAndDesign({
  entry,
  onOpenGallery,
}: {
  entry: ExperienceEntry;
  onOpenGallery: () => void;
}) {
  const designCount = entry.designs?.length ?? 0;

  return (
    <div className="grid min-h-0 gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
      {/* Part 1 — Role, place, links, depth (hero-style aurora) */}
      <div className="relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070707] p-6 md:p-8">
        <FireWave fadeTo={EXPERIENCE_SECTION_BG} className="opacity-[0.92]" />
        <div className="relative z-[1] flex min-h-0 flex-col">
        <div className="flex items-start gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-black/35 text-sm font-bold text-accent backdrop-blur-sm">
            {entry.monogram}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
              {entry.dates}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-foreground md:text-xl">
              {entry.role}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {entry.company} · {entry.location}
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-8 border-t border-white/[0.08] pt-8">
          <div>
            <p className="text-[0.65rem] font-semibold tracking-widest text-accent uppercase">
              What I work on
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {entry.workFocus}
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold tracking-widest text-accent uppercase">
              Where I work
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              {entry.workplaceDetail}
            </p>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
              Connect
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href={site.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-black/40 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-black/55"
              >
                <LinkIcon className="size-4 text-accent" aria-hidden />
                LinkedIn
                <ExternalLink className="size-3 opacity-50" aria-hidden />
              </Link>
              {entry.campusGroupsUrl ? (
                <Link
                  href={entry.campusGroupsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-black/40 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-black/55"
                >
                  <Users className="size-4 text-accent" aria-hidden />
                  {entry.campusGroupsLabel ?? "Campus Groups"}
                  <ExternalLink className="size-3 opacity-50" aria-hidden />
                </Link>
              ) : null}
            </div>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold tracking-widest text-accent uppercase">
              What I do — in depth
            </p>
            {entry.depthIntro ? (
              <p className="mt-2 text-sm font-medium text-foreground/90">
                {entry.depthIntro}
              </p>
            ) : null}
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {entry.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Part 2 — Flyer & design work (same aurora treatment as hero) */}
      <div className="relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070707] p-6 md:min-h-[30rem] md:p-8 lg:min-h-0">
        <FireWave fadeTo={EXPERIENCE_SECTION_BG} className="opacity-[0.92]" />
        <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
          <div className="shrink-0">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-white/[0.14] bg-black/35 backdrop-blur-sm">
              <Palette className="size-6 text-accent" aria-hidden />
            </div>
            <h3 className="mt-6 font-sans text-xl font-bold tracking-tight text-foreground md:text-2xl">
              Flyer &amp; design work
            </h3>
            <p className="mt-3 w-full text-sm leading-relaxed text-muted-foreground md:text-base">
              Flyers and campaign art live in the gallery—no previews here, just a
              playful hint. Tap the dancing bubbles to browse everything.
            </p>
          </div>

          {entry.designs?.length ? (
            <DesignBubbleDance
              pieceCount={designCount}
              onOpenGallery={onOpenGallery}
              className="mt-5 flex-1 md:min-h-[14rem]"
            />
          ) : null}

          <div className="mt-4 shrink-0">
            <p className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
              {designCount} pieces in portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineRow({
  entry,
  open,
  onToggle,
  revealDelay,
  onShowDesigns,
}: {
  entry: ExperienceEntry;
  open: boolean;
  onToggle: () => void;
  revealDelay?: number;
  onShowDesigns?: () => void;
}) {
  return (
    <SectionReveal delay={revealDelay}>
      <motion.div
        layout
        className="card-texture overflow-hidden rounded-2xl border border-border bg-card"
      >
        <button
          type="button"
          onClick={onToggle}
          className="group relative z-[1] flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-hover-card md:items-center md:px-8 md:py-7"
        >
          <div className="flex items-start gap-4 md:items-center">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-[#161616] text-xs font-bold text-accent md:mt-0">
              {entry.monogram}
            </span>
            <div>
              <p className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
                {entry.dates}
              </p>
              <h3 className="mt-0.5 text-base font-semibold text-foreground md:text-lg">
                {entry.role}
              </h3>
              <p className="text-sm text-muted-foreground">
                {entry.company} · {entry.location}
              </p>
            </div>
          </div>
          <motion.span
            className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown className="size-5 text-muted-foreground" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className="relative z-[1] overflow-hidden border-t border-border"
            >
              <div className="px-6 py-5 md:px-8 md:py-6">
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {onShowDesigns && (
                  <div className="mt-6 border-t border-border/40 pt-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
                          Creative Work
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          Event flyers, social posts &amp; promotional content
                          I&apos;ve designed
                        </p>
                      </div>
                      <motion.button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onShowDesigns();
                        }}
                        whileHover={{ scale: 1.04, y: -1 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.07] px-5 py-2.5 text-sm font-semibold text-accent transition-all hover:border-accent/50 hover:bg-accent/[0.13]"
                      >
                        <Palette className="size-4 transition-transform duration-300 group-hover:rotate-12" />
                        View My Designs
                        <Sparkles className="size-3.5 opacity-60" />
                      </motion.button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionReveal>
  );
}
