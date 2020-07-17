import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import { FEATURES } from "./wcp-intro-data";

import ellipseBg from "./assets/ellipse.svg";
import rectangleBg from "./assets/wcp-bg.svg";

const HeroSection = styled("section")(
    {
        backgroundColor: theme.color.white
    },
    mq({
        padding: ["0px 0px 110px", "0"],
        "@media (min-width: 1460px)": {
            paddingTop: 0
        }
    })
);

const heroContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative"
    },
    mq({
        width: ["100%", "100%"],
        padding: ["75px 0px 75px", "85px 0px 85px"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80
        }
    })
);

const HeroSectionWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        marginBottom: 120
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"]
    })
);

const Title = styled("h3")(
    {
        maxWidth: 908,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        // lineHeight: "34px",
        marginBottom: 40,
        marginTop: 0,
        "& a": {
            color: theme.color.primaryDark,
            textDecoration: "none"
        },
        "&::after": {
            content: "url(" + ellipseBg + ")",
            position: "absolute",
            top: -50,
            right: "14%"
        }
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"]
    })
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + rectangleBg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat"
});

const SubTitle = styled("h3")(
    {
        maxWidth: 908,
        fontSize: theme.fontSize["2xl"],
        fontWeight: theme.fontWeight.regular,
        color: theme.color.dark,
        textAlign: "center",
        lineHeight: "34px",
        marginBottom: 20,
        marginTop: 0
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"]
    })
);

const Grid = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "40px 40px"
    // grid-template-areas: ". . ." ". . ."
});

const Card = styled("div")({
    boxSizing: "border-box",
    width: 352,
    // height: 290,
    backgroundColor: theme.color.white,
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.0941176)",
    borderRadius: 8,
    padding: "24px 30px",

    "& .content": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",

        ".content__media": {
            display: "flex",
            alignItems: "center",
            marginBottom: 20,

            img: {
                width: "100%",
                height: 150,
                maxWidth: 181
            }
        },
        ".content__title": {
            margin: "0px 0px 10px",
            fontSize: 22,
            fontWeight: theme.fontWeight.bold
        },
        ".content__body": {
            margin: 0,
            fontSize: theme.fontSize["base"],
            fontWeight: theme.fontWeight.regular
        }
    }
});

const WCPIntroComponent = props => {
    return (
        <HeroSection {...props}>
            <ContentContainer className={heroContainerClass}>
                <HeroSectionWrapper>
                    <Title>
                        Introducing <TitleHighlight>Webiny Control Panel</TitleHighlight>
                    </Title>
                    <SubTitle>
                        At Webiny we have a mission to empower developers and organisations to build
                        serverless applications. As the next step in our mission, we want to bring
                        Webiny even closer to our audience. Webiny Control Panel will be our first
                        commercial product and it will greatly complement our open-source offering.
                        Here are some of its features.
                    </SubTitle>
                </HeroSectionWrapper>
                <Grid>
                    {FEATURES.map(feature => (
                        <Card key={feature.id}>
                            <div className="content">
                                <div className="content__media">
                                    <img src={feature.image.src} alt={feature.image.alt} />
                                </div>
                                <h3 className="content__title">{feature.title}</h3>
                                <p className="content__body">{feature.body}</p>
                            </div>
                        </Card>
                    ))}
                </Grid>
            </ContentContainer>
        </HeroSection>
    );
};

export default WCPIntroComponent;
