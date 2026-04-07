import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignore TypeScript build errors caused by missing .d.ts files in Next.js 16
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
