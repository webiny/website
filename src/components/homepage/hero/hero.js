import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import Button from '../../ui/button';
import Video from './video';

import heroBg from './assets/hero-bg-2.svg';
//import gitHubLogo from './assets/github-logo.svg';
//import buttonArrow from './assets/button-arrow.svg';
import techStackLogos from './assets/tech-stack-logos.svg';

const heroContainer = css (
  {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1300,
  },
  mq ({
    flexDirection: ['column', 'row'],
    width: ['100%', 1200],
  })
);

const Hero = styled ('section') (
  {
    width: '100%',
    background: 'url(' + heroBg + ') no-repeat left bottom',
    backgroundSize: 'cover',
    color: '#fff',
    boxSizing: 'border-box',
  },
  mq ({
    textAlign: ['center', 'left'],
    padding: ['100px 20px 25px', '150px 0 25px'],
    height: ['auto', 'calc(100vh - 100px)'],
    minHeight: ['auto', 550],
    maxHeight: ['auto', 750],
    marginBottom: [0, -50],
  })
);

const Title = styled ('h1') (
  {
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginBottom: 40,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const LeftSide = styled ('div') (
  {},
  mq ({
    textAlign: ['center', 'left'],
    width: ['100%', 420],
  })
);

const RightSide = styled ('div') (
  {},
  mq ({
    //textAlign: ['center', 'left'],
    width: ['100%', 675],
  })
);

const Buttons = styled ('div') (
  {
    display: 'flex',
    marginBottom: 25,
  },
  mq ({
    justifyContent: ['space-around', 'flex-start'],
  })
);

const ctaButton = css (
  {
    position: 'relative',
    marginTop: 35,
  },
  mq ({
    marginRight: [0, '25px !important'],
    width: ['150px !important', 'auto !important'],
  })
);

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.light,
    lineHeight: '25px',
    marginBottom: 35,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);
/*
const Link = styled ('a') ({
  fontSize: 14,
  color: '#FFFFFF',
  textAlign: 'center',
  fontWeight: theme.fontWeight.regular,
  margin: '15px auto 0 auto',
  display: 'block',
  textDecoration: 'none',
  position: 'relative',
  paddingLeft: 10,
  '&:hover': {
    textDecoration: 'underline',
  },
});

const GitHubLogo = styled ('img') ({
  position: 'absolute',
  left: 'calc(50% - 80px)',
  top: 3,
});
*/

export default ({children, ...props}) => (
  <Hero {...props}>
    <ContentContainer className={heroContainer}>
      <LeftSide>
        <Title>
          Build more than websites
        </Title>
        <SubText>
          The way how we build, deploy and operate the web is evolving.
          Webiny is a developer-friendly serverless CMS powered by Node and React with a headless GraphQL API.
        </SubText>
        <img src={techStackLogos} />
        <Buttons>
          <Button className={ctaButton} link="/pricing" type="dark">
            Get Started
          </Button>
          <Button className={ctaButton} link="/contact-us" type="outline">
            Request demo
          </Button>
        </Buttons>
        {/*
        <Link href="https://github.com/Webiny/webiny-js">
          <GitHubLogo src={gitHubLogo} />
          View Webiny on GitHub
        </Link>
        */}
      </LeftSide>
      <RightSide>
        <Video />
      </RightSide>
    </ContentContainer>
  </Hero>
);
