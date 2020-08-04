import React from "react";
import cardPlaceholder from "./assets/nav-card-placeholder.png";

export const RESOURCES_CARDS = [
    {
        id: 0,
        title: "weekly updates july 24",
        imgSrc: cardPlaceholder,
        imgAlt: "",
        actionLabel: "read more",
        actionLink: "https://blog.webiny.com"
    },
    {
        id: 1,
        title: "weekly updates july 24",
        imgSrc: cardPlaceholder,
        imgAlt: "",
        actionLabel: "read more",
        actionLink: "https://blog.webiny.com"
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
            {
                id: 3,
                label: "Webiny Plugins",
                link: "plugins"
            },
            {
                id: 4,
                label: "Product Roadmap",
                link: "/roadmap"
            },
            {
                id: 5,
                label: "For Agencies",
                link: "/agency"
            },
            {
                id: 6,
                label: "For Enterprises",
                link: "/enterprise"
            }
        ]
    },
    secondarySection: {
        cards: RESOURCES_CARDS
    }
};

export const SOLUTIONS_MENU = {
    id: 1,
    label: "Solutions",
    link: "",
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
                link: "/use-case/serverless-applications"
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
        cards: RESOURCES_CARDS
    }
};

export const COMMUNITY_MENU = {
    id: 2,
    label: "Community",
    link: "",
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
                id: 3,
                label: "Blog",
                link: "https://blog.webiny.com"
            },
            {
                id: 4,
                label: "Events",
                link: "/events"
            }
        ]
    },
    secondarySection: {
        cards: RESOURCES_CARDS
    }
};

export const RESOURCES_MENU = {
    id: 3,
    label: "Resources",
    link: "",
    primarySection: {
        menuItems: [
            {
                id: 0,
                label: "Tutorials",
                link: "https://www.youtube.com/webiny"
            },
            {
                id: 1,
                label: "Guides",
                link: "https://docs.webiny.com/docs/guides/headless-react-tutorial"
            },
            {
                id: 2,
                label: "Blog",
                link: "https://blog.webiny.com/"
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
