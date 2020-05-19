import React from 'react';

import BaseLayout from '../layouts/base';

class SlackPage extends React.Component {
  componentDidMount () {
    const _w = typeof window !== 'undefined' ? window : false;
    if (_w !== false) {
      window.location =
        'https://join.slack.com/t/webiny-community/shared_invite/zt-efh2ns3n-1sUBOp_sVBH3Kxt_aKCT6Q';
    }
  }
  render () {
    return (
      <BaseLayout
        title="Webiny - Slack Community"
        description="Join Webiny community on Slack."
        fixedHeader={true}
      />
    );
  }
}

export default SlackPage;
