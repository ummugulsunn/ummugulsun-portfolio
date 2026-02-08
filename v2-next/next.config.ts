import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ummugulsun-portfolio',
  assetPrefix: '/ummugulsun-portfolio/',
  trailingSlash: true,
};

export default nextConfig;
