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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-35527198-1',
      },
    },
    {
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        optimize: {
          id: 'GTM-NJG8KQL',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '581721448994639',
      },
    },
    {
      resolve: 'gatsby-plugin-hotjar-tracking',
      options: {
        includeInDevelopment: false,
        id: 637057,
        sv: 6,
      },
    },
  ],
};
