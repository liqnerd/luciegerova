/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liqnerd.github.io',
      },
    ],
  },
  assetPrefix: '',
  trailingSlash: true,
}

export default nextConfig 