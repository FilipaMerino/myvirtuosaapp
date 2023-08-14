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
        destination: 'https://app.flodesk.com/form/649cb575cac3e37f36e4a3b5/build',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

module.exports = nextConfig;
