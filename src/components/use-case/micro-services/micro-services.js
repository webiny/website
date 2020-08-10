import React, { Fragment } from "react";
import HeroSection from "../components/hero/hero";
import { FeaturesSection, FeaturesSectionTitle } from "../components/features/features";
import { FEATURES } from "./micro-services-data";
import { WebinyCTAComponent, WebinyPrimaryCTAComponent } from "../components/webiny-cta/webiny-cta";
import { WebinyAppsServerlessBenefits } from "../../serverless-app/webiny-apps/webiny-apps";
import heroBg from "./assets/microservices-hero-bg.svg";

export default () => {
    return (
        <Fragment>
            <HeroSection
                heroImage={heroBg}
                title={"The Foundation That Makes It Easy to Build and Deploy Microservice"}
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
