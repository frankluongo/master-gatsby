module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@assets': './assets',
          '@components': './components',
          '@pages': './pages',
          '@styles': './styles',
          '@templates': './templates',
          '@utils': './utils',
        },
      },
    },
  ],
};
