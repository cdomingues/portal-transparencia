/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://licitacao-mgcon.mogidascruzes.sp.gov.br/arquivo/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
