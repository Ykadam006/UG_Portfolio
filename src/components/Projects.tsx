"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { SectionReveal } from "@/components/SectionReveal";
import { StaggerChildren } from "@/components/StaggerChildren";
import { type Project, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const GRADIENTS = [
  "linear-gradient(135deg, #0d0d1a 0%, #1a1025 40%, #0a1628 70%, #051220 100%)",
  "linear-gradient(135deg, #0a1a0a 0%, #0f2010 40%, #050f05 70%, #030a03 100%)",
  "linear-gradient(135deg, #1a0a0a 0%, #200f10 40%, #0f0505 70%, #0a0303 100%)",
  "linear-gradient(135deg, #0d0d1a 0%, #1a1530 40%, #0a0a20 70%, #050510 100%)",
  "linear-gradient(135deg, #0a1420 0%, #101828 45%, #050a12 70%, #020608 100%)",
  "linear-gradient(135deg, #140a18 0%, #1e1028 45%, #0a0610 70%, #040308 100%)",
];

const ACCENTS = [
  "rgba(100, 140, 255, 0.6)",
  "rgba(80, 200, 120, 0.6)",
  "rgba(220, 100, 100, 0.6)",
  "rgba(160, 120, 255, 0.6)",
  "rgba(201, 168, 76, 0.65)",
  "rgba(120, 200, 220, 0.55)",
];

function cardStyleForId(id: string) {
  let n = 0;
  for (let i = 0; i < id.length; i++) {
    n = (n + id.charCodeAt(i) * (i + 1)) % 100000;
  }
  const gi = n % GRADIENTS.length;
  const ai = n % ACCENTS.length;
  return { bg: GRADIENTS[gi], accent: ACCENTS[ai] };
}

export function Projects() {
  return (
    <section
      id="projects"
      className="section-glow-line scroll-mt-24 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-sans text-[2.25rem] font-bold leading-tight tracking-tight text-foreground md:text-[3.5rem]">
              View{" "}
              <em className="font-display not-italic italic">Our Projects</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Each project opens to a full case study with an in-browser preview
              (PDF or slides on your live site) and downloadable files.
            </p>
          </div>
        </SectionReveal>

        <StaggerChildren className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { bg, accent } = cardStyleForId(project.id);

  return (
    <Link
      href={`/projects/${project.id}`}
      className={cn(
        "block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      <motion.article
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-border"
      >
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          style={{ background: bg }}
        />

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

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 md:p-7">
          <div className="min-w-0 pr-2">
            <p className="text-xs font-medium text-white/50">{project.tag}</p>
            <h3 className="mt-1 font-sans text-lg font-semibold leading-snug text-white md:text-xl">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/55">
              {project.description}
            </p>
          </div>
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all group-hover:border-white/50 group-hover:bg-white/10">
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
