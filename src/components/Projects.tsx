"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { SectionReveal } from "@/components/SectionReveal";
import { type Project, projects } from "@/lib/data";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="projects"
      className="scroll-mt-28 border-b border-border bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Projects
          </p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Work that pairs rigor with presentation
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <SectionReveal key={project.id}>
              <motion.article
                whileHover={{ y: -4, borderLeftColor: "#C9A84C" }}
                transition={{ duration: 0.2 }}
                className="group flex h-full cursor-pointer flex-col rounded-2xl border border-border border-l-4 border-l-[#3d3d3d] bg-card p-6 shadow-[0_0_0_1px_rgba(61,61,61,0.35)] md:p-7"
                onClick={() => setActive(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(project);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <span className="inline-flex w-fit rounded-full border border-border bg-[#141414] px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-accent uppercase">
                  {project.tag}
                </span>
                <h3 className="mt-4 font-display text-xl text-foreground md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent">
                  <span>View project</span>
                  <motion.span
                    className="inline-flex"
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    whileHover={{ x: 4 }}
                  >
                    <ArrowRight className="size-4" />
                  </motion.span>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-wide text-accent uppercase">
                    {active.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    {active.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close"
                  onClick={() => setActive(null)}
                >
                  <X className="size-5" />
                </button>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {active.detail}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
