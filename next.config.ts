import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // output: 'export',
    trailingSlash: true,
    typescript: {
        ignoreBuildErrors: true
    },
    async rewrites() {
        return [
            {
                source: '/api-proxy/:path*',
                destination: 'https://api.tcgdex.net/v2/en/:path*'
            }
        ]
    }
}

export default nextConfig