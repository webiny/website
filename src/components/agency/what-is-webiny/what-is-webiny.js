import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import Button from '../../ui/button';
import ContentContainer from '../../ui/content-container';

import whatIsWebinyLogos from './assets/what-is-webiny-logo.svg'
import whatIsWebinyBg from './assets/what-is-webiny-bg.svg'

const wrapperClass = css (
  {
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundImage: 'url(' + whatIsWebinyBg + ')',
    backgroundRepeat: 'no-repeat',
  },
  mq ({
    paddingTop: [0, 0],
    paddingBottom: [25, 0],
    backgroundPosition: ['top', 'bottom'],
    backgroundSize: ['cover', 'cover'],
    '@media (min-width: 1460px)': {
      marginTop: -150
    }
  })
);

const contentContainerClass = css (
  {
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundImage: 'url(' + whatIsWebinyLogos + ')',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 1200
  },
  mq ({
    width: ['100%', '100%'],
    height: ['100%', '100%'],
    paddingTop: [0, 0],
    paddingBottom: [80, 160],
    backgroundSize: [0, '100%'],
  })
)

const TextWrapper = styled ('div') (
  {
    maxWidth: 634,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
)

const Title = styled ('h2') (
  {
    fontSize: 48,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 36,
  },
  mq ({
    paddingTop: [50, 50],
  })
);

const Description = styled ('p') (
  {
    fontSize: theme.fontSize.h5,
    textAlign: 'center',
    marginBottom: 42
  },
  mq ({
    padding: ['0px 16px', '0px']
  })
)

const HighlightedText = styled ('span') (
  {
    color: theme.color.primaryDark
  }
)


const ctaButton = css (
  {
    position: 'relative',
    textTransform: 'uppercase'
  },
  mq ({
    width: ['217px !important'],
  })
);

class WhatIsWebiny extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <ContentContainer className={contentContainerClass}>
          <TextWrapper>
            <Title>What is Webiny?</Title>
            <Description>
              Webiny is an
              <HighlightedText> open-source serverless CMS </HighlightedText>.
              It's built on top of AWS cloud and uses the latest technologies such as
              <HighlightedText> NodeJs, React and GraphQL </HighlightedText>.
              Create super fast websites,  apps and APIs that
              <HighlightedText> scale to millions of users</HighlightedText>,
              right out of the box, without the need for fancy network or performance experts.
            </Description>
            <Button
              className={ctaButton}
              link="https://github.com/webiny/webiny-js"
              type="outlineDark"
              target="_blank"
            >
              Learn more
            </Button>
          </TextWrapper>
        </ContentContainer>
      </section>
    );
  }
}

export default WhatIsWebiny;
