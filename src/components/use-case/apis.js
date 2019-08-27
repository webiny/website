import React from 'react';
import ContentContainer from '../ui/content-container';
import Footer from '../ui/layout/footer';
import Title from '../ui/layout/title';
import Header from '../ui/layout/header';
import {Grid, Cell} from '../ui/layout/layout';

import headerBg from './assets/header-bg-apis.svg';

import imgGraphQL from './assets/apis/graphql.svg';
import imgApollo from './assets/apis/apollo.svg';
import imgAcl from './assets/apis/acl.svg';
import imgHosted from './assets/apis/hosted-env.svg';
import imgMicroservices from './assets/apis/microservices.svg';
import imgCli from './assets/apis/webiny-cli.svg';

const APIs = () => (
  <React.Fragment>
    <Header bg={headerBg}>
      <Title>Create GraphQL APIs for your mobile and web apps</Title>
    </Header>
    <ContentContainer>
      <Grid left>
        <Cell>
          <img src={imgGraphQL} />
        </Cell>
        <Cell title="Use GraphQL, the better way to build APIs">
          <p>
            GraphQL brings numerous benefits over REST, however, some of the setup and
            configuration can be challenging. With Webiny, you’ll get a preconfigured
            environment and you can start creating your GraphQL API right away.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Take the  microservices approach">
          <p>
            It’s the latest and greatest that technology provides, however it's quite
            hard to configure everything correctly. With Webiny you'll get the whole
            setup for all your services included, as we'll as deploying new services is
            super easy.
          </p>
        </Cell>
        <Cell>
          <img src={imgMicroservices} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <img src={imgApollo} />
        </Cell>
        <Cell title="Apollo Federation">
          <p>
            Having multiple APIs is usually a requirement for any larger application. In
            many cases, this ends up being a monolithic structure. To avoid that, Webiny
            uses Apollo Federation which allows you to have multiple GraphQL services in
            a single graph distributed across multiple functions.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Built-in access control layer">
          <p>
            The fine-grain ACL layer inside Webiny allows you to configure user access
            rights to the smallest unit. You can also issue API tokens for users to use
            inside applications and 3rd party services.
          </p>
        </Cell>
        <Cell>
          <img src={imgAcl} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <img src={imgHosted} />
        </Cell>
        <Cell title="Great performance with serverless functions">
          <p>
            Building a great home for your API is challenging. We have invested
            significant time in creating Webiny specifically for serverless environments
            so your API feels safe, performs amazingly well and scales to handle any
            demand.
          </p>
        </Cell>
      </Grid>
    </ContentContainer>
    <Footer />
  </React.Fragment>
);

export default APIs;
