import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * The invented projects section was replaced by Our Works. Old links —
   * the index and every former project page — go permanently (308) to the
   * Our Works overview; `:path*` also matches /projects itself.
   */
  redirects() {
    return [
      {
        source: "/projects/:path*",
        destination: "/works",
        permanent: true,
      },
    ];
  },
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
