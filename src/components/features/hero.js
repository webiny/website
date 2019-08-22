import React from 'react';
import {css} from 'emotion';
import mq from '../utils/breakpoints';
import Title from '../ui/layout/title';
import Subtitle from '../ui/layout/subtitle';
import Header from '../ui/layout/header';

import headerBg from './assets/features-bg.svg';

const heroStyle = css (
  {
    paddingBottom: '200px !important',
  },
  mq ({
    minHeight: ['auto', 'auto', 650],
  })
);

const Hero = () => (
  <React.Fragment>
    <Header bg={headerBg} className={heroStyle}>
      <Title>
        Create reliable serverless
        apps with ease
      </Title>
      <Subtitle>
        Webiny is an open-source platform that provides you with developer tools, libraries, ready-made apps and processes specifically created for serverless development.
        {' '}
      </Subtitle>
    </Header>
  </React.Fragment>
);

export default Hero;
