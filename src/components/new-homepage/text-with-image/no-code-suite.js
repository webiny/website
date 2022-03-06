import React from "react";
import styled from "react-emotion";
import { useStaticQuery, graphql } from "gatsby";

import TextWithImage from "./text-with-image";

import { Highlight, Bold } from "./text-with-image.styled";

const Background = styled("div")({
    borderBottom: "1px solid #FAF0F3",
});

const NoCodeSuite = () => {
    const image = useStaticQuery(graphql`
        query NoCodeSuiteQuery {
            file(relativePath: { eq: "new-homepage/text-with-image/no-code-suite.png" }) {
                childImageSharp {
                    fluid(maxWidth: 650, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Background>
            <TextWithImage
                image={image.file.childImageSharp.fluid}
                subtitle="No-code suite"
                title={
                    <>
                        <Highlight>Decouple</Highlight> marketing needs from engineering
                    </>
                }
                arrowLink="/docs/overview/features/nocode-suite"
                arrowTitle="Check out the docs"
            >
                You don’t want your engineers to spend time fixing headlines and moving pixels on
                the screen. With Webiny, your marketing team has the full control to create and{" "}
                <Bold>manage content, landing pages, files and forms</Bold> across multiple web
                properties.
            </TextWithImage>
        </Background>
    );
};

export default NoCodeSuite;
