"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { type ExperienceEntry, experiences } from "@/lib/data";

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <section
      id="experience"
      className="section-glow-line scroll-mt-24 bg-[#070707] py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Svarog centered heading */}
        <SectionReveal>
          <div className="mb-16 text-center">
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

        <div className="space-y-4">
          {experiences.map((entry, index) => (
            <TimelineRow
              key={entry.id}
              entry={entry}
              open={openId === entry.id}
              onToggle={() => toggle(entry.id)}
              revealDelay={index * 0.09}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineRow({
  entry,
  open,
  onToggle,
  revealDelay,
}: {
  entry: ExperienceEntry;
  open: boolean;
  onToggle: () => void;
  revealDelay?: number;
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
              <ul className="space-y-3 px-6 py-5 text-sm leading-relaxed text-muted-foreground md:px-8 md:py-6">
                {entry.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionReveal>
  );
}
