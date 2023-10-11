/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["msp.c.yimg.jp"],
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
