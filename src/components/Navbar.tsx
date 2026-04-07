"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { site } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const borderAlpha = useTransform(scrollY, [0, 50], [0, 1]);
  const borderColor = useMotionTemplate`rgba(30, 28, 25, ${borderAlpha})`;
  const bgAlpha = useTransform(scrollY, [0, 80], [0.0, 0.88]);
  const bgColor = useMotionTemplate`rgba(8, 8, 8, ${bgAlpha})`;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={cn(
          "sticky top-0 z-50 h-[4.25rem] backdrop-blur-xl supports-backdrop-filter:backdrop-blur-xl"
        )}
        style={{
          backgroundColor: bgColor,
          borderBottomWidth: 1,
          borderBottomColor: borderColor,
        }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 md:px-8">
          <Link
            href="/#hero"
            className="link-accent-underline font-display text-lg tracking-tight text-foreground transition-colors hover:text-foreground"
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-accent-underline text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href={site.resumePath}
            className="pressable hidden rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            Resume
          </Link>

          <button
            type="button"
            className="pressable inline-flex size-10 items-center justify-center rounded-full border border-border md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-[#0d0d0d]/95 px-5 pb-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 pt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="link-accent-underline rounded-lg px-2 py-2 text-sm font-medium text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href={site.resumePath}
                className="pressable mt-2 rounded-full border border-border px-4 py-2 text-center text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                Resume
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
