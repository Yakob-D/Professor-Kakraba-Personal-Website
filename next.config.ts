import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pins Turbopack's workspace root to this project. Without it, Turbopack
  // walks up looking for a lockfile and stops at the parent folder's
  // package-lock.json (outside this git repo), which prints a warning on
  // every run.
  turbopack: {
    root: path.join(__dirname),
  },
  // next/image refuses to optimize a remote image unless its host is
  // explicitly allowlisted here. Add an entry whenever a data.tsx file
  // points an ImageRef.src at a new external domain.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medicine.tulane.edu",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
