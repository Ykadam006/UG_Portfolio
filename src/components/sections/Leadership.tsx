"use client";

import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { leadershipHighlights } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Leadership() {
  return (
    <section
      id="leadership"
      className="scroll-mt-24 border-y border-border/60 bg-[radial-gradient(circle_at_20%_20%,_rgba(198,124,78,0.12),_transparent_52%)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title="Building teams, clarity, and momentum outside the classroom"
            description="President and VP roles where strategy meets execution—budgets, storytelling, and reliable programming."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {leadershipHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={0.08 * index}>
                <GlowCard className="group relative h-full overflow-hidden border-primary/15 bg-gradient-to-b from-card to-secondary/40 p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,124,78,0.16),_transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative space-y-5">
                    <div
                      className={cn(
                        "flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm"
                      )}
                    >
                      <Icon className="size-6" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                        {item.org}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
