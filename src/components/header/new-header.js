import React, { Fragment, useContext, useState } from "react";
import Link, { navigate } from "gatsby-link";
import GitHubButton from "react-github-btn";
import { trackBookADemo } from "../ui/functions";

import ContentContainer from "../ui/content-container";
import Button from "../ui/button";
import Banner from "./banner";
import { trackGoToGithub } from "../ui/functions";
import { ModalContext } from "../ui/layout/video-modal";
// assets
import logo from "./assets/webiny-logo-with-icon-left-white.svg";
import logoOrange from "./assets/webiny-logo-with-icon-left-orange.svg";
import menuIcon from "./assets/round-menu-24px.svg";
import menuIconBlack from "./assets/round-menu-24px-black.svg";
import RightArrowIcon from "./assets/arrow-right.inline.svg";
import DownArrowIcon from "./assets/down-arrow-black.inline.svg";
// data
import { DROPDOWN_MENUS } from "./header-data";
// styles
import {
    MenuItem,
    parentMenu,
    linkStyle,
    dropdownArrow,
    DropDown,
    Card,
    githubMenu,
    buttonOutlinePrimary,
    HeaderContainer,
    headerInnerContainer,
    NavBar,
    WebinyLogo,
    logoImage,
    Menu,
    MobileMenu,
    MobileMenuIcon,
    downArrowClass,
} from "./header-styles";

const handleClick = (item, playVideo) => {
    if (typeof item.videoId === "string" && item.videoId.length > 0) {
        playVideo(item.videoId);
        return;
    }
    const fullLink = typeof item.actionLink === "string" && item.actionLink.startsWith("http");
    // We assume that a full link is an external link,
    // So, we open it in a new tab
    if (fullLink) {
        window.open(item.actionLink, "_blank", "noopener noreferrer");
    } else {
        navigate(item.actionLink);
    }
};

const MenuItemList = props => (
    <React.Fragment>
        <ul className="menu--left">
            {DROPDOWN_MENUS.map(menu => (
                <MenuItem key={menu.id} className={linkStyle + " " + parentMenu}>
                    <Link rel="prerender" to={menu.link}>
                        {menu.label}
                    </Link>
                    {menu.hasOwnProperty("primarySection") && (
                        <React.Fragment>
                            <DownArrowIcon className={downArrowClass + " arrow-icon"} />
                            <DropDown className={menu.className}>
                                <div className={dropdownArrow} />
                                <div className="section--primary">
                                    {menu.primarySection.menuItems.map(menuItem => {
                                        if (typeof menuItem.renderItem === "function") {
                                            return menuItem.renderItem();
                                        }

                                        return (
                                            <Link
                                                key={menuItem.id}
                                                className={"link"}
                                                rel="prerender"
                                                to={menuItem.link}
                                            >
                                                {menuItem.action ? (
                                                    <span
                                                        onClick={() => {
                                                            menuItem.action();
                                                        }}
                                                    >
                                                        {menuItem.label}
                                                    </span>
                                                ) : (
                                                    menuItem.label
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                                {menu.secondarySection.hasOwnProperty("menuItems") && (
                                    <div className="section--primary has-border">
                                        {menu.secondarySection.menuItems.map(menuItem => {
                                            if (typeof menuItem.renderItem === "function") {
                                                return menuItem.renderItem();
                                            }

                                            return (
                                                <Link
                                                    key={menuItem.id}
                                                    className={"link"}
                                                    rel="prerender"
                                                    to={menuItem.link}
                                                >
                                                    {menuItem.action ? (
                                                        <span
                                                            onClick={() => {
                                                                menuItem.action();
                                                            }}
                                                        >
                                                            {menuItem.label}
                                                        </span>
                                                    ) : (
                                                        menuItem.label
                                                    )}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                                {menu.secondarySection.hasOwnProperty("cards") && (
                                    <div className="section--secondary">
                                        {menu.secondarySection.cards.map(item => (
                                            <Card
                                                key={item.id}
                                                onClick={() =>
                                                    handleClick(item, props.handleVideoPlay)
                                                }
                                            >
                                                <img
                                                    src={item.imgSrc}
                                                    alt={item.imgAlt}
                                                    className="card__img"
                                                />
                                                <h4 className="card__title">{item.title}</h4>
                                                <p className="card__link">
                                                    {item.actionLabel}{" "}
                                                    <RightArrowIcon className={"icon"} />{" "}
                                                </p>
                                            </Card>
                                        ))}
                                    </div>
                                )}
                            </DropDown>
                        </React.Fragment>
                    )}
                </MenuItem>
            ))}

            <MenuItem className={githubMenu}>
                <div
                    onClick={() => {
                        trackGoToGithub({ placement: "header-github-star" });
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
                <div
                    onClick={() => {
                        trackBookADemo({ placement: "header" });
                    }}
                >
                    <Button
                        className={buttonOutlinePrimary}
                        link="https://calendly.com/webiny/30min"
                        type={props.sticky && "outline"}
                    >
                        Book a demo
                    </Button>
                </div>
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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const { setVideoId, setModalOpen } = useContext(ModalContext);

    return (
        <Fragment>
            {hasBanner && (
                <Banner
                    title={"Webiny 5.0 release is LIVE! Check out what's new!"}
                    link={"/blog/webiny-v5-the-big-update"}
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
                            <MenuItemList
                                sticky={sticky}
                                handleVideoPlay={videoId => {
                                    setModalOpen(true);
                                    setVideoId(videoId);
                                }}
                            />
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
