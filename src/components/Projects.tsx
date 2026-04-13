"use client";

import { animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

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
  return { bg: GRADIENTS[n % GRADIENTS.length], accent: ACCENTS[n % ACCENTS.length] };
}

function loneLastRowClass(index: number, total: number) {
  const isLast = index === total - 1;
  const loneInLastRow = total % 3 === 1;
  if (!isLast || !loneInLastRow) return undefined;
  return "lg:col-start-2";
}

export function Projects() {
  const total = projects.length;

  return (
    <section
      id="projects"
      className="section-glow-line scroll-mt-24 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <div className="mb-16 text-center">
            <h2 className="font-sans text-[2.25rem] font-bold leading-tight tracking-tight text-foreground md:text-[3.5rem]">
              View{" "}
              <em className="font-display not-italic italic">My Projects</em>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open any card for the full case study, preview, and downloads.
            </p>
          </div>
        </SectionReveal>

        <StaggerChildren className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              className={loneLastRowClass(index, total)}
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

/* ─── React Spring card tilt ─────────────────────────────────────────────── */
function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const { bg, accent } = cardStyleForId(project.id);

  /**
   * React Spring physics — mass/tension/friction give a natural bounce that
   * Framer Motion's duration-based springs can't match. The card settles with
   * a gentle overshoot then damps back to flat.
   */
  const [spring, api] = useSpring(() => ({
    xys: [0, 0, 1] as [number, number, number],
    config: { mass: 1, tension: 260, friction: 22 },
  }));

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const x = e.clientX - rect.left - cx;
    const y = e.clientY - rect.top - cy;
    api.start({ xys: [-(y / cy) * 7, (x / cx) * 7, 1.025] });
  };

  const handleMouseLeave = () => api.start({ xys: [0, 0, 1] });

  return (
    <Link
      href={`/projects/${project.id}`}
      prefetch={false}
      className={cn(
        "block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      style={{ perspective: 900 }}
    >
      <animated.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-border"
        style={{
          transform: spring.xys.to(
            (x, y, s) =>
              `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`,
          ),
          willChange: "transform",
        }}
      >
        {/* Image / gradient bg */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 origin-center scale-100 grayscale transition-[filter,transform] duration-700 ease-out",
              "group-hover:scale-[1.06] group-hover:grayscale-0",
              "motion-reduce:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100",
            )}
          >
            {project.listCoverImage ? (
              <div className="absolute inset-0">
                <Image
                  src={project.listCoverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  fetchPriority="low"
                />
              </div>
            ) : (
              <div className="absolute inset-0" style={{ background: bg }} />
            )}

            {!project.listCoverImage && (
              <svg
                className="absolute inset-0 h-full w-full opacity-30 transition-opacity duration-500 group-hover:opacity-50"
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
            )}
          </div>
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: project.listCoverImage
              ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.10) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Gold edge glow on hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.2)" }}
        />

        {/* Content */}
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
          {/* Arrow — Framer Motion used only for the icon micro-animation */}
          <motion.div
            whileHover={{ x: 1.5, y: -1.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:border-accent/60 group-hover:bg-accent/10"
          >
            <ArrowUpRight className="size-4" />
          </motion.div>
        </div>
      </animated.div>
    </Link>
  );
}
