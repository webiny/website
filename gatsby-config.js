module.exports = {
  siteMetadata: {
    title: 'Webiny',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        dataLayer: {
          // Preset dataLayer values
          gaPropertyId: 'UA-35527198-1',
        },
        analytics: {
          id: 'UA-35527198-1',
        },
        optimize: {
          id: 'GTM-NJG8KQL',
          timeout: 1000,
          activateOn: 'observer',
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
        ],
      },
    },
  ],
};
