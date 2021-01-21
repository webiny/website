import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import YTVideoComponent from "../../ui/layout/yt-video";
import Button from "../../ui/button";
import Breadcrumb from "../../../layouts/components/breadcrumb";


import heroBg from "./assets/hero-bg-with-scroll.svg";
import webinyLogo from "./assets/webiny-logo.svg";
import vectorIcon from "./assets/vector.svg";
import webinyEasyImg from "./assets/easy-webiny.svg";
import backgroundImg from "./assets/home-hero-bg.svg";
import webinyGroup from "./assets/webiny-group.svg";
import PageBuilderDemoImg from "./assets/why-webiny-video-cover.png";
import commandImg from "./assets/command.svg";

const HeroSection = styled("section")(
    {
        backgroundColor: "#F6F4F8",
        position: "relative",
        zIndex: 0,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    },
    mq({
        backgroundImage: ["url(" + heroBg + ")", "url(" + backgroundImg + ")"],
        backgroundSize: ["cover", "contain", "100%"],
        backgroundPosition: ["center", "top", "top", "top"],
        padding: ["0px 0px 50px", "0 0 450px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "top",
            paddingTop: 0,
        },

        "@media (min-width: 1600px)": {
            backgroundImage: "url(" + heroBg + ")"
        }
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
        backgroundImage: "url(" + webinyEasyImg + ")",
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
        width: "100%",
    },
    mq({
        flexDirection: ["column", "row"],
        alignItems: ["center", "flex-start"],
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
        width: ["90% !important", "150px !important"],
        marginRight: ["0px !important", "22px !important"],
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
            margin: ["0 auto", 0]
        }
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
        height: ["auto", 756],
    }),
);

const ImageWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    position: "relative",
    marginTop: 20
});

class HeroComponent extends React.Component {
    render() {
        const { handleDemoClick, breadcrumbs, ...restProps } = this.props;
        return (
            <HeroSection {...restProps}>
                <Breadcrumb breadcrumbs={breadcrumbs}/>
                <ContentContainer className={heroContainerClass}>                    
                    <WebinyHallMarkImage src={webinyGroup} alt={""} />
                    <HeroSectionWrapper>
                        <WebinyLogoImage src={webinyLogo} alt={""} />
                        <Title>
                            The Easiest Way To Adopt &nbsp;
                            <TitleHighlight>Serverless</TitleHighlight>
                        </Title>
                        <SubTitle>We help developers and organizations architect, build and deploy full-stack serverless applications and websites.</SubTitle>
                        <FeatureWrapper>
                            <img src={commandImg} alt=""/>
                        </FeatureWrapper>
                        <ButtonWrapper>
                            <Button
                                className={getStartedButtonClass}
                                type="default"
                                link="https://docs.webiny.com/"
                                target="_blank"
                            >
                                Get started
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
