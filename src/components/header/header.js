import React from 'react';
import styled from 'react-emotion';
import theme from '../utils/theme';
import mq from '../utils/breakpoints';
import ContentContainer from '../ui/content-container';
import Button from '../ui/button';
import Link from 'gatsby-link';
import {css} from 'emotion';
import GitHubButton from 'react-github-btn';

import logo from './assets/webiny-logo.svg';
import logoOrange from './assets/webiny-orange-logo.svg';
import menuIcon from './assets/round-menu-24px.svg';
import menuIconBlack from './assets/round-menu-24px-black.svg';
import downArrowWhite from './assets/down-arrow-white.svg';
import downArrowBlack from './assets/down-arrow-black.svg';

const NavBar = styled ('div') ({
  margin: '0 auto',
  display: 'flex',
  alignContent: 'flex-end',
  justifyContent: 'space-between',
});

const WebinyLogo = styled ('div') ({
  margin: 0,
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

const DropDown = styled ('div') ({
  //display: 'none',
  textAlign: 'left',
  borderRadius: 2,
  position: 'absolute',
  visibility: 'hidden',
  backgroundColor: '#f9f9f9',
  minWidth: '160px',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  padding: '25px',
  opacity: 0,
  top: '100%',
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
    marginBottom: 15,
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
});

const DownArrow = styled ('div') ({
  position: 'absolute',
  width: 24,
  height: 24,
  background: 'url(' + downArrowWhite + ') no-repeat',
  top: -1,
  right: 0,
  color: 'white',
});

const MenuItem = styled ('li') ({
  marginLeft: 30,
  textAlign: 'left',
  cursor: 'pointer',
  position: 'relative',
  fontSize: 14,
  '&:hover': {
    [DropDown]: {
      //display: 'block',
      visibility: 'visible',
      opacity: 1,
      zIndex: 1,
      //left: 'calc(-50% - 25px)',
      transform: 'translateY(0%) translateX(-50%)',
      transitionDelay: '0s, 0s, 0.1s',
    },
  },
});

const parentMenu = css ({
  paddingRight: 25,
  paddingBottom: 15,
  marginBottom: -15,
  marginRight: -5,
  '&:hover': {
    opacity: 1,
  },
});

const dropdownArrow = css`
    position: absolute;
    background: #fff;
    border: 4px solid #fff;
    top: -3px;
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
    top: 0,
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

const MobileMenu = styled ('div') (
  {
    paddingRight: 20,
    display: 'flex',
    position: 'relative',
  },
  mq ({
    display: ['block', 'none'],
  })
);

const MobileMenuIcon = styled ('img') ({
  zIndex: 100,
  position: 'absolute',
  right: 20,
  top: 6,
});

const MobileMenuList = styled ('ul') (
  {
    width: '100%',
    height: '100vh',
    padding: 25,
    backgroundColor: theme.color.white,
    position: 'fixed',
    zIndex: 50,
    top: 0,
    left: 0,
    paddingTop: 100,
    boxSizing: 'border-box',
    overflowY: 'scroll',
  },
  props => ({
    display: props.open ? 'block' : 'none',
  })
);

const MobileMenuItem = styled ('li') ({
  listStyle: 'none',
  fontSize: 24,
  marginBottom: 10,
});

const link = css ({
  textDecoration: 'none',
  color: theme.color.black,
});

class Header extends React.Component {
  didScroll = false;
  state = {isSticky: false, mobileMenuOpen: false};

  componentDidMount () {
    if (this.props.trackScroll === false) {
      this.setState ({isSticky: true});
      return;
    }

    this.initScrollListener ();
  }

  toggleMobileMenu = () => {
    this.setState (
      {
        mobileMenuOpen: !this.state.mobileMenuOpen,
        isSticky: !this.state.mobileMenuOpen,
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

    setInterval (() => {
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

  render () {
    return (
      <HeaderContainer isSticky={this.state.isSticky}>
        <ContentContainer className={headerInnerContainer}>
          <NavBar>
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
              <MenuItem style={{paddingTop: '5px'}}>
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
                <Link
                  className={linkStyle}
                  rel="prerender"
                  to="/why-serverless"
                >
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

              <MenuItem className={linkStyle + ' ' + parentMenu}>
                Use Cases
                <DownArrow />
                <DropDown>
                  <div className={dropdownArrow} />
                  <Link rel="prerender" to="/use-case/serverless-websites">
                    Websites
                  </Link>
                  <Link
                    rel="prerender"
                    to="/use-case/serverless-web-applications"
                  >
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
                  <a href="https://docs.webiny.com/">Docs</a>
                  <a href="https://github.com/webiny/webiny-js">GitHub</a>
                  <a href="https://storybook.webiny.com/">Storybook</a>
                  <hr />
                  <a href="https://blog.webiny.com/">Blog</a>
                  <a href="https://community.webiny.com/">Community</a>
                  <hr />
                  <Link rel="prerender" to="/about-us">
                    About us
                  </Link>
                  <Link rel="prerender" to="/contact-us">
                    Contact us
                  </Link>
                  <Link to="/support">Support</Link>
                </DropDown>
              </MenuItem>

              <MenuItem>
                <Button
                  link="https://docs.webiny.com/docs/developer-tutorials/local-setup"
                  type={this.state.isSticky && 'primary'}
                >
                  Get Started
                </Button>
              </MenuItem>
            </Menu>

            <MobileMenu>
              <MobileMenuIcon
                onClick={this.toggleMobileMenu}
                alt="Mobile Menu"
                src={
                  this.state.mobileMenuOpen || this.state.isSticky
                    ? menuIconBlack
                    : menuIcon
                }
              />
              <MobileMenuList open={this.state.mobileMenuOpen}>
                <MobileMenuItem>
                  <Link className={link} rel="prerender" to="/">
                    Home
                  </Link>
                </MobileMenuItem>

                <MobileMenuItem>
                  <Link className={link} rel="prerender" to="/why-webiny">
                    Why Webiny?
                  </Link>
                </MobileMenuItem>

                <MobileMenuItem>
                  <Link
                    className={link}
                    rel="prerender"
                    to="/features/components"
                  >
                    Webiny Components
                  </Link>
                </MobileMenuItem>

                <MobileMenuItem>
                  <Link
                    className={link}
                    rel="prerender"
                    to="/features/platform"
                  >
                    Serverless Cloud
                  </Link>
                </MobileMenuItem>

                <MobileMenuItem>
                  <Link className={link} rel="prerender" to="/developers">
                    For Developers
                  </Link>
                </MobileMenuItem>

                <MobileMenuItem>
                  <Link className={link} rel="prerender" to="/agency">
                    For Agencies & Partners
                  </Link>
                </MobileMenuItem>

                <MobileMenuItem>
                  <Link className={link} rel="prerender" to="/pricing">
                    Pricing
                  </Link>
                </MobileMenuItem>
                <MobileMenuItem>
                  <a className={link} href="https://docs.webiny.com/">
                    Docs
                  </a>
                </MobileMenuItem>
                <MobileMenuItem>
                  <a className={link} href="https://community.webiny.com/">
                    Community
                  </a>
                </MobileMenuItem>
                <MobileMenuItem>
                  <a className={link} href="https://blog.webiny.com/">
                    Blog
                  </a>
                </MobileMenuItem>
                <MobileMenuItem>
                  <a className={link} href="/support">
                    Support
                  </a>
                </MobileMenuItem>
                <MobileMenuItem>
                  <Button link="/contact-us" type="outlineDark">
                    Talk to us
                  </Button>
                </MobileMenuItem>

                <MobileMenuItem>
                  <Button type="primary" link="https://cloud.webiny.com/">
                    Get Started
                  </Button>
                </MobileMenuItem>
              </MobileMenuList>
            </MobileMenu>
          </NavBar>
        </ContentContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
