import { ImageResponse } from "next/og";

import { hero, site } from "@/lib/data";
import { loadOgFonts, OgLinkPreviewCard } from "@/lib/og-link-preview-card";

export const runtime = "nodejs";

export const alt = `${site.name} — ${hero.headline}`;

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fonts = await loadOgFonts();
  return new ImageResponse(<OgLinkPreviewCard />, { ...size, fonts });
}
