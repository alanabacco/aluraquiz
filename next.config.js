module.exports = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alura.com.br',
        port: '0',
        pathname: '/*',
      },
    ],
  },
};
