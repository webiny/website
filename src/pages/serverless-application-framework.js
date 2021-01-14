import React from "react";
import BaseLayout from "../layouts/base";
import Hero from "../components/serverless-application-framework/hero";
import EasyPart from "../components/serverless-application-framework/easy-part";
import BuildFramework from "../components/serverless-application-framework/build-framework";
import ExampleApp from "../components/serverless-application-framework/examples";
import GreatExperience from "../components/serverless-application-framework/great-experience";
import GoServerless from "../components/serverless-application-framework/go-serverless";


const ServerlessFramework = () => {
    return (
        <BaseLayout title="Serverless Application Framework">
            <Hero />
            <EasyPart />
            <BuildFramework />
            <ExampleApp />
            <GreatExperience />
            <GoServerless />
        </BaseLayout>
    );
};

export default ServerlessFramework;
