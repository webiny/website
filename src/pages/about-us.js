import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/about-us/about-us";

class AboutUsPage extends React.Component {
    render() {
        return (
            <BaseLayout title="About Us">
                <Hero />
            </BaseLayout>
        );
    }
}

export default AboutUsPage;
