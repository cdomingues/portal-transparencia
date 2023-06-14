/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

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
