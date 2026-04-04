"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { type Project, projects } from "@/lib/data";

/* Gradient "thumbnails" per project — replace with real images later */
const thumbnails: Record<string, string> = {
  "kc-analysis":
    "linear-gradient(135deg, #0d0d1a 0%, #1a1025 40%, #0a1628 70%, #051220 100%)",
  "strategic-sim":
    "linear-gradient(135deg, #0a1a0a 0%, #0f2010 40%, #050f05 70%, #030a03 100%)",
  "stuart-comms":
    "linear-gradient(135deg, #1a0a0a 0%, #200f10 40%, #0f0505 70%, #0a0303 100%)",
  orientation:
    "linear-gradient(135deg, #0d0d1a 0%, #1a1530 40%, #0a0a20 70%, #050510 100%)",
};

const accentLines: Record<string, string> = {
  "kc-analysis": "rgba(100, 140, 255, 0.6)",
  "strategic-sim": "rgba(80, 200, 120, 0.6)",
  "stuart-comms": "rgba(220, 100, 100, 0.6)",
  orientation: "rgba(160, 120, 255, 0.6)",
};

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-border bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        {/* Svarog centered heading */}
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-sans text-[2.25rem] font-bold leading-tight tracking-tight text-foreground md:text-[3.5rem]">
              View{" "}
              <em className="font-display not-italic italic">Our Projects</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Financial analysis, strategy simulations, and marketing campaigns
              that pair rigour with polished presentation.
            </p>
          </div>
        </SectionReveal>

        {/* Svarog 2-column image grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <SectionReveal key={project.id}>
              <ProjectCard project={project} onClick={() => setActive(project)} />
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-4 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-7 shadow-2xl md:p-9"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.6rem] font-semibold tracking-widest text-muted-foreground uppercase">
                    {active.tag}
                  </p>
                  <h3 className="mt-2 font-sans text-xl font-bold text-foreground md:text-2xl">
                    {active.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                >
                  <X className="size-4" />
                </button>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {active.detail}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Svarog-style large image card ────────────────────────────────────────── */
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const bg = thumbnails[project.id] ?? thumbnails["kc-analysis"];
  const accent = accentLines[project.id] ?? "rgba(200,200,200,0.5)";

  return (
    <motion.article
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-border"
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); } }}
      role="button"
      tabIndex={0}
    >
      {/* Gradient thumbnail */}
      <div
        className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
        style={{ background: bg }}
      />

      {/* Abstract lines / data visualization decoration */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30 transition-opacity duration-300 group-hover:opacity-50"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <line x1="0" y1="220" x2="400" y2="80" stroke={accent} strokeWidth="0.8" />
        <line x1="0" y1="180" x2="400" y2="120" stroke={accent} strokeWidth="0.5" />
        <line x1="60" y1="0" x2="120" y2="300" stroke={accent} strokeWidth="0.5" />
        <line x1="160" y1="0" x2="200" y2="300" stroke={accent} strokeWidth="0.4" />
        <line x1="280" y1="0" x2="320" y2="300" stroke={accent} strokeWidth="0.4" />
        <circle cx="200" cy="150" r="60" fill="none" stroke={accent} strokeWidth="0.4" />
        <circle cx="200" cy="150" r="90" fill="none" stroke={accent} strokeWidth="0.3" />
      </svg>

      {/* Dark bottom overlay for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
        }}
      />

      {/* Text overlay — Svarog card style */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-7">
        <div>
          <p className="text-xs font-medium text-white/50">{project.tag}</p>
          <h3 className="mt-1 font-sans text-lg font-semibold leading-snug text-white md:text-xl">
            {project.title}
          </h3>
        </div>
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all group-hover:border-white/50 group-hover:bg-white/10">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </motion.article>
  );
}
