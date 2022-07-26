import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import { css, keyframes } from "emotion";
import mq from "../../utils/breakpoints";
import Button from "../../ui/button";
import ContentContainer from "../../ui/content-container";

import gitHubLogo from "./assets/github-logo.svg";

const Hero = styled("section")(
    {
        width: "100%",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        //backgroundColor: '#292929',
    },
    mq({
        padding: ["100px 20px 25px", "100px 0 25px"],
        height: ["auto", "calc(100vh - 150px)"],
        minHeight: ["auto", 750],
        maxHeight: ["auto", 768],
        marginBottom: [50, 100],
        backgroundSize: ["cover"],
        backgroundPosition: ["top", "top", "bottom"],
    }),
);

const Title = styled("h1")(
    {
        fontSize: theme.fontSize.h1,
        fontWeight: theme.fontWeight.semiBold,
        marginBottom: 40,
    },
    mq({
        textAlign: ["center", "left"],
    }),
);

const TopTitle = styled("h4")(
    {
        fontSize: 18,
        fontWeight: theme.fontWeight.semiBold,
        marginBottom: 5,
        paddingBottom: 0,
    },
    mq({
        textAlign: ["center", "left"],
    }),
);

const AppName = styled("h3")(
    {
        fontSize: 18,
        fontWeight: theme.fontWeight.light,
        marginBottom: 30,
        marginTop: 0,
        textTransform: "uppercase",
    },
    mq({
        textAlign: ["center", "left"],
    }),
);

const LeftSide = styled("div")(
    {
        a: {
            color: theme.color.white,
        },
    },
    mq({
        textAlign: ["center", "left"],
        width: ["100%", 400],
    }),
);

const float = keyframes`
0% {
  
  transform: translatey(0px);
}
50% {
  transform: translatey(-20px);
}
100% {
  transform: translatey(0px);
}
`;

const RightSide = styled("div")(
    {
        paddingTop: 50,
        ">img": {
            borderRadius: 5,
            overflow: "hidden",
            border: "1px solid #E6E6E6",
            boxShadow: "0 30px 60px -12px rgba(50,50,93,.25), 0 18px 36px -18px rgba(0,0,0,.3)",
            animation: float + " 12s ease-in-out infinite",
        },
    },
    mq({
        textAlign: ["center", "right"],
        width: ["auto", 650],
        img: {
            maxWidth: ["100%", 850],
        },
    }),
);

const container = css(
    {},
    mq({
        display: ["block", "flex"],
        justifyContent: ["center", "space-between"],
    }),
);

const GitHubLogo = styled("img")(
    {
        position: "relative",
        marginRight: 5,
    },
    mq({
        display: ["none", "block"],
    }),
);

const HeroComponent = props => {
    return (
        <Hero className={props.className} style={{ backgroundImage: "url(" + props.bg + ")" }}>
            <ContentContainer className={container}>
                <LeftSide className={"hero-left"}>
                    {props.appName && <TopTitle>WEBINY SERVERLESS APP:</TopTitle>}
                    <AppName>{props.appName}</AppName>
                    <Title>{props.title}</Title>
                    {props.children}

                    {props.github && (
                        <Button link={props.github} type="outline">
                            <GitHubLogo src={gitHubLogo} />
                            View on GitHub
                        </Button>
                    )}

                    {props.getStarted && (
                        <Button link={props.getStarted} type="outline">
                            Get Started
                        </Button>
                    )}
                </LeftSide>
                <RightSide className={"hero-right"}>{props.media}</RightSide>
            </ContentContainer>
        </Hero>
    );
};

export default HeroComponent;
