import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../layouts/base";
import styled from "react-emotion";

import FooterCta from "../components/ui/footer-cta";
import HeroSection from "../components/guides-tutorials/hero/hero";
import DidNotFound from "../components/guides-tutorials/did-not-found/did-not-found";
import FeaturedContent from "../components/guides-tutorials/featured-content/featured-content";

const Notice = styled("h3")({
    margin: "100px 25px",
    textAlign: "center",
});

const GuidesAndTutorialsPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <BaseLayout
            title="Serverless Guides & Tutorials"
            description="Webiny is an open-source framework for building serverless applications. Webiny is powered by React, Node and GraphQL."
            fixedHeader={false}
        >
            <HeroSection />
            <Notice>
                We are working hard on upgrading our tutorials to the latest version. For now we had
                to remove the old articles. Please join us on our <a href="/slack">slack</a> where
                we can help you with any queries.
            </Notice>
            {/*
            <FeaturedContent />
            <DidNotFound />
            */}
            <FooterCta />
        </BaseLayout>
    );
};

export default GuidesAndTutorialsPage;
