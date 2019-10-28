import React from 'react';

import BaseLayout from '../layouts/base';
import Hero from '../components/about-us/about-us';

class AboutUsPage extends React.Component {
  render () {
    return (
      <BaseLayout title="About Us - Webiny">
        <Hero />
      </BaseLayout>
    );
  }
}

export default AboutUsPage;
