import React from 'react'

import BaseLayout from '../layouts/base'
import Hero from '../components/pricing/hero/hero'
import PaidPackages from '../components/pricing/paid-package/paid-package'
import Faq from '../components/pricing/faq/faq'
import Enterprise from '../components/pricing/enterprise/enterprise'
import OpenSource from '../components/pricing/open-source/open-source'

class PricingPage extends React.Component {
  render() {
    return (
      <BaseLayout>
        <Hero />
        <PaidPackages />
        <Faq />
        <Enterprise />
        <OpenSource />
      </BaseLayout>
    )
  }
}

export default PricingPage
