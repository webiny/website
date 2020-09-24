import React, { Fragment } from "react";

// assets
import builderImg from "./assets/builder.svg";
import headlessImg from "./assets/headless.svg";
import I18NImg from "./assets/i18n.svg";
import integrationImg from "./assets/integrations.svg";
import themeImg from "./assets/theme.svg";
import serverlessImg from "./assets/hosted-env.svg";

const BG_VARIANT_UP = "UP_DOWN";
const BG_VARIANT_DOWN = "DOWN_UP";

export const FEATURES = [
    {
        id: 0,
        imgSrc: builderImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Build pages and forms </span>
                <br />
                without code
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Use the intuitive and powerful drag&drop builder to create stunning pages and
                    forms to capture your leads. No coding knowledge required.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_UP,
        imageOnLeft: false,
    },
    {
        id: 1,
        imgSrc: headlessImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>For more complex structures, </span>
                <br />
                there is a headless module
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    There is a UI and an API for content modeling and a GraphQL API for content
                    distribution. The headless module allows you to go beyond the web to distribute
                    and display your content.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_DOWN,
        imageOnLeft: true,
    },
    {
        id: 2,
        imgSrc: I18NImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Creating content for multiple languages </span>
                is a built-in feature
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    The built-in multi-language support allows you to create content for multiple
                    languages.
                </p>
            </Fragment>
        ),
        background: null,
        imageOnLeft: false,
    },
    {
        id: 3,
        imgSrc: integrationImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Use the ready-made integrations </span>
                or create your own
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Things like youtube videos, cookie policy consents, google tag manager and many
                    more, are all included by default. If something is missing, it's easy to create
                    a new plugin.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_DOWN,
        imageOnLeft: true,
    },
    {
        id: 4,
        imgSrc: themeImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Build your </span>
                own theme
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Webiny allows you to create your theme. Have full control over your HTML and
                    CSS. You can also import any library from NPM to help you create added
                    functionality.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_UP,
        imageOnLeft: false,
    },
    {
        id: 5,
        imgSrc: serverlessImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Great performance </span>
                with serverless functions
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Webiny sites runs inside a serverless environment. That offers unlimited
                    scalability so no matter the load. Your users will experience great performance.
                    Serverless also eliminates the need to over provision and overpay for
                    infrastructure.
                </p>
            </Fragment>
        ),
        background: null,
        imageOnLeft: true,
        className: "item--last",
    },
];
