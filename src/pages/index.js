import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../layouts/base";
import Hero from "../components/homepage/hero-new/hero";
import ServerlessEasy from "../components/homepage/serverless-easy/serverless-easy";
import CompleteSection from "../components/homepage/complete-serverless";
import GoServerless from "../components/homepage/go-serverless/go-serverless";
import WhyWebinyWhyServerless from "../components/homepage/why-serverless/why-serverless";
import ClientsLogo from "../components/homepage/clients-logo/clients-logo";

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
                <ClientsLogo />
                <CompleteSection />
                <WhyWebinyWhyServerless />
                
                
                <ServerlessEasy />
                <GoServerless />
            </BaseLayout>
        );
    }
}

export default IndexPage;
