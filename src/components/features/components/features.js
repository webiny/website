import React from "react";
import styled from "react-emotion";
import { css } from "emotion";

import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import serverlessIcon from "../assets/serverless-icon.svg";
//import testCoverageIcon from '../assets/test-coverage-icon.svg';
import craIcon from "../assets/cra-icon.svg";
import graphqlIcon from "../assets/graphql-icon.svg";
import uiComponentsIcon from "../assets/ui-components-icon.svg";
import documentedIcon from "../assets/documented-icon.svg";
import openSourceIcon from "../assets/open-source-icon.svg";
import materialThemeIcon from "../assets/material-theme-icon.svg";
//import flowjsIcon from '../assets/flowjs-icon.svg';
import typescriptIcon from "../assets/typescript-icon.svg";
import databaseIcon from "../assets/database-icon.svg";
//import i18nIcon from '../assets/i18n-icon.svg';
import integrationsIcon from "../assets/integrations-icon.svg";
import securityIcon from "../assets/security-icon.svg";
import externalLinkIcon from "../assets/external-link-symbol.svg";
import visualBuilderIcon from "../assets/visual-builder-icon.svg";
//import testPassing from '../assets/passing.svg';
//import testCoverage from '../assets/coveralls_95.svg';
import ssrIcon from "../assets/ssr.svg";
import headlessIcon from "../assets/headless.svg";
import multilanguageIcon from "../assets/multilanguage.svg";

import bg from "../assets/developers-bg.svg";

const wrapperStyle = css(
    {
        background: "url(" + bg + ") no-repeat center top",
        width: "100%",
        backgroundColor: "#F7F7F7",
    },
    mq({
        backgroundSize: ["cover", "cover", "cover"],
        backgroundPosition: ["right 0px top 25px", "right 0px top 0px", "right 0px top 0px"],
        paddingTop: [50, 200],
        paddingBottom: [25, 50],
        marginTop: [0, -100],
    }),
);

const BoxContainer = styled("div")(
    {
        justifyContent: "space-between",
        marginBottom: 30,
        boxSizing: "border-box",
    },
    mq({
        display: ["block", "flex"],
    }),
);

const Box = styled("div")(
    {
        backgroundColor: theme.color.white,
        boxShadow: "0 2px 4px 0 rgba(125,69,69,0.50)",
        borderRadius: 2,
        position: "relative",
        boxSizing: "border-box",
        transition: "box-shadow 0.3s ease-in-out",
        transitionProperty: "opacity,transform,-webkit-transform, box-shadow !important",
        "&:hover": {
            boxShadow: "0 15px 15px 0 rgba(125,69,69,0.50)",
        },
    },
    mq({
        width: ["auto", "33%"],
        margin: [20, "0px 15px"],
        padding: ["80px 30px 50px", "90px 30px 30px"],
    }),
);

const BoxTitle = styled("h5")({
    color: theme.color.black,
    fontSize: theme.fontSize.h5,
    fontWeight: theme.fontWeight.semiBold,
    textTransform: "uppercase ",
    position: "absolute",
    top: 35,
    left: 100,
});

const BoxIcon = styled("img")({
    position: "absolute",
    top: 20,
    left: 30,
    height: 50,
});

const BoxDescription = styled("p")({
    fontSize: 16,
    lineHeight: "150%",
    color: theme.color.black,
    marginBottom: 0, //30,
    letterSpacing: "0.3px",
});

const BoxFooter = styled("div")({
    position: "absolute",
    bottom: 20,
});

const Italic = styled("p")({
    fontStyle: "italic",
    fontSize: 14,
    marginBottom: 0,
});

const SmallText = styled("span")({
    fontSize: 12,
    marginBottom: 0,
});

const ExternalLink = styled("a")({
    background: "url(" + externalLinkIcon + ") no-repeat 0px 3px",
    color: theme.color.grayText,
    fontSize: theme.fontSize.paragraph,
    paddingLeft: 20,
    textDecoration: "none",
});

const SubTitle = styled("h2")({
    fontSize: theme.fontSize.h2,
    fontWeight: 500,
    textTransform: "uppercase",
    color: theme.color.white,
    textAlign: "center",
    paddingTop: 50,
    marginTop: 0,
    marginBottom: 75,
});

