import React from "react";
import styled from "react-emotion";
import { css } from "emotion";

import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";
import ContentContainer from "../../../ui/content-container";
import designBg from "./assets/design-rect-bg.svg";
import singleCommandImg from "./assets/use-single-command.svg";
import forgetAboutScalingImg from "./assets/forget-scalability.svg";
import costImg from "./assets/donot-overpay.svg";
import featuresFunnelImg from "./assets/feature-funnel-orange.svg";

const SERVERLESS_BY_DESIGN = [
    {
        id: 0,
        text: "use a single command to deploy and configure serverless infrastructure",
        imgSrc: singleCommandImg,
        imgAlt: "use a single command to deploy and configure serverless infrastructure",
    },
    {
        id: 1,
        text: "forget about maintenance and scalability headaches",
        imgSrc: forgetAboutScalingImg,
        imgAlt: "forget about maintenance and scalability headaches",
    },
    {
        id: 2,
        text: "don't overpay your cloud provider, pay exactly what you've used",
        imgSrc: costImg,
        imgAlt: "don't overpay your cloud provider, pay exactly what you've used",
    },
];

const ServerlessByDesignSection = styled("section")(
    {
        zIndex: -10,
        width: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
        backgroundColor: theme.color.white,
    },
    mq({
        padding: ["0px 15px 50px", "280px 15px 50px"],
        marginBottom: [50, 0],
    }),
);

const BoxList = styled("div")(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        position: "relative",

        "& .box": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",

            "& .box__img": {
                marginBottom: 15,
                width: "100%",
                height: 230,
            },
            "& .box__title": {
                color: theme.color.black,
                fontSize: theme.fontSize.xl,
                fontWeight: theme.fontWeight.bold,
                textAlign: "center",
                textTransform: "uppercase",
            },
        },

        "& .features__funnel": {
            position: "absolute",
            left: "14%",
            bottom: -80,
        },
    },
    mq({
        flexDirection: ["column", "row"],
        marginBottom: [0, 100],
        "& .box": {
            width: ["100%", 300],
            marginBottom: [60, 0],
        },
        "& .features__funnel": {
            display: ["none", "block"],
            width: ["auto", "70%", "auto"],
        },
    }),
);

const containerClass = css(
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

export const Title = styled("h1")(
    {
        position: "relative",
        maxWidth: 900,
        fontSize: theme.fontSize["4xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 90,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

export const TitleHighlight = styled("span")({
    backgroundImage: "url(" + designBg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const ButtonWrapper = styled("div")({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& .text": {
        margin: "0px 0px 4px",
        color: theme.color.black,
        fontSize: theme.fontSize.sm,
        fontWeight: theme.fontWeight.bold,
        textTransform: "uppercase",
    },
    "& .button": {
        width: "100%",
        maxWidth: 261,
        "& .icon": {
            marginLeft: 16,
        },
    },
});

export default () => (
    <ServerlessByDesignSection>
        <ContentContainer className={containerClass}>
            <Title>
                {" "}
                Serverless by <TitleHighlight>design</TitleHighlight>
            </Title>
            <BoxList>
                {SERVERLESS_BY_DESIGN.map(item => (
                    <div className="box" key={item.id}>
                        <img src={item.imgSrc} alt={item.imgAlt} className="box__img" />
                        <p className="box__title">{item.text}</p>
                    </div>
                ))}
                <img src={featuresFunnelImg} alt="" className="features__funnel" />
            </BoxList>

            <ButtonWrapper>
                <p className="text">Why go serverless?</p>
                {/*
                <Button className={"button"} type={"secondary"} link="/why-webiny">
                    Learn more
                    <img src={rightArrow} alt="" className="icon" />
                </Button>
                */}
            </ButtonWrapper>
        </ContentContainer>
    </ServerlessByDesignSection>
);
