import React from 'react';
import Head from '../layouts/components/head';

class PhPage extends React.Component {
  componentDidMount () {
    const _w = typeof window !== 'undefined' ? window : false;
    if (_w !== false) {
      window.location =
        'https://www.producthunt.com/posts/serverless-headless-cms-by-webiny';
    }
  }
  render () {
    return (
      <React.Fragment>
        <Head title={'Serverless Headless CMS by Webiny - Product Hunt'} />
      </React.Fragment>
    );
  }
}

export default PhPage;
