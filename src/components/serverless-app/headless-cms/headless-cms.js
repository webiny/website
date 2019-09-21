import React from 'react';
import {css} from 'emotion';
import Hero from '../components/hero';
import {List, ListItem} from '../components/list';
import FeatureBox from '../components/feature-box';
import ContentContainer from '../../ui/content-container';
import mq from '../../utils/breakpoints';
import QuickStart from '../../ui/layout/footer';
import AppList from '../components/app-list';
import SlsDesign from '../components/serverless-design.js';

import HeroBg from './assets/hero-bg.svg';
import ComingSoon from './coming-soon';

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
      media={<ComingSoon />}
    >
      <List>
        <ListItem title={'Serverless & Self-hosted'}>
          - Quick and easy deployment with Serverless Framework
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
        Multi-language support out-of-the-box
      </FeatureBox>
      <FeatureBox>
        Create relationships between your content types
      </FeatureBox>
    </ContentContainer>
    <ContentContainer className={featureContainer}>
      <FeatureBox>
        Includes content modeling and content delivery API
      </FeatureBox>
      <FeatureBox>
        Manage your files and media assets
      </FeatureBox>
      <FeatureBox>
        Control roles & permissions ensuring your content is safe
      </FeatureBox>
    </ContentContainer>

    <AppList />
    <QuickStart />
  </React.Fragment>
);
