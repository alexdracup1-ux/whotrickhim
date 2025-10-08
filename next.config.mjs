/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  trailingSlash: true,  // Optional: Makes URLs like /oferty/ (helps with WordPress routing)
  images: {
    unoptimized: true,  // Required for static export; skips Next.js image optimization
  },
};

export default nextConfig;
