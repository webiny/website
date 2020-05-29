import React from 'react';
import styled from 'react-emotion';
import Slider from 'react-slick';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import Button from '../../ui/button';
import ContentContainer from '../../ui/content-container';

import purpleArrowRight from './assets/purple-arrow-right.svg';
import readyMadeAppsBg from './assets/ready-made-apps-bg.svg';
import readyMadeAppsTitleBg from './assets/ready-made-apps-title-bg.svg';
import demoIcon from './assets/demo-icon.svg';
import mackBookAirFrame from './assets/macbook-air.svg';
import pageBuilderImage from './assets/page-builder.png';
import rightArrowIcon from './assets/right-arrow.svg';
import leftArrowIcon from './assets/left-arrow.svg';

import './assets/slider.css';
import fileManager from './assets/file-manager-video.gif';
import formBuilder from './assets/form-builder-video.gif';
import headlessCms from './assets/headless-cms-coming-soon.png';
import pageBuilder from './assets/page-builder-video.gif';

const wrapperClass = css (
  {},
  mq ({
    paddingTop: [80, 140],
    paddingBottom: [40, 60],
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
    paddingBottom: [40, 0],
  })
);

const contentContainerClass = css (
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 1200,
  },
  mq ({
    width: ['100%', '100%'],
    height: ['100%'],
  })
);

const TextWrapper = styled ('div') ({
  maxWidth: 768,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Title = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.bold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 0,
  marginTop: 0,
  marginBottom: 28,
});

const HighlightedBg = styled ('span') ({
  backgroundImage: 'url(' + readyMadeAppsTitleBg + ')',
  backgroundPositionX: 'right',
  backgroundPositionY: 'bottom',
  backgroundRepeat: 'no-repeat',
});

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
        transform: 'translateX(5px)',
      },
    },
  },
  mq ({
    width: ['150px !important'],
  })
);

const ArrowRight = styled ('img') ({
  position: 'relative',
  marginLeft: 5,
});

const ctaButton = css (
  {
    textTransform: 'uppercase',
    padding: '10px 12px !important',
  },
  mq ({
    width: ['230px !important'],
  })
);

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
    margin: '0 auto',
  },
  mq ({
    width: ['100%', '100%'],
    flexDirection: ['column', 'row'],
    paddingTop: [40, 140],
    paddingBottom: [40, 250],
    paddingLeft: [0, 24],
  })
);

const sliderContentClass = css (
  {
    display: 'flex !important',
    flexDirection: 'column',
  },
  mq ({
    alignItems: ['center', 'flex-start'],
  })
);

const LeftSide = styled ('div') (
  {
    position: 'relative',
  },
  mq ({
    width: ['100%', '30%'],
    margin: ['0 auto 15px auto', 0],
  })
);

