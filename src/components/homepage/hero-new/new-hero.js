import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import YTVideoComponent from "../../ui/layout/yt-video";
import Button from "../../ui/button";
import ClipPart from "../../ui/get-started-code/clipboard";
import vectorIcon from "./assets/vector.svg";
import backgroundImg from "./assets/home-hero-bg.svg";
import webinyGroup from "./assets/webiny-group.svg";
import PageBuilderDemoImg from "./assets/why-webiny-video-cover.png";
import arrowImg from "./assets/btn-arrow.svg";

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
        padding: ['50px 0 100px', '100px 0'],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
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

const getStartedButtonClass = css(
    {
        display: "block !important",
        backgroundColor: `${theme.color.yellow} !important`,
        textTransform: "uppercase",
        height: "40px !important",
        fontWeight: "bold !important",
    },
    mq({
        width: ["90% !important", "254px !important"],
        marginBottom: ["16px !important", "0px !important"],
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

const ContentSection = styled("div")(
    {
        display: "flex",
    },
    mq({
        width: ["auto", "100%"],
        alignItems: ["center", "stretch"],
        flexDirection: ["column", "row"],
    }),
);

const LeftPart = styled("div")(
    {
        padding: '0 20px',

        '& .action-part': {
            display: 'flex',
            alignItems: 'center',
            marginTop: 30
        }
    },
    mq({
        width: ["auto", "40%"],
        maxWidth: [600, "none"],
        marginBottom: [0, 0],

        '& .action-part': {
            justifyContent: ['center', 'flex-start']
        }
    }),
);

const RightPart = styled("div")(
    {
        '& img': {
            width: '100%',
            margin: 0
        }
    },
    mq({
        width: ["auto", "60%"],
        maxWidth: [600, "none"],
        marginBottom: [30, 0],
        padding: ['40px 20px 0', '0 20px']
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 768,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
        lineHeight: "55px",
        marginBottom: 35,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
        textAlign: ['center', 'left']
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
        fontSize: 20,
        fontWeight: 300,
        lineHeight: "34px",
        marginTop: 15,
        marginBottom: 40,
        color: theme.color.white,
        margin: '20px auto',

        '& span': {
            fontWeight: 'bold'
        }
    },
    mq({
        maxWidth: [337, 887],
        textAlign: ['center', 'left']
    }),
);

class HeroComponent extends React.Component {
    render() {
        const { handleDemoClick, breadcrumbs, ...restProps } = this.props;
        return (
            <HeroSection>
                <ContentContainer className={heroContainerClass}>
                    <WebinyHallMarkImage src={webinyGroup} alt={""} />
                    <ContentSection>
                        <LeftPart>
                            <Title>
                                Build &nbsp;
                                <TitleHighlight>Serverless</TitleHighlight>&nbsp;
                                Solutions in Minutes
                            </Title>
                            <SubTitle>
                                Create <span>GraphQL APIs, full-stack applications and  websites</span>. Deploy with single command to your AWS.
                            </SubTitle>
                            <ClipPart text="npx create-webiny-project new-project" />
                            <div className="action-part">
                                <Button
                                    className={getStartedButtonClass}
                                    type="default"
                                    link="https://docs.webiny.com/"
                                    target="_blank"
                                >
                                    Get Started Tutorial &nbsp; <img src={arrowImg} alt="" />
                                </Button>
                            </div>                            
                        </LeftPart>
                        <RightPart>
                            <ImageWrapper>                      
                                <YTVideoComponent img={PageBuilderDemoImg} id={"odotdrOOvJE"} />
                            </ImageWrapper>
                        </RightPart>
                    </ContentSection>
                </ContentContainer>
            </HeroSection>
        );
    }
}

export default HeroComponent;
