import React from "react";
import { css } from "emotion";
import styled from "react-emotion";

import theme from "../../../utils/theme";
import mq from "../../../utils/breakpoints";
import ContentContainer from "../../../ui/content-container";
// assets
import purpleCircleBg from "../../../homepage/why-serverless/assets/purple-circle-bg.svg";
import orangeCircleBg from "../../../homepage/why-serverless/assets/orange-circle-bg.svg";

const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        padding: "0px 15px",
    },
    mq({}),
);

export const Title = styled("h1")(
    {
        position: "relative",
        maxWidth: 900,
        fontSize: theme.fontSize["2xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "left",
        marginBottom: 30,
    },
    mq({
        marginLeft: [0],
        marginRight: [0],
    }),
);

export const TitleHighlight = styled("span")(props => ({
    backgroundImage: "url(" + props.bg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
}));

const containerClass = css(
    {
        flexDirection: "column",
        maxWidth: "1200",
    },
    mq({
        width: ["100%", "100%"],
        display: ["block", "flex"],
        justifyContent: ["center", "space-between"],
        padding: ["100px 0px 0px", "100px 0px 100px"],
    }),
);

const CardWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",

        position: "relative",

        "& .card--first": {
            flexDirection: "row-reverse",
        },

        "& .card--second": {},
        "& .card--third": {
            marginTop: -30,
        },

        "&::before": {
            content: "url(" + purpleCircleBg + ")",
            position: "absolute",
            width: 182,
            height: 182,
            left: "15%",
            bottom: "25%",
            zIndex: -1,
        },
        "&::after": {
            content: "url(" + orangeCircleBg + ")",
            position: "absolute",
            width: 330,
            height: 330,
            right: "10%",
            top: "20%",
            zIndex: -1,
        },
    },
    mq({
        "& .card--first": {
            marginRight: [0, 30],
            flexDirection: ["column-reverse", "row-reverse"],
        },
        "& .card--second": {
            marginBottom: [30, 0],
        },
        "& .card--third": {
            marginTop: [0, -30],
        },
        "&::before": {
            display: ["none", "block"],
        },
        "&::after": {
            display: ["none", "block"],
        },
    }),
);

const Card = styled("div")(
    {
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: theme.color.white,
        boxShadow: "2px 3px 15px rgba(100, 100, 100, 0.239216)",
        borderRadius: 6,
    },
    mq({
        width: ["90%", 540],
        height: ["auto", 220],
        flexDirection: ["column-reverse", "row"],
        marginBottom: [40, 0],
    }),
);

const Content = styled("div")(
    {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    mq({
        width: ["100%", "66%"],
        padding: ["24px", "26px 24px"],
    }),
);

const Banner = styled("div")(
    props => ({
        boxSizing: "border-box",
        backgroundColor: props.backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }),
    mq({
        width: ["100%", "34%"],
        height: [150, "100%"],

        "&.round-left": {
            borderBottomLeftRadius: [0, 6],
            borderBottomRightRadius: [0, 0],
            borderTopLeftRadius: [6, 6],
            borderTopRightRadius: [6, 0],
        },
        "&.round-right": {
            borderBottomLeftRadius: [0, 0],
            borderBottomRightRadius: [0, 6],
            borderTopLeftRadius: [6, 0],
            borderTopRightRadius: [6, 6],
        },
    }),
);

const WhyServerlessImage = styled("img")({
    width: 140,
    height: 144,
});

const Body = styled("h2")({
    fontSize: 18,
    color: theme.color.black,
    margin: 0,
});

export const FactsSection = ({ facts }) => (
    <Section>
        <ContentContainer className={containerClass}>
            <CardWrapper>
                {facts.map((fact, index) => (
                    <Card key={fact.id} className={fact.className}>
                        <Content>
                            {typeof fact.renderTitle === "function" && fact.renderTitle()}
                            <Body>{fact.body}</Body>
                        </Content>
                        <Banner
                            backgroundColor={fact.backgroundColor}
                            className={index === 0 ? "round-left" : "round-right"}
                        >
                            <WhyServerlessImage src={fact.imgSrc} alt={fact.imgAlt} />
                        </Banner>
                    </Card>
                ))}
            </CardWrapper>
        </ContentContainer>
    </Section>
);
