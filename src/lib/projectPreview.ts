import type { Project } from "@/lib/data";

export type PreviewKind = "pdf" | "office";

export type PreviewFile = {
  label: string;
  filename: string;
  kind: PreviewKind;
};

function fileKind(filename: string): PreviewKind | null {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".pdf")) return "pdf";
  if (lower.endsWith(".pptx") || lower.endsWith(".docx")) return "office";
  return null;
}

/** Assets that can be shown in the inline preview (PDF iframe or Office embed). */
export function getPreviewFiles(project: Project): PreviewFile[] {
  const out: PreviewFile[] = [];
  for (const a of project.assets) {
    const kind = fileKind(a.filename);
    if (kind) out.push({ label: a.label, filename: a.filename, kind });
  }
  return out;
}

export function officeEmbedUrl(absoluteFileUrl: string) {
  return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteFileUrl)}`;
}

/** Microsoft’s viewer cannot fetch localhost URLs. */
export function canUseOfficeOnlineEmbed(siteOrigin: string | null): boolean {
  if (!siteOrigin) return false;
  try {
    const { hostname } = new URL(siteOrigin);
    if (hostname === "localhost" || hostname.startsWith("127.")) return false;
    return true;
  } catch {
    return false;
  }
}
