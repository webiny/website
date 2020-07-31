import React, { Fragment, useState } from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";
import Link from "gatsby-link";
import { css } from "emotion";
import GitHubButton from "react-github-btn";
import Banner, { BANNER_HEIGHT } from "./banner";
import { trackGaConversion } from "../ui/functions";

import logo from "./assets/webiny-logo-with-icon-left-white.svg";
import logoOrange from "./assets/webiny-logo-with-icon-left-orange.svg";
import menuIcon from "./assets/round-menu-24px.svg";
import menuIconBlack from "./assets/round-menu-24px-black.svg";
import downArrowWhite from "./assets/down-arrow-white.svg";
import downArrowBlack from "./assets/down-arrow-black.svg";

const WebinyLogo = styled("div")({
    padding: 0,
    lineHeight: "100%",
    zIndex: 100
});

const logoImage = css(
    {},
    mq({
        paddingLeft: [20, 0],
        height: [28, 32],
        marginTop: [5]
    })
);

const Menu = styled("div")(
    {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        "& ul": {
            listStyle: "none",
            //display: 'flex',
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
        },
        "& .menu--left": {},
        "& .menu--right": {
            "& li:last-child": {
                marginLeft: 16
            }
        }
    },
    mq({
        display: ["none", "flex"],
        "& ul": {
            display: ["none", "flex"]
        }
    })
);

const linkStyle = css({
    fontWeight: 600,
    textDecoration: "none",
    color: "#fff",
    transition: "250ms opacity",
    "&:hover": {
        opacity: "0.8"
    }
});

const DropDown = styled("div")(
    {
        textAlign: "left",
        borderRadius: 2,
        visibility: "hidden",
        minWidth: "160px",
        boxSizing: "border-box",
        opacity: 0,
        left: "calc(50% - 12px)",
        transform: "translateY(1em) translateX(-50%)",
        zIndex: "-1",
        transition: "all 0.1s ease-in-out 0s, visibility 0s linear 0.1s, z-index 0s linear 0.01s",
        a: {
            color: theme.color.black,
            fontWeight: theme.fontWeight.regular,
            fontSize: theme.fontSize.navMenuSubItem,
            textDecoration: "none",
            transition: "250ms opacity",
            display: "block",
            marginBottom: 25,
            "&:hover": {
                opacity: "0.8",
                textDecoration: "underline"
            },
            "&:last-child": {
                marginBottom: 0
            }
        },
        hr: {
            borderColor: "#e8e8e8",
            margin: "-5px -10px 10px -10px",
            borderTop: "none"
        },
        ".section-wrapper": {
            display: "flex",
            ".section": {
                width: 120,
                ".section-title": {
                    fontWeight: theme.fontWeight.semiBold,
                    marginBottom: 15,
                    cursor: "text",
                    color: theme.color.black
                },
                "&:last-child": {
                    marginBottom: "0px !important"
                }
            },
            hr: {
                display: "none"
            }
        }
    },
    mq({
        position: ["relative", "absolute"],
        display: ["none", "block"],
        boxShadow: ["none", "0px 8px 16px 0px rgba(0,0,0,0.2)"],
        width: ["100%", "auto"],
        backgroundColor: ["white", "#f9f9f9"],
        padding: ["0 25px 10px 25px", 25],
        top: [25, 50],
        ".open": {
            display: "block"
        },
        ".section-wrapper": {
            marginTop: [-25, 0],
            flexDirection: ["column", "row"],
            ".section": {
                ".section-title": {
                    marginTop: [25, 0]
                },
                a: {
                    paddingLeft: [25, 0]
                }
            }
        }
    })
);

const DownArrow = styled("div")(
    {
        position: "absolute",
        width: 24,
        height: 24,
        background: "url(" + downArrowWhite + ") no-repeat",
        right: 0,
        color: "white"
    },
    mq({
        top: [-1, 14]
    })
);

const DownArrowIcon = styled("div")(
    {
        position: "absolute",
        width: 24,
        height: 24,
        background: "url(" + downArrowWhite + ") no-repeat",
        right: 0,
        color: "white"
    },
    mq({
        top: [-1, 14]
    })
);

