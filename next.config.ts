import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence the turbopack multiple lockfiles warning
  serverExternalPackages: [], // or any valid Config, we just skip experimental
};

// Next 15.x/16.x Turbopack config structure
(nextConfig as any).turbopack = {
  root: process.cwd(),
};

export default nextConfig;
