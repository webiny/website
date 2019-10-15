import React from 'react';
import {css} from 'emotion';
import Hero from '../components/hero';
import {List, ListItem} from '../components/list';
import FeatureBox from '../components/feature-box';
import ContentContainer from '../../ui/content-container';
import {SubTitle} from '../components/typography';
import {Grid, Cell} from '../../ui/layout/layout';
import VideoBox from '../../ui/layout/video-box';
import QuickStart from '../../ui/layout/footer';
import AppList from '../components/app-list';
import mq from '../../utils/breakpoints';
import SlsDesign from '../components/serverless-design.js';

import HeroImage from './assets/form-builder.jpg';
import HeroBg from './assets/hero-bg.svg';
import background from './assets/gray-bg-with-bg.svg';

import BuilderVideo from './assets/01-builder.mp4';
import ValidatorsVideo from './assets/02-validators.mp4';
import FieldsVideo from './assets/03-fields.mp4';
import MultiLangVideo from './assets/04-multi-language.mp4';
import FormPreviewVideo from './assets/05-preview-theme.mp4';
import FormSubmissionsVideo from './assets/06-submission.mp4';
import RecaptchaTosVideo from './assets/07-recaptcha-tos.mp4';
import WebhooksVideo from './assets/08-webhooks.mp4';
import PageBuilderVideo from './assets/09-page-builder.mp4';
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
          - Quick and easy deployment with Serverless Framework.
        </ListItem>
        <ListItem title={'Complete package'}>
          - Build forms, define terms and conditions, setup a captcha and view submissions.
        </ListItem>
        <ListItem title={'Theme'}>
          - Have a full control over how your form will look like, including on mobile devices.
        </ListItem>
      </List>
    </Hero>
    <SlsDesign />

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
              Drag and drop fields to create a form. It's super easy to use, no code required. Create anything from simple contact forms to complex sales forms, all in a few minutes.
            </p>
          </Cell>
        </Grid>
        <Grid right>
          <Cell title="Create fields with custom validation rules">
            <p>
              There are endless applications for the forms. Some of them might require quite specific rules for what users can write into a field. The UI supports different validation rules to be set. From simple rules to creating a combinations with several rules. This control ensures the form only accepts the correct value sets.
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
              Creating multi-language content is quite challenging. Creating a form with multi-language support is even harder. Webiny Form Builder has numerous features for this use-case. From multi-language field names, placeholders, error messages and validation rules, to multi-language terms of service and captcha messages.
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
          <Cell title="Preview the form before saving">
            <p>
              Preview the form right within the form builder. The preview screen is fully 1:1 representation of how your form will look like once included in a page. The preview also follows the selected theme and all the visual rules that you might have defined.
            </p>
          </Cell>
        </Grid>
        <Grid right>
          <Cell title="ReCAPTCHA and ToS rules">
            <p>
              The integrated option to add a ReCAPTCHA box protects the forms from those evil bots. There is also the option to configure a terms of service checkbox. The ToS is something a user must agree to before submitting the form. This ensuring your GDPR articles are obeyed.
            </p>
          </Cell>
          <Cell>
            <VideoBox file={RecaptchaTosVideo} />
          </Cell>
        </Grid>
        <Grid left>
          <Cell>
            <VideoBox file={FormSubmissionsVideo} />
          </Cell>
          <Cell title="Track form performance">
            <p>
              For each form, you will have a clear overview on how the form is performing. You can view the details about each form submit. This provides the full information that the user has entered into the form.
            </p>
          </Cell>
        </Grid>
        <Grid right>
          <Cell title="CSV Export">
            <p>
              Viewing form submissions from within the UI is easy, but in some cases it might not be enough. For those cases we've added the option to export form submissions. This way you can transfer the submissions into a 3rd party tool and do the additional processing there.
            </p>
          </Cell>
          <Cell>
            <VideoBox file={TagsVideo} />
          </Cell>
        </Grid>
        <Grid left>
          <Cell>
            <VideoBox file={PageBuilderVideo} />
          </Cell>
          <Cell title="Integrated with Webiny Page Builder">
            <p>
              Once happy with how the form looks like, it's time to insert it into a page. The provided integration with Webiny Page Builder makes this super easy. It's a simple matter of dragging and dropping the form element into a column on a page. Once inserted you will select which form and which revision should to display.
            </p>
          </Cell>
        </Grid>
        <Grid rigth>
          <Cell title="Connect 3rd parties using Webhooks">
            <p>
              There are cases where you want to trigger specific actions each time someone submits a form. In some examples you might even want to notify and send the data to a 3rd party. Examples are zapier, slack and similar. Webiny Form Builder allows this integration via a webhook. All you need is the POST URL of the 3rd party.
            </p>
          </Cell>
          <Cell>
            <VideoBox file={WebhooksVideo} />
          </Cell>
        </Grid>
      </ContentContainer>
    </section>
    <AppList style={{backgroundColor: '#F7F7F7'}} />
    <QuickStart />
  </React.Fragment>
);