const MenuItem = styled("li")(
    {
        textAlign: "left",
        cursor: "pointer",
        position: "relative",
        fontSize: 14,
        color: theme.color.black,
        "&:hover, &:focus": {
            [DropDown]: {
                //display: 'block',
                visibility: "visible",
                display: "block",
                opacity: 1,
                zIndex: 1,
                //left: 'calc(-50% - 25px)',
                transform: "translateY(0%) translateX(-50%)",
                transitionDelay: "0s, 0s, 0.1s"
            }
        }
    },
    mq({
        marginLeft: [0, 30],
        marginBottom: [15, 0],
        marginTop: [0, -15],
        paddingBottom: [15, 15],
        paddingTop: [0, 15],
        borderBottom: ["1px solid " + theme.color.lightGray, "none"]
    })
);

const parentMenu = css(
    {
        paddingRight: 25,
        marginRight: -5,
        a: {
            color: "inherit",
            textDecoration: "none"
        },
        "&:hover": {
            opacity: 1
        }
    },
    mq({
        marginBottom: [15, 0],
        paddingBottom: [15, 15]
    })
);

const dropdownArrow = css`
    position: absolute;
    background: #fff;
    border: 4px solid #fff;
    top: 2px;
    left: 50%;
    zindex: -1;
    &:after,
    &:before {
        bottom: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    &:after {
        border-color: rgba(136, 183, 213, 0);
        border-bottom-color: #fff;
        border-width: 5px;
        margin-left: -5px;
    }
    &:before {
        border-color: rgba(194, 225, 245, 0);
        border-bottom-color: #fff;
        border-width: 11px;
        margin-left: -11px;
    }
`;

const HeaderContainer = styled("header")(
    {
        left: 0,
        paddingTop: 15,
        paddingBottom: 15,
        width: "100%",
        transition: "all 500ms"
    },
    props => ({
        position: props.isSticky ? "fixed" : "absolute",
        // TODO: We'll discuss about having transparent header
        // backgroundColor: props.isSticky ? "#fff" : "transparent",
        // boxShadow: props.isSticky && "0 0 1px 1px rgba(34,45,57,.15)",
        backgroundColor: theme.color.white,
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.297995)",
        paddingTop: props.isSticky ? 10 : 20,
        paddingBottom: props.isSticky ? 10 : 20,
        top: props.hasBanner ? (props.hideBanner ? 0 : BANNER_HEIGHT) : 0,
        zIndex: props.hasBanner ? (props.hideBanner ? 102 : 100) : 100,
        [MenuItem]: {
            color: props.isSticky ? "#000" : "#fff",
            ["a." + linkStyle]: {
                color: props.isSticky ? "#000" : "#fff"
            },
            [DownArrow]: {
                background:
                    "url(" + (props.isSticky ? downArrowBlack : downArrowWhite) + ") no-repeat"
            }
        }
    }),
    mq({
        height: ["auto", 45]
    })
);

const headerInnerContainer = css(
    {
        maxWidth: 1200,
        width: "100%",
        boxSizing: "border-box"
    },
    mq({
        width: ["100%", "100%"],
        padding: [0, "0 5px", 0]
    })
);

const MobileMenu = styled("ul")(
    {
        paddingRight: 20,
        display: "flex",
        position: "relative",
        height: "calc(100vh - 80px)",
        overflowX: "scroll",
        width: "auto",
        margin: 15,
        listStyle: "none",
        boxSizing: "border-box",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5
    },
    mq({
        display: ["block", "none"]
    })
);

const MobileMenuIcon = styled("img")(
    {
        zIndex: 100,
        position: "absolute",
        right: 20,
        top: 17
    },
    mq({
        display: ["block", "none"]
    })
);

const link = css({
    textDecoration: "none",
    color: theme.color.black
});

const NavBar = styled("div")(
    {
        margin: "0 auto",
        display: "flex",
        alignContent: "flex-end",
        justifyContent: "space-between",
        [MobileMenu]: {
            display: "none"
        },
        "&.mobile-opened": {
            backgroundColor: theme.color.darkGray,
            height: "100vh",
            justifyContent: "flex-start",
            [MobileMenu]: {
                display: "none"
                // display: "block"
            }
        }
    },
    mq({
        flexDirection: ["column", "row"],
        marginTop: [-10, 0],
        paddingTop: [10, 0]
    })
);

const githubMenu = css(
    {},
    mq({
        paddingTop: [5, 19]
    })
);

