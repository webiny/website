import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/developers/hero/hero';
import DevLinks from '../components/developers/what-can-you-do/what-can-you-do';
import DevelopersFeatures from '../components/developers/developers';
import QuickStart from '../components/ui/quick-start/quick-start';

class DevelopersPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Webiny - CMS made for developers">
        <Hero />
        <DevLinks />
        <DevelopersFeatures />
        <QuickStart />
      </BaseLayout>
    );
  }
}

export default DevelopersPage;
