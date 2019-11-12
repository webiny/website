import React from 'react';

import BaseLayout from '../layouts/base';
import HeroSearch from '../components/plugins/hero-search.js';

class PluginPage extends React.Component {
  render () {
    return (
      <BaseLayout
        title="Webiny Plugins"
        description="Webiny plugin repository. Find the right plugin for your Webiny serverless website."
        fixedHeader={true}
      >
        <HeroSearch />
      </BaseLayout>
    );
  }
}

export default PluginPage;
