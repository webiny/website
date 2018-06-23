import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'
import logo from './assets/webiny-logo.svg'
import logoOrange from './assets/webiny-orange-logo.svg'
import Button from '../../ui/button'
import ContentContainer from '../../ui/content-container'

const NavBar = styled('div')({
  margin: '0 auto',
  display: 'flex',
  alignContent: 'flex-end',
  justifyContent: 'space-between',
})

const WebinyLogo = styled('div')({
  margin: 0,
  padding: 0,
  height: 42,
  lineHeight: '100%',
})

const Menu = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
})

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

class Header extends React.Component {
  didScroll = false
  state = { isSticky: false }

  componentDidMount() {
    this.initScrollListener()
  }

  initScrollListener = () => {
    window.onscroll = () => {
      this.didScroll = true
    }

    setInterval(() => {
      if (this.didScroll) {
        this.didScroll = false
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
              <Link href="/">
                <img
                  alt="Webiny Logo"
                  src={this.state.isSticky ? logoOrange : logo}
                />
              </Link>
            </WebinyLogo>

            <Menu>
              <MenuItem>
                <Link href="https://github.com/webiny/webiny-js/">Pricing</Link>
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
                <Button link="#">Get Started</Button>
              </MenuItem>
            </Menu>
          </NavBar>
        </ContentContainer>
      </HeaderContainer>
    )
  }
}

export default Header
