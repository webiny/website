import ContentContainer from "../../ui/content-container";
import KammerAliceBritt from "./kammer-alice-britt";
import OevCaseStudy from "./oev-case-study";
import React from "react";
import Slider from "react-slick";
import caseBg from "./assets/case-bg.svg";
import { css } from "emotion";
import highLightImg from "./assets/case-highlight.svg";
import mq from "../../utils/breakpoints";
import styled from "react-emotion";
import theme from "../../utils/theme";

const containerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
    }),
);

const Section = styled("section")(
    {
        backgroundImage: "url(" + caseBg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        backgroundPosition: "bottom",
    },
    mq({
        padding: [15, "15px 15px 100px 15px"],
    }),
);

const Wrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", "100%"],
        alignItems: ["center"],
        marginBottom: [35],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 768,
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
    backgroundImage: "url(" + highLightImg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const caseStudySlide = css({
    ".slick-dots": {
        "li button:before": {
            fontSize: 30,
        },
    },
});

const CaseStudy = () => {
    return (
        <Section>
            <ContentContainer className={containerClass}>
                <Wrapper>
                    <Title>
                        Case <TitleHighlight>Study</TitleHighlight>
                    </Title>
                </Wrapper>
                <Slider
                    slidesToShow={1}
                    centerMode={true}
                    centerPadding={0}
                    slidesToScroll={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    dots={true}
                    arrows={false}
                    className={caseStudySlide}
                    responsive={[
                        {
                            breakpoint: 1024,
                        },
                        {
                            breakpoint: 600,
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                dots: true,
                            },
                        },
                    ]}
                >
                    <OevCaseStudy />
                    <KammerAliceBritt />
                </Slider>
            </ContentContainer>
        </Section>
    );
};

export default CaseStudy;
