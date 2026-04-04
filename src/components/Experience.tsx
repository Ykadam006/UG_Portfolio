"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { type ExperienceEntry, experiences } from "@/lib/data";
export function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((cur) => (cur === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="scroll-mt-28 border-b border-border bg-[#0b0b0b] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Experience
          </p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Where I build campaigns and credibility
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Timeline layout scales easily as new roles are added alongside this
            Illinois Tech chapter.
          </p>
        </SectionReveal>

        <div className="relative mt-14 space-y-10 pl-2 md:pl-4">
          <div className="absolute top-2 bottom-2 left-[26px] w-px bg-border md:left-[30px]" />

          {experiences.map((entry) => (
            <TimelineRow
              key={entry.id}
              entry={entry}
              open={openId === entry.id}
              onToggle={() => toggle(entry.id)}
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
}: {
  entry: ExperienceEntry;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <SectionReveal>
      <article className="relative grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-10">
        <div className="relative flex gap-4 pl-12 md:pl-14">
          <span className="absolute top-1 left-0 flex size-8 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-accent md:top-0 md:size-9">
            {entry.monogram}
          </span>
          <div>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">
              {entry.dates}
            </p>
            <h3 className="mt-1 font-display text-xl text-foreground">
              {entry.role}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {entry.company} · {entry.location}
            </p>
          </div>
        </div>

        <motion.div
          layout
          className="overflow-hidden rounded-2xl border border-border bg-card"
        >
          <button
            type="button"
            onClick={onToggle}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-hover-card md:px-6 md:py-5"
          >
            <span className="text-sm font-semibold text-foreground">
              {open ? "Hide responsibilities" : "View responsibilities"}
            </span>
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <ChevronDown className="size-5 text-muted-foreground" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden border-t border-border"
              >
                <ul className="space-y-3 px-5 py-4 text-sm leading-relaxed text-muted-foreground md:px-6 md:py-5">
                  {entry.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </article>
    </SectionReveal>
  );
}
