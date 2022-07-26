import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import heroBg from "./assets/bg-game-changer-bg.svg";

const GameChangerSection = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + heroBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
    },
    mq({
        padding: ["0px 15px 110px", "0px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0,
        },
    }),
);

const heroContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", 697],
        padding: ["100px 0px", 0],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
    }),
);

const TitleWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 557,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
        textAlign: "center",
        marginTop: 0,
    },
    mq({
        marginBottom: [0, 100],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const GameChangerComponent = props => {
    return (
        <GameChangerSection {...props}>
            <ContentContainer className={heroContainerClass}>
                <TitleWrapper>
                    <Title>
                        Saving best for last!
                        <br />A complete game changer!
                    </Title>
                </TitleWrapper>
            </ContentContainer>
        </GameChangerSection>
    );
};

export default GameChangerComponent;
