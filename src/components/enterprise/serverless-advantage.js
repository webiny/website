import React from "react";
import styled from "@emotion/styled";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "@emotion/css";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";

import firstSeperate from "./assets/seperate1.svg";
import secondSeperate from "./assets/seperate2.svg";
import thirdSeperate from "./assets/seperate3.svg";
import reduceImage from "./assets/reduce.svg";
import reinvestImage from "./assets/reinvest.svg";
import avoidImage from "./assets/avoid.svg";
import unlockImage from "./assets/unlock.svg";
import titleHightlightImage from "./assets/highlight-serverless.svg";

const wrapperClass = css(
    {
        position: "relative",
    },
    mq({
        paddingTop: [40, 0],
        paddingBottom: [40, 0],
    }),
);

const contentContainerClass = css(
    {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%"],
        paddingTop: [40, 80],
        paddingBottom: [40, 80],
        "&::before": {
            display: ["none", "block"],
            left: [0, "-10%", "-10%"],
        },
    }),
);

const ctaButton = css({
    maxWidth: 320,
});

const Feature = styled("div")(
    {
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
        "&:nth-child(5)": {
            paddingBottom: 0,
        },
    },
    mq({
        flexDirection: ["column", "row"],
        paddingBottom: [50],
        "&:nth-child(even)": {
            flexDirection: ["column", "row-reverse"],
        },
    }),
);

const FeatureImage = styled("img")(
    {
        position: "relative",
        margin: "0 auto",
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: ["80%", 350],
        paddingBottom: [24, 0],
    }),
);

const FeatureInfo = styled("div")(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: [600, "none"],
        padding: ["0px 16px", "0px 24px"],
        marginBottom: [30, 0],
    }),
);

const FeatureDescription = styled("p")(
    {
        fontSize: theme.fontSize.subText,
        fontWeight: theme.fontWeight.regular,
        lineHeight: "30px",
        color: theme.color.black,
        marginBottom: 0,
        padding: 30,
        maxWidth: 400,
        border: "2px dashed " + theme.color.primaryDark,
        borderRadius: 6,
    },
    mq({
        textAlign: ["center", "left"],
    }),
);

const SeparateImage = styled("img")(
    {
        position: "absolute",
        display: "none",
    },
    mq({
        display: ["none", "block"],
    }),
);

const FirstSeparateImage = styled(SeparateImage)({
    bottom: -27,
    left: "25%",
});

const SecondSeparateImage = styled(SeparateImage)({
    bottom: -70,
    right: "40%",
});

const ThirdSeparateImage = styled(SeparateImage)({
    bottom: -70,
    left: "25%",
});

const Wrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
        marginBottom: [60],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 807,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        margin: "60px 0px 0px",
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
        fontSize: [40, theme.fontSize["5xl"]],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + titleHightlightImage + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const ServerLessAdvantage = () => {
    return (
        <section className={wrapperClass}>
            <ContentContainer className={contentContainerClass}>
                <Wrapper>
                    <Title>
                        Serverless as a <TitleHighlight>competitive advantage</TitleHighlight>
                    </Title>
                </Wrapper>
                <Feature>
                    <FeatureImage
                        src={reduceImage}
                        alt="webiny handles the heavy-lifting for you"
                    />
                    <FeatureInfo>
                        <FeatureDescription>
                            Reduce cloud cost by 60-80% and infrastructure management cost by 60%.
                        </FeatureDescription>
                    </FeatureInfo>
                    <FirstSeparateImage src={firstSeperate} alt="first separate" />
                </Feature>
                <Feature>
                    <FeatureImage
                        src={reinvestImage}
                        alt="use tools like React, GraphQL, Nodejs, Typescript, Babel and Webpack"
                    />
                    <FeatureInfo>
                        <FeatureDescription>
                            Reinvest those savings into your company and get ahead of competitors.
                        </FeatureDescription>
                    </FeatureInfo>
                    <SecondSeparateImage src={secondSeperate} alt="second separate" />
                </Feature>
                <Feature>
                    <FeatureImage
                        src={avoidImage}
                        alt="webiny is a dynamic CMS not a static site generator"
                    />
                    <FeatureInfo>
                        <FeatureDescription>
                            Use Webiny to avoid costly serverless pitfalls. You'll tap into the full
                            benefits and savings serverless infrastructure provides.
                        </FeatureDescription>
                    </FeatureInfo>
                    <ThirdSeparateImage src={thirdSeperate} alt="third seperate" />
                </Feature>
                <Feature>
                    <FeatureImage
                        src={unlockImage}
                        alt="no need to do scaling and infrastructure management"
                    />
                    <FeatureInfo>
                        <FeatureDescription>
                            Unlock new budgets and iterate faster than your competitors.
                        </FeatureDescription>
                    </FeatureInfo>
                </Feature>
                <Button
                    link="https://site.webiny.com/forms/product-demo"
                    target="_blank"
                    type="secondary"
                    className={ctaButton}
                >
                    Talk to Us
                </Button>
            </ContentContainer>
        </section>
    );
};

export default ServerLessAdvantage;
