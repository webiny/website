// tracking actions
import { trackGoToGithub, trackJoinSlack } from "../ui/functions";

// product icons
import HeadlessIcon from "./assets/headlessIcon.svg";
import FileManagerIcon from "./assets/fileManagerIcon.svg";
import PageBuilderIcon from "./assets/pageBuilderIcon.svg";
import ControlPanelIcon from "./assets/controlPanelIcon.svg";
import advancedPublishingIcon from "./assets/advancedPublishingIcon.svg";
import FormBuilderIcon from "./assets/formBuilderIcon.svg";
// resources
import SlackIcon from "./assets/slackIcon.svg";
import GitHubIcon from "./assets/gitHubIcon.svg";
import BlogIcon from "./assets/blogIcon.svg";
import MeetupIcon from "./assets/meetupIcon.svg";

export const WEBINY_MENU = {
    id: 0,
    label: "BACK TO HOMEPAGE",
    link: "/",
};

export const PRODUCTS_MENU = {};
/*
export const PRODUCTS_MENU = {
    id: 1,
    label: "Product",
    link: null,
    className: "one-row",
    primarySection: {
        title: "APPLICATIONS",
        menuItems: [
            {
                id: 0,
                label: "Headless CMS",
                text: "GraphQL-based Headless CMS.",
                link: "/enterprise-serverless-cms/headless-cms",
                image: HeadlessIcon,
            },
            {
                id: 2,
                label: "Advanced Publishing Workflow",
                text: "Peer reviewed publishing process.",
                link: "/docs/overview/applications/apw",
                image: advancedPublishingIcon,
                isComingSoon: true,
            },
            {
                id: 1,
                label: "Page Builder",
                text: "No-code, drag&drop page builder.",
                link: "/enterprise-serverless-cms/page-builder",
                image: PageBuilderIcon,
            },
            {
                id: 5,
                label: "Control Panel",
                text: "Site reliability and monitoring.",
                link: "/docs/overview/applications/control-panel",
                image: ControlPanelIcon,
                isComingSoon: true,
            },
            {
                id: 4,
                label: "File Manager",
                text: "Serverless digital asset management.",
                link: "/enterprise-serverless-cms/file-manager",
                image: FileManagerIcon,
            },
            {
                id: 3,
                label: "Form Builder",
                text: "No-code, drag&drop form builder.",
                link: "/enterprise-serverless-cms/form-builder",
                image: FormBuilderIcon,
            },
        ],
    },
    secondarySection: {},
};
*/

export const PRICING_MENU = {
    id: 2,
    label: "Pricing",
    link: "/pricing",
};

export const DOCUMENTATION_MENU = {
    id: 3,
    label: "Documentation",
    link: "/docs/webiny/introduction/",
};

/*
export const RESOURCES_MENU = {
    id: 4,
    label: "Resources",
    className: "two-rows",
    link: null,
    mainSection: {
        title: "RESOURCES",
        menuItems: [
            {
                id: 0,
                label: "Slack",
                link: "https://www.webiny.com/slack",
                action: () => {
                    trackJoinSlack({ placement: "main-menu" });
                },
                image: SlackIcon,
            },
            {
                id: 1,
                label: "GitHub",
                link: "https://github.com/webiny/webiny-js",
                action: () => {
                    trackGoToGithub({ placement: "main-menu" });
                },
                image: GitHubIcon,
            },
            {
                id: 2,
                label: "Blog",
                link: "/blog",
                image: BlogIcon,
            },
            {
                id: 3,
                label: "Meetup",
                link: "https://www.meetup.com/webiny/",
                image: MeetupIcon,
            },
        ],
    },
    secondarySection: {
        title: "FROM THE BLOG",
    },
};
*/
export const DROPDOWN_MENUS = [
    WEBINY_MENU,
    //PRODUCTS_MENU,
    //PRICING_MENU,
    //DOCUMENTATION_MENU,
    //RESOURCES_MENU,
];