const MenuItemList = props => (
    <React.Fragment>
        <MenuItem className={githubMenu}>
            <div
                onClick={() => {
                    trackGaConversion();
                }}
            >
                <GitHubButton
                    href="https://github.com/webiny/webiny-js"
                    data-icon="octicon-star"
                    data-show-count="true"
                    aria-label="Star webiny/webiny-js on GitHub"
                >
                    Star
                </GitHubButton>
            </div>
        </MenuItem>
        <MenuItem>
            <Link className={linkStyle} rel="prerender" to="/why-webiny">
                Why Webiny?
            </Link>
        </MenuItem>

        <MenuItem>
            <Link className={linkStyle} rel="prerender" to="/features">
                Features
            </Link>
        </MenuItem>

        <MenuItem>
            <Link className={linkStyle} rel="prerender" to="/agency">
                For Agencies
            </Link>
        </MenuItem>

        <MenuItem className={linkStyle + " " + parentMenu}>
            <Link rel="prerender" to="/serverless-apps">
                Apps
            </Link>
            <DownArrow />
            <DropDown>
                <div className={dropdownArrow} />
                <Link rel="prerender" to="/serverless-app/headless-cms">
                    Headless CMS
                </Link>
                <Link rel="prerender" to="/serverless-app/page-builder">
                    Page Builder
                </Link>
                <Link rel="prerender" to="/serverless-app/form-builder">
                    Form Builder
                </Link>
                <Link rel="prerender" to="/serverless-app/file-manager">
                    File Manager
                </Link>
                <hr />
                <Link rel="prerender" to="/serverless-apps">
                    View All
                </Link>
            </DropDown>
        </MenuItem>
        {/**
         <MenuItem>
         <Link className={linkStyle} rel="prerender" to="/plugins">
         Plugins
         </Link>
         </MenuItem>
         */}

        <MenuItem className={linkStyle + " " + parentMenu}>
            Community
            <DownArrow />
            <DropDown>
                <div className={dropdownArrow} />
                <a href="https://github.com/webiny/webiny-js">GitHub</a>
                <a href="https://community.webiny.com">Forum</a>
                <a href="https://www.webiny.com/slack">Slack</a>
                <a href="https://blog.webiny.com">Blog</a>
                <a href="/events">Events</a>
            </DropDown>
        </MenuItem>

        <MenuItem>
            <Link className={linkStyle} rel="prerender" to="/about-us">
                About Us
            </Link>
        </MenuItem>

        <MenuItem>
            <Button link="https://docs.webiny.com/" type={props.sticky && "primary"}>
                Get Started
            </Button>
        </MenuItem>
    </React.Fragment>
);

const buttonOutlinePrimary = css({
    backgroundColor: theme.color.white,
    color: theme.color.primaryDark,
    textTransform: "uppercase",
    border: "solid 2px " + theme.color.primaryDark,
    padding: "12px 20px"
});

