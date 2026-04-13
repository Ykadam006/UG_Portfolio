import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Tree-shake lucide barrel imports across the app (smaller client bundles). */
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/projects/foxcare-retail",
        destination: "/projects/foxcore-retail",
        permanent: true,
      },
      {
        source: "/projects/final-capstone",
        destination: "/#projects",
        permanent: false,
      },
      {
        source: "/projects/mba513-team5",
        destination: "/projects/abc-plastic-manufacturer",
        permanent: true,
      },
      {
        source: "/projects/project-qna",
        destination: "/projects/abc-plastic-manufacturer",
        permanent: true,
      },
      {
        source: "/images/project-seiko-brand-strategy.png",
        destination: "/images/project-watch-luxury-brand-grid.png",
        permanent: true,
      },
      {
        source: "/images/project-seiko-case-hero.png",
        destination: "/images/project-watch-luxury-case-hero.png",
        permanent: true,
      },
      {
        source: "/images/project-seiko-case-study-hero.png",
        destination: "/images/project-watch-luxury-case-study-hero.png",
        permanent: true,
      },
      {
        source: "/projects/seiko-luxury-watches-hero.png",
        destination: "/projects/luxury-watch-brand-presentation-hero.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
