import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import vectorIcon from "./assets/framework-highlight.svg";
import Build1 from "./assets/build1.svg";
import Build2 from "./assets/build2.svg";
import Build3 from "./assets/build3.svg";
import Build4 from "./assets/build4.svg";
import Build5 from "./assets/build5.svg";
import Build6 from "./assets/build6.svg";

const buildList = [
    {
        img: Build1,
        title: "Full-stack web apps",
        description: "Build business applications and websites. Pre-rendering, SEO, routing, security, bundling, deployment, and much more. All those pieces are in place for you already."
    },
    {
        img: Build2,
        title: "GraphQL APIs",
        description: "Build external or internal APIs by expanding the built-in GraphQL resolvers. Security and auth tokens are already there for you to leverage. "
    },
    {
        img: Build3,
        title: "Multi-database solutions",
        description: "Build apps that use different databases, no need to be constrained by a single one. You can use the native NodeJs database drivers for interacting with outside databases."
    },
    {
        img: Build4,
        title: "Microservices",
        description: "One service, or a whole fleet. Webiny provides you with project organization, code bundling, IaC and deployment mechanisms ready to go."
    },
    {
        img: Build5,
        title: "Multi-tenant SaaS applications",
        description: "Multi-tenancy is built-in at the core with complete data separation. Add your product on top and you're ready to offer your SaaS to the world."
    },
    {
        img: Build6,
        title: "Internal applications",
        description: "Secure your applications, or parts of it with an ACL using the built-in security framework and AWS Cognito. You can even add support for things like OKTA, Auth0 and others."
    },
]

const BuildFrameworkSection = styled("section")(
    {
        backgroundColor: theme.color.white
    },
    mq({
        padding: ["30px 15px 15px", "100px 15px"],
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

const Description = styled("p")(
    {
        maxWidth: 768,
        fontSize: 24,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "40px",
        marginBottom: 26,
        margin: "0 auto"
    }
)

const BuildList = styled("div")(
    {
        display: "grid",

        "& .build-item": {
            display: "flex",

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
                    lineHeight: "32px",
                },

                "& p": {
                    fontSize: 18,
                    lineHeight: "26px"
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
                    Build with Webiny Serverless Application &nbsp;
                    <TitleHighlight>Framework</TitleHighlight>
                </Title>
                <Description>From small and simple projects, to large and complex ones, you'll have it covered.</Description>
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