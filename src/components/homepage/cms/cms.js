import React from 'react'
import styled from 'react-emotion'
import { withPrefix } from 'gatsby-link'
import theme from '../../utils/theme'
import Gallery from '../../ui/gallery'
import mq from '../../utils/breakpoints'

import facebookLogo from './assets/facebook.svg'
import instagramLogo from './assets/instagram.svg'
import mailchimpLogo from './assets/mailchimp.svg'
import soundcloudLogo from './assets/soundcloud.svg'
import twitterLogo from './assets/twitter.svg'
import typeformLogo from './assets/typeform.svg'
import vimeoLogo from './assets/vimeo.svg'
import youtubeLogo from './assets/youtube.svg'

const CmsContainer = styled('section')({
  backgroundColor: theme.color.lightGray,
})

const GalleryContainer = styled('div')(
  {
    backgroundColor: theme.color.lightGray,
    paddingBottom: 50,
  },
  props => ({
    backgroundColor: props.white ? theme.color.white : theme.color.lightGray,
  }),
  mq({
    paddingTop: [0, 50],
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

const SubText = styled('p')(
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    textAlign: 'center',
    lineHeight: '150%',
    marginBottom: 50,
  },
  mq({
    margin: ['0 20px', '0 20%'],
  })
)

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
  display: 'inline-block',
  zIndex: 10,
  position: 'relative',
})

const Line = styled('div')(
  {
    borderBottom: '1px solid ' + theme.color.darkGray,
    position: 'absolute',
    top: '50%',
    left: 'calc(50% - ' + theme.contentWidth / 2 + 'px)',
    width: theme.contentWidth,
    zIndex: 9,
    margin: '0 auto',
  },
  mq({
    display: ['none', 'block'],
  })
)

const PluginsLogoWrapper = styled('div')(
  {
    justifyContent: 'space-between',
    margin: '0 auto',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  mq({
    width: ['100%', theme.contentWidth],
    display: ['block', 'flex'],
    padding: ['0 20px', 0],
  })
)

const PluginsLogo = styled('img')(
  {
    margin: '40px auto',
    display: 'block',
  },
  mq({
    width: ['33%', 'auto'],
    height: [50, 'auto'],
    display: ['inline-block', 'block'],
  })
)

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
        title: 'Extendible',
        image: withPrefix('./cms/simple-editor-mock-dark.png?v=2'),
        subTitle:
          'You can build custom apps, widges and templates with Webiny. Every part of the system is fully customizable.',
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
          <PluginsLogoWrapper>
            <PluginsLogo alt="Mailchimp" src={mailchimpLogo} />
            <PluginsLogo alt="Twitter" src={twitterLogo} />
            <PluginsLogo alt="YouTube" src={youtubeLogo} />
            <PluginsLogo alt="Instagram" src={instagramLogo} />
            <PluginsLogo alt="TypeForm" src={typeformLogo} />
            <PluginsLogo alt="Facebook" src={facebookLogo} />
            <PluginsLogo alt="Vimeo" src={vimeoLogo} />
            <PluginsLogo alt="SoundCloud" src={soundcloudLogo} />
          </PluginsLogoWrapper>
        </GalleryContainer>
      </CmsContainer>
    )
  }
}

export default Cms
