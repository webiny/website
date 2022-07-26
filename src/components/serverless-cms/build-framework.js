import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import vectorIcon from "./assets/cms-framework-highlight.svg";
import Build1 from "./assets/build1.svg";
import Build2 from "./assets/build2.svg";
import Build3 from "./assets/build3.svg";
import Build4 from "./assets/build4.svg";
import Build5 from "./assets/build5.svg";
import Build6 from "./assets/build6.svg";

const buildList = [
    {
        img: Build1,
        title: "Marketing Sites",
        description: "Simple landing pages done in a few minutes, no code required."
    },
    {
        img: Build2,
        title: "GraphQL APIs",
        description: "Model an API with Webiny headless CMS."
    },
    {
        img: Build3,
        title: "Multi-website solutions",
        description: "Use the built-in multi-tenancy to manage multiple websites."
    },
    {
        img: Build4,
        title: "Multi-language sites",
        description: "Publish and manage content on multiple languages."
    },
    {
        img: Build5,
        title: "Omni-channel content hub",
        description: "From the headless API to desktops, mobile devices and others."
    },
    {
        img: Build6,
        title: "Intranet portals",
        description: "Build a portal for your organization behind a secure login form."
    },
]

const BuildFrameworkSection = styled("section")(
    {
        backgroundColor: theme.color.white
    },
    mq({
        padding: ["50px 15px", "100px 15px"],
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

const Title = styled("h1")(
    {
        maxWidth: 768,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        margin: "0 auto 26px",
    }
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + vectorIcon + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const BuildList = styled("div")(
    {
        display: "grid",

        "& .build-item": {
            display: "flex",
            background: "#f9f5ff",
            padding: "35px 18px 5px",

            "& .main-logo": {
                paddingTop: 7
            },

            "& img": {
                marginRight: 20,
            },

            "& .main-description": {
                "& h3": {
                    margin: "0 0 10px",
                    fontWeight: theme.fontWeight.bold,
                    fontSize: 28,
                    lineHeight: "40px",
                    color: "black"
                },

                "& p": {
                    fontSize: 18,
                    lineHeight: "26px",
                    color: "black"
                }
            }
        }
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
        maxWidth: [360, "100%"],
        margin: ["0 auto", 0],
        gridGap: [30, 50],
        paddingTop: [50, 100],
    }),
)

const BuildFramework = () => {
    return (
        <BuildFrameworkSection>
            <ContentContainer className={ContainerClass}>
                <Title>
                    Use Webiny <TitleHighlight>Serverless CMS</TitleHighlight> to build
                </Title>
                <BuildList>
                    {
                        buildList.map((item, index) => (
                            <div className="build-item" key={index}>
                                <div className="main-logo">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className="main-description">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </BuildList>
            </ContentContainer>
        </BuildFrameworkSection>
    )
}

export default BuildFramework
