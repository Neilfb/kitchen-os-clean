/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return 'kitchen-os-build-' + Date.now()
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
  },
}

module.exports = nextConfig
