import React from 'react';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import webinyBg from './assets/webiny-bg.svg';
import appStackImg from './assets/stack-infographic.svg';
import whatWebinyImg from './assets/webiny-what.svg';
import heartImg from './assets/heart.svg';
import infographicBg from './assets/infographic-bg.svg';

import babelLogo from './assets/babel.svg';
import reactLogo from './assets/react.svg';
import gqlLogo from './assets/graphql.svg';
import webpackLogo from './assets/webpack.svg';
import nodejsLogo from './assets/nodejs.svg';
import awsLogo from './assets/aws.svg';
import typescriptLogo from './assets/typescript.svg';

const wrapperClass = css (
  {},
  mq ({
    padding: ['0 15px 25px 15px', '50px 0 25px 0'],
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
    padding: ['0px 0px 60px', '16px 0px 80px'],
  })
);

const Body = styled ('p') ({
  maxWidth: 819,
  textAlign: 'center',
  margin: '0px auto 80px',
  fontSize: 18,
  lineHeight: '32px',
  color: theme.color.dark,
  '& span': {
    color: theme.color.primaryDark,
  },
});

const ImageWrapper = styled ('div') (
  {
    display: 'flex',
    alignItems: 'center',

    backgroundImage: 'url(' + infographicBg + ')',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',

    marginBottom: 50,
  },
  mq ({
    flexDirection: ['column-reverse', 'row'],
    '& img': {
      marginBottom: [40, 0],
    },
  })
);

const LogosWrapper = styled ('div') (
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 560,
    '& .logo': {
      width: 100,
      height: 75,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  mq ({
    flexDirection: ['row', 'row'],
    flexWrap: ['wrap', 'nowrap'],
    margin: [0, '0px auto 50px'],
  })
);

const Title = styled ('h2') ({
  fontSize: 48,
  fontWeight: 700,
  color: theme.color.black,
  textAlign: 'center',
  maxWidth: 600,
  margin: '0px auto 28px',
});

const TitleHighlight = styled ('span') ({
  backgroundImage: 'url(' + webinyBg + ')',
  backgroundPositionX: 'right',
  backgroundPositionY: 'bottom',
  backgroundRepeat: 'no-repeat',
});

const SubTitle = styled ('h4') ({
  fontSize: 28,
  fontWeight: 700,
  lineHeight: '36px',
  color: theme.color.black,
  textAlign: 'center',
  maxWidth: 360,
  margin: '0px auto 44px',

  '& span': {
    position: 'relative',
    display: 'block',
    fontSize: 40,
    '&::after': {
      content: 'url(' + heartImg + ')',
      position: 'absolute',
      zIndex: -1,
      top: -15,
      right: '30%',
    },
  },
});

const secondaryBodyClass = css ({
  marginBottom: 54,
  maxWidth: 600,
});

const infoImageClass = css (
  {},
  mq ({
    width: ['100%', '50%', 'auto'],
  })
);

class WhyIsWebiny extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <ContentContainer className={contentContainerClass}>
          <Title>
            What is&nbsp;
            <TitleHighlight>Webiny?</TitleHighlight>
          </Title>
          <Body>
            Webiny is an
            {' '}
            <span>
              open-source framework for building serverless applications.{' '}
            </span>
            {' '}
            It provides you with developer tools, libraries, ready-made apps and processes. It's built on top of AWS cloud and uses the latest
            technologies such as <span>NodeJs, React and GraphQL</span>.
          </Body>
          <ImageWrapper>
            <img
              className={infoImageClass}
              src={appStackImg}
              alt={'serverless stack'}
              data-aos={'fade-right'}
            />
            <img
              className={infoImageClass}
              src={whatWebinyImg}
              alt={'webiny stack'}
              data-aos={'fade-left'}
            />
          </ImageWrapper>
          <Body className={secondaryBodyClass}>
            It's designed for building websites, apps and APIs that scale to millions of users and
            run on top of serverless infrastructure like AWS Lambda.
          </Body>
          <SubTitle>
            Created with technology and tools you know and <span>Love!</span>
          </SubTitle>
          <LogosWrapper>
            <div className={'logo'}>
              <img src={gqlLogo} alt={'graphql logo'} />
            </div>
            <div className={'logo'}>
              <img src={awsLogo} alt={'aws logo'} />
            </div>
            <div className={'logo'}>
              <img src={typescriptLogo} alt={'typescript logo'} />
            </div>
            <div className={'logo'}>
              <img src={nodejsLogo} alt={'nodejs logo'} />
            </div>
            <div className={'logo'}>
              <img src={webpackLogo} alt={'webpack logo'} />
            </div>
            <div className={'logo'}>
              <img src={babelLogo} alt={'babel logo'} />
            </div>
            <div className={'logo'}>
              <img src={reactLogo} alt={'react logo'} />
            </div>
          </LogosWrapper>
        </ContentContainer>
      </section>
    );
  }
}

export default WhyIsWebiny;
