import React from 'react';
import styled from 'react-emotion';
import theme from '../../utils/theme';
import mq from '../../utils/breakpoints';
import ContentContainer from '../../ui/content-container';
import ModalVideo from 'react-modal-video';
import ComingSoon from '../../ui/coming-soon'

import facebookLogo from './assets/facebook.svg';
import instagramLogo from './assets/instagram.svg';
import mailchimpLogo from './assets/mailchimp.svg';
import soundcloudLogo from './assets/soundcloud.svg';
import twitterLogo from './assets/twitter.svg';
import typeformLogo from './assets/typeform.svg';
import vimeoLogo from './assets/vimeo.svg';
import youtubeLogo from './assets/youtube.svg';
import pluginIcon from './assets/round-extension-24px.svg';
import revisionsIcon from './assets/round-library_books-24px.svg';
import themeIcon from './assets/round-format_paint-24px.svg';
import designSystemIcon from './assets/round-palette-24px.svg';
import mobileIcon from './assets/round-mobile_friendly-24px.svg';
import layoutIcon from './assets/round-view_quilt-24px.svg';
import plugIcon from './assets/plug-solid.svg';
import cropRotateIcon from './assets/baseline-crop_rotate-24px.svg';
import cloudIcon from './assets/baseline-cloud_queue-24px.svg';
import videoPlayIcon from './assets/round-play_circle_outline-24px.svg';
import zapierIcon from './assets/zapier.svg';
import multiLanguageIcon from './assets/multi-language.svg';
import uploadIcon from './assets/upload.svg';
import tagIcon from './assets/tag.svg';
import searchIcon from './assets/search.svg';

import visualBuilderImg from './assets/webiny-cms-visual-page-builder.png';
import buildingBlocksImg from './assets/webiny-cms-building-blocks.png';
import imageEditorImg from './assets/webiny-cms-image-editor.png';
import fileManagerImg from './assets/file-manager.jpg';
import formBuilderImg from './assets/form-builder.jpg';
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
  margin: '0 auto',
  maxWidth: 650,
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

const PluginsSubTitle = styled ('p') ({
  fontWeight: theme.fontWeight.light,
  fontSize: theme.fontSize.paragraph,
  color: theme.color.grayText,
  textAlign: 'center',
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
    flexBasis: '100%',
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
    textAlign: ['center', 'left'],
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
    h3: {
      justifyContent: ['center', 'flex-start'],
    },
  })
);

const PlayVideoLink = styled ('div') (
  {
    cursor: 'pointer',
    color: theme.color.primaryDark,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline',
    },
    img: {
      height: 24,
      marginRight: 10,
    },
  },
  mq ({
    justifyContent: ['center', 'flex-start'],
    marginBottom: [25, 0],
  })
);

class Cms extends React.Component {
  constructor () {
    super ();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind (this);
  }

  openModal () {
    this.setState ({isOpen: true});
  }

