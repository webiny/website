import React from 'react'
import styled from 'react-emotion'
import theme from '../utils/theme'
import mq from '../utils/breakpoints'
import ContentContainer from '../ui/content-container'
import Button from '../ui/button'

import logo from './assets/webiny-logo.svg'
import logoOrange from './assets/webiny-orange-logo.svg'
import menuIcon from './assets/round-menu-24px.svg'
import menuIconBlack from './assets/round-menu-24px-black.svg'

const NavBar = styled('div')({
  margin: '0 auto',
  display: 'flex',
  alignContent: 'flex-end',
  justifyContent: 'space-between',
})

const WebinyLogo = styled('div')(
  {
    margin: 0,
    padding: 0,
    height: 42,
    lineHeight: '100%',
    zIndex: 100,
  },
  mq({
    paddingLeft: [20, 0],
  })
)

const Menu = styled('ul')(
  {
    listStyle: 'none',
    //display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mq({
    display: ['none', 'flex'],
  })
)

const MenuItem = styled('li')({
  marginLeft: 25,
  textAlign: 'center',
  fontSize: theme.fontSize.navMenuItem,
})

const Link = styled('a')({
  fontWeight: theme.fontWeight.semiBold,
  textDecoration: 'none',
  color: '#fff',
})

const HeaderContainer = styled('header')(
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
      [Link]: {
        color: props.isSticky ? '#000' : '#fff',
      },
    },
  })
)

const MobileMenu = styled('div')(
  {
    paddingRight: 20,
    display: 'flex',
    position: 'relative',
  },
  mq({
    display: ['block', 'none'],
  })
)

const MobileMenuIcon = styled('img')({
  zIndex: 100,
  position: 'absolute',
  right: 20,
  top: 6,
})

const MobileMenuList = styled('ul')(
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
  },
  props => ({
    display: props.open ? 'block' : 'none',
  })
)

const MobileMenuItem = styled('li')({
  listStyle: 'none',
  fontSize: 24,
  marginBottom: 10,
  [Link]: {
    color: theme.color.black,
  },
})

class Header extends React.Component {
  didScroll = false
  state = { isSticky: false, mobileMenuOpen: false }

  componentDidMount() {
    this.initScrollListener()
  }

  toggleMobileMenu = () => {
    this.setState(
      {
        mobileMenuOpen: !this.state.mobileMenuOpen,
        isSticky: !this.state.mobileMenuOpen,
      },
      () => {
        this.didScroll = true
      }
    )
  }

  initScrollListener = () => {
    window.onscroll = event => {
      this.didScroll = true
    }

    setInterval(() => {
      if (this.didScroll) {
        this.didScroll = false

        if (this.state.mobileMenuOpen) {
          return
        }

        if (document.documentElement.scrollTop > window.innerHeight) {
          if (this.state.isSticky) {
            return
          }
          this.setState({ isSticky: true })
        } else if (document.documentElement.scrollTop < 1) {
          this.setState({ isSticky: false })
        }
      }
    }, 100)
  }

  render() {
    return (
      <HeaderContainer isSticky={this.state.isSticky}>
        <ContentContainer>
          <NavBar>
            <WebinyLogo alt="Webiny Home">
              <Link rel="prerender" href="/">
                <img
                  alt="Webiny Logo"
                  src={
                    this.state.isSticky || this.state.mobileMenuOpen
                      ? logoOrange
                      : logo
                  }
                />
              </Link>
            </WebinyLogo>

            <Menu>
              <MenuItem>
                <Link rel="prerender" href="/pricing">
                  Pricing
                </Link>
              </MenuItem>
              <MenuItem>
                <Link rel="prerender" href="/agency">
                  For Agencies
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="https://docs.webiny.com/">Docs</Link>
              </MenuItem>
              <MenuItem>
                <Link href="https://community.webiny.com/">Community</Link>
              </MenuItem>
              <MenuItem>
                <Link href="https://blog.webiny.com/">Blog</Link>
              </MenuItem>
              <MenuItem>
                <Link href="https://github.com/webiny/webiny-js/">Source</Link>
              </MenuItem>
              <MenuItem>
                <Button link="/pricing" type={this.state.isSticky && 'primary'}>
                  Get Started
                </Button>
              </MenuItem>
            </Menu>

            <MobileMenu>
              <MobileMenuIcon
                onClick={this.toggleMobileMenu}
                src={
                  this.state.mobileMenuOpen || this.state.isSticky
                    ? menuIconBlack
                    : menuIcon
                }
              />
              <MobileMenuList open={this.state.mobileMenuOpen}>
                <MobileMenuItem>
                  <Link rel="prerender" href="/pricing">
                    Pricing
                  </Link>
                </MobileMenuItem>
                <MobileMenuItem>
                  <Link rel="prerender" href="/agency">
                    For Agencies
                  </Link>
                </MobileMenuItem>
                <MobileMenuItem>
                  <Link href="https://docs.webiny.com/">Docs</Link>
                </MobileMenuItem>
                <MobileMenuItem>
                  <Link href="https://community.webiny.com/">Community</Link>
                </MobileMenuItem>
                <MobileMenuItem>
                  <Link href="https://blog.webiny.com/">Blog</Link>
                </MobileMenuItem>
                <MobileMenuItem>
                  <Link href="https://github.com/webiny/webiny-js/">
                    Source
                  </Link>
                </MobileMenuItem>
                <MobileMenuItem>
                  <Button link="#">Get Started</Button>
                </MobileMenuItem>
              </MobileMenuList>
            </MobileMenu>
          </NavBar>
        </ContentContainer>
      </HeaderContainer>
    )
  }
}

export default Header
