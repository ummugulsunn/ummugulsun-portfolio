import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ✅ Statik HTML dosyaları üret (GitHub Pages için)
  images: {
    unoptimized: true, // ✅ GitHub Pages resim optimizasyonu yapamaz
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // GitHub Pages için base path ayarı (gerekirse)
  // basePath: '',
  trailingSlash: true, // ✅ URL'lerde trailing slash (SEO için)
};

export default nextConfig;
