"use client";

import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { useCallback } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { StaggerChildren } from "@/components/StaggerChildren";
import { about } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ─── Spotlight card — tracks cursor ────────────────────────────────────── */
function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--sx", `${x}%`);
    e.currentTarget.style.setProperty("--sy", `${y}%`);
  }, []);

  return (
    <div onMouseMove={handleMouseMove} className={cn("spotlight-card", className)}>
      {children}
    </div>
  );
}

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
              <SpotlightCard key={card.title}>
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="card-texture glow-border-hover group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-colors"
                >
                  {/* Icon — rotates + glows on hover */}
                  <div className="relative z-[1] mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-[#161616] text-foreground ring-1 ring-border transition-all duration-300 group-hover:ring-accent/30">
                    <motion.span
                      whileHover={{ rotate: 14, scale: 1.18 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="inline-flex"
                    >
                      <Icon className="size-5" strokeWidth={1.75} />
                    </motion.span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.20) 0%, transparent 72%)",
                      }}
                    />
                  </div>

                  <h3 className="relative z-[1] text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground">
                    {card.title}
                  </h3>
                  <p className="relative z-[1] mt-2 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </motion.div>
              </SpotlightCard>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
