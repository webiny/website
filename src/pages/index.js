import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import theme from '../components/utils/theme'
import mq from '../components/utils/breakpoints'

import Hero from '../components/sections/hero/hero'
import Cms from '../components/sections/cms/cms'
import Developers from '../components/sections/developers/developers'
import Header from '../components/sections/header/header'
import QuickStart from '../components/sections/quick-start/quick-start'
import Faq from '../components/sections/faq/faq'
import Sidebar from '../components/sections/sidebar/sidebar'
import Footer from '../components/sections/footer/footer'

import '../layouts/reset.css'
import '../layouts/index.css'
import '../layouts/variables.css'

const FaqAndSidebar = styled('section')(
  {
    margin: '0 auto',
    justifyContent: 'space-between',
  },
  mq({
    display: ['block', 'flex'],
    width: ['100%', theme.contentWidth],
    padding: ['0', '50px 0'],
  })
)

const FaqAndSidebarFaqBox = styled('div')(
  {},
  mq({
    width: ['100%', '66%'],
  })
)

const SidebarBox = styled('div')(
  {},
  mq({
    width: ['100%', '33%'],
  })
)

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
            {
              name: 'viewport',
              content:
                'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1',
            },
          ]}
        />
        <Header />
        <Hero />
        <Cms />
        <Developers />
        <QuickStart />
        <FaqAndSidebar>
          <FaqAndSidebarFaqBox>
            <Faq />
          </FaqAndSidebarFaqBox>
          <SidebarBox>
            <Sidebar />
          </SidebarBox>
        </FaqAndSidebar>
        <Footer />
      </div>
    )
  }
}

export default IndexPage
