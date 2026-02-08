import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ummugulsun-portfolio',
  assetPrefix: '/ummugulsun-portfolio/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
