import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["app.esdev.tech", "placehold.co", "localhost"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
