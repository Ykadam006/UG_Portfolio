"use client";

import { motion } from "framer-motion";

import { SectionReveal } from "@/components/SectionReveal";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-28 border-b border-border bg-[#0b0b0b] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Achievements & leadership
          </p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Organizations I help lead forward
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {achievements.cards.map((card) => (
            <SectionReveal key={card.title}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-2xl border border-border bg-card p-7"
              >
                <h3 className="font-display text-xl text-foreground md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs font-semibold tracking-wide text-accent uppercase">
                  {card.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <figure className="mt-12 rounded-3xl border border-accent/25 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.12),transparent_45%)] p-10 text-center md:p-14">
            <blockquote className="font-display text-4xl text-accent md:text-5xl">
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
