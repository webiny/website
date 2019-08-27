import React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import ContentContainer from '../ui/content-container';
import {Grid, Cell} from '../ui/layout/layout';

import sectionBg from './assets/light-gray-bg.svg';
import imgRightTool from './assets/right-tool.svg';
import imgWhereToStart from './assets/where-to-start.svg';
import imgArchitecture from './assets/architecture.svg';
import imgAcl from './assets/acl.svg';
import imgLocalEnv from './assets/local-env.svg';
import imgSsr from './assets/ssr.svg';

const wrapperClass = css (
  {
    //background: 'url(' + sectionBg + ') no-repeat left top',
    backgroundSize: 'contain',
    backgroundColor: 'transparent',
  },
  mq ({
    marginTop: [0, -200],
    paddingTop: [0, 200],
    paddingBottom: [25, 100],
  })
);

const SubTitle = styled ('h2') (
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 50,
    margin: '25px auto 40px auto',
  },
  mq ({
    width: ['100%', 675],
  })
);

const Bold = styled ('span') ({
  fontWeight: theme.fontWeight.bold,
});

const Challenges = () => (
  <section className={wrapperClass}>
    <SubTitle>
      However There Are Some Challenges Going Serverless, but Webiny Helps Solve Those
      {' '}
    </SubTitle>
    <ContentContainer>
      <Grid left>
        <Cell>
          <img src={imgRightTool} alt="Right tools and processes" />
        </Cell>
        <Cell title="Right tools and processes">
          <p>
            <Bold>Challenge:</Bold>
            {' '}
            How do you structure your project, how do you deploy it, and how do you access it.
          </p>
          <p>
            <Bold>Solution:</Bold>
            {' '}
            Webiny has a ready made structure that works for any type of a project, be that a website, an app or an API. And to deploy and access your project Webiny comes with a pre-made Serverless Framework configuration which deploys your project with a single command.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Where to start?">
          <p>
            <Bold>Challenge:</Bold>
            {' '}
            Often jumping into a new technology is scary, especially if you need to go throuh a series of tutorials just to get to hello world.
          </p>
          <p>
            <Bold>Solution:</Bold>
            {' '}
            Webiny comes with several ready-made serverless apps, which you install and deploy with a few simple commands, and right away you have a working app that you can interact with. It’s much more satisfying than just having a hello world on your screen.
            {' '}
          </p>
        </Cell>
        <Cell>
          <img src={imgWhereToStart} alt="Where to start?" />
        </Cell>
      </Grid>

      <Grid left>
        <Cell>
          <img src={imgArchitecture} alt="What’s the right architecture?" />
        </Cell>
        <Cell title="What’s the right architecture?">
          <p>
            <Bold>Challenge:</Bold>
            {' '}
            What architecture should I use for my project and how do I put it in place?
          </p>
          <p>
            <Bold>Solution:</Bold>
            {' '}
            Webiny architecture is designed and coded from ground up for the serverless environment.  Your applications will automatically benefit just by running on top of it, so you don’t need to experiment, lose time and learn the hard way.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="How do I manage users and their permissions?">
          <p>
            <Bold>Challenge:</Bold>
            {' '}
            Creating an ACL is hard, and doing one inside serverless has its own set of unique challenges.
          </p>
          <p>
            <Bold>Solution:</Bold>
            {' '}
            Webiny’s built-in ACL comes with a GraphQL integration, and the ability to create not just users, but also API tokens and all is controlled via a friendly user interface. The whole logic is running inside a dedicated serverless function.
            {' '}
          </p>
        </Cell>
        <Cell>
          <img
            src={imgAcl}
            alt="How do I manage users and their permissions?"
          />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <img src={imgSsr} alt="But my site requires server-side render" />
        </Cell>
        <Cell title="But my site requires server-side render">
          <p>
            <Bold>Challenge:</Bold>
            {' '}
            How do you do SSR inside a serverless function and get that full SEO value?
          </p>
          <p>
            <Bold>Solution:</Bold>
            {' '}
            Webiny comes with a dedicated function that specifically handles SSR. You don’t need to configure or install anything separately, it’s all included and pre-configured for you.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="How do I install and run everything locally?">
          <p>
            <Bold>Challenge:</Bold>
            {' '}
            A serverless function is a cloud-native service, so how do you replicate the whole setup on your local development environment?
          </p>
          <p>
            <Bold>Solution:</Bold>
            {' '}
            Webiny has been built with a developer in mind. The whole Webiny setup is created so it can be installed and replicated on your local machine with just a few simple command, and it will run identically to when you deploy it to your cloud provider and their environment.
            {' '}
          </p>
        </Cell>
        <Cell>
          <img
            src={imgLocalEnv}
            alt="How do I install and run everything locally?"
          />
        </Cell>
      </Grid>
    </ContentContainer>
  </section>
);

export default Challenges;
