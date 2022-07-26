import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";

import TextWithImage from "./text-with-image";

import { Highlight, Bold } from "./text-with-image.styled";

const Background = styled("div")({
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FBFAFF 100%)",
    borderBottom: "1px solid #E9E6F5",
});

const MultiSiteSupport = () => {
    const image = useStaticQuery(graphql`
        query MultiSiteSupportQuery {
            file(relativePath: { eq: "new-homepage/text-with-image/multi-site-support.png" }) {
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
                isLeftImage
                image={image.file.childImageSharp.fluid}
                subtitle="Multi-site support"
                title={
                    <>
                        <Highlight>You don't need</Highlight> 10 systems to manage 10 websites
                    </>
                }
                arrowLink="/docs/overview/features/multi-tenancy"
                arrowTitle="Check out the docs"
            >
                You can use a <Bold>single Webiny instance </Bold> to manage content for{" "}
                <Bold>unlimited number of websites</Bold>. This will drastically <Bold>reduce</Bold>{" "}
                your management <Bold>overhead and cost</Bold>.
            </TextWithImage>
        </Background>
    );
};

export default MultiSiteSupport;
