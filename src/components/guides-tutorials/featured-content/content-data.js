// assets - author profiles
import Emil from "./assets/authors/emilkais.png";
import Adrian from "./assets/authors/adrian.png";
import Pavel from "./assets/authors/pavel.png";
import Albiona from "./assets/authors/albiona.png";
import Ashu from "./assets/authors/ashu.jpg";

// assets - cover images
// import awsCredentials from "./assets/covers/aws-credentials.jpg"
import deploymentMechanism from "./assets/covers/deploymentMechanism.jpg";
import getStarted from "./assets/covers/get-started.jpg";
import commodo from "./assets/covers/commodo.jpg";
import practicalExamplesPlugins from "./assets/covers/practical-examples-plugins.png";
import webinyPlugins from "./assets/covers/webiny-plugins.png";
import spaWebiny from "./assets/covers/spa-webiny.png";
import appDevelopment from "./assets/covers/app-development.png";
import apiDev from "./assets/covers/api-dev.png";
import scaffolding from "./assets/covers/scaffolding.png";
import development from "./assets/covers/development.png";
import arch from "./assets/covers/arch.png";
import pluginsCrashcourse from "./assets/covers/plugins-crashcourse.png";
import cliPlugin from "./assets/covers/cli-plugin.png";
import scaffolding2 from "./assets/covers/scaffolding2.png";

// assets - cover images - guides
import headlessGatsby from "./assets/covers/headless-gatsby.png";
// import headlessNextjs from './assets/covers/headless-next.png'
// import headlessReact from './assets/covers/headless-react.png'
import headlessReactNative from "./assets/covers/headless-reactnative.png";
// import headlessAngular from './assets/covers/headless-angular.png'
import customPageElements from "./assets/covers/custom-page-elements.png";
// import headlessVue from './assets/covers/headless-vue.png'

// assets - cover - tutorials
import reactStarter from "./assets/covers/tutorial-react.png";
import serverlessApi from "./assets/covers/serverless-api.png";

export const REQUEST_TUTORIAL_LINK =
    "https://github.com/webiny/community/issues/new?assignees=&labels=&template=submit-a-request-for-a-tutorial-guide.md&title=%5BTOPIC%5D";

export const SUBMIT_TUTORIAL_LINK =
    "https://github.com/webiny/community/issues/new?assignees=&labels=&template=submit-a-tutorial-guide.md&title=%5BSUBMIT%5D";

