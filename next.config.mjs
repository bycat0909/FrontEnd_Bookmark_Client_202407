/** @type {import('next').NextConfig} */
const nextConfig = {  
  async redirects() {
    return [
      {
        source: '/',
        destination: '/bookmarks',
        permanent: true
      }
    ]
  }, //redirects
  async rewrites() {
        const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL
        return [
            {
                source: '/api/:path*',
                destination: `${API_BASE_URL}/api/:path*`
            }
        ]
  }, //rewrites  
};

export default nextConfig;