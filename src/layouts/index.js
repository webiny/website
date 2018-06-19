import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './reset.css'
import './index.css'
import './variables.css'

import Header from '../components/sections/header/header'

const Layout = () => (
  <div>
    <Helmet
      title="Webiny"
      meta={[
        { name: 'description', content: 'Node.js Serverless CMS' },
        { name: 'keywords', content: 'cms, serverless, nodejs, open source' },
      ]}
    />
    <Header />
    <div>{this.props.children}</div>
  </div>
)

export default Layout
