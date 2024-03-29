/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack as an argument to the function
    // which is required to use webpack properties
    config.cache = false;

    return config;
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

//Old
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // images: [
//   //   {
//   //     protocol: 'https',
//   //     hostname: 'images.unsplash.com',
//   //   },
//   // ],
// };

// module.exports = nextConfig;
