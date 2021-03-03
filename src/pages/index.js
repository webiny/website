import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../layouts/base";
import Hero from "../components/homepage/hero-new/new-hero";
import FocusBusiness from "../components/homepage/focus-business";
import ServerlessEasy from "../components/homepage/serverless-easy/serverless-easy";
import CompleteSection from "../components/homepage/new-complete-serverless";
import ClientsLogo from "../components/homepage/clients-logo/clients-logo";
import Benchmark from "../components/homepage/benchmark/benchmark";
import CaseStudy from "../components/ui/case-study";
import FooterCta from "../components/ui/footer-cta";

class IndexPage extends React.Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <BaseLayout
                title="Open-Source Serverless CMS and Serverless Application Framework"
                description="Webiny is an open-source framework for building serverless applications with a drop-in CMS. Webiny is powered by React, Node and GraphQL."
                fixedHeader={false}
            >
                <Hero />
                <FocusBusiness />
                <CompleteSection />
                <Benchmark />
                <CaseStudy />
                <ServerlessEasy />
                {/*<ClientsLogo />*/}
                <FooterCta />
            </BaseLayout>
        );
    }
}

export default IndexPage;
