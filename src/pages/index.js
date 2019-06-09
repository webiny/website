import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BaseLayout from '../layouts/base';
import Hero from '../components/homepage/hero/hero';
import MadeFor from '../components/homepage/made-for/made-for';
import WebinyUsage
  from '../components/homepage/what-can-you-do/what-can-you-do';
import QuickStart from '../components/ui/quick-start/quick-start';
import Components from '../components/homepage/components/components';
import Platform from '../components/homepage/platform/platform';
import CaseStudies from '../components/homepage/case-studies/case-studies';

class IndexPage extends React.Component {
  componentDidMount () {
    AOS.init ({
      once: true,
    });
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
        <CaseStudies />
        <MadeFor />
        <Components />
        <Platform />
        <QuickStart data-aos="fade-up" />
      </BaseLayout>
    );
  }
}

export default IndexPage;
