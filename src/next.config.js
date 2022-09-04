/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeimg.com", "github-readme-stats.vercel.app"]
  }
}

module.exports = nextConfig
