/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/luciegerova',
  assetPrefix: '/luciegerova/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
}

export default nextConfig 