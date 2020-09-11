import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
// utils
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";
// assets
import heroBg from "./assets/hero-bg.svg";
import webinyBg from "./assets/webiny-bg.svg";

import { REQUEST_TUTORIAL_LINK, SUBMIT_TUTORIAL_LINK } from "../featured-content/content-data";

const HeroSection = styled("section")(
    {
        width: "100%",
        boxSizing: "border-box",
        backgroundImage: "url(" + heroBg + ")",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        padding: "0px 15px",
        height: "100%"
    },
    mq({
        minHeight: ["auto", 404]
    })
);

const heroContainerClass = css(
    {
        flexDirection: "column",
        maxWidth: 1200
    },
    mq({
        width: ["100%", "100%"],
        display: ["block", "flex"],
        justifyContent: ["center", "space-between"],
        padding: ["100px 0px 40px", "125px 0px 0px"]
    })
);

const Title = styled("h1")(
    {
        margin: "0px",
        maxWidth: 768,

        color: theme.color.white,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.semiBold,
        textAlign: "center"
    },
    mq({
        width: ["100%"]
    })
);

const SubTitle = styled("h3")({
    maxWidth: 884,
    width: "100%",
    margin: "0px 0px 42px",

    textAlign: "center",
    color: theme.color.white,
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.regular,
    lineHeight: "34px"
});

const HeroContentWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    mq({
        width: ["100%"]
    })
);

const HeroCTAWrapper = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: 900,
        position: "relative",
        margin: "0px auto",

        "& .button": {
            minWidth: 150
        },
        "& .button--yellow-bg": {
            backgroundColor: theme.color.yellow
        }
    },
    mq({
        flexDirection: ["column", "row"],
        alignItems: ["center", "flex-start"],
        marginBottom: [0, 100],

        "& .button": {
            width: ["80%", "auto"]
        },
        "& .button:last-child": {
            marginLeft: [0, 24],
            marginTop: [24, 0]
        }
    })
);

const WebinyHallMarkImage = styled("img")(
    {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%"
    },
    mq({
        height: ["75%", 756]
    })
);

const defaultPrimaryCTA = {
    label: "Submit a tutorial",
    link: SUBMIT_TUTORIAL_LINK
};

const defaultSecondaryCTA = {
    label: "Request a tutorial",
    link: REQUEST_TUTORIAL_LINK
};

const Hero = props => {
    const { primaryCTA = defaultPrimaryCTA, secondaryCTA = defaultSecondaryCTA } = props;
    return (
        <HeroSection {...props}>
            <ContentContainer className={heroContainerClass}>
                <WebinyHallMarkImage src={webinyBg} alt={""} />
                <HeroContentWrapper className={"hero-left"}>
                    <Title>Guides & Tutorials</Title>
                    <SubTitle>
                        A list of great resources to help you learn and master Webiny like a pro.
                    </SubTitle>
                    <HeroCTAWrapper>
                        {primaryCTA && (
                            <Button
                                className={"button button--yellow-bg"}
                                link={primaryCTA.link}
                                target={"_blank"}
                            >
                                {primaryCTA.label}
                            </Button>
                        )}
                        {secondaryCTA && (
                            <Button className={"button"} link={secondaryCTA.link} target={"_blank"}>
                                {secondaryCTA.label}
                            </Button>
                        )}
                    </HeroCTAWrapper>
                </HeroContentWrapper>
            </ContentContainer>
        </HeroSection>
    );
};

export default Hero;
