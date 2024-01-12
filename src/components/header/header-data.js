// tracking actions
import { trackGoToGithub, trackJoinSlack } from "../ui/functions";


// product icons
import HeadlessIcon from "./assets/headlessIcon.svg";
import FileManagerIcon from "./assets/fileManagerIcon.svg";
import PageBuilderIcon from "./assets/pageBuilderIcon.svg";
import ControlPanelIcon from "./assets/controlPanelIcon.svg";
import advancedPublishingIcon from "./assets/advancedPublishingIcon.svg";
import FormBuilderIcon from "./assets/formBuilderIcon.svg";
// feature icons
import MultiTenancyIcon from "./assets/multi-tenancy.svg";
import SelfHostedIcon from "./assets/self-hosted.svg";
import OpenSourceIcon from "./assets/open-source.svg";
import AWSInfraIcon from "./assets/aws-infra.svg";
import DevFrameworkIcon from "./assets/dev-framework.svg";
import CMSPlusIcon from "./assets/cms-plus.svg";

// developer icons
// ==> resources
import DocumentationIcon from "./assets/docs.svg";
import UserGuidesIcon from "./assets/user-guides.svg";
import TutorialsIcon from "./assets/tutorials.svg";
import DemoInstanceIcon from "./assets/demo-instance.svg";
import ContributeIcon from "./assets/contribute.svg";
import DevCommunityIcon from "./assets/dev-community.svg";
// ==> integrations
import NextJSIcon from "./assets/nextjs.svg";
import GatsbyIcon from "./assets/gatsby.svg";
import ReactIcon from "./assets/react.svg";
import VueIcon from "./assets/vue.svg";
import FlutterIcon from "./assets/flutter.svg";

// partnership icons
import PartnerOverviewIcon from "./assets/partner-overview.svg";
import FindPartnerIcon from "./assets/find-partner.svg";
import BecomePartnerIcon from "./assets/become-partner.svg";
import PartnerPortalIcon from "./assets/partner-portal.svg";

// resources
import EnterpriseIcon from "./assets/enterprise.svg";
import BlogIcon from "./assets/blog.svg";
import WhyWebinyIcon from './assets/why-webiny.svg';
import KnowledgeBaseIcon from './assets/knowledge-base.svg';
import SlsWhitepaperCover from './resource-cards/benefits-of-serverless-cms-whitepaper-cover.png';

export const WEBINY_MENU = {
    id: 0,
    label: "Why Webiny",
    link: "/why-webiny",
};

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
                text: "GraphQL-based Headless CMS",
                link: "/enterprise-serverless-cms/headless-cms",
                image: HeadlessIcon,
            },
            {
                id: 1,
                label: "Advanced Publishing Workflow",
                text: "Peer reviewed publishing process",
                link: "/enterprise-serverless-cms/advanced-publishing-workflow",
                image: advancedPublishingIcon,
            },
            {
                id: 2,
                label: "Page Builder",
                text: "No-code, drag&drop page builder",
                link: "/enterprise-serverless-cms/page-builder",
                image: PageBuilderIcon,
            },
            {
                id: 3,
                label: "Control Panel",
                text: "Site reliability and monitoring",
                link: "/docs/overview/applications/control-panel",
                image: ControlPanelIcon,
                isComingSoon: true,
            },
            {
                id: 4,
                label: "File Manager",
                text: "Serverless digital asset management",
                link: "/enterprise-serverless-cms/file-manager",
                image: FileManagerIcon,
            },
            {
                id: 5,
                label: "Form Builder",
                text: "No-code, drag&drop form builder",
                link: "/enterprise-serverless-cms/form-builder",
                image: FormBuilderIcon,
            },
        ],
    },
    secondarySection: {
        title: "FEATURES",
        menuItems: [
            {
                id: 0,
                label: "Multi-Tenancy",
                text: "One instance, many projects",
                link: " /features/multi-tenancy-site-management",
                image: MultiTenancyIcon,
            },
            {
                id: 1,
                label: "Self-Hosted",
                text: "Your data, your rules",
                link: "/features/self-hosted-headless-cms",
                image: SelfHostedIcon,
            },
            {
                id: 2,
                label: "Open-Source",
                text: "Customize, integrate, extend",
                link: "/features/open-source",
                image: OpenSourceIcon,
            },
            {
                id: 3,
                label: "AWS Serverless Infrastructure",
                text: "Highly scalable and cost efficient infrastructure",
                link: "/features/aws-serverless-infrastructure",
                image: AWSInfraIcon,
            },
            {
                id: 4,
                label: "Development Framework",
                text: "Develop new severless apps in less time",
                link: "/features/development-framework",
                image: DevFrameworkIcon
            },
            {
                id: 5,
                label: "CMS+",
                text: "It's more than just a CMS",
                link: "/features/cms-plus",
                image: CMSPlusIcon,
            },
        ],
    },
};

