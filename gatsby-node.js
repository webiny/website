/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const blogPostTemplate = require.resolve(`./src/templates/blog/blogTemplate.js`);
    const knowledgeBaseTemplate = require.resolve(
        `./src/templates/knowledge-base/knowledgeBaseTemplate.js`,
    );
    const techIntegrationTemplate = require.resolve(
        `./src/templates/tech-integration/techIntegrationTemplate.js`,
    );

    const result = await graphql(`
        {
            blog: allMdx(filter: { frontmatter: { slug: { regex: "/blog/" } } }) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
            knowledgeBase: allMdx(
                filter: { frontmatter: { slug: { regex: "/knowledge-base/" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
            techIntergation: allMdx(
                filter: { frontmatter: { slug: { regex: "/tech-integration/" } } }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`);
        return;
    }

    result.data.blog.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: blogPostTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        });
    });

    result.data.knowledgeBase.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: knowledgeBaseTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        });
    });
    
    result.data.techIntergation.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: techIntegrationTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        });
    });
};
