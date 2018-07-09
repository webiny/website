module.exports = {
  siteMetadata: {
    title: 'Webiny',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'source sans pro:300,400,500,600,700',
          'source code pro:400,700',
          'open sans:300,400,600,700',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: true,
        autoLabel: true,
      },
    },
  ],
}
