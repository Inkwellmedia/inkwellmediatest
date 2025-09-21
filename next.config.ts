import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['img.youtube.com', 'ik.imagekit.io'],
    },
  /* config options here */
};

export default nextConfig;
