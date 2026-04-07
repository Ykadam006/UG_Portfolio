import type { Metadata } from "next";

import { site } from "@/lib/data";

import "@fontsource/dm-serif-display/400.css";
import "./globals.css";

function metadataBaseUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.description,
  metadataBase: metadataBaseUrl(),
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.description,
    images: [{ url: site.ogImage }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
