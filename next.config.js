/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostnames: "picsum.photos",
        port: 443,
        path: "/200/300",
      },
    ],
  },
};

module.exports = nextConfig;
