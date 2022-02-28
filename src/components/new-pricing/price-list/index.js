import React, { useState, useEffect } from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Desktop from "./price-list-desktop";
import Mobile from "./price-list-mobile";
import Button from "../../ui/button";

import arrowDown from "../../../assets/new-pricing/arrow-down.svg";

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
                business: { title: "First user free", text: "Then $9 per user per month" },
                enterprise: "Volume pricing on request",
            },
            {
                label: "Number of API calls",
                open_source: "Unlimited",
                business: { title: "First 1M free", text: "Then $19 per month per 1M" },
                enterprise: "Volume pricing on request",
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
                business: "Paid add-on",
                enterprise: true,
            },
            {
                label: "Advanced roles and permissions",
                open_source: false,
                business: "Paid add-on",
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
                business: "Unlimited",
                enterprise: "Unlimited",
            },
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
                business: true,
                enterprise: true,
            },
            {
                label: "Staged rollouts",
                open_source: false,
                business: "Blue/Green deployments (coming soon)",
                enterprise: "Multi-stage rollouts (coming soon)",
            },
            {
                label: "Point in time recovery",
                open_source: false,
                business: false,
                enterprise: true,
            },
            {
                label: "Audit logs",
                open_source: false,
                business: false,
                enterprise: true,
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

const SeeFullPlanButton = styled(Button)({
    maxWidth: "299px",
    padding: "12px 19px !important",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "0.75px",
    textTransform: "uppercase",
});

const ArrowIcon = styled("img")({
    "&.left-arrow": {
        marginRight: "14px",
    },
    "&.right-arrow": {
        marginLeft: "14px",
    },
    "&.arrow-top": {
        transform: "rotate(180deg)",
    },
});

const SeeFullPlan = ({ showPriceListToggler, showPriceList }) => {
    return (
        <SeeFullPlanWrapper>
            <H2>
                Choose exactly <span>what you need</span>
            </H2>
            <SeeFullPlanButton type="outlineDark" onClick={showPriceListToggler}>
                <ArrowIcon
                    id="plan-comparison"
                    src={arrowDown}
                    className={`left-arrow ${showPriceList ? "arrow-top" : ""}`}
                />
                See a full plan comparison
                <ArrowIcon
                    src={arrowDown}
                    className={`right-arrow ${showPriceList ? "arrow-top" : ""}`}
                />
            </SeeFullPlanButton>
        </SeeFullPlanWrapper>
    );
};

const PriceList = () => {
    const [showPriceList, setShowPriceList] = useState(false);
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
