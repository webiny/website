import usersRolesScopeImg from "./assets/roles-scopes.svg";
import scaffoldingImg from "./assets/scaffolding.svg";
import customSecurityImg from "./assets/security.svg";
import environmentsImg from "./assets/environments.svg";
import reactComponentsImg from "./assets/react-components.svg";
import appBundlingImg from "./assets/app-bundling.svg";
import infrastructureImg from "./assets/stacks.svg";
import graphqlImg from "./assets/graphql-playground.svg";
import darkModeImg from "./assets/dark-mode.svg";
import fileManagementImg from "./assets/file-management.svg";
import javascriptImg from "./assets/javascript.svg";
import availabilityScalabilityImg from "./assets/availability-scalablity.svg";
import learningCurve from "./assets/learning-curve.svg";
import librariesImg from "./assets/libraries.svg";
import organiseProject from "./assets/organise-project.svg";

export const FEATURES = [
    {
        id: 0,
        title: "Users, groups, roles & scopes",
        body:
            "Security is a crucial layer in any application. Webiny includes a full-featured security module that's connected to the built-in GraphQL API.",
        imageSrc: usersRolesScopeImg,
        imageAlt: "Users, groups, roles & scopes",
        borderBottom: true
    },
    {
        id: 1,
        title: "Scaffolding",
        body:
            "Quickly generate boilerplate code using CLI plugins. From lambda functions to new GraphQL APIs.",
        imageSrc: scaffoldingImg,
        imageAlt: "Scaffolding",
        borderLeft: true,
        borderRight: true,
        borderBottom: true
    },
    {
        id: 2,
        title: "Customizable security",
        body:
            "Use the default AWS Cognito, or replace with 3rd party identity providers like Okta, Auth0, etc. Using plugins you can make Webiny work with any identity provider.",
        imageSrc: customSecurityImg,
        imageAlt: "Customizable security",
        borderBottom: true
    },
    {
        id: 3,
        title: "Multiple environments",
        body:
            "No code change goes directly into a production environment. Webiny CLI makes it easy to manage and create multiple environments for your project.",
        imageSrc: environmentsImg,
        imageAlt: "Multiple environments",
        borderBottom: true
    },
    {
        id: 4,
        title: "React components",
        body:
            "Webiny Admin UI contains over 30 different React components. There is also an accompanied storybook with the documentation for each of them.",
        imageSrc: reactComponentsImg,
        imageAlt: "React components",
        borderLeft: true,
        borderRight: true,
        borderBottom: true
    },
    {
        id: 5,
        title: "Customizable app bundling",
        body:
            "Easily modify the way your React app is being built or use your own bundling process.",
        imageSrc: appBundlingImg,
        imageAlt: "Customizable app bundling",
        borderBottom: true
    },
    {
        id: 6,
        title: "Infrastructure stacks",
        body:
            "You're not limited to the default project setup. You can add as many stacks as necessary, and shape the project to your needs.",
        imageSrc: infrastructureImg,
        imageAlt: "Infrastructure stacks",
        borderBottom: true
    },
    {
        id: 7,
        title: "GraphQL playground",
        body:
            "If you open your GraphQL URL in your browser - Webiny will automatically load the GraphQL Playground apps, so you can test your API right there and then. It’s the small things.",
        imageSrc: graphqlImg,
        imageAlt: "GraphQL playground",
        borderLeft: true,
        borderRight: true,
        borderBottom: true
    },
    {
        id: 8,
        title: "Dark mode",
        body:
            "They say that there are no two eyes alike. Some prefer white, some black. Webiny Admin UI features a light and a dark mode, make your pick.",
        imageSrc: darkModeImg,
        imageAlt: "Dark mode",
        borderBottom: true
    },
    {
        id: 9,
        title: "File management",
        body:
            "Webiny comes with a built-in File Manager app and an image editor. Upload, categorize, search and edit your files with ease.",
        imageSrc: fileManagementImg,
        imageAlt: "File management",
        borderBottom: true
    },
    {
        id: 10,
        title: "100% Javascript",
        body:
            "One language is all you need to know, no matter if you’re coding a SPA or an API. Webiny uses React on the frontend and Node on the backend/API.",
        imageSrc: javascriptImg,
        imageAlt: "100% Javascript",
        borderLeft: true,
        borderRight: true,
        borderBottom: true
    },
    {
        id: 11,
        title: "High-availability & scalability",
        body:
            "Webiny is deployed to highly-available and scalable services within your AWS cloud. There is also DDoS protection, 11 9’s of data durability and a CDN that’s included.",
        imageSrc: availabilityScalabilityImg,
        imageAlt: "High-availability & scalability",
        borderBottom: true
    },
    {
        id: 12,
        title: "Flatten your learning curve",
        body:
            "Serverless is hard because it changes most of the things we know about building and architecting web applications. Webiny makes serverless easy by providing documentation, guides and tutorials. You have all the knowledge you need at your fingertip. Webiny will save you many hours of research and trial and error.",
        imageSrc: learningCurve,
        imageAlt: "Flatten your learning curve",
        borderBottom: false
    },
    {
        id: 13,
        title: "Libraries made for serverless environment",
        body:
            "Our plugin system, routing, file storage, db access, and server side render are just a small handful of things that we had to pioneer and create specifically for the serverless environment. They are all part of the package and using them you’ll avoid many of the serverless pitfalls. ",
        imageSrc: librariesImg,
        imageAlt: "Libraries made for serverless environment",
        borderLeft: true,
        borderRight: true,
        borderBottom: false
    },
    {
        id: 14,
        title: "Organise your project",
        body:
            "Organising a project is often an underestimated task. However getting it wrong can be quite expensive. Webiny provides you with a project organisation that grows with your need and it works great for both small and large projects. ",
        imageSrc: organiseProject,
        imageAlt: "Organise your project",
        borderBottom: false
    }
];
