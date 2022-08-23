import React, { Fragment, useContext, useState } from "react";
import { navigate } from "gatsby-link";
import Link from "../utils/link";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import ContentContainer from "../ui/content-container";
import Button from "../ui/button";
import { trackGoToGithub } from "../ui/functions";
import { ModalContext } from "../ui/layout/video-modal";
import NewsBanner from "../ui/news-banner";
// assets
import logo from "./assets/webiny-logo-with-icon-left-white.svg";
import logoOrange from "./assets/webiny-logo-with-icon-left-orange.svg";
import menuIconBlack from "./assets/burger-menu-icon.svg";
import closeMenuIcon from "./assets/close-burger-menu.svg";
import RightArrowIcon from "./assets/arrow-orange.svg";
import DownArrowIcon from "./assets/down-arrow-black.inline.svg";
import MobileDownArrowIcon from "./assets/mobile-menu-icon.svg";
import RightArrow from "./assets/arrow-right.svg";
// data
import { DROPDOWN_MENUS } from "./header-data";
// styles
import {
    MenuItem,
    parentMenu,
    horizontalLine,
    verticalLine,
    DropDown,
    HeaderContainer,
    headerInnerContainer,
    NavBar,
    WebinyLogo,
    Card,
    DropDownTitle,
    logoImage,
    Menu,
    MobileMenu,
    MenuItemMobile,
    MobileMenuIcon,
    MobileDownArrow,
    MobileMenuBackground,
    downArrowClass,
    ProductDropdownItem,
    ResourcesDropdownItem,
    ResourcesDropdownItemMobile,
    ProductDropdownItemMobile,
    FromTheBlogCOntainer,
    itemsParent,
    TitleContainer,
    mobileMenuList,
    headerButton,
} from "./header-styles";
import { Helmet } from "react-helmet";

const handleClick = (item, playVideo) => {
    const fullLink = typeof item.actionLink === "string" && item.actionLink.startsWith("http");
    // We assume that a full link is an external link,
    // So, we open it in a new tab
    if (fullLink) {
        window.open(item.actionLink, "_blank", "noopener noreferrer");
    } else {
        navigate("/" + item.actionLink);
    }
};

