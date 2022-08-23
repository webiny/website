import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "emotion";
import Slider from "react-slick";
import Button from "../ui/button";
import ContentContainer from "../ui/content-container";

import "./assets/slider.css";

const wrapperClass = css(
    mq({
        marginTop: [0, -25],
        paddingBottom: [25, 100],
    }),
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
    }),
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
                    fontSize: 28,
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
                    fontSize: theme.fontSize.h4,
                    bottom: "20px",
                    position: "absolute",
                },
                span: {
                    color: theme.color.darkGray,
                    fontSize: theme.fontSize.h4,
                    fontWeight: theme.fontWeight.semiBold,
                    paddingRight: 20,
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
            // height: ["260px !important"]
        },
        ".slick-list": {
            padding: [0, "46px 0 20px!important"],
            marginTop: ["40px", 0],
        },
    }),
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
                width: ["calc(100vw - 20px)", "700px !important"],
            },
        },
    }),
);

const ctaButton = css(
    {
        position: "relative",
    },
    mq({
        width: ["200px !important", "auto !important"],
    }),
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
                <SubTitle>Webiny Online Knowledge-Sharing (KS) Sessions</SubTitle>

                <ContentContainer>
                    <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        dots={true}
                        className={webinyVideosImage}
                        slidesToShow={1}
                        f
                        centerMode={true}
                        centerPadding={25}
                        fade={true}
                    >
                        {/* <YTVideo img={tobeContinued} id={"wwXSn05GWmo"} /> */}

                        {/* <div>
              <img src={tobeContinued} alt="To be Continued - Knowledge Sharing Session" />
            </div>
            <div>
              <img src={tobeContinued} alt="To be Continued - Knowledge Sharing Session" />
            </div>
            <div>
              <img src={tobeContinued} alt="To be Continued - Knowledge Sharing Session" />
            </div> */}
                        <div></div>
                        <div></div>
                        <div></div>
                        {/* <div></div> */}
                    </Slider>
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
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
                            <h3 className="event-card-title">Development Workflow</h3>
                            <span>18/06/2020</span>
                            <h4>KS Session 1</h4>
                            <p>
                                In this session we'll explain how Webiny works so you can
                                confidently start contributing.
                            </p>
                            <Button
                                className={ctaButton}
                                link="https://www.youtube.com/watch?v=3wlOrcdcxXs&t=50s"
                                target="_blank"
                            >
                                View Event
                            </Button>
                        </div>
                        <div className="content">
                            <h3 className="event-card-title">Get Started Guides</h3>
                            <span>28/06/2020</span>
                            <h4>Prerequisites</h4>
                            <p>
                                This is a quick start guide that should help you setup Webiny as
                                fast as possible.
                            </p>
                            <Button
                                className={ctaButton}
                                link="https://www.youtube.com/watch?v=G_du-yE_DL4&list=PL9HlKSQaEuXScbySDD7QgITEA8RCHp-IS"
                                target="_blank"
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="content">
                            <h3 className="event-card-title">Commodo</h3>
                            <span>02/07/2020</span>
                            <h4></h4>
                            <p>
                                Commodo is a set of higher order functions (HOFs) that let you
                                define and compose rich data model objects.
                            </p>
                            <h5>Upcoming Event</h5>
                            <Button
                                className={ctaButton}
                                link="https://github.com/webiny/commodo"
                                target="_blank"
                            >
                                View Commodo
                            </Button>
                        </div>
                    </Slider>
                </ContentContainer>
            </section>
        );
    }
}

export default Events;
