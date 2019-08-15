import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import { css } from "emotion";
import Link from "gatsby-link";
import Slider from "react-slick";
import ContentContainer from "../../ui/content-container";

import "./assets/slider.css";
import background from "./assets/components-bg.svg";
import fileManager from "./assets/file-manager.jpg";
import formBuilder from "./assets/form-builder.jpg";
import headlessCms from "./assets/headless-cms.png";
import pageBuilder from "./assets/webiny-visual-page-builder.png";

const wrapperClass = css(
    {
        background: "url(" + background + ") no-repeat left top",
        backgroundSize: "cover"
    },
    mq({
        marginTop: [0, -200],
        paddingTop: [0, 200],
        backgroundColor: ["#F7F7F7", "transparent"]
    })
);

const SubTitle = styled("h2")({
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.black,
    textAlign: "center",
    paddingTop: 50,
    width: 650,
    margin: "25px auto 40px auto"
});

const webinyAppsList = css({
    ".slick-list": {
        position: "relative",
        padding: "46px 0 20px!important"
    },
    ".slick-slide": {
        transition: "all .2s ease",
        outline: 0,
        opacity: 0.6,
        width: "350px!important",
        //height: "160px!important",
        padding: 30,
        margin: "0 15px",
        background: "#fcfcfc",
        borderRadius: "3px",
        overflow: "hidden",
        display: "block",
        boxSizing: "border-box",
        cursor: "pointer",
        "&:hover": {
            opacity: 1
        },
        ".content": {
            outline: 0,
            h3: {
                fontSize: 24,
                fontWeight: theme.fontWeight.semiBold,
                marginBottom: 25,
                marginTop: 0
            },
            p: {
                fontSize: 18
            },
            a: {
                display: "block-inline",
                color: theme.color.primaryDark
            }
        }
    },
    ".slick-current": {
        opacity: 1,
        position: "relative",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 10px 20px rgba(91,107,174,.15)",
        borderBottom: "2px solid #FA5723"
    }
});

const webinyAppsImage = css({
    ".slick-slide": {
        outline: 0,
        div: {
            outline: 0
        },
        img: {
            outline: 0,
            boxShadow: "0 5px 10px 0 rgba(0,0,0,0.15)",
            width: "800px !important",
            //height: "350px !important",
            margin: "0 auto",
            outline: 0,
            borderRadius: 5,
            boxSizing: "border-box"
        }
    },
    ".slick-dots": {
        bottom: -35,
        "li button:before": {
            fontSize: 15
        }
    }
});

class Components extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <SubTitle>Webiny comes with several ready-made serverless apps</SubTitle>

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
                            <img src={headlessCms} alt="Webiny Serverless Headless CMS" />
                        </div>
                        <div>
                            <img src={pageBuilder} alt="Webiny Serverless Page Builder" />
                        </div>
                        <div>
                            <img src={formBuilder} alt="Webiny Serverless Form Builder" />
                        </div>
                        <div>
                            <img src={fileManager} alt="Webiny Serverless File Manager" />
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
                    >
                        <div className="content">
                            <h3>Headless CMS</h3>
                            <p>
                                GraphQL based headless CMS with powerful content modeling features.
                            </p>
                            <Link to="/apps/headless-cms">Learn More</Link>
                        </div>
                        <div className="content">
                            <h3>Page Builder</h3>
                            <p>
                                For when you need a quick landing page created without any coding.
                            </p>
                            <Link to="/apps/headless-cms">Learn More</Link>
                        </div>
                        <div className="content">
                            <h3>Form Builder</h3>
                            <p>
                                Create forms using a drag&drop interface and track how they convert.
                            </p>
                            <Link to="/apps/headless-cms">Learn More</Link>
                        </div>
                        <div className="content">
                            <h3>File Manager</h3>
                            <p>Upload, categorize, search and edit your files.</p>
                            <Link to="/apps/headless-cms">Learn More</Link>
                        </div>
                    </Slider>
                </ContentContainer>
            </section>
        );
    }
}

export default Components;
