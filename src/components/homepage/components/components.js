import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import {css} from 'emotion';
import Link from 'gatsby-link';
import ContentContainer from '../../ui/content-container';

import background from './assets/components-bg.svg';
import visualWebsiteBuilderSrc
  from './assets/webiny-visual-website-builder.png';

import webinyImageEditorSrc from './assets/webiny-image-editor.png';
import formBuilderSrc from './assets/webiny-form-builder.png';
import rightArrow from './assets/arrow-right-solid.svg';

import facebookLogo from './assets/facebook.svg';
import instagramLogo from './assets/instagram.svg';
import mailchimpLogo from './assets/mailchimp.svg';
import soundcloudLogo from './assets/soundcloud.svg';
import twitterLogo from './assets/twitter.svg';
import typeformLogo from './assets/typeform.svg';
import vimeoLogo from './assets/vimeo.svg';
import youtubeLogo from './assets/youtube.svg';

const wrapperClass = css (
  {
    background: 'url(' + background + ') no-repeat left top',
    backgroundSize: 'cover',
  },
  mq ({
    marginTop: [0, -80],
    paddingTop: [0, 150],
    backgroundColor: ['#F7F7F7', 'transparent'],
  })
);

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 25,
  marginBottom: 10,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.h3,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.black,
    textAlign: 'center',
    margin: '0 20%',
    lineHeight: '150%',
    maxWidth: 700,
  },
  mq ({
    margin: ['20px', '0 auto 75px auto'],
  })
);

const Grid = styled ('div') (
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    '&.first': {
      marginTop: 100,
      marginBottom: 50,
    },
  },
  mq ({
    flexDirection: ['column', 'row'],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ['0 25px', 0],
    '&.first': {
      margin: [0, '100px 0px'],
    },
  })
);

const Cell = styled ('div') (
  {
    boxSizing: 'border-box',
    flexBasis: '100%',
    h3: {
      fontSize: theme.fontSize.h4,
      color: theme.color.black,
      marginTop: 0,
      fontWeight: theme.fontWeight.bold,
      display: 'flex',
      alignItems: 'center',
      img: {
        marginRight: 0,
      },
    },
    p: {
      fontSize: theme.fontSize.paragraph,
      color: theme.color.black,
      lineHeight: '160%',
    },
    '&.headingCell': {
      h3: {
        fontSize: theme.fontSize.h2,
        fontWeight: theme.fontWeight.semiBold,
      },
      p: {
        fontSize: 18,
      },
    },
    '&:nth-child(2)': {
      marginRight: '25px !important',
      marginLeft: '25px !important',
    },
  },
  mq ({
    marginRight: [0, 50],
    textAlign: ['center', 'left'],
    '&:last-child': {
      marginRight: ['0 !important', '0 !important'],
      marginLeft: ['0 !important', '50px !important'],
    },
    '.image': {
      border: '1px solid #E6E6E6',
      boxShadow: '0 4px 8px 0 rgba(209,209,209,0.50)',
      borderRadius: 5,
      width: ['100%', '630px'],
    },
    '.image-small': {
      border: '1px solid #E6E6E6',
      boxShadow: '0 2px 4px 0 rgba(209,209,209,0.50)',
      borderRadius: 5,
      width: ['100%', '360px'],
    },
    h3: {
      justifyContent: ['center', 'flex-start'],
    },
  })
);

const PluginsContainer = styled ('div') ({
  marginTop: 50,
  position: 'relative',
  textAlign: 'center',
});

const PluginsTitle = styled ('div') ({
  fontWeight: theme.fontWeight.light,
  fontSize: theme.fontSize.h3,
  color: theme.color.grayText,
  backgroundColor: '#F7F7F7',
  padding: '0 50px',
  display: 'inline-block',
  zIndex: 10,
  position: 'relative',
});

const Line = styled ('div') (
  {
    borderBottom: '1px solid ' + theme.color.darkGray,
    position: 'absolute',
    top: '50%',
    left: 'calc(50% - ' + theme.contentWidth / 2 + 'px)',
    width: theme.contentWidth,
    zIndex: 9,
    margin: '0 auto',
  },
  mq ({
    display: ['none', 'block'],
  })
);

const PluginsLogoWrapper = styled ('div') (
  {
    justifyContent: 'space-between',
    margin: '0 auto',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  mq ({
    width: ['100%', theme.contentWidth],
    display: ['block', 'flex'],
    padding: ['0 20px', 0],
  })
);

const PluginsLogo = styled ('img') (
  {
    margin: '40px auto',
    display: 'block',
  },
  mq ({
    width: ['33%', 'auto'],
    height: [50, 'auto'],
    display: ['inline-block', 'block'],
  })
);

const linkStyle = css ({
  color: theme.color.primaryDark,
  fontWeight: theme.fontWeight.bold,
  fontSize: 18,
});

const Arrow = styled ('img') ({
  height: 9,
  marginLeft: 5,
});

class Components extends React.Component {
  render () {
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>Get to know our components</SubTitle>
        <SubText>
          Webiny features several different modules and components,
          and all are available for you to use, to quickly get started on your next project.
        </SubText>

        <ContentContainer>
          <Grid>
            <Cell>
              <img className={'image-small'} src={visualWebsiteBuilderSrc} />
              <h3>Visual Website Builder</h3>
              <p>
                Unleash your creativity. Don’t constrain your content inside a "textarea".
                {' '}
                Webiny features, not a text editor, but a full-featured website builder.
                {' '}
              </p>
            </Cell>
            <Cell>
              <img className={'image-small'} src={webinyImageEditorSrc} />
              <h3>File Manager & Image Editor</h3>
              <p>
                Upload, browse and organize your files. Use the built-in image editor for that perfect crop.
                {' '}
                Apply a selection of filters and make your images pop.
              </p>
            </Cell>
            <Cell>
              <img className={'image-small'} src={formBuilderSrc} />
              <h3>Form Builder</h3>
              <p>
                The perfect companion module for when you need to create forms and capture leads.
                {' '}
                The same module enables you to build contact forms and much more.
                {' '}
              </p>
            </Cell>
          </Grid>

          <Grid>
            <Cell style={{textAlign: 'center', marginTop: 25}}>
              <Link className={linkStyle} to="/features/components">
                Learn more about our components
                <Arrow src={rightArrow} />
              </Link>
            </Cell>
          </Grid>

          <PluginsContainer>
            <PluginsTitle>FEATURED PLUGINS AND INTEGRATIONS</PluginsTitle>
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

        </ContentContainer>
      </section>
    );
  }
}

export default Components;
