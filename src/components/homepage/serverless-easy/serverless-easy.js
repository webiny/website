import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Button from '../../ui/button';
import {trackGoToGithub, trackJoinSlack} from '../../ui/functions';

import webinyBg from './assets/easy-serverless-bg.svg';
import developerImg from './assets/developer.svg';
import openSourceImg from './assets/octocat.svg';
import communityImg from './assets/community.svg';
import githubImg from './assets/github.svg';

const wrapperClass = css (
  {
    backgroundColor: theme.color.white,
    backgroundSize: 'cover',
  },
  mq ({
    padding: ['0 15px 60px 15px', '25px 0 150px 0'],
  })
);

const contentContainerClass = css (
  {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 1200,
    boxSizing: 'border-box',
  },
  mq ({
    width: ['100%', '100%'],
    height: ['100%', 'auto'],
    padding: [0, '0px 16px', 0],
  })
);

const SubTitle = styled ('h2') ({
  fontSize: 36,
  fontWeight: 700,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  maxWidth: 600,
  margin: '25px auto',
});

const Wrapper = styled ('div') (
  {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 60,
  },
  mq ({
    flexDirection: ['column', 'row'],
    alignItems: ['center', 'flex-start'],
  })
);

const TitleHighlight = styled ('span') ({
  backgroundImage: 'url(' + webinyBg + ')',
  backgroundPositionX: 'right',
  backgroundPositionY: 'bottom',
  backgroundRepeat: 'no-repeat',
});

const ReasonBox = styled ('div') (
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& img': {
      marginBottom: 18,
      height: 200,
    },

    '& .title-wrapper': {
      display: 'flex',
      alignItems: 'baseline',
      marginBottom: 10,

      '& .number': {
        color: theme.color.primaryDark,
        fontSize: 40,
        fontWeight: 700,
        marginRight: 8,
      },
      '& h4': {
        fontSize: 32,
        margin: 0,
      },
    },
    '& .text': {
      fontSize: 18,
      textAlign: 'center',

      '& a': {
        color: theme.color.primaryDark,
      },
    },
  },
  mq ({
    width: [315],
    marginBottom: [40, 0],
  })
);

const ButtonWrapper = styled ('div') ({
  display: 'flex',
  justifyContent: 'center',
});

const ctaButton = css (
  {
    a: {
      textTransform: 'uppercase',
      padding: '10px 12px !important',
    },
    zIndex: 1,
  },
  mq ({
    width: ['90% !important', '260px !important'],
  })
);

const DemoIcon = styled ('img') (
  {
    width: 20,
    height: 20,
    position: 'relative',
    marginRight: 10,
  },
  mq ({
    display: ['block'],
  })
);

class ServerlessMadeEasy extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <ContentContainer className={contentContainerClass}>
          <SubTitle>
            Serverless makes infrastructure easy, Webiny makes{' '}
            <TitleHighlight>serverless easy</TitleHighlight>
          </SubTitle>
          <Wrapper>
            <ReasonBox>
              <img src={developerImg} alt="developer friendly" />
              <div className="title-wrapper">
                <span className="number">1.</span>
                <h4>Developer-friendly</h4>
              </div>
              <p className="text">
                Webiny has been made with the developer in mind. It helps them develop serverless
                applications with ease.
              </p>
            </ReasonBox>
            <ReasonBox>
              <img src={openSourceImg} alt="open source" />
              <div className="title-wrapper">
                <span className="number">2.</span>
                <h4>Open source</h4>
              </div>
              <p className="text">
                Webiny is created and maintained by an amazing group of people. Being open source
                means Webiny grows and evolves much faster.&nbsp;
                <a
                  onClick={() => {
                    trackGoToGithub ({placement: 'serverless-easy'});
                  }}
                  href="https://github.com/webiny/webiny-js/blob/master/docs/CONTRIBUTING.md"
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  Contributors
                </a>{' '}
                are welcome.
              </p>
            </ReasonBox>
            <ReasonBox>
              <img src={communityImg} alt="It's a community" />
              <div className="title-wrapper">
                <span className="number">3.</span>
                <h4>It's a community</h4>
              </div>
              <p className="text">
                We have an active community on{' '}
                <a
                  onClick={() => {
                    trackJoinSlack ({placement: 'serverless-easy'});
                  }}
                  href="/slack"
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  slack
                </a>
                . Talk to the core-team, and get help. Webiny team is always there for any
                questions.
              </p>
            </ReasonBox>
          </Wrapper>
          <ButtonWrapper>
            <div
              className={ctaButton}
              onClick={() => {
                trackGoToGithub ({placement: 'serverless-easy-cta'});
              }}
            >
              <Button
                link={'https://github.com/webiny/webiny-js'}
                target={'_blank'}
                type="secondary"
              >
                <DemoIcon src={githubImg} />
                View Webiny on GitHub
              </Button>
            </div>
          </ButtonWrapper>
        </ContentContainer>
      </section>
    );
  }
}

export default ServerlessMadeEasy;
