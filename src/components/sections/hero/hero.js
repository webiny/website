import React from 'react'
import styled from 'react-emotion'
import heroBg from './hero-bg.svg'
import ContentContainer from '../../ui/content-container'
import Button from '../../ui/button'
import gitHubLogo from './github-logo.svg'

const Hero = styled('section')({
  width: '100%',
  minHeight: '100vh',
  background: 'url(' + heroBg + ') no-repeat left top fixed',
  backgroundSize: 'cover',
  paddingTop: 150,
  color: '#fff',
})

const Title = styled('h1')({
  fontSize: 38,
  fontWeight: 600,
  marginBottom: 40,
})

const LeftSide = styled('div')({
  width: 375,
  textAlign: 'left',
})

const SubText = styled('p')({
  fontSize: 18,
  lineHeight: '25px',
  fontWeight: 300,
  marginBottom: 40,
})

const SemiBold = styled('span')({
  fontWeight: 600,
})

const Link = styled('a')({
  fontSize: 14,
  color: '#FFFFFF',
  textAlign: 'center',
  fontWeight: 400,
  margin: '15px auto',
  display: 'block',
  textDecoration: 'none',
  position: 'relative',
  paddingLeft: 10,
  '&:hover': {
    textDecoration: 'underline',
  },
})

const GitHubLogo = styled('img')({
  position: 'absolute',
  left: 'calc(50% - 80px)',
  top: 3,
})

export default ({ children, ...props }) => (
  <Hero {...props}>
    <ContentContainer>
      <LeftSide>
        <Title>Serverless CMS</Title>
        <SubText>
          Webiny is a <SemiBold>serverless open source CMS</SemiBold> that
          allows you to build websites and web applications, both large and
          small, by giving you all the parts you need in a single package which
          is optimized to seamlessly work together in a performant way.
        </SubText>
        <Button link="#" fullWidth>
          Get Started
        </Button>
        <Link href="#">
          <GitHubLogo src={gitHubLogo} />
          View Webiny on GitHub
        </Link>
      </LeftSide>
    </ContentContainer>
  </Hero>
)
