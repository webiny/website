import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import { experienceList } from "./great-experience-data";

import rectangleBg from "./assets/great-experience-bg.svg";


const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    mq({
        backgroundSize: ["cover", "auto", "cover"],
        padding: ["0px 15px 110px", "40px 15px 110px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0,
        },
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 953,
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
    backgroundImage: "url(" + rectangleBg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const overviewContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 1200,
        padding: 0,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"]
    }),
);

const LogosWrapper = styled("div")(
    {
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
    }),
);

const FeatureCard = styled("div")(
    props => ({
        minHeight: 380,
        borderRadius: 0,

        borderLeft: props.borderLeft ? "1px solid #E2E2E2" : "",
        borderRight: props.borderRight ? "1px solid #E2E2E2" : "",
        borderBottom: props.borderBottom ? "1px solid #E2E2E2" : "",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative",
        backgroundColor: theme.color.white,
        padding: "24px",
        textAlign: "center",

        "& .feature-card__img": {
            width: "100%",
            height: 160,
            maxWidth: 261,
        },

        "& .feature-card__title": {
            margin: "10px 0px 8px",
            maxWidth: 285,
            color: theme.color.black,
            fontSize: 20,
            fontWeight: theme.fontWeight.bold,
            lineHeight: "25px"
        },
        "& .feature-card__body": {
            margin: 0,
            color: theme.color.black,
            fontSize: 14,
            fontWeight: theme.fontWeight.lg,
            lineHeight: "18px",
            "& a": {
                color: theme.color.primaryDark,
            },
        },
        "& .feature-card__connector": {
            position: "absolute",
            top: "-13%",
            zIndex: 1,
        },
    }),    
    mq({
        width: [360, 360, 352],
        height: ["auto", 380],
        justifySelf: ["center"],
        borderColor: ["white", "white", "#E2E2E2"],

        "& .feature-card__connector": {
            display: ["none", "block"],
            width: ["auto", 400, "auto"],
        },
    }),
);

const GreatExperience = () => {
    return (
        <Section>
            <ContentContainer className={overviewContainerClass}>
                <Title>
                    Features which make developing with Webiny a{" "}
                    <TitleHighlight>great experience</TitleHighlight>
                </Title>
                <LogosWrapper>
                    {experienceList.map((item, index) => (
                        <FeatureCard key={item.id} key={index} {...item}>
                            <img
                                className="feature-card__img"
                                src={item.imageSrc}                                
                            />
                            <h4 className="feature-card__title">{item.title}</h4>
                            <p className="feature-card__body">{item.body}</p>
                        </FeatureCard>
                    ))}
                </LogosWrapper>
            </ContentContainer>
        </Section>
    );
};

export default GreatExperience;
