import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';

import facebookLogo from './assets/facebook.svg';
import instagramLogo from './assets/instagram.svg';
import mailchimpLogo from './assets/mailchimp.svg';
import soundcloudLogo from './assets/soundcloud.svg';
import twitterLogo from './assets/twitter.svg';
import typeformLogo from './assets/typeform.svg';
import vimeoLogo from './assets/vimeo.svg';
import youtubeLogo from './assets/youtube.svg';
import smallImageMock from './assets/cms-small-image-mock.svg';
import pluginIcon from './assets/round-extension-24px.svg';
import revisionsIcon from './assets/round-library_books-24px.svg';
import themeIcon from './assets/round-format_paint-24px.svg';
import designSystemIcon from './assets/round-palette-24px.svg';
import previewIcon from './assets/round-desktop_mac-24px.svg';
import layoutIcon from './assets/round-view_quilt-24px.svg';
import plugIcon from './assets/plug-solid.svg';
import cropRotateIcon from './assets/baseline-crop_rotate-24px.svg';
import cloudIcon from './assets/baseline-cloud_queue-24px.svg';

import visualBuilderImg from './assets/webiny-cms-visual-page-builder.png';
import buildingBlocksImg from './assets/webiny-cms-bulding-blocks.png';
import imageEditorImg from './assets/webiny-cms-image-editor.png';
import darkModeImg from './assets/dark-mode.png';
import userPermissionsImg from './assets/users-permissions.png';
import guidesTutorialsImg from './assets/guides-and-tutorials.png';

const CmsContainer = styled ('section') ({
  backgroundColor: theme.color.lightGray,
});

const GalleryContainer = styled ('div') (
  {
    backgroundColor: theme.color.lightGray,
    paddingBottom: 50,
  },
  props => ({
    backgroundColor: props.white ? theme.color.white : theme.color.lightGray,
  }),
  mq ({
    paddingTop: [0, 50],
  })
);

const SubTitle = styled ('h2') ({
  fontSize: theme.fontSize.h2,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.black,
  textAlign: 'center',
  paddingTop: 50,
  marginTop: 0,
});

const SubText = styled ('p') (
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    textAlign: 'center',
    lineHeight: '150%',
    marginBottom: 50,
    maxWidth: 750,
  },
  mq ({
    margin: ['0 20px', '0 auto'],
  })
);

const PluginsContainer = styled ('div') ({
  //marginTop: 50,
  position: 'relative',
  textAlign: 'center',
});

