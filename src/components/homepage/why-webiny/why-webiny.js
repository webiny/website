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
        ul: {
            listStyle: "none",
            fontSize: 26,
            lineHeight: "64px",
            span: {
                fontSize: "38",
                display: "inline-block",
                marginRight: 10,
            },
            a: {
                color: theme.color.white,
                ":hover": {
                    textDecoration: "none",
                },
            },
        },
    },
    mq({
        padding: [0, 100],
    }),
);

const Title = styled("h2")(
    {
        fontWeight: theme.fontWeight.bold,
        lineHeight: "125%",
        margin: "25px 0 50px 0",
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

class Benchmark extends React.Component {
    render() {
        return (
            <ContentContainer className={benchmarkContainer}>
                <Wrapper>
                    <Title>
                        Why <span className="orange">Webiny</span>?
                    </Title>
                    <ul>
                        <li>
                            <span>01.</span> Developer experience is the cornerstone of our product.
                            (
                            <a
                                href="https://docs.webiny.com/docs/webiny/introduction/#our-philosophy"
                                target="_blank"
                            >
                                our philosophy
                            </a>
                            )
                        </li>
                        <li>
                            <span>02.</span> Scale, performance and reliability is what you can
                            expect. (
                            <a
                                href="https://docs.webiny.com/docs/webiny-overview/performance-benchmark/introduction"
                                target="_blank"
                            >
                                benchmark
                            </a>
                            )
                        </li>
                        <li>
                            <span>03.</span> Continuously challenged and improved by our welcoming
                            community. (
                            <a href="/slack" target="_blank">
                                slack
                            </a>
                            )
                        </li>
                        <li>
                            <span>04.</span> Self-hosted & open-source, your data and privacy are
                            yours to control. (
                            <a
                                href="https://docs.webiny.com/docs/webiny-overview/security#data"
                                target="/_blank"
                            >
                                data security
                            </a>
                            )
                        </li>
                        <li>
                            <span>05.</span> Cut your infrastructure costs up to 80% by switching to
                            serverless. (
                            <a href="/why-webiny" target="_blank">
                                serverless benefits
                            </a>
                            )
                        </li>
                    </ul>
                </Wrapper>
            </ContentContainer>
        );
    }
}

export default Benchmark;
