/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/luciegerova',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
  assetPrefix: 'https://liqnerd.github.io/luciegerova',
  trailingSlash: true,
}

export default nextConfig 