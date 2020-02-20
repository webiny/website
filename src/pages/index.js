import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/homepage/hero/hero';
import WhyWebiny from '../components/homepage/why-webiny/why-webiny';
import Components from '../components/homepage/components/components';
import LearnExplore from '../components/homepage/learn-explore/learn-explore';
import MoreThanCms from '../components/homepage/more-than-cms/more-than-cms';
import ServerlessBenefits
  from '../components/homepage/serverless-benefits/serverless-benefits';

class IndexPage extends React.Component {
  render () {
    return (
      <BaseLayout
        title="Webiny - Serverless CMS powered by GraphQL and React"
        description="Webiny is a modern open source content management designed to run inside a serverless environment.  Webiny is powered by React, Node and GraphQL."
        fixedHeader={true}
      >
        <Hero />
        <WhyWebiny />
        <MoreThanCms />
        <Components />
        <ServerlessBenefits />
        <LearnExplore />
      </BaseLayout>
    );
  }
}

export default IndexPage;
