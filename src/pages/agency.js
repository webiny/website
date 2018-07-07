import React from 'react'

import BaseLayout from '../layouts/base'
import Hero from '../components/agency/hero/hero'
import Features from '../components/agency/features/features'

class ContactUsPage extends React.Component {
  render() {
    return (
      <BaseLayout title="Agency - Webiny">
        <Hero />
        <Features />
      </BaseLayout>
    )
  }
}

export default ContactUsPage
