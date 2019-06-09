import React from 'react';

import BaseLayout from '../../layouts/base';
import Hero from '../../components/feature-components/hero/hero';
import ComponentList from '../../components/feature-components/components/cms';
import QuickStart from '../../components/ui/quick-start/quick-start';

class Components extends React.Component {
  render () {
    return (
      <BaseLayout title="Webiny CMS Components">
        <Hero />
        <ComponentList />
        <QuickStart />
      </BaseLayout>
    );
  }
}

export default Components;
