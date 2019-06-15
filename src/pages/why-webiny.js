import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/why-webiny/hero/hero';
import Features from '../components/why-webiny/features/features';
import CompareMatrix
  from '../components/why-webiny/compare-matrix/CompareMatrix';
import QuickStart from '../components/ui/quick-start/quick-start';

class DevelopersPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Serverless CMS - Single system, many possibilities. ">
        <Hero />
        <Features />
        <CompareMatrix />
        <QuickStart />
      </BaseLayout>
    );
  }
}

export default DevelopersPage;
