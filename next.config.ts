import type { NextConfig } from 'next'
import withBundleAnalyzer from '@next/bundle-analyzer'

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = bundleAnalyzer({
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8088/:path*',
      },
    ]
  },
})

export default nextConfig
