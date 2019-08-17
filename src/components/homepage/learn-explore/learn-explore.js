import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";

import background from "./assets/platform-bg.svg";
import imgLearn from "./assets/learn.svg";
import imgExplore from "./assets/explore.svg";
import imgCommunity from "./assets/community.svg";

const wrapperClass = css(
    {
        background: "url(" + background + ") no-repeat left top",
        backgroundSize: "cover"
    },
    mq({
        backgroundColor: ["#7B39D9", "#F7F7F7"],
        marginTop: [0, 0],
        paddingTop: [0, 120],
        paddingBottom: [0, 50]
    })
);

const SubTitle = styled("h2")(
    {
        fontSize: theme.fontSize.h2,
        fontWeight: theme.fontWeight.semiBold,
        color: theme.color.white,
        textAlign: "center",
        paddingTop: 50,
        marginBottom: 80
    },
    mq({
        marginTop: [0, 25]
    })
);

const SubText = styled("p")(
    {
        fontSize: theme.fontSize.h3,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.white,
        textAlign: "center",
        margin: "0 20%",
        lineHeight: "150%",
        maxWidth: 680
    },
    mq({
        margin: ["20px", "0 auto 75px auto"]
    })
);

const Grid = styled("div")(
    {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        "&.first": {
            marginTop: 100,
            marginBottom: 50
        }
    },
    mq({
        flexDirection: ["column", "row"],
        marginLeft: [0, 0],
        marginRight: [0, 0],
        padding: ["0 25px", 0],
        "&.first": {
            margin: [0, "100px 0px"]
        }
    })
);

const Cell = styled("div")(
    {
        boxSizing: "border-box",
        flexBasis: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.50)",
        borderRadius: 2,
        padding: 40,
        h3: {
            fontSize: 24,
            color: theme.color.black,
            marginBottom: 25,
            marginTop: 0,
            fontWeight: theme.fontWeight.semiBold,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            img: {
                marginRight: 20
            }
        },
        h4: {
            fontSize: 24,
            color: theme.color.primaryDark,
            marginTop: 0,
            textAlign: "center"
        },
        p: {
            fontSize: theme.fontSize.paragraph,
            color: theme.color.grayText,
            lineHeight: "160%",
            textAlign: "center"
        },
        img: {
            width: 350,
            margin: "0 -40px"
        },
        "&:last-child": {
            marginRight: "0 !important"
        }
    },
    mq({
        marginRight: [0, 75],
        marginBottom: [25, 0],
        minHeight: [400, 380],
        textAlign: ["center", "left"],
        ".image": {
            border: "1px solid #E6E6E6",
            boxShadow: "0 4px 8px 0 rgba(209,209,209,0.50)",
            borderRadius: 5,
            width: ["100%", "630px"]
        },
        ".image-small": {
            border: "1px solid #E6E6E6",
            boxShadow: "0 2px 4px 0 rgba(209,209,209,0.50)",
            borderRadius: 5,
            width: ["100%", "330px"]
        },
        h3: {
            justifyContent: ["center", "flex-start"]
        }
    })
);

const ctaButton = css({
    marginBottom: 25,
    "&:last-child": {
        marginBottom: 0
    }
});

class LearnExplore extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <SubTitle>Go serverless with Webiny</SubTitle>

                <ContentContainer>
                    <Grid>
                        <Cell>
                            <img src={imgLearn} />
                            <h4>Learn</h4>
                            <h3>
                                Get started with your next project in a few easy steps<br />
                                <br />
                            </h3>
                            <p>
                                The Webiny get started tutorial will guide you step by step, from
                                installing your local dev environment to deploying your website to
                                your cloud provider of choice.<br />
                                <br />
                            </p>
                            <Button
                                className={ctaButton}
                                link="https://docs.webiny.com/"
                                type="dark"
                            >
                                Get Started Tutorial
                            </Button>
                            <Button
                                className={ctaButton}
                                link="https://github.com/Webiny/webiny-js"
                                type="outlineDark"
                            >
                                Explore The Docs
                            </Button>
                        </Cell>
                        <Cell>
                            <img src={imgExplore} />
                            <h4>Explore</h4>
                            <h3>
                                Get to know Webiny, what you can build with it and some of its
                                features
                            </h3>
                            <p>
                                Webiny is a powerful tool that allows you to build more than just
                                websites. It’s packed with many features that will drastically
                                reduce development time and increase the quality of your code.
                            </p>
                            <Button className={ctaButton} link="/features" type="dark">
                                View Features
                            </Button>
                            <Button className={ctaButton} link="/why-serverless" type="outlineDark">
                                Why Serverless?
                            </Button>
                        </Cell>
                        <Cell>
                            <img src={imgCommunity} />
                            <h4>Join</h4>
                            <h3>Join our growing family of developers and share your learnings</h3>
                            <p>
                                We have a growing community of developers. The aim is to help each
                                other have the best possible time with Webiny. The core Webiny team
                                is also there and it’s the best place to share your feedback.
                            </p>
                            <Button
                                className={ctaButton}
                                link="https://community.webiny.com/"
                                type="dark"
                            >
                                Join The Community
                            </Button>
                            <Button
                                className={ctaButton}
                                link="https://github.com/webiny/webiny-js"
                                type="outlineDark"
                            >
                                View GitHub
                            </Button>
                        </Cell>
                    </Grid>
                </ContentContainer>
            </section>
        );
    }
}

export default LearnExplore;
