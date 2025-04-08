import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "app.esdev.tech",
      "placehold.co",
      "localhost",
      "app.drophunting.io",
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
