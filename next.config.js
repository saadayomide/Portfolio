/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization (not supported on GitHub Pages)
  images: {
    unoptimized: true,
  },
  
  // Uncomment and update these if deploying to a subpath (e.g., username.github.io/portfolio)
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
  
  // Trailing slashes for better GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
