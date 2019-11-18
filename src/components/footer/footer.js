import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import ContentContainer from '../ui/content-container';
import Newsletter from './newsletter';
import Link from 'gatsby-link';

import webinyLogo from './assets/webiny-icon-white.svg';

const Wrapper = styled ('div') ({
  backgroundColor: theme.color.footerBg,
  padding: '50px 0 5px',
  '--nl-text-color': 'white',
  '--nl-text-align': 'right',
});

const FlexDisplay = css (
  {
    justifyContent: 'space-between',
  },
  mq ({
    display: ['block', 'flex'],
  })
);

const Box = styled ('div') (
  {
    boxSizing: 'border-box',
  },
  mq ({
    width: ['100%', '33%'],
    padding: [20, 0],
  })
);

const textRight = css (
  {},
  mq ({
    textAlign: ['center', 'right'],
  })
);

const Logo = styled ('img') (
  {},
  mq ({
    margin: ['0 auto 20px auto', '0'],
    display: ['block', 'inline'],
    maxHeight: ['50px', '50px'],
  })
);

const Copy = styled ('p') (
  {
    fontSize: theme.fontSize.footer,
    color: theme.color.darkGray,
  },
  mq ({
    textAlign: ['center', 'initial'],
  })
);

const textCenter = css ({
  textAlign: 'center !important',
});

const linkStyle = css ({
  color: theme.color.darkGray,
});

const Bottom = styled ('div') ({
  borderTop: '1px solid #3B3E45',
  width: '100%',
  clear: 'both',
  lineHeight: '200%',
  paddingTop: 25,
  marginTop: 25,
});

const Footer = () => (
  <Wrapper>
    <ContentContainer className={FlexDisplay}>
      <Box>
        <Logo src={webinyLogo} alt="Webiny Logo" />
        <Copy>
          Webiny is a content management system designed to run inside a serverless environment. Webiny enables developers to build powerful
          websites and web applications by providing all required components.
          <br />
          <br />
          Webiny is released under the MIT open source license.
          <br />
          <br />
          <a className={linkStyle} href="https://github.com/webiny/webiny-js">
            GitHub
          </a>{' '}
          /{' '}
          <a className={linkStyle} href="https://twitter.com/WebinyPlatform">
            Twitter
          </a>{' '}
          /{' '}
          <a className={linkStyle} href="https://video.webiny.com/">
            YouTube
          </a>
          /{' '}
          <a className={linkStyle} href="https://spectrum.chat/webiny/">
            Spectrum Chat
          </a>
        </Copy>
      </Box>
      <Box className={textRight}>
        <Newsletter />
      </Box>
    </ContentContainer>
    <Bottom>
      <Copy className={textCenter}>
        <Link className={linkStyle} to="/about-us">
          About Us
        </Link>{' '}
        /{' '}
        <Link className={linkStyle} to="/contact-us">
          Contact Us
        </Link>{' '}
        /{' '}
        <Link className={linkStyle} to="/privacy-policy">
          Privacy Policy
        </Link>{' '}
        {/*
        /{' '}
        <Link className={linkStyle} to="/terms-of-service">
          Terms of Service
        </Link>
        */}
        <br />
        Webiny © {new Date ().getFullYear ()}
      </Copy>
    </Bottom>
  </Wrapper>
);

export default Footer;
