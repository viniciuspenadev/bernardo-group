import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  allowedDevOrigins: ['192.168.15.9', 'localhost'],
  /* config options here */
};

export default nextConfig;
