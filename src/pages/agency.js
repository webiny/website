import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/agency/hero/hero'
import WhatIsWebiny from '../components/agency/what-is-webiny/what-is-webiny';
import WhyServerless from '../components/agency/why-serverless/why-serverless';

class AgencyPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Webiny - How Agencies can benefit">
        <Hero/>
        <WhatIsWebiny />
        <WhyServerless />
      </BaseLayout>
    );
  }
}

export default AgencyPage;
