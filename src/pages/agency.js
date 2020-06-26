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
import ScheduleDemo from "../components/agency/schedule-demo/schedule-demo";
import WhyChooseWebiny from "../components/agency/why-choose-webiny/why-choose-webiny";

class AgencyPage extends React.Component {
  scheduleADemoRef = React.createRef();

  goToScheduleDemoSection = () => {
    if (this.scheduleADemoRef && this.scheduleADemoRef.current) {
      const { offsetTop } = this.scheduleADemoRef.current;
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  render() {
    return (
      <BaseLayout title="Webiny - How Agencies can benefit">
        <Hero handleDemoClick={this.goToScheduleDemoSection} />
        <WhatIsWebiny />
        <WhyServerless />
        <WhyChooseWebiny />
        <ReadyMadeApps handleDemoClick={this.goToScheduleDemoSection} />
        <WebinyFeatures />
        <DidYouKnow />
        <Plugins handleDemoClick={this.goToScheduleDemoSection} />
        <ForAgencies />
        <ScheduleDemo refFromParent={this.scheduleADemoRef} />
      </BaseLayout>
    );
  }
}

export default AgencyPage;
