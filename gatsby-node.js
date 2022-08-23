/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const blogPostTemplate = require.resolve(`./src/components/blog/blogTemplate.js`);
    const knowledgeBaseTemplate = require.resolve(
        `./src/components/knowledge-base/knowledgeBaseTemplate.js`,
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
};
