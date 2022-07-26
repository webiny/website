import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { css } from "@emotion/css";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Logo from "./assets/framework-logo.svg";
import vectorIcon from "./assets/framework-highlight.svg";
import arrow from "./assets/arrow-framework.svg";

const heroContainerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        padding: ["45px 0px 75px", "55px 0px 85px"],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 500,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        lineHeight: "60px",
    },
    mq({
        margin: ["0 auto 16px", "0 0 16px"],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + vectorIcon + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const FrameworkContent = styled("div")(
    {
        display: "flex",
        alignItems: "center",
        padding: 57,
        background: "#F9F5FF",
        borderRadius: 10,

        "& p.powered": {
            fontSize: 18,
            fontWeight: theme.fontWeight.bold,
            color: theme.color.black,
            lineHeight: "23px",
            margin: 0,
            textTransform: "uppercase",
        },

        "& p.description": {
            fontSize: 24,
            fontWeight: theme.fontWeight.regular,
            color: "#454545",
            lineHeight: "40px",
            margin: "0 0 26px",
            maxWidth: 660,
        },

        "& a": {
            fontWeight: theme.fontWeight.bold,
            fontSize: 18,
            lineHeight: "25px",
            letterSpacing: "0.75px",
            textDecoration: "underline",
            textTransform: "uppercase",
            color: theme.color.primaryDark,

            "& img": {
                marginLeft: 9,
            },
        },
    },
    mq({
        flexDirection: ["column", "row"],
        textAlign: ["center", "left"],

        "& img.logo": {
            marginRight: [0, 73],
        },
    }),
);

const Framework = () => {
    return (
        <section>
            <ContentContainer className={heroContainerClass}>
                <FrameworkContent>
                    <img src={Logo} alt="Logo" className="logo" />
                    <div>
                        <p className="powered">powered by</p>
                        <Title>
                            Webiny Serverless Application <TitleHighlight>Framework</TitleHighlight>
                        </Title>
                        <p className="description">
                            Everything you need to architect, build and deploy serverless
                            applications.
                        </p>
                        <Link to="/serverless-application-framework">
                            learn more <img src={arrow} alt="" />
                        </Link>
                    </div>
                </FrameworkContent>
            </ContentContainer>
        </section>
    );
};

export default Framework;
