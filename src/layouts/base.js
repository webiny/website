import React from 'react';
import Helmet from 'react-helmet';
import Head from './components/head';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CookieNotice from '../components/ui/cookie-notice';

import './reset.css';
import './index.css';

class BaseLayout extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Head title={this.props.title} description={this.props.description} />

        <Helmet>
          <script type="text/javascript">
            {`
        window.$crisp=[];
        window.CRISP_WEBSITE_ID="2776e9a3-7196-4cd7-828a-96de2d509b75";
        (function(){ 
          d=document;s=d.createElement("script"); 
          s.src="https://client.crisp.chat/l.js"; 
          s.async=1;d.getElementsByTagName("head")[0].appendChild(s);
        })();`}
          </script>
        </Helmet>

        <div>
          <Header trackScroll={this.props.fixedHeader ? false : true} />
          {this.props.children}
          <Footer />
          <CookieNotice />
        </div>
      </React.Fragment>
    );
  }
}

export default BaseLayout;
