import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import { trackBookADemo } from "../../../ui/functions";
import Breadcrumb from "../../../../layouts/components/breadcrumb";

import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";
import ContentContainer from "../../../ui/content-container";
import Button from "../../../ui/button";
// assets
import webinyBg from "./assets/webiny-hallmark.svg";

const HeroSection = styled("section")(
    {
        width: "100%",
        boxSizing: "border-box",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        //.padding: "0px 15px",
        height: "100%",
    },
    mq({
        minHeight: ["auto", 425],
    }),
);

const heroContainerClass = css(
    {
        flexDirection: "column",
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        display: ["block", "flex"],
        justifyContent: ["center", "space-between"],
        padding: ["100px 0px 25px", "100px 0px 25px"],
    }),
);

const Title = styled("h1")(
    {
        margin: "0px 0px 26px",
        maxWidth: 768,

        color: theme.color.white,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.semiBold,
        textAlign: "center",
    },
    mq({
        width: ["100%"],
    }),
);

const SubTitle = styled("h3")({
    maxWidth: 884,
    width: "100%",
    margin: "0px 0px 24px",

    textAlign: "center",
    color: theme.color.white,
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.regular,
    lineHeight: "34px",
});

const HeroContentWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    mq({
        width: ["100%"],
    }),
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
            minWidth: 150,
        },
        "& .button--yellow-bg": {
            backgroundColor: theme.color.yellow,
        },
    },
    mq({
        flexDirection: ["column", "row"],
        alignItems: ["center", "flex-start"],
        marginBottom: [0, 100],

        "& .button": {
            width: ["80%", "auto"],
        },
        "& .button:last-child": {
            marginLeft: [0, 24],
            marginTop: [24, 0],
        },
    }),
);

const WebinyHallMarkImage = styled("img")(
    {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
    },
    mq({
        height: ["35%", 756],
    }),
);

const defaultPrimaryCTA = {
    label: "Get started",
    link: "/docs/webiny/introduction/",
};

const defaultSecondaryCTA = {
    label: "Book a demo",
    link: "/call/demo",
};

const HeroComponent = ({
    className,
    heroImage,
    title,
    subtitle,
    primaryCTA = defaultPrimaryCTA,
    secondaryCTA = defaultSecondaryCTA,
}) => {
    const breadcrumbs = [{ link: "/", text: "Home" }, { text: "Solution: " + title }];
    return (
        <HeroSection className={className} style={{ backgroundImage: "url(" + heroImage + ")" }}>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <ContentContainer className={heroContainerClass}>
                <WebinyHallMarkImage src={webinyBg} alt={""} />
                <HeroContentWrapper className={"hero-left"}>
                    <Title>{title}</Title>
                    <SubTitle>{subtitle}</SubTitle>
                    <HeroCTAWrapper>
                        {primaryCTA && (
                            <Button className={"button button--yellow-bg"} link={primaryCTA.link}>
                                {primaryCTA.label}
                            </Button>
                        )}
                        {secondaryCTA && (
                            <div
                                onClick={() => {
                                    trackBookADemo({ placement: "solutions-page-hero" });
                                }}
                            >
                                <Button className={"button"} link={secondaryCTA.link}>
                                    {secondaryCTA.label}
                                </Button>
                            </div>
                        )}
                    </HeroCTAWrapper>
                </HeroContentWrapper>
            </ContentContainer>
        </HeroSection>
    );
};

export default HeroComponent;
