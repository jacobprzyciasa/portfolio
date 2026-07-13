import type { NextConfig } from "next";

const blobHostname =
  process.env.NEXT_PUBLIC_BLOB_HOSTNAME ??
  "9uqxceq7vvlfskah.public.blob.vercel-storage.com";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 76, 78, 82, 86],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [96, 128, 256, 384],
    localPatterns: [{ pathname: "/**" }],
    remotePatterns: [
      {
        protocol: "https",
        hostname: blobHostname,
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
