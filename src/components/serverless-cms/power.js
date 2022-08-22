import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";

import powerBg from "./assets/power-bg.svg";
import vectorIcon from "./assets/power-highlight.svg";
import MainImg from "./assets/power-main.svg";
import icon1 from "./assets/apis/icon1.svg";
import icon2 from "./assets/apis/icon2.svg";
import icon3 from "./assets/apis/icon3.svg";
import icon4 from "./assets/apis/icon4.svg";
import icon5 from "./assets/apis/icon5.svg";
import icon6 from "./assets/apis/icon6.svg";
import icon7 from "./assets/apis/icon7.svg";
import icon8 from "./assets/apis/icon8.svg";
import icon9 from "./assets/apis/icon9.svg";

const PowerSection = styled("section")(
    {
        backgroundImage: "url(" + powerBg + ")",
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    },
    mq({
        backgroundSize: ["cover", "cover", "100%"],
        backgroundPosition: ["top", "top"],
        padding: ["0px 0px 80px", "0 0 150px"],
    }),
);

const powerContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        padding: ["75px 0px 0px", "160px 0px 0px"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
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

const MainImage = styled("img")(
    {
        maxWidth: "90%",
        margin: "40px auto",
        width: "90%",
    },
    mq({
        marginLeft: [10, "auto"],
    }),
);

const PowerList = styled("div")(
    {
        display: "grid",
        gridGap: 40,

        "& .power-item": {
            marginBottom: 60,

            "& img": {
                marginBottom: 10,
            },

            "& h3": {
                color: theme.color.white,
                fontWeight: theme.fontWeight.bold,
                fontSize: 28,
                lineHeight: "40px",
                margin: "0 0 10px",
            },

            "& p": {
                color: theme.color.white,
                fontWeight: theme.fontWeight.regular,
                fontSize: 18,
                lineHeight: "26px",
                margin: 0,
            },
        },
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
        "& .power-item": {
            maxWidth: 340,
            textAlign: ["center", "left"],
        },
    }),
);

const powerList = [
    {
        title: "GraphQL API",
        text: "Anything you can do in the UI, you can do it also via our GraphQL API",
        img: icon1,
    },
    {
        title: "Elasticsearch",
        text:
            "Query search and filter operations are powered by Elasticsearch for fast performance.",
        img: icon2,
    },
    {
        title: "Content versioning",
        text:
            "All content, all pages and forms are versioned. You can create drafts or go back in history on any changes you've made directly via the API.",
        img: icon3,
    },
    {
        title: "Content localization",
        text:
            "Publish and manage content in multiple languages. Use the API to retrieve a specific content on a specific language.",
        img: icon4,
    },
    {
        title: "Manage API",
        text:
            "Manage API allows you to modify and create new content model schemas programmatically.",
        img: icon5,
    },
    {
        title: "Access control",
        text:
            "Fine grain control over which user and which API key can access which parts of the API and which operations it can trigger.",
        img: icon6,
    },
    {
        title: "Image API",
        text: "Dedicated API to store, retrieve and resize images. ",
        img: icon7,
    },
    {
        title: "Edge network",
        text:
            "Webiny deploys a CloudFront CDN in front of the API endpoint for DDoS protection and improved network performance.",
        img: icon8,
    },
    {
        title: "API Editor",
        text:
            "Create new APIs using an intuitive drag&drop editor. Add reference fields, file upload fields, validation and many other features to your API.",
        img: icon9,
    },
];

const Power = () => {
    return (
        <PowerSection>
            <ContentContainer className={powerContainerClass}>
                <Title>
                    The API that powers Webiny <TitleHighlight>Serverless CMS</TitleHighlight>
                </Title>
                <MainImage src={MainImg} alt="" />
                <PowerList>
                    {powerList.map((item, index) => (
                        <div className="power-item" key={index}>
                            <img src={item.img} alt="" />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </PowerList>
            </ContentContainer>
        </PowerSection>
    );
};

export default Power;
