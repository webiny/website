import React from "react";
import LearnMoreAboutWebiny from "../../ui/layout/learn-more";
// assets
import HeroImage from "../../../assets/products/webiny-form-builder.jpg";
import HeroBg from "./assets/hero-bg.svg";
import FormBuilderDemoImg from "./assets/webiny-form-builder-video-preview.png";
// data
import { HERO_FEATURES, FEATURES, KEYNOTES } from "./form-builder-data";
// components
import ServerlessByDesign from "../elements/serverless-design/serverless-design";
import KeynotesComponent from "../elements/keynotes/keynotes";
import SeeActionComponent from "../elements/see-action/see-action";
import { FeaturesSection, FeaturesSectionTitle } from "../elements/features/features";
import WhyChooseWebiny from "../elements/why-choose-webiny/why-choose-webiny";
import { WebinyAppsServerlessBenefits } from "../webiny-apps/webiny-apps";
import WebinyAppsComponent from "../elements/apps/apps";
import Hero from "../elements/hero/hero";

export default () => (
    <React.Fragment>
        <Hero
            backgroundImg={HeroBg}
            appName={"Form Builder"}
            title={"Create Forms Using a Drag&Drop Interface and Track Conversions"}
            media={<img src={HeroImage} alt="Webiny Serverless Page Builder" />}
            features={HERO_FEATURES}
        />
        <ServerlessByDesign />
        <KeynotesComponent keynotes={KEYNOTES} />
        <SeeActionComponent videoPreviewImg={FormBuilderDemoImg} videoId={"wwXSn05GWmo"} />
        <FeaturesSectionTitle />
        <FeaturesSection features={FEATURES} />
        <WhyChooseWebiny />
        <WebinyAppsServerlessBenefits />
        <WebinyAppsComponent />
        <LearnMoreAboutWebiny />
    </React.Fragment>
);
