import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import theme from '../../utils/theme'
import ContentContainer from '../../ui/content-container'
import Newsletter from './newsletter'

import webinyLogo from './assets/webiny-footer-logo.svg'

const Wrapper = styled('div')({
  backgroundColor: theme.color.footerBg,
  padding: '50px 0 5px',
})

const FlexDisplay = css({
  display: 'flex',
  justifyContent: 'space-between',
})

const Box = styled('div')({
  width: '33%',
})

const textRight = css({
  textAlign: 'right',
})

const Logo = styled('img')({})

const Copy = styled('p')({
  fontSize: theme.fontSize.footer,
  color: theme.color.darkGray,
})

const Link = styled('a')({
  color: theme.color.darkGray,
})

const Bottom = styled('div')({
  borderTop: '1px solid #3B3E45',
  textAlign: 'center',
  width: '100%',
  clear: 'both',
  lineHeight: '200%',
  paddingTop: 25,
  marginTop: 25,
})

const Footer = () => (
  <Wrapper>
    <ContentContainer className={FlexDisplay}>
      <Box>
        <Logo alt="Webiny" src={webinyLogo} />
        <Copy>
          Webiny is a content management system, that is designed to run inside
          a serverless environment. Webiny enables developers to build powerful
          websites and web applications by providing all required components.
          <br />
          <br />
          Webiny is released under the MIT open source license.
          <br />
          <br />
          <Link href="#">GitHub</Link> / <Link href="#">Twitter</Link> /{' '}
          <Link href="#">YouTube</Link>
        </Copy>
      </Box>
      <Box className={textRight}>
        <Newsletter />
      </Box>
    </ContentContainer>
    <Bottom>
      <Copy>
        <Link href="#">Privacy Policy</Link> / <Link href="#">Contact Us</Link>{' '}
        <br />
        Webiny © {new Date().getFullYear()}
      </Copy>
    </Bottom>
  </Wrapper>
)

export default Footer
