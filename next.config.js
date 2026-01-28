/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization (not supported on GitHub Pages)
  images: {
    unoptimized: true,
  },
  
  // Required for GitHub Pages deployment to username.github.io/Portfolio
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  
  // Trailing slashes for better GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
