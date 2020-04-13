import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/agency/hero/hero'

class AgencyPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Webiny - How Agencies can benefit">
        <Hero/>
      </BaseLayout>
    );
  }
}

export default AgencyPage;
