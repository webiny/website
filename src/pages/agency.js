import React from "react";

import BaseLayout from "../layouts/base";
import Hero from "../components/agency/hero/hero";
import WhatIsWebiny from "../components/agency/what-is-webiny/what-is-webiny";
import WhyServerless from "../components/agency/why-serverless/why-serverless";
import ReadyMadeApps from "../components/agency/ready-made-apps/ready-made-apps";
import WebinyFeatures from "../components/agency/webiny-features/webiny-features";
import DidYouKnow from "../components/agency/did-you-know/did-you-know";
import Plugins from "../components/agency/plugins/plugins";
import ForAgencies from "../components/agency/for-agencies/for-agencies";
import WhyChooseWebiny from "../components/agency/why-choose-webiny/why-choose-webiny";
import { trackBookADemo } from "../components/ui/functions";

const metaDescription = "Modern Development Tools to Scale Your Dev Agency Faster.";
class AgencyPage extends React.Component {
    scheduleADemoRef = React.createRef();

    bookADemo = () => {
        trackBookADemo({ placement: "agency" });

        if (window) {
            const win = window.open("https://site.webiny.com/forms/product-demo", "_blank");
            win.focus();
        }
    };

    render() {
        return (
            <BaseLayout
                title="How Agencies can benefit from serverless"
                description={metaDescription}
            >
                <Hero handleDemoClick={this.bookADemo} />
                <WhatIsWebiny />
                <WhyServerless />
                <WhyChooseWebiny />
                <ReadyMadeApps handleDemoClick={this.bookADemo} />
                <WebinyFeatures />
                <DidYouKnow />
                <Plugins handleDemoClick={this.bookADemo} />
                <ForAgencies handleDemoClick={this.bookADemo} />
                {/*<ScheduleDemo refFromParent={this.scheduleADemoRef} />*/}
            </BaseLayout>
        );
    }
}

export default AgencyPage;
