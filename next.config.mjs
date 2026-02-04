/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
  },

  // Security headers for production
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.builder.io https://pushlapgrowth.com https://agent.release0.com https://merchant.revolut.com https://sandbox-merchant.revolut.com",
              "style-src 'self' 'unsafe-inline' https://cdn.builder.io https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://cdn.builder.io https://backend.nocodebackend.io https://merchant.revolut.com https://sandbox-merchant.revolut.com https://www.pushlapgrowth.com https://agent.release0.com https://app.release0.com",
              "frame-src 'self' https://merchant.revolut.com https://sandbox-merchant.revolut.com https://agent.release0.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },

  // Redirect rules for domain consistency
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'kitchen-os.com',
          },
        ],
        destination: 'https://www.kitchen-os.com/:path*',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
