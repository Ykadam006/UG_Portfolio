"use client";

import { motion } from "framer-motion";

import { SectionReveal } from "@/components/SectionReveal";
import { about } from "@/lib/data";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-b border-border bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            What I bring
          </p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Editorial clarity meets practical execution
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <SectionReveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {about.bio}
            </p>
          </SectionReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {about.cards.map((card) => {
              const Icon = card.icon;
              return (
                <SectionReveal key={card.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={cn(
                      "group h-full rounded-2xl border border-border bg-card p-6 transition-colors",
                      "hover:border-accent"
                    )}
                  >
                    <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-hover-card text-accent ring-1 ring-border group-hover:ring-accent/40">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display text-xl text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
