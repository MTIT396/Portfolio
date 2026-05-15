import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"], // whitelist domain Cloudinary
  },
};

export default nextConfig;
