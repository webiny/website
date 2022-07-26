import React, { Fragment } from "react";
import { css } from "emotion";
import styled from "react-emotion";

import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";
import ContentContainer from "../../../ui/content-container";
import VideoBox from "../../../ui/layout/video-box";
import Button from "../../../ui/button";

// assets
import TitleBg from "./assets/features-rect-bg.svg";

const FeatureWrapper = styled("div")(
    {
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
                maxWidth: 388,
                fontSize: theme.fontSize.lg,
                fontWeight: theme.fontWeight.regular,
                color: theme.color.black,
                lineHeight: "26px",
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
            flexDirection: ["column-reverse", "row-reverse"],
            width: "100%",

            "& .media-content": {
                marginTop: [60, 0],
            },
        },

        marginLeft: [0, 0],
        marginRight: [0, 0],

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
        margin: ["0px auto 100px", "100px auto 40px"],
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
        padding: ["100px 0px 0px", "0px 0px 0px"],

        "&.fixed": {
            height: ["auto", 618],
        },
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
        {features.map(feature => (
            <SectionWithBg key={feature.id} background={feature.background}>
                {feature.background && <img src={feature.background} alt="" className="bg" />}
                <ContentContainer className={containerClass + " fixed"}>
                    <FeatureWrapper className={feature.imageOnLeft ? "img-left" : "img-right"}>
                        <div className={"media-content"}>
                            {feature.videoFile && <VideoBox file={feature.videoFile} />}
                            {typeof feature.renderImg === "function" && feature.renderImg()}
                        </div>
                        <div className={"text-content"}>
                            {typeof feature.renderTitle === "function" && feature.renderTitle()}
                            {typeof feature.renderBody === "function" && feature.renderBody()}

                            {feature.actionLabel && (
                                <div className={"buttonWrapper"}>
                                    <Button
                                        type={"secondary"}
                                        target="_blank"
                                        link={feature.actionLink}
                                    >
                                        {feature.actionLabel}
                                    </Button>
                                </div>
                            )}
                        </div>
                    </FeatureWrapper>
                </ContentContainer>
            </SectionWithBg>
        ))}
    </Fragment>
);

export { FeaturesSection, FeaturesSectionTitle };
