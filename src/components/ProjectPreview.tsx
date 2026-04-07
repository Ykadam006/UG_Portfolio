"use client";

import { FileWarning, Presentation } from "lucide-react";
import { useState } from "react";

import { projectAssetHref } from "@/lib/data";
import {
  canUseOfficeOnlineEmbed,
  officeEmbedUrl,
  type PreviewFile,
} from "@/lib/projectPreview";
import { cn } from "@/lib/utils";

type ProjectPreviewProps = {
  files: PreviewFile[];
  /** e.g. https://yoursite.com — required for PPTX/DOCX in-browser preview via Microsoft viewer */
  siteOrigin: string | null;
};

export function ProjectPreview({ files, siteOrigin }: ProjectPreviewProps) {
  const [index, setIndex] = useState(0);

  if (files.length === 0) {
    return null;
  }

  const current = files[index] ?? files[0];
  const path = projectAssetHref(current.filename);
  const officeOk = canUseOfficeOnlineEmbed(siteOrigin);
  const absolute =
    siteOrigin != null && siteOrigin.length > 0
      ? `${siteOrigin.replace(/\/$/, "")}${path}`
      : null;
  const embedSrc =
    current.kind === "office" && officeOk && absolute
      ? officeEmbedUrl(absolute)
      : null;

  const localhostPreview =
    current.kind === "office" && siteOrigin && !officeOk;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_0_1px_rgba(201,168,76,0.06)]">
      {files.length > 1 && (
        <div
          className="flex flex-wrap gap-2 border-b border-border bg-background/40 p-3 md:p-4"
          role="tablist"
          aria-label="Choose file to preview"
        >
          {files.map((f, i) => (
            <button
              key={f.filename}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "rounded-full px-4 py-2 text-left text-xs font-semibold tracking-wide transition-colors md:text-sm",
                i === index
                  ? "bg-accent text-accent-foreground"
                  : "bg-hover-card text-muted-foreground hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="relative min-h-[min(70vh,720px)] w-full bg-[#0a0a0c]">
        {current.kind === "pdf" && (
          <iframe
            title={current.label}
            src={path}
            className="absolute inset-0 h-full min-h-[min(70vh,720px)] w-full border-0"
          />
        )}

        {current.kind === "office" && embedSrc && (
          <iframe
            title={current.label}
            src={embedSrc}
            className="absolute inset-0 h-full min-h-[min(70vh,720px)] w-full border-0"
            allowFullScreen
          />
        )}

        {current.kind === "office" && !embedSrc && (
          <div className="flex min-h-[min(70vh,520px)] flex-col items-center justify-center gap-5 px-8 py-16 text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
              <Presentation className="size-8" aria-hidden />
            </div>
            <div className="max-w-md space-y-2">
              <p className="font-sans text-lg font-semibold text-foreground">
                Live slide preview
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {localhostPreview
                  ? "Microsoft’s viewer can’t load files from localhost. Deploy the site (or open this page on your live URL) to see slides in the browser—or download the file below."
                  : !siteOrigin
                    ? "Set NEXT_PUBLIC_SITE_URL to your production URL so the embedded PowerPoint / Word viewer can load your files. Downloads always work."
                    : "Embedded preview isn’t available for this file right now. Use download to open it on your device."}
              </p>
            </div>
            <a
              href={path}
              download
              className="pressable inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:bg-hover-card"
            >
              Download {current.filename.replace(/\.[^.]+$/, "")}
            </a>
            {!siteOrigin && (
              <p className="flex max-w-sm items-start gap-2 text-left text-xs text-muted-foreground">
                <FileWarning
                  className="mt-0.5 size-4 shrink-0 text-accent/80"
                  aria-hidden
                />
                <span>
                  Tip: add{" "}
                  <code className="rounded bg-muted px-1 py-0.5 text-[0.7rem]">
                    NEXT_PUBLIC_SITE_URL=https://your-domain.com
                  </code>{" "}
                  in production for embed support.
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
