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
`

const HeaderContainer = styled.div`
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > ${H2} {
        margin-top: unset;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 6rem;

    > * {
        flex: 1 1 0;
    }

`

export const SubTitle = styled.p`
    background: #ffEFEa;
    color: #FA5A28;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 20px 5px 13px;
    border-radius: 6px;
    letter-spacing: .1px;
    text-transform: uppercase;
`

const BlogGrid = styled.div`
    max-width: 1200px;
    margin: 0 15px;
    display: grid;
    gap: 2rem;

    @media (min-width: ${breakpoints[0]}px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 4rem;
    }
    @media (min-width: ${breakpoints[1]}px) {
        margin: 0 auto;
        grid-template-columns: repeat(3, 1fr);
    }
`

const BlogTutorials = () => {
    const { allMdx } = useStaticQuery(graphql`
        query BlogTutorialsQuery {
        allMdx(filter: {fileAbsolutePath: {regex: "/blogPosts/"}, frontmatter: {tags: {in: "build projects"}, featured: {eq: true}}}, limit: 6, sort: {fields: frontmatter___date, order: DESC}) {
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
            <HeaderContainer>
                <SubTitle>Build with Webiny</SubTitle>
                <H2 align="center">What can you <span>build</span> <br/>with Webiny Headless CMS?</H2>
            </HeaderContainer>
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
