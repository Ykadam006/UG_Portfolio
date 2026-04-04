"use client";

import Image from "next/image";

import { GlowCard } from "@/components/ui/GlowCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/portfolio";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl space-y-14 px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Voices from collaborators"
            title="What mentors, faculty, and teammates say"
            description="Real quotes can replace these placeholders anytime—structured by the type of reference that matters most to employers."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={0.06 * index}>
              <GlowCard className="flex h-full flex-col gap-5 p-7">
                <div className="flex items-center gap-4">
                  <div className="relative size-14 overflow-hidden rounded-full border border-border bg-secondary">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div>
                    <p className="font-heading text-base font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  “{item.quote}”
                </p>
                {item.placeholder ? (
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    Placeholder — add real testimonial
                  </p>
                ) : null}
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
