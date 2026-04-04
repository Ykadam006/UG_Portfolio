"use client";

import { motion } from "framer-motion";

import { SectionReveal } from "@/components/SectionReveal";
import { about } from "@/lib/data";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Svarog-style centered heading with italic serif mix */}
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

        {/* 3-column feature grid — Svarog "Why Choose Us" style */}
        <div className="grid gap-5 sm:grid-cols-3">
          {about.cards.map((card) => {
            const Icon = card.icon;
            return (
              <SectionReveal key={card.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className={cn(
                    "group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center",
                    "transition-colors hover:border-foreground/20"
                  )}
                >
                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-[#161616] text-foreground ring-1 ring-border group-hover:ring-foreground/20">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
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
    </section>
  );
}
