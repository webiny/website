import React from "react";
import HeroSectionWithTiles from "./hero-section-with-tiles";

import { OrangeText } from "./hero-section-with-tiles.styled";

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
        buttonLabel: "GET STARTED",
        buttonLink: "/docs",
        price: "Free",
        benefits: [
            {
                benefitName: "Unlimited users",
                info: true,
                toolTipDecription: "No limit on number of users.",
            },
            {
                benefitName: "Unlimited API calls",
                info: true,
                toolTipDecription: "No limit on number of API calls.",
            },
            {
                benefitName: "MIT licence",
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
        buttonLabel: "Join the waiting list", // "Try it now for free",
        buttonLink: "https://docs.google.com/forms/d/1IRniZ3Qevx1LQkMEpOtdOdOLD-DLmMUdKn-_q1huNVs/",
        subtitle: "Launching soon", //"Free tier included",
        minUsers: 1,
        maxUsers: 100,
        optionalLabel: "OPTIONAL ADD-ONS",
        optional: [
            {
                optionalName: "Publishing workflow",
                toolTipDecription: "Get access to the Advanced Publishing Workflow application.",
            },
            {
                optionalName: "Advanced roles and permissions",
                toolTipDecription:
                    "Get access to advanced options to control user roles and permissions.",
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
                benefitName: "First 1M API calls p/month are",
                info: false,
                toolTipDecription:
                    "Every Webiny CMS Business instance has 1M API calls included in the free tier.",
            },
            /*
            {
                benefitName: "Advanced features",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            */
            {
                benefitName: "Webiny Control Panel",
                info: true,
                toolTipDecription: "Access to Webiny Control Panel is included in this tier.",
            },
            {
                benefitName: "Multi-tenancy",
                info: true,
                toolTipDecription:
                    "Access to multi-tenancy is included. There is no limits to the number or tenants or projects you can have.",
            },
        ],
    },
    dataRightTile: {
        title: "Enterprise",
        buttonLabel: "Contact Us",
        buttonLink: "/call/demo",
        price: "3,499",
        benefits: [
            {
                benefitName: "OKTA integration",
                info: true,
                toolTipDecription: "Customizable OKTA IdP integration.",
            },
            {
                benefitName: "Active Directory integration",
                info: true,
                toolTipDecription: "Customizable Active Directory IdP integration.",
            },
            {
                benefitName: "SLA Support",
                info: true,
                toolTipDecription: "Several different levels of SLA-support are available.",
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
                    "Get the professional assistance directly from the team that built Webiny.",
            },
        ],
    },
};

const HeroSectionPrices = () => {
    return <HeroSectionWithTiles heroSectionData={heroSectionData} />;
};
export default HeroSectionPrices;
