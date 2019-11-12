import React from 'react';
import styled from 'react-emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import ContentContainer from '../ui/content-container';
import Button from '../ui/button';
import Link from 'gatsby-link';
import {css} from 'emotion';
import GitHubButton from 'react-github-btn';
import NewsBanner from '../ui/news-banner';

import logo from './assets/webiny-logo-with-icon-left-white.svg';
import logoOrange from './assets/webiny-logo-with-icon-left-orange.svg';
import menuIcon from './assets/round-menu-24px.svg';
import menuIconBlack from './assets/round-menu-24px-black.svg';
import downArrowWhite from './assets/down-arrow-white.svg';
import downArrowBlack from './assets/down-arrow-black.svg';

const WebinyLogo = styled ('div') ({
  padding: 0,
  lineHeight: '100%',
  zIndex: 100,
});

const logoImage = css (
  {},
  mq ({
    paddingLeft: [20, 0],
    height: [28, 32],
    marginTop: [5],
  })
);

const Menu = styled ('ul') (
  {
    listStyle: 'none',
    //display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mq ({
    display: ['none', 'flex'],
  })
);

const linkStyle = css ({
  fontWeight: 600,
  textDecoration: 'none',
  color: '#fff',
  transition: '250ms opacity',
  '&:hover': {
    opacity: '0.8',
  },
});

const DropDown = styled ('div') (
  {
    textAlign: 'left',
    borderRadius: 2,
    visibility: 'hidden',
    minWidth: '160px',
    boxSizing: 'border-box',
    opacity: 0,
    left: 'calc(50% - 12px)',
    transform: 'translateY(1em) translateX(-50%)',
    zIndex: '-1',
    transition: 'all 0.1s ease-in-out 0s, visibility 0s linear 0.1s, z-index 0s linear 0.01s',
    a: {
      color: theme.color.black,
      fontWeight: theme.fontWeight.regular,
      fontSize: theme.fontSize.navMenuSubItem,
      textDecoration: 'none',
      transition: '250ms opacity',
      display: 'block',
      marginBottom: 25,
      '&:hover': {
        opacity: '0.8',
        textDecoration: 'underline',
      },
      '&:last-child': {
        marginBottom: 0,
      },
    },
    hr: {
      borderColor: '#e8e8e8',
      margin: '-5px -10px 10px -10px',
      borderTop: 'none',
    },
    '.section-wrapper': {
      display: 'flex',
      '.section': {
        width: 120,
        '.section-title': {
          fontWeight: theme.fontWeight.semiBold,
          marginBottom: 15,
          cursor: 'text',
          color: theme.color.black,
        },
        '&:last-child': {
          marginBottom: '0px !important',
        },
      },
      hr: {
        display: 'none',
      },
    },
  },
  mq ({
    position: ['relative', 'absolute'],
    display: ['none', 'block'],
    boxShadow: ['none', '0px 8px 16px 0px rgba(0,0,0,0.2)'],
    width: ['100%', 'auto'],
    backgroundColor: ['white', '#f9f9f9'],
    padding: ['0 25px 10px 25px', 25],
    top: [25, 50],
    '.open': {
      display: 'block',
    },
    '.section-wrapper': {
      marginTop: [-25, 0],
      flexDirection: ['column', 'row'],
      '.section': {
        '.section-title': {
          marginTop: [25, 0],
        },
        a: {
          paddingLeft: [25, 0],
        },
      },
    },
  })
);

const DownArrow = styled ('div') (
  {
    position: 'absolute',
    width: 24,
    height: 24,
    background: 'url(' + downArrowWhite + ') no-repeat',
    right: 0,
    color: 'white',
  },
  mq ({
    top: [-1, 14],
  })
);

const MenuItem = styled ('li') (
  {
    textAlign: 'left',
    cursor: 'pointer',
    position: 'relative',
    fontSize: 14,
    color: theme.color.black,
    '&:hover, &:focus': {
      [DropDown]: {
        //display: 'block',
        visibility: 'visible',
        display: 'block',
        opacity: 1,
        zIndex: 1,
        //left: 'calc(-50% - 25px)',
        transform: 'translateY(0%) translateX(-50%)',
        transitionDelay: '0s, 0s, 0.1s',
      },
    },
  },
  mq ({
    marginLeft: [0, 30],
    marginBottom: [15, 0],
    marginTop: [0, -15],
    paddingBottom: [15, 15],
    paddingTop: [0, 15],
    borderBottom: ['1px solid ' + theme.color.lightGray, 'none'],
  })
);

