"use client";

import { motion } from "framer-motion";

import { SectionReveal } from "@/components/SectionReveal";
import { StaggerChildren } from "@/components/StaggerChildren";
import { achievements } from "@/lib/data";

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
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22 }}
              className="card-texture h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/20"
            >
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

        <SectionReveal>
          <figure
            className="card-texture relative mt-10 rounded-3xl border border-foreground/8 bg-card p-12 text-center md:p-16"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <blockquote className="relative z-[1] font-display text-5xl italic text-foreground md:text-6xl">
              {achievements.highlight.headline}
            </blockquote>
            <p className="relative z-[1] mt-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {achievements.highlight.subhead}
            </p>
            <figcaption className="relative z-[1] mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {achievements.highlight.body}
            </figcaption>
          </figure>
        </SectionReveal>
      </div>
    </section>
  );
}
