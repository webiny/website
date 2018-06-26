import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'

import Header from '../components/header/header'
import Footer from '../components/homepage/footer/footer'

import './layouts/reset.css'
import './layouts/index.css'

class BaseLayout extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Pricing - Webiny"
          meta={[
            { name: 'description', content: 'Node.js Serverless CMS' },
            {
              name: 'keywords',
              content: 'cms, serverless, nodejs, open source',
            },
            {
              name: 'viewport',
              content:
                'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1',
            },
          ]}
        />
        <Helmet
          link={[
            {
              rel: 'shortcut icon',
              href: withPrefix('./favicon.ico'),
              type: 'image/x-icon',
            },
          ]}
        />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default BaseLayout
