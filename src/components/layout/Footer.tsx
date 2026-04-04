import Link from "next/link";

import { site } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-foreground">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{site.title}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#experience" className="hover:text-foreground">
            Experience
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-foreground"
          >
            Email
          </a>
          <Link href={site.resumePath} className="hover:text-foreground">
            Resume
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Chicago, IL.
        </p>
      </div>
    </footer>
  );
}
