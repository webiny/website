import React, { Fragment } from "react";
import HeroSection from "../components/hero/hero";
import { FeaturesSection, FeaturesSectionTitle } from "../components/features/features";
import { FEATURES } from "../websites/websites-data";
import { WebinyCTAComponent, WebinyPrimaryCTAComponent } from "../components/webiny-cta/webiny-cta";
import { WebinyAppsServerlessBenefits } from "../../serverless-app/webiny-apps/webiny-apps";

export default () => {
    return (
        <Fragment>
            <HeroSection
                title={"The Foundation That Makes It Easy to Build and Deploy Microservice"}
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
