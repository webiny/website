import React, { Fragment } from "react";
import theme from "../../utils/theme";
import { Title, TitleHighlight } from "../elements/facts/facts";

// assets
import ContentModelingVideo from "./assets/content-modeling.mp4";
import I18nVideo from "./assets/i18n.mp4";
import GraphQLPlaygroundVideo from "./assets/graphql-playground.mp4";
import AssetsVideo from "./assets/asset-management.mp4";
import EnvironmentsVideo from "./assets/environments.mp4";
import AliasesVideo from "./assets/aliases.mp4";
import AccessTokenVideo from "./assets/access-tokens.mp4";
import ContentGroupsVideo from "./assets/content-groups.mp4";
import DeviceAgnostic from "./assets/device-agnostic-img.svg";
import madeForDevelopersImg from "./assets/made-for-developers.svg";
import microserviceImg from "./assets/micro-services.svg";
import fullyCustomImg from "./assets/fully-customizable.svg";
import purpleRectImg from "./assets/purple-rect.svg";
import greenRectImg from "./assets/green-rect.svg";
import orangeRectImg from "./assets/orange-rect.svg";
import multiChannelImg from "./assets/multi-channel.svg";
import secureIconImg from "./assets/secure-icon.svg";
import serverlessImg from "./assets/self-hosted-serverless.svg";
import grayRectImg from "./assets/gray-rect.svg";
import grayRectInvertedImg from "./assets/grey-rectangle-inverted.svg";

export const HERO_FEATURES = [
    {
        id: 0,
        title: "Serverless & Self-hosted",
        body: "Quick and easy deployment using Webiny CLI."
    },
    {
        id: 1,
        title: "GraphQL APIs",
        body: "There are 2 APIs, one for content management and one for content delivery."
    },
    {
        id: 2,
        title: "Content Modeling",
        body: "Use the simple and intuitive drag&drop editor to model your content."
    }
];

export const KEYNOTES = [
    {
        id: 0,
        renderText: ({ className = "" }) => (
            <p className={className}>
                A true <span>headless CMS</span>, that's also serverless
            </p>
        )
    },
    {
        id: 1,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Save <span>60-80% </span> on your cloud hosting bill
            </p>
        )
    },
    {
        id: 2,
        renderText: ({ className = "" }) => (
            <p className={className}>
                <span>Stop paying</span> for stuff you don't use
            </p>
        )
    },
    {
        id: 3,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Control <span>roles</span> & <span>permissions</span> ensuring your content is safe
            </p>
        )
    },
    {
        id: 4,
        renderText: ({ className = "" }) => (
            <p className={className}>
                <span>Multi-language</span> support out-of-the-box
            </p>
        )
    },
    {
        id: 5,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Manage your <span>files</span> and <span>media</span> assets
            </p>
        )
    }
];

export const FEATURES = [
    {
        id: 0,
        videoFile: ContentModelingVideo,
        renderTitle: () => (
            <h3>
                <span>Content</span>&nbsp;Modeling
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Powerful modelling features allow you to model the content and define
                    relationships using a simple drag&drop editor.
                </p>
                <p>
                    At the same time, you are also building the UI for the input forms. Ensuring
                    your editors have a pleasant user-experience while working with your content.
                </p>
            </Fragment>
        ),
        actionLabel: "Learn more",
        actionLink:
            "https://docs.webiny.com/docs/webiny-apps/headless-cms/features/content-modeling",
        background: grayRectImg,
        imageOnLeft: false
    },
    {
        id: 1,
        videoFile: I18nVideo,
        renderTitle: () => (
            <h3>
                <span>Content</span>&nbsp;Localization
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    The localization support is built into the core of Webiny Headless CMS. All your
                    content is translatable and distributable in several languages.
                </p>
                <p>
                    Each editor chooses the languages they are working on. They can also instantly
                    see the values of a specific field on all other languages.
                </p>
            </Fragment>
        ),
        actionLabel: "Learn more",
        actionLink: "https://docs.webiny.com/docs/webiny-apps/headless-cms/features/localization",
        background: false,
        imageOnLeft: true
    },
    {
        id: 2,
        videoFile: GraphQLPlaygroundVideo,
        renderTitle: () => (
            <h3>
                <span>GraphQL API +</span>&nbsp;Playground
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Both our management and our distribution API are powered by GraphQL. On top of
                    that, Webiny exposes a GraphQL Playground you can use to easily test and debug
                    your API calls.
                </p>
            </Fragment>
        ),
        actionLabel: "Learn more",
        actionLink:
            "https://docs.webiny.com/docs/webiny-apps/headless-cms/features/graphql-playground",
        background: grayRectInvertedImg,
        imageOnLeft: false
    },
    {
        id: 3,
        videoFile: AssetsVideo,
        renderTitle: () => (
            <h3>
                <span>Asset</span>&nbsp;Management
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Webiny File Manager is integrated directly into the Headless CMS giving you a
                    whole asset management solution with integrated tagging, searching and image
                    editing features.
                </p>
            </Fragment>
        ),
        actionLabel: "Learn more",
        actionLink: "http://docs.webiny.com/docs/webiny-apps/headless-cms/features/access-tokens",
        background: grayRectImg,
        imageOnLeft: false
    },
    {
        id: 4,
        videoFile: EnvironmentsVideo,
        renderTitle: () => (
            <h3>
                <span>Environments</span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Environments are a powerful feature in Webiny Headless CMS. Creating a new
                    environment copies all the data and all the models from the current environment.
                    This allows you to make changes and prepare new content in the background, while
                    still serving production content without interruption.
                </p>
            </Fragment>
        ),
        actionLabel: "Learn more",
        actionLink: "http://docs.webiny.com/docs/webiny-apps/headless-cms/features/environments",
        background: false,
        imageOnLeft: true
    },
    {
        id: 5,
        videoFile: AliasesVideo,
        renderTitle: () => (
            <h3>
                <span>Aliases</span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Aliases go in hand with environments. Each environment is linked to an alias,
                    which defines the GraphQL endpoint and which content and model are going to be
                    served.
                </p>
                <p>
                    An alias can be unlinked from one environment and linked to another environment.
                    This allows instant switching between different version of your content, as well
                    as instant rollbacks.
                </p>
            </Fragment>
        ),
        actionLabel: "Learn more",
        actionLink: "http://docs.webiny.com/docs/webiny-apps/headless-cms/features/aliases",
        background: grayRectInvertedImg,
        imageOnLeft: false
    },
    {
        id: 6,
        videoFile: AccessTokenVideo,
        renderTitle: () => (
            <h3>
                <span>Access</span> &nbsp; Tokens
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    The authentications and permissions are part of the Webiny core package and they
                    also pass on to the Headless CMS. Create users, user groups, roles and
                    permissions to control who and how they access the system.
                </p>
                <p>
                    In addition to roles and permissions, each user can control their own set of
                    personal access tokens. Each token is assigned to one or more environments.{" "}
                </p>
            </Fragment>
        ),
        actionLabel: "Learn more",
        actionLink: "http://docs.webiny.com/docs/webiny-apps/headless-cms/features/access-token",
        background: grayRectImg,
        imageOnLeft: false
    },
    {
        id: 7,
        videoFile: ContentGroupsVideo,
        renderTitle: () => (
            <h3>
                <span>Content</span>&nbsp;Model Groups
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Webiny features a menu component that is extended via the content models from
                    the Headless CMS. This allows you to build great backend experience for your
                    team, making it easy and intuitive for them to find exactly the content they are
                    looking for.
                </p>
            </Fragment>
        ),
        actionLabel: "Learn more",
        actionLink: "http://docs.webiny.com/docs/webiny-apps/headless-cms/features/access-token",
        background: false,
        imageOnLeft: true
    },
    {
        id: 8,
        renderTitle: () => (
            <h3>
                <span>Device &</span> &nbsp;Frontend Agnostic
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Webiny Headless CMS integrates with any web framework and even goes beyond that.
                    Anything from building a website on top of Gatsby.js or using Swift and
                    displaying the content on an Apple Watch is supported.
                </p>
            </Fragment>
        ),
        renderImg: () => (
            <img src={DeviceAgnostic} alt="Device & Frontend Agnostic" className={"img"} />
        ),
        actionLabel: "Learn more",
        actionLink: "https://docs.webiny.com/docs/guides/headless-gatsby-tutorial",
        background: grayRectInvertedImg,
        imageOnLeft: false
    }
];

