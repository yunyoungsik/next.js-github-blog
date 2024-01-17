/**
 * @type {import('next').NextConfig}
 */
// const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    // basePath: isProd ? '/next.js-github-blog' : '',
    output: 'export',
    distDir: 'dist',
    images: {
      unoptimized: true,
    }
  }
   
  module.exports = nextConfig