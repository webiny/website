import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import Button from '../../ui/button';
import ContentContainer from '../../ui/content-container';

import purpleArrowRight from './assets/purple-arrow-right.svg'
import readyMadeAppsBg from './assets/ready-made-apps-bg.svg'
import readyMadeAppsTitleBg from './assets/ready-made-apps-title-bg.svg'
import demoIcon from './assets/demo-icon.svg';
import mackBookAirFrame from './assets/macbook-air.svg'
import pageBuilderImage from './assets/page-builder.png'
import rightArrowIcon from './assets/right-arrow.svg'
import leftArrowIcon from './assets/left-arrow.svg'

const wrapperClass = css (
  {
  },
  mq ({
    paddingTop: [40, 40],
    paddingBottom: [40, 60]
  })
);

const wrapperWithBackgroundImageClass = css (
  {
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundImage: 'url(' + readyMadeAppsBg + ')',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  },
  mq ({
    backgroundSize: ['auto', 'cover'],
    paddingTop: [40, 0],
    paddingBottom: [40, 0]
  })
);

const contentContainerClass = css (
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1200
  },
  mq ({
    width: ['100%', '100%'],
    height: ['100%']
  })
)

const TextWrapper = styled ('div') (
  {
    maxWidth: 768,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
)

const Title = styled ('h2') (
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 28,
  }
);

const HighlightedBg = styled ('span') (
  {
    backgroundImage: 'url(' + readyMadeAppsTitleBg + ')',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    backgroundRepeat: 'no-repeat',
  }
)

const appCtaButtonClass = css (
  {
    position: 'relative',
    marginLeft: '-20px !important',
    textTransform: 'uppercase',
    fontWeight: theme.fontWeight.bold,
    backgroundColor: 'transparent !important',
    color: '#7B39D9 !important',
    textDecoration: 'underline !important',
    textDecorationColor: '#7B39D9 !important',
    '&:hover': {
      boxShadow: 'none !important',
      '& img': {
        transform: 'translateX(5px)'
      }
    }
  },
  mq ({
    width: ['150px !important'],
  })
);


const ArrowRight = styled ('img') (
  {
    position: 'relative',
    marginLeft: 5
  }
)

const ctaButton = css(
  {
    textTransform: 'uppercase',
    paddingTop: '10px !important',
    paddingBottom: '10px !important',
  },
  mq ({
    width: ['216px !important'],
  })
)

const DemoIcon = styled ('img') (
  {
    position: 'relative',
    marginRight: 5,
  },
  mq ({
    display: ['block'],
  })
);

const AppsContainer = styled ('div') (
  {
    display: 'flex',
    maxWidth: 1200,
    margin: '0 auto'
  },
  mq ({
    width: ['100%', '100%'],
    flexDirection: ['column', 'row'],
    paddingTop: [40, 140],
    paddingBottom: [40, 250]
  })
)

const LeftSide = styled ('div') (
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  mq ({
    alignItems: ['center', 'flex-start'],
    width: ['100%', 'auto'],
    margin: ['0 auto 15px auto', 0],
  })
);

const RightSide = styled ('div') (
  {
    position: 'relative',
  },
  mq ({
    width: ['100%', 'auto'],
    marginTop: [0, -120]
  })
);

const AppTitle = styled ('h2') (
  {
    fontSize: 48,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.black,
    paddingTop: 0,
    marginTop: 0,
    marginBottom: 20,
  },
  mq ({
    textAlign: ['center', 'left'],
  })
);

const AppDescription = styled ('h2') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.light,
    color: theme.color.black,
    paddingTop: 0,
    margin: '0px 0px 24px',
  },
  mq ({
    maxWidth: [302],
    textAlign: ['center', 'left'],
  })
);

const DeviceFrame = styled ('img') (
  {
    position: 'relative'
  },
  mq ({
    width: ['100%']
  })
);

const AppImage = styled ('img') (
  {
    position: 'absolute',
  },
  mq ({
    top: [8, 30],
    left: [60, 150],
    width: [250, 580],
    height: ['80%', 324]
  })
);

const leftArrowClass = css (
  {
    position: 'absolute',
    top: '40%',
    padding: '0px !important',
    backgroundColor: 'transparent !important',
    zIndex: 5,
    '&:hover': {
      boxShadow: 'none'
    }
  },
  mq ({
    width: ['30px !important', 50],
    left: [15, 30]
  })
);

const rightArrowClass = css (
  {
    position: 'absolute',
    top: '40%',
    padding: '0px !important',
    backgroundColor: 'transparent !important',
    zIndex: 5,
    '&:hover': {
      boxShadow: 'none'
    }
  },
  mq ({
    width: ['30px !important', 50],
    right: [15, 30]
  })
);

const LeftArrowImage = styled ('img') (
  {
    width: '100%'
  }
);

const RightArrowImage = styled ('img') (
  {
    width: '100%'
  }
);


class ReadyMadeApps extends React.Component {
  render () {
    return (
      <React.Fragment>
        <section {...this.props} className={wrapperClass}>
        <ContentContainer className={contentContainerClass}>
          <TextWrapper>
          <Title>Webiny comes with <HighlightedBg> several FREE </HighlightedBg>
          ready-made apps you can use today:</Title>
          <Button
          className={ctaButton}
          link="https://docs.webiny.com/"
          type="secondary"
          >
          <DemoIcon src={demoIcon}/>
          Schedule a 1:1 Demo
          </Button>
          </TextWrapper>
        </ContentContainer>
      </section>
      <section {...this.props} className={wrapperWithBackgroundImageClass}>
        <AppsContainer>
          <LeftSide>
            <AppTitle>Page Builder</AppTitle>
            <AppDescription>
              Build Stunning Landing Pages With an Easy to Use Drag&Drop Editor
            </AppDescription>
            <Button
            className={appCtaButtonClass}
            link="/serverless-app/page-builder"
            type="default"
            target="_blank"
            >
            Learn more
            <ArrowRight src={purpleArrowRight}/>
            </Button>
          </LeftSide>
          <RightSide>
            <Button type="default" className={leftArrowClass}>
              <LeftArrowImage src={leftArrowIcon} alt='arrow to left'/>
            </Button>
            <Button type="default" className={rightArrowClass}>
              <RightArrowImage src={rightArrowIcon} alt='arrow to right'/>
            </Button>
            <DeviceFrame src={mackBookAirFrame} alt='mac-book air'/>
            <AppImage src={pageBuilderImage} alt='page builder app'/>
          </RightSide>
        </AppsContainer>
      </section>
      </React.Fragment>
    );
  }
}

export default ReadyMadeApps;
