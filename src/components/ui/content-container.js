import React from 'react'
import styled from 'react-emotion'
import theme from '../utils/theme'

const ContentContainer = styled.div({
  width: theme.contentWidth,
  margin: '0 auto',
})

export default ({ children, ...props }) => (
  <ContentContainer {...props}>{children}</ContentContainer>
)