const MobileMenuItemList = () => {
    return (
        <React.Fragment>
            <ul className={mobileMenuList}>
                {DROPDOWN_MENUS.map(menu => (
                    <MenuItemMobile key={menu.id}>
                        <Link className="mobile-link" to={menu.link}>
                            {menu.label}
                        </Link>
                        {menu.hasOwnProperty("primarySection") && (
                            <React.Fragment>
                                <MobileDownArrow src={MobileDownArrowIcon} alt="menu-arrow" />
                                <div className="section--primary">
                                    {menu.primarySection.menuItems.map(menuItem => {
                                        return (
                                            <Link
                                                key={menuItem.id}
                                                className={"link"}
                                                rel="prerender"
                                                to={menuItem.link}
                                            >
                                                <ProductDropdownItemMobile>
                                                    <div className="image--container-mobile">
                                                        {menuItem.isComingSoon && (
                                                            <div className="coming--soon">
                                                                coming soon
                                                            </div>
                                                        )}
                                                        <img src={menuItem.image} alt="menu-icon" />
                                                    </div>
                                                    <div
                                                        className={
                                                            menuItem.isComingSoon
                                                                ? "add-margin" +
                                                                  " " +
                                                                  "label-arrow-container"
                                                                : "label-arrow-container"
                                                        }
                                                    >
                                                        <span>{menuItem.label}</span>
                                                        <img src={RightArrow} alt="right-arrow" />
                                                    </div>
                                                </ProductDropdownItemMobile>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </React.Fragment>
                        )}
                        {menu.hasOwnProperty("mainSection") && (
                            <React.Fragment>
                                <MobileDownArrow src={MobileDownArrowIcon} alt="menu-arrow" />
                                <div className={itemsParent}>
                                    {menu.mainSection.menuItems.map(menuItem => {
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
                                                <ResourcesDropdownItemMobile>
                                                    <div className="image--container">
                                                        <img src={menuItem.image} alt="menu-icon" />
                                                    </div>
                                                    <div>
                                                        <span className="label">
                                                            {menuItem.label}
                                                        </span>
                                                        <img src={RightArrow} alt="right-arrow" />
                                                    </div>
                                                </ResourcesDropdownItemMobile>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </React.Fragment>
                        )}
                    </MenuItemMobile>
                ))}
            </ul>
            <hr className={verticalLine} />
            <Button link="/pricing" type={"primary"}>
                TRY IT NOW FOR FREE
            </Button>
        </React.Fragment>
    );
};

const MenuItemList = ({ cards, sticky = true }) => {
    return (
        <React.Fragment>
            <ul className="menu--left">
                {DROPDOWN_MENUS.map(menu => (
                    <MenuItem key={menu.id} className={parentMenu}>
                        <Link rel="prerender" to={menu.link}>
                            {menu.label}
                        </Link>
                        {menu.hasOwnProperty("primarySection") && (
                            <React.Fragment>
                                <DownArrowIcon className={downArrowClass + " arrow-icon"} />
                                <DropDown className={menu.className}>
                                    <DropDownTitle>{menu.primarySection.title}</DropDownTitle>
                                    <div className="section--primary">
                                        {menu.primarySection.menuItems.map(menuItem => {
                                            return (
                                                <Link
                                                    key={menuItem.id}
                                                    className={"link"}
                                                    rel="prerender"
                                                    to={menuItem.link}
                                                >
                                                    <ProductDropdownItem>
                                                        <div className="image--container">
                                                            {menuItem.isComingSoon && (
                                                                <div className="coming--soon">
                                                                    coming soon
                                                                </div>
                                                            )}
                                                            <img
                                                                src={menuItem.image}
                                                                alt="menu-icon"
                                                            />
                                                        </div>
                                                        <div className="text--container">
                                                            <div className="label-arrow-container">
                                                                <span>{menuItem.label}</span>
                                                                <img
                                                                    src={RightArrow}
                                                                    alt="right-arrow"
                                                                />
                                                            </div>
                                                            <span>{menuItem.text}</span>
                                                        </div>
                                                    </ProductDropdownItem>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </DropDown>
                            </React.Fragment>
                        )}
                        {menu.hasOwnProperty("mainSection") && (
                            <React.Fragment>
                                <DownArrowIcon className={downArrowClass + " arrow-icon"} />
                                <DropDown className={menu.className}>
                                    <div className="two-rows-background"></div>
                                    <TitleContainer>
                                        <DropDownTitle>{menu.mainSection.title}</DropDownTitle>
                                        <DropDownTitle>{menu.secondarySection.title}</DropDownTitle>
                                    </TitleContainer>
                                    <div className="section--secondary">
                                        <div className={itemsParent}>
                                            {menu.mainSection.menuItems.map(menuItem => {
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
                                                        <ResourcesDropdownItem>
                                                            <div className="image--container">
                                                                <img
                                                                    src={menuItem.image}
                                                                    alt="menu-icon"
                                                                />
                                                            </div>
                                                            <div className="label--container">
                                                                <span className="label">
                                                                    {menuItem.label}
                                                                </span>
                                                                <img
                                                                    src={RightArrow}
                                                                    alt="right-arrow"
                                                                />
                                                            </div>
                                                        </ResourcesDropdownItem>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                        <FromTheBlogCOntainer>
                                            {cards.map(item => (
                                                <Card
                                                    key={item.id}
                                                    onClick={() => handleClick(item)}
                                                >
                                                    <Img
                                                        className="blog-image"
                                                        fluid={item.imgSrc}
                                                        alt={item.imgAlt}
                                                    />
                                                    <div className="blog-text-container">
                                                        <span className="blog-title">
                                                            {item.title}
                                                        </span>
                                                        <div className="arrow-container">
                                                            <span className="blog-subtitle">
                                                                {item.actionLabel}
                                                            </span>
                                                            <img
                                                                src={RightArrowIcon}
                                                                alt="right-arrow"
                                                            />
                                                        </div>
                                                    </div>
                                                </Card>
                                            ))}
                                        </FromTheBlogCOntainer>
                                    </div>
                                </DropDown>
                            </React.Fragment>
                        )}
                    </MenuItem>
                ))}
            </ul>
            <ul className="menu--right">
                <li
                    onClick={() => {
                        trackGoToGithub({ placement: "header-github-star" });
                    }}
                >
                    <a href="https://github.com/webiny/webiny-js" target="_blank" rel="noreferrer">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 16 16"
                            fill="#000"
                            aria-hidden="true"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </li>
                <hr className={horizontalLine} />
                <li>
                    <Button className={headerButton} link="/pricing" type={sticky && "primary"}>
                        TRY IT NOW FOR FREE
                    </Button>
                </li>
            </ul>
        </React.Fragment>
    );
};

const Header = ({ hasBanner = true, sticky = false }) => {
    const { latestBlockPosts } = useStaticQuery(graphql`
        query HeaderQuery {
            latestBlockPosts: allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
                nodes {
                    frontmatter {
                        title
                        slug
                        featureImage {
                            childImageSharp {
                                fluid(maxWidth: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const resourcesCards = latestBlockPosts.nodes.map((card, index) => {
        return {
            id: index,
            title: card.frontmatter.title,
            imgSrc: card?.frontmatter?.featureImage?.childImageSharp?.fluid,
            imgAlt: card.frontmatter.title,
            actionLabel: "Read more",
            actionLink: card.frontmatter.slug,
        };
    });

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const { setVideoId, setModalOpen } = useContext(ModalContext);

    return (
        <Fragment>
            {hasBanner && (
                <Fragment>
                    <Helmet>
                        <style type="text/css">{`
                            body {
                                margin-top: 30px;
                            }
                        `}</style>
                    </Helmet>
                    <NewsBanner>
                        <p>
                            🌟&nbsp;Help others discover us,&nbsp;
                            <a
                                href="https://github.com/webiny/webiny-js"
                                target="_blank"
                                rel="noreferrer"
                            >
                                star our GitHub repo!
                            </a>
                            &nbsp;🌟
                        </p>
                    </NewsBanner>
                </Fragment>
            )}
            <HeaderContainer isSticky={true} hideBanner={false} hasBanner={hasBanner}>
                <ContentContainer className={headerInnerContainer}>
                    <NavBar className={mobileMenuOpen ? "mobile-opened" : "mobile-closed"}>
                        <WebinyLogo alt="Webiny Home">
                            <Link rel="prerender" to="/">
                                <img
                                    alt="Webiny Logo"
                                    className={logoImage}
                                    src={logoOrange}
                                />
                            </Link>
                        </WebinyLogo>

                        <Menu>
                            <MenuItemList
                                cards={resourcesCards}
                                handleVideoPlay={videoId => {
                                    setModalOpen(true);
                                    setVideoId(videoId);
                                }}
                            />
                        </Menu>

                        <MobileMenuIcon
                            onClick={toggleMobileMenu}
                            alt="Mobile Menu"
                            src={mobileMenuOpen ? closeMenuIcon : menuIconBlack}
                        />
                        <MobileMenuBackground className={mobileMenuOpen ? "show-background" : ""}>
                            <MobileMenu>
                                <MobileMenuItemList />
                            </MobileMenu>
                        </MobileMenuBackground>
                    </NavBar>
                </ContentContainer>
            </HeaderContainer>
        </Fragment>
    );
};

export default Header;
