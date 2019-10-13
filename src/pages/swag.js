import React from 'react';

import BaseLayout from '../layouts/base';
import Swag from '../components/static/swag';

class TelemetryPage extends React.Component {
  render () {
    return (
      <BaseLayout title="Swag - Webiny" fixedHeader={true}>
        <Swag />
      </BaseLayout>
    );
  }
}

export default TelemetryPage;
