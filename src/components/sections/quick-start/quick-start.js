import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'
import ContentContainer from '../../ui/content-container'
import Button from '../../ui/button'

import buttonArrow from './assets/button-arrow.svg'

const Section = styled('section')({
  backgroundColor: theme.color.lightGray,
  padding: 50,
})

const Wrapper = styled('div')({
  background: theme.color.white,
  border: '1px solid #E6E6E6',
  boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
  borderRadius: 5,
  padding: '25px 50px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const Text = styled('p')({
  fontSize: 18,
  fontWeight: theme.fontWeight.regular,
  margin: 0,
})

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
            <Button style="primary">
              Quick Start <img src={buttonArrow} />
            </Button>
          </Wrapper>
        </ContentContainer>
      </Section>
    )
  }
}

export default QuickStart