const MenuItemListDesktop = props => (
    <React.Fragment>
        <ul className="menu--left">
            <MenuItem className={linkStyle + " " + parentMenu}>
                <Link rel="prerender" to="/serverless-apps">
                    Products
                </Link>
                <DownArrow />
                <DropDown>
                    <div className={dropdownArrow} />
                    <Link className={linkStyle} rel="prerender" to="/why-webiny">
                        Why Webiny?
                    </Link>
                    <Link className={linkStyle} rel="prerender" to="/features">
                        Features
                    </Link>
                    <div className="spacer"></div>
                    <Link className={linkStyle} rel="prerender" to="/serverless-apps">
                        Webiny Apps
                    </Link>
                    <Link className={linkStyle} rel="prerender" to="/plugins">
                        Webiny Plugins
                    </Link>
                    <Link className={linkStyle} rel="prerender" to="/roadmap">
                        Product Roadmap
                    </Link>
                    {/*  Needs to be in second column  */}
                    <Link className={linkStyle} rel="prerender" to="/agency">
                        For Agencies
                    </Link>
                    <Link className={linkStyle} rel="prerender" to="/enterprise">
                        For Enterprises
                    </Link>
                    {/* TODO: Needs to be in separate space for CARDs  */}
                </DropDown>
            </MenuItem>

            <MenuItem className={linkStyle + " " + parentMenu}>
                <Link rel="prerender" to="/serverless-apps">
                    Solutions
                </Link>
                <DownArrow />
                <DropDown>
                    <div className={dropdownArrow} />
                    <Link className={linkStyle} rel="prerender" to="/use-case/serverless-websites">
                        Build Serverless Websites
                    </Link>
                    <Link
                        className={linkStyle}
                        rel="prerender"
                        to="/use-case/serverless-applications"
                    >
                        Build Serverless Apps
                    </Link>
                    <Link
                        className={linkStyle}
                        rel="prerender"
                        to="/use-case/serverless-graphql-api"
                    >
                        Build Serverless APIs
                    </Link>
                    <Link className={linkStyle} rel="prerender" to="/use-case/microservices">
                        Build Microservices
                    </Link>
                    {/* TODO: Needs to be in separate space for CARDs  */}
                </DropDown>
            </MenuItem>

            <MenuItem className={linkStyle + " " + parentMenu}>
                Community
                <DownArrow />
                <DropDown>
                    <div className={dropdownArrow} />
                    <a href="https://github.com/webiny/webiny-js">GitHub</a>
                    <a href="https://community.webiny.com">Forum</a>
                    <a href="https://www.webiny.com/slack">Slack</a>
                    <a href="https://blog.webiny.com">Blog</a>
                    <a href="/events">Events</a>
                </DropDown>
            </MenuItem>

            <MenuItem className={linkStyle + " " + parentMenu}>
                <Link rel="prerender" to="/serverless-apps">
                    Resources
                </Link>
                <DownArrow />
                <DropDown>
                    <div className={dropdownArrow} />
                    <Link rel="prerender" to="https://www.youtube.com/webiny">
                        Tutorials
                    </Link>
                    <Link
                        rel="prerender"
                        to="https://docs.webiny.com/docs/guides/headless-react-tutorial"
                    >
                        Guides
                    </Link>
                    <Link rel="prerender" to="https://blog.webiny.com/">
                        Blog
                    </Link>
                    <Link rel="prerender" to="https://docs.webiny.com/docs/webiny/introduction/">
                        Documentation
                    </Link>
                </DropDown>
            </MenuItem>

            <MenuItem className={githubMenu}>
                <div
                    onClick={() => {
                        trackGaConversion();
                    }}
                >
                    <GitHubButton
                        href="https://github.com/webiny/webiny-js"
                        data-icon="octicon-star"
                        data-show-count="true"
                        aria-label="Star webiny/webiny-js on GitHub"
                    >
                        Star
                    </GitHubButton>
                </div>
            </MenuItem>
        </ul>
        <ul className="menu--right">
            <MenuItem>
                <Button
                    className={buttonOutlinePrimary}
                    link="https://calendly.com/webiny/30min"
                    type={props.sticky && "outline"}
                >
                    Book a demo
                </Button>
            </MenuItem>
            <MenuItem>
                <Button link="https://docs.webiny.com/" type={props.sticky && "primary"}>
                    Get Started
                </Button>
            </MenuItem>
        </ul>
    </React.Fragment>
);

const Header = ({ hasBanner = true }) => {
    // TODO: We'll see what to do with them
    const [sticky, setSticky] = useState(true);
    const [hideBanner, setHideBanner] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // TODO: add implementation
    const toggleMobileMenu = () => {};

    return (
        <Fragment>
            {/* TODO: Need to update `NewsBanner` styles */}
            {hasBanner && (
                <Banner
                    title={
                        "♥️♥️♥️ We are live on Product hunt - if you like what you see here, please show us some love ♥️♥️♥️"
                    }
                    link={"https://www.webiny.com/product-hunt"}
                    tag={"new"}
                />
            )}
            <HeaderContainer isSticky={sticky} hideBanner={hideBanner} hasBanner={hasBanner}>
                <ContentContainer className={headerInnerContainer}>
                    <NavBar className={mobileMenuOpen ? "mobile-opened" : "mobile-closed"}>
                        <WebinyLogo alt="Webiny Home">
                            <Link rel="prerender" to="/">
                                <img
                                    alt="Webiny Logo"
                                    className={logoImage}
                                    src={sticky || mobileMenuOpen ? logoOrange : logo}
                                />
                            </Link>
                        </WebinyLogo>

                        <Menu>
                            <MenuItemListDesktop sticky={sticky} />
                        </Menu>

                        <MobileMenuIcon
                            onClick={toggleMobileMenu}
                            alt="Mobile Menu"
                            src={mobileMenuOpen || sticky ? menuIconBlack : menuIcon}
                        />
                        <MobileMenu>
                            <MenuItemList sticky={mobileMenuOpen} />
                        </MobileMenu>
                    </NavBar>
                </ContentContainer>
            </HeaderContainer>
        </Fragment>
    );
};

export default Header;
