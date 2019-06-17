import React from 'react';

import BaseLayout from '../../layouts/base';
import Hero from '../../components/feature-platform/hero/hero';
import HostedOpenSource
  from '../../components/feature-platform/hosted-vs-os/hosted-vs-os';
import Serverless
  from '../../components/feature-platform/serverless/serverless';

class Components extends React.Component {
  render () {
    return (
      <BaseLayout title="Webiny Platform">
        <Hero />
        <Serverless />
        <HostedOpenSource />
      </BaseLayout>
    );
  }
}

export default Components;
