"use client";

import { Reveal } from "@/components/ui/Reveal";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { site } from "@/data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl space-y-10 px-6 text-center">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let’s create marketing that connects clearly and meaningfully.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-muted-foreground">
            Open to internships and full-time roles where communication, creative
            production, and light analytics come together.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton href={`mailto:${site.email}`}>
              Email Me
            </PrimaryButton>
            <PrimaryButton href={site.linkedInUrl} external variant="outline">
              LinkedIn
            </PrimaryButton>
            <PrimaryButton href={site.resumePath} variant="outline">
              Resume
            </PrimaryButton>
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-sm text-muted-foreground">
            Prefer email?{" "}
            <a
              className="font-medium text-foreground underline-offset-4 hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>{" "}
            · {site.phone}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
