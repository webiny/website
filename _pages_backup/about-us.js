import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/about-us/about-us";

class AboutUsPage extends React.Component {
    render() {
        return (
            <BaseLayout
                title="About Us"
                description="At Webiny we have a mission to empower every developer to create serverless applications by providing tools, processes and ready-made apps."
            >
                <Hero />
            </BaseLayout>
        );
    }
}

export default AboutUsPage;
