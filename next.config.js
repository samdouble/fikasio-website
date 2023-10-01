/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true,
    }
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
};

module.exports = nextConfig;
