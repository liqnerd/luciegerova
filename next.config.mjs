/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/luciegerova',
  images: {
    unoptimized: true,
    loader: 'default',
    path: '/luciegerova',
  },
  assetPrefix: '/luciegerova',
  trailingSlash: true,
}

export default nextConfig 