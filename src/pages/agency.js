import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/agency/hero/hero'
import WhatIsWebiny from '../components/agency/what-is-webiny/what-is-webiny';
import WhyServerless from '../components/agency/why-serverless/why-serverless';
import ReadyMadeApps from '../components/agency/ready-made-apps/ready-made-apps';
import WebinyFeatures from '../components/agency/webiny-features/webiny-features';
import DidYouKnow from '../components/agency/did-you-know/did-you-know';
import Plugins from '../components/agency/plugins/plugins';
import ForAgencies from '../components/agency/for-agencies/for-agencies';

class AgencyPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Webiny - How Agencies can benefit">
        <Hero/>
        <WhatIsWebiny />
        <WhyServerless />
        <ReadyMadeApps />
        <WebinyFeatures />
        <DidYouKnow />
        <Plugins />
        <ForAgencies />
      </BaseLayout>
    );
  }
}

export default AgencyPage;
