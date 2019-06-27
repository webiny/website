import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import lambdaLogo from "./assets/lambda-logo.svg";

const sectionStyle = css(
    {
        backgroundColor: theme.color.lightGray,
        paddingBottom: 25
    },
    mq({
        paddingTop: [50, 0],
        marginTop: [0, 50]
    })
);

const SubTitle = styled("h2")({
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.black,
    textAlign: "center",
    paddingTop: 50,
    marginTop: 25,
    marginBottom: 10
});

const SubText = styled("p")(
    {
        fontSize: theme.fontSize.h3,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.black,
        textAlign: "center",
        margin: "0 20%",
        lineHeight: "150%",
        maxWidth: 680
    },
    mq({
        margin: ["20px", "0 auto 25px auto"]
    })
);

const Grid = styled("div")(
    {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
        marginBottom: 0,
        borderRadius: 2
    },
    mq({
        flexDirection: ["column", "row"],
        marginLeft: [0, 0],
        marginRight: [0, 0],
        padding: ["0 25px", 50],
        border: ["none", "1px solid " + theme.color.darkGray]
    })
);

const Cell = styled("div")(
    {
        backgroundColor: theme.color.white,
        boxShadow: "rgba(46, 41, 51, 0.08) 2px 2px 2px, rgba(71, 63, 79, 0.08) 2px 2px 4px",
        borderRadius: 2,
        padding: "0 15px 5px 15px",
        alignItems: "center",
        boxSizing: "border-box",
        textAlign: "center",
        flexBasis: "100%",
        //borderBottom: '5px solid ' + theme.color.primaryDark,
        marginRight: 40,
        display: "flex",
        flexDirection: "row",
        "&:last-child": {
            marginRight: "0 !important"
        }
    },
    mq({
        width: ["100%", 200]
    })
);

const Number = styled("h3")({
    fontSize: 84,
    width: 100,
    lineHeight: "100px",
    marginBottom: 0,
    marginTop: 0,
    textAlign: "left",
    marginLeft: 10
});

const Text = styled("p")({
    fontSize: 24,
    width: 200,
    textAlign: "left",
    fontWeight: theme.fontWeight.semiBold,
    marginTop: 5,
    marginBottom: 0,
    ".orange": {
        color: theme.color.primaryDark
    },
    "&.smaller": {
        fontSize: 18,
        textAlign: "center",
        width: "100%",
        padding: "10px"
    }
});

const InsideServerless = styled("div")(
    {
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        boxSizing: "border-box",
        [Cell]: {
            padding: "50px 25px",
            backgroundColor: theme.color.footerBg,
            color: theme.color.white
        },
        h4: {
            fontWeight: theme.fontWeight.semiBold,
            textAlign: "center",
            textTransform: "uppercase",
            width: "100%",
            marginTop: 0
        },
        ".powered-by": {
            fontSize: 12,
            color: theme.color.white
        },
        ".aws-lambda": {
            fontSize: 16,
            color: theme.color.white,
            fontWeight: theme.fontWeight.semiBold,
            position: "relative",
            marginRight: 30,
            img: {
                position: "absolute",
                right: -30,
                bottom: 0
            }
        }
    },
    mq({
        width: ["100%", "550px"],
        margin: [0, "50px auto"],
        padding: [25, 0],
        [Cell]: {
            flexDirection: ["column", "column"]
        }
    })
);

class WhatCanYouDo extends React.Component {
    render() {
        return (
            <section {...this.props} className={sectionStyle}>
                <SubTitle>What you can do with Webiny</SubTitle>
                <SubText>
                    Because the technology powering our CMS is designed to handle all kinds of
                    challenges and uses-cases, you can use it to build much more than just websites.
                </SubText>

                <ContentContainer>
                    <Grid>
                        <Cell data-aos="fade-left" data-aos-delay="100" data-aos-offset="200">
                            <Number>1.</Number>
                            <Text>
                                Create <span className="orange">websites</span>
                            </Text>
                        </Cell>
                        <Cell data-aos="fade-left" data-aos-delay="300" data-aos-offset="200">
                            <Number>2.</Number>
                            <Text>
                                Build <br />
                                <span className="orange">APIs</span>
                            </Text>
                        </Cell>
                        <Cell data-aos="fade-left" data-aos-delay="600" data-aos-offset="200">
                            <Number>3.</Number>
                            <Text>
                                Make <span className="orange">web</span>
                                <br />
                                <span className="orange">applications</span>
                            </Text>
                        </Cell>
                        <Cell data-aos="fade-left" data-aos-delay="600" data-aos-offset="200">
                            <Number>4.</Number>
                            <Text>
                                Construct <br /> <span className="orange">microservices</span>
                            </Text>
                        </Cell>
                    </Grid>
                    <InsideServerless>
                        <Cell>
                            <h4>Inside the serverless environment</h4>
                            <div className={"powered-by"}>Powered by</div>
                            <div className={"aws-lambda"}>
                                AWS Lambda
                                <img src={lambdaLogo} height={24} />
                            </div>
                        </Cell>
                    </InsideServerless>
                    <SubText>Webiny provides you with</SubText>
                    <Grid className="smaller">
                        <Cell>
                            <Text className={"smaller"}>
                                <span className="orange">Technology</span> and{" "}
                                <span className="orange">components</span> to create web projects
                            </Text>
                        </Cell>
                        <Cell>
                            <Text className={"smaller"}>
                                Managed and scalable{" "}
                                <span className="orange">serverless platform</span> to run your code
                                on
                            </Text>
                        </Cell>
                        <Cell>
                            <Text className={"smaller"}>
                                Tools to automate <span className="orange">project creation</span>{" "}
                                and <span className="orange">deployment</span>
                            </Text>
                        </Cell>
                    </Grid>
                </ContentContainer>
            </section>
        );
    }
}

export default WhatCanYouDo;