const parentMenu = css (
  {
    paddingRight: 25,
    marginRight: -5,
    '&:hover': {
      opacity: 1,
    },
  },
  mq ({
    marginBottom: [15, 0],
    paddingBottom: [15, 15],
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

const HeaderContainer = styled ('header') (
  {
    left: 0,
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    transition: 'all 500ms',
    zIndex: 100,
  },
  props => ({
    position: props.isSticky ? 'fixed' : 'absolute',
    backgroundColor: props.isSticky ? '#fff' : 'transparent',
    boxShadow: props.isSticky && '0 0 1px 1px rgba(34,45,57,.15)',
    paddingTop: props.isSticky ? 10 : 20,
    paddingBottom: props.isSticky ? 10 : 20,
    top: props.hasBanner ? (props.hideBanner ? 0 : 25) : 0,
    [MenuItem]: {
      color: props.isSticky ? '#000' : '#fff',
      ['a.' + linkStyle]: {
        color: props.isSticky ? '#000' : '#fff',
      },
      [DownArrow]: {
        background: 'url(' +
          (props.isSticky ? downArrowBlack : downArrowWhite) +
          ') no-repeat',
      },
    },
  }),
  mq ({
    height: ['auto', 45],
  })
);

const headerInnerContainer = css (
  {
    maxWidth: 1200,
    width: '100%',
    boxSizing: 'border-box',
  },
  mq ({
    width: ['100%', '100%'],
    padding: [0, '0 5px', 0],
  })
);

const MobileMenu = styled ('ul') (
  {
    paddingRight: 20,
    display: 'flex',
    position: 'relative',
    height: 'calc(100vh - 80px)',
    overflowX: 'scroll',
    width: 'auto',
    margin: 15,
    listStyle: 'none',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
  mq ({
    display: ['block', 'none'],
  })
);

const MobileMenuIcon = styled ('img') (
  {
    zIndex: 100,
    position: 'absolute',
    right: 20,
    top: 17,
  },
  mq ({
    display: ['block', 'none'],
  })
);

const link = css ({
  textDecoration: 'none',
  color: theme.color.black,
});

const NavBar = styled ('div') (
  {
    margin: '0 auto',
    display: 'flex',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    [MobileMenu]: {
      display: 'none',
    },
    '&.mobile-opened': {
      backgroundColor: theme.color.darkGray,
      height: '100vh',
      justifyContent: 'flex-start',
      [MobileMenu]: {
        display: 'none',
        display: 'block',
      },
    },
  },
  mq ({
    flexDirection: ['column', 'row'],
    marginTop: [-10, 0],
    paddingTop: [10, 0],
  })
);

const githubMenu = css (
  {},
  mq ({
    paddingTop: [5, 19],
  })
);

const MenuItemList = props => (
  <React.Fragment>
    <MenuItem className={githubMenu}>
      <GitHubButton
        href="https://github.com/webiny/webiny-js"
        data-icon="octicon-star"
        data-show-count="true"
        aria-label="Star webiny/webiny-js on GitHub"
      >
        Star
      </GitHubButton>
    </MenuItem>
    <MenuItem>
      <Link className={linkStyle} rel="prerender" to="/why-serverless">
        Why Serverless?
      </Link>
    </MenuItem>

    <MenuItem>
      <Link className={linkStyle} rel="prerender" to="/features">
        Features
      </Link>
    </MenuItem>

    <MenuItem className={linkStyle + ' ' + parentMenu}>
      Included Apps
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
      </DropDown>
    </MenuItem>
    {/**
    <MenuItem>
      <Link className={linkStyle} rel="prerender" to="/plugins">
        Plugins
      </Link>
    </MenuItem>
 */}
    <MenuItem className={linkStyle + ' ' + parentMenu}>
      Use Cases
      <DownArrow />
      <DropDown>
        <div className={dropdownArrow} />
        <Link rel="prerender" to="/use-case/serverless-websites">
          Websites
        </Link>
        <Link rel="prerender" to="/use-case/serverless-web-applications">
          Web applications
        </Link>
        <Link rel="prerender" to="/use-case/serverless-graphql-api">
          APIs
        </Link>
        <Link rel="prerender" to="/use-case/microservices">
          Microservices
        </Link>
      </DropDown>
    </MenuItem>

    <MenuItem className={linkStyle + ' ' + parentMenu}>
      Resources
      <DownArrow />
      <DropDown>
        <div className={dropdownArrow} />
        <div className="section-wrapper">
          <div className="section">
            <div className="section-title">Resources</div>
            <a href="https://docs.webiny.com/">Docs</a>
            <a href="https://blog.webiny.com/">Blog</a>
            <a href="https://storybook.webiny.com/">Storybook</a>
          </div>
          <div className="section">
            <div className="section-title">Community</div>
            <a href="https://github.com/webiny/webiny-js">GitHub</a>
            <a href="https://community.webiny.com/">Community</a>
            <Link rel="prerender" to="/swag">
              SWAG
            </Link>
          </div>
          <div className="section">
            <div className="section-title">Company</div>
            <Link rel="prerender" to="/about-us">
              About us
            </Link>
            <Link rel="prerender" to="/contact-us">
              Contact us
            </Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </DropDown>
    </MenuItem>

    <MenuItem>
      <Button link="https://docs.webiny.com/" type={props.sticky && 'primary'}>
        Get Started
      </Button>
    </MenuItem>
  </React.Fragment>
);

class Header extends React.Component {
  didScroll = false;
  hasBanner = true;
  bannerListnerer = false;
  scrollListener = false;
  state = {isSticky: false, mobileMenuOpen: false, hideBanner: false};

  componentDidMount () {
    if (this.hasBanner) {
      this.initBannerListener ();
    }

    if (this.props.trackScroll === false) {
      this.setState ({isSticky: true});
      return;
    }

    this.initScrollListener ();
  }

  componentWillUnmount () {
    if (this.hasBanner && this.bannerListnerer !== false) {
      clearInterval (this.bannerListnerer);
      this.bannerListnerer = false;
    }

    if (this.scrollListener !== false) {
      clearInterval (this.scrollListener);
      this.scrollListener = false;
    }
  }

  toggleMobileMenu = () => {
    this.setState (
      {
        mobileMenuOpen: !this.state.mobileMenuOpen,
        isSticky: true, //this.state.mobileMenuOpen,
      },
      () => {
        this.didScroll = true;
      }
    );
  };

  initScrollListener = () => {
    window.onscroll = event => {
      this.didScroll = true;
    };

    this.scrollListener = setInterval (() => {
      if (this.didScroll) {
        this.didScroll = false;

        if (this.state.mobileMenuOpen) {
          return;
        }

        if (window.scrollY > window.innerHeight) {
          if (this.state.isSticky) {
            return;
          }
          this.setState ({isSticky: true});
        } else if (window.scrollY < 1) {
          this.setState ({isSticky: false});
        }
      }
    }, 500);
  };

  initBannerListener = () => {
    this.bannerListnerer = setInterval (() => {
      if (window.scrollY > 30 && this.state.hideBanner == false) {
        this.setState ({hideBanner: true});
      } else if (window.scrollY < 30 && this.state.hideBanner == true) {
        this.setState ({hideBanner: false});
      }
    }, 500);
  };

  render () {
    return (
      <React.Fragment>
        {this.hasBanner &&
          <NewsBanner
            title="We just closed our seed round! Check it out."
            link={
              'https://blog.webiny.com/weve-closed-our-seed-round-84a572c56e2'
            }
          />}

        <HeaderContainer
          hasBanner={this.props.hasBanner}
          isSticky={this.state.isSticky}
          hideBanner={this.state.hideBanner}
          hasBanner={this.hasBanner}
        >
          <ContentContainer className={headerInnerContainer}>
            <NavBar
              className={
                this.state.mobileMenuOpen ? 'mobile-opened' : 'mobile-closed'
              }
            >
              <WebinyLogo alt="Webiny Home">
                <Link rel="prerender" to="/">
                  <img
                    alt="Webiny Logo"
                    className={logoImage}
                    src={
                      this.state.isSticky || this.state.mobileMenuOpen
                        ? logoOrange
                        : logo
                    }
                  />
                </Link>
              </WebinyLogo>

              <Menu>
                <MenuItemList sticky={this.state.isSticky} />
              </Menu>

              <MobileMenuIcon
                onClick={this.toggleMobileMenu}
                alt="Mobile Menu"
                src={
                  this.state.mobileMenuOpen || this.state.isSticky
                    ? menuIconBlack
                    : menuIcon
                }
              />
              <MobileMenu>
                <MenuItemList sticky={this.state.mobileMenuOpen} />
              </MobileMenu>

            </NavBar>
          </ContentContainer>
        </HeaderContainer>
      </React.Fragment>
    );
  }
}

export default Header;
