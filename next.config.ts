import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress assets with gzip/brotli
  compress: true,
  
  // Cache static assets aggressively in browser/CDN
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|ico|woff|woff2|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
