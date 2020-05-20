import React from 'react';
import Head from '../layouts/components/head';

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
      <React.Fragment>
        <Head
          title={'Webiny - Slack Community'}
          description={'Join Webiny community on Slack.'}
        />
      </React.Fragment>
    );
  }
}

export default SlackPage;
