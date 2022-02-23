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
        buttonLink: "/",
        price: "Free",
        benefits: [
            {
                benefitName: "Unlimited users",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "Unlimited API calls",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "MIT licence",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "Headless CMS + Page Builder",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "Community support ",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
        ],
    },

    dataMainTile: {
        title: "Business",
        buttonLabel: "Try it now for free",
        buttonLink: "/",
        subtitle: "Free tier included",
        minUsers: 1,
        maxUsers: 100,
        optionalLabel: "OPTIONAL ADD-ONS",
        optional: [
            {
                optionalName: "Publishing workflow",
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                optionalName: "Advanced roles and permissions",
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
        ],

        benefits: [
            {
                benefitName: "First user is",
                info: false,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "First 1M API calls p/month are",
                info: false,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "Advanced features",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "Webiny Control Panel",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "Multitenancy",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
        ],
    },
    dataRightTile: {
        title: "Enterprise",
        buttonLabel: "Contact Us",
        buttonLink: "/",
        price: "1,999",
        benefits: [
            {
                benefitName: "OKTA integration",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "Active Directory integration",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "SLA Support",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "Infinite customisation capabilities",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
            {
                benefitName: "Consultancy services",
                info: true,
                toolTipDecription:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi proin neque eu, pharetra ultricies.",
            },
        ],
    },
};

const HeroSectionPrices = () => {
    return <HeroSectionWithTiles heroSectionData={heroSectionData} />;
};
export default HeroSectionPrices;
