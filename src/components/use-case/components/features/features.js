import React, { Fragment } from "react";
import { css } from "emotion";
import styled from "react-emotion";

import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";
import ContentContainer from "../../../ui/content-container";
import Button from "../../../ui/button";

// assets
import TitleBg from "./assets/features-rect-bg.svg";
import separatorUpDown from "./assets/separator-up-down.svg";
import separatorDownUp from "./assets/separator-down-up.svg";

const FeatureWrapper = styled("div")(
    {
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        alignItems: "center",

        "& .text-content": {
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            "& h3": {
                margin: "0px 0px 28px",

                fontSize: theme.fontSize["4xl"],
                color: theme.color.black,
                fontWeight: theme.fontWeight.bold,

                "& span": {
                    color: theme.color.purple,
                },
            },
            "& p": {
                width: "100%",
                maxWidth: 550,
                fontSize: theme.fontSize.lg,
                fontWeight: theme.fontWeight.regular,
                color: theme.color.black,
                lineHeight: "32px",
                marginBottom: 16,
            },
            "& .buttonWrapper": {
                width: "100%",
                marginTop: 24,
            },
        },

        "& .media-content": {
            boxSizing: "border-box",
            maxWidth: 583,

            "& img": {
                width: "100%",
                // maxWidth: 494
            },
        },

        "& .feature__separator": {
            position: "absolute",
            bottom: "-30%",
            left: "15%",
        },
    },
    mq({
        "&.img-left": {
            flexDirection: ["column", "row"],
            width: "100%",
            "& .text-content": {
                paddingLeft: [0, 60],
            },
            "& .media-content": {
                marginBottom: [60, 0],
            },
        },
        "&.img-right": {
            flexDirection: ["column", "row-reverse"],
            width: "100%",

            "& .media-content": {
                marginTop: [60, 0],
            },
        },
        height: ["auto", 360],
        marginLeft: [0, 0],
        marginRight: [0, 0],
        marginBottom: [80, 150],

        "&.item--last": {
            marginBottom: [0],
        },

        "& .text-content": {
            width: ["100%", "50%"],

            "& .buttonWrapper": {
                maxWidth: ["100%", 217],
            },
        },
        "& .media-content": {
            width: ["100%", "50%"],
            "& .img": {
                width: ["100%"],
                maxWidth: 560,
            },
        },
        "& .feature__separator": {
            display: ["none", "block"],
        },
    }),
);

const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        padding: 0,
    },
    mq({}),
);

const SectionWithBg = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        "& .bg": {
            position: "absolute",
            left: 0,
            width: "100%",
        },
    },
    mq({
        padding: ["0px 15px 110px", "0px 15px"],
        "& .bg": {
            top: ["-10%", 0],
            height: ["140%", "100%"],
        },
    }),
);

export const Title = styled("h1")(
    {
        position: "relative",
        maxWidth: 900,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
    },
    mq({
        margin: ["0px auto", "0px auto 40px"],
    }),
);

export const TitleHighlight = styled("span")({
    backgroundImage: "url(" + TitleBg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const containerClass = css(
    {
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "1200",
    },
    mq({
        width: ["100%", "100%"],
        display: ["block", "flex"],
        padding: ["100px 0px 0px", "80px 0px 0px"],
    }),
);

const FeaturesSectionTitle = () => (
    <Section>
        <ContentContainer className={containerClass}>
            <Title>
                <TitleHighlight>Features</TitleHighlight>
            </Title>
        </ContentContainer>
    </Section>
);

const FeaturesSection = ({ features }) => (
    <Fragment>
        <SectionWithBg>
            <ContentContainer className={containerClass + " fixed"}>
                {features.map(feature => (
                    <FeatureWrapper
                        key={feature.id}
                        className={`${feature.imageOnLeft ? "img-left" : "img-right"} ${
                            feature.className
                        }`}
                    >
                        <div className={"media-content"}>
                            {feature.imgSrc && <img src={feature.imgSrc} alt={feature.imgAlt} />}
                        </div>
                        <div className={"text-content"}>
                            {typeof feature.renderTitle === "function" && feature.renderTitle()}
                            {typeof feature.renderBody === "function" && feature.renderBody()}

                            {feature.actionLabel && (
                                <div className={"buttonWrapper"}>
                                    <Button type={"secondary"} link={feature.actionLink}>
                                        {feature.actionLabel}
                                    </Button>
                                </div>
                            )}
                        </div>
                        {feature.background && (
                            <img
                                src={
                                    feature.background === "UP_DOWN"
                                        ? separatorUpDown
                                        : separatorDownUp
                                }
                                alt=""
                                className="feature__separator"
                            />
                        )}
                    </FeatureWrapper>
                ))}
            </ContentContainer>
        </SectionWithBg>
    </Fragment>
);

export { FeaturesSection, FeaturesSectionTitle };
