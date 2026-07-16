import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  // Uncomment for static export to Hostinger
  // output: "export",
};

export default nextConfig;
