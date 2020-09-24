import selfHostedImg from "./assets/self-hosted.svg";
import easyDeploymentImg from "./assets/quick-easy.svg";
import zeroMaintenanceImg from "./assets/zero-maintenance.svg";
import costImg from "./assets/cost.svg";
import headlessCMSImg from "../headless-cms/assets/headless-cms-cover-graphql.png";
import pageBuilderImg from "../page-builder/assets/page-builder.png";
import formBuilderImg from "../form-builder/assets/form-builder.jpg";
import fileManagerImg from "../file-manager/assets/file-manager.jpg";
import highAvailabilityImg from "./assets/icon-aws.svg";
import durabilityImg from "./assets/icon-s3.svg";
import secureImg from "./assets/icon-cognito.svg";
import lambdaImg from "./assets/icon-lambda.svg";
import cdnImg from "./assets/icon-cloudfront.svg";
import ddosProtectionImg from "./assets/icon-api-gateway.svg";

export const FEATURES = [
    {
        id: 0,
        title: "Serverless and self-hosted",
        body: "Run the apps in your own cloud on top of the serverless infrastructure.",
        imageSrc: selfHostedImg,
        imageAlt: "Serverless and self-hosted",
        extraPadding: true,
    },
    {
        id: 1,
        title: "Quick and easy deployment",
        body:
            "Using Webiny CLI each app takes a single command to create and configure all of its serverless services.",
        imageSrc: easyDeploymentImg,
        imageAlt: "Quick and easy deployment",
    },
    {
        id: 2,
        title: "Requires zero maintenance",
        body:
            "Serverless infrastructure means zero maintenance and you can also forget about all the scalability headaches.",
        imageSrc: zeroMaintenanceImg,
        imageAlt: "Requires zero maintenance",
    },
    {
        id: 3,
        title: "Efficient infrastructure cost",
        body:
            "Because with serverless infrastructure you only pay for what you use, you'll have a very efficient way of controlling the cost of your infrastructure.",
        imageSrc: costImg,
        imageAlt: "Efficient infrastructure cost",
    },
];

export const APPS = [
    {
        id: 0,
        keyword: "Headless",
        title: "CMS",
        body: "GraphQL based headless CMS with powerful content modeling features.",
        imgSrc: headlessCMSImg,
        imgAlt: "Webiny headless cms app",
        actionLabel: "learn more",
        actionLink: "/serverless-app/headless-cms",
    },
    {
        id: 1,
        keyword: "Page",
        title: "Builder",
        body: "For when you need a quick landing page created without any coding.",
        imgSrc: pageBuilderImg,
        imgAlt: "Webiny page builder app",
        actionLabel: "learn more",
        actionLink: "/serverless-app/page-builder",
    },
    {
        id: 2,
        keyword: "Form",
        title: "Builder",
        body: "Create forms using a drag&drop interface and track how they convert.",
        imgSrc: formBuilderImg,
        imgAlt: "Webiny form builder app",
        actionLabel: "learn more",
        actionLink: "/serverless-app/form-builder",
    },
    {
        id: 3,
        keyword: "File",
        title: "Manager",
        body: "Upload, categorise, search and edit your files.",
        imgSrc: fileManagerImg,
        imgAlt: "Webiny file manager app",
        actionLabel: "learn more",
        actionLink: "/serverless-app/file-manager",
    },
];

export const BENEFITS = [
    {
        id: 0,
        title: "High-availability and fault tolerance built in",
        imgSrc: highAvailabilityImg,
        imgAlt: "High-availability and fault tolerance built in",
        borderBottom: true,
    },
    {
        id: 1,
        title: "99.999999999% (11 9’s) of data durability",
        imgSrc: durabilityImg,
        imgAlt: "99.999999999% (11 9’s) of data durability",
        borderLeft: true,
        borderRight: true,
        borderBottom: true,
    },
    {
        id: 2,
        title: "Enterprise-grade secure and scalable ACL",
        imgSrc: secureImg,
        imgAlt: "Enterprise-grade secure and scalable ACL",
        borderBottom: true,
    },
    {
        id: 3,
        title: "Event-driven scalability - pay for what you use",
        imgSrc: lambdaImg,
        imgAlt: "Event-driven scalability - pay for what you use",
    },
    {
        id: 4,
        title: "Great performance using a global CDN",
        imgSrc: cdnImg,
        imgAlt: "Great performance using a global CDN",
        borderLeft: true,
        borderRight: true,
    },
    {
        id: 5,
        title: "DDoS Protection of your APIs",
        imgSrc: ddosProtectionImg,
        imgAlt: "DDoS Protection of your APIs",
    },
];
