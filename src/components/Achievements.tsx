"use client";

import { motion } from "framer-motion";

import { SectionReveal } from "@/components/SectionReveal";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-b border-border bg-[#070707] py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Svarog centered heading */}
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

        {/* 2-column achievement cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.cards.map((card) => (
            <SectionReveal key={card.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22 }}
                className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/20"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-widest text-accent uppercase">
                  {card.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Highlight stat block */}
        <SectionReveal>
          <figure className="mt-10 rounded-3xl border border-foreground/8 bg-card p-12 text-center md:p-16" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <blockquote className="font-display text-5xl italic text-foreground md:text-6xl">
              {achievements.highlight.headline}
            </blockquote>
            <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {achievements.highlight.subhead}
            </p>
            <figcaption className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {achievements.highlight.body}
            </figcaption>
          </figure>
        </SectionReveal>
      </div>
    </section>
  );
}
