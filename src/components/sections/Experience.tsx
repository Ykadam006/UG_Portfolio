"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { experienceItems } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-border/60 bg-secondary/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Hands-on marketing, leadership, and program delivery"
            description="Roles that blend creative execution, stakeholder communication, and structured follow-up—anchored in my work at IIT and student orgs."
          />
        </Reveal>

        <div className="relative space-y-10 before:absolute before:top-3 before:left-[11px] before:h-[calc(100%-24px)] before:w-px before:bg-border md:before:left-[15px]">
          {experienceItems.map((item, index) => (
            <Reveal key={`${item.organization}-${item.role}`} delay={0.07 * index}>
              <article className="relative grid gap-6 pl-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 md:pl-12">
                <span className="absolute top-2 left-0 flex size-6 items-center justify-center rounded-full border border-border bg-background shadow-sm md:top-1 md:size-8">
                  <span className="size-2 rounded-full bg-primary md:size-2.5" />
                </span>
                <div className="space-y-1">
                  <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                    {item.dateRange}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.organization} · {item.location}
                  </p>
                </div>
                <div className="space-y-4 rounded-3xl border border-black/5 bg-card p-6 shadow-[0_18px_50px_-40px_rgba(17,17,17,0.35)]">
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-foreground/25" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
