/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/blog-app',
        destination: 'http://localhost:3001/blog-app'
      },
      {
        source: '/blog-app/:path*',
        destination: 'http://localhost:3001/blog-app/:path*'
      }
    ]
  }
}

module.exports = nextConfig