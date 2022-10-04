import React from "react";
import HeroSectionWithTiles from "./hero-section-with-tiles";
import { OrangeText } from "./hero-section-with-tiles.styled";
import links from "../links";

const heroSectionData = {
    title: (
        <>
            <OrangeText>Start free </OrangeText> & Pay only <br />
            for what you use
        </>
    ),
    subTitle: "Transparent fees, no contracts or long term commitments.",
    dataLeftTile: {
        title: "Open Source",
        subTitle: "For personal or hobby projects",
        buttonLabel: "GET STARTED",
        buttonLink: links.openSource,
        price: "Free",
        benefits: [
            {
                benefitName: "Unlimited users",
                info: true,
                toolTipDecription: "No need to upgrade to a paid plan if you need more users.",
            },
            {
                benefitName: "Basic roles & permissions",
                info: true,
                toolTipDecription:
                    "Users either have full access or no access to a particular application.",
            },
            {
                benefitName: "MIT license",
                info: true,
                toolTipDecription:
                    "Webiny Open Source edition is licensed under the standard MIT license. For more details, checkout our GitHub.",
            },
            {
                benefitName: "Headless CMS + Page Builder",
                info: true,
                toolTipDecription:
                    "Webiny Open Source includes Headless CMS, Page Builder, Form Builder and File Manager.",
            },
            {
                benefitName: "Community support ",
                info: true,
                toolTipDecription: "Join our slack community of over 1,200 developers.",
            },
        ],
    },

    dataMainTile: {
        title: "Business",
        subTitle: "For small team projects",
        buttonLabel: "Join the waiting list", // "Try it now for free",
        buttonLink: links.business,
        label: "Launching soon", //"Free tier included",
        minUsers: 1,
        maxUsers: 100,
        optionalLabel: "OPTIONAL ADD-ONS",
        optional: [
            {
                optionalName: "Publishing workflow",
                toolTipDecription:
                    "Enforce content changes to go through approval processes before being published.",
            },
            {
                optionalName: "Headless Pages",
                toolTipDecription:
                    "An evolution of managing and structuring content in a headless way. ",
            },
        ],

        benefits: [
            {
                benefitName: "First user is",
                info: false,
                toolTipDecription:
                    "Every Webiny CMS Business instance has 1 user included in the free tier.",
            },
            {
                benefitName: "Webiny Control Panel",
                info: true,
                toolTipDecription:
                    "Unlocks performance and cost monitoring, deployment logs, and alerting features.",
            },
            {
                benefitName: "Multi-tenancy",
                info: true,
                toolTipDecription:
                    "Unlocks the ability to have an unlimited number of tenants or projects on your Webiny instance",
            },
            {
                benefitName: "Advanced roles & permissions without team management",
                info: true,
                toolTipDecription:
                "Associate a single role containing a set of fine-grain pemissions to an individual user. You can have one role per user.",
            },
        ],
    },
    dataRightTile: {
        title: "Enterprise",
        subTitle: "For teams working on critical projects",
        buttonLabel: "Contact Us",
        buttonLink: links.enterprise,
        price: "3,499",
        benefits: [
            {
                benefitName: "OKTA, Auth0 integration",
                info: true,
                toolTipDecription:
                    "Built-in customizable integration for OKTA and Auth0 IdP. ",
            },
            {
                benefitName: "Custom SSO implementation",
                info: true,
                toolTipDecription: "Enterprise customers can bring in any other SSO into Webiny where our core development team will support you in building the integration.",
            },
            {
                benefitName: "Advanced roles & permissions with team management",
                info: true,
                toolTipDecription:
                "Users are managed inside teams which have one or more roles associated.",
            },
            {
                benefitName: "SLA Support",
                info: true,
                toolTipDecription: "Custom levels of SLA support aligned with your project needs.",
            },
            {
                benefitName: "Infinite customization capabilities",
                info: true,
                toolTipDecription:
                    "You have full access to the source code and can make any changes you wish.",
            },
            {
                benefitName: "Consultancy services",
                info: true,
                toolTipDecription:
                    "Get the professional assistance directly from the team that built Webiny. Enterprise package includes 10h as standard, more can be purchased on request.",
            },
        ],
    },
};

const HeroSectionPrices = () => {
    return <HeroSectionWithTiles heroSectionData={heroSectionData} />;
};
export default HeroSectionPrices;
