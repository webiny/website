import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";

const NewsBanner = styled("div")({
    width: "100%",
    marginBottom: 10,
    fontSize: 14,
    position: "fixed",
    display: "flex",
    top: 0,
    zIndex: 1,
    backgroundColor: "#292C33",
    paddingBottom: 5,
    paddingTop: 7,
    minHeight: 25,
    a: {
        color: theme.color.white,
        textDecoration: "underline",
        "&:hover": {
            textDecoration: "none",
        },
    },
    p: {
        color: theme.color.white,
        margin: "0 auto",
        marginBottom: 0,
    },
});

export default ({ ...props }) => <NewsBanner>{props.children}</NewsBanner>;
