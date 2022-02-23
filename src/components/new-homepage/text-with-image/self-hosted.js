import React from "react";
import styled from "react-emotion";
import { useStaticQuery, graphql } from "gatsby";

import TextWithImage from "./text-with-image";

import { Highlight, Bold } from "./text-with-image.styled";

const Background = styled("div")({
    borderBottom: "1px solid #FAF0F3",
});

const SelfHosted = () => {
    const image = useStaticQuery(graphql`
        query SelfHostedQuery {
            file(relativePath: { eq: "new-homepage/text-with-image/self-hosted.png" }) {
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
                subtitle="Self-hosted"
                title={
                    <>
                        <Highlight>Your data</Highlight> under your terms
                    </>
                }
                arrowLink="/docs"
                arrowTitle="Check out the docs"
            >
                Don't be a tenant in someone else's system.{" "}
                <Bold>Keep your data in your own cloud</Bold>, under your own security perimeter,
                obeying your compliance requirements. Unlock greater performance by storing and
                delivering content closer to your users.
            </TextWithImage>
        </Background>
    );
};

export default SelfHosted;