const RightSide = styled ('div') (
  {
    position: 'relative',
  },
  mq ({
    width: ['100%', '70%'],
    marginTop: [0, -120],
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
    position: 'absolute',
    top: 0,
    left: 0,
  },
  mq ({
    width: ['100%'],
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
      boxShadow: 'none !important',
    },
  },
  mq ({
    display: ['none !important', 'block !important'],
    width: ['30px !important', '50px !important'],
    left: [15, '-8%', '-15%'],
    '@media (min-width: 1366px)': {
      left: '-15%',
    },
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
      boxShadow: 'none !important',
    },
  },
  mq ({
    display: ['none !important', 'block !important'],
    width: ['30px !important', '50px !important'],
    right: [15, '-8%', '-15%'],
    '@media (min-width: 1366px)': {
      right: '-15%',
    },
  })
);

const LeftArrowImage = styled ('img') ({
  width: '100%',
});

const RightArrowImage = styled ('img') ({
  width: '100%',
});

const webinyAppsList = css (
  {
    maxWidth: '100vw',
    overflowX: 'hidden',
    '.slick-list': {
      position: 'relative',
    },
  },
  mq ({})
);

const webinyAppsImage = css (
  {
    maxWidth: '580px',
    overflow: 'visible',
    paddingBottom: 20,
    margin: '0 auto',
    '.slick-list': {
      height: 324,
      maxWidth: '580px',
    },
    '.slick-slide': {
      outline: 0,
      boxSizing: 'border-box',
      div: {
        outline: 0,
      },
      img: {
        outline: 0,
        boxShadow: '0 5px 10px 0 rgba(0,0,0,0.15)',
        //height: "350px !important",
        margin: '0 auto',
        outline: 0,
        borderRadius: 5,
        boxSizing: 'border-box',
      },
    },
    '.slick-dots': {
      zIndex: 10,
      'li button:before': {
        fontSize: 30,
      },
    },
  },
  mq ({
    height: ['auto', 324],
    '.slick-list': {
      height: ['auto', 324],
      maxWidth: '580px',
    },
    '.slick-slide': {
      width: ['100%', '100%'],
      padding: 10,
      margin: 0,
      img: {
        width: ['80%', '90%'],
        minHeight: ['auto', 'auto'],
        minWidth: ['auto', 'auto'],
        marginLeft: ['18%', '10%'],
        marginTop: ['0', '3%'],
        '@media (min-width: 768px)': {
          width: '100%',
          marginLeft: '5%',
          marginTop: '3%',
        },
        '@media (min-width: 1024px)': {
          width: '90%',
          marginLeft: '10%',
          marginTop: '3%',
        },
        '@media (min-width: 1336px)': {
          width: 560,
          marginLeft: 0,
        },
      },
    },
    '.slick-dots': {
      position: ['absolute', 'relative'],
      bottom: ['-10%', '-25%'],
    },
  })
);

class ReadyMadeApps extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      contentNav: null,
      imageNav: null,
    };
  }

  componentDidMount () {
    this.setState ({
      contentNav: this.slider1,
      imageNav: this.slider2,
    });
  }

  render () {
    const {handleDemoClick, ...restProps} = this.props;
    return (
      <React.Fragment>
        <section {...restProps} className={wrapperClass}>
          <ContentContainer className={contentContainerClass}>
            <TextWrapper>
              <Title>
                Webiny comes with <HighlightedBg> several FREE </HighlightedBg>
                ready-made apps you can use today:
              </Title>
              <Button
                onClick={handleDemoClick}
                className={ctaButton}
                type="secondary"
              >
                <DemoIcon src={demoIcon} />
                Schedule a 1:1 Demo
              </Button>
            </TextWrapper>
          </ContentContainer>
        </section>
        <section {...restProps} className={wrapperWithBackgroundImageClass}>
          <AppsContainer>
            <LeftSide>
              <Slider
                asNavFor={this.state.contentNav}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={1}
                centerMode={false}
                centerPadding={25}
                swipeToSlide={true}
                focusOnSelect={true}
                className={webinyAppsList}
                responsive={[
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerPadding: 0,
                      centerMode: true,
                    },
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerPadding: 0,
                      centerMode: true,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerPadding: 0,
                      centerMode: true,
                    },
                  },
                ]}
              >
                <div className={sliderContentClass}>
                  <AppTitle>Page Builder</AppTitle>
                  <AppDescription>
                    Build stunning landing pages with an easy to use drag&drop editor
                  </AppDescription>
                  <Button
                    className={appCtaButtonClass}
                    link="/serverless-app/page-builder"
                    type="default"
                    target="_blank"
                  >
                    Learn more
                    <ArrowRight src={purpleArrowRight} />
                  </Button>
                </div>
                <div className={sliderContentClass}>
                  <AppTitle>Form Builder</AppTitle>
                  <AppDescription>
                    Create forms using a drag&drop interface and track how they convert.
                  </AppDescription>
                  <Button
                    className={appCtaButtonClass}
                    link="/serverless-app/form-builder"
                    type="default"
                    target="_blank"
                  >
                    Learn more
                    <ArrowRight src={purpleArrowRight} />
                  </Button>
                </div>
                <div className={sliderContentClass}>
                  <AppTitle>File Manager</AppTitle>
                  <AppDescription>
                    Upload, categorize, search and edit your files.
                  </AppDescription>
                  <Button
                    className={appCtaButtonClass}
                    link="/serverless-app/file-manager"
                    type="default"
                    target="_blank"
                  >
                    Learn more
                    <ArrowRight src={purpleArrowRight} />
                  </Button>
                </div>
                <div className={sliderContentClass}>
                  <AppTitle>Headless CMS</AppTitle>
                  <AppDescription>
                    GraphQL based headless CMS with powerful content modeling features.
                  </AppDescription>
                  <Button
                    className={appCtaButtonClass}
                    link="/serverless-app/headless-cms"
                    type="default"
                    target="_blank"
                  >
                    Learn more
                    <ArrowRight src={purpleArrowRight} />
                  </Button>
                </div>
              </Slider>
            </LeftSide>
            <RightSide>
              <DeviceFrame src={mackBookAirFrame} alt="macbook" />
              <Slider
                asNavFor={this.state.imageNav}
                ref={slider => (this.slider1 = slider)}
                dots={true}
                className={webinyAppsImage}
                slidesToShow={1}
                centerMode={true}
                centerPadding={25}
                fade={true}
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
              >
                <div>
                  <img src={pageBuilder} alt="Webiny Serverless Page Builder" />
                </div>
                <div>
                  <img src={formBuilder} alt="Webiny Serverless Form Builder" />
                </div>
                <div>
                  <img src={fileManager} alt="Webiny Serverless File Manager" />
                </div>
                <div>
                  <img src={headlessCms} alt="Webiny Serverless Headless CMS" />
                </div>
              </Slider>
            </RightSide>
          </AppsContainer>
        </section>
      </React.Fragment>
    );
  }
}

export default ReadyMadeApps;

function PrevArrow (props) {
  const {className, style, onClick} = props;
  return (
    <Button
      type="default"
      className={leftArrowClass}
      style={style}
      onClick={onClick}
    >
      <LeftArrowImage src={leftArrowIcon} alt="arrow to left" />
    </Button>
  );
}

function NextArrow (props) {
  const {className, style, onClick} = props;
  return (
    <Button
      type="default"
      className={rightArrowClass}
      style={style}
      onClick={onClick}
    >
      <RightArrowImage src={rightArrowIcon} alt="arrow to right" />
    </Button>
  );
}
