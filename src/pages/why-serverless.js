import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/why-serverless/hero";
import ServerlessReasons from "../components/why-serverless/serverless-reasons";
import Challenges from "../components/why-serverless/challenges";
import QuickStart from "../components/ui/quick-start/quick-start";
import ShareCard from "../components/why-serverless/assets/why-serverless-share-card.png";
class IndexPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="Why Serverless?"
                description="Why should you user serverless for your next project? Explore some of the reasons and benefits."
                image={ShareCard}
            >
                <Hero />
                <ServerlessReasons />
                <Challenges />
                <QuickStart />
            </BaseLayout>
        );
    }
}

export default IndexPage;
