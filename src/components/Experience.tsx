"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Link as LinkIcon,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { DesignsGallery } from "@/components/DesignsGallery";
import { FireWave } from "@/components/FireWave";
import { SectionReveal } from "@/components/SectionReveal";
import {
  type DesignItem,
  type ExperienceEntry,
  experiences,
  site,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const FLYER_ROTATE_MS = 5_000;
const EXPERIENCE_SECTION_BG = "#070707";

function isDesignPdf(src: string) {
  const path = src.split("?")[0] ?? src;
  return path.toLowerCase().endsWith(".pdf");
}

function RotatingFlyerPreview({
  designs,
  className,
}: {
  designs: DesignItem[];
  className?: string;
}) {
  const raster = designs.filter((d) => !isDesignPdf(d.src));
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (raster.length <= 1) return;
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((n) => (n + 1) % raster.length);
    }, FLYER_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [raster.length, reduceMotion]);

  if (raster.length === 0) return null;

  const current = raster[index % raster.length];

  return (
    <div className={cn("flex min-h-0 flex-1 flex-col", className)}>
      <div className="relative min-h-[10rem] w-full flex-1 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0a0a0a] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.src}
            initial={
              reduceMotion
                ? false
                : { opacity: 0, x: 28, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={
              reduceMotion
                ? undefined
                : { opacity: 0, x: -28, filter: "blur(4px)" }
            }
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.title}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {raster.length > 1 ? (
        <p className="mt-2 shrink-0 text-[0.65rem] text-muted-foreground/70">
          Preview cycles every 5 seconds · {index + 1} of {raster.length}
        </p>
      ) : null}
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
              Event flyers, meeting graphics, social-ready assets, and print layouts
              I&apos;ve produced for Stuart programs, Toastmasters, and campus
              channels—open the gallery to browse everything.
            </p>
          </div>

          {entry.designs ? (
            <RotatingFlyerPreview
              designs={entry.designs}
              className="mt-5 flex-1 md:min-h-[16rem]"
            />
          ) : null}

          <div className="mt-5 shrink-0 space-y-4 pt-2">
            <p className="text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
              {designCount} pieces in portfolio
            </p>
            <motion.button
              type="button"
              onClick={onOpenGallery}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-accent/40 bg-black/45 px-6 py-3.5 text-sm font-semibold text-accent shadow-[0_12px_40px_-16px_rgba(198,124,78,0.35)] backdrop-blur-sm transition-colors hover:border-accent/60 hover:bg-black/55"
            >
              <Palette className="size-4 transition-transform duration-300 group-hover:rotate-12" />
              View my designs
              <Sparkles className="size-3.5 opacity-60" />
            </motion.button>
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
