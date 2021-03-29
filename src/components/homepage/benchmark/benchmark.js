import React from "react";
import styled from "react-emotion";
import { Link } from "gatsby";
import Button from "../../ui/button";
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
            //fontWeight: theme.fontWeight.bold,
            //fontSize: 18,
            //lineHeight: "25px",
            //letterSpacing: "0.75px",
            //textDecoration: "underline",
            //textTransform: "uppercase",
            //color: theme.color.primaryDark,
            width: 270,
            display: "block",

            "& img": {
                marginLeft: 9,
            },
        },
    },
    mq({
        flexDirection: ["column", "row"],
        padding: [0, 100],
        "& .learnLink": {
            margin: ["25px auto", "30px 0 25px 0"],
        },
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
        fontSize: [48, 48, 72],
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
    {
        p: {
            textTransform: "uppercase",
            color: theme.color.lightGray,
            textAlign: "center",
            lineHeight: "150%",
        },
    },
    mq({
        textAlign: ["center", "left"],
        width: ["100%", "100%"],
        p: {
            margin: [15, "50px 50px 0 50px"],
        },
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
            "& .number": {
                fontSize: [72, 72, 100],
            },
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
                        <Button
                            type={"outline"}
                            className="learnLink"
                            link="/docs/webiny-overview/performance-benchmark/introduction"
                        >
                            Benchmark details <img src={arrow} alt="" />
                        </Button>
                    </LeftSide>
                    <RightSide>
                        <Grid>
                            <div className="row">
                                <span class="number">0.4s</span>
                                <span class="desc">API WRITE OPERATION RESPONSE TIME</span>
                            </div>
                            <div className="row">
                                <span class="number">0.5s</span>
                                <span class="desc">API READ OPERATION RESPONSE TIME</span>
                            </div>
                            <div className="row">
                                <span class="number">3.5k</span>
                                <span class="desc">REQUESTS PER SECOND ON THE API</span>
                            </div>
                            <div className="row">
                                <span class="number">3.6k</span>
                                <span class="desc">REQUESTS PER SECOND DELIVERING A PAGE</span>
                            </div>
                        </Grid>
                        <p>
                            The numbers are an average from a test where we serverved 3M requests in
                            14 minutes with 3M records in the database.
                        </p>
                        <Button
                            type={"outline"}
                            className="learnLink mobileOnly"
                            link="/docs/webiny-overview/performance-benchmark/introduction"
                        >
                            Benchmark details <img src={arrow} alt="" />
                        </Button>
                    </RightSide>
                </Wrapper>
            </ContentContainer>
        );
    }
}

export default Benchmark;
