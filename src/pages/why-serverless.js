import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/why-serverless/hero";
import ServerlessReasons from "../components/why-serverless/serverless-reasons";

class IndexPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Webiny - Why Serverless?"
                description="Why should you user serverless for your next project? Explore some of the reasons and benefits."
            >
                <Hero />
                <ServerlessReasons />
            </BaseLayout>
        );
    }
}

export default IndexPage;
