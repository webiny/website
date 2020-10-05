import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import { css } from "emotion";
import Button from "../../ui/button";
import ContentContainer from "../../ui/content-container";

import purpleArrowRight from "./assets/purple-arrow-right.svg";
import serverlessTitleBg from "./assets/serverless-bg.svg";
import dottedLine from "./assets/dotted-line.svg";
import unlimitedScaleImage from "./assets/unlimited-scale.svg";
import noInfrastructureNeededImage from "./assets/no-infrastructure-needed.svg";
import fasterTimeImage from "./assets/fast.svg";
import payAsUsageImage from "./assets/pay-as-usage.svg";

const wrapperClass = css(
    {},
    mq({
        paddingTop: [40, 0],
        paddingBottom: [40, 0],
    }),
);

const contentContainerClass = css(
    {
        top: 0,
        left: 0,
        zIndex: 0,
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", 400],
        paddingTop: [0, 60],
        paddingBottom: [25, 110],
    }),
);

const TextWrapper = styled("div")({
    maxWidth: 634,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 24,
});

const Title = styled("h2")({
    fontSize: 48,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    textAlign: "center",
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 12,
    backgroundImage: "url(" + serverlessTitleBg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const ctaButton = css(
    {
        position: "relative",
        textTransform: "uppercase",
        fontWeight: theme.fontWeight.bold,
        color: "#7B39D9 !important",
        textDecoration: "underline !important",
        textDecorationColor: "#7B39D9 !important",
        "&:hover": {
            boxShadow: "none !important",
            "& img": {
                transform: "translateX(5px)",
            },
        },
    },
    mq({
        width: ["150px !important"],
    }),
);

const ArrowRight = styled("img")({
    position: "relative",
    marginLeft: 5,
    transition: "all 0.2s",
});

const ImagesWrapper = styled("div")(
    {
        position: "relative",
        width: "100%",
        display: "flex",
        "&::after": {
            content: "url(" + dottedLine + ")",
            position: "absolute",
            width: "100%",
            zIndex: -1,
        },
        "& img": {
            position: "relative",
        },
    },
    mq({
        overflow: ["hidden", "visible"],
        flexDirection: ["column", "row"],
        justifyContent: ["flex-start", "space-evenly"],
        alignItems: ["center", "flex-start"],
        "&::after": {
            transform: ["rotate(90deg)", "none"],
            top: ["0%", "20%"],
            left: ["-10%"],
        },
        "& img": {
            width: [200, "auto"],
            height: [200, "auto"],
            paddingBottom: [40, 0],
        },
        "& img:nth-child(even)": {
            paddingTop: [40, 100],
        },
    }),
);

class WhyServerless extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer className={contentContainerClass}>
                    <TextWrapper>
                        <Title>Why serverless?</Title>
                        <Button
                            className={ctaButton}
                            link="/why-serverless"
                            type="default"
                            target="_blank"
                        >
                            Learn more
                            <ArrowRight src={purpleArrowRight} />
                        </Button>
                    </TextWrapper>
                    <ImagesWrapper>
                        <img src={unlimitedScaleImage} alt="unlimited scale out of the box" />
                        <img src={noInfrastructureNeededImage} alt="no infrastructure to manage" />
                        <img src={fasterTimeImage} alt="much faster time to market" />
                        <img src={payAsUsageImage} alt="pay base on usage" />
                    </ImagesWrapper>
                </ContentContainer>
            </section>
        );
    }
}

export default WhyServerless;
