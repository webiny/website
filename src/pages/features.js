import React from "react";

import BaseLayout from "../layouts/base";

import HeroComponent from "../components/features/hero/hero";
import GoServerless from "../components/homepage/go-serverless/go-serverless";
import WebinyAPI from "../components/features/webiny-api/webiny-api";
import WebinyCLI from "../components/features/webiny-cli/webiny-cli";
import WebinyAdminUI from "../components/features/webiny-admin-ui/webiny-admin-ui";
import WebinyAppsLibraries from "../components/features/webiny-apps-libraries/webiny-apps-libraries";
import SupportedCloudProviders from "../components/features/supported-cloud-providers/supported-cloud-providers";
import FeaturesForGreatExperience from "../components/features/great-experience/great-experience";

class FeaturesPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Features"
                description="Create reliable serverless apps with ease"
                fixedHeader={false}
            >
                <HeroComponent />
                <WebinyAPI />
                <WebinyCLI />
                <WebinyAdminUI />
                <WebinyAppsLibraries />
                <SupportedCloudProviders />
                <FeaturesForGreatExperience />
                <GoServerless />
            </BaseLayout>
        );
    }
}

export default FeaturesPage;
