import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../layouts/base";

import GoServerless from "../components/homepage/go-serverless/go-serverless";
import HeroSection from "../components/guides-tutorials/hero/hero";
import DidNotFound from "../components/guides-tutorials/did-not-found/did-not-found";
import FeaturedContent from "../components/guides-tutorials/featured-content/featured-content";

const GuidesAndTutorialsPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout
            title="The easiest way to adopt serverless | Webiny"
            description="Webiny is an open-source framework for building serverless applications. Webiny is powered by React, Node and GraphQL."
            fixedHeader={false}
        >
            <HeroSection />
            <FeaturedContent />
            <DidNotFound />
            <GoServerless />
        </BaseLayout>
    );
};

export default GuidesAndTutorialsPage;
