"use client";

import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutCards } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border/60 bg-[radial-gradient(circle_at_top,_rgba(198,124,78,0.08),_transparent_55%)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why work with me"
            title="Clarity, craft, and follow-through for student-facing programs"
            description="From first announcement to post-event reporting—I connect messaging, visuals, and light analytics so teams see what worked."
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={0.06 * index}>
                <GlowCard className="h-full space-y-4 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-40px_rgba(17,17,17,0.28)] transition-transform duration-300">
                  <div
                    className={cn(
                      "flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary"
                    )}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
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
