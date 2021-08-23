import React from "react";
import { graphql } from "gatsby";
import BaseLayout from "../layouts/base";
import Blogs from "../components/blog/blog";

export default ({ data, location }) => {
    const blogPosts = data.blog.nodes;

    return (
        <BaseLayout title="Webiny Serverless Blog">
            <Blogs data={blogPosts} location={location} />
        </BaseLayout>
    );
};

export const listBlogsQuery = graphql`
    query MyQuery {
        blog: allMdx(
            limit: 1000,
            sort: { fields: frontmatter___date, order: DESC },
            filter: { frontmatter: { slug: { regex: "/blog/" } } }
        ) {
            nodes {
                id
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    author
                    description
                    slug
                    title
                    tags
                    featureImage {
                        name
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
