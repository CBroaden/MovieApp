/** @type {import('next').NextConfig} */
const nextConfig = {}

//default module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org',
          port: '',
          pathname: '/t/p/w500/**',
        },
      ],
    },
  }
