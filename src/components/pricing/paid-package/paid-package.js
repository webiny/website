import React from 'react'
import styled from 'react-emotion'
import theme from '../../utils/theme'
import mq from '../../utils/breakpoints'
import ContentContainer from '../../ui/content-container'

const SubTitle = styled('h2')({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 25,
  marginTop: 0,
})

const SubText = styled('p')(
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    marginBottom: 50,
  },
  mq({
    margin: ['0 20px', '0 20% 40px 20%'],
  })
)

class PaidPackage extends React.Component {
  render() {
    return (
      <ContentContainer>
        <SubTitle>Paid Package</SubTitle>
        <SubText>
          Our paid package comes with flexible pricing so you can grow your
          website without worries.
        </SubText>
      </ContentContainer>
    )
  }
}

export default PaidPackage
