import React, { Fragment, useContext, useState } from "react";

import ContentContainer from "../ui/content-container";
import Button from "../ui/button";
import Link from "../utils/link";
import { trackGoToGithub } from "../ui/functions";

import GitHubButton from "react-github-btn"

import { ModalContext } from "../ui/layout/video-modal";
import NewsBanner from "../ui/news-banner";
// assets

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
    HorizontalLine,
    VerticalLine,
    DropDown,
    HeaderContainer,
    HeaderInnerContainer,
    NavBar,
    WebinyLogo,
    Card,
    DropDownTitle,
    Menu,
    MobileMenu,
    MenuItemMobile,
    MobileMenuIcon,
    MobileDownArrow,
    downArrowClass,
    MobileMenuBackground,
    DownArrowElement,
    ProductDropdownItem,
    ResourcesDropdownItemMobile,
    ProductDropdownItemMobile,
    FromTheBlogCOntainer,
    ItemsParent,
    TitleContainer,
    MobileMenuList,
    HeaderButton,
    Whitepaper
} from "./header-styles";
import { Helmet } from "react-helmet";

const handleClick = (item, playVideo) => {
    const fullLink = typeof item.actionLink === "string" && item.actionLink.startsWith("http");
    // We assume that a full link is an external link,
    // So, we open it in a new tab
    if (fullLink) {
        window.open(item.actionLink, "_blank", "noopener noreferrer");
    } else {
        window.location = "/" + item.actionLink;
    }
};

const MobileMenuItemList = () => {
    return (
        <React.Fragment>
            <MobileMenuList>
                {DROPDOWN_MENUS.map(menu => (
                    <MenuItemMobile key={menu.id}>
                        <Link className="mobile-link" to={menu.link}>
                            {menu.label}
                        </Link>
                        {menu.hasOwnProperty("primarySection") && (
                            <React.Fragment>
                                <div className="section--primary">
                                    <h3>{menu.primarySection.title}</h3>
                                    {menu.primarySection.menuItems.map(menuItem => {
                                        return (
                                            <Link
                                                key={menu.id+'-'+menuItem.id}
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
                        {menu.hasOwnProperty("secondarySection") && (
                            <React.Fragment>
                                <div className="section--secondary">
                                    <h3>{menu.secondarySection.title}</h3>
                                    {menu.secondarySection.menuItems.map(menuItem => {
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
                                <ItemsParent>
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
                                </ItemsParent>
                            </React.Fragment>
                        )}
                    </MenuItemMobile>
                ))}
            </MobileMenuList>
            <VerticalLine />
            <Button link="/forms/product-demo" type={"primary"}>
                BOOK A CALL
            </Button>
        </React.Fragment>
    );
};

const MenuItemList = ({ cards, sticky = true }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <React.Fragment>
            <ul className="menu--left">
                {DROPDOWN_MENUS.map(menu => (
                    <MenuItem key={menu.id} className={"parent-item "+(menu.hasOwnProperty("primarySection") ? 'has-child' : '')}>
                        <Link rel="prerender" to={menu.link}>
                            {menu.label}
                        </Link>
                        {menu.hasOwnProperty("primarySection") && (
                            <React.Fragment>
                                <DownArrowIcon className={downArrowClass + " arrow-icon"} />
                                {/*<DownArrowElement src={DownArrowIcon} className={"arrow-icon"} width="24" height="24"/> */}
                                
                                <DropDown className={menu.className} style={{display: (isMenuOpen ? 'flex' : 'none' )}}>
                                    
                                    <div className={"section--primary"+ (menu.hasOwnProperty("secondarySection") && " has-secondary")}>
                                        <DropDownTitle>{menu.primarySection.title}</DropDownTitle>
                                        <div>
                                            {menu.primarySection.menuItems.map(menuItem => {
                                                return (
                                                    <Link
                                                        key={menuItem.id}
                                                        className={"link"}
                                                        rel="prerender"
                                                        to={menuItem.link}
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setTimeout(() => {
                                                                setIsMenuOpen(true);
                                                            }, 100);
                                                        } }
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
                                    </div>
                                    {menu.hasOwnProperty("secondarySection") && (
                                        <div className="section--secondary">
                                            <DropDownTitle>{menu.secondarySection.title}</DropDownTitle>
                                            <div>
                                                {menu.secondarySection.menuItems.map(menuItem => {
                                                    return (
                                                        <Link
                                                            key={menuItem.id}
                                                            className={"link"}
                                                            rel="prerender"
                                                            to={menuItem.link}
                                                            onClick={() => {
                                                                setIsMenuOpen(false);
                                                                setTimeout(() => {
                                                                    setIsMenuOpen(true);
                                                                }, 100);
                                                            } }
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
                                        </div>
                                    )}
                                </DropDown>
                            </React.Fragment>
                        )}
                        
                        {menu.hasOwnProperty("mainSection") && (
                            <React.Fragment>
                                <DownArrowIcon className={downArrowClass + " arrow-icon"} />
                                {/*<DownArrowElement className={"arrow-icon"} width="24" height="24"/> */}
                                <DropDown className={menu.className}>
                                    <div className="section--secondary">
                                        <ItemsParent>
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
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setTimeout(() => {
                                                                setIsMenuOpen(true);
                                                            }, 100);
                                                        } }
                                                    >
                                                        <ProductDropdownItem>
                                                            <div className="image--container">
                                                                <img
                                                                    src={menuItem.image}
                                                                    alt="menu-icon"
                                                                />
                                                            </div>
                                                            <div className="text--container">
                                                                <div className="label-arrow-container">
                                                                    <span className="label">
                                                                        {menuItem.label}
                                                                    </span>
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
                                        </ItemsParent>
                                        
                                        <Whitepaper>
                                            <div>
                                                <h5>WHITEPAPER</h5>
                                                <h3>{menu.secondarySection.menuItems[0].label}</h3>
                                                <a className="" href={menu.secondarySection.menuItems[0].link} title={menu.secondarySection.menuItems[0].label}>Read the Whitepaper <img src={RightArrow} alt="right-arrow" /></a>
                                            </div>
                                            <img src={menu.secondarySection.menuItems[0].image}/>
                                        </Whitepaper>
                                        
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
                    <GitHubButton
                        href="https://github.com/webiny/webiny-js"
                        data-show-count="true"
                        data-size="large" 
                        aria-label="Star webiny/webiny-js on GitHub"
                    />
                </li>
                <HorizontalLine />
                <li>
                    <HeaderButton link="/forms/product-demo" type={sticky && "primary"}>
                        BOOK A CALL
                    </HeaderButton>
                </li>
            </ul>
        </React.Fragment>
    );
};

const Header = ({ hasBanner = true, sticky = false }) => {
    /*
    const { latestBlockPosts } = useStaticQuery(graphql`
        query HeaderQuery {
            latestBlockPosts: allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 2, filter: {frontmatter: {type: {eq: "blog"}}}) {
                nodes {
                    frontmatter {
                        title
                        slug
                        featureImage {
                          publicURL
                          childImageSharp {
                            fluid(maxWidth: 800) {
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
    */

    const resourcesCards = [];

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
                <ContentContainer>
                    <HeaderInnerContainer>
                        <NavBar className={mobileMenuOpen ? "mobile-opened" : "mobile-closed"}>
                            <WebinyLogo alt="Webiny Home">
                                <Link rel="prerender" to="/">
                                    <img alt="Webiny Logo" src={logoOrange} />
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
                    </HeaderInnerContainer>
                </ContentContainer>
            </HeaderContainer>
        </Fragment>
    );
};

export default Header;