const PluginsTitle = styled ('div') ({
  fontWeight: theme.fontWeight.light,
  fontSize: theme.fontSize.h3,
  color: theme.color.grayText,
  backgroundColor: theme.color.white,
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
    h3: {
      fontSize: theme.fontSize.h4,
      color: theme.color.black,
      marginTop: 0,
      fontWeight: theme.fontWeight.bold,
      display: 'flex',
      alignItems: 'center',
      img: {
        marginRight: 20,
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
    '&:last-child': {
      marginRight: '0 !important',
    },
  },
  mq ({
    marginRight: [0, 50],
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
      width: ['100%', '330px'],
    },
  })
);

class Cms extends React.Component {
  render () {
    return (
      <CmsContainer>
        <SubTitle data-aos="fade-up" data-aos-offset="300">
          Webiny CMS provides you with everything you would expect & more
        </SubTitle>
        <SubText data-aos="fade-up" data-aos-delay="250" data-aos-offset="300">
          We’ve built Webiny to go beyond your regular content management system
        </SubText>

        <ContentContainer>
          <Grid
            className={'first'}
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-offset="300"
          >
            <Cell>
              <img className={'image'} src={visualBuilderImg} />
            </Cell>
            <Cell className={'headingCell'}>
              <h3>Visual Website Builder</h3>
              <p>
                Unleash your creativity. Don’t constrain your content inside a
                "textarea". Webiny features, not a text editor, but a full
                featured website builder, allowing you to build more engaging
                pages and present your content in the way it deserves. Your
                users will thank you.
              </p>
            </Cell>
          </Grid>
          <Grid>
            <Cell data-aos="fade-up" data-aos-delay="150" data-aos-offset="300">
              <h3>
                <img src={pluginIcon} />
                Plugins
              </h3>
              <p>
                Nobody likes a closed system, that’s why almost every button,
                component or functionality in Webiny is a plugin. Benefits of
                such a system are that you can fully customize it and extend it
                to fit your needs.
              </p>
            </Cell>
            <Cell data-aos="fade-up" data-aos-delay="300" data-aos-offset="300">
              <h3>
                <img src={revisionsIcon} />
                Page Revisions
              </h3>
              <p>
                Never lose sight of who changed what. Have a time machine for
                your content. Be able to go back and restore previous versions
                of a page, or quickly test between multiple revisions.
              </p>
            </Cell>
            <Cell data-aos="fade-up" data-aos-delay="450" data-aos-offset="300">
              <h3>
                <img src={themeIcon} />
                Easy Theming
              </h3>
              <p>
                Days of complex template engines, file includes and special
                variable tags are over. Building a theme for Webiny is nothing
                more than plain old (S)CSS. For a designer, this means a minimal
                learning curve.
              </p>
            </Cell>
          </Grid>

          <Grid
            className={'first'}
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-offset="300"
          >
            <Cell className={'headingCell'}>
              <h3>Building Blocks Included</h3>
              <p>
                Often a CMS gives you the option to arrange your content in a
                crude and boring way and your users will notice that. So what's
                good a CMS if it's not keeping your users engaged?
                <br />
                <br />
                To spin things around, Webiny features a set of build-in
                inspirational content blocks that you can just drop in your page
                and quickly adjust to fit your needs. It will make every page a
                unique engaging experience.
              </p>
            </Cell>
            <Cell>
              <img className={'image'} src={buildingBlocksImg} />
            </Cell>
          </Grid>
          <Grid>
            <Cell data-aos="fade-up" data-aos-delay="150" data-aos-offset="300">
              <h3>
                <img src={designSystemIcon} />
                Follow your Design System
              </h3>
              <p>
                Having a regular “button” component that you can insert in your
                pages is not enough, you need a Primary, Secondary and a Default
                one, if not more. Webiny allows you to do just that. You can
                have a component with predefined style variants that match your design
                system ensuring all pages follow the same visual guidelines.
              </p>
            </Cell>
            <Cell data-aos="fade-up" data-aos-delay="300" data-aos-offset="300">
              <h3>
                <img src={previewIcon} />
                Live Preview
              </h3>
              <p>
                How many times did you have two tabs opened, one for writing
                content, and the other one for viewing how the content looked
                like inside your theme and page layout? To get arround that
                hassle, Webiny features Live Preview, where it can render your
                whole page inside the editor to get the real sense of how the
                full page looks like.
              </p>
            </Cell>
            <Cell data-aos="fade-up" data-aos-delay="450" data-aos-offset="300">
              <h3>
                <img src={layoutIcon} />
                Build Layouts
              </h3>
              <p>
                To build a great looking page, you need to have the freedom to
                place content around the page as you desire. We’ve gone to great
                effort designing an editor that allows you to build full
                featured responsive grid layouts, and arrange content in the way
                it deserves, without any constraints of traditional editors. We
                made building pages fun!
              </p>
            </Cell>
          </Grid>

          <Grid
            className={'first'}
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-offset="300"
          >
            <Cell>
              <img className={'image'} src={imageEditorImg} />
            </Cell>
            <Cell className={'headingCell'}>
              <h3>Images - First Class Citizens</h3>
              <p>
                Images are an important part of every website. They add a
                colorful dynamic to pages, and peak visitors interest. To
                properly support images, having simple mechanisms like uploading
                and just displaying an image are not enough.
                <br />
                <br />
                Webiny, being a true modern CMS, comes with a versatile image
                editor, pluggable storage solutions, as well as options to
                integrate with 3rd party delivery and optimization mechanisms.
              </p>
            </Cell>
          </Grid>
          <Grid style={{paddingBottom: 20}}>
            <Cell data-aos="fade-up" data-aos-delay="150" data-aos-offset="300">
              <h3>
                <img src={cloudIcon} />
                3rd Party Integrations
              </h3>
              <p>
                All mechanism like, upload, and displaying of image can be
                controlled, allowing you to integrated existing and proven 3rd
                party digital asset managers for upload and optimized delivery.
                Think of Akamai Image Manager, Cloudinary or Scene7.
              </p>
            </Cell>
            <Cell data-aos="fade-up" data-aos-delay="300" data-aos-offset="300">
              <h3>
                <img src={plugIcon} style={{height: '24px'}} />
                Storage Adapters
              </h3>
              <p>
                By default Webiny comes with a local storage adapter, but this
                is nothing more than a plugin. You can easily create your own
                storage, and integrate with popular solutions like AWS S3,
                Google Cloud Storage, Azure Storage and others.
              </p>
            </Cell>
            <Cell data-aos="fade-up" data-aos-delay="450" data-aos-offset="300">
              <h3>
                <img src={cropRotateIcon} />
                Built-in Image Editor
              </h3>
              <p>
                The build-in image editor allows you to do essential image
                manipulations, like image crop, rotate, flip. There are also
                more advance options, like drawing on top of images and the
                option to apply one of many predefined filters.
              </p>
            </Cell>
          </Grid>
        </ContentContainer>

        <GalleryContainer white style={{paddingBottom: 0}}>
          <ContentContainer>
            <Grid>
              <Cell
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-offset="300"
              >
                <img className={'image-small'} src={darkModeImg} />
                <h3>Dark Mode</h3>
                <p>
                  They say that there are no two eyes alike. Some prefer white,
                  some black. Webiny features a light and a dark mode, make your
                  pick.
                </p>
              </Cell>
              <Cell
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-offset="300"
              >
                <img className={'image-small'} src={userPermissionsImg} />
                <h3>Manage Users & Permissions</h3>
                <p>
                  Full security control allows you to share your Webiny with
                  others team members, but still be in control of who can access what.
                </p>
              </Cell>
              <Cell
                data-aos="fade-up"
                data-aos-delay="450"
                data-aos-offset="300"
              >
                <img className={'image-small'} src={guidesTutorialsImg} />
                <h3>Guides & Tutorials Included</h3>
                <p>
                  Starting with a new system can be challenging, so we’ve
                  prepared several guides and tutorials to make learning experience easier.
                </p>
              </Cell>
            </Grid>
          </ContentContainer>
        </GalleryContainer>

        <GalleryContainer white>
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
    );
  }
}

export default Cms;
