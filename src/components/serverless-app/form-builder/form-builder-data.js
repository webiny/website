import React, { Fragment } from "react";

// assets
import BuilderVideo from "./assets/01-builder.mp4";
import ValidatorsVideo from "./assets/02-validators.mp4";
import FieldsVideo from "./assets/03-fields.mp4";
import MultiLangVideo from "./assets/04-multi-language.mp4";
import FormPreviewVideo from "./assets/05-preview-theme.mp4";
import FormSubmissionsVideo from "./assets/06-submission.mp4";
import RecaptchaTosVideo from "./assets/07-recaptcha-tos.mp4";
import WebhooksVideo from "./assets/08-webhooks.mp4";
import PageBuilderVideo from "./assets/09-page-builder.mp4";
import grayRectImg from "./assets/gray-rect.svg";
import grayRectInvertedImg from "./assets/grey-rectangle-inverted.svg";

export const HERO_FEATURES = [
    {
        id: 0,
        title: "Serverless & Self-hosted",
        body: "Quick and easy deployment using Webiny CLI."
    },
    {
        id: 1,
        title: "Complete package",
        body: "Build forms, define terms and conditions, setup a captcha and view submissions."
    },
    {
        id: 2,
        title: "Theme",
        body: "Have a full control over how your form will look like, including on mobile devices."
    }
];

export const KEYNOTES = [
    {
        id: 0,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Build both <span>simple</span> and <span>complex</span> forms pages
            </p>
        )
    },
    {
        id: 1,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Create custom <span>fields</span> and <span>validators</span>
            </p>
        )
    },
    {
        id: 2,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Forms have <span>revisions</span>, so you never lose track of changes
            </p>
        )
    },
    {
        id: 3,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Integrated <span>ReCAPTCHA</span>
            </p>
        )
    },
    {
        id: 4,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Ability to add 3rd party services via <span>webhooks</span>
            </p>
        )
    },
    {
        id: 5,
        renderText: ({ className = "" }) => (
            <p className={className}>
                View, filter and export <span>submissions</span>
            </p>
        )
    }
];

export const FEATURES = [
    {
        id: 0,
        videoFile: BuilderVideo,
        renderTitle: () => (
            <h3>
                <span>Drag & drop</span>&nbsp;form builder
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Drag and drop fields to create a form. It's super easy to use, no code required.
                    Create anything from simple contact forms to complex sales forms, all in a few
                    minutes.
                </p>
            </Fragment>
        ),
        background: grayRectImg,
        imageOnLeft: false
    },
    {
        id: 1,
        videoFile: FieldsVideo,
        renderTitle: () => (
            <h3>
                <span>Create fields</span>&nbsp;with custom validation rules
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    There are endless applications for the forms. Some of them might require quite
                    specific rules for what users can write into a field.
                </p>
                <p>
                    The UI supports different validation rules to be set. From simple rules to
                    creating a combinations with several rules. This control ensures the form only
                    accepts the correct value sets.
                </p>
            </Fragment>
        ),
        background: false,
        imageOnLeft: true
    },
    {
        id: 2,
        videoFile: MultiLangVideo,
        renderTitle: () => (
            <h3>
                <span>Multi-language </span>support throughout
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Creating multi-language content is quite challenging. Creating a form with
                    multi-language support is even harder. Webiny Form Builder has numerous features
                    for this use-case.
                </p>
                <p>
                    From multi-language field names, placeholders, error messages and validation
                    rules, to multi-language terms of service and captcha messages.
                </p>
            </Fragment>
        ),
        background: grayRectInvertedImg,
        imageOnLeft: false
    },
    {
        id: 3,
        videoFile: ValidatorsVideo,
        renderTitle: () => (
            <h3>
                Several different <span>field types</span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Webiny Form Builder features all the essential form elements you might need.
                    This includes basic input fields, as well as text areas for longer text input.
                    Fields like dropdowns, checkboxes, radio buttons, and hidden inputs are also
                    included.
                </p>
            </Fragment>
        ),
        background: false,
        imageOnLeft: true
    },
    {
        id: 4,
        videoFile: FormPreviewVideo,
        renderTitle: () => (
            <h3>
                <span>Preview </span>the form before saving
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Preview the form right within the form builder. The preview screen is fully 1:1
                    representation of how your form will look like once included in a page. The
                    preview also follows the selected theme and all the visual rules that you might
                    have defined.
                </p>
            </Fragment>
        ),
        background: grayRectImg,
        imageOnLeft: false
    },
    {
        id: 5,
        videoFile: RecaptchaTosVideo,
        renderTitle: () => (
            <h3>
                <span>ReCAPTCHA</span>&nbsp;and ToS rules
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    The integrated option to add a ReCAPTCHA box protects the forms from those evil
                    bots. There is also the option to configure a terms of service checkbox. The ToS
                    is something a user must agree to before submitting the form. This ensuring your
                    GDPR articles are obeyed.
                </p>
            </Fragment>
        ),
        background: false,
        imageOnLeft: true
    },
    {
        id: 6,
        videoFile: FormSubmissionsVideo,
        renderTitle: () => (
            <h3>
                <span>Track</span>&nbsp;form performance
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    For each form, you will have a clear overview on how the form is performing. You
                    can view the details about each form submit. This provides the full information
                    that the user has entered into the form.
                </p>
            </Fragment>
        ),
        background: grayRectInvertedImg,
        imageOnLeft: false
    },
    {
        id: 7,
        videoFile: WebhooksVideo,
        renderTitle: () => (
            <h3>
                Connect 3rd parties using <span>Webhooks</span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    There are cases where you want to trigger specific actions each time someone
                    submits a form. In some examples you might even want to notify and send the data
                    to a 3rd party. Examples are zapier, slack and similar. Webiny Form Builder
                    allows this integration via a webhook. All you need is the POST URL of the 3rd
                    party.
                </p>
            </Fragment>
        ),
        background: false,
        imageOnLeft: true
    },
    {
        id: 8,
        videoFile: PageBuilderVideo,
        renderTitle: () => (
            <h3>
                Integrated with Webiny <span>Page Builder</span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Once happy with how the form looks like, it's time to insert it into a page. The
                    provided integration with Webiny Page Builder makes this super easy. It's a
                    simple matter of dragging and dropping the form element into a column on a page.
                    Once inserted you will select which form and which revision should to display.
                </p>
            </Fragment>
        ),
        background: grayRectImg,
        imageOnLeft: false
    }
];
