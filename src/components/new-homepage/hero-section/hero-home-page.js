import React from "react";
import HeroComponent from "./hero-section";

import { Bold, OrangeText } from "./hero.styled";

const HeroHomePage = () => {
    return (
        <HeroComponent
            buttonTopLink="/pricing"
            buttonBottomLink="/call/demo"
            title={
                <>
                    The Enterprise CMS platform that you can{" "}
                    <OrangeText>host on your cloud</OrangeText>
                </>
            }
            subTitle={
                <>
                    {" "}
                    Our <Bold>open source serverless CMS</Bold> offers you all the{" "}
                    <Bold>enterprise-grade functionalities</Bold>, while keeping your data within
                    the security perimeter of your own infrastructure.
                </>
            }
            codeFieldText="$ npx create-webiny-project my-new-project"
            buttonTopLabel="TRY IT NOW FOR FREE"
            buttomBottomLabel="Request a demo "
        />
    );
};
export default HeroHomePage;
