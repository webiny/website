import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../layouts/base";
import styled from "react-emotion";

import FooterCta from "../components/ui/footer-cta";
import HeroSection from "../components/guides-tutorials/hero/hero";

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
                This page has been moved <a href="/docs/tutorials/install-webiny">here</a>.
            </Notice>
            <FooterCta />
        </BaseLayout>
    );
};

export default GuidesAndTutorialsPage;
