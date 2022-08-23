import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";

import heroBg from "./assets/hero-bg.svg";

const Hero = styled("section")(
    {
        width: "100%",
        background: "url(" + heroBg + ") no-repeat center top",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
    },
    mq({
        padding: ["100px 20px 25px", "150px 0 25px"],
        marginBottom: [50, 100],
        backgroundSize: ["cover"],
        backgroundPosition: ["top", "bottom", "bottom"],
    }),
);

const Title = styled("h1")({
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginBottom: 25,
});

const Grid = styled("div")(
    {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        "&.first": {
            marginTop: 100,
            marginBottom: 50,
        },
    },
    mq({
        flexDirection: ["column", "row"],
        marginLeft: [0, 0],
        marginRight: [0, 0],
        padding: ["25px 25px", 0],
        "&.first": {
            margin: [0, "100px 20px"],
        },
    }),
);

const Cell = styled("div")(
    {
        boxSizing: "border-box",
        width: "100%",
        h3: {
            color: theme.color.black,
            marginTop: 45,
            marginBottom: 16,
            fontWeight: theme.fontWeight.semiBold,
            display: "flex",
            alignItems: "center",
            lineHeight: 1.25,
            fontSize: 20,

            img: {
                marginRight: 20,
                height: 32,
                "&.arrow": {
                    marginLeft: 30,
                    width: 10,
                },
            },
        },
        p: {
            color: theme.color.black,
            fontSize: 17,
            lineHeight: "29px",
            fontWeight: 400,
        },
        "ul, ol": {
            marginBottom: "1em",
            marginTop: 0,
            paddingLeft: "2em",
            color: theme.color.black,
        },
        li: {
            marginTop: 10,
            fontSize: 17,
            lineHeight: "29px",
            fontWeight: 400,
        },
        a: {
            color: theme.color.primaryDark,
            letterSpacing: 0.5,
            fontWeight: theme.fontWeight.regular,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            "&:hover": {
                textDecoration: "underline",
            },
        },
        code: {
            backgroundColor: "#fbf2e9",
            padding: "0px 3px",
        },
    },
    mq({
        margin: ["0 25px", "0 150px"],
        ".image": {
            width: ["100%", "auto"],
        },
    }),
);

const bodyStyle = css(
    {
        color: "#4A4A4A",
        marginBottom: 100,
        h2: {
            fontSize: 28,
            fontWeight: theme.fontWeight.semiBold,
            marginBottom: 40,
        },
    },
    mq({
        h2: {
            textAlign: ["center", "left"],
        },
    }),
);

export default ({ children, ...props }) => (
    <React.Fragment>
        <Hero>
            <ContentContainer>
                <Title>{props.title}</Title>
            </ContentContainer>
        </Hero>
        <ContentContainer className={bodyStyle}>
            <Grid>
                <Cell>{children}</Cell>
            </Grid>
        </ContentContainer>
    </React.Fragment>
);
