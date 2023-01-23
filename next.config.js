/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iili.io",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = nextConfig;
