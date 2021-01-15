import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";

import exampleBg from "./assets/example-bg.svg";
import exampleLogo from "./assets/example-logo.svg";
import vectorIcon from "./assets/example-highlight.svg";
import example1 from "./assets/example1.svg";
import example2 from "./assets/example2.svg";
import example3 from "./assets/example3.svg";
import example4 from "./assets/example4.svg";

const ExampleSection = styled("section")(
    {
        backgroundImage: "url(" + exampleBg + ")",
        position: "relative",
        zIndex: 0,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    },
    mq({
        backgroundSize: ["cover", "cover", "100%"],
        backgroundPosition: ["center", "bottom"],
        padding: ["50px 0", "100px 0"]
    }),
);

const heroContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
    }),
);

const ExampleSectionWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
    },
    mq({
        width: ["100%", 1100],
        backgroundSize: ["0", "auto"],
        alignItems: ["center"],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 768,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
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

const SubTitle = styled("h3")(
    {
        fontSize: 24,
        fontWeight: theme.fontWeight.regular,
        lineHeight: "34px",
        marginTop: 15,
        marginBottom: 40,
        color: theme.color.white,
        textAlign: "center",
    },
    mq({
        maxWidth: [337, 684],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const ButtonWrapper = styled("div")(
    {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",

        "& p": {
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "18px",
            color: theme.color.white,
            margin: "5px 0 0"
        }
    },
    mq({        
        marginBottom: [0, 50],
    }),
);

const getStartedButtonClass = css(
    {
        backgroundColor: `${theme.color.purple} !important`,
        textTransform: "uppercase",
        padding: "10px 12px !important",
        height: "40px !important",
        fontWeight: "bold !important",
        color: theme.color.white
    },
    mq({
        width: ["90% !important", "254px !important"],
        marginBottom: ["16px !important", "0px !important"],
    }),
);

const ExampleLogoImage = styled("img")({
    marginBottom: 12,
});

const ExampleList = styled("div")(
    {
        display: "grid",
        marginBottom: 70,
        gridTemplateColumns: "repeat(1, 1fr)"
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
        gridGap: [40, 30],
    }),
)

const ReasonBox = styled("div")(
    props => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.color.white,
        height: 260,
        borderRadius: 8,
        padding: 11,
        borderTop: `6px solid ${props.color}`,
        margin: "0 auto",

        "& img": {
            marginBottom: 20,
            height: 88,
        },

        "& h3": {
            fontWeight: theme.fontWeight.bold,
            fontSize: 24,
            lineHeight: "28px",
            color: props.color,
            margin: "0 0 14px"
        },

        "& .text": {
            fontSize: 21,
            textAlign: "center",
            marginBottom: 24,
            lineHeight: "28px",
        },
    }),
    mq({
        width: [300, 250]
    })
);

const examples = [
    {img: example1, title: "Headless CMS", description: "GraphQL based headless CMS with powerful content modeling features.", color: theme.color.dark},
    {img: example2, title: "Page Builder", description: "For when you need a quick landing page created without any coding.", color: theme.color.primaryDark},
    {img: example3, title: "Form Builder", description: "Create forms using a drag&drop interface and track how they convert.", color: theme.color.lightGreen},
    {img: example4, title: "File Manager", description: "Create forms using a drag&drop interface and track how they convert.", color: theme.color.purple},
]

const ExampleApp = () => {
    return (
        <ExampleSection>
            <ContentContainer className={heroContainerClass}>
                <ExampleSectionWrapper>
                    <ExampleLogoImage src={exampleLogo} alt={""} />                     
                    <Title>
                        Example apps?<br />
                        Check out Webiny  &nbsp;
                        <TitleHighlight>Serverless CMS</TitleHighlight>
                    </Title>
                    <SubTitle>We've build a whole suite of serverless apps using Webiny Serverless Application Framework - check them out.</SubTitle>
                    <ExampleList>
                        {
                            examples.map((item, index) => (
                                <ReasonBox color={item.color} key={index}>
                                    <img src={item.img} alt="get started with tutorial" />
                                    <h3>{item.title}</h3>
                                    <p className="text">{item.description}</p>                            
                                </ReasonBox>
                            ))
                        }                          
                    </ExampleList>                   
                    <ButtonWrapper>
                        <Button
                            className={getStartedButtonClass}
                            type="default"                            
                        >
                            Learn More
                        </Button>                                                
                    </ButtonWrapper>
                </ExampleSectionWrapper>                
            </ContentContainer>
        </ExampleSection>
    );
}

export default ExampleApp;
