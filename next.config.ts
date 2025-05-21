import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // devIndicators: {
  //   position: 'bottom-left'
  // },
  experimental: process.env.NEXT_PUBLIC_ENABLE_PPR === 'true' ? {
    ppr: 'incremental',
  } : undefined,
};

export default nextConfig;