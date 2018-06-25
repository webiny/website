import React from 'react'

import BaseLayout from '../layouts/base'
import Hero from '../components/pricing/hero/hero'
import PaidPackages from '../components/pricing/paid-package/paid-package'

class PricingPage extends React.Component {
  render() {
    return (
      <BaseLayout>
        <Hero />
        <PaidPackages />
      </BaseLayout>
    )
  }
}

export default PricingPage
