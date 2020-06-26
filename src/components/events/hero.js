import React from 'react';
import { css } from 'emotion';
import mq from '../utils/breakpoints';
import Title from '../ui/layout/title';
import Subtitle from '../ui/layout/subtitle';
import Header from '../ui/layout/header';

import headerBg from './assets/hero-bg.svg';

const heroStyle = css(
    {
        paddingBottom: '200px !important',
    },
    mq({
        minHeight: ['auto', 'auto', 650],
    })
);

const Hero = () => (
    <React.Fragment>
        <Header bg={headerBg} className={heroStyle}>
            <Title>Webiny Conferences, Workshops, Webinars</Title>
            <Subtitle>
                We are organizing every Thursday our Knowledge Sharing Sessions
      </Subtitle>
        </Header>
    </React.Fragment>
);

export default Hero;
