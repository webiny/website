import React from 'react';
import {css} from 'emotion';
import Hero from '../components/hero';
import {List, ListItem} from '../components/list';
import FeatureBox from '../components/feature-box';
import ContentContainer from '../../ui/content-container';
import mq from '../../utils/breakpoints';
import YTVideo from '../components/yt-video';
// headless-cms-demo png
import HeadlessCMSDemoImg from './assets/youtube-headless-cms.png';
import {SubTitle} from '../components/typography';
import {Grid, Cell} from '../../ui/layout/layout';
import VideoBox from '../../ui/layout/video-box';
import QuickStart from '../../ui/layout/footer';
import AppList from '../components/app-list';
import SlsDesign from '../components/serverless-design.js';
import HeroBg from './assets/hero-bg.svg';
import ComingSoon from './coming-soon';
import {FirstBlock, SecondBlock} from './stack-and-blocks';
import WhyChooseWebiny from '../../agency/why-choose-webiny/why-choose-webiny';
import ServerlessBenefits
  from '../../homepage/serverless-benefits/serverless-benefits';

import ContentModelingVideo from './assets/content-modeling.mp4';
import GraphQLPlaygroundVideo from './assets/graphql-playground.mp4';
import AssetsVideo from './assets/asset-management.mp4';
import EnvironmentsVideo from './assets/environments.mp4';
import HeadlessCMSCover from './assets/headless-cms-cover-graphql.png';
import DeviceAgnostic from './assets/device-agnostic-img.svg';

const featureContainer = css (
  {
    display: 'flex',
    marginBottom: 50,
    boxSizing: 'border-box',
  },
  mq ({
    flexDirection: ['column', 'row'],
  })
);

export default ({children, ...props}) => (
  <React.Fragment>
    <Hero
      bg={HeroBg}
      appName={'Headless CMS'}
      title={
        'GraphQL Based Headless CMS With Powerful Content Modeling Features'
      }
      media={
        <img
          src={HeadlessCMSCover}
          alt="Webiny Serverless Headless CMS - OpenSource"
          style={{border: 'none'}}
        />
      }
    >
      <List>
        <ListItem title={'Serverless & Self-hosted'}>
          - Quick and easy deployment using Webiny CLI
        </ListItem>
        <ListItem title={'GraphQL APIs'}>
          - There are 2 APIs, one for content management and one for content delivery.
        </ListItem>
        <ListItem title={'Content Modeling'}>
          - Use the simple and intuitive drag&drop editor to model your content.
        </ListItem>
      </List>
    </Hero>
    <SlsDesign />

    <ContentContainer className={featureContainer}>
      <FeatureBox>
        A true headless CMS, that's also serverless
      </FeatureBox>
      <FeatureBox>
        Save 60-80% on your cloud hosting bill
      </FeatureBox>
      <FeatureBox>
        Stop paying for stuff you don't use
      </FeatureBox>
    </ContentContainer>
    <ContentContainer className={featureContainer}>
      <FeatureBox>
        Multi-language support out-of-the-box
      </FeatureBox>
      <FeatureBox>
        Manage your files and media assets
      </FeatureBox>
      <FeatureBox>
        Control roles & permissions ensuring your content is safe
      </FeatureBox>
    </ContentContainer>

    <YTVideo img={HeadlessCMSDemoImg} id={'4jrv9ymlQuM'} />

    <ContentContainer>
      <SubTitle>Features</SubTitle>
      <Grid left>
        <Cell>
          <VideoBox file={ContentModelingVideo} />
        </Cell>
        <Cell title="Content Modeling">
          <p>
            Powerful modelling features allow you to model the content and define relationships using a simple drag&drop editor.
          </p>
          <p>
            At the same time, you are also building the UI for the input forms. Ensuring your editors have a pleasant user-experience while
            working with your content.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Content Localisation">
          <p>
            The localisation support is built into the core of Webiny Headless CMS. All your content is translateable and distributable in several languages.
          </p>
          <p>
            Each editor chooses the languages they are working on. They can also instantly see the values of a specific field on all other languages.
          </p>
        </Cell>
        <Cell>
          <VideoBox />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <VideoBox file={GraphQLPlaygroundVideo} />
        </Cell>
        <Cell title="GraphQL API + Playground">
          <p>
            Both our management and our distribution API are powered by GraphQL. On top of that, Webiny exposes a GraphQL Playground you can use to
            easily test and debug your API calls.
          </p>
        </Cell>
      </Grid>
    </ContentContainer>

    <FirstBlock />

    <ContentContainer>
      <Grid right>
        <Cell title="Asset Management">
          <p>
            Webiny File Manager is integrated directly into the Headless CMS giving you a whole asset management solution with integrated
            tagging, searching and image editing features.
          </p>
        </Cell>
        <Cell>
          <VideoBox file={AssetsVideo} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <VideoBox file={EnvironmentsVideo} />
        </Cell>
        <Cell title="Environments">
          <p>
            Environments are a powerful feature in Webiny Headless CMS. Creating a new environment copies all the data and all the models from the
            current environment. This allows you to make changes and prepare new content in the background, while still serving production content
            without interruption.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Aliases">
          <p>
            Aliases go in hand with environments. Each environment is linked to an alias, which defines the GraphQL endpoint and which content and model
            are going to be served.
          </p>
          <p>
            An alias can be unlinked from one environment and linked to another environment. This allows instant switching between different version of your
            content, as well as instant rollbacks.
          </p>
        </Cell>
        <Cell>
          <VideoBox />
        </Cell>
      </Grid>
    </ContentContainer>

    <SecondBlock />

    <ContentContainer>
      <Grid right>
        <Cell>
          <VideoBox />
        </Cell>
        <Cell title="Roles & Permissions">
          <p>
            The authentications and permissions are part of the Webiny core package and they also pass on to the Headless CMS.
            Create users, user groups, roles and permissions to control who and how they access the system.
          </p>
          <p>
            In addition to roles and permissions, each user can control their own set of personal access tokens.
          </p>
        </Cell>
      </Grid>
      <Grid left>
        <Cell title="Content Model Menus">
          <p>
            Webiny features a menu component that is extended via the content models from the Headless CMS. This allows you to build great
            backend experience for your team, making it easy and intuitive for them to find exactly the content they are looking for.
          </p>
        </Cell>
        <Cell>
          <VideoBox />
        </Cell>
      </Grid>
      <Grid right>
        <Cell>
          <img src={DeviceAgnostic} alt="Device & Frontend Agnostic" />
        </Cell>
        <Cell title="Device & Frontend Agnostic">
          <p>
            Webiny Headless CMS integrates with any web framework and even goes beyond that. Anything from building a website on top of Gatsby.js or using
            Swift and displaying the content on an Apple Watch is supported.
          </p>
        </Cell>
      </Grid>
    </ContentContainer>

    <WhyChooseWebiny />

    <ServerlessBenefits />

    <AppList />
    <QuickStart />
  </React.Fragment>
);
