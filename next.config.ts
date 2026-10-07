import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * TEMPORARY — only needed while the site points at Unsplash for artwork.
     * Once the photos in src/data/images.ts have been downloaded into
     * /public/images, delete this whole `images` block: local files under
     * /public need no remote pattern.
     */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
    ],
  },
};

export default nextConfig;
