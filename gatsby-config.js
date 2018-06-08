module.exports = {
  siteMetadata: {
    title: 'Webiny',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['source sans pro:300,400,500,600,700'],
      },
    },
  ],
}
