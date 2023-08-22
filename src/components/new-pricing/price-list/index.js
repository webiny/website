import React, { useState, useEffect } from "react";
import styled from "react-emotion";
import { css } from "emotion";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Desktop from "./price-list-desktop";
import Mobile from "./price-list-mobile";
import Button from "../../ui/button";

function useWindowWidth() {
    const [width, setWidth] = useState();

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

const priceList = [
    {
        label: "Hosting",
        values: [
            {
                label: "Self-hosted on AWS Cloud",
                open_source: true,
                business: true,
                enterprise: true,
            },
            {
                label: "Data stays within your control",
                open_source: true,
                business: true,
                enterprise: true,
            },
            {
                label: "Ability to modify and extend the source code",
                open_source: true,
                business: true,
                enterprise: true,
            },
            {
                label: "Infrastructure management",
                open_source: "Managed by you",
                business: "Managed by you",
                enterprise: "We help you manage",
            },
        ],
    },
    {
        label: "Pricing",
        values: [
            {
                label: "Number of users",
                open_source: "Unlimited",
                business: { title: "First user free", text: "Then $9 per user per month. Max 100 users." },
                enterprise: "Volume-based pricing on request",
            },
            {
                label: "Number of API calls",
                open_source: "Unlimited",
                business: "Unlimited",
                enterprise: "Unlimited",
            },
        ],
    },
    {
        label: "Applications",
        values: [
            {
                label: "Headless CMS",
                open_source: true,
                business: true,
                enterprise: true,
            },
            {
                label: "Page Builder",
                open_source: true,
                business: true,
                enterprise: true,
            },
            {
                label: "Form Builder",
                open_source: true,
                business: true,
                enterprise: true,
            },
            {
                label: "File Manager",
                open_source: true,
                business: true,
                enterprise: true,
            },
            {
                label: "Advanced publishing workflow",
                open_source: false,
                business: { title: "Optional Add-on", text: "$9/user/mo" },
                enterprise: true,
            },
            {
                label: "Headless Pages",
                open_source: false,
                business: { title: "Optional Add-on", text: "$14/user/mo" },
                enterprise: true,
            },
            
        ],
    },
    {
        label: "Features and integrations",
        values: [
            {
                label: "Tenants / projects / websites",
                open_source: "1",
                business: { title: "5 included / 100 max", text: "Number of tenants scales with number of users" },
                enterprise: "Volume-based pricing on request",
            },
            {
                label: "Advanced roles and permissions",
                open_source: false,
                business: true,
                enterprise: true,
            },
            {
                label: "Team management",
                open_source: false,
                business: false,
                enterprise: true,
            },
        ],
    },
    {
        label: "Security",
        values: [
            {
                label: "OKTA integration",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "Active Directory integration",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "Auth0 integration",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "Custom SSO integration",
                open_source: false,
                business: false,
                enterprise: true,
            },
        ],
    },
    {
        label: "Infrastructure",
        values: [
            {
                label: "Deploy inside an existing VPC",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "Integrate with VPC endpoints",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "SOC2 compliany setup",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "Use API Gateway Lambda Authorizers",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "Multi-region deployment",
                open_source: false,
                business: false,
                enterprise: "Coming soon",
            },
        ],
    },
    {
        label: "Webiny Control Panel",
        values: [
            {
                label: "API monitoring",
                open_source: false,
                business: true,
                enterprise: true,
            },
            {
                label: "Cloud cost monitoring",
                open_source: false,
                business: "Coming soon",
                enterprise: "Coming soon",
            },
            {
                label: "Staged rollouts",
                open_source: false,
                business: "-",
                enterprise: "Multi-stage rollouts",
            },
            {
                label: "Point in time recovery",
                open_source: false,
                business: false,
                enterprise: "Coming soon",
            },
            {
                label: "Audit logs",
                open_source: false,
                business: false,
                enterprise: "Coming soon",
            },
        ],
    },
    {
        label: "Support and Services",
        values: [
            {
                label: "Support level",
                open_source: "Community",
                business: "Basic",
                enterprise: "SLA",
            },
            {
                label: "Dedicated account manager",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "Training and onboarding",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "Consultancy services",
                open_source: false,
                business: false,
                enterprise: "On request",
            },
        ],
    },
];

const PriceListSection = styled("section")({
    maxWidth: "1005px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
});

const containerClass = css(
    mq({
        width: ["100%", "100%"],
    }),
);

const SeeFullPlanWrapper = styled.div(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    mq({
        marginBottom: ["0px", "15px", "75px"],
        padding: ["0px 20px", "0px", "0px"],
    }),
);

const H2 = styled.h2(
    {
        boxSizing: "border-box",
        maxWidth: "950px",
        fontWeight: 700,
        textAlign: "center",
        color: "#000E1A",
        marginBottom: "30px",

        "& span": {
            color: "#FA5A28",
        },
    },
    mq({
        marginTop: ["40px", "40px", "91px"],
        lineHeight: ["46px", "46px", "58px"],
        fontSize: ["36px", "36px", "48px"],
        marginLeft: [0, 0, "30px"],
        marginRight: [0, 0, "30px"],
    }),
);

const SeeFullPlan = () => {
    return (
        <SeeFullPlanWrapper>
            <H2>
                Choose exactly <span>what you need</span>
            </H2>
        </SeeFullPlanWrapper>
    );
};

const PriceList = () => {
    const [showPriceList, setShowPriceList] = useState(true);
    const isDesktop = useWindowWidth();
    const showPriceListToggler = () => {
        setShowPriceList(!showPriceList);
    };
    return (
        <PriceListSection>
            <SeeFullPlan
                showPriceListToggler={showPriceListToggler}
                showPriceList={showPriceList}
            />
            <ContentContainer className={containerClass}>
                {isDesktop > 739 ? (
                    <Desktop priceList={priceList} showPriceList={showPriceList} />
                ) : (
                    <Mobile priceList={priceList} />
                )}
            </ContentContainer>
        </PriceListSection>
    );
};

export default PriceList;
