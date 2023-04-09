/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    environment: process.env.ENVIRONMENT || "local",
    baseUrl: process.env.BASE_URL || "http://localhost:8888",
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["assets.example.com", "picsum.photos", "images.ctfassets.net"],
  },
};

module.exports = nextConfig;
