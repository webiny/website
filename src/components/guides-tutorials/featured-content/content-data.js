// assets - author profiles
import emilKaisProfile from "./assets/authors/emilkais.png"
import Adrian from "./assets/authors/adrian.png"
import Pavel from "./assets/authors/pavel.png"

// assets - cover images
import awsCredentials from "./assets/covers/aws-credentials.jpg";
import deploymentMechanism from "./assets/covers/deploymentMechanism.jpg";
import getStarted from "./assets/covers/get-started.jpg"
import commodo from "./assets/covers/commodo.jpg";
import webinyPluginsPractical from "./assets/covers/plugins-practical.jpg";

export const REQUEST_TUTORIAL_LINK =
    "https://github.com/webiny/community/issues/new?assignees=&labels=&template=submit-a-request-for-a-tutorial-guide.md&title=%5BTOPIC%5D";

export const SUBMIT_TUTORIAL_LINK =
    "https://github.com/webiny/community/issues/new?assignees=&labels=&template=submit-a-tutorial-guide.md&title=%5BSUBMIT%5D";

export const TUTORIALS = [
    {
        id: 0,
        imgSrc: getStarted,
        imgAlt: "Emil",
        authorImgSrc: emilKaisProfile,
        authorName: "Emil Kais",
        title: "Get Started With Webiny",
        tags: ["Webiny", "Serverless", "Framework"],
        // bannerText: "Official tutorial",
        link: "https://youtu.be/G_du-yE_DL4"
    },
    {
        id: 0,
        imgSrc: commodo,
        imgAlt: "",
        authorImgSrc: Adrian,
        authorName: "Adrian Smijulj",
        title: "Commodo Series",
        description: "Define and compose your rich data models with Commodo.",
        tags: ["Commodo", "ODM"],
        // bannerText: "Official tutorial",
        link: "https://youtu.be/i9xRDdqCzjk"
    },
    {
        id: 0,
        imgSrc: deploymentMechanism,
        imgAlt: "Deployment Mechanism",
        authorImgSrc: Pavel,
        authorName: "Pavel Denisjuk",
        title: "Webiny Deployment Mechanism",
        tags: ["Deployment", "Webiny"],
        // bannerText: "Official tutorial",
        link: "https://youtu.be/A7nGeJe6kPo"
    },
    {
        id: 0,
        imgSrc: webinyPluginsPractical,
        imgAlt: "Webiny Plugins",
        authorImgSrc: Adrian,
        authorName: "Adrian Smijulj",
        title: "Webiny Plugins - Practical Examples",
        tags: ["Plugins", "Examples"],
        // bannerText: "Official tutorial",
        link: "https://youtu.be/NGoZ3TDTYus"
    },
];

export const SORT_OPTIONS = [
    {
        id: -1,
        label: "Sort by",
        value: ""
    },
    {
        id: 0,
        label: "Latest tutorials",
        value: "latest"
    },
    {
        id: 1,
        label: "Most requested",
        value: "most_requested"
    }
];
