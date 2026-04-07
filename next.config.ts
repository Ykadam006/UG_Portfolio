import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