export const FACTS = [
    {
        id: 0,
        title: "Made for Developers",
        renderTitle: () => (
            <Title>
                Made for <TitleHighlight bg={purpleRectImg}>Developers</TitleHighlight>
            </Title>
        ),
        body:
            "We created Webiny with developers in mind. It's a single platform built with community accepted tools and libraries.",
        imgSrc: madeForDevelopersImg,
        imgAlt: "made for developers",
        backgroundColor: theme.color.purple,
        className: "card--first"
    },

    {
        id: 1,
        title: "Full Customizable",
        renderTitle: () => (
            <Title>
                <TitleHighlight bg={greenRectImg}>Full </TitleHighlight>&nbsp;Customizable
            </Title>
        ),
        body:
            "Webiny is open-source which allows you to modify, extend and adapt the system so it exactly fits your needs.",
        imgSrc: fullyCustomImg,
        imgAlt: "Full Customizable",
        backgroundColor: theme.color.secondaryDark,
        className: "card--second"
    },
    {
        id: 2,
        title: "Microservices architecture",
        renderTitle: () => (
            <Title>
                Microservices <TitleHighlight bg={orangeRectImg}>architecture</TitleHighlight>
            </Title>
        ),
        body:
            "Webiny is built as a set of microservices using serverless technologies. Infinitive scale, zero maintenance.",
        imgSrc: microserviceImg,
        imgAlt: "Microservices architecture",
        backgroundColor: theme.color.primaryDark,
        className: "card--third"
    },
    {
        id: 3,
        renderTitle: () => (
            <Title>
                Multi-channel <TitleHighlight bg={purpleRectImg}>distribution</TitleHighlight>
            </Title>
        ),
        body:
            "The beauty of using a headless CMS is that your content becomes device and channel agnostic.",
        imgSrc: multiChannelImg,
        imgAlt: "Multi-channel distribution",
        backgroundColor: theme.color.purple,
        className: "card--first"
    },

    {
        id: 4,
        renderTitle: () => (
            <Title>
                <TitleHighlight bg={greenRectImg}>Secure</TitleHighlight>
            </Title>
        ),
        body: "Issue API tokens for users to use inside 3rd party applications and services.",
        imgSrc: secureIconImg,
        imgAlt: "secure",
        backgroundColor: theme.color.secondaryDark,
        className: "card--second"
    },
    {
        id: 5,
        renderTitle: () => (
            <Title>
                Self-hosted <TitleHighlight bg={orangeRectImg}>serverless</TitleHighlight>
            </Title>
        ),
        body:
            "No need to make any tradeoffs between using a scalable SaaS solution, or using a customizable open-source solution. Webiny is best of both.",
        imgSrc: serverlessImg,
        imgAlt: "self-hosted serverless",
        backgroundColor: theme.color.primaryDark,
        className: "card--third"
    }
];