  render () {
    return (
      <CmsContainer>
        <SubTitle>
          Webiny CMS provides you with all the common components, but expect more!
        </SubTitle>
        <SubText>
          We’ve built Webiny to go beyond your regular content management system
        </SubText>

        <ContentContainer>
          <Grid className={'first'}>
            <Cell>
              <img className={'image'} src={visualBuilderImg} />
            </Cell>
            <Cell className={'headingCell'}>
              <h3>Visual Website Builder</h3>
              <p>
                Unleash your creativity. Don’t constrain your content inside a
                "textarea". Webiny features, not a text editor, but a full featured
                website builder, allowing you to build more engaging pages and
                present your content in the way it deserves. Your users will thank
                you.
              </p>
              <PlayVideoLink onClick={this.openModal}>
                <img src={videoPlayIcon} /> See it in action (12MIN)
              </PlayVideoLink>
            </Cell>
          </Grid>
          <Grid>
            <Cell>
              <h3>
                <img src={pluginIcon} />
                Plugins
              </h3>
              <p>
                Nobody likes a closed system, that’s why almost every button,
                component or functionality in Webiny is a plugin. Benefits of such a
                system are that you can fully customize it and extend it to fit your
                needs.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={revisionsIcon} />
                Page Revisions
              </h3>
              <p>
                Never lose sight of who changed what. Have a time machine for your
                content. Be able to go back and restore previous versions of a page,
                or quickly test between multiple revisions.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={themeIcon} />
                Easy Theming
              </h3>
              <p>
                Days of complex template engines, file includes and special variable
                tags are over. Building a theme for Webiny is nothing more than
                plain old (S)CSS. For a designer, this means a minimal learning
                curve.
              </p>
            </Cell>
          </Grid>

          <Grid className={'first'}>
            <Cell className={'headingCell reverse'}>
              <h3>Building Blocks Included</h3>
              <p>
                Often a CMS gives you the option to arrange your content in a crude
                and boring way and your users will notice that. So, what good is a
                CMS if it’s not keeping your users engaged?
                <br />
                <br />
                To spin things around, Webiny features a set of built-in
                inspirational content blocks that you can just drop into your page
                and adjust it to fit your needs. It will make every page a unique
                engaging experience.
              </p>
            </Cell>
            <Cell>
              <img className={'image'} src={buildingBlocksImg} />
            </Cell>
          </Grid>
          <Grid>
            <Cell>
              <h3>
                <img src={designSystemIcon} />
                Follow your Design System
              </h3>
              <p>
                Having a regular “button” component that you can insert in your
                pages is not enough, you need a Primary, Secondary and a Default
                one, if not more. Webiny allows you to do just that. You can have a
                component with predefined style variants that match your design
                system ensuring all pages follow the same visual guidelines.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={mobileIcon} />
                Mobile Responsive Clean Code
              </h3>
              <p>
                The design generated by the page builder is automatically suited for
                mobile devices, no need to worry about or write custom code to make
                it work. Your users will have a great experience, no matter the
                device. Also the underline generated HTML code is human readable so
                you can easily debug any pages like you coded it yourself.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={layoutIcon} />
                Build Layouts
              </h3>
              <p>
                To build a great looking page, you need to have the freedom to place
                content around the page as you desire. We’ve gone to great effort
                designing an editor that allows you to build full featured
                responsive grid layouts, and arrange content in the way it deserves,
                without any constraints of traditional editors. We made building
                pages fun!
              </p>
            </Cell>
          </Grid>

          <Grid className={'first'}>
            <Cell>
              <img className={'image'} src={imageEditorImg} />
            </Cell>
            <Cell className={'headingCell'}>
              <h3>Images - First Class Citizens</h3>
              <p>
                Images are an important part of every website. They add a colorful
                dynamic to pages, and pique visitors interest. To properly support
                images, having simple mechanisms like uploading and just displaying
                an image are not enough.
                <br />
                <br />
                Webiny, being a true modern CMS, comes with a versatile image
                editor, pluggable storage solutions, as well as options to integrate
                with 3rd party delivery and optimization mechanisms.
              </p>
            </Cell>
          </Grid>
          <Grid style={{paddingBottom: 20}}>
            <Cell>
              <h3>
                <img src={cloudIcon} />
                3rd Party Integrations
              </h3>
              <p>
                All mechanism like, upload, and displaying of image can be
                controlled, allowing you to integrated existing and proven 3rd party
                digital asset managers for upload and optimized delivery. Think of
                Akamai Image Manager, Cloudinary or Scene7.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={plugIcon} style={{height: '24px'}} />
                Storage Adapters
              </h3>
              <p>
                By default Webiny comes with a local storage adapter, but this is
                nothing more than a plugin. You can easily create your own storage,
                and integrate with popular solutions like AWS S3, Google Cloud
                Storage, Azure Storage and others.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={cropRotateIcon} />
                Built-in Image Editor
              </h3>
              <p>
                The build-in image editor allows you to do essential image
                manipulations, like image crop, rotate, flip. There are also more
                advance options, like drawing on top of images and the option to
                apply one of many predefined filters.
              </p>
            </Cell>
          </Grid>

          <Grid className={'first'}>
            <Cell className={'headingCell reverse'}>
            <ComingSoon/>
              <h3>Form Builder</h3> 
              <p>
                Forms are a crucial part of most websites. 
                From simple "contact us" forms to the more complex lead generation forms, each form has different requirements,
                fields, and layout.
              </p>
              <p>
                Webiny Form Builder allows you to build custom made forms, without any code, and insert them into your pages. 
                You can use predefined fields, or you can build custom fields, with different validation rules.
                Generated forms, like pages, are automatically mobile responsive.
              </p>
            </Cell>
            <Cell>
              <img className={'image'} src={formBuilderImg} />
            </Cell>
          </Grid>
          <Grid>
            <Cell>
              <h3>
                <img src={zapierIcon} height={24} />
                Zapier and Webhooks
              </h3>
              <p>
                Each form has a set of triggers that you can configure. Each time someone submits the form, the triggers will be executed.
                <br/>
                This is great for when you want to send the data to a 3rd party like Salesforce, Hubspot CRM and others.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={revisionsIcon} />
                Revisions
              </h3>
              <p>
                Each form has a version and tracks all of its changes under the revision history. You can insert different form versions into different pages,
                tracking which version performs better in terms of the conversion rate.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={multiLanguageIcon} height={24} />
                Multi-language
              </h3>
              <p>
                Publish your forms in multiple languages. Control everything from labels to error messages in each of your languages.
              </p>
            </Cell>
          </Grid>

          <Grid className={'first'}>
            <Cell>
              <img className={'image'} src={fileManagerImg} />
            </Cell>
            <Cell className={'headingCell'}>
              <h3>File Manager</h3>
              <p>
                Upload, search, edit and organize your files through the File Manager component.
                Anytime you need to upload an image, the File Manager will popup. This way you can choose an existing image, or upload a new one.
              </p>
              <p>
                File Manager keeps all your files neatly organized and searchable, no need to re-upload the same image multiple times just because you needed it in 5 different places.
                </p>
            </Cell>
          </Grid>
          <Grid style={{paddingBottom: 20}}>
            <Cell>
              <h3>
                <img src={uploadIcon} style={{height: '24px'}} />
                Upload
              </h3>
              <p>
                Files are uploaded through a simple drag&drop interface. You can upload a single image, or multiple images, at once.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={tagIcon} style={{height: '24px'}} />
                Tag
              </h3>
              <p>
                You can assign tags to each file. Tags work as a menu, which appears on the right side of the file manager. 
                By clicking on a tag, all files with that tag will appear.
                Each file can have multiple tags, making it a great way to structure your content.
              </p>
            </Cell>
            <Cell>
              <h3>
                <img src={searchIcon} style={{height: '24px'}} />
                Search
              </h3>
              <p>
                The simple search input is a great way of finding that right file. The search is performed on both the filename, title as well as tags. Single input, multiple sources, ensure you always find what you're looking for.
              </p>
            </Cell>
          </Grid>
        </ContentContainer>

        <GalleryContainer white style={{paddingBottom: 0}}>
          <ContentContainer>
            <Grid>
              <Cell>
                <img className={'image-small'} src={darkModeImg} />
                <h3>Dark Mode</h3>
                <p>
                  They say that there are no two eyes alike. Some prefer white,
                  some black. Webiny features a light and a dark mode, make your
                  pick.
                </p>
              </Cell>
              <Cell>
                <img className={'image-small'} src={userPermissionsImg} />
                <h3>Manage Users & Permissions</h3>
                <p>
                  Full security control allows you to share your Webiny with
                  others team members, but still be in control of who can access
                  what.
                </p>
              </Cell>
              <Cell>
                <img className={'image-small'} src={guidesTutorialsImg} />
                <h3>Guides & Tutorials Included</h3>
                <p>
                  Starting with a new system can be challenging, so we’ve prepared
                  several guides and tutorials to make learning experience easier.
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
          <PluginsSubTitle>
            many more to come + you can build your own
          </PluginsSubTitle>
        </GalleryContainer>
        <ModalVideo
          channel="youtube"
          autoplay={1}
          isOpen={this.state.isOpen}
          videoId="xpnshYqF3XU"
          onClose={() => this.setState ({isOpen: false})}
        />
      </CmsContainer>
    );
  }
}

export default Cms;
