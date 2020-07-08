import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Button from '../../ui/button';
import {trackGaConversion} from '../../ui/functions';

import heroBg from './assets/hero-bg-with-scroll.svg';
import webinyLogo from './assets/webiny-logo.svg';
import vectorIcon from './assets/vector.svg';
import githubIcon from './assets/github-mark.svg';
import webinyEasyImg from './assets/easy-webiny.svg';
import webinyGroup from './assets/webiny-group.svg';
import circleIcon from './assets/circle.svg';

const HeroSection = styled ('section') (
  {
    backgroundColor: '#F6F4F8',
    position: 'relative',
    zIndex: 0,
    backgroundImage: 'url(' + heroBg + ')',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
  },
  mq ({
    backgroundSize: ['cover', 'auto', '100%'],
    backgroundPosition: ['center', 'top', 'top', 'center'],
    padding: ['0px 0px 110px', '0'],
    '@media (min-width: 1460px)': {
      backgroundPosition: 'bottom',
      paddingTop: 0,
    },
  })
);

const heroContainerClass = css (
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1200,
    position: 'relative',
  },
  mq ({
    width: ['100%', '100%'],
    height: ['100%', 560],
    padding: ['75px 0px 0px', '85px 0px 0px'],
    '@media (min-width: 2000px)': {
      paddingBottom: 80,
    },
  })
);

const HeroSectionWrapper = styled ('div') (
  {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url(' + webinyEasyImg + ')',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  },
  mq ({
    width: ['100%', 1100],
    backgroundSize: ['0', 'auto'],
    alignItems: ['center'],
  })
);

const Title = styled ('h1') (
  {
    maxWidth: 768,
    fontSize: 48,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.white,
    textAlign: 'center',
    lineHeight: '48px',
    marginBottom: 26,
  },
  mq ({
    marginLeft: [0, 'auto'],
    marginRight: [0, 'auto'],
  })
);

const TitleHighlight = styled ('span') ({
  backgroundImage: 'url(' + vectorIcon + ')',
  backgroundPositionX: 'right',
  backgroundPositionY: 'bottom',
  backgroundRepeat: 'no-repeat',
});

const SubTitle = styled ('h3') (
  {
    fontSize: 28,
    fontWeight: theme.fontWeight.regular,
    lineHeight: '34px',
    marginTop: 15,
    marginBottom: 40,
    color: theme.color.white,
    textAlign: 'center',
  },
  mq ({
    maxWidth: [337, 887],
    marginLeft: [0, 'auto'],
    marginRight: [0, 'auto'],
  })
);

const ButtonWrapper = styled ('div') (
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  mq ({
    flexDirection: ['column', 'row'],
    alignItems: ['center', 'flex-start'],
    marginBottom: [75, 50],
  })
);

const getStartedButtonClass = css (
  {
    backgroundColor: `${theme.color.yellow} !important`,
    textTransform: 'uppercase',
    padding: '10px 12px !important',
    height: '40px !important',
  },
  mq ({
    width: ['90% !important', '150px !important'],
    marginRight: ['0px !important', '22px !important'],
    marginBottom: ['16px !important', '0px !important'],
  })
);
const githubButtonClass = css (
  {
    textTransform: 'uppercase',
    padding: '10px 12px !important',
  },
  mq ({
    width: ['90% !important', '190px !important'],
  })
);

const ScheduleDemoImage = styled ('img') (
  {
    position: 'relative',
    width: 20,
    height: 20,
    marginRight: 8,
  },
  mq ({
    display: ['block'],
  })
);

const WebinyLogoImage = styled ('img') ({
  marginBottom: 12,
});

const FeatureWrapper = styled ('div') (
  {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 44,
  },
  mq ({
    flexDirection: ['column', 'row'],
  })
);

const Feature = styled ('div') ({
  display: 'flex',
  alignItems: 'center',
  marginRight: 50,
  '&:last-child': {
    marginRight: 0,
  },

  '& .feature-icon': {
    width: 20,
    height: 20,
    marginRight: 12,
  },

  '& .feature-text': {
    fontSize: 18,
    color: theme.color.white,
  },
});

const WebinyHallMarkImage = styled ('img') (
  {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
  },
  mq ({
    width: ['auto', '100%'],
    maxHeight: ['unset', 700],
    transform: ['translate(-35%, -8%)', 'none'],
  })
);

class HeroComponent extends React.Component {
  render () {
    const {handleDemoClick, ...restProps} = this.props;
    return (
      <HeroSection {...restProps}>
        <ContentContainer className={heroContainerClass}>
          <WebinyHallMarkImage src={webinyGroup} alt={''} />
          <HeroSectionWrapper>
            <WebinyLogoImage src={webinyLogo} alt={''} />
            <Title>
              The Easiest Way To Adopt &nbsp;
              <TitleHighlight>Serverless</TitleHighlight>
            </Title>
            <SubTitle>
              Build Full-Stack Serverless Web Applications
            </SubTitle>
            <FeatureWrapper>
              <Feature>
                <img className={'feature-icon'} src={circleIcon} alt={''} />
                <span className={'feature-text'}>
                  Zero Infrastructure Management
                </span>
              </Feature>
              <Feature>
                <img className={'feature-icon'} src={circleIcon} alt={''} />
                <span className={'feature-text'}>Open Source</span>
              </Feature>
              <Feature>
                <img className={'feature-icon'} src={circleIcon} alt={''} />
                <span className={'feature-text'}>Self Hosted</span>
              </Feature>
              <Feature>
                <img className={'feature-icon'} src={circleIcon} alt={''} />
                <span className={'feature-text'}>Infinite Scale</span>
              </Feature>
            </FeatureWrapper>
            <ButtonWrapper>
              <Button
                className={getStartedButtonClass}
                type="default"
                link="https://docs.webiny.com/"
                target="_blank"
              >
                Get started
              </Button>
              <div
                onClick={() => {
                  trackGaConversion ();
                }}
              >
                <Button
                  className={githubButtonClass}
                  type="default"
                  link="https://github.com/webiny/webiny-js"
                  target="_blank"
                >
                  <ScheduleDemoImage src={githubIcon} alt={''} />
                  View on Github
                </Button>
              </div>
            </ButtonWrapper>
          </HeroSectionWrapper>
        </ContentContainer>
      </HeroSection>
    );
  }
}

export default HeroComponent;
