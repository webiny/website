import React from "react";
import styled from "react-emotion";
import ComingSoon from "../../ui/coming-soon.js";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";

const GridBlock = styled("div")(
    {
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        alignItems: "center",
    },
    mq({
        "&.img-left": {
            flexDirection: ["column", "row"],
            width: "100%",
        },
        "&.img-right": {
            flexDirection: ["column-reverse", "row"],
            width: "100%",
        },
        "&.img-top": {
            flexDirection: ["column", "column"],
            width: "100%",
        },
        marginLeft: [0, 0],
        marginRight: [0, 0],
        padding: ["0 25px", "85px 0"],
    }),
);

const CellBlock = styled("div")(
    {
        boxSizing: "border-box",
        flexBasis: "100%",
        h3: {
            fontSize: "42px",
            color: theme.color.black,
            marginTop: 0,
            fontWeight: theme.fontWeight.bold,
            display: "flex",
            alignItems: "center",
            img: {
                marginRight: 0,
            },
        },
        p: {
            fontSize: "20px",
            color: theme.color.black,
            lineHeight: "160%",
        },
        a: {
            color: theme.color.primaryDark,
            textDecoration: "none",
            "&:hover": {
                textDecoration: "underline",
            },
        },
    },
    mq({
        marginRight: [0, 15],
        textAlign: ["center", "left"],
        "&:last-child": {
            marginRight: ["0 !important", "0 !important"],
            marginLeft: ["0 !important", "15px !important"],
        },
        img: {
            //border: "1px solid #E6E6E6",
            //boxShadow: "0 4px 8px 0 rgba(209,209,209,0.50)",
            //borderRadius: 5,
            maxWidth: ["100%", "750px"],
            width: ["100%", "100%"],
        },
        h3: {
            justifyContent: ["center", "flex-start"],
        },
    }),
);

const Grid = props => (
    <GridBlock
        className={
            (props.left && "img-left") +
            " " +
            (props.right && "img-right") +
            " " +
            (props.top && "img-top") +
            " " +
            (props.className && props.className)
        }
    >
        {props.children}
    </GridBlock>
);

const Cell = props => (
    <CellBlock className={props.className ? props.className : ""}>
        {props.comingSoon && <ComingSoon />}
        {props.title && <h3>{props.title}</h3>}
        {props.children}
    </CellBlock>
);

export { Grid, Cell };
