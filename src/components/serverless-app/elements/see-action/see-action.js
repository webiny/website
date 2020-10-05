import React, { Fragment } from "react";
import styled from "react-emotion";
import theme from "../../../utils/theme";
import { css } from "emotion";
import mq from "../../../utils/breakpoints";

import ContentContainer from "../../../ui/content-container";
import YTVideoComponent from "../../../ui/layout/yt-video";
// assets
import DotsBg from "./assets/dots.svg";
import bg from "./assets/action-bg.svg";
import TitleBg from "./assets/action-rect-bg.svg";

const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
    },
    mq({
        padding: ["0px 15px", 0],
    }),
);

const SectionWithBg = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundImage: "url(" + DotsBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    mq({
        backgroundSize: ["cover", "auto", "100%"],
        padding: ["0px 0px 85px", "0"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0,
        },
    }),
);

const containerClass = css(
    {
        flexDirection: "column",
        maxWidth: "1200",
    },
    mq({
        display: ["block", "flex"],
        justifyContent: ["center", "space-between"],
        padding: ["0px 0px 0px", "100px 0px 0px"],
    }),
);

const MediaContentWrapper = styled("div")(
    {
        maxWidth: 880,
        margin: "0 auto",
        position: "relative",

        "& .bg": {
            position: "absolute",
            top: "-7%",
            left: "-9%",
            zIndex: -1,
        },
    },
    mq({
        paddingBottom: [0, 100],
        "& > div > img": {
            width: ["85%", "100%"],
            maxWidth: 880,
        },
        "& .bg": {
            display: ["none", "block"],
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
        marginBottom: 70,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

export const TitleHighlight = styled("span")({
    backgroundImage: "url(" + TitleBg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const SeeActionComponent = ({ className, videoPreviewImg, videoId }) => (
    <Fragment>
        <Section className={className}>
            <ContentContainer className={containerClass}>
                <Title>
                    See it in <TitleHighlight>action</TitleHighlight>
                </Title>
            </ContentContainer>
        </Section>
        <SectionWithBg className={className}>
            <MediaContentWrapper>
                <YTVideoComponent className={"video"} img={videoPreviewImg} id={videoId} />
                <img src={bg} alt="" className="bg" />
            </MediaContentWrapper>
        </SectionWithBg>
    </Fragment>
);

export default SeeActionComponent;
