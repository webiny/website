import React from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import BaseLayout from "../layouts/base";
import GoServerless from "../components/homepage/go-serverless/go-serverless";
import HeroComponent from "../components/product-roadmap/hero/hero";
import IntroComponent from "../components/product-roadmap/intro/intro";
import GameChangerComponent from "../components/product-roadmap/game-changer/game-changer";
import WCPIntroComponent from "../components/product-roadmap/wcp-intro/wcp-intro";
import WCPMore from "../components/product-roadmap/wcp-more/wcp-more";

const ProductRoadmap = () => {
    return (
        <BaseLayout
            title="Product roadmap - Serverless CMS powered by GraphQL and React"
            description="Discover the serverless benefits, its challenges and how Webiny overcomes them."
            fixedHeader={false}
        >
            <HeroComponent />
            <IntroComponent />
            <GameChangerComponent />
            <WCPIntroComponent />
            <WCPMore />
            <GoServerless />
        </BaseLayout>
    );
};

export default ProductRoadmap;
