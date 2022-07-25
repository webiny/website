import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { trackBookADemo } from "../../../ui/functions";

import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";
import Button from "../../../ui/button";
import ContentContainer from "../../../ui/content-container";
// assets
import sectionBg from "./assets/bgwaves.svg";
import purpleWaveBg from "./assets/cta-wave-bg.svg";

const SectionWithPurpleWave = styled("section")(
    {
        boxSizing: "border-box",
        backgroundImage: "url(" + purpleWaveBg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        backgroundPosition: "top",
    },
    mq({
        padding: ["0px 15px 15px", "0px 15px 0"],
        height: ["100%", 493],
    }),
);

const Section = styled("section")(
    {
        backgroundImage: "url(" + sectionBg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        backgroundPosition: "top",
    },
    mq({
        padding: ["0px 15px 15px", "100px 15px 0"],
    }),
);

const containerClass = css(
    {
        flexDirection: "column",
        maxWidth: "1200px",
    },
    mq({
        width: ["100%", "100%"],
        display: ["block", "flex"],
        justifyContent: ["center", "space-between"],
        padding: ["100px 0px 25px", "100px 0px"],
    }),
);

const primaryCTAContainerClass = css(
    {},
    mq({
        padding: ["100px 0px 25px", "0px"],
    }),
);

const WebinyAppsWrapper = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        position: "relative",
    },
    mq({}),
);

export const WebinyCTACard = styled("div")(
    props => ({
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.color.white,

        width: "100%",
        maxWidth: 688,
        borderRadius: 8,
        borderTop: `6px solid ${props.color}`,

        "&.card--large": {
            maxWidth: 843,
        },

        "& .app__title": {
            margin: "0px 0px 10px",
            color: theme.color.black,
            fontSize: theme.fontSize["5xl"],
            fontWeight: theme.fontWeight.bold,
            textAlign: "center",
        },
        "& .app__body": {
            fontSize: theme.fontSize.xl,
            fontWeight: theme.fontWeight.regular,
            textAlign: "center",
            margin: "0px 0px 24px",
            maxWidth: 370,
        },
        "& .app__button": {
            width: "100%",
            maxWidth: 217,
            a: {
                backgroundColor: props.color ? props.color : "inherit",
            },
        },
    }),
    mq({
        height: ["100%", 286],
        padding: ["10px 12px 24px", "40px 40px 45px"],
        margin: ["0px auto", 0],

        "&.card--large": {
            height: ["100%", 430],
            padding: ["10px 12px 24px", "65px 40px"],
            "& .app__body": {
                maxWidth: ["100%"],
                margin: "0px 0px 50px",
            },
        },
    }),
);

const defaultCTA = {
    title: "Ready to try it out?",
    body: "Get started with our step-by-step tutorial. It's only gonna take a minute.",
    color: theme.color.primaryDark,
    actionType: "dark",
    actionLabel: "quick start",
    actionLink: "/docs/",
};

const primaryCTA = {
    title: "Have a project you want to discuss? Let's talk.",
    body:
        "We understand that no project is the same. If you want to ensure that Webiny is the right platform for you, book a call with us and we'll happily answer any questions you have.",
    color: theme.color.purple,
    actionType: "dark",
    actionLabel: "book a call",
    actionLink: "https://site.webiny.com/forms/product-demo",
};

const WebinyCTAComponent = ({ className, cta = defaultCTA }) => (
    <Section className={className}>
        <ContentContainer className={containerClass}>
            <WebinyAppsWrapper>
                <WebinyCTACard color={cta.color}>
                    <h3 className="app__title">{cta.title}</h3>
                    <p className="app__body">{cta.body}</p>
                    <Button className={"app__button"} link={cta.actionLink} type={cta.actionType}>
                        {cta.actionLabel}
                    </Button>
                </WebinyCTACard>
            </WebinyAppsWrapper>
        </ContentContainer>
    </Section>
);

const WebinyPrimaryCTAComponent = ({ className, cta = primaryCTA }) => (
    <SectionWithPurpleWave className={className}>
        <ContentContainer className={containerClass + " " + primaryCTAContainerClass}>
            <WebinyAppsWrapper>
                <WebinyCTACard className={"card--large"} color={cta.color}>
                    <h3 className="app__title">{cta.title}</h3>
                    <p className="app__body">{cta.body}</p>
                    <div
                        className={"app__button"}
                        onClick={() => {
                            trackBookADemo({ placement: "solutions-page-cta-box" });
                        }}
                    >
                        <Button link={cta.actionLink} type={cta.actionType}>
                            {cta.actionLabel}
                        </Button>
                    </div>
                </WebinyCTACard>
            </WebinyAppsWrapper>
        </ContentContainer>
    </SectionWithPurpleWave>
);

export { WebinyCTAComponent, WebinyPrimaryCTAComponent };
