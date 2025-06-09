/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/luciegerova',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/luciegerova',
  trailingSlash: true,
}

export default nextConfig 