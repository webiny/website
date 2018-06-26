import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import theme from '../../utils/theme'
import mq from '../../utils/breakpoints'
import ContentContainer from '../../ui/content-container'

import pricingBullet from './assets/pricing-bullet.svg'

const maxWidth = css({
  maxWidth: 750,
})

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

const Box = styled('div')(
  {
    background: theme.color.white,
    boxShadow: '0 2px 40px 10px rgba(152,152,152,0.50)',
    borderRadius: 8,
    padding: 0,
    boxSizing: 'border-box',
  },
  mq({
    display: ['block', 'flex'],
    margin: [20, '0 auto'],
  })
)

const Price = styled('div')(
  {
    backgroundImage: 'linear-gradient(-135deg, #09E7D3 0%, #008BB6 68%)',
    borderTopLeftRadius: 8,
    fontSize: 80,
    color: theme.color.white,
    fontWeight: theme.fontWeight.bold,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: '70%',
    boxSizing: 'border-box',
  },
  mq({
    width: ['100%', '50%'],
    borderBottomLeftRadius: [0, 8],
    borderTopRightRadius: [8, 0],
    padding: ['45px 0 25px 0', '15px 0 0 0'],
  })
)

const PriceSubText = styled('span')({
  fontSize: theme.fontSize.subText,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.white,
  lineHeight: '150%',
})

const ReasonsList = styled('ul')(
  {
    width: '50%',
    boxSizing: 'border-box',
    padding: 25,
  },
  mq({
    width: ['100%', '50%'],
  })
)

const ReasonsItem = styled('li')({
  listStyle: 'none',
  textAlign: 'left',
  marginBottom: 15,
  background: 'url(' + pricingBullet + ') no-repeat left 2px',
  paddingLeft: 40,
  '&:last-child': {
    marginBottom: 0,
  },
})

const Bold = styled('span')({
  fontWeight: theme.fontWeight.bold,
})

const ExtraTitle = styled('h3')(
  {
    fontSize: theme.fontSize.h3,
    fontWeight: theme.fontWeight.semiBold,

    color: theme.color.black,
    marginTop: 50,
  },
  mq({
    textAlign: ['center', 'left'],
  })
)

const ExtraReasonsList = css(
  {
    justifyContent: 'space-between',
    padding: '10px 0',
  },
  mq({
    display: ['block', 'flex'],
    margin: ['0 25px 25px 25px', '0'],
    textAlign: ['center', 'left'],
    width: ['100%', '100%'],
  })
)

class PaidPackage extends React.Component {
  render() {
    return (
      <ContentContainer className={maxWidth}>
        <SubTitle>Paid Package</SubTitle>
        <SubText>
          Our paid package comes with flexible pricing so you can grow your
          website without worries.
        </SubText>
        <Box>
          <Price>
            $25
            <PriceSubText>/month</PriceSubText>
          </Price>
          <ReasonsList>
            <ReasonsItem>Custom domain with HTTPS</ReasonsItem>
            <ReasonsItem>
              <Bold>10GB</Bold> database storage
            </ReasonsItem>
            <ReasonsItem>
              <Bold>500k</Bold> Lambda requests
            </ReasonsItem>
            <ReasonsItem>
              <Bold>500h</Bold> Lambda runtime
            </ReasonsItem>
            <ReasonsItem>Unlimited deployments per month</ReasonsItem>
          </ReasonsList>
        </Box>
        <ExtraTitle>Extra usage: $20/package</ExtraTitle>
        <ReasonsList className={ExtraReasonsList}>
          <ReasonsItem>
            <Bold>+10GB</Bold> database storage
          </ReasonsItem>
          <ReasonsItem>
            <Bold>+500k</Bold> Lambda requests
          </ReasonsItem>
          <ReasonsItem>
            <Bold>+500h</Bold> Lambda runtime
          </ReasonsItem>
        </ReasonsList>
      </ContentContainer>
    )
  }
}

export default PaidPackage
