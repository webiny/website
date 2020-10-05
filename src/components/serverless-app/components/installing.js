import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";

const Installing = styled("div")({
    outline: 0,
    fontSize: 32,
    fontWeight: theme.fontWeight.regular,
    marginBottom: 10,
    marginRight: 25,
    marginLeft: 25,
    marginTop: 0,
    padding: "50px",
    borderRadius: "3px",
    overflow: "hidden",
    display: "block",
    boxSizing: "border-box",
    background: "#fff",
    boxShadow: "0 10px 20px rgba(91,107,174,.15)",
    borderBottom: "2px solid #FA5723",
    width: "100%",
    borderTop: "1px solid #fafafa",
    borderLeft: "1px solid #fafafa",
    borderRight: "1px solid #fafafa",
    display: "flex",
    alignItems: "center",
    "&:last-child": {
        marginRight: 0,
    },
    "&:first-child": {
        marginLeftw: 0,
    },
});

export default props => <Installing>{props.children}</Installing>;
