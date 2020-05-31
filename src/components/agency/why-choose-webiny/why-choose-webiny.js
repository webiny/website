import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import ContentContainer from '../../ui/content-container';

import webinyBg from './assets/webiny-bg.svg';
import artworkBg from './assets/artwork-bg.svg';
import purpleBg from './assets/purple-bg.svg';
import grayBg from './assets/gray-bg.svg';
import checkMark from './assets/check_circle_outline-24px.svg';
import uncheckMark from './assets/highlight_off-24px.svg';
import flyingMan from './assets/fly-man.svg';
import plane from './assets/plane.svg';
import rocket from './assets/rocket.svg';

const wrapperClass = css (
  {
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(' + grayBg + ')',
    '@media (min-width: 1920px)': {
      backgroundPosition: '0 270px !important',
    },
  },
  mq ({
    paddingTop: [40, 100],
    paddingBottom: [40, 100],
    backgroundSize: ['cover', 'contain'],
    backgroundPosition: ['center', 'bottom'],
  })
);

const contentContainerClass = css (
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1200,
    boxSizing: 'border-box',
  },
  mq ({
    width: ['100%', '100%'],
    height: ['100%', 'auto'],
    padding: [0, '0px 16px', 0],
  })
);

const TextWrapper = styled ('div') (
  {
    maxWidth: 634,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mq ({
    marginBottom: [40, 80, 60],
  })
);

const Title = styled ('h2') ({
  fontSize: 48,
  fontWeight: theme.fontWeight.bold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 0,
  marginTop: 0,
  marginBottom: 12,
});

const TitleHighlight = styled ('span') ({
  backgroundImage: 'url(' + webinyBg + ')',
  backgroundPositionX: 'right',
  backgroundPositionY: 'bottom',
  backgroundRepeat: 'no-repeat',
});

const ComparisonWrapper = styled ('div') (
  {
    position: 'relative',
    width: '100%',
    display: 'flex',
    backgroundImage: 'url(' + purpleBg + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '&::before': {
      content: 'url(' + artworkBg + ')',
      position: 'absolute',
      top: '-5%',
      left: '5%',
      width: '100%',
      height: '100%',
    },
  },
  mq ({
    overflow: ['hidden', 'visible'],
    flexDirection: ['column', 'row'],
    justifyContent: ['flex-start', 'space-evenly'],
    alignItems: ['center', 'flex-end'],
    // paddingTop: [150, 0],
    '&::after': {
      transform: ['rotate(90deg)', 'none'],
      top: ['0%', '20%'],
      left: ['-10%'],
    },
  })
);

const BoxWrapper = styled ('div') (
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mq ({
    height: ['auto', 680],
    width: ['100%', 'auto'],
    '&:nth-child(2)': {
      marginLeft: [30, 0, 30],
      marginRight: [30, 0, 30],
    },
    '&:last-child': {
      marginBottom: [40, 0],
    },
  })
);

const Box = styled ('div') (
  {
    position: 'relative',
    boxSizing: 'border-box',
    maxWidth: 380,
    background: theme.color.white,
    boxShadow: '2px 3px 15px rgba(100, 100, 100, 0.239216)',
    borderRadius: 20,
    padding: 32,
    color: theme.color.black,
    '& ul': {
      listStyle: 'none',
    },
    '& li': {
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: 16,
      fontSize: theme.fontSize.navMenuItem,
    },
  },
  mq ({
    width: ['90%', 320, 380],
    marginBottom: [200, 0],
  })
);

const ProductTitle = styled ('h3') ({
  fontSize: 30,
  fontWeight: theme.fontWeight.bold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 0,
  marginTop: 0,
  marginBottom: 20,
});

const CheckMarkImg = styled ('img') ({
  width: 24,
  height: 24,
  marginRight: 16,
});

const DotImage = styled ('img') ({
  width: 24,
  height: 24,
  marginRight: 16,
});

const FlyingManImage = styled ('img') (
  {
    position: 'relative',
    zIndex: 1,
    maxWidth: 200,
  },
  mq ({
    width: ['50%', 'auto'],
    marginBottom: [0, -20],
  })
);

const PlaneImage = styled ('img') (
  {
    position: 'relative',
    zIndex: 1,
    maxWidth: 173,
  },
  mq ({
    width: ['40%', 'auto'],
    marginBottom: [-4, -20],
  })
);

const RocketImage = styled ('img') (
  {
    position: 'relative',
    zIndex: 1,
    maxWidth: 200,
  },
  mq ({
    width: ['50%', 'auto'],
    marginBottom: [0, -20],
  })
);

class WhyChooseWebiny extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <ContentContainer className={contentContainerClass}>
          <TextWrapper>
            <Title>
              Why choose<TitleHighlight> Webiny</TitleHighlight>?
            </Title>

          </TextWrapper>
          <ComparisonWrapper>
            <BoxWrapper>
              <FlyingManImage src={flyingMan} alt="flying man" />
              <Box>
                <ProductTitle>SaaS CMS</ProductTitle>
                <ul>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    No need to manage infrastructure
                  </li>
                  <li>
                    <DotImage src={uncheckMark} alt="point" />
                    Unable to customise the product
                  </li>
                  <li>
                    <DotImage src={uncheckMark} alt="point" />
                    You can only build websites
                  </li>
                  <li>
                    <DotImage src={uncheckMark} alt="point" />
                    Usually a black-box
                  </li>
                  <li>
                    <DotImage src={uncheckMark} alt="point" />
                    You don't own your data
                  </li>
                </ul>
              </Box>
            </BoxWrapper>

            <BoxWrapper>
              <PlaneImage src={plane} alt="plane" />
              <Box>
                <ProductTitle>OpenSource CMS</ProductTitle>
                <ul>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    You can customise the product
                  </li>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    Build more than websites
                  </li>
                  <li>
                    <DotImage src={uncheckMark} alt="point" />
                    Need to hire people to manage
                    infrastructure
                  </li>
                  <li>
                    <DotImage src={uncheckMark} alt="point" />
                    High total cost of ownership
                  </li>
                  <li>
                    <DotImage src={uncheckMark} alt="point" />
                    Need to over provision and over pay for
                    infrastructure to handle peak demands
                  </li>
                  <li>
                    <DotImage src={uncheckMark} alt="point" />
                    Worry about flash-crowds, networking,
                    orchestration, maintenance, and more
                  </li>
                </ul>
              </Box>
            </BoxWrapper>

            <BoxWrapper>
              <RocketImage src={rocket} alt="rocket" />
              <Box>
                <ProductTitle>Webiny</ProductTitle>
                <ul>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    Serverless level scale, handle any peak demand right out of the box
                  </li>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    Save 60% on infrastructure cost compared to OpenSource
                  </li>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    Faster time to market as you don't spend time on architecting and orchestrating infrastructure
                  </li>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    Build applications, APIs,
                    microservices and websites
                  </li>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    Pay per request - never overpay for infrastructure again
                  </li>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    No vendor lock-in
                  </li>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    Lower TCO when compared to both SaaS
                    and OpenSource
                  </li>
                  <li>
                    <CheckMarkImg src={checkMark} alt="check mark" />
                    Runs on the architecture of the future
                  </li>
                </ul>
              </Box>
            </BoxWrapper>
          </ComparisonWrapper>
        </ContentContainer>
      </section>
    );
  }
}

export default WhyChooseWebiny;
