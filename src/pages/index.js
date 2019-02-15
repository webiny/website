import React from 'react';
import styled from 'react-emotion';
import theme from '../components/utils/theme';
import mq from '../components/utils/breakpoints';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BaseLayout from '../layouts/base';
import Hero from '../components/homepage/hero/hero';
import WebinyUsage
  from '../components/homepage/what-can-you-do/what-can-you-do';
import Serverless from '../components/homepage/serverless/serverless';
import CmsV2 from '../components/homepage/cms-v2/cms';
import Developers from '../components/homepage/developers/developers';
import QuickStart from '../components/homepage/quick-start/quick-start';
import Faq from '../components/homepage/faq/faq';
import Sidebar from '../components/homepage/sidebar/sidebar';

const FaqAndSidebar = styled ('section') (
  {
    margin: '0 auto',
    justifyContent: 'space-between',
  },
  mq ({
    display: ['block', 'flex'],
    width: ['100%', theme.contentWidth],
    padding: ['0', '50px 0'],
  })
);

const FaqAndSidebarFaqBox = styled ('div') (
  {},
  mq ({
    width: ['100%', '66%'],
  })
);

const SidebarBox = styled ('div') (
  {},
  mq ({
    width: ['100%', '33%'],
  })
);

class IndexPage extends React.Component {
  componentDidMount () {
    AOS.init ();
  }

  componentDidUpdate () {
    AOS.refresh ();
  }

  render () {
    return (
      <BaseLayout
        title="Webiny - Serverless CMS powered by GraphQL and React"
        description="Webiny is a modern open source content management designed to run in a serverless environment.  Webiny is powered by React, Node and GraphQL.  Webiny features a visual page builder, so you can quickly create stunning web pages."
      >
        <Hero />
        <WebinyUsage />
        <CmsV2 />
        <Developers data-aos="fade-up" />
        <QuickStart data-aos="fade-up" />
        <Serverless data-aos="fade-up" />
        <FaqAndSidebar data-aos="fade-up">
          <FaqAndSidebarFaqBox>
            <Faq />
          </FaqAndSidebarFaqBox>
          <SidebarBox>
            <Sidebar />
          </SidebarBox>
        </FaqAndSidebar>
      </BaseLayout>
    );
  }
}

export default IndexPage;
