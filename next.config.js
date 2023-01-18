const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/portofolio',
  assetPrefix: '/portofolio',
  images: {
    loader: "akamai",
    path: "/"
  }
}

module.exports = nextConfig
