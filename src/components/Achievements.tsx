"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import type { ComponentType } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { StaggerChildren } from "@/components/StaggerChildren";
import { StatsComposition } from "@/components/StatsComposition";
import { achievements } from "@/lib/data";

/* ─── Remotion Player — dynamic import (no SSR) ─────────────────────────── */
type PlayerProps = {
  component: ComponentType;
  durationInFrames: number;
  fps: number;
  compositionWidth: number;
  compositionHeight: number;
  style?: React.CSSProperties;
  loop?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  showVolumeControls?: boolean;
  allowFullscreen?: boolean;
  clickToPlay?: boolean;
};

const Player = dynamic<PlayerProps>(
  () => import("@remotion/player").then((m) => m.Player as ComponentType<PlayerProps>),
  { ssr: false },
);

export function Achievements() {
  return (
    <section
      id="achievements"
      className="section-glow-line scroll-mt-24 bg-[#070707] py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-sans text-[2.25rem] font-bold leading-tight tracking-tight text-foreground md:text-[3.5rem]">
              Leadership &amp;{" "}
              <em className="font-display not-italic italic">Achievements</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Organizations I help lead forward — combining strategy, public
              relations, and project management.
            </p>
          </div>
        </SectionReveal>

        <StaggerChildren className="grid gap-5 md:grid-cols-2">
          {achievements.cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22 }}
              className="card-texture glow-border-hover group h-full rounded-2xl border border-border bg-card p-8 transition-colors"
            >
              <div className="relative z-[1] mb-4 h-[2px] w-8 rounded-full bg-accent/50 transition-all duration-500 group-hover:w-14 group-hover:bg-accent" />
              <h3 className="relative z-[1] text-lg font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="relative z-[1] mt-1 text-xs font-semibold tracking-widest text-accent uppercase">
                {card.subtitle}
              </p>
              <p className="relative z-[1] mt-4 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* ── ROI Highlight: Remotion Player + fallback ──────────────────── */}
        <SectionReveal>
          <div className="mt-10 overflow-hidden rounded-3xl border"
            style={{ borderColor: "rgba(201,168,76,0.12)" }}
          >
            {/* Remotion animated video — 3-second loop of the stats */}
            <div className="relative aspect-[16/7] w-full">
              <Player
                component={StatsComposition}
                durationInFrames={90}
                fps={30}
                compositionWidth={960}
                compositionHeight={420}
                style={{ width: "100%", height: "100%" }}
                loop
                autoPlay
                controls={false}
                showVolumeControls={false}
                allowFullscreen={false}
                clickToPlay={false}
              />
            </div>

            {/* Static fallback caption below the video */}
            <div className="border-t px-8 py-5 text-center"
              style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0d0d0d" }}
            >
              <p className="text-[0.6rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {achievements.highlight.subhead}
              </p>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {achievements.highlight.body}
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
