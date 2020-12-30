import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";
import maskGroupBg from "./assets/mask-group.svg";

const HaveMoreQuestionSection = styled("section")(
    {
        backgroundColor: theme.color.gray100,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + maskGroupBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
    },
    mq({
        padding: ["0px 15px 110px", "0px 15px"],
    }),
);

const HaveMoreQuestionTitleWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
        "& .button": {
            width: 321,
            marginTop: 30,
        },
    },
    mq({
        alignItems: ["center"],
        marginBottom: [60],
    }),
);

const HaveMoreQuestionTitle = styled("h1")(
    {
        maxWidth: 768,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 20,
        marginTop: 0,
        paddingTop: 50,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const containerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", 460],
        paddingTop: [80],
    }),
);

const HaveMoreQuestoins = () => {
    return (
        <HaveMoreQuestionSection>
            <ContentContainer className={containerClass}>
                <HaveMoreQuestionTitleWrapper>
                    <HaveMoreQuestionTitle>
                        Have more questions you would like to talk to us about?
                    </HaveMoreQuestionTitle>
                    <Button
                        className={"button"}
                        type={"secondary"}
                        link="https://calendly.com/webiny/30min"
                        target="_blank"
                    >
                        Book a Call
                    </Button>
                </HaveMoreQuestionTitleWrapper>
            </ContentContainer>
        </HaveMoreQuestionSection>
    );
};

export default HaveMoreQuestoins;
