import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async middleware() {
    return [
      {
        source: "/auth/:path*",
        destination: "/middleware",
      },
      {
        source: "/profile",
        destination: "/middleware",
      },
    ];
  },
};

export default nextConfig;
