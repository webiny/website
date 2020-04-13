import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/agency/hero/hero'
import WhatIsWebiny from '../components/agency/what-is-webiny/what-is-webiny';

class AgencyPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Webiny - How Agencies can benefit">
        <Hero/>
        <WhatIsWebiny />
      </BaseLayout>
    );
  }
}

export default AgencyPage;
