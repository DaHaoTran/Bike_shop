/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
};

export default nextConfig;
