import React from 'react';
import Head from '../layouts/components/head';

class PhPage extends React.Component {
  componentDidMount () {
    const _w = typeof window !== 'undefined' ? window : false;
    if (_w !== false) {
      window.location = 'https://www.producthunt.com/';
    }
  }
  render () {
    return (
      <React.Fragment>
        <Head title={'Webiny - Redirecting to Product Hunt'} />
      </React.Fragment>
    );
  }
}

export default PhPage;
