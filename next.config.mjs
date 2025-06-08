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
        pathname: '/luciegerova/**',
      },
    ],
  },
  assetPrefix: '/luciegerova',
}

export default nextConfig 