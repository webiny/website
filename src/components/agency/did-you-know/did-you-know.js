import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import { css } from "emotion";
import ContentContainer from "../../ui/content-container";

import didYouKnowBg from "./assets/did-you-know-bg.svg";
import didYouKnowHighlight from "./assets/did-you-know-highlight.svg";
import didYouKnowHexagon from "./assets/did-you-know-hexagon.svg";
import didYouKnowCircle from "./assets/did-you-know-circle.svg";

const wrapperClass = css({
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundImage: "url(" + didYouKnowBg + ")",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
});

const contentContainerClass = css(
    {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        "& .wrapper": {
            position: "relative",
            width: "100%",
            maxWidth: 768,
        },
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%"],
        paddingTop: [110, 145],
        paddingBottom: [110, 180],
    }),
);

const TextWrapper = styled("div")(
    {
        boxSizing: "border-box",
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        background: theme.color.white,
        boxShadow: "2px 3px 15px rgba(100, 100, 100, 0.239216)",
        borderRadius: 8,
    },
    mq({
        width: ["80%", "100%"],
        maxWidth: [320, 756],
        padding: ["20px 20px", "20px 70px"],
    }),
);

const Title = styled("h5")({
    fontSize: 18,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.primaryDark,
    textAlign: "center",
    textTransform: "uppercase",
    paddingTop: 0,
    marginTop: 0,
});

const SubTitle = styled("h2")({
    fontSize: 32,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    lineHeight: "42px",
    textAlign: "center",
    paddingTop: 0,
    marginTop: 0,
});

const HighlightedBg = styled("span")({
    backgroundImage: "url(" + didYouKnowHighlight + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const HexagonImage = styled("img")(
    {
        position: "absolute",
        zIndex: 0,
    },
    mq({
        width: [80, "auto"],
        bottom: [-40, -90],
        right: [-5, -90],
    }),
);

const CircleImage = styled("img")(
    {
        position: "absolute",
        zIndex: 0,
    },
    mq({
        width: [80, "auto"],
        top: [-30, -81],
        left: [-10, -81],
    }),
);

const SmallCircleImage = styled("img")(
    {
        position: "absolute",
        zIndex: 0,
    },
    mq({
        width: [50, 109],
        top: [-20, -50],
        right: [0, -50],
    }),
);

class DidYouKnow extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <ContentContainer className={contentContainerClass}>
                    <div className="wrapper">
                        <TextWrapper>
                            <Title>Do You Know</Title>
                            <SubTitle>
                                Did you know CocaCola <br />
                                <HighlightedBg>saved 65%</HighlightedBg>
                                &nbsp;of their infrastructure cost <br /> by moving to serverless
                            </SubTitle>
                        </TextWrapper>
                        <HexagonImage src={didYouKnowHexagon} alt="hexagon art" />
                        <CircleImage src={didYouKnowCircle} alt="circle art" />
                        <SmallCircleImage src={didYouKnowCircle} alt="circle art" />
                    </div>
                </ContentContainer>
            </section>
        );
    }
}

export default DidYouKnow;
