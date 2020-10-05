import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";

// assets
import didNotFoundImg from "./assets/did-not-found-icon.svg";
import lookingForRectImg from "./assets/looking-for-rect.svg";
import { REQUEST_TUTORIAL_LINK } from "../featured-content/content-data";

const DidNotFoundSection = styled("section")(
    {
        width: "100%",
        boxSizing: "border-box",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        padding: "0px 15px",
        height: "100%",
    },
    mq({
        minHeight: ["auto", 404],
    }),
);

const containerClass = css(
    {
        display: "flex",
        maxWidth: 1200,
        padding: "100px 0px",
    },
    mq({
        width: ["100%", "100%"],
        flexDirection: ["column", "row"],
        justifyContent: ["center", "space-between"],
    }),
);

const Title = styled("h1")(
    {
        margin: "0px 0px 24px",
        maxWidth: 450,

        color: theme.color.black,
        fontSize: theme.fontSize["4xl"],
        fontWeight: theme.fontWeight.semiBold,
        textAlign: "left",
    },
    mq({
        width: ["100%"],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + lookingForRectImg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const SubTitle = styled("p")({
    maxWidth: 500,
    width: "100%",
    margin: "0px 0px 42px",

    textAlign: "left",
    color: theme.color.black,
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.regular,
    lineHeight: "26px",
});

const TextContentWrapper = styled("div")(
    {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    mq({
        width: ["100%", "50%"],
        marginBottom: [60, 0],
    }),
);

const HeroCTAWrapper = styled("div")(
    {
        display: "flex",
        width: "100%",
        maxWidth: 900,
        position: "relative",
        margin: "0px auto",

        "& .button": {
            minWidth: 150,
        },
    },
    mq({
        "& .button": {
            width: ["100%", "auto"],
        },
    }),
);

const MediaWrapper = styled("div")(
    {
        display: "flex",
        justifyContent: "center",

        "& .media": {
            width: "100%",
            maxWidth: 447,
        },
    },
    mq({
        width: ["100%", "50%"],
    }),
);

const DidNotFound = props => {
    return (
        <DidNotFoundSection {...props}>
            <ContentContainer className={containerClass}>
                <TextContentWrapper>
                    <Title>
                        Didn't find the one tutorial you were{" "}
                        <TitleHighlight> looking for? </TitleHighlight>{" "}
                    </Title>
                    <SubTitle>
                        You can submit a request for a tutorial and we'll share it with our
                        community members.
                    </SubTitle>
                    <HeroCTAWrapper>
                        <Button
                            type={"primary"}
                            className={"button"}
                            link={REQUEST_TUTORIAL_LINK}
                            target={"_blank"}
                        >
                            Request a tutorial
                        </Button>
                    </HeroCTAWrapper>
                </TextContentWrapper>
                <MediaWrapper>
                    <img src={didNotFoundImg} alt="" className="media" />
                </MediaWrapper>
            </ContentContainer>
        </DidNotFoundSection>
    );
};

export default DidNotFound;
