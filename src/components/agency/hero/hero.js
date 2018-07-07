import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'
import { css } from 'emotion'
import mq from '../../utils/breakpoints'
import ContentContainer from '../../ui/content-container'

import heroBg from './assets/agency-hero-bg.svg'
import superhero from './assets/agency-superhero.svg'

const Hero = styled('section')(
  {
    width: '100%',
    background: 'url(' + heroBg + ') no-repeat center top',
    color: '#fff',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  mq({
    padding: ['100px 20px 25px', '150px 0 25px'],
    height: ['auto', 'calc(100vh - 150px)'],
    minHeight: ['auto', 700],
    maxHeight: ['auto', 768],
    marginBottom: [50, 100],
    backgroundSize: ['cover'],
    backgroundPosition: ['top', 'top', 'bottom'],
  })
)

const Title = styled('h1')(
  {
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginBottom: 40,
  },
  mq({
    textAlign: ['center', 'left'],
  })
)

const LeftSide = styled('div')(
  {},
  mq({
    textAlign: ['center', 'left'],
    width: ['100%', 400],
  })
)

const RightSide = styled('div')(
  {},
  mq({
    textAlign: ['center', 'right'],
    width: ['100%', 600],
  })
)

const SubText = styled('p')(
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.light,
    lineHeight: '25px',
    marginBottom: 40,
  },
  mq({
    textAlign: ['center', 'left'],
  })
)

const container = css(
  {},
  mq({
    display: ['block', 'flex'],
  })
)

const Image = styled('img')(
  {},
  mq({
    width: [300, 'auto'],
  })
)

export default ({ children, ...props }) => (
  <Hero {...props}>
    <ContentContainer className={container}>
      <LeftSide>
        <Title>Focus on building your business, not another CMS.</Title>
        <SubText>
          Keep your focus on building websites for your clients instead on
          wasting time developing technology around it. Let Webiny be your
          trusted partner and supercharge your development.
        </SubText>
      </LeftSide>
      <RightSide>
        <Image src={superhero} alt="Agency Supehero" />
      </RightSide>
    </ContentContainer>
  </Hero>
)
