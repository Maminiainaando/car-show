/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
      domains: ['drive.google.com'],
  },

  async rewrites() {
      return [
          {
              source: '/images/:path*',
              destination: 'https://drive.google.com/uc?export=view&id=:path*', // Proxy vers Google Drive
          },
      ];
  },
};

export default nextConfig;
