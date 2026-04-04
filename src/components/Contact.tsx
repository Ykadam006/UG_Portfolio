"use client";

import { motion } from "framer-motion";

import { SectionReveal } from "@/components/SectionReveal";
import { contact, site } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-background py-20 md:pb-28 md:pt-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <motion.div
            className="rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)] md:px-16 md:py-16"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              {contact.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {contact.subtext}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-12 min-w-[9rem] items-center justify-center rounded-full bg-accent px-8 text-sm font-semibold text-[#0d0d0d] transition-transform hover:-translate-y-0.5"
              >
                Email
              </a>
              <a
                href={site.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 min-w-[9rem] items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={site.resumePath}
                className="inline-flex h-12 min-w-[9rem] items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Resume PDF
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              {site.email} · {site.location}
            </p>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
