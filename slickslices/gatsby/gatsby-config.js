import dotenv from 'dotenv';

dotenv.config({ path: `.env` });
export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hamilton`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `2tdi92vy`,
        dataset: `production`,
        watchMode: `true`,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@assets': './assets',
          '@components': './components',
          '@lib': './lib',
          '@pages': './pages',
          '@styles': './styles',
          '@templates': './templates',
          '@utils': './utils',
        },
      },
    },
  ],
};
