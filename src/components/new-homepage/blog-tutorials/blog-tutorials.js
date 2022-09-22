import React from "react";
import styled from "react-emotion";
import { useStaticQuery, graphql } from "gatsby";

import BlogCard from "../../blog/components/blog-card"
import { breakpoints } from "../../utils/breakpoints";
import { H2 } from "../product-overview/product-overview.styled";

const Background = styled.div`
    padding-bottom: 3rem;
    border-bottom: 1px solid #FAF0F3;

    > h2 {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3rem;
    }
`

const BlogGrid = styled.div`
    @media (min-width: ${breakpoints[0]}px) {
        display: flex;
        flex-direction: row;
        gap: 1fr;
    }
`

const BlogTutorials = () => {
    const { allMdx } = useStaticQuery(graphql`
        query BlogTutorialsQuery {
            allMdx(filter: {fileAbsolutePath: {regex: "/blogPosts/"}, frontmatter: {tags: {in: "build projects"}}}, limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        id
                        frontmatter {
                            author
                            date
                            description
                            slug
                            tags
                            title
                            featureImage {
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
        }
    `);

    return (
        <Background>
            <H2 align="center">Learn what you can <span>build</span> with Webiny Headless CMS!</H2>
            <BlogGrid>
                {allMdx.edges.map(({ node }) => (
                    <BlogCard key={node.id} {...node.frontmatter} />
                ))}
            </BlogGrid>
        </Background>
    );
};

export default BlogTutorials;
