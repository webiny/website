import React from 'react'
import styled from 'react-emotion'

import theme from '../../../utils/theme'
import ContentContainer from '../../../ui/content-container'

import techLogos from '../assets/tech-logos.svg'

const Tools = styled('h4')({
  fontSize: theme.fontSize.h4,
  textTransform: 'uppercase',
  color: theme.color.white,
  fontWeight: theme.fontWeight.light,
  margin: '50px auto',
  textAlign: 'center',
})

const ToolsLogos = styled('img')({
  marginTop: 30,
})

class TechTools extends React.Component {
  render() {
    return (
      <ContentContainer>
        <Tools>
          CREATED WITH TECHNOLOGY AND TOOLS YOU KNOW AND LOVE
          <ToolsLogos src={techLogos} />
        </Tools>
      </ContentContainer>
    )
  }
}

export default TechTools