export const DEVELOPERS_MENU = {
    id: 2,
    label: "Developers",
    link: null,
    className: "one-row developers",
    primarySection: {
        title: "RESOURCES",
        menuItems: [
            {
                id: 0,
                label: "Documentation",
                text: "Developer docs, guides and references",
                link: "/docs",
                image: DocumentationIcon,
            },
            {
                id: 1,
                label: "User guides",
                text: "Step-by-step guides for how to use Webiny apps",
                link: "/docs/user-guides/overview",
                image: UserGuidesIcon,
            },
            {
                id: 2,
                label: "Tutorials",
                text: "Tutorials to get you started with Webiny",
                link: "/blog/?query=contributed%20articles",
                image: TutorialsIcon,
            },
            {
                id: 3,
                label: "Demo instance",
                text: "Have a look around Webiny without needing to install anything",
                link: "/signup/demo-request",
                image: DemoInstanceIcon,
            },
            {
                id: 4,
                label: "Contribute",
                text: "Want to contribute to Webiny? Here's how",
                link: "https://github.com/webiny/webiny-js/blob/next/docs/CONTRIBUTING.md",
                image: ContributeIcon,
            },
            {
                id: 5,
                label: "Developer community",
                text: "Join our community of over 2,500+ developers",
                link: "/slack",
                image: DevCommunityIcon,
            },
        ],
    },
    secondarySection: {
        title: "INTEGRATIONS",
        menuItems: [
            {
                id: 0,
                label: "Next.js",
                text: "Webiny + Next.js",
                link: "/integrations/nextjs-cms",
                image: NextJSIcon,
            },
            {
                id: 1,
                label: "Gatsby",
                text: "Webiny + Gatsby",
                link: "/integrations/gatsby-cms",
                image: GatsbyIcon,
            },
            {
                id: 2,
                label: "React",
                text: "Webiny + React",
                link: "/integrations/react-cms",
                image: ReactIcon,
            },
            {
                id: 3,
                label: "Vue",
                text: "Webiny + Vue",
                link: "/integrations/vuejs-cms",
                image: VueIcon,
            },
            {
                id: 4,
                label: "Flutter",
                text: "Webiny + Flutter",
                link: "/integrations/flutter-cms",
                image: FlutterIcon
            },
        ],
    },
};

export const PARTNERS_MENU = {
    id: 3,
    label: "Partners",
    className: "one-row partners",
    link: null,
    primarySection: {
        menuItems: [
            {
                id: 1,
                label: "Partner program overview",
                text: "Learn about Webiny's Partner program",
                link: "/partners",
                image: PartnerOverviewIcon,
            },
            {
                id: 2,
                label: "Find a Partner",
                text: "Need a skilled partner to help you with your project?",
                link: "/partners#our-partners",
                image: FindPartnerIcon,
            },
            {
                id: 3,
                label: "Become a Partner",
                text: "Apply to become a Webiny certified partner",
                link: "/forms/agency-partner-program",
                image: BecomePartnerIcon,
            },
            {
                id: 4,
                label: "Partner Portal",
                text: "Access your partner profile portal",
                link: "https://partners.webiny.com/",
                image: PartnerOverviewIcon,
            },
        ],
    }
};


export const PRICING_MENU = {
    id: 4,
    label: "Pricing",
    link: "/pricing",
};


export const RESOURCES_MENU = {
    id: 5,
    label: "Resources",
    className: "row-with-whitepaper",
    link: null,
    mainSection: {
        menuItems: [
            {
                id: 'resources-1',
                label: "Blog",
                link: "/blog",
                text: "Read the latest news and updates from Webiny",
                image: BlogIcon,
            },
            {
                id: 'resources-2',
                label: "Knowledge Base",
                link: "/knowledge-base",
                text: "Learn more about Webiny, our techology and case-studies",
                image: KnowledgeBaseIcon,
            },
            {
                id: 'resources-3',
                label: "Why Webiny",
                link: "/why-webiny",
                text: "Learn more about Webiny and why it's the right choice for your next project",
                image: WhyWebinyIcon,
            },
            {
                id: 'resources-4',
                label: "Enterprise",
                link: "/enterprise",
                text: "Learn more about Webiny Enterprise product offering",
                image: EnterpriseIcon,
            },
            
            
        ],
    },
    secondarySection:{
        menuItems: [
            {
                id: 0,
                label: "Business Value of a Serverless CMS",
                link: "/resources/benefits-of-a-serverless-cms",
                image: SlsWhitepaperCover,
            },
        ]
    }
};

export const DROPDOWN_MENUS = [
    //WEBINY_MENU,
    PRODUCTS_MENU,
    DEVELOPERS_MENU,    
    PARTNERS_MENU,
    PRICING_MENU,
    RESOURCES_MENU,
];
