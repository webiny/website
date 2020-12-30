import React from "react";
import BaseLayout from "../layouts/base";
import Hero from "../components/enterprise/hero";
import SeverlessAdvantage from "../components/enterprise/serverless-advantage";
import SecurityParameter from "../components/enterprise/security-parameter";
import WebinyEnterprise from "../components/enterprise/webiny-enterprise";
import FaqAccordion from "../components/enterprise/faq-accordion";

const Enterprise = () => {
    return (
        <BaseLayout title="Webiny - Enterprise">
            <Hero />
            <SeverlessAdvantage />
            <SecurityParameter />
            <WebinyEnterprise />
            <FaqAccordion />
        </BaseLayout>
    )
}

export default Enterprise
