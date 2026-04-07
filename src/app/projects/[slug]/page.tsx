import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectPreview } from "@/components/ProjectPreview";
import { getProjectBySlug, projectAssetHref, projects, site } from "@/lib/data";
import { getPreviewFiles } from "@/lib/projectPreview";

async function resolveSiteOrigin(): Promise<string | null> {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!host) return null;
  const isLocal = host.startsWith("localhost") || host.startsWith("127.");
  const proto = h.get("x-forwarded-proto") ?? (isLocal ? "http" : "https");
  return `${proto}://${host}`;
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: `Project — ${site.name}` };
  }
  return {
    title: `${project.title} — ${site.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const siteOrigin = await resolveSiteOrigin();
  const previewFiles = getPreviewFiles(project);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="relative overflow-hidden border-b border-border/80">
          {project.caseHeroImage ? (
            <>
              <div className="absolute inset-0">
                <Image
                  src={project.caseHeroImage}
                  alt={`${project.title} — hero background`}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-background"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/55"
                aria-hidden
              />
            </>
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#0f0d0a]/90 to-background"
              aria-hidden
            />
          )}

          <div className="relative z-10 mx-auto max-w-3xl px-5 pb-16 pt-28 md:max-w-4xl md:px-8 md:pb-20 md:pt-32">
            <Link
              href="/#projects"
              className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent ${
                project.caseHeroImage
                  ? "text-white/70 hover:text-accent"
                  : "text-muted-foreground"
              }`}
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              All projects
            </Link>

            <p className="mt-10 text-[0.65rem] font-semibold tracking-[0.2em] text-accent uppercase">
              {project.tag}
            </p>
            <h1
              className={`mt-4 font-display text-[2rem] font-normal leading-[1.12] tracking-tight md:text-[2.75rem] md:leading-[1.08] ${
                project.caseHeroImage ? "text-white" : "text-foreground"
              }`}
            >
              {project.title}
            </h1>
            <p
              className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${
                project.caseHeroImage ? "text-white/80" : "text-muted-foreground"
              }`}
            >
              {project.description}
            </p>
            <p
              className={`mt-5 max-w-2xl text-sm leading-relaxed ${
                project.caseHeroImage ? "text-white/65" : "text-muted-foreground/90"
              }`}
            >
              {project.detail}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <li key={t}>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${
                      project.caseHeroImage
                        ? "border-white/20 bg-black/35 text-white/85 backdrop-blur-sm"
                        : "border-border bg-card/60 text-muted-foreground"
                    }`}
                  >
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-14 md:max-w-4xl md:px-8 md:py-20">
          {previewFiles.length > 0 && (
            <section aria-labelledby="preview-heading">
              <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2
                    id="preview-heading"
                    className="font-sans text-xs font-bold tracking-[0.2em] text-foreground uppercase"
                  >
                    Preview
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                    PDFs open inline. Slides and Word files use Microsoft’s
                    viewer when the site is on a public HTTPS URL.
                  </p>
                </div>
              </div>
              <ProjectPreview files={previewFiles} siteOrigin={siteOrigin} />
            </section>
          )}

          <section
            className={previewFiles.length > 0 ? "mt-20 md:mt-24" : ""}
            aria-labelledby="case-study-heading"
          >
            <h2
              id="case-study-heading"
              className="font-sans text-xs font-bold tracking-[0.2em] text-foreground uppercase"
            >
              Case study
            </h2>
            <ol className="mt-10 divide-y divide-border border-y border-border">
              {project.caseStudy.map((block, i) => (
                <li
                  key={block.heading}
                  className="grid gap-6 py-10 md:grid-cols-[5.5rem_1fr] md:gap-10 md:py-12"
                >
                  <div className="font-display text-3xl tabular-nums text-accent/35 md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-foreground md:text-xl">
                      {block.heading}
                    </h3>
                    <p className="mt-4 text-sm leading-[1.75] text-muted-foreground md:text-base md:leading-[1.8]">
                      {block.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section
            className="mt-16 rounded-2xl border border-border bg-card/40 p-6 md:mt-20 md:p-8"
            aria-labelledby="files-heading"
          >
            <h2
              id="files-heading"
              className="font-sans text-xs font-bold tracking-[0.2em] text-foreground uppercase"
            >
              Download
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Original deliverables for offline review.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {project.assets.map((asset) => (
                <li key={asset.filename}>
                  <a
                    href={projectAssetHref(asset.filename)}
                    download
                    className="pressable flex items-center justify-between gap-4 rounded-xl border border-border bg-background/80 px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/35 hover:bg-hover-card"
                  >
                    <span className="min-w-0 flex-1 truncate">{asset.label}</span>
                    <Download
                      className="size-4 shrink-0 text-muted-foreground"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
