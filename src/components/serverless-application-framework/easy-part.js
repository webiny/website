import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import bgImage from "./assets/easy-bg.svg";
import vectorIcon from "./assets/easy-highlight.svg";

import ClipPart from "./clipboard";

const EasyPartSection = styled("section")(
    {
        backgroundImage: "url(" + bgImage + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        backgroundPosition: "bottom",
    },
    mq({
        padding: ["60px 15px 80px", "120px 15px"],
    }),
)

const ContainerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
    }),
);

const Content = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 654,
        margin: "0 auto",

        "& p": {
            fontSize: 24,
            lineHeight: "40px",
            color: theme.color.black
        },

        "& img": {
            marginBottom: 11
        }
    },
    mq({
        "& img": {
            width: ["90%", "100%"]
        },

        "& p": {
            textAlign: ["center", "left"]
        }
    }),
)

const Title = styled("h1")(
    {
        maxWidth: 654,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 26,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + vectorIcon + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const EasyPart = () => {
    return (
        <EasyPartSection>
            <ContentContainer className={ContainerClass}>
                <Content>
                    <Title>                        
                        <TitleHighlight>It's easy</TitleHighlight> to get started
                    </Title>
                    <p>Explore our docs for more tutorials and examples.</p>
                    <ClipPart text="npx create-webiny-project new-project"/>                
                    <ClipPart text="yarn webiny deploy"/>
                </Content>                
            </ContentContainer>
        </EasyPartSection>
    )
}

export default EasyPart