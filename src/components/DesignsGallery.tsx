"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import type { DesignItem } from "@/lib/data";

/* ─── Motion variants ──────────────────────────────────────────────────── */

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const panelVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" as const } },
  exit: { opacity: 0, y: 24, transition: { duration: 0.22, ease: "easeIn" as const } },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.42, ease: "easeOut" as const },
  },
};

const lightboxVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.28, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.92, transition: { duration: 0.18, ease: "easeIn" as const } },
};

/* ─── Gradient fallback palette ─────────────────────────────────────────── */

const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #1a0550 0%, #3d1694 50%, #1e0a6e 100%)",
  "linear-gradient(135deg, #0d1b3e 0%, #1a3a6e 50%, #0f264f 100%)",
  "linear-gradient(135deg, #2a0845 0%, #5c2090 50%, #1f063a 100%)",
  "linear-gradient(135deg, #110a2e 0%, #2e1570 50%, #4a1aad 100%)",
  "linear-gradient(135deg, #06122a 0%, #0d2a5c 50%, #153570 100%)",
  "linear-gradient(135deg, #1e0830 0%, #4a1080 50%, #2c0660 100%)",
  "linear-gradient(135deg, #0a0f28 0%, #1a2255 50%, #2a3480 100%)",
  "linear-gradient(135deg, #220550 0%, #4d18a8 50%, #1a0440 100%)",
];

/* ─── DesignCard ─────────────────────────────────────────────────────────── */

function DesignCard({
  design,
  index,
  onClick,
}: {
  design: DesignItem;
  index: number;
  onClick: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const gradient = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e0e0e]"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {imgError ? (
          /* Gradient placeholder */
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
            style={{ background: gradient }}
          >
            <div
              className="mb-2 size-10 rounded-full opacity-30"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />
            <p className="text-xs font-medium text-white/60 leading-snug">{design.title}</p>
          </div>
        ) : (
          <Image
            src={design.src}
            alt={design.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-108"
            onError={() => setImgError(true)}
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Zoom icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <motion.span
            initial={{ scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
            className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
          >
            <ZoomIn className="size-4 text-white" />
          </motion.span>
        </div>
      </div>

      {/* Label */}
      <div className="px-4 py-3">
        <p className="text-[0.6rem] font-semibold tracking-[0.15em] text-accent uppercase">
          {design.category}
        </p>
        <p className="mt-0.5 line-clamp-1 text-sm font-medium text-foreground leading-snug">
          {design.title}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main gallery ───────────────────────────────────────────────────────── */

export function DesignsGallery({
  designs,
  onClose,
}: {
  designs: DesignItem[];
  onClose: () => void;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose();
      }
      if (lightbox !== null) {
        if (e.key === "ArrowRight")
          setLightbox((p) => ((p ?? 0) + 1) % designs.length);
        if (e.key === "ArrowLeft")
          setLightbox((p) => ((p ?? 0) - 1 + designs.length) % designs.length);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, designs.length, onClose]);

  /* Lock scroll */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <motion.div
      key="gallery-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] overflow-y-auto"
      style={{ background: "rgba(4,4,8,0.97)" }}
    >
      {/* ── Aurora background ──────────────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          style={{
            position: "absolute", left: "-15%", top: "15%",
            width: "55%", height: "55%", borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(68,35,172,0.22) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute", right: "-12%", bottom: "5%",
            width: "45%", height: "50%", borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(100,50,200,0.14) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          style={{
            position: "absolute", left: "40%", top: "-10%",
            width: "35%", height: "40%", borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(38,16,118,0.16) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
          }}
        />
      </div>

      {/* ── Panel ──────────────────────────────────────────────────────── */}
      <motion.div
        key="gallery-panel"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative z-10 min-h-screen"
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-20 border-b border-white/[0.06] backdrop-blur-xl"
          style={{ background: "rgba(4,4,8,0.85)" }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
            <div>
              <p className="text-[0.6rem] font-bold tracking-[0.2em] text-accent uppercase">
                Stuart School of Business · Marketing &amp; Engagement
              </p>
              <h2 className="mt-1 font-sans text-xl font-bold tracking-tight text-foreground md:text-2xl">
                My Design Work
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden text-sm text-muted-foreground sm:block">
                {designs.length} pieces
              </span>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                aria-label="Close gallery"
              >
                <X className="size-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Subheader bar */}
        <div className="border-b border-white/[0.04]" style={{ background: "rgba(4,4,8,0.6)" }}>
          <div className="mx-auto max-w-7xl px-5 py-3 md:px-10">
            <div className="flex flex-wrap items-center gap-2">
              {["All", "Event Flyer", "Social Media", "Event Banner", "Email Header", "Presentation", "Brand Asset"].map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-white/[0.07] bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mx-auto max-w-7xl px-5 py-10 pb-20 md:px-10">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {designs.map((design, i) => (
              <DesignCard
                key={design.src}
                design={design}
                index={i}
                onClick={() => setLightbox(i)}
              />
            ))}
          </motion.div>

          {/* Footer hint */}
          <p className="mt-12 text-center text-xs text-muted-foreground/50">
            Click any card to view full size · ESC to close
          </p>
        </div>
      </motion.div>

      {/* ── Lightbox ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              key={`lightbox-${lightbox}`}
              variants={lightboxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative mx-4 flex max-h-[90vh] max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/[0.08]"
              style={{ background: "#0a0a0a" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image wrapper */}
              <div className="relative min-h-[40vh] flex-1 overflow-hidden"
                style={{ maxHeight: "75vh" }}
              >
                <LightboxImage design={designs[lightbox]} index={lightbox} />
              </div>

              {/* Info footer */}
              <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-4">
                <div>
                  <p className="text-[0.6rem] font-bold tracking-[0.15em] text-accent uppercase">
                    {designs[lightbox].category}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    {designs[lightbox].title}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {lightbox + 1} / {designs.length}
                </span>
              </div>

              {/* Nav arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((p) => ((p ?? 0) - 1 + designs.length) % designs.length); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                aria-label="Previous"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox((p) => ((p ?? 0) + 1) % designs.length); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                aria-label="Next"
              >
                <ArrowRight className="size-4" />
              </button>

              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-sm transition-colors hover:text-white"
                aria-label="Close lightbox"
              >
                <X className="size-3.5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── LightboxImage handles img error gracefully ─────────────────────────── */

function LightboxImage({ design, index }: { design: DesignItem; index: number }) {
  const [imgError, setImgError] = useState(false);
  const gradient = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];

  if (imgError) {
    return (
      <div
        className="flex h-full min-h-[40vh] w-full items-center justify-center p-8 text-center"
        style={{ background: gradient }}
      >
        <div>
          <p className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-3">
            {design.category}
          </p>
          <p className="text-2xl font-bold text-white/80 leading-snug max-w-sm">
            {design.title}
          </p>
          <p className="mt-4 text-xs text-white/40">
            Add image to /public/designs/
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[40vh] w-full">
      <Image
        src={design.src}
        alt={design.title}
        fill
        sizes="(max-width: 1024px) 100vw, 80vw"
        className="object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
}
