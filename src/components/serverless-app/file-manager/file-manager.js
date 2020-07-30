import React from "react";
import LearnMoreAboutWebiny from "../../ui/layout/learn-more";
// assets
import HeroImage from "./assets/file-manager.jpg";
import HeroBg from "./assets/file-manager-hero-bg.svg";
// data
import { FEATURES, HERO_FEATURES, KEYNOTES } from "./file-manager-data";
// components
import ServerlessByDesign from "../elements/serverless-design/serverless-design";
import KeynotesComponent from "../elements/keynotes/keynotes";
import Hero from "../elements/hero/hero";
import { FeaturesSection, FeaturesSectionTitle } from "../elements/features/features";
import WhyChooseWebiny from "../elements/why-choose-webiny/why-choose-webiny";
import { WebinyAppsServerlessBenefits } from "../webiny-apps/webiny-apps";
import WebinyAppsComponent from "../elements/apps/apps";

export default () => (
    <React.Fragment>
        <Hero
            backgroundImg={HeroBg}
            appName={"File Manager"}
            title={"Upload, Categorize, Search and Edit Your Files"}
            media={<img src={HeroImage} alt="Webiny Serverless File Manager" />}
            features={HERO_FEATURES}
        />
        <ServerlessByDesign />
        <KeynotesComponent keynotes={KEYNOTES} />
        <FeaturesSectionTitle />
        <FeaturesSection features={FEATURES} />
        <WhyChooseWebiny />
        <WebinyAppsServerlessBenefits />
        <WebinyAppsComponent />
        <LearnMoreAboutWebiny />
    </React.Fragment>
);
