import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";

export const BANNER_HEIGHT = 30;
export const BANNER_HEIGHT_MOBILE = 40;

const Banner = styled("div")({
    position: "fixed",
    top: 0,
    zIndex: 101,
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",

    width: "100%",
    minHeight: BANNER_HEIGHT,
    padding: "6px 15px",
    background: "linear-gradient(358.81deg, #FFF3B8 0%, #FFD43C 100%)",
    textAlign: "center",
    a: {
        fontSize: 11,
        lineHeight: "14px",
        color: theme.color.superDarkPurple,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },

    "& .tag": {
        boxSizing: "border-box",
        width: "auto",
        minWidth: 32,
        height: 14,
        borderRadius: 7,
        padding: "1px 7px",
        marginRight: 16,
        backgroundColor: theme.color.purple,
        color: theme.color.white,
        fontSize: 9,
        fontWeight: theme.fontWeight.bold,
        textTransform: "uppercase",
    },
});

export default props => (
    <Banner>
        <span className="tag">{props.tag}</span>
        <a href={props.link} target="_blank">
            {props.title}
        </a>
    </Banner>
);
