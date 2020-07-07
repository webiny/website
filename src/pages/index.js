import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BaseLayout from '../layouts/base';
import Hero from '../components/homepage/hero-new/hero';
import ServerlessEasy
  from '../components/homepage/serverless-easy/serverless-easy';

import GoServerless from '../components/homepage/go-serverless/go-serverless';
import ReadyMadeApps
  from '../components/agency/ready-made-apps/ready-made-apps';
import ServerlessDIY
  from '../components/homepage/serverless-diy/serverless-diy';
import WhyWebinyWhyServerless
  from '../components/homepage/why-serverless/why-serverless';
import WhyIsWebiny from '../components/homepage/what-is-webiny/what-is-webiny';
import ClientsLogo from '../components/homepage/clients-logo/clients-logo';

class IndexPage extends React.Component {
  componentDidMount () {
    AOS.init ();
  }

  render () {
    return (
      <BaseLayout
        title="Webiny - Serverless CMS powered by GraphQL and React"
        description="Webiny is a modern open source content management designed to run inside a serverless environment.  Webiny is powered by React, Node and GraphQL."
        fixedHeader={false}
      >
        <Hero />
        <ClientsLogo />
        <WhyIsWebiny />
        <WhyWebinyWhyServerless />
        <ServerlessDIY />
        <ReadyMadeApps cta={false} demoLink={'/agency#schedule-demo'} />
        <ServerlessEasy />
        <GoServerless />
      </BaseLayout>
    );
  }
}

export default IndexPage;
