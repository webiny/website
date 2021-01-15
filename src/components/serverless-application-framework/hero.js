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
        backgroundSize: ["cover", "cover", "100%"],
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
        maxWidth: [337, 684],
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

const Hero = () => {
    return (
        <HeroSection>
            <ContentContainer className={heroContainerClass}>
                <WebinyHallMarkImage src={webinyGroup} alt={""} />
                <HeroSectionWrapper>
                    <WebinyLogoImage src={webinyLogo} alt={""} />                     
                    <Title>
                        Webiny Serverless Application &nbsp;
                        <TitleHighlight>Framework</TitleHighlight>
                    </Title>
                    <SubTitle>Everything you need to architect, build and deploy serverless applications.</SubTitle>                    
                    <ButtonWrapper>
                        <Button
                            className={getStartedButtonClass}
                            type="default"
                            link="https://docs.webiny.com/"
                            target="_blank"
                        >
                            Get Started Tutorial &nbsp; <img src={arrowImg} alt=""/>
                        </Button>
                        <p>(FREE & OPEN-SOURCE)</p>                           
                    </ButtonWrapper>
                </HeroSectionWrapper>                
            </ContentContainer>
        </HeroSection>
    );
}

export default Hero;
