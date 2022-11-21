/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PORT: process.env.PORT,
    BASE_URL: process.env.BASE_URL
  }
}

module.exports = nextConfig
