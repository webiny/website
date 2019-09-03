import React from 'react';
import {css} from 'emotion';
import Hero from '../components/hero';
import {List, ListItem} from '../components/list';
import FeatureBox from '../components/feature-box';
import ContentContainer from '../../ui/content-container';
import {SubTitle} from '../components/titles';
import {Grid, Cell} from '../../ui/layout/layout';
import VideoBox from '../../ui/layout/video-box';
import QuickStart from '../../ui/layout/footer';
import AppList from '../components/app-list';
import mq from '../../utils/breakpoints';

import HeroImage from './assets/form-builder.jpg';
import HeroBg from './assets/hero-bg.svg';
import background from './assets/gray-bg-with-bg.svg';

import BuilderVideo from './assets/01-builder.mp4';
import ValidatorsVideo from './assets/02-validators.mp4';
import FieldsVideo from './assets/03-fields.mp4';
import MultiLangVideo from './assets/04-multi-language.mp4';
import FormPreviewVideo from './assets/05-preview-theme.mp4';
import FormSubmissionsVideo from './assets/06-submission.mp4';
import TagsVideo from './assets/01-builder.mp4';
import LazyLoadVideo from './assets/01-builder.mp4';

const featureContainer = css (
  {
    display: 'flex',
    marginBottom: 50,
  },
  mq ({
    flexDirection: ['column', 'row'],
  })
);

const videoFeaturesContainer = css (
  {
    background: 'url(' + background + ') no-repeat left top',
    backgroundSize: 'contain',
    textAlign: 'center',
    backgroundColor: '#F7F7F7',
    backgroundPosition: '0 -5px',
  },
  mq ({
    margin: [0, '-100px auto 0 auto'],
    padding: [0, '200px 0 50px 0'],
  })
);

export default ({children, ...props}) => (
  <React.Fragment>
    <Hero
      bg={HeroBg}
      appName={'Form Builder'}
      title={'Create Forms Using a Drag&Drop Interface and Track Conversions'}
      github="https://github.com/webiny/webiny-js"
      media={<img src={HeroImage} alt="Webiny Serverless Form Builder" />}
    >
      <List>
        <ListItem title={'Serverless & Self-hosted'}>
          - Quick and easy deployment with Serverless Framework
        </ListItem>
        <ListItem title={'Complete package'}>
          - Build forms, define terms and conditions, setup a captcha and view submissions
        </ListItem>
        <ListItem title={'Theme'}>
          - Have a full control over how your form will look like, including on mobile devices
        </ListItem>
      </List>
    </Hero>

    <ContentContainer className={featureContainer}>
      <FeatureBox>
        Build both simple and complex forms
      </FeatureBox>
      <FeatureBox>
        Create custom fields and validators
      </FeatureBox>
      <FeatureBox>
        Forms have revisions, so you never lose track of changes
      </FeatureBox>
    </ContentContainer>
    <ContentContainer className={featureContainer}>
      <FeatureBox>
        Integrated ReCAPTCHA
      </FeatureBox>
      <FeatureBox>
        Ability to add 3rd party services via webhooks
      </FeatureBox>
      <FeatureBox>
        View, filter and export submissions
      </FeatureBox>
    </ContentContainer>

    <section className={videoFeaturesContainer}>
      <ContentContainer>
        <SubTitle>Features</SubTitle>
        <Grid left>
          <Cell>
            <VideoBox file={BuilderVideo} />
          </Cell>
          <Cell title="Drag&drop form builder">
            <p>
              Just drag and drop fields to create your form. It's super easy to use, no code required. You can create anything from simple contact forms to complex sales forms, all in a few minutes.
            </p>
          </Cell>
        </Grid>
        <Grid right>
          <Cell title="Create fields with custom validation rules">
            <p>
              There are endless options to what your forms can be used for.
              Some of the applications might require quite specific rules for what users can write into a field. The UI allows you to define one, or create a combination of several different validation rules, ensuring only the correct values are accepted.
            </p>
          </Cell>
          <Cell>
            <VideoBox file={ValidatorsVideo} />
          </Cell>
        </Grid>
        <Grid left>
          <Cell>
            <VideoBox file={MultiLangVideo} />
          </Cell>
          <Cell title="Multi-language support throughout">
            <p>
              Doing multi-language content is quite challenging, creating a multi-language form system is even harder. Webiny Form Builder has numerous features for the creation of multi-language forms. From multi-language field names, placeholders, error messages, validation rules, to multi-language terms of service and captcha messages.
            </p>
          </Cell>
        </Grid>
        <Grid right>
          <Cell title="Several different field types">
            <p>
              Webiny Form Builder features all the essential form elements you might need. This includes basic input fields, as well as text areas for longer text input. Fields like dropdowns, checkboxes, radio buttons, and hidden inputs are also included.
            </p>
          </Cell>
          <Cell>
            <VideoBox file={FieldsVideo} />
          </Cell>
        </Grid>
        <Grid left>
          <Cell>
            <VideoBox file={FormPreviewVideo} />
          </Cell>
          <Cell title="Preview your form before saving">
            <p>
              Preview your form right within the form builder. The preview screen is fully 1:1 representation of how your form will look like once included in a page. The preview also follows your theme and all the visual rules that you might have defined.
            </p>
          </Cell>
        </Grid>
        <Grid right>
          <Cell title="ReCAPTCHA and ToS rules">
            <p>
              You have the option to add ReCAPTCHA protection to your forms, to keep out those evil bots. Additionally, you can also configure your terms of service, which the user must agree to, before they can submit the form, ensuring those GDPR articles are obeyed.
            </p>
          </Cell>
          <Cell>
            <VideoBox file={TagsVideo} />
          </Cell>
        </Grid>
        <Grid left>
          <Cell>
            <VideoBox file={FormSubmissionsVideo} />
          </Cell>
          <Cell title="Track form performance">
            <p>
              For each form, you will have clear information about how the form is performing. You can also view the details about each form submit, providing you with the full information that the user has submitted.
            </p>
          </Cell>
        </Grid>
        <Grid right>
          <Cell title="CSV Export">
            <p>
              Tags are displayed on the left side of the screen. They act similar to a folder. Clicking a tag, will only show images that have that tag.
              You can always create new tags, just by tagging an image.{' '}
            </p>
          </Cell>
          <Cell>
            <VideoBox file={TagsVideo} />
          </Cell>
        </Grid>
        <Grid left>
          <Cell>
            <VideoBox file={TagsVideo} />
          </Cell>
          <Cell title="Integrated with Webiny Page Builder">
            <p>
              Tags are displayed on the left side of the screen. They act similar to a folder. Clicking a tag, will only show images that have that tag.
              You can always create new tags, just by tagging an image.{' '}
            </p>
          </Cell>
        </Grid>
        <Grid rigth>
          <Cell title="Connect 3rd parties using Webhooks">
            <p>
              In some cases, when you have a big number of images, they can slow down the load time it takes to display all that content on your screen.
              {' '}
              Often systems introduce pages to avoid that, but that's clumsy to use. Webiny File Manager uses an infinitive scroll and lazy loading, this way the content is displayed right away, and there is no need for pages.
            </p>
          </Cell>
          <Cell>
            <VideoBox file={LazyLoadVideo} />
          </Cell>
        </Grid>
      </ContentContainer>
    </section>
    <AppList style={{backgroundColor: '#F7F7F7'}} />
    <QuickStart />
  </React.Fragment>
);
