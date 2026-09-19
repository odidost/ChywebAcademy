import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress assets with gzip/brotli
  compress: true,

  // Modern image optimization formats
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Performance optimizations
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  
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

  async redirects() {
    return [
      {
        source: "/blog/seo-for-real-estate-developers-in-nigeria",
        destination: "/seo-for-real-estate-developers-in-nigeria",
        permanent: true,
      },
      {
        source: "/blog/healthcare-web-designer-in-nigeria-hospitals-clinics",
        destination: "/healthcare-web-designer-nigeria",
        permanent: true,
      },
      {
        source: "/blog/healthcare-web-designer-in-nigeria",
        destination: "/healthcare-web-designer-nigeria",
        permanent: true,
      },
      {
        source: "/blog/seo-for-healthcare-in-nigeria",
        destination: "/seo-for-healthcare-nigeria",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
