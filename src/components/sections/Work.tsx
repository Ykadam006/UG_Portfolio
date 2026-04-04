"use client";

import Image from "next/image";

import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { featuredProjects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Work() {
  const [primary, ...rest] = featuredProjects;

  return (
    <section id="work" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl space-y-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Featured work"
            title="Campaigns, communications, and projects with visible impact"
            description="A snapshot of how I support programs—from Stuart School marketing work to analytics-backed presentations."
          />
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <article className="overflow-hidden rounded-3xl border border-black/5 bg-card shadow-[0_24px_70px_-44px_rgba(17,17,17,0.3)]">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative aspect-[16/11] w-full overflow-hidden lg:aspect-auto lg:min-h-[340px]">
                  <Image
                    src={primary.image}
                    alt={primary.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
                  <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    Featured case study
                  </p>
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                    {primary.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {primary.summary}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {primary.bullets.slice(0, 2).map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {primary.tools.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {primary.impact}
                  </p>
                  <div>
                    <PrimaryButton href="#contact" variant="outline" size="sm">
                      Discuss this project
                    </PrimaryButton>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={0.08 * index}>
                <article
                  className={cn(
                    "flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-card shadow-[0_20px_60px_-44px_rgba(17,17,17,0.28)]"
                  )}
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-7">
                    <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {project.impact}
                    </p>
                    <PrimaryButton
                      href="#contact"
                      variant="ghost"
                      size="sm"
                      className="justify-start px-0 text-primary hover:bg-transparent"
                    >
                      View case study →
                    </PrimaryButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
