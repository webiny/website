import React from "react";
import styled from "react-emotion";
import { css, keyframes } from "emotion";

import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";
import ContentContainer from "../../../ui/content-container";
import Breadcrumb from "../../../../layouts/components/breadcrumb";

import featuresFunnelImg from "./assets/feature-funnel.svg";
import webinyBg from "./assets/webiny-hallmark.svg";

const HeroSection = styled("section")(
    {
        width: "100%",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
        position: "relative",
        zIndex: 0,
        // overflowX: "hidden"
    },
    mq({
        padding: ["0px 15px 0px", "0px"],
        height: ["auto", "calc(100vh - 150px)"],
        minHeight: ["auto", 750],
        maxHeight: ["auto", 768],
        marginBottom: [0, 100],
        backgroundSize: ["cover"],
        backgroundPosition: ["top", "top", "bottom"],
    }),
);

const containerClass = css(
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

const TopTitle = styled("h4")(
    {
        margin: 0,
        padding: 0,
        fontSize: theme.fontSize["xl"],
        fontWeight: theme.fontWeight.bold,
        lineHeight: "26px",
        textAlign: "center",
        textTransform: "uppercase",
    },
    mq({}),
);

const AppName = styled("h3")(
    {
        margin: 0,
        padding: 0,
        fontSize: theme.fontSize["xl"],
        fontWeight: theme.fontWeight.regular,
        lineHeight: "26px",
        textAlign: "center",
        textTransform: "uppercase",
    },
    mq({
        marginBottom: [20],
    }),
);

const Title = styled("h1")(
    {
        margin: "0px auto",
        marginBottom: 50,
        maxWidth: 800,

        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.semiBold,
        textAlign: "center",
    },
    mq({
        width: ["100%"],
    }),
);

const HeroContentWrapper = styled("div")(
    {
        a: {
            color: theme.color.white,
        },
    },
    mq({
        width: ["100%"],
    }),
);

const float = keyframes`
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
`;

const MediaContentWrapper = styled("div")(
    {
        paddingTop: 50,
        ">img": {
            borderRadius: 5,
            overflow: "hidden",
            border: "1px solid #E6E6E6",
            animation: float + " 8s ease-in-out infinite",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.25)",
        },
    },
    mq({
        img: {
            maxWidth: ["100%", 1000],
        },
    }),
);

const HeroFeaturesWrapper = styled("div")(
    {
        display: "flex",

        justifyContent: "space-between",
        maxWidth: 900,
        position: "relative",
        margin: "0px auto",

        "& .feature-box": {
            display: "flex",
            flexDirection: "column",

            "& .feature-box__title": {
                margin: 0,
                fontSize: theme.fontSize.lg,
                fontWeight: theme.fontWeight.bold,
                color: theme.color.white,
            },
            "& .feature-box__body": {
                margin: 0,
                fontSize: theme.fontSize.base,
                fontWeight: theme.fontWeight.regular,
                color: theme.color.white,
            },
        },

        "& .features__funnel": {
            position: "absolute",
            left: "10%",
            bottom: -90,
        },
    },
    mq({
        flexDirection: ["column", "row"],
        alignItems: ["center", "flex-start"],
        marginBottom: [0, 100],

        "& .feature-box": {
            width: ["80%", 236],
            marginBottom: [40, 0],
        },

        "& .features__funnel": {
            display: ["none", "block"],
        },
    }),
);

const WebinyHallMarkImage = styled("img")(
    {
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        width: "100%",
    },
    mq({
        height: ["35%", 756],
    }),
);

const HeroComponent = ({ className, backgroundImg, appName, title, features, media }) => {
    const breadcrumbs = [{ link: "/", text: "Home" }, { text: appName }];

    return (
        <HeroSection
            className={className}
            style={{ backgroundImage: "url(" + backgroundImg + ")" }}
        >
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <ContentContainer className={containerClass}>
                <WebinyHallMarkImage src={webinyBg} alt={""} />
                <HeroContentWrapper className={"hero-left"}>
                    {appName && <TopTitle>WEBINY SERVERLESS APP:</TopTitle>}
                    <AppName>{appName}</AppName>
                    <Title>{title}</Title>
                    <HeroFeaturesWrapper>
                        {features.map(feature => (
                            <div className={"feature-box"} key={feature.id}>
                                <p className="feature-box__title">{feature.title}</p>
                                <p className="feature-box__body">{feature.body}</p>
                            </div>
                        ))}
                        <img src={featuresFunnelImg} alt="" className="features__funnel" />
                    </HeroFeaturesWrapper>
                </HeroContentWrapper>
                <MediaContentWrapper className={"hero-right"}>{media}</MediaContentWrapper>
            </ContentContainer>
        </HeroSection>
    );
};

export default HeroComponent;
