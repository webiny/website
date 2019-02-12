import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import heroBg from './assets/pricing-hero-bg.svg';

const Hero = styled ('section') (
  {
    width: '100%',
    background: 'url(' + heroBg + ') no-repeat center top',
    color: '#fff',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  mq ({
    padding: ['100px 20px 25px', '120px 0 25px'],
    //height: ['auto', 'calc(100vh - 150px)'],
    //minHeight: ['auto', 700],
    maxHeight: ['auto', 768],
    marginBottom: [50, 50],
    backgroundSize: ['cover'],
    backgroundPosition: ['top', 'bottom'],
  })
);

const Title = styled ('h1') ({
  fontSize: theme.fontSize.h1,
  fontWeight: theme.fontWeight.semiBold,
  marginBottom: 25,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.white,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    marginBottom: 50,
  },
  mq ({
    margin: ['20px 20px', '0 20% 40px 20%'],
  })
);

export default ({children, ...props}) => (
  <Hero {...props}>
    <ContentContainer>
      <Title>Simple and Flexible Pricing</Title>
      <SubText>
        Our paid package comes with flexible pricing so you can grow your
        website without worries. No tiers, or upgrades required. Everything
        you need is included.
      </SubText>
      <SubText>
        Free to use as Open Source or be hassle-free with our cloud package
      </SubText>
    </ContentContainer>
  </Hero>
);