export const AUTHOR_NAMES = {
    Adrian: "Adrian Smijulj",
    Pavel: "Pavel Denisjuk",
    Albiona: "Albiona Hoti",
    Emil: "Emil Kais",
    Ashu: "Ashutosh Bhardwaj",
    Sven: "Sven Al Hamad",
};
export const TUTORIALS = [
    {
        id: 0,
        imgSrc: getStarted,
        imgAlt: "Emil",
        authorImgSrc: Emil,
        authorName: AUTHOR_NAMES.Emil,
        title: "Get Started With Webiny",
        tags: ["YouTube", "Serverless"],
        // bannerText: "Official Tutorial",
        description:
            "This is a quick start guide that should help you setup Webiny as fast as possible.",
        link: "https://youtu.be/G_du-yE_DL4",
    },
    {
        id: 3,
        imgSrc: apiDev,
        imgAlt: "API Development With Webiny",
        authorImgSrc: Adrian,
        authorName: AUTHOR_NAMES.Adrian,
        title: "API Development With Webiny",
        tags: ["YouTube", "APIs"],
        description:
            "A secure GraphQL API layer powered by Apollo Federation with a microservices architecture.",
        // bannerText: "Official tutorial",
        link: "https://youtu.be/8aJ_Ja1aTy0",
    },
    {
        id: 5,
        imgSrc: headlessReactNative,
        imgAlt: "Headless React Native",
        authorImgSrc: Ashu,
        authorName: AUTHOR_NAMES.Ashu,
        title: "Creating a React Native app with Headless CMS",
        tags: ["Headless CMS", "React Native"],
        description: "Learn how to use the popular React Native with the Webiny Headless CMS.",
        // bannerText: "Official tutorial",
        link: "http://docs.webiny.com/docs/guides/headless-react-native-tutorial",
    },
    {
        id: 3,
        imgSrc: webinyPlugins,
        imgAlt: "Webiny Plugins",
        authorImgSrc: Pavel,
        authorName: AUTHOR_NAMES.Pavel,
        title: "Webiny Plugins",
        tags: ["YouTube", "Plugins"],
        description:
            "We'll look at three main groups of plugins: CLI plugins, API plugins, App plugins",
        // bannerText: "Official tutorial",
        link: "https://youtu.be/NGoZ3TDTYus",
    },
    {
        id: 3,
        imgSrc: appDevelopment,
        imgAlt: "APP Development With Webiny",
        authorImgSrc: Pavel,
        authorName: AUTHOR_NAMES.Pavel,
        title: "APP Development With Webiny",
        tags: ["YouTube", "Apps"],
        description: "The mechanics of app development with Webiny",
        // bannerText: "Official tutorial",
        link: "https://youtu.be/EQxNsDSdpsQ",
    },
    {
        id: 4,
        imgSrc: headlessGatsby,
        imgAlt: "Creating a blog with Headless CMS + Gatsby",
        authorImgSrc: Ashu,
        authorName: AUTHOR_NAMES.Ashu,
        title: "Creating a blog with Headless CMS + Gatsby",
        tags: ["Headless CMS", "Gatsby"],
        description: "Learn how to use Gatsby with the Webiny Headless CMS.",
        // bannerText: "Official tutorial",
        link: "http://docs.webiny.com/docs/guides/headless-gatsby-tutorial",
    },
    {
        id: 1,
        imgSrc: deploymentMechanism,
        imgAlt: "Deployment Mechanism",
        authorImgSrc: Pavel,
        authorName: AUTHOR_NAMES.Pavel,
        title: "Webiny Deployment Mechanism",
        tags: ["Deployment", "YouTube"],
        // bannerText: "Official tutorial",
        description:
            "Learn how the default deployment process works and what plugins take part in it.",
        link: "https://youtu.be/A7nGeJe6kPo",
    },
    {
        id: 3,
        imgSrc: practicalExamplesPlugins,
        imgAlt: "Webiny Practical Plugins",
        authorImgSrc: Adrian,
        authorName: AUTHOR_NAMES.Adrian,
        title: "Webiny Plugins - Practical Examples",
        tags: ["Plugins", "Examples"],
        description: "Demonstration of how plugins are actually used in your everyday development.",
        // bannerText: "Official tutorial",
        link: "https://youtu.be/NGoZ3TDTYus",
    },
    {
        id: 2,
        imgSrc: scaffolding2,
        imgAlt: "Creating a Scaffolding Plugin",
        authorImgSrc: Pavel,
        authorName: AUTHOR_NAMES.Pavel,
        title: "Creating a Scaffolding Plugin",
        description: "You will learn how to create a plugin which generates a folder for you.",
        tags: ["Scaffolding", "Plugin"],
        // bannerText: "Official tutorial",
        link: "http://docs.webiny.com/docs/deep-dive/cli/creating-a-scaffold-plugin/",
    },
    {
        id: 3,
        imgSrc: customPageElements,
        imgAlt: "Creating Custom Page Elements",
        authorImgSrc: Albiona,
        authorName: AUTHOR_NAMES.Albiona,
        title: "Creating Custom Page Elements",
        tags: ["Page Builder", "Plugins"],
        description: "Create a custom page element for the Page Builder app.",
        // bannerText: "Official tutorial",
        link: "http://docs.webiny.com/docs/guides/creating-iframe-element-plugin",
    },
    {
        id: 3,
        imgSrc: spaWebiny,
        imgAlt: "Single Page Applications with Webiny",
        authorImgSrc: Adrian,
        authorName: AUTHOR_NAMES.Adrian,
        title: "Single Page Applications with Webiny",
        tags: ["YouTube", "SPAs"],
        description: "Learn how Webiny enables us to create Single Page Applications (SPAs).",
        // bannerText: "Official tutorial",
        link: "https://youtu.be/Mi0YO7eZZ5M",
    },
    {
        id: 3,
        imgSrc: reactStarter,
        imgAlt: "Build a Portfolio Website with React, Webiny, and Apollo",
        authorImgSrc: Albiona,
        authorName: AUTHOR_NAMES.Albiona,
        title: "Build a Portfolio Website with React, Webiny, and Apollo",
        tags: ["React", "Starter", "Tutorial"],
        description: "Build a portfolio website to showcase your projects and your blogs.",
        // bannerText: "Official tutorial",
        link:
            "http://docs.webiny.com/docs/tutorials/build-a-portfolio-website-with-react-webiny-apollo",
    },
    {
        id: 2,
        imgSrc: commodo,
        imgAlt: "",
        authorImgSrc: Adrian,
        authorName: AUTHOR_NAMES.Adrian,
        title: "Commodo Series",
        description:
            "Commodo is a library of higher-order functions that let you define and compose rich data models.",
        tags: ["Commodo", "ODM"],
        // bannerText: "Official tutorial",
        link: "https://youtu.be/i9xRDdqCzjk",
    },
    {
        id: 2,
        imgSrc: cliPlugin,
        imgAlt: "Creating a CLI Plugin",
        authorImgSrc: Pavel,
        authorName: AUTHOR_NAMES.Pavel,
        title: "Creating a CLI Plugin",
        description:
            "You will learn how to create a very basic CLI plugin to become familiar with how the CLI works.",
        tags: ["CLI", "Plugin"],
        // bannerText: "Official tutorial",
        link: "http://docs.webiny.com/docs/deep-dive/cli/creating-a-cli-plugin/",
    },
    {
        id: 2,
        imgSrc: serverlessApi,
        imgAlt: "Build Your Serverless GraphQL API with Webiny",
        authorImgSrc: Albiona,
        authorName: AUTHOR_NAMES.Albiona,
        title: "Build Your Serverless GraphQL API with Webiny",
        description: "You will use the GraphQL Apollo service scaffold to create your API service.",
        tags: ["Serverless", "API", "Tutorial"],
        // bannerText: "Official tutorial",
        link: "http://docs.webiny.com/docs/tutorials/build-your-serverless-graphql-api-webiny",
    },
    {
        id: 2,
        imgSrc: scaffolding,
        imgAlt: "Scaffolding",
        authorImgSrc: Adrian,
        authorName: AUTHOR_NAMES.Adrian,
        title: "Scaffolding",
        description: "With Webiny scaffolds you can significantly speed up your development.",
        tags: ["Scaffolding", "YouTube"],
        // bannerText: "Official tutorial",
        link: "https://www.youtube.com/watch?v=SgfWQG8YirU&t=3s",
    },
    {
        id: 2,
        imgSrc: development,
        imgAlt: "Development Principles",
        authorImgSrc: Pavel,
        authorName: AUTHOR_NAMES.Pavel,
        title: "Development Principles",
        description:
            "Webiny is built using a simple system of plugins. This applies to both React apps and the API. ",
        tags: ["Plugins", "Tutorial"],
        // bannerText: "Official tutorial",
        link: "http://docs.webiny.com/docs/get-started/development-principles/",
    },
    {
        id: 2,
        imgSrc: arch,
        imgAlt: "Webiny Architecture",
        authorImgSrc: Adrian,
        authorName: AUTHOR_NAMES.Adrian,
        title: "Webiny Architecture",
        description:
            "In this section you will learn the basic flows and components involved in Webiny Architecture",
        tags: ["Architecture", "Tutorial"],
        // bannerText: "Official tutorial",
        link: "http://docs.webiny.com/docs/deep-dive/architecture/overview",
    },
    {
        id: 2,
        imgSrc: pluginsCrashcourse,
        imgAlt: "Plugins Crash Course",
        authorImgSrc: Pavel,
        authorName: AUTHOR_NAMES.Pavel,
        title: "Plugins Crash Course",
        description: "Learn how everything in Webiny is built using plugins.",
        tags: ["Plugins", "Tutorial"],
        // bannerText: "Official tutorial",
        link: "http://docs.webiny.com/docs/deep-dive/plugins-crash-course/",
    },
    // {
    //     id: 4,
    //     imgSrc: headlessNextjs,
    //     imgAlt: "Creating a blog with Headless CMS + Next.js",
    //     authorImgSrc: Ashu,
    //     authorName: AUTHOR_NAMES.Ashu,
    //     title: "Creating a blog with Headless CMS + Next.js",
    //     tags: ["Headless CMS", "Next.js"],
    //     description: "Learn how to use the popular Next.js React framework with the Webiny Headless CMS.",
    //     // bannerText: "Official tutorial",
    //     link: "http://docs.webiny.com/docs/guides/headless-nextjs-tutorial"
    // },
    // {
    //     id: 4,
    //     imgSrc: headlessReact,
    //     imgAlt: "Creating a blog with Headless CMS + React",
    //     authorImgSrc: Emil,
    //     authorName: AUTHOR_NAMES.Emil,
    //     title: "Creating a blog with Headless CMS + React",
    //     tags: ["Headless CMS", "Next.js"],
    //     description: "Learn how to integrate React and Apollo Client with our Headless CMS to create an e-library.",
    //     // bannerText: "Official tutorial",
    //     link: "http://docs.webiny.com/docs/guides/headless-react-tutorial"
    // },
    // {
    //     id: 5,
    //     imgSrc: headlessVue,
    //     imgAlt: "Creating a blog with Headless CMS + Vue.js",
    //     authorImgSrc: Ashu,
    //     authorName: AUTHOR_NAMES.Ashu,
    //     title: "Creating a blog with Headless CMS + Vue.js",
    //     tags: ["Headless CMS", "Vue.js"],
    //     description: "Learn how to use the popular Vue.js Framework with the Webiny Headless CMS.",
    //     // bannerText: "Official tutorial",
    //     link: "http://docs.webiny.com/docs/guides/headless-vuejs-tutorial"
    // },
    // {
    //     id: 5,
    //     imgSrc: headlessAngular,
    //     imgAlt: "Headless Angular",
    //     authorImgSrc: Albiona,
    //     authorName: AUTHOR_NAMES.Albiona,
    //     title: "Creating a blog with Headless CMS + Angular",
    //     tags: ["Headless CMS", "Angular"],
    //     description: "Learn how to use the popular Angular with the Webiny Headless CMS.",
    //     // bannerText: "Official tutorial",
    //     link: "http://docs.webiny.com/docs/guides/headless-angular-tutorial"
    // },
];

export const SORT_OPTIONS = [
    {
        id: -1,
        label: "Sort by",
        value: "",
    },
    {
        id: 0,
        label: "Latest tutorials",
        value: "latest",
    },
    {
        id: 1,
        label: "Most requested",
        value: "most_requested",
    },
];
