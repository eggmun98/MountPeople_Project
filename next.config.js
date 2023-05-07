/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "eggmun-mount-project",
  webpack5: true,
  webpack: (config, options) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
