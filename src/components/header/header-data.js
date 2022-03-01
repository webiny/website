// tracking actions
import { trackGoToGithub, trackJoinSlack } from "../ui/functions";

// product icons
import HeadlessIcon from "./assets/headlessIcon.svg";
import FileManagerIcon from "./assets/fileManagerIcon.svg";
import PageBuilderIcon from "./assets/pageBuilderIcon.svg";
import ControlPanelIcon from "./assets/controlPanelIcon.svg";
import advancedPublishingIcon from "./assets/advancedPublishingIcon.svg";
import TenantManagerIcon from "./assets/tenantManagerIcon.svg";
import FormBuilderIcon from "./assets/formBuilderIcon.svg";
// resources
import SlackIcon from "./assets/slackIcon.svg";
import GitHubIcon from "./assets/gitHubIcon.svg";
import BlogIcon from "./assets/blogIcon.svg";
import MeetupIcon from "./assets/meetupIcon.svg";

export const WEBINY_MENU = {
    id: 0,
    label: "Why Webiny",
    link: "https://www.webiny.com/why-webiny/",
};

export const PRODUCTS_MENU = {
    id: 1,
    label: "Product",
    link: null,
    className: "one-row",
    primarySection: {
        title: "FEATURES",
        menuItems: [
            {
                id: 0,
                index: 0,
                label: "Headless CMS",
                text: "Lorem ipsum dolor sit amet nulleralum",
                link: "/headless-cms",
                image: HeadlessIcon,
            },
            {
                id: 4,
                index: 1,
                label: "File Manager",
                text: "Lorem ipsum dolor sit amet nulleralum",
                link: "/file-manager",
                image: FileManagerIcon,
            },
            {
                id: 1,
                index: 2,
                label: "Page Builder",
                text: "Lorem ipsum dolor sit amet nulleralum",
                link: "/page-builder",
                image: PageBuilderIcon,
            },
            {
                id: 5,
                index: 3,
                label: "Control Panel",
                text: "Lorem ipsum dolor sit amet nulleralum",
                link: "/control-panel",
                image: ControlPanelIcon,
                isComingSoon: true,
            },
            {
                id: 2,
                index: 4,
                label: "Advanced Publishing Workflow",
                text: "Lorem ipsum dolor sit amet nulleralum",
                link: "/advanced-publishing-workflow",
                image: advancedPublishingIcon,
                isComingSoon: true,
            },
            {
                id: 6,
                index: 5,
                label: "Tenant Manager",
                text: "Lorem ipsum dolor sit amet nulleralum",
                link: "/tenant-manager",
                image: TenantManagerIcon,
            },
            {
                id: 3,
                index: 6,
                label: "Form Builder",
                text: "Lorem ipsum dolor sit amet nulleralum",
                link: "/form-builder",
                image: FormBuilderIcon,
            },
        ],
    },
    secondarySection: {},
};

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
                link: "/",
                image: MeetupIcon,
            },
        ],
    },
    secondarySection: {
        title: "FROM THE BLOG",
    },
};

export const DROPDOWN_MENUS = [
    WEBINY_MENU,
    PRODUCTS_MENU,
    PRICING_MENU,
    DOCUMENTATION_MENU,
    RESOURCES_MENU,
];
