import React from "react";
import BaseLayout from "../layouts/base";
import Hero from "../components/serverless-cms/hero";
import OneSize from "../components/serverless-cms/one-size";
import BuildCMS from "../components/serverless-cms/build-framework";
import ExploreCMS from "../components/serverless-cms/explore-cms";
import Power from "../components/serverless-cms/power";
import Framework from "../components/serverless-cms/framework";

import GetStartedCode from "../components/ui/get-started-code";
import CaseStudy from "../components/ui/case-study";
import FooterCta from "../components/ui/footer-cta";

const ServerlessCMS = () => {
    const breadcrumbs = [
        { link: "/", text: "Home" },
        { link: "/serverless-cms", text: "Serverless CMS" },
    ];
    return (
        <BaseLayout
            title="Serverless CMS - Open-source & Self-hosted powered by GraphQL"
            description="Agile, flexible and scalable solution for your growing content needs. Headless CMS with a GraphQL API."
        >
            <Hero breadcrumbs={breadcrumbs} />
            <OneSize />
            <GetStartedCode />
            <BuildCMS />
            <Power />
            <CaseStudy />
            <ExploreCMS />
            <Framework />
            <FooterCta />
        </BaseLayout>
    );
};

export default ServerlessCMS;
