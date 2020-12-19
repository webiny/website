import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import heroBg from "./assets/hero-bg.png";

const Hero = styled("section")(
    {
        width: "100%",
        background: "url(" + heroBg + ") no-repeat center top",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
    },
    mq({
        padding: ["100px 20px", "150px 0 25px"],
        minHeight: ["auto", "550px"],
        marginBottom: [50, 0],
        backgroundSize: ["cover"],
        backgroundPosition: ["top", "top", "center"],
    }),
);

const Title = styled("h1")({
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginBottom: 25,
});

const SubText = styled("p")(
    {
        fontSize: theme.fontSize.subText,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.white,
        textAlign: "center",
        margin: "0 20%",
        lineHeight: "150%",
        marginBottom: 50,
    },
    mq({
        margin: ["0 20px", "0 20%"],
    }),
);

const containerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"]
    }),
);

export default ({ children, ...props }) => (
    <Hero {...props}>
        <ContentContainer className={containerClass}>
            <Title>Pricing</Title>
            <SubText>
                We're committed to keeping the Webiny free and open source forever.                
            </SubText>
            <SubText>
                But we also recognise the need of certain businesses to get additional support when it comes to building enterprise-grade serverless solutions.
            </SubText>
        </ContentContainer>
    </Hero>
);
