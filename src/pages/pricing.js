import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/pricing-v2/hero/hero';
import Faq from '../components/pricing-v2/faq/faq';
import Prices from '../components/pricing-v2/prices/prices';

class PricingPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Plans and Pricing - Webiny">
        <Hero />
        <Prices />
        <Faq />
      </BaseLayout>
    );
  }
}

export default PricingPage;
