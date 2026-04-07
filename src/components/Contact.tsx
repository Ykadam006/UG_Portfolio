"use client";

import { motion } from "framer-motion";

import { AuroraField } from "@/components/AuroraField";
import { SectionReveal } from "@/components/SectionReveal";
import { contact, site } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-glow-line relative scroll-mt-24 overflow-hidden bg-background py-24 md:py-32"
    >
      <AuroraField
        vignette="section"
        phaseClass="contact-aurora"
        className="z-0"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8">
        <SectionReveal>
          <motion.div
            className="card-texture rounded-3xl border bg-card px-8 py-16 text-center md:px-16 md:py-20"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="relative z-[1] font-sans text-[2rem] font-bold leading-tight tracking-tight text-foreground md:text-[3.25rem]">
              Open to{" "}
              <em className="font-display not-italic italic">Opportunities</em>
              {" "}— let&apos;s connect.
            </h2>
            <p className="relative z-[1] mx-auto mt-5 max-w-xl text-muted-foreground">
              {contact.subtext}
            </p>

            <div className="relative z-[1] mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${site.email}`}
                className="pressable inline-flex h-12 min-w-[9rem] items-center justify-center rounded-full border border-foreground/20 bg-foreground px-8 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                Email Me
              </a>
              <a
                href={site.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pressable inline-flex h-12 min-w-[9rem] items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground transition-all hover:border-foreground/30"
              >
                LinkedIn ↗
              </a>
              <a
                href={site.resumePath}
                className="pressable inline-flex h-12 min-w-[9rem] items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-muted-foreground transition-all hover:border-foreground/20 hover:text-foreground"
              >
                Resume PDF
              </a>
            </div>

            <p className="relative z-[1] mt-10 text-sm text-muted-foreground">
              {site.email} · {site.location}
            </p>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
