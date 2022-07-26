import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";

import heroBg from "./assets/hero-bg.svg";
import demoIcon from "./assets/demo-icon.svg";
import heroTitleBg from "./assets/hero-title-bg.svg";
import freeArrowIcon from "./assets/free.svg";

const heroContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        height: ["75vh", 480],
        "@media (min-width: 1460px)": {
            height: 650,
            justifyContent: "center",
            paddingBottom: 180,
        },
    }),
);

const HeroSection = styled("section")(
    {
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
        color: theme.color.black,
        backgroundColor: "#F6F4F8",
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 0,
        backgroundImage: "url(" + heroBg + ")",
        backgroundRepeat: "no-repeat",
    },
    mq({
        padding: ["100px 20px 25px", "180px 0 25px"],
        backgroundSize: ["auto", "auto", "cover"],
        backgroundPosition: ["top", "top", "top", "center"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "center",
            paddingTop: 0,
        },
    }),
);

const TitleWrapper = styled("div")(
    {
        width: "100%",
        position: "relative",
        left: 0,
        zIndex: 0,
        backgroundImage: "url(" + heroTitleBg + ")",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
    },
    mq({
        backgroundSize: ["0", "auto"],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 768,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        marginBottom: 23,
        color: theme.color.white,
        textAlign: "center",
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const SubTitle = styled("h3")(
    {
        fontSize: 24,
        fontWeight: theme.fontWeight.regular,
        lineHeight: "34px",
        marginTop: 0,
        marginBottom: 46,
        color: theme.color.white,
        textAlign: "center",
    },
    mq({
        maxWidth: [337, 430],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const ButtonWrapper = styled("div")({
    position: "relative",
    display: "flex",
    justifyContent: "center",
});

const FreeDemoImage = styled("img")(
    {
        position: "absolute",
        top: 25,
        right: -150,
    },
    mq({
        display: ["none", "block"],
    }),
);

const ctaButton = css(
    {
        textTransform: "uppercase",
        padding: "10px 12px !important",
    },
    mq({
        width: ["230px !important"],
    }),
);

const ScheduleDemoImage = styled("img")(
    {
        position: "relative",
        marginRight: 8,
    },
    mq({
        display: ["block"],
    }),
);

class HeroComponent extends React.Component {
    render() {
        const { handleDemoClick, ...restProps } = this.props;
        return (
            <HeroSection {...restProps}>
                <ContentContainer className={heroContainerClass}>
                    <TitleWrapper>
                        <Title>Modern Development Tools to Scale Your Dev Agency Faster.</Title>
                    </TitleWrapper>
                    <SubTitle>
                        Zero Infrastructure Management. Infinite Scale. Open Source. Self Hosted.
                    </SubTitle>
                    <ButtonWrapper>
                        <FreeDemoImage src={freeArrowIcon} />
                        <Button onClick={handleDemoClick} className={ctaButton} type="secondary">
                            <ScheduleDemoImage src={demoIcon} />
                            Schedule a 1:1 Demo
                        </Button>
                    </ButtonWrapper>
                </ContentContainer>
            </HeroSection>
        );
    }
}

export default HeroComponent;
