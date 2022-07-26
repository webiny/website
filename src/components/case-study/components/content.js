import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import mq from "../../utils/breakpoints";
import theme from "../../utils/theme";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";

import Footer from "./footer";

import ArrowImage from "./assets/arrow.svg";
import LocationImage from "./assets/location.svg";
import QuoteImg from "./assets/quote.svg";

const containerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        display: ["block", "flex"],
    }),
);

const ContentSection = styled("section")(
    {
        padding: "50px 0",
    },
    mq({
        padding: ["50px 20px", "50px 0"],
    }),
);

export const ContentWrapper = props => {
    return (
        <React.Fragment>
            <ContentSection>
                <ContentContainer className={containerClass}>{props.children}</ContentContainer>
            </ContentSection>
            <Footer />
        </React.Fragment>
    );
};

const button = css(
    {
        margin: "30px 0 0 !important",
        border: "1px solid #00CCB0 !important",
        color: "#00CCB0 !important",
        width: "210px !important",
        "> img": {
            marginLeft: 10,
        },
    },
    mq({
        padding: [15, "14px 30px !important"],
    }),
);

const SideSection = styled("div")(
    {
        paddingLeft: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    mq({
        width: ["auto", "25%"],
        display: ["flex", "block"],
        maxWidth: [400, "25%"],
        margin: ["0 auto", 0],
    }),
);

const SideContentItemWrapper = styled("div")({
    marginBottom: 25,
    p: {
        textAlign: "justify",
    },
});

const Logo = styled("div")({
    img: {
        marginLeft: -17,
        marginBottom: -15,
        height: 200,
        width: 200,
        objectFit: "contain",
    },
});

const Title = styled("h5")({
    fontSize: "1.2rem",
    marginBottom: 15,
    textTransform: "uppercase",
});

const Type = styled("span")({
    fontSize: 10,
    textTransform: "uppercase",
});

const Arrow = styled("img")({
    height: 9,
    marginLeft: 5,
});

const Location = styled("div")({
    display: "flex",
    alignItems: "center",

    "& img": {
        marginRight: 15,
    },
});

export const SideContentWrapper = props => {
    return (
        <SideSection>
            {props.children}
            <Button
                className={button}
                type="outline"
                onClick={() => (window.location = props.downloadLink)}
            >
                Download PDF
                <Arrow alt="Submit" src={ArrowImage} />
            </Button>
        </SideSection>
    );
};

export const SideContentItem = props => {
    return (
        <SideContentItemWrapper>
            <Logo>
                <img src={props.logo} alt={props.title} />
            </Logo>
            <Type>{props.type}</Type>
            <Title>{props.title}</Title>
            {props.children}
            <Location>
                <img src={LocationImage} alt={props.location} />
                <span>{props.location}</span>
            </Location>
        </SideContentItemWrapper>
    );
};

const MainSection = styled("div")(
    {
        img: {
            width: "100%",
        },
        h3: {
            fontWeight: 700,
            marginTop: 0,
        },
    },
    mq({
        width: ["auto", "75%"],
        padding: ["20px", "0 20px"],
        borderRight: ["none", "1px solid #E2E2E2"],
    }),
);

const CaseItemSection = styled("div")(
    {
        margin: "20px 0",
        position: "relative",

        "& ol": {
            paddingLeft: 15,

            "& li": {
                paddingLeft: 10,
                marginTop: 10,
            },
        },

        "& .flex-item": {
            width: "100%",

            "& .half": {
                "&:nth-child(2)": {
                    marginTop: 15,
                },
            },
        },

        "& .underline": {
            textDecoration: "underline",
        },

        "& ul": {
            listStyle: "none",
            marginBottom: 30,

            "& li": {
                position: "relative",
                paddingLeft: 30,
                marginBottom: 10,

                "& span": {
                    position: "absolute",
                    top: 4,
                    left: 0,
                    height: 15,
                    width: 15,
                    backgroundColor: "#798099",
                    borderRadius: "50%",

                    "&::after": {
                        content: '" "',
                        position: "absolute",
                        top: 4,
                        left: 4,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#fff",
                    },
                },
            },
        },

        "& a": {
            color: theme.color.purple,
        },
    },
    mq({
        "& .flex-item": {
            display: ["block", "flex"],

            "& .half": {
                width: ["auto", "50%"],
            },
        },
    }),
);

const QuoteBox = styled("div")(
    {
        position: "relative",
        paddingTop: 10,
        marginTop: 35,
        marginBottom: 35,
        span: {
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            color: "#333",
            paddingTop: 15,
        },
        blockquote: {
            fontWeight: theme.fontWeight.bold,
            fontStyle: "italic",
        },
        img: {
            position: "absolute",
            top: 0,
            left: 0,
            width: 75,
        },
    },
    mq({
        blockquote: {
            fontSize: [22, 32],
            marginLeft: [0, 90],
        },
    }),
);

const PurpleSection = styled("div")(
    {
        borderLeft: "5px solid " + theme.color.purple,
        margin: "35px 0",
        padding: "10px 30px",
        color: theme.color.purple,
        marginBottom: 15,
        lineHeight: 1.2,
        span: {
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            color: "#333",
            paddingTop: 15,
            fontSize: 18,
        },
    },
    mq({
        fontSize: ["1.3rem", "2rem"],
    }),
);

export const MainContent = props => {
    return (
        <MainSection>
            <CaseItemSection>{props.children}</CaseItemSection>
        </MainSection>
    );
};

export const Quote = props => {
    return (
        <QuoteBox>
            <img src={QuoteImg} alt="Quote" />
            <blockquote>{props.children}</blockquote>
            <span>{props.author}</span>
        </QuoteBox>
    );
};

export const StandoutSection = props => {
    return (
        <PurpleSection>
            {props.children}
            <span>{props.author}</span>
        </PurpleSection>
    );
};
