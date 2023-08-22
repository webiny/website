import React from "react";

import BaseLayout from "../layouts/base";
import FooterCta from "../components/ui/footer-cta";
import HeroComponent from "../components/product-roadmap/hero/hero";
import IntroComponent from "../components/product-roadmap/intro/intro";
import GameChangerComponent from "../components/product-roadmap/game-changer/game-changer";
import WCPIntroComponent from "../components/product-roadmap/wcp-intro/wcp-intro";
import WCPMore from "../components/product-roadmap/wcp-more/wcp-more";

const ProductRoadmap = () => {
    return (
        <BaseLayout
            title="Product roadmap"
            description="Discover the serverless benefits, its challenges and how Webiny overcomes them."
            fixedHeader={false}
        >
            <HeroComponent />
            <IntroComponent />
            <GameChangerComponent />
            <WCPIntroComponent />
            <WCPMore />
            <FooterCta />
        </BaseLayout>
    );
};

export default ProductRoadmap;
