import React from 'react'
import Hero from '../components/sections/hero/hero'
import Cms from '../components/sections/cms/cms'
import Developers from '../components/sections/developers/developers'
import Header from '../components/sections/header/header'
import QuickStart from '../components/sections/quick-start/quick-start'
import Helmet from 'react-helmet'

import '../layouts/reset.css'
import '../layouts/index.css'
import '../layouts/variables.css'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Webiny"
          meta={[
            { name: 'description', content: 'Node.js Serverless CMS' },
            {
              name: 'keywords',
              content: 'cms, serverless, nodejs, open source',
            },
          ]}
        />
        <Header />
        <Hero />
        <Cms />
        <Developers />
        <QuickStart />
      </div>
    )
  }
}

export default IndexPage
