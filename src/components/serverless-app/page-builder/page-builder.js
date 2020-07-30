import React from "react";
import LearnMoreAboutWebiny from "../../ui/layout/learn-more";

import { FEATURES, HERO_FEATURES, KEYNOTES } from "./page-builder-data";
// components
import ServerlessByDesign from "../elements/serverless-design/serverless-design";
import KeynotesComponent from "../elements/keynotes/keynotes";
import SeeActionComponent from "../elements/see-action/see-action";
import { FeaturesSection, FeaturesSectionTitle } from "../elements/features/features";
import WhyChooseWebiny from "../elements/why-choose-webiny/why-choose-webiny";
import { WebinyAppsServerlessBenefits } from "../webiny-apps/webiny-apps";
import WebinyAppsComponent from "../elements/apps/apps";
// assets
import HeroImage from "./assets/page-builder.png";
import HeroBg from "./assets/page-builder-hero-bg.svg";
import PageBuilderDemoImg from "./assets/page-builder-demo.png";
import Hero from "../elements/hero/hero";

export default () => (
    <React.Fragment>
        <Hero
            backgroundImg={HeroBg}
            appName={"Page Builder"}
            title={"Build Stunning Landing Pages With an Easy to Use Drag&Drop Editor"}
            media={<img src={HeroImage} alt="Webiny Serverless Page Builder" />}
            features={HERO_FEATURES}
        />
        <ServerlessByDesign />
        <KeynotesComponent keynotes={KEYNOTES} />
        <SeeActionComponent videoPreviewImg={PageBuilderDemoImg} videoId={"OQOmJZxT5dg"} />
        <FeaturesSectionTitle />
        <FeaturesSection features={FEATURES} />
        <WhyChooseWebiny />
        <WebinyAppsServerlessBenefits />
        <WebinyAppsComponent />
        <LearnMoreAboutWebiny />
    </React.Fragment>
);
