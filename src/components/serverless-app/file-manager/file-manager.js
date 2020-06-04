import React from 'react';
import {css} from 'emotion';
import Hero from '../components/hero';
import {List, ListItem} from '../components/list';
import FeatureBox from '../components/feature-box';
import ContentContainer from '../../ui/content-container';
import {SubTitle} from '../components/typography';
import {Grid, Cell} from '../../ui/layout/layout';
import VideoBox from '../../ui/layout/video-box';
import QuickStart from '../../ui/layout/footer';
import AppList from '../components/app-list';
import mq from '../../utils/breakpoints';
import SlsDesign from '../components/serverless-design.js';

import HeroImage from './assets/file-manager.jpg';
import HeroBg from './assets/hero-bg.svg';
import background from './assets/gray-bg-with-bg.svg';

import DropFilesVideo from './assets/01-drop-files.mp4';
import ImageEditorVideo from './assets/02-image-editor.mp4';
import SearchVideo from './assets/03-search.mp4';
import TagsVideo from './assets/04-tags.mp4';
import LazyLoadVideo from './assets/05-lazy-load.mp4';

const featureContainer = css (
  {
    display: 'flex',
    marginBottom: 50,
  },
  mq ({
    flexDirection: ['column', 'row'],
  })
);

const videoFeaturesContainer = css (
  {
    background: 'url(' + background + ') no-repeat left top',
    backgroundSize: 'contain',
    textAlign: 'center',
    backgroundColor: '#F7F7F7',
    backgroundPosition: '0 -5px',
  },
  mq ({
    margin: [0, '-100px auto 0 auto'],
    padding: [0, '200px 0 50px 0'],
  })
);

export default ({children, ...props}) => (
  <React.Fragment>
    <Hero
      bg={HeroBg}
      appName={'File Manager'}
      title={'Upload, Categorize, Search and Edit Your Files'}
      getStarted="https://docs.webiny.com/docs/webiny-apps/file-manager/getting-started"
      media={<img src={HeroImage} alt="Webiny Serverless File Manager" />}
    >
      <List>
        <ListItem title={'Serverless & Self-hosted'}>
          - Quick and easy deployment using Webiny CLI.
        </ListItem>
        <ListItem title={'Cloud Native'}>
          - Designed to work with a cloud storage service like AWS S3.
        </ListItem>
        <ListItem title={'Data Optimized'}>
          - Handle large amounts of files and images in an optimal way.
        </ListItem>
      </List>
    </Hero>
    <SlsDesign />

    <ContentContainer className={featureContainer}>
      <FeatureBox>
        Integrated throughout all Webiny apps
      </FeatureBox>
      <FeatureBox>
        Built-in image editor
      </FeatureBox>
      <FeatureBox>
        Select and upload a single, or multiple files in one go
      </FeatureBox>
    </ContentContainer>
    <ContentContainer className={featureContainer}>
      <FeatureBox>
        Tag files for better search results
      </FeatureBox>
      <FeatureBox>
        A component you can integrate into your own apps
      </FeatureBox>
      <FeatureBox>
        It can work with any 3rd party storage service
      </FeatureBox>
    </ContentContainer>

    <section className={videoFeaturesContainer}>
      <ContentContainer>
        <SubTitle>Features</SubTitle>
        <Grid left>
          <Cell>
            <VideoBox file={DropFilesVideo} />
          </Cell>
          <Cell title="Just drop your files">
            <p>
              You can drop a single file, or multiple files at once. In case drag&drop is not handy, you can use the upload button at the top to add your files.
            </p>
          </Cell>
        </Grid>
        <Grid right>
          <Cell title="Built-in image editor">
            <p>
              Images are often the types of files that need that extra touch. With File Manager, you can manipulate an image and apply different filter to it right there from within the UI. It will create a copy of the original image, so you never lose the source file.
            </p>
          </Cell>
          <Cell>
            <VideoBox file={ImageEditorVideo} />
          </Cell>
        </Grid>
        <Grid left>
          <Cell>
            <VideoBox file={SearchVideo} />
          </Cell>
          <Cell title="Find the right files with ease">
            <p>
              There is an always-visible search bar at the top of the screen. Any word you type in, the system will try to match against the file name, any of the tags or the file label. This makes it easy to find the file you're looking for.
            </p>
          </Cell>
        </Grid>
        <Grid right>
          <Cell title="Tag and organize files">
            <p>
              Tags are visible on the left side of the screen. They act similar to a folder. Clicking a tag, will only show images that have that tag applied. You can always create new tags by simply tagging an image.
            </p>
          </Cell>
          <Cell>
            <VideoBox file={TagsVideo} />
          </Cell>
        </Grid>
        <Grid left>
          <Cell>
            <VideoBox file={LazyLoadVideo} />
          </Cell>
          <Cell title="Don't worry about about how many files you have">
            <p>
              In some cases, when you have a big number of images, they can slow down the load time it takes to display all that content on your screen. Often systems introduce pagination to avoid that, but that's clumsy to use. Webiny File Manager uses an infinitive scroll and lazy loading mechanism. This way the content is displayed right away, and there is no need to click through pages.
            </p>
          </Cell>
        </Grid>
      </ContentContainer>
    </section>
    <AppList style={{backgroundColor: '#F7F7F7'}} />
    <QuickStart />
  </React.Fragment>
);
