"use client";

import { motion } from "framer-motion";

import { SectionReveal } from "@/components/SectionReveal";
import { StaggerChildren } from "@/components/StaggerChildren";
import { about } from "@/lib/data";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section
      id="about"
      className="section-glow-line scroll-mt-24 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-sans text-[2.25rem] font-bold leading-tight tracking-tight text-foreground md:text-[3.5rem]">
              What{" "}
              <em className="font-display not-italic italic">I Bring</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {about.bio}
            </p>
          </div>
        </SectionReveal>

        <StaggerChildren className="grid gap-5 sm:grid-cols-3">
          {about.cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className={cn(
                  "card-texture group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center",
                  "transition-colors hover:border-foreground/20"
                )}
              >
                <div className="relative z-[1] mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-[#161616] text-foreground ring-1 ring-border transition-transform duration-300 group-hover:scale-105 group-hover:ring-foreground/20">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="relative z-[1] text-base font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="relative z-[1] mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
