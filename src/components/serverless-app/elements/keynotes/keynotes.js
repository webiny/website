import React from "react";
import styled from "react-emotion";
import theme from "../../../utils/theme";
import { css } from "emotion";
import mq from "../../../utils/breakpoints";

import ContentContainer from "../../../ui/content-container";

import keynotesBg from "./assets/keynotes-bg.svg";

const KeynoteSection = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + keynotesBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
    },
    mq({
        padding: ["0px 0px 110px", "0"],
    }),
);

const containerClass = css(
    {
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "1200",
    },
    mq({
        width: ["100%", "100%"],
        height: ["auto", 610],
        display: ["block", "flex"],
        padding: ["100px 0px 150px", 0],
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

const KeynotesWrapper = styled("div")(
    {
        display: "grid",

        maxWidth: 910,
        position: "relative",
        margin: "0px auto",

        "& .box": {
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.color.white,
            padding: "40px 30px",
            margin: "0 auto",

            "& .box__title": {
                margin: 0,
                fontSize: theme.fontSize.lg,
                fontWeight: theme.fontWeight.bold,
                color: theme.color.black,
                textAlign: "center",

                "& span": {
                    color: theme.color.primaryDark,
                },
            },
        },
    },
    mq({
        marginBottom: [0, 0],
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
        gridGap: ["30px", "20px 20px"],

        "& .box": {
            width: ["80%", 290],
            height: ["auto", 123],
        },
    }),
);

const KeynotesComponent = ({ className, keynotes }) => (
    <KeynoteSection className={className}>
        <ContentContainer className={containerClass}>
            <HeroContentWrapper className={"hero-left"}>
                <KeynotesWrapper>
                    {keynotes.map(keynote => (
                        <div className={"box"} key={keynote.id}>
                            {keynote.renderText({ className: "box__title" })}
                        </div>
                    ))}
                </KeynotesWrapper>
            </HeroContentWrapper>
        </ContentContainer>
    </KeynoteSection>
);

export default KeynotesComponent;
