import React from 'react';

import BaseLayout from '../layouts/base';
import Tos from '../components/static/tos';

class TosPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Terms of Service - Webiny">
        <Tos />
      </BaseLayout>
    );
  }
}

export default TosPage;
