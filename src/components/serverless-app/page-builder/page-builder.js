import React from 'react';
import {css, keyframes} from 'emotion';
import Hero from '../components/hero';
import {List, ListItem} from '../components/list';
import FeatureBox from '../components/feature-box';
import ContentContainer from '../../ui/content-container';
import Installing from '../components/installing';
import YTVideo from '../components/yt-video';
import {SubTitle} from '../components/titles';
import {Grid, Cell} from '../../ui/layout/layout';
import VideoBox from '../../ui/layout/video-box';
import QuickStart from '../../ui/layout/footer';
import AppList from '../components/app-list';

import videoBg from './assets/webiny-video-bg.jpg';
import HeroBg from './assets/hero-bg.svg';
import PageBuilderDemoImg from './assets/page-builder-demo.png';
import PageBuilderVideo from './assets/01-page-builder.mp4';
import BuildingBlocksVideo from './assets/02-building-blocks.mp4';
import PageRevisionsVideo from './assets/03-page-revisions.mp4';
import PageElementsVideo from './assets/04-page-elements.mp4';
import SeoVideo from './assets/05-seo.mp4';
import MenuVideo from './assets/06-menu.mp4';
import PageCategoriesVideo from './assets/07-page-categories.mp4';

const featureContainer = css ({
  display: 'flex',
  marginBottom: 50,
});

export default ({children, ...props}) => (
  <React.Fragment>
    <Hero
      bg={HeroBg}
      appName={'Page Builder'}
      title={
        'Build stunning landing pages with an easy to use drag&drop editor'
      }
      github="https://github.com/webiny/webiny-js"
      media={<img src={videoBg} alt="Webiny Serverless Page Builder" />}
    >
      <List>
        <ListItem title={'Serverless & Self-hosted'}>
          - Quick and easy deployment with Serverless Framework
        </ListItem>
        <ListItem title={'Easy Theming'}>
          - Themes are created using
          JavaScript and SCSS.{' '}
        </ListItem>
        <ListItem title={'Mobile responsive'}>
          - All the generated pages will look
          great on any device and screen size.
        </ListItem>
      </List>
    </Hero>

    <ContentContainer className={featureContainer}>
      <FeatureBox>
        Great for building landing pages and marketing sites
      </FeatureBox>
      <FeatureBox>
        Simple and intuitive UI that anyone can use
      </FeatureBox>
      <FeatureBox>
        Expand the capabilities by developing plugins
      </FeatureBox>
    </ContentContainer>
    <ContentContainer className={featureContainer}>
      <FeatureBox>
        Build your own theme
      </FeatureBox>
      <FeatureBox>
        All pages are mobile responsive
      </FeatureBox>
      <FeatureBox>
        SEO and Social media friendly
      </FeatureBox>
    </ContentContainer>

    <YTVideo img={PageBuilderDemoImg} id={'OQOmJZxT5dg'} />

    <ContentContainer>
      <SubTitle>Features</SubTitle>
      <Grid left>
        <Cell>
          <VideoBox file={PageBuilderVideo} />
        </Cell>
        <Cell title="Drag&drop page builder">
          <p>
            Unleash your creativity. Don’t constrain your content inside a "textarea". Webiny features, not a text editor, but a full featured drag&drop builder, allowing you to build more engaging pages and present your content in the way it deserves. Your users will thank you.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Building blocks included">
          <p>
            Often a CMS gives you the option to arrange your content in a crude and boring way and your users will notice that. So, what good is a CMS if it’s not keeping your users engaged?
          </p>
          <p>
            To spin things around, Webiny features a set of built-in inspirational content blocks that you can just drop into your page and adjust it to fit your needs. It will make every page a unique engaging experience.
          </p>
        </Cell>
        <Cell>
          <VideoBox file={BuildingBlocksVideo} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <VideoBox file={PageRevisionsVideo} />
        </Cell>
        <Cell title="Page revisions">
          <p>
            Never lose sight of who changed what. Have a time machine for your content.  Be able to go back and restore previous versions of a page, or quickly test  between multiple revisions.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Page elements">
          <p>
            The page editor features over 15 different elements that you can add to your page allowing you to create rich experiences for your visitors.
            {' '}
            If an element is missing, it’s easy to create new ones as they are simple React components. Each one can control its presentation layer, as well as additional settings and configuration options.
            {' '}
          </p>
        </Cell>
        <Cell>
          <VideoBox file={PageElementsVideo} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <VideoBox file={SeoVideo} />
        </Cell>
        <Cell title="SEO & social media">
          <p>
            You can control your SEO title, description, keywords as well as any other tag that you require. On top of that, the Page builder comes with a set of predefined OpenGraph fields through which you can define how your page will look like when share across different social media sites.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Navigation menus">
          <p>
            Menus and navigation are crucial part of every site. The Page builder includes also a module for building navigational menus. You can insert pages, a list of pages, create sub-tree navigations as well as add external links.
          </p>
        </Cell>
        <Cell>
          <VideoBox file={MenuVideo} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <VideoBox file={PageCategoriesVideo} />
        </Cell>
        <Cell title="Organize your content">
          <p>
            To better organise your content, each page belongs to a specific page category. A category defines which theme layout will be used to display the page content, as well as a URL prefix, to make the URL look nicer and more structured.
          </p>
        </Cell>
      </Grid>
    </ContentContainer>
    <AppList />
    <QuickStart />
  </React.Fragment>
);
