import React, { Fragment } from "react";
import HeroSection from "../components/hero/hero";
import { FeaturesSectionTitle, FeaturesSection } from "../components/features/features";

import { FEATURES } from "./applications-data";
import { WebinyAppsServerlessBenefits } from "../../serverless-app/webiny-apps/webiny-apps";
import { WebinyCTAComponent, WebinyPrimaryCTAComponent } from "../components/webiny-cta/webiny-cta";

export default () => {
    return (
        <Fragment>
            <HeroSection
                title={"Build Scalable Serverless Web Application in Less Time"}
                subtitle={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere maximus metus sed suscipit. Maecenas vitae ex in eros sagittis ultrices. "
                }
            />
            <FeaturesSectionTitle />
            <FeaturesSection features={FEATURES.slice(0, 3)} />
            <WebinyPrimaryCTAComponent />
            <FeaturesSection features={FEATURES.slice(3)} />
            <WebinyAppsServerlessBenefits />
            <WebinyCTAComponent />
        </Fragment>
    );
};
