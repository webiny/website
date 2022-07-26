import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";
import { trackJoinSlack } from "../../ui/functions";

const Section = styled("section")(
    {
        backgroundColor: theme.color.yetAnotherGray,
    },
    mq({
        padding: ["25px 15px", "100px 15px"],
    }),
);

const flexContainer = css(
    {
        display: "flex",
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        flexDirection: ["column", "row"],
    }),
);

const Wrapper = styled("div")(
    {
        position: "relative",
        background: theme.color.white,

        boxShadow: "2px 3px 15px rgba(100, 100, 100, 0.239216)",
        borderRadius: 8,
        boxSizing: "border-box",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",

        h4: {
            margin: "0px 0px 14px",
            fontSize: theme.fontSize["2xl"],
        },

        "& .button": {
            position: "absolute",
            bottom: -20,
        },
    },
    mq({
        width: ["100%", "50%"],
        display: ["block", "flex"],
        padding: ["50px 20px", "48px 50px 60px"],
        textAlign: ["center", "left"],
        marginBottom: [60, 0],
        "&:first-child": {
            marginRight: [0, 25],
        },
        "&:last-child": {
            marginLeft: [0, 25],
        },
        "& .button": {
            left: ["10%", "unset"],
            width: ["80%", "inherit"],
        },
        "& .button>a": {
            left: ["10%", "unset"],
            width: "100%",
        },
    }),
);

const Text = styled("p")({
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.regular,
    margin: 0,
    textAlign: "center",
});

const LearnMoreAboutWebiny = () => (
    <Section>
        <ContentContainer className={flexContainer}>
            <Wrapper>
                <h4>Ready to try it out?</h4>
                <Text>
                    Get started with our step-by-step tutorial. <br />
                    It's only gonna take a minute.
                </Text>
                <Button className={"button"} type="primary" link={"/docs/"}>
                    Quick Start
                </Button>
            </Wrapper>
            <Wrapper>
                <h4>Have a question or need help?</h4>
                <Text>
                    Join our community of developers and fellow Webiny users. Share your experiences
                    and ask questions.
                </Text>
                <div
                    className={"button"}
                    onClick={() => {
                        trackJoinSlack({ placement: "have-a-question" });
                    }}
                >
                    <Button type="dark" link={"https://www.webiny.com/slack"}>
                        Join the community
                    </Button>
                </div>
            </Wrapper>
        </ContentContainer>
    </Section>
);

export default LearnMoreAboutWebiny;
