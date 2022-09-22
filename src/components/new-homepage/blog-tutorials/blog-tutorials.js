import React from "react";
import styled from "react-emotion";
import { useStaticQuery, graphql } from "gatsby";

import { breakpoints } from "../../utils/breakpoints";
import { H2 } from "../product-overview/product-overview.styled";
import { ButtonPrimary } from "../hero-section/hero.styled";
import BlogTile from "./blog-tile";

const Background = styled.div`
    padding-bottom: 6rem;
    border-bottom: 1px solid #FAF0F3;

    > * {
        margin-left: auto;
        margin-right: auto;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
    max-width: 422px;
    margin-bottom: 6rem;

    > * {
        flex: 1 1 0;
    }
`

const BlogGrid = styled.div`
    max-width: 1200px;

    @media (min-width: ${breakpoints[0]}px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 4rem;
    }
`

const BlogTutorials = () => {
    const { allMdx } = useStaticQuery(graphql`
        query BlogTutorialsQuery {
            allMdx(filter: {fileAbsolutePath: {regex: "/blogPosts/"}, frontmatter: {tags: {in: "build projects"}}}, limit: 6, sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        id
                        frontmatter {
                            description
                            slug
                            tech
                            project
                        }
                    }
                }
            }
        }
    `);

    return (
        <Background>
            <H2 align="center">What can you <span>build</span> <br/>with Webiny Headless CMS?</H2>
            <ButtonContainer>
                <ButtonPrimary link="/blog/?query=build%20projects" type={"primary"}>
                        See all
                </ButtonPrimary>
                <ButtonPrimary type={"outlineOrange"} link="https://github.com/webiny/write-with-webiny/tree/main/tutorials/">
                        View code
                </ButtonPrimary>

            </ButtonContainer>
            <BlogGrid>
                {allMdx.edges.map(({ node }) => (
                    <BlogTile key={node.id} {...node.frontmatter} />
                ))}
            </BlogGrid>
        </Background>
    );
};

export default BlogTutorials;
