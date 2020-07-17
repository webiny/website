import React  from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import circleBg from "./assets/circles.svg";
import dotsBg from "./assets/dots.svg";
import Button from "../../ui/button";

const SectionWithBg = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundImage: "url(" + dotsBg + ")",
        backgroundRepeat: "no-repeat"
    },
    mq({
        backgroundSize: ["cover", "auto", "100%"],
        backgroundPosition: ["center", "top", "top", "center"],
        padding: ["0px 0px 0x", "0px 0px 110px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0
        }
    })
);

const overviewContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 1200,
        position: "relative"
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", 562],
        // padding: ["75px 0px 0px", "85px 0px 0px"]
    })
);

const OverviewSectionWrapper = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        // flexDirection: "column"
    },
    mq({
        width: ["100%"],
        alignItems: ["center"]
    })
);

const Title = styled("h1")(
    {
        position: "relative",
        maxWidth: 900,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        marginBottom: 0,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"]
    })
);

const Caption = styled("h3")(
    {
        fontSize: theme.fontSize.lg,
        fontWeight: theme.fontWeight.regular,
        marginTop: 0,
        marginBottom: 30,
        color: theme.color.dark,
        textAlign: "center"
    },
    mq({
        maxWidth: [337, 670],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"]
    })
);

const ImageWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    position: "relative"
});

const videoPreviewClass = css({
    position: "absolute",
    "& img": {
        width: "95%",
        transform: "translate(2%, -10%)"
    }
});

const More = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: 720,
    padding: "60px 30px",
    backgroundColor: theme.color.white,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.0980392)",
    borderRadius: 12,

    "& button": {
        maxWidth: 438
    }
});

const WCPMore = props => {
    return (
        <SectionWithBg {...props}>
            <ContentContainer className={overviewContainerClass}>
                <ImageWrapper>
                    <div className={videoPreviewClass}>
                        <img src={circleBg} alt={""} />
                    </div>
                </ImageWrapper>
                <OverviewSectionWrapper>
                    <More>
                        <Title>There is much more to WCP. </Title>
                        <Caption>We plan to have the first version out before the Q4 2020.</Caption>
                        <Button type={"secondary"}>Get in touch if you'd like to know more</Button>
                    </More>
                </OverviewSectionWrapper>
            </ContentContainer>
        </SectionWithBg>
    );
};

export default WCPMore;
