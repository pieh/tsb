/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:8888",
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["assets.example.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
