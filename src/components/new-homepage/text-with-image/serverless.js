import React from "react";
import styled from "react-emotion";
import { useStaticQuery, graphql } from "gatsby";

import TextWithImage from "./text-with-image";

import { Highlight, Bold } from "./text-with-image.styled";

const Background = styled("div")({
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F9FFFE 100%)",
    borderBottom: "1px solid #E4F2F0",
});

const Serverless = () => {
    const image = useStaticQuery(graphql`
        query ServerlessQuery {
            file(relativePath: { eq: "new-homepage/text-with-image/serverless.png" }) {
                childImageSharp {
                    fluid(maxWidth: 650) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Background>
            <TextWithImage
                isLeftImage
                image={image.file.childImageSharp.fluid}
                subtitle="Serverless"
                title={
                    <>
                        <Highlight>Unlock</Highlight> infinite scalability
                    </>
                }
                arrowLink="/docs"
                arrowTitle="Checkout the docs"
            >
                Don’t spend weeks building and managing a fault-tolerant infrastructure. With Webiny
                <Bold>that’s included</Bold>. Webiny runs on{" "}
                <Bold>highly-scalable fault-tolerant serverless services</Bold> that scale in and
                out in seconds. You don’t need to do night shifts anymore.{" "}
                <Bold>All within your own AWS cloud!</Bold>
            </TextWithImage>
        </Background>
    );
};

export default Serverless;
