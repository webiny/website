import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import Link from 'gatsby-link';
import ContentContainer from '../../ui/content-container';

import imgCommunityTools from './assets/community-tools.svg';
import imgCompleteEnv from './assets/complete-env.svg';
import imgJs from './assets/js.svg';
import imgMultiCloud from './assets/multi-cloud.svg';
import imgSls from './assets/sls.svg';
import imgMicroservices from './assets/microservices.svg';

const wrapperClass = css (
  {
    backgroundColor: 'transparent',
  },
  mq ({
    paddingTop: [0, 70],
    paddingBottom: [25, 100],
  })
);

const SubTitle = styled ('h2') ({
  fontSize: 42,
  //fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 25,
  marginBottom: 100,
});

const Grid = styled ('div') (
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  mq ({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 0],
    '&.first': {
      margin: [0, '100px 0px'],
    },
    margin: ['0', '50px 0 25px 0'],
  })
);

const Cell = styled ('div') (
  {
    boxSizing: 'border-box',
    flexBasis: '100%',
    textAlign: 'center',
    h3: {
      fontSize: 32,
      color: theme.color.black,
      margin: '20px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      img: {
        marginRight: 0,
      },
    },
    p: {
      fontSize: 18,
      color: theme.color.black,
      lineHeight: '160%',
    },
    img: {
      maxWidth: 250,
    },
    '&:nth-child(2)': {
      marginRight: '25px !important',
      marginLeft: '25px !important',
    },
  },
  mq ({
    marginRight: [0, 50],
    '&:last-child': {
      marginRight: ['0 !important', '0 !important'],
      marginLeft: ['0 !important', '50px !important'],
    },
    '.image-small': {
      width: ['100%', '325px'],
      margin: '0 auto',
    },
    h3: {
      flexDirection: ['column', 'row'],
    },
  })
);

const ComingSoon = styled ('div') ({
  fontSize: 10,
  textTransform: 'uppercase',
  color: theme.color.grayText,
  backgroundColor: theme.color.darkGray,
  borderRadius: 5,
  padding: '2px 5px',
  marginTop: 2,
  marginLeft: 10,
});

class WhyWebiny extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>Why Webiny CMS?</SubTitle>

        <ContentContainer>
          <Grid>
            <Cell>
              <img
                className={'image-small'}
                src={imgCommunityTools}
                alt="Made for developers"
              />
              <h3>Made for developers</h3>
              <p>
                We created Webiny with developers in mind. It’s a single platform built with community accepted tools and libraries.
              </p>
            </Cell>
            <Cell>
              <img
                className={'image-small'}
                src={imgMicroservices}
                alt="The future is serverless"
              />
              <h3>The future is serverless</h3>
              <p>
                Serverless will be the way how we create most, if not all, web applications and Webiny makes it real easy.
              </p>
            </Cell>
            <Cell>
              <img
                className={'image-small'}
                src={imgMultiCloud}
                alt="Multi cloud support"
              />
              <h3>
                Multi cloud support <ComingSoon>Coming Soon</ComingSoon>
              </h3>
              <p>
                Deployed Webiny to any of the major cloud providers, like AWS, GCP or Azure.
              </p>
            </Cell>
          </Grid>
          <Grid>
            <Cell>
              <img
                className={'image-small'}
                src={imgSls}
                alt="Serverless Framework"
              />
              <h3>Serverless Framework</h3>
              <p>
                Webiny uses Serverless Framework, so you benefit from its ecosystem
                of tools and plugins.
              </p>
            </Cell>
            <Cell>
              <img
                className={'image-small'}
                src={imgCompleteEnv}
                alt="Complete environment"
              />
              <h3>Complete environment</h3>
              <p>
                It’s a whole dev environment that’s ready to go. No need to
                configure webpack, babel, routing and other stuff. All you need is
                already there.
              </p>
            </Cell>
            <Cell>
              <img
                className={'image-small'}
                src={imgJs}
                alt="100% Javascript"
              />
              <h3>100% Javascript</h3>
              <p>
                One language is all you need to know, no matter if you’re coding a
                SPA or an API.
              </p>
            </Cell>
          </Grid>
        </ContentContainer>
      </section>
    );
  }
}

export default WhyWebiny;
