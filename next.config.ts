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
  // Every image is a local file under /public, so no remote image hosts are
  // allowed.
};

export default nextConfig;
