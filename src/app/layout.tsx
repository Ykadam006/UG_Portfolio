import type { Metadata, Viewport } from "next";

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

const defaultTitle = `${site.name} — ${site.title}`;

export const metadata: Metadata = {
  title: defaultTitle,
  description: site.description,
  metadataBase: metadataBaseUrl(),
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/logo-mark.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-mark.svg", type: "image/svg+xml" }],
    shortcut: "/logo-mark.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: defaultTitle,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#080808" },
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
  ],
  colorScheme: "dark",
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
