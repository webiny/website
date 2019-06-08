import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import Link from 'gatsby-link';
import ContentContainer from '../../ui/content-container';

import rightArrow from './assets/arrow-right-solid.svg';
import background from './assets/platform-bg.svg';
import box1Bg from './assets/platform-bg-1.svg';
import box2Bg from './assets/platform-bg-2.svg';
import box3Bg from './assets/platform-bg-3.svg';

const wrapperClass = css (
  {
    background: 'url(' + background + ') no-repeat left top',
    backgroundSize: 'cover',
  },
  mq ({
    backgroundColor: ['#7B39D9', '#F7F7F7'],
    marginTop: [0, 0],
    paddingTop: [0, 120],
    paddingBottom: [0, 50],
  })
);

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.white,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 25,
  marginBottom: 10,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.h3,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.white,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    maxWidth: 680,
  },
  mq ({
    margin: ['20px', '0 auto 75px auto'],
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
    backgroundRepeat: 'no-repeat',
    padding: 40,
    h3: {
      fontSize: theme.fontSize.h4,
      color: theme.color.white,
      marginTop: 0,
      fontWeight: theme.fontWeight.bold,
      display: 'flex',
      alignItems: 'center',
      img: {
        marginRight: 20,
      },
    },
    p: {
      fontSize: theme.fontSize.paragraph,
      color: theme.color.white,
      lineHeight: '160%',
    },
    '&.headingCell': {
      h3: {
        fontSize: theme.fontSize.h2,
        fontWeight: theme.fontWeight.semiBold,
      },
      p: {
        fontSize: 18,
      },
    },
    '&:last-child': {
      marginRight: '0 !important',
    },
  },
  mq ({
    marginRight: [0, 50],
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

const ComingSoon = styled ('div') ({
  fontSize: 10,
  textTransform: 'uppercase',
  color: theme.color.black,
  backgroundColor: theme.color.darkGray,
  borderRadius: 5,
  padding: '2px 5px',
  marginTop: 2,
  marginLeft: 10,
});

const linkStyle = css ({
  color: theme.color.white,
  fontWeight: theme.fontWeight.bold,
  fontSize: 18,
});

const Arrow = styled ('img') ({
  height: 9,
  marginLeft: 5,
});

class Platform extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>The Platform</SubTitle>
        <SubText>
          Simply providing a great CMS solves only half of the problem.
          Webiny is going that extra mile, it makes a true difference.
        </SubText>

        <ContentContainer>
          <Grid>
            <Cell style={{backgroundImage: 'url(' + box1Bg + ')'}}>
              <h3>Webiny Serverless Cloud</h3>
              <p>
                The CMS API is hosted inside a function. Each user can extend the API and upload custom code.
                {' '}
                The serverless cloud provides a cost-effective, but scalable infrastructure to run your code.
              </p>
            </Cell>
            <Cell style={{backgroundImage: 'url(' + box3Bg + ')'}}>
              <h3>Webiny CLI</h3>
              <p>
                Use the CLI to quickly set up a Webiny instance locally on your machine.
                {' '}
                And when you are ready, with a single command you can deploy your project to our serverless cloud.
                {' '}
                With the CLI can also automate all your DevOps pipelines.
              </p>
            </Cell>
            <Cell style={{backgroundImage: 'url(' + box2Bg + ')'}}>
              <h3>Headless <ComingSoon>Coming Soon</ComingSoon></h3>
              <p>
                Although Webiny has a visual page builder and a client-side, Webiny also features a headless module.
                {' '}
                You can use our GraphQL API to programmatically control and manage your content.
              </p>
            </Cell>
          </Grid>
          <Grid>
            <Cell style={{textAlign: 'center', marginTop: 25, minHeight: 50}}>
              <Link className={linkStyle} to="/features/platform">
                Learn more about the platform
                <Arrow src={rightArrow} />
              </Link>
            </Cell>
          </Grid>
        </ContentContainer>
      </section>
    );
  }
}

export default Platform;
