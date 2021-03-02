import React from "react";
import styled from "react-emotion";
import { Link } from "gatsby";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import benchmarkBg from "./assets/performance-bg.png";
import arrow from "./assets/link-arrow.svg";
import gridBg from "./assets/grid.svg";

const benchmarkContainer = css(
    {
        backgroundSize: "cover",
        backgroundPosition: "0px 0px",
        backgroundRepeat: "no-repeat",
        color: theme.color.white,
        padding: 25,
        boxSizing: "border-box",
        backgroundColor: "#252233",
    },
    mq({
        flexDirection: ["column", "row"],
        width: ["100%", "100%"],
        backgroundImage: ["none", "url(" + benchmarkBg + ")"],
    }),
);

const Wrapper = styled("div")(
    {
        margin: "0 auto",
        maxWidth: 1150,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .learnLink": {
            fontWeight: theme.fontWeight.bold,
            fontSize: 18,
            lineHeight: "25px",
            letterSpacing: "0.75px",
            textDecoration: "underline",
            textTransform: "uppercase",
            color: theme.color.primaryDark,
            marginTop: 30,
            display: "block",

            "& img": {
                marginLeft: 9,
            },
        },
    },
    mq({
        flexDirection: ["column", "row"],
        padding: [0, 100],
        "& .mobileOnly": {
            display: ["block", "none"],
        },
    }),
);

const Title = styled("h2")(
    {
        fontWeight: theme.fontWeight.bold,
        lineHeight: "125%",
        margin: 0,
        textTransform: "uppercase",
        ".orange": {
            color: theme.color.primaryDark,
        },
    },
    mq({
        textAlign: ["center", "left"],
        fontSize: [48, 72],
    }),
);

const LeftSide = styled("div")(
    {
        margin: "0 auto 15px auto",
        position: "relative",
    },
    mq({
        width: ["100%", "auto"],
        textAlign: ["center", "left"],
    }),
);

const RightSide = styled("div")(
    {},
    mq({
        textAlign: ["center", "left"],
        width: ["100%", "100%"],
    }),
);

const Grid = styled("div")(
    {
        display: "flex",
        flexWrap: "wrap",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        alignItems: "center",
        "& .row": {
            flexBasis: "50%",
            justifyContent: "center",

            "& .number": {
                color: theme.color.primaryDark,
                fontSize: 100,
                fontWeight: theme.fontWeight.bold,
                display: "block",
                width: "100%",
                textAlign: "center",
            },
            "& .desc": {
                color: theme.color.white,
                fontSize: 16,
                display: "block",
                width: "60%",
                margin: "0 auto",
                textAlign: "center",
            },
        },
    },
    mq({
        width: ["100%", 600],
        height: ["100%", 500],
        backgroundImage: ["none", "url(" + gridBg + ")"],
        flexDirection: ["column", "row"],
        "& .row": {
            flexDirection: ["column", "row"],
        },
    }),
);

class Benchmark extends React.Component {
    render() {
        return (
            <ContentContainer className={benchmarkContainer}>
                <Wrapper>
                    <LeftSide>
                        <Title>
                            <span className="orange">Webiny</span> performance benchmark
                        </Title>
                        <Link className="learnLink" to="/serverless-application-framework">
                            Benchmark details <img src={arrow} alt="" />
                        </Link>
                    </LeftSide>
                    <RightSide>
                        <Grid>
                            <div className="row">
                                <span class="number">0.4s</span>
                                <span class="desc">API CALL LATENCY WRITE OPERATION</span>
                            </div>
                            <div className="row">
                                <span class="number">0.5s</span>
                                <span class="desc">API CALL LATENCY READ OPERATION</span>
                            </div>
                            <div className="row">
                                <span class="number">3.5k</span>
                                <span class="desc">REQUESTS A SECOND ON THE API</span>
                            </div>
                            <div className="row">
                                <span class="number">3.6k</span>
                                <span class="desc">REQUESTS A SECOND DELIVERING A PAGE</span>
                            </div>
                        </Grid>
                        <Link
                            className="learnLink mobileOnly"
                            to="/serverless-application-framework"
                        >
                            Benchmark details <img src={arrow} alt="" />
                        </Link>
                    </RightSide>
                </Wrapper>
            </ContentContainer>
        );
    }
}

export default Benchmark;
