import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {SubTitle} from '../components/typography';
import ContentContainer from '../../ui/content-container';
import Button from '../../ui/button';
import {trackGoToGithub} from '../../ui/functions';

import webinyStack from './assets/webiny-stack.png';
import githubIcon from './assets/github-icon.svg';
import docsIcon from './assets/docs-icon.svg';
import storybookIcon from './assets/storybook-icon.svg';

const stackImage = css (
  {
    margin: '0 auto',
    display: 'block',
  },
  mq ({
    width: ['100%', 850],
  })
);

const Text = styled ('p') ({
  maxWidth: 700,
  margin: '0 auto 15px auto',
  textAlign: 'center',
  fontSize: 18,
});

const BlockSection = styled ('section') (
  {
    backgroundColor: theme.color.lightGray,
    borderTop: '1px solid ' + theme.color.darkGray,
  },
  mq ({
    padding: [25, 50],
  })
);

const Grid = styled ('div') (
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    '&.first': {
      marginTop: 100,
      marginBottom: 50,
    },
  },
  mq ({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 0],
    '&.first': {
      margin: [0, '100px 0px'],
    },
  })
);

const Cell = styled ('div') (
  {
    boxSizing: 'border-box',
    flexBasis: '100%',
    backgroundColor: '#fff',
    border: '1px solid #E6E6E6',
    boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
    borderRadius: 5,
    padding: 40,
    h3: {
      fontSize: 18,
      color: theme.color.black,
      marginBottom: 25,
      marginTop: 25,
      fontWeight: theme.fontWeight.regular,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      img: {
        marginRight: 20,
      },
    },
    h4: {
      fontSize: 24,
      color: theme.color.primaryDark,
      marginTop: 25,
      textAlign: 'center',
    },
    img: {
      width: 100,
      display: 'block',
      margin: '0 auto',
    },
    '&:last-child': {
      marginRight: '0 !important',
    },
  },
  mq ({
    marginRight: [0, 75],
    marginBottom: [25, 0],
    minHeight: [400, 380],
    textAlign: ['center', 'left'],
    '.image': {
      border: '1px solid #E6E6E6',
      boxShadow: '0 4px 8px 0 rgba(209,209,209,0.50)',
      borderRadius: 5,
      width: ['100%', '630px'],
    },
    '.image-small': {
      border: '1px solid #E6E6E6',
      boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
      borderRadius: 5,
      width: ['100%', '330px'],
    },
    h3: {
      justifyContent: ['center', 'flex-start'],
    },
  })
);

const ctaButton = css ({
  marginBottom: 25,
  '&:last-child': {
    marginBottom: 0,
  },
});

const Blocks = () => (
  <ContentContainer>
    <Grid>
      <Cell>
        <img src={githubIcon} alt="Learn" />
        <h4>GitHub</h4>
        <h3>
          Explore and join our community on GitHub
          <br /><br />
        </h3>
        <div
          onClick={() => {
            trackGoToGithub ({placement: 'serverless-apps'});
          }}
        >
          <Button
            className={ctaButton}
            target="_blank"
            link="https://github.com/webiny/webiny-js"
            type="outlineDark"
          >
            View GitHub
          </Button>
        </div>
      </Cell>
      <Cell>
        <img src={docsIcon} alt="Explore" />
        <h4>Documentation</h4>
        <h3>
          Discover the articles and guides on our docs portal
          <br /><br />
        </h3>
        <Button
          className={ctaButton}
          target="_blank"
          link="https://docs.webiny.com/"
          type="outlineDark"
        >
          View Documentation
        </Button>
      </Cell>
      <Cell>
        <img src={storybookIcon} alt="Storybook" />
        <h4>Storybook</h4>
        <h3>
          Browse our React components, which you can use to build your own apps
        </h3>
        <Button
          className={ctaButton}
          target="_blank"
          link="https://storybook.webiny.com/"
          type="outlineDark"
        >
          View Storybook
        </Button>

      </Cell>
    </Grid>
  </ContentContainer>
);

class StackAndBlocks extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section>
          <SubTitle>Complete Serverless Development Stack</SubTitle>
          <Text>
            While building Webiny CMS we faced a lot of challenges. From architecture and performance to webpack configurations and deployments. Serverless is still a new thing on the market. It's hard to learn all the best practices and get all the tools and libraries working together.
          </Text>
          <Text>
            This is why we build the Serverless Web Development Framework. So you focus on your business logic and leave the heavy-lifting to the framework.
          </Text>
          <Text>
            Using this framework, we built the Webiny apps, such as the Headless CMS, Page Builder and others. You can rest assured that it works, it scales and it's easy to use.
          </Text>
          <img
            className={stackImage}
            src={webinyStack}
            alt="Webiny Serverless Development Stack"
          />
        </section>
        <BlockSection>
          <Blocks />
        </BlockSection>
      </React.Fragment>
    );
  }
}

export default StackAndBlocks;
