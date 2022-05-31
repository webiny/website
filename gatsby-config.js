module.exports = {
    siteMetadata: {
        title: "Webiny",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "source sans pro:300,400,500,600,700",
                    "source code pro:400,700",
                    "open sans:300,400,600,700",
                ],
            },
        },
        {
            resolve: "gatsby-plugin-emotion",
            options: {
                sourceMap: true,
                autoLabel: true,
            },
        },
        {
            resolve: "gatsby-plugin-facebook-pixel",
            options: {
                pixelId: "581721448994639",
            },
        },
        {
            resolve: `gatsby-plugin-twitter-pixel`,
            options: {
                pixelId: "o4gd9",
            },
        },
        {
            resolve: "gatsby-plugin-hotjar-tracking",
            options: {
                includeInDevelopment: false,
                id: 637057,
                sv: 6,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/blogPosts`,
                name: "blogPosts",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/knowledgeBase`,
                name: "knowledgeBase",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/assets`,
                name: "assets",
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`],
                gatsbyRemarkPlugins: [
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
                    {
                        resolve: "@weknow/gatsby-remark-twitter",
                    },
                    {
                        resolve: `gatsby-remark-admonitions`,
                        options: {
                            tag: ":::",
                            icons: "svg",
                        },
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            offsetY: `100`,
                            className: `heading-link-anchor`,
                            isIconAfterHeader: true,
                            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                            </svg>`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: "superscript",
                                    extend: "javascript",
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "@weknow/gatsby-remark-twitter",
                    },
                    {
                        resolve: `gatsby-remark-admonitions`,
                        options: {
                            tag: ":::",
                            icons: "svg",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-5TG2W9G",
                includeInDevelopment: false,
                defaultDataLayer: { platform: "gatsby" },
                gtmAuth: "q6mZlPddNJ_r_QSuUBx2aA",
                gtmPreview: "env-1",
                dataLayerName: "dataLayer",
            },
        },
    ],
};
