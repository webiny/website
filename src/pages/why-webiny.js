import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BaseLayout from "../layouts/base";

import GoServerless from "../components/homepage/go-serverless/go-serverless";
import ServerlessDIY from "../components/why-webiny/serverless-diy/serverless-diy";
import Hero from "../components/why-webiny/hero/hero";
import WebinyOverview from "../components/why-webiny/overview/overview";
import WhyServerlessComponent from "../components/why-webiny/why-serverless/why-serverless";
import ServerlessChallenges from "../components/why-webiny/serverless-challenges/serverless-challenges";
import HereComesWebiny from "../components/why-webiny/here-comes-webiny/here-comes-webiny";

class WhyWebinyPage extends React.Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <BaseLayout
                title="The easiest way to adopt serverless"
                description="Discover the serverless benefits, its challenges and how Webiny overcomes them."
                fixedHeader={false}
            >
                <Hero />
                <WebinyOverview />
                <WhyServerlessComponent />
                <ServerlessChallenges />
                <HereComesWebiny />
                <ServerlessDIY />
                <GoServerless />
            </BaseLayout>
        );
    }
}

export default WhyWebinyPage;
