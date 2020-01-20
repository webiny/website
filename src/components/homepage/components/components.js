import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import Link from 'gatsby-link';
import Slider from 'react-slick';
import ContentContainer from '../../ui/content-container';

import './assets/slider.css';
import background from './assets/components-bg.svg';
import fileManager from './assets/file-manager-video.gif';
import formBuilder from './assets/form-builder-video.gif';
import headlessCms from './assets/headless-cms-coming-soon.png';
import pageBuilder from './assets/page-builder-video.gif';

const wrapperClass = css (
  {
    background: 'url(' + background + ') no-repeat left top',
    backgroundSize: 'cover',
  },
  mq ({
    marginTop: [0, -200],
    paddingTop: [0, 200],
    paddingBottom: [25, 100],
    backgroundColor: ['#F7F7F7', 'transparent'],
  })
);

const SubTitle = styled ('h2') (
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.black,
    textAlign: 'center',
    paddingTop: 50,
    margin: '25px auto 40px auto',
  },
  mq ({
    width: ['100%', 650],
  })
);

const webinyAppsList = css (
  {
    maxWidth: '100vw',
    overflowX: 'hidden',
    '.slick-list': {
      position: 'relative',
    },
    '.slick-slide': {
      transition: 'all .2s ease',
      outline: 0,
      opacity: 0.6,
      //height: "160px!important",
      padding: '20px 30px',
      background: '#fcfcfc',
      borderRadius: '3px',
      overflow: 'hidden',
      display: 'block',
      boxSizing: 'border-box',
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
      '&:hover': {
        opacity: 1,
      },
      '.content': {
        outline: 0,
        h3: {
          fontSize: 22,
          fontWeight: theme.fontWeight.semiBold,
          marginBottom: 10,
          marginTop: 0,
        },
        p: {
          fontSize: 16,
          marginBottom: 10,
        },
        a: {
          display: 'block-inline',
          color: theme.color.primaryDark,
        },
      },
    },
    '.slick-current': {
      opacity: 1,
      position: 'relative',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 10px 20px rgba(91,107,174,.15)',
      borderBottom: '2px solid #FA5723',
    },
  },
  mq ({
    '.slick-slide': {
      width: ['calc(100vw - 30px) !important', '350px !important'],
      margin: ['0 15px', '0 15px'],
    },
    '.slick-list': {
      padding: [0, '46px 0 20px!important'],
      marginTop: ['40px', 0],
    },
  })
);

const webinyAppsImage = css (
  {
    maxWidth: '100vw',
    overflow: 'hidden',
    paddingBottom: 20,
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
      //bottom: -35,
      position: 'relative',
      zIndex: 10,
      'li button:before': {
        fontSize: 15,
      },
    },
  },
  mq ({
    '.slick-slide': {
      padding: 10,
      margin: 0,
      img: {
        width: ['calc(100vw - 20px)', '800px !important'],
      },
    },
  })
);

class Components extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount () {
    this.setState ({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>
          Webiny Comes With Several Ready-Made Serverless Apps
        </SubTitle>

        <ContentContainer>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            dots={true}
            className={webinyAppsImage}
            slidesToShow={1}
            centerMode={true}
            centerPadding={25}
            fade={true}
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
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={3}
            centerMode={true}
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
            <div className="content">
              <h3>Page Builder</h3>
              <p>
                For when you need a quick landing page created without any coding.
              </p>
              <Link to="/serverless-app/page-builder">Learn More</Link>
            </div>
            <div className="content">
              <h3>Form Builder</h3>
              <p>
                Create forms using a drag&drop interface and track how they convert.
              </p>
              <Link to="/serverless-app/form-builder">Learn More</Link>
            </div>
            <div className="content">
              <h3>File Manager</h3>
              <p>Upload, categorize, search and edit your files.</p>
              <Link to="/serverless-app/file-manager">Learn More</Link>
            </div>
            <div className="content">
              <h3>Headless CMS</h3>
              <p>
                GraphQL based headless CMS with powerful content modeling features.
              </p>
              <Link to="/serverless-app/headless-cms">Learn More</Link>
            </div>
          </Slider>
        </ContentContainer>
      </section>
    );
  }
}

export default Components;
