import React from "react";

import HeroWhyWebinySection from "./hero-why-webiny-section";

import { OrangeText, BoldText } from "./hero-why-webiny-section.styled";

const heroSectionData = {
    title: (
        <>
            If your legacy CMS is slowing you down, <OrangeText>you need Webiny</OrangeText>
        </>
    ),
    subtitle: (
        <>
            We have <BoldText>talked to over 200 companies</BoldText> about how they are using their
            CMS solutions and what their key pain points are. And the majority are struggling with
            the <BoldText>same four key issues.</BoldText>
        </>
    ),
    textFirstCard: "Hard to scale",
    textSecondCard: "Costly to run and maintain",
    textThirdCard: "Difficult to adapt",
    textFourthCard: "Abusive on your data privacy",
};

const HeroWhyWebiny = () => {
    return <HeroWhyWebinySection heroSectionData={heroSectionData} />;
};

export default HeroWhyWebiny;
