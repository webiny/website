import React, { Fragment } from "react";
import HeroSection from "../components/hero/hero";
import { FeaturesSectionTitle, FeaturesSection } from "../components/features/features";

import { FEATURES } from "./apis-data";
import { WebinyAppsServerlessBenefits } from "../../serverless-app/webiny-apps/webiny-apps";
import { WebinyCTAComponent, WebinyPrimaryCTAComponent } from "../components/webiny-cta/webiny-cta";
import heroBg from "./assets/api-hero-bg.svg";

export default () => {
    return (
        <Fragment>
            <HeroSection
                heroImage={heroBg}
                title={
                    "Create GraphQL APIs for Your Mobile and Web Apps and Run Them on Top of a Serverless Infrastructure"
                }
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
