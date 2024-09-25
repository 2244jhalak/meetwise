// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // imgbb image hosting
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google profile images
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

