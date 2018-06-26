import React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import mq from '../../utils/breakpoints'
import theme from '../../utils/theme'
import ContentContainer from '../../ui/content-container'

import bulletImage from './assets/bullet.svg'

const maxWidth = css({
  maxWidth: 750,
  margin: '100px auto',
})

const Box = styled('div')(
  {
    background: theme.color.white,
    boxShadow: '0 2px 40px 10px rgba(152,152,152,0.50)',
    borderRadius: 8,
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  mq({
    margin: ['0 20px'],
    display: ['block', 'flex'],
  })
)

const BoxContact = styled('div')(
  {
    backgroundImage:
      'linear-gradient(-22deg, #CE9FFC 0%, #7568F0 60%, #7367F0 73%)',
    borderBottomRightRadius: 8,
    fontSize: theme.fontSize.h2,
    textTransform: 'uppercase',
    color: theme.color.white,
    fontWeight: theme.fontWeight.bold,
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mq({
    display: ['block', 'flex'],
    width: ['100%', '50%'],
    borderTopRightRadius: [0, 8],
    borderBottomLeftRadius: [8, 0],
    padding: ['25px 0 25px 0', '0 0 0 0'],
  })
)

const ReasonsList = styled('ul')(
  {
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
  background: 'url(' + bulletImage + ') no-repeat left 2px',
  paddingLeft: 40,
  '&:last-child': {
    marginBottom: 0,
  },
})

const ContactUs = styled('a')({
  display: 'block',
  textAlign: 'center',
  fontSize: theme.fontSize.paragraph,
  fontWeight: theme.fontWeight.regular,
  color: theme.color.white,
})

class Enterprise extends React.Component {
  render() {
    return (
      <ContentContainer className={maxWidth}>
        <Box>
          <ReasonsList>
            <ReasonsItem>
              Custom quotes and solutions for large scale enterprise usage.
            </ReasonsItem>
            <ReasonsItem>
              White labeling and customization services.
            </ReasonsItem>
            <ReasonsItem>Backup and recovery plans.</ReasonsItem>
            <ReasonsItem>Professional grade support.</ReasonsItem>
          </ReasonsList>
          <BoxContact>
            Enterprise
            <ContactUs href="mailto:info@webiny.com">
              Contact us for more information
            </ContactUs>
          </BoxContact>
        </Box>
      </ContentContainer>
    )
  }
}

export default Enterprise
