/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/luciegerova',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liqnerd.github.io',
      },
    ],
  },
  assetPrefix: '/luciegerova',
  trailingSlash: true,
}

export default nextConfig 