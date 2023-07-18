module.exports = {
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
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
