module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: ['gatsby-plugin-image', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  }, 'gatsby-plugin-postcss'],
};
