import React from "react";
import BaseLayout from "../layouts/base";
import Hero from "../components/serverless-application-framework/hero";
import StackCode from "../components/serverless-application-framework/stack-code";

import BuildFramework from "../components/serverless-application-framework/build-framework";
import ExampleApp from "../components/serverless-application-framework/examples";
import GreatExperience from "../components/serverless-application-framework/great-experience";

import GetStartedCode from "../components/ui/get-started-code";
import FooterCta from "../components/ui/footer-cta";

const ServerlessFramework = () => {
    const breadcrumbs = [
        { link: "/", text: "Home" },
        { link: "/serverless-application-framework", text: "Serverless Application Framework" },
    ];
    return (
        <BaseLayout
            title="Serverless Application Framework"
            description="Everything you need to architect, build and deploy serverless applications."
        >
            <Hero breadcrumbs={breadcrumbs} />
            <StackCode />
            <GetStartedCode />
            <BuildFramework />
            <ExampleApp />
            <GreatExperience />
            <FooterCta />
        </BaseLayout>
    );
};

export default ServerlessFramework;
