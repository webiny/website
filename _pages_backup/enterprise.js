import React from "react";
import BaseLayout from "../layouts/base";
import Hero from "../components/enterprise/hero";
import SeverlessAdvantage from "../components/enterprise/serverless-advantage";
import SecurityParameter from "../components/enterprise/security-parameter";
import WebinyEnterprise from "../components/enterprise/webiny-enterprise";

const metaDescription =
    "Webiny provides organisations with the technology, processes, knowledge and support to successfully build and deliver solutions on top of serverless infrastructure.";

const Enterprise = () => {
    return (
        <BaseLayout title="The serverless solution for enterprises" description={metaDescription}>
            <Hero />
            <SeverlessAdvantage />
            <SecurityParameter />
            <WebinyEnterprise />
        </BaseLayout>
    );
};

export default Enterprise;
