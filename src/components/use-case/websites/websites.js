import React, { Fragment } from "react";
import HeroSection from "../components/hero/hero";
import { FeaturesSectionTitle, FeaturesSection } from "../components/features/features";

import { FEATURES } from "./websites-data";
import { WebinyAppsServerlessBenefits } from "../../serverless-app/webiny-apps/webiny-apps";
import { WebinyCTAComponent, WebinyPrimaryCTAComponent } from "../components/webiny-cta/webiny-cta";
import heroBg from "./assets/websites-hero-bg.svg";

// "Build highly-scalable and cost-optimised websites on top of serverless infrastructure in minutes using Webiny. Save 60-80% on cloud infrastructure cost when compared to traditional VMs."

export default () => {
    return (
        <Fragment>
            <HeroSection
                heroImage={heroBg}
                title={"Create Amazing Dynamic Websites With Stellar Performance"}
                subtitle={""}
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
