import Link from "next/link";

import { AuroraField } from "@/components/AuroraField";
import { site } from "@/lib/data";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative mt-0 min-h-[16rem] overflow-hidden border-t border-border bg-[#060606]"
    >
      <div className="footer-aurora footer-wind-aurora pointer-events-none absolute inset-0 z-0">
        <AuroraField vignette="footer" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-16">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="text-left">
              <p className="font-sans text-lg font-semibold tracking-tight text-foreground">
                {site.name}
              </p>
              <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                {site.title} · {site.location}
              </p>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          >
            {quickLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-accent-underline text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent-underline text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="link-accent-underline text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </a>
            <Link
              href={site.resumePath}
              className="link-accent-underline text-muted-foreground transition-colors hover:text-foreground"
            >
              Resume
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href="#hero"
            className="link-accent-underline pressable inline-block transition-colors hover:text-accent"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
