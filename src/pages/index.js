import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../layouts/base";
import Hero from "../components/homepage/hero-new/new-hero";
import FocusBusiness from "../components/homepage/focus-business";
import ServerlessEasy from "../components/homepage/serverless-easy/serverless-easy";
import CompleteSection from "../components/homepage/new-complete-serverless";
import ClientsLogo from "../components/homepage/clients-logo/clients-logo";
import CaseStudy from "../components/ui/case-study";
import FooterCta from "../components/ui/footer-cta";

class IndexPage extends React.Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <BaseLayout
                title="The easiest way to adopt serverless"
                description="Webiny is an open-source framework for building serverless applications. Webiny is powered by React, Node and GraphQL."
                fixedHeader={false}
            >
                <Hero />
                <FocusBusiness />
                <CompleteSection />                
                <CaseStudy />
                <ServerlessEasy />
                <ClientsLogo />
                <FooterCta />
            </BaseLayout>
        );
    }
}

export default IndexPage;
