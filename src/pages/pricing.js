import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/pricing/hero/hero';
import PaidPackages from '../components/pricing/paid-package/paid-package';
import Faq from '../components/pricing/faq/faq';
//import Architecture from '../components/pricing/architecture/architecture';
import Enterprise from '../components/pricing/enterprise/enterprise';
import OpenSource from '../components/pricing/open-source/open-source';
import HostedVsOS from '../components/pricing/hosted-vs-os/hosted-vs-os'

class PricingPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Pricing - Webiny">
        <Hero />
        <PaidPackages />
        <HostedVsOS/>
        <Faq />
        {/*<Architecture />*/}
        <Enterprise />
        <OpenSource />
      </BaseLayout>
    );
  }
}

export default PricingPage;