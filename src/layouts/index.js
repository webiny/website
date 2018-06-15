import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './reset.css'
import './index.css'
import './variables.css'

import Header from '../components/sections/header/header'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Node.js Serverless CMS' },
        { name: 'keywords', content: 'cms, serverless, nodejs, open source' },
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
