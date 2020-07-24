import React from 'react';
import Head from '../layouts/components/head';

class SlackPage extends React.Component {
  componentDidMount() {
    const _w = typeof window !== 'undefined' ? window : false;
    if (_w !== false) {
      window.location =
        'https://join.slack.com/t/webiny-community/shared_invite/zt-g919qoy9-K42S9t~BCcs3M_sTX8nfew';
    }
  }
  render() {
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
