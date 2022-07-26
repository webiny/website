import React from "react";
import { css } from "emotion";
import styled from "react-emotion";
import mq from "../../utils/breakpoints";
import { SubTitle, Paragraph } from "../components/typography";
import Newsletter from "../../footer/newsletter";
import theme from "../../utils/theme";

const CSBox = styled("div")({
    width: "100%",
    minHeight: 400,
    borderRadius: 2,
    backgroundColor: "white",
    border: "1px solid #E6E6E6",
    boxShadow: "0 30px 60px -12px rgba(50,50,93,.25), 0 18px 36px -18px rgba(0,0,0,.3)",
    padding: 40,
    boxSizing: "border-box",
    "--nl-text-color": "black",
    "--nl-text-align": "left",
    "--nl-bullet-filter": "brightness(0) sepia(1) hue-rotate(140deg) saturate(6)",
    ".webiny-nl-reason-list": {
        li: {
            color: "black",
            textAlign: "left",
            filter: "brightness(0) sepia(1) hue-rotate(140deg) saturate(6)",
            backgroundPosition: "left 1px center",
            paddingLeft: 25,
        },
    },
    [SubTitle]: {
        textAlign: "left",
        marginTop: 0,
        paddingTop: 0,
        marginBottom: 25,
    },
    [Newsletter]: {
        color: theme.color.black,
    },
});

export default ({ children, ...props }) => (
    <React.Fragment>
        <CSBox>
            <SubTitle>Coming Soon</SubTitle>
            <Paragraph>
                Webiny Headless CMS is currently under development. Please join our newsletter, and
                we will notify you once we released the app.
            </Paragraph>
            <Newsletter />
        </CSBox>
    </React.Fragment>
);
