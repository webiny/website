import React from 'react'
import styled from 'react-emotion'
import theme from '../components/utils/theme'
import mq from '../components/utils/breakpoints'

import BaseLayout from '../layouts/base'
import Hero from '../components/homepage/hero/hero'
import Cms from '../components/homepage/cms/cms'
import Developers from '../components/homepage/developers/developers'
import QuickStart from '../components/homepage/quick-start/quick-start'
import Faq from '../components/homepage/faq/faq'
import Sidebar from '../components/homepage/sidebar/sidebar'

import '../layouts/reset.css'
import '../layouts/index.css'

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
      <BaseLayout>
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
      </BaseLayout>
    )
  }
}

export default IndexPage
