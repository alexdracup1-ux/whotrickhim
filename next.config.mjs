/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove output: 'export' and images.unoptimized for dynamic Vercel deploy
};

export default nextConfig;
