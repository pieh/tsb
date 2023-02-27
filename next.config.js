/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["assets.example.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
