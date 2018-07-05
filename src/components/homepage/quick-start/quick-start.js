import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'
import mq from '../../utils/breakpoints'
import ContentContainer from '../../ui/content-container'
import Button from '../../ui/button'

import buttonArrow from './assets/button-arrow.svg'

const Section = styled('section')(
  {
    backgroundColor: theme.color.lightGray,
  },
  mq({
    padding: [25, 50],
  })
)

const Wrapper = styled('div')(
  {
    background: theme.color.white,
    border: '1px solid #E6E6E6',
    boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mq({
    display: ['block', 'flex'],
    padding: [20, '25px 50px'],
    textAlign: ['center', 'left'],
  })
)

const Text = styled('p')(
  {
    fontSize: 18,
    fontWeight: theme.fontWeight.regular,
  },
  mq({
    marginBottom: [20, 0],
  })
)

const Bold = styled('span')({
  fontWeight: theme.fontWeight.semiBold,
})

class QuickStart extends React.Component {
  render() {
    return (
      <Section>
        <ContentContainer>
          <Wrapper>
            <Text>
              <Bold>Ready to try it out?</Bold> Our quick start tutorial will
              get you up and running in just few minutes.
            </Text>
            <Button type="primary" link="/pricing">
              Quick Start <img alt="arrow" src={buttonArrow} />
            </Button>
          </Wrapper>
        </ContentContainer>
      </Section>
    )
  }
}

export default QuickStart
