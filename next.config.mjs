const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // imgbb image hosting
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
