/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/roadmaptosuccess',
        destination: 'https://peaceful-wave-664.myflodesk.com/',
        permanent: true,
      },
      {
        source: '/sopquickstart',
        destination: 'https://exceptional-surf-839.myflodesk.com/',
        permanent: true,
      },
      {
        source: '/ebook',
        destination: 'https://view.flodesk.com/pages/649cb6aa7b86946780829a32',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;
