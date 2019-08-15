import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/homepage/hero/hero";
import WhyWebiny from "../components/homepage/why-webiny/why-webiny";
import QuickStart from "../components/ui/quick-start/quick-start";
import Components from "../components/homepage/components/components";

class IndexPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Webiny - Serverless CMS powered by GraphQL and React"
                description="Webiny is a modern open source content management designed to run in a serverless environment.  Webiny is powered by React, Node and GraphQL.  Webiny features a visual page builder, so you can quickly create stunning web pages."
            >
                <Hero />
                <WhyWebiny />
                <Components />
                <QuickStart data-aos="fade-up" />
            </BaseLayout>
        );
    }
}

export default IndexPage;
