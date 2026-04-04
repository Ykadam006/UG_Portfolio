"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/data/portfolio";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60 bg-background"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:py-28">
        <div className="flex flex-col justify-center gap-8">
          <Reveal>
            <p className="inline-flex w-fit items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
              {hero.badge}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {hero.subtext}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </PrimaryButton>
              <PrimaryButton
                href={hero.secondaryCta.href}
                variant="outline"
              >
                {hero.secondaryCta.label}
              </PrimaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                Tools I build with
              </p>
              <div className="flex flex-wrap gap-2">
                {hero.trustTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md md:max-w-none"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-black/5 bg-card shadow-[0_24px_80px_-40px_rgba(17,17,17,0.35)]">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(min-width: 1024px) 420px, 90vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
