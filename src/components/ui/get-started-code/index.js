import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../content-container";
import Button from "../button";

import bgImage from "./assets/easy-bg.svg";
import vectorIcon from "./assets/easy-highlight.svg";
import arrowImg from "./assets/btn-white-arrow.svg";

import ClipPart from "./clipboard";

const EasyPartSection = styled("section")(
    {
        backgroundImage: "url(" + bgImage + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        backgroundPosition: "bottom",
    },
    mq({
        padding: ["60px 15px 80px", "120px 15px"],
    }),
);

const ContainerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
    }),
);

const Content = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 654,
        margin: "0 auto",

        "& p": {
            fontSize: 24,
            lineHeight: "40px",
            color: theme.color.black,
        },
    },
    mq({
        "& p": {
            textAlign: ["center", "left"],
        },
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 654,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 26,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + vectorIcon + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const SubTitle = styled("h4")({
    fontSize: 30,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.primaryDark,
    textAlign: "center",
});

const getStartedButtonClass = css(
    {
        backgroundColor: `${theme.color.purple} !important`,
        textTransform: "uppercase",
        padding: "10px 12px !important",
        height: "40px !important",
        fontWeight: "bold !important",
        color: `${theme.color.white} !important`,
        marginTop: 10,
    },
    mq({
        width: ["90% !important", "254px !important"],
        marginBottom: ["16px !important", "0px !important"],
    }),
);

const EasyPart = () => {
    return (
        <EasyPartSection>
            <ContentContainer className={ContainerClass}>
                <Content>
                    <Title>
                        <TitleHighlight>It's easy</TitleHighlight> to get started
                    </Title>
                    <p>Explore our docs for more tutorials and examples.</p>
                    <ClipPart text="npx create-webiny-project my-project" />
                    <ClipPart text="yarn webiny deploy" />
                    <SubTitle>Your project is live!</SubTitle>
                    <Button
                        className={getStartedButtonClass}
                        type="default"
                        link="/docs/webiny/introduction/"
                        target="_blank"
                    >
                        Get Started Tutorial &nbsp; <img src={arrowImg} alt="" />
                    </Button>
                </Content>
            </ContentContainer>
        </EasyPartSection>
    );
};

export default EasyPart;
