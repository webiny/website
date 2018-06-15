import React from 'react'
import styled from 'react-emotion'

const ContentContainer = styled.div({
  width: 1100,
  margin: '0 auto',
})

export default ({ children, ...props }) => (
  <ContentContainer {...props}>{children}</ContentContainer>
)
