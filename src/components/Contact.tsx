"use client";

import { motion } from "framer-motion";

import { SectionReveal } from "@/components/SectionReveal";
import { contact, site } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionReveal>
          <motion.div
            className="rounded-3xl border bg-card px-8 py-16 text-center md:px-16 md:py-20"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {/* Svarog mixed heading */}
            <h2 className="font-sans text-[2rem] font-bold leading-tight tracking-tight text-foreground md:text-[3.25rem]">
              Open to{" "}
              <em className="font-display not-italic italic">Opportunities</em>
              {" "}— let&apos;s connect.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              {contact.subtext}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex h-12 min-w-[9rem] items-center justify-center rounded-full border border-foreground/20 bg-foreground px-8 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                Email Me
              </a>
              <a
                href={site.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 min-w-[9rem] items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-foreground transition-all hover:border-foreground/30"
              >
                LinkedIn ↗
              </a>
              <a
                href={site.resumePath}
                className="inline-flex h-12 min-w-[9rem] items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-muted-foreground transition-all hover:border-foreground/20 hover:text-foreground"
              >
                Resume PDF
              </a>
            </div>

            <p className="mt-10 text-sm text-muted-foreground">
              {site.email} · {site.location}
            </p>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}
