import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";

import heroBg from "./assets/hero-bg.svg";
import webinyLogo from "./assets/webiny-logo.svg";
import vectorIcon from "./assets/vector.svg";
import highlightIcon from "./assets/hero-highlight.svg";
import webinyGroup from "./assets/webiny-group.svg";
import arrowImg from "./assets/btn-arrow.svg";

const HeroSection = styled("section")(
    {
        backgroundImage: "url(" + heroBg + ")",
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    },
    mq({
        backgroundSize: ["cover", "cover"],
        backgroundPosition: ["top", "bottom"],
        padding: ["0px 0px 80px", "0 0 150px"],        
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
        fontWeight: 600,
        lineHeight: "34px",
        marginTop: 15,
        marginBottom: 40,
        color: theme.color.white,
        textAlign: "center",
    },
    mq({
        maxWidth: [337, 800],
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
            margin: "5px 0 0"
        }
    },
    mq({        
        marginBottom: [0, 50],
    }),
);

const getStartedButtonClass = css(
    {
        backgroundColor: `${theme.color.yellow} !important`,
        textTransform: "uppercase",
        padding: "10px 12px !important",
        height: "40px !important",
        fontWeight: "bold !important"
    },
    mq({
        width: ["90% !important", "254px !important"],
        marginBottom: ["16px !important", "0px !important"],
    }),
);

const WebinyLogoImage = styled("img")({
    marginBottom: 12,
});

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
                    backgroundRepeat: "no-repeat",
                }
            },

            "& p": {
                color: theme.color.white,
                fontWeight: theme.fontWeight.regular,
                fontSize: 14,
                lineHeight: "18px",
                margin: 0                
            }
        }
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"]
    })
);

const Hero = () => {
    return (
        <HeroSection>
            <ContentContainer className={heroContainerClass}>
                <WebinyHallMarkImage src={webinyGroup} alt={""} />
                <HeroSectionWrapper>
                    <WebinyLogoImage src={webinyLogo} alt={""} />                     
                    <Title>
                        Webiny Serverless <TitleHighlight>CMS</TitleHighlight>
                    </Title>
                    <SubTitle>Agile, flexible and scalable solution for your growing content needs.</SubTitle>
                    <HeroList>
                        <div className="hero-item">
                            <h3><span>Serverless</span> and self-hosted</h3>
                            <p>Run the apps in your own cloud on top of the serverless infrastructure.</p>
                        </div>
                        <div className="hero-item">
                            <h3><span>Quick and easy</span> deployment</h3>
                            <p>Using Webiny CLI each app takes a single command to create and configure all of its serverless services.</p>
                        </div>
                        <div className="hero-item">
                            <h3>Requires <span>zero</span> maintenance</h3>
                            <p>Serverless infrastructure means zero maintenance and you can also forget about all the scalability headaches.</p>
                        </div>
                        <div className="hero-item">
                            <h3><span>Efficient</span> infrastructure cost</h3>
                            <p>Because with serverless infrastructure you only pay for what you use, you'll have a very efficient way of controlling the cost of your infrastructure.</p>
                        </div>
                    </HeroList>                   
                    <ButtonWrapper>
                        <Button
                            className={getStartedButtonClass}
                            type="default"
                            link="https://docs.webiny.com/"
                            target="_blank"
                        >
                            Get Started Tutorial &nbsp; <img src={arrowImg} alt=""/>
                        </Button>                                                
                    </ButtonWrapper>
                </HeroSectionWrapper>                
            </ContentContainer>
        </HeroSection>
    );
}

export default Hero;
