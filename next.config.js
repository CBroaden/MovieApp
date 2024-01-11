/** @type {import('next').NextConfig} */
const nextConfig = {}

//default module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.tmdb.org' ,
          port: '',
          pathname: '/t/p/w500/**',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '/a/**',
        }
      ],
    },
  }
