import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "emotion";
import Link from "gatsby-link";
import Slider from "react-slick";
import ContentContainer from "../ui/content-container";

import "./assets/slider.css";
import { noConflict } from "js-cookie";
// import background from './assets/components-bg.svg';
// import fileManager from './assets/file-manager-video.gif';
// import formBuilder from './assets/form-builder-video.gif';
// import headlessCms from './assets/headless-cms.gif';
// import pageBuilder from './assets/page-builder-video.gif';

const wrapperClass = css(
  {
    // background: 'url(' + background + ') no-repeat left top',
    backgroundSize: "cover",
    // backgroundColor: '#F7F7F7',
  },
  mq({
    marginTop: [0, -100],
    paddingBottom: [25, 100],
  })
);

const SubTitle = styled("h2")(
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.grayText,
    textAlign: "center",
    margin: "25px auto 0px auto",
  },
  mq({
    width: ["100%", 650],
  })
);

const webinyVideosList = css(
  {
    maxWidth: "100vw",
    overflowX: "hidden",
    ".slick-list": {
      position: "relative",
    },
    ".slick-slide": {
      transition: "all .2s ease",
      outline: 0,
      opacity: 0.6,
      height: "300px !important",
      marginBotttom: "-150px",
      padding: "20px 30px",
      background: "#fcfcfc",
      borderRadius: "3px",
      overflow: "hidden",
      display: "block",
      boxSizing: "border-box",
      cursor: "pointer",
      borderBottom: "2px solid transparent",
      "&:hover": {
        opacity: 1,
      },
      ".content": {
        outline: 0,
        h3: {
          fontSize: 32,
          fontWeight: theme.fontWeight.semiBold,
          color: theme.color.secondaryDark,
          marginBottom: 10,
          marginTop: 0,
        },
        h4: {
        ontSize: 22,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.grayText,
        marginBottom: 10,
        marginTop: 0,
        },
        p: {
          fontSize: 16,
          marginBottom: 10,
          color: theme.color.grayText,
        },
        a: {
          display: "block-inline",   
          color: theme.color.primaryDark,
          fontSize: theme.fontSize.h3,
        },
      },
    },
    ".slick-current": {
      opacity: 1,
      position: "relative",
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 10px 20px rgba(91,107,174,.15)",
      borderBottom: "2px solid #FA5723",
    },
  },
  mq({
    ".slick-slide": {
      width: ["calc(100vw - 30px) !important", "350px !important"],
      margin: ["0 15px", "0 15px"],
    //   height: ["260px !important"]
    },
    ".slick-list": {
      padding: [0, "46px 0 20px!important"],
      marginTop: ["40px", 0],
    },
  })
);

const webinyVideosImage = css(
  {
    maxWidth: "100vw",
    overflow: "hidden",
    paddingBottom: 20,
    ".slick-slide": {
      outline: 0,
      boxSizing: "border-box",
      div: {
        outline: 0,
      },
      img: {
        outline: 0,
        boxShadow: "0 5px 10px 0 rgba(0,0,0,0.15)",
        height: "350px !important",
        margin: "0 auto",
        outline: 0,
        borderRadius: 5,
        boxSizing: "border-box",
      },
    },
    ".slick-dots": {
    //   bottom: -35,
      position: "relative",
      zIndex: 10,
      "li button:before": {
        fontSize: 15,
      },
    },
  },
  mq({
    ".slick-slide": {
      padding: 10,
      margin: 0,
      img: {
        width: ["calc(100vw - 20px)", "800px !important"],
      },
    },
  })
);

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>Check out our online knowledge-sharing sessions</SubTitle>

        <ContentContainer>
          <Slider
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
            dots={true}
            className={webinyVideosImage}
            slidesToShow={1}f
            centerMode={true}
            centerPadding={25}
            fade={true}
          >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Slider>
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={3}
            centerMode={true}
            centerPadding={25}
            swipeToSlide={true}
            focusOnSelect={true}
            className={webinyVideosList}
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
              <h3 className="event-card-title">Commodo</h3>
              <span>02/07/2020</span>
              <h4>Knowledge Sharing Session [0]</h4>
              <p>
                GraphQL based headless CMS with powerful content modeling
                features.
              </p>
              <Link to="/events/event-0">View Event</Link>
            </div>
            <div className="content">
              <h3 className="event-card-title">Webiny Setup</h3>
              <span>09/07/2020</span>
              <span>Remote</span>

              <h4>Knowledge Sharing Session [1]</h4>
              <p>
                GraphQL based headless CMS with powerful content modeling
                features.
              </p>
              <Link to="/events/event-1">View Event</Link>
            </div>
            <div className="content">
              <h3 className="event-card-title">Commodo Getting Started</h3>
              <span>16/07/2020</span>

              <h4>Knowledge Sharing Session [2]</h4>
              <p>
                GraphQL based headless CMS with powerful content modeling
                features.
              </p>
              <Link to="/events/event-2">View Event</Link>
            </div>
            <div className="content">
              <h3 className="event-card-title">Commodo Getting Started</h3>
              <span>23/07/2020</span>

              <h4>Knowledge Sharing Session [3]</h4>
              <p>
                GraphQL based headless CMS with powerful content modeling
                features.
              </p>
              <Link to="/events/event-3">View Event</Link>
            </div>
          </Slider>
        </ContentContainer>
      </section>
    );
  }
}

export default Events;
