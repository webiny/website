import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import YTVideoComponent from "../../ui/layout/yt-video";
import Button from "../../ui/button";

import heroBg from "./assets/hero-bg-with-scroll.svg";
import webinyLogo from "./assets/webiny-logo.svg";
import vectorIcon from "./assets/vector.svg";
//import webinyEasyImg from "./assets/easy-webiny.svg";
import backgroundImg from "./assets/home-hero-bg.svg";
import webinyGroup from "./assets/webiny-group.svg";
import PageBuilderDemoImg from "./assets/why-webiny-video-cover.png";
//import commandImg from "./assets/command.svg";
import arrowImg from "./assets/btn-arrow.svg";
import highlightIcon from "./assets/hero-highlight.svg";

const HeroSection = styled("section")(
    {
        backgroundColor: "#F6F4F8",
        position: "relative",
        zIndex: 0,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    },
    mq({
        backgroundImage: ["url(" + backgroundImg + ")", "url(" + backgroundImg + ")"],
        backgroundSize: ["cover", "100%", "100%"],
        backgroundPosition: ["center", "top", "bottom", "bottom"],
        padding: ["0px 0px 250px", "0 0 200px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0,
        },

        "@media (min-width: 1600px)": {
            backgroundImage: "url(" + backgroundImg + ")",
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
        height: ["100%", 560],
        padding: ["75px 0px 0px", "45px 0px 0px"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
    }),
);

const HeroSectionWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        //backgroundImage: "url(" + webinyEasyImg + ")",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
    },
    mq({
        width: ["100%", 1100],
        backgroundSize: ["0", "auto"],
        alignItems: ["center"],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 768,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 26,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + vectorIcon + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const SubTitle = styled("h3")(
    {
        fontSize: 24,
        fontWeight: 300,
        lineHeight: "34px",
        marginTop: 15,
        marginBottom: 40,
        color: theme.color.white,
        textAlign: "center",
    },
    mq({
        maxWidth: [337, 887],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const ButtonWrapper = styled("div")(
    {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",

        "& p": {
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "18px",
            color: theme.color.white,
            margin: "5px 0 0",
        },
    },
    mq({
        marginBottom: [0, 50],
        marginTop: [25, 50],
    }),
);

const getStartedButtonClass = css(
    {
        display: "block !important",
        backgroundColor: `${theme.color.yellow} !important`,
        textTransform: "uppercase",
        padding: "10px 12px !important",
        height: "40px !important",
        fontWeight: "bold !important",
    },
    mq({
        width: ["90% !important", "254px !important"],
        marginBottom: ["16px !important", "0px !important"],
    }),
);

const WebinyLogoImage = styled("img")({
    marginBottom: 12,
});

const FeatureWrapper = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        marginBottom: 44,
    },
    mq({
        flexDirection: ["column", "row"],
        "& img": {
            width: ["90%", 400],
            margin: ["0 auto", 0],
        },
    }),
);

const WebinyHallMarkImage = styled("img")(
    {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
    },
    mq({
        width: ["100%", "100%"],
        height: ["auto", 756],
    }),
);

const ImageWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    position: "relative",
    marginTop: 20,
});

const HeroList = styled("div")(
    {
        display: "grid",
        gridGap: "20px 30px",
        marginBottom: 30,

        "& .hero-item": {
            textAlign: "center",
            background: "rgba(0, 0, 0, 0.1)",
            boxShadow: "10px 0px 0px rgba(255, 255, 255, 0.1)",
            borderRadius: 2,
            padding: 20,
            maxWidth: 490,

            "& h3": {
                color: theme.color.white,
                fontWeight: theme.fontWeight.semiBold,
                fontSize: 18,
                lineHeight: "23px",
                margin: "0 0 5px",

                "& span": {
                    backgroundImage: "url(" + highlightIcon + ")",
                    backgroundPositionX: "right",
                    backgroundPositionY: "bottom",
                    backgroundRepeat: "repeat-x",
                },
            },

            "& p": {
                color: theme.color.white,
                fontWeight: theme.fontWeight.regular,
                fontSize: 14,
                lineHeight: "18px",
                margin: 0,
            },
        },
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
    }),
);

class HeroComponent extends React.Component {
    render() {
        const { handleDemoClick, breadcrumbs, ...restProps } = this.props;
        return (
            <HeroSection {...restProps}>
                <ContentContainer className={heroContainerClass}>
                    <WebinyHallMarkImage src={webinyGroup} alt={""} />
                    <HeroSectionWrapper>
                        <WebinyLogoImage src={webinyLogo} alt={""} />
                        <Title>
                            The Easiest Way To Adopt &nbsp;
                            <TitleHighlight>Serverless</TitleHighlight>
                        </Title>
                        <SubTitle>
                            We help developers and organizations architect, build and deploy
                            <br />
                            full-stack serverless applications and websites.
                        </SubTitle>
                        {/* <HeroList>
                            <div className="hero-item">
                                <h3>
                                    <span>Serverless</span>, open-source and self-hosted
                                </h3>
                                <p>
                                    Run Webiny in your own cloud on top of the serverless
                                    infrastructure. Your data stays with you.
                                </p>
                            </div>
                            <div className="hero-item">
                                <h3>
                                    <span>Save up to 80% </span>on infrastructure cost
                                </h3>
                                <p>
                                    Serverless infrastructure is charged based on consumption. In
                                    practice, you save 60% to 80% of your cloud bill when compared
                                    to using virtual machines.
                                </p>
                            </div>
                            <div className="hero-item">
                                <h3>
                                    Scales to <span>meet any demand</span>
                                </h3>
                                <p>
                                    Scale seamlessly from a single user to thousands of users.
                                    Webiny is designed to scale together with your demand and is
                                    optimized out-of-the-box.
                                </p>
                            </div>
                            <div className="hero-item">
                                <h3>
                                    <span>Save up to 60% </span>on maintenance
                                </h3>
                                <p>
                                    By running on top of the serverless infrastructure, there is
                                    less effort required to maintain your application.
                                </p>
                            </div>
                        </HeroList> */}
                        {/*
                        <FeatureWrapper>
                            <img src={commandImg} alt="" />
                        </FeatureWrapper>
                        */}
                        <ButtonWrapper>
                            <Button
                                className={getStartedButtonClass}
                                type="default"
                                link="/docs/webiny/introduction/"
                                target="_blank"
                            >
                                Get Started Tutorial &nbsp; <img src={arrowImg} alt="" />
                            </Button>
                        </ButtonWrapper>
                    </HeroSectionWrapper>

                    <ImageWrapper>
                        <YTVideoComponent img={PageBuilderDemoImg} id={"odotdrOOvJE"} />
                    </ImageWrapper>
                </ContentContainer>
            </HeroSection>
        );
    }
}

export default HeroComponent;
