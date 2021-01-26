import React from "react";

import WhyChooseWebiny from "../elements/why-choose-webiny/why-choose-webiny";
// assets
import HeadlessCMSDemoImg from "./assets/youtube-headless-cms.png";
import HeroBg from "./assets/headless-cms-hero-bg.svg";
import HeadlessCMSCover from "../../../assets/products/webiny-headless-cms.jpg";

import { FACTS, FEATURES, HERO_FEATURES, KEYNOTES } from "./headless-cms-data";
import Hero from "../elements/hero/hero";
import ServerlessByDesign from "../elements/serverless-design/serverless-design";
import KeynotesComponent from "../elements/keynotes/keynotes";
import SeeActionComponent from "../elements/see-action/see-action";
import { FeaturesSectionTitle, FeaturesSection } from "../elements/features/features";
import { FactsSection } from "../elements/facts/facts";
import { WebinyAppsServerlessBenefits } from "../webiny-apps/webiny-apps";
import LearnMoreAboutWebiny from "../../ui/layout/learn-more";
import WebinyAppsComponent from "../elements/apps/apps";

export default () => (
    <React.Fragment>
        <Hero
            backgroundImg={HeroBg}
            appName={"Headless CMS"}
            title={"GraphQL Based Headless CMS With Powerful Content Modeling Features"}
            media={
                <img
                    src={HeadlessCMSCover}
                    alt="Webiny Serverless Headless CMS - OpenSource"
                    style={{ border: "none" }}
                />
            }
            features={HERO_FEATURES}
        />
        <ServerlessByDesign />
        <KeynotesComponent keynotes={KEYNOTES} />
        <SeeActionComponent videoPreviewImg={HeadlessCMSDemoImg} videoId={"4jrv9ymlQuM"} />
        <FeaturesSectionTitle />
        <FeaturesSection features={FEATURES.slice(0, 3)} />
        <FactsSection facts={FACTS.slice(0, 3)} />
        <FeaturesSection features={FEATURES.slice(3, 6)} />
        <FactsSection facts={FACTS.slice(3, 6)} />
        <FeaturesSection features={FEATURES.slice(6, 9)} />
        <WhyChooseWebiny />
        <WebinyAppsServerlessBenefits />
        <WebinyAppsComponent />
        <LearnMoreAboutWebiny />
    </React.Fragment>
);
