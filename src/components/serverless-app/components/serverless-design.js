import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import { css } from "emotion";
import Link from "gatsby-link";
import mq from "../../utils/breakpoints";

import rightArrow from "./assets/arrow-right-solid.svg";

const SlsDesign = styled("div")(
    {
        outline: 0,
        color: theme.color.lightGray,
        zIndex: -10,
        borderRadius: "3px",
        overflow: "hidden",
        boxSizing: "border-box",
        background: "#292929",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        flexDirection: "column",
        fontSize: 18,
    },
    mq({
        padding: ["200px 10px 50px 10px", "200px 50px 50px 50px"],
        marginBottom: [50, 100],
        marginTop: [-225, -225, -300],
        paddingTop: ["200px", "170px", "235px"],
    }),
);

const BoxList = styled("div")(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    mq({
        flexDirection: ["column", "row"],
        width: ["100%", "1200px"],
        margin: ["15px", "40px 0"],
    }),
);

const BoxWrapper = styled("div")(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    mq({
        width: ["100%", 350],
        marginBottom: [25, 0],
    }),
);

const BoxNumber = styled("div")({
    marginRight: 25,
    fontSize: 48,
});

const BoxText = styled("div")({});

const linkMore = css({
    color: theme.color.lightGray,
    display: "flex",
    flexDirection: "row",
    width: "auto",
    flexWrap: "no-wrap",
    fontSize: 16,
    img: {
        width: 14,
        height: 24,
        marginLeft: 15,
    },
});

const Box = props => (
    <BoxWrapper>
        <BoxNumber>{props.number}.</BoxNumber>
        <BoxText>{props.children}</BoxText>
    </BoxWrapper>
);

export default () => (
    <SlsDesign>
        Serverless by design
        <BoxList>
            <Box number={1}>
                USE A SINGLE COMMAND TO DEPLOY AND CONFIGURE SERVERLESS INFRASTRUCTURE
            </Box>
            <Box number={2}>FORGET ABOUT MAINTENANCE AND SCALABILITY HEADACHES</Box>
            <Box number={3}>DON'T OVERPAY YOUR CLOUD PROVIDER, PAY EXACTLY WHAT YOU'VE USED</Box>
        </BoxList>
        <Link className={linkMore} to="/why-serverless">
            Why go serverless? - Learn more <img src={rightArrow} alt="" />
        </Link>
    </SlsDesign>
);
