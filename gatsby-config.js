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
        // {
        //     resolve: "gatsby-plugin-google-marketing-platform",
        //     options: {
        //         dataLayer: {
        //             // Preset dataLayer values
        //             gaPropertyId: "UA-35527198-1",
        //         },
        //         analytics: {
        //             id: "UA-35527198-1",
        //         },
        //         optimize: {
        //             id: "GTM-NJG8KQL",
        //             timeout: 1000,
        //             activateOn: "observer",
        //         },
        //     },
        // },
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
                        resolve: "gatsby-remark-embed-gist",
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
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (e.g. <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (e.g. for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: "language-",
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in gatsby-browser.js
                            // right after importing the prism color scheme:
                            //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false,
                            // This adds a new language definition to Prism or extend an already
                            // existing language definition. More details on this option can be
                            // found under the header "Add new language definition or extend an
                            // existing language" below.
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
                            // Customize the prompt used in shell output
                            // Values below are default
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                            // By default the HTML entities <>&'" are escaped.
                            // Add additional HTML escapes by providing a mapping
                            // of HTML entities and their escape value IE: { '}': '&#123;' }
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
                        resolve: "gatsby-remark-embed-gist",
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
                ],
            },
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "GTM-5TG2W9G",

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },

                // Specify optional GTM environment details.
                gtmAuth: "q6mZlPddNJ_r_QSuUBx2aA",
                gtmPreview: "env-1",
                dataLayerName: "dataLayer",

                // Name of the event that is triggered
                // on every Gatsby route change.
            },
        }
    ],
};
