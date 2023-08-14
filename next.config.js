/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ebook',
        destination: 'https://peaceful-wave-664.myflodesk.com/',
        permanent: true,
      },
      {
        source: '/SOP_Quick_Start',
        destination: 'https://exceptional-surf-839.myflodesk.com/',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;
