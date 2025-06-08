export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // If the src is an absolute URL, return it as is
  if (src.startsWith('http')) {
    return src;
  }

  // For local images, prepend the assetPrefix
  const prefix = process.env.NODE_ENV === 'production'
    ? 'https://liqnerd.github.io/luciegerova'
    : '';

  // Remove the basePath if it's included in the src
  const normalizedSrc = src.startsWith('/luciegerova')
    ? src.slice('/luciegerova'.length)
    : src;

  return `${prefix}${normalizedSrc}`;
} 