class Features extends React.Component {
    render() {
        return (
            <section className={wrapperStyle}>
                <ContentContainer>
                    <SubTitle>Developer Features</SubTitle>
                    <BoxContainer>
                        <Box>
                            <BoxIcon src={serverlessIcon} />
                            <BoxTitle>Serverless</BoxTitle>
                            <BoxDescription>
                                Webiny is built on top of modern serverless technologies, which
                                ensure your apps run flawlessly in any circumstances. Focus
                                completely on developing your app instead of managing servers and
                                other resources.
                            </BoxDescription>
                        </Box>
                        <Box>
                            <BoxIcon src={craIcon} />
                            <BoxTitle>CRA v2</BoxTitle>
                            <BoxDescription>
                                To make app development easier, we decided to use Create React App.
                                It's an environment many developers already know and love. Getting
                                started with Webiny will be a familiar experience from the start.
                            </BoxDescription>
                        </Box>
                        <Box>
                            <BoxIcon src={graphqlIcon} />
                            <BoxTitle>GraphQL</BoxTitle>
                            <BoxDescription>
                                GraphQL is the next evolution of API. Powerful instructions and
                                intuitive schema discovery enable you to quickly get familiar with
                                the API. Popular companies like GitHub, Twitter, Facebook all use
                                GraphQL, and we follow that trend.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Webiny GraphQL Schema Explorer
              </ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                    </BoxContainer>
                    <BoxContainer>
                        <Box>
                            <BoxIcon src={uiComponentsIcon} />
                            <BoxTitle>UI Components</BoxTitle>
                            <BoxDescription>
                                Webiny is not about building just websites. You can build powerful
                                apps and APIs. To help with that, we included a number of React UI
                                components which will speed up your development and maintain
                                consistency across your project.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about UI Components
              </ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                        <Box>
                            <BoxIcon src={documentedIcon} />
                            <BoxTitle>Documented</BoxTitle>
                            <BoxDescription>
                                StackOverflow developer survey report stated that developers are
                                most frustrated with bad, or lack of proper documentation. And so
                                are we! For that reason we invested extra effort into creating ours.
                                We made it clean and easy to navigate.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">Webiny Documentation</ExternalLink>
            </BoxFooter>
             */}
                        </Box>
                        <Box>
                            <BoxIcon src={openSourceIcon} />
                            <BoxTitle>Open Source</BoxTitle>
                            <BoxDescription>
                                Our belief is that software should be open. It directly benefits the
                                community and the people around it. For that reason we released
                                Webiny under the MIT open-source license. Webiny will always be and
                                remain FREE.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">Webiny License</ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                    </BoxContainer>
                    <BoxContainer>
                        <Box>
                            <BoxIcon src={ssrIcon} />
                            <BoxTitle>Server Side Render</BoxTitle>
                            <BoxDescription>
                                SSR is included as part of Webiny package. Your sites are rendered
                                server side, ensuring all bots and crawlers can read your content
                                and provide the full SEO value.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about Visual Builder
              </ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                        <Box>
                            <BoxIcon src={headlessIcon} />
                            <BoxTitle>Headless</BoxTitle>
                            <BoxDescription>
                                From content modeling, data relations to a GraphQL API for both
                                reading and managing your content, Webiny is a true headless CMS.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about the CMS Theme
              </ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                        <Box>
                            <BoxIcon src={multilanguageIcon} />
                            <BoxTitle>Multi-language support</BoxTitle>
                            <BoxDescription>
                                If you are creating content on multiple languages, Webiny is a great
                                choice. The visual page builder, headless module and form builder,
                                all of them support a multi-language approach to managing content.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">Webiny License</ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                    </BoxContainer>
                    <BoxContainer>
                        <Box>
                            <BoxIcon src={visualBuilderIcon} />
                            <BoxTitle>Visual Builder</BoxTitle>
                            <BoxDescription>
                                Most visual website builders work with static HTML blocks. Webiny is
                                different. Our visual builder works with React components. If you
                                know how to create a React component, you can quickly and easily
                                create new plugins and elements. This makes it easy to expand and
                                add new functionality to your site.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about Visual Builder
              </ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                        <Box>
                            <BoxIcon src={materialThemeIcon} />
                            <BoxTitle>Theme</BoxTitle>
                            <BoxDescription>
                                Every website requires a theme. Webiny CMS comes with two built-in
                                themes. One for the administration, and one for the website. You can
                                customize both to fit any visual style required. The website theme
                                is also mobile responsive.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">
                Learn more about the CMS Theme
              </ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                        <Box>
                            <BoxIcon src={typescriptIcon} />
                            <BoxTitle>TypeScript</BoxTitle>
                            <BoxDescription>
                                Documentation is important, but so is having a readable and easy to
                                understand source code. Reading somebody else's code can be
                                “challenging” at times. To make it easier for everyone, our code is
                                written using TypeScript for extra clarity.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">Webiny License</ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                    </BoxContainer>
                    <BoxContainer>
                        <Box>
                            <BoxIcon src={databaseIcon} />
                            <BoxTitle>Document Database</BoxTitle>
                            <BoxDescription>
                                Webiny uses a document database. They feature semi-structured
                                documents which are perfect for modern API layers. For developers
                                they are super easy to work with. By default you can use either
                                MongoDB or AWS DocumentDB.
                            </BoxDescription>
                            {/*
            <BoxFooter>
              <ExternalLink href="#">Entities Documentation</ExternalLink>
            </BoxFooter>
            */}
                        </Box>
                        <Box>
                            <BoxIcon src={integrationsIcon} />
                            <BoxTitle>Integrations</BoxTitle>
                            <BoxDescription>
                                Webiny is designed as a platform on top of which you can build
                                custom applications. The integrated plugin system allows you to hook
                                in into any part of the existing code. You can add, remove or change
                                current features and behaviors. There are no roadblocks when you use
                                Webiny.
                            </BoxDescription>
                        </Box>
                        {/*
          <Box>
            <BoxIcon src={i18nIcon} />
            <BoxTitle>I18N</BoxTitle>
            <BoxDescription>
              A translation system is essential for most of web applications.
              Webiny comes with a built in API and a UI to manage the
              translations for your whole website or web application.
            </BoxDescription>
            <BoxFooter>
              <ExternalLink href="#">I18n Documentation</ExternalLink>
            </BoxFooter>
          </Box>
          */}
                        <Box>
                            <BoxIcon src={securityIcon} />
                            <BoxTitle>Security</BoxTitle>
                            <BoxDescription>
                                Webiny provides a simple yet effective security layer. It comprises
                                of scopes, roles and groups. This gives you fine-grained control
                                over data access. You can define your scopes in code, then manage
                                roles via a user-friendly UI.
                            </BoxDescription>
                            {/*
              <BoxFooter>
                <ExternalLink href="#">Security Documentation</ExternalLink>
              </BoxFooter>
              */}
                        </Box>
                    </BoxContainer>
                </ContentContainer>
            </section>
        );
    }
}

export default Features;
