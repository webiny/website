import React from 'react'
import styled from 'react-emotion'
import { withPrefix } from 'gatsby-link'
import theme from '../../utils/theme'
import Gallery from '../../ui/gallery'

const CmsContainer = styled('section')({
  backgroundColor: theme.color.lightGray,
})

const GalleryContainer = styled('div')(
  {
    backgroundColor: theme.color.lightGray,
    paddingTop: 50,
    paddingBottom: 50,
  },
  props => ({
    backgroundColor: props.white ? theme.color.white : theme.color.lightGray,
  })
)

const SubTitle = styled('h2')({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 0,
})

const SubText = styled('p')({
  fontSize: theme.fontSize.subText,
  fontWeight: theme.fontWeight.regular,
  textAlign: 'center',
  margin: '0 20%',
  lineHeight: '150%',
  marginBottom: 50,
})

const PluginsContainer = styled('div')({
  marginTop: 50,
  position: 'relative',
  textAlign: 'center',
})

const PluginsTitle = styled('div')({
  fontWeight: theme.fontWeight.light,
  fontSize: theme.fontSize.h3,
  color: theme.color.grayText,
  backgroundColor: theme.color.white,
  padding: '0 50px',
  display: 'inline',
  zIndex: 10,
  position: 'relative',
})

const Line = styled('div')({
  borderBottom: '1px solid ' + theme.color.darkGray,
  position: 'absolute',
  top: '50%',
  width: '100%',
  zIndex: 9,
})

const PluginsLogos = styled('img')({
  margin: '40px auto',
  display: 'block',
})

class Cms extends React.Component {
  state = {
    firstGallery: [
      {
        title: 'Simple Editor',
        image: withPrefix('./cms/simple-editor-mock.png?v=1'),
        subTitle:
          'Creating content is easy and intuitive with an editor that doesn’t clutter your interface.',
      },
      {
        title: 'Smart Widgets',
        image: withPrefix('./cms/simple-editor-mock-dark.png?v=2'),
        subTitle:
          'Truly rich content that will make your website pop and intrigue your users to stick around and keep coming for more.',
      },
      {
        title: 'Page Revisions',
        image: withPrefix('./cms/simple-editor-mock.png?v=3'),
        subTitle:
          'Creating content is easy and intuitive with an editor that doesn’t clutter your interface.',
      },
    ],
    secondGallery: [
      {
        title: 'Theming',
        image: withPrefix('./cms/simple-editor-mock.png?v=1'),
        subTitle:
          'Creating content is easy and intuitive with an editor that doesn’t clutter your interface.',
      },
      {
        title: 'Localization',
        image: withPrefix('./cms/simple-editor-mock-dark.png?v=2'),
        subTitle:
          'Truly rich content that will make your website pop and intrigue your users to stick around and keep coming for more.',
      },
      {
        title: 'Headless',
        image: withPrefix('./cms/simple-editor-mock.png?v=3'),
        subTitle:
          'Webiny comes with a React frontend, but if you need to, you can hook it up to any existing frontend regardless of the technology in which it’s coded.',
      },
    ],
  }
  render() {
    return (
      <CmsContainer>
        <SubTitle>Content Management System</SubTitle>
        <SubText>
          We believe that websites today require a system that can deliver a
          rich and interactive experience. One that supports smart widgets,
          beyond simple text and image. Webiny CMS is easy to use, but still
          powerful enough to craft impressive online experiences.
        </SubText>
        <GalleryContainer>
          <Gallery items={this.state.firstGallery} />
        </GalleryContainer>
        <GalleryContainer white>
          <Gallery items={this.state.secondGallery} right />
          <PluginsContainer>
            <PluginsTitle>SUPPORTED PLUGINS AND INTEGRATIONS</PluginsTitle>
            <Line />
          </PluginsContainer>
          <PluginsLogos src={withPrefix('./cms/cms-plugin-logos.svg')} />
        </GalleryContainer>
      </CmsContainer>
    )
  }
}

export default Cms
