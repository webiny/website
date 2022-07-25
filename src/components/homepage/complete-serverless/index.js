import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import theme from "../../utils/theme";
import ContentContainer from "../../ui/content-container";
import Frameworks from "./framework";
import CMSSection from "./cms";
import mq from "../../utils/breakpoints";
import vectorIcon from "./assets/highlight.svg";

const CompleteServerlessSection = styled("section")({
    width: "100%",
    margin: "0 auto 50px 0",
    backgroundSize: "cover",
    color: theme.color.black,
    boxSizing: "border-box",
    position: "relative",
    backgroundColor: "#fff",
    padding: "100px 20px 25px",
});

const Title = styled("h1")({
    maxWidth: 768,
    fontSize: 48,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    textAlign: "center",
    lineHeight: "48px",
    margin: "0 auto 26px",
});

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + vectorIcon + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const SubTitle = styled("h3")(
    {
        fontSize: 28,
        fontWeight: theme.fontWeight.regular,
        lineHeight: "34px",
        marginTop: 15,
        marginBottom: 40,
        color: theme.color.black,
        textAlign: "center",
        margin: "15px auto 40px",
    },
    mq({
        maxWidth: [337, 887],
    }),
);

const contentContainerClass = css(
    {
        position: "relative",
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
    }),
);

const CompleteServerless = () => {
    return (
        <CompleteServerlessSection>
            <Title>
                A Complete &nbsp;
                <TitleHighlight>End-To-End</TitleHighlight>&nbsp; Serverless Experience
            </Title>
            <SubTitle>Explore the Webiny products</SubTitle>
            <ContentContainer className={contentContainerClass}>
                <Frameworks />
                <CMSSection />
            </ContentContainer>
        </CompleteServerlessSection>
    );
};

export default CompleteServerless;
