import React from "react";
import { graphql } from "gatsby";
import BaseLayout from "../layouts/base";
import Blogs from "../components/blog/blog";

export default ({ data }) => {
    const blogPosts = data.allMdx.nodes;

    return (
        <BaseLayout title="Webiny Serverless Blog">
            <Blogs data={blogPosts} />
        </BaseLayout>
    );
};

export const listBlogsQuery = graphql`
    query MyQuery {
        allMdx(limit: 1000, sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                id
                frontmatter {
                    date
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
