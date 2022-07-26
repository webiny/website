import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Breadcrumb from "../../layouts/components/breadcrumb";

import heroBg from "./assets/hero-bg.svg";
import webinyBg from "./assets/webiny-bg.svg";

const HeroSection = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + heroBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    mq({
        backgroundSize: ["cover", "auto", "cover"],
        padding: ["0px 0px 110px", "0"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0,
        },
    }),
);

const heroContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", 425],
        padding: ["75px 0px 0px", "85px 0px 0px"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
    }),
);

const HeroSectionWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 768,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
        textAlign: "center",
        lineHeight: "60px",
        marginBottom: 20,
        marginTop: 40,
        padding: "0 10px",
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const WebinyHallMarkImage = styled("img")(
    {
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
    },
    mq({
        width: ["100%", "100%"],
        height: ["60vh", 856],
    }),
);

const SubTitle = styled("h3")(
    {
        fontSize: theme.fontSize["2xl"],
        fontWeight: theme.fontWeight.regular,
        lineHeight: "34px",
        marginTop: 0,
        marginBottom: 26,
        color: theme.color.white,
        textAlign: "center",
        padding: "0 15px",
    },
    mq({
        maxWidth: [600, 880],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const breadcrumbs = [{ link: "/", text: "Home" }, { text: "Partners" }];

const HeroComponent = props => {
    return (
        <HeroSection {...props}>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <ContentContainer className={heroContainerClass}>
                <WebinyHallMarkImage src={webinyBg} alt={""} />
                <HeroSectionWrapper>
                    <Title>Webiny Partners</Title>
                    <SubTitle>
                        Meet the great companies that are pushing the boundaries of serverless
                        solutions using Webiny. If you are interested in accelerating your projects
                        - they are the experts we trust and recommend!
                    </SubTitle>
                </HeroSectionWrapper>
            </ContentContainer>
        </HeroSection>
    );
};

export default HeroComponent;
