import React from "react";

// resources
import imgWebinyPlugins from "./resource-cards/yt-webiny-plugins.jpg";
import imgApiDevelopment from "./resource-cards/yt-api-development.jpg";
// community
import imgContributingOverview from "./resource-cards/yt-contributing-overview.jpg";
import imgSwag from "./resource-cards/swag.jpg";
// solutions
import imgWebinyApps from "./resource-cards/yt-webiny-apps.jpg";
import imgWebinyApi from "./resource-cards/yt-webiny-api.jpg";
// product
import imgGetSTarted from "./resource-cards/yt-get-started.jpg";
import imgWhyWebiny from "./resource-cards/yt-why-webiny.jpg";

export const RESOURCES_CARDS = [
    {
        id: 0,
        title: "Webiny Plugins",
        imgSrc: imgWebinyPlugins,
        imgAlt: "Webiny Plugins",
        actionLabel: "learn more",
        actionLink: "https://www.youtube.com/watch?v=4qcDLzu8kVM",
        videoId: "4qcDLzu8kVM"
    },
    {
        id: 1,
        title: "API Development",
        imgSrc: imgApiDevelopment,
        imgAlt: "Webiny API Development",
        actionLabel: "learn more",
        actionLink: "https://www.youtube.com/watch?v=8aJ_Ja1aTy0",
        videoId: "8aJ_Ja1aTy0"
    }
];

export const COMMUNITY_CARDS = [
    {
        id: 0,
        title: "Contributor's overview",
        imgSrc: imgContributingOverview,
        imgAlt: "Development overview for contributors",
        actionLabel: "learn more",
        actionLink: "https://www.youtube.com/watch?v=3wlOrcdcxXs",
        videoId: "3wlOrcdcxXs"
    },
    {
        id: 1,
        title: "Get Webiny SWAG",
        imgSrc: imgSwag,
        imgAlt: "Webiny SWAG",
        actionLabel: "learn more",
        actionLink: "/swag"
    }
];

export const SOLUTIONS_CARDS = [
    {
        id: 0,
        title: "Webiny Serverless Apps",
        imgSrc: imgWebinyApps,
        imgAlt: "Webiny Serverless Apps",
        actionLabel: "learn more",
        actionLink: "https://www.youtube.com/watch?v=sF4HRS9nE3s",
        videoId: "sF4HRS9nE3s"
    },
    {
        id: 1,
        title: "Serverless GraphQL API",
        imgSrc: imgWebinyApi,
        imgAlt: "Webiny Serverless GraphQL API",
        actionLabel: "learn more",
        actionLink: "https://www.youtube.com/watch?v=x5lf5xqvOQ4",
        videoId: "x5lf5xqvOQ4"
    }
];

export const PRODUCT_CARDS = [
    {
        id: 0,
        title: "Get started",
        imgSrc: imgGetSTarted,
        imgAlt: "Webiny Get Started",
        actionLabel: "learn more",
        actionLink:
            "https://www.youtube.com/watch?v=G_du-yE_DL4&list=PL9HlKSQaEuXScbySDD7QgITEA8RCHp-IS",
        videoId: "G_du-yE_DL4"
    },
    {
        id: 1,
        title: "Why Webiny",
        imgSrc: imgWhyWebiny,
        imgAlt: "Why Webiny",
        actionLabel: "learn more",
        actionLink: "https://www.youtube.com/watch?v=odotdrOOvJE",
        videoId: "odotdrOOvJE"
    }
];

export const PRODUCTS_MENU = {
    id: 0,
    label: "Product",
    link: null,
    primarySection: {
        menuItems: [
            {
                id: 0,
                label: "Why Webiny?",
                link: "/why-webiny"
            },
            {
                id: 1,
                label: "Features",
                link: "/features"
            },
            {
                id: 11,
                renderItem: () => <div key={11} className="spacer" />
            },
            {
                id: 2,
                label: "Webiny Apps",
                link: "/serverless-apps"
            },
            /*
            {
                id: 3,
                label: "Webiny Plugins",
                link: "plugins"
            },
            */
            {
                id: 4,
                label: "Product Roadmap",
                link: "/roadmap"
            },
            {
                id: 5,
                label: "For Agencies",
                link: "/agency"
            }
            /*
            {
                id: 6,
                label: "For Enterprises",
                link: "/enterprise"
            }
            */
        ]
    },
    secondarySection: {
        cards: PRODUCT_CARDS
    }
};

export const SOLUTIONS_MENU = {
    id: 1,
    label: "Solutions",
    link: null,
    primarySection: {
        menuItems: [
            {
                id: 0,
                label: "Build Serverless Websites",
                link: "/use-case/serverless-websites"
            },
            {
                id: 1,
                label: "Build Serverless Apps",
                link: "/use-case/serverless-web-applications"
            },
            {
                id: 2,
                label: "Build Serverless APIs",
                link: "/use-case/serverless-graphql-api"
            },
            {
                id: 3,
                label: " Build Microservices",
                link: "/use-case/microservices"
            }
        ]
    },
    secondarySection: {
        cards: SOLUTIONS_CARDS
    }
};

export const COMMUNITY_MENU = {
    id: 2,
    label: "Community",
    link: null,
    primarySection: {
        menuItems: [
            {
                id: 0,
                label: "GitHub",
                link: "https://github.com/webiny/webiny-js"
            },
            {
                id: 1,
                label: "Forum",
                link: "https://community.webiny.com"
            },
            {
                id: 2,
                label: "Slack",
                link: "https://www.webiny.com/slack"
            },
            {
                id: 4,
                label: "Events",
                link: "/events"
            }
        ]
    },
    secondarySection: {
        cards: COMMUNITY_CARDS
    }
};

export const RESOURCES_MENU = {
    id: 3,
    label: "Resources",
    link: null,
    primarySection: {
        menuItems: [
            {
                id: 1,
                label: "Guides & Tutorials",
                link: "/guides-and-tutorials"
            },
            {
                id: 2,
                label: "Blog",
                link: "https://blog.webiny.com/"
            },
            {
                id: 3,
                label: "YouTube",
                link: "https://youtube.com/c/webiny"
            },
            {
                id: 0,
                label: "Documentation",
                link: "https://docs.webiny.com/docs/webiny/introduction/"
            }
        ]
    },
    secondarySection: {
        cards: RESOURCES_CARDS
    }
};

export const DROPDOWN_MENUS = [PRODUCTS_MENU, SOLUTIONS_MENU, COMMUNITY_MENU, RESOURCES_MENU];
