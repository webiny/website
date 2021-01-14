import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import { trackBookADemo } from "../ui/functions";

import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";

import goServerlessBg from "./assets/bgwaves.svg";
import getStartedImg from "./assets/next-project.svg";
import talkToUsImg from "./assets/webiny-talk.svg";

const wrapperClass = css(
    {
        backgroundImage: "url(" + goServerlessBg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    mq({
        padding: ["0 15px 25px 15px", "75px 0 25px 0"],
    }),
);

const contentContainerClass = css(
    {
        display: "flex",
        maxWidth: 1200,
        boxSizing: "border-box",
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", "auto"],
        padding: ["120px 40px", "16 0px 80px"],
        flexDirection: ["column", "row"],
        justifyContent: ["center", "space-evenly"],
        alignItems: ["center", "flex-start"],
    }),
);

const ReasonBox = styled("div")(
    props => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.color.white,
        width: 350,
        height: 240,
        borderRadius: 8,
        padding: 24,
        borderTop: `6px solid ${props.color}`,

        "& img": {
            marginBottom: 20,
            height: 88,
        },

        "& .text": {
            fontSize: 22,
            textAlign: "center",
            marginBottom: 24,
        },
    }),
    mq({
        marginBottom: [40, 0],
        marginRight: [0, 30],
        "&:last-child": {
            marginRight: [0],
        },
    }),
);

const ctaButton = css(
    {
        boxSizing: "content-box",
        textTransform: "uppercase",
        padding: "12px 16px !important",
        zIndex: 1,
        fontSize: 14,
    },
    mq({
        width: ["217px !important"],
    }),
);

const GoServerless = () => {
    return (
        <section className={wrapperClass}>
            <ContentContainer className={contentContainerClass}>
                <ReasonBox color={theme.color.dark}>
                    <img src={getStartedImg} alt="get started with tutorial" />
                    <p className="text">
                        Get started with your next project in a few easy steps
                    </p>
                    <Button
                        link={"https://docs.webiny.com"}
                        target={"_blank"}
                        type={"dark"}
                        className={ctaButton}
                    >
                        Get started tutorial
                    </Button>
                </ReasonBox>                
                <ReasonBox color={theme.color.secondaryDark}>
                    <img src={talkToUsImg} alt="talk to us" />
                    <p className="text">Want to talk to us about your next project</p>
                    <div
                        onClick={() => {
                            trackBookADemo({ placement: "3-boxes-cta" });
                        }}
                    >
                        <Button
                            link={"https://calendly.com/webiny/30min"}
                            target={"_blank"}
                            type={"secondary"}
                            className={ctaButton}
                        >
                            Book a call
                        </Button>
                    </div>
                </ReasonBox>
            </ContentContainer>
        </section>
    );
}

export default GoServerless;
