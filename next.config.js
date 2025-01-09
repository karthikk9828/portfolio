/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    turbo: {
      rules: {
        // Disable the turbopack rules for now as they might cause issues
        "*.{js,ts,jsx,tsx}": [],
      },
    },
  },
}

module.exports = nextConfig 