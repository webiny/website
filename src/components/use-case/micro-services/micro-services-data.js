import React, { Fragment } from "react";

// assets
import pluginImg from "./assets/multi-deploy.svg";
import npmImg from "./assets/add-npm.svg";
import graphQLImg from "./assets/graphql-http.svg";
import costImg from "./assets/no-overhead.svg";
import serverlessImg from "./assets/hosted-env.svg";

const BG_VARIANT_UP = "UP_DOWN";
const BG_VARIANT_DOWN = "DOWN_UP";

export const FEATURES = [
    {
        id: 0,
        imgSrc: pluginImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Plugin based CLI </span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Our CLI allows you to shape your workflow by writing simple plugins. Even the
                    default Webiny deployment mechanism is a plugin! Use community plugins or write
                    your own, expanding your toolkit has never been easier.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_UP,
        imageOnLeft: false
    },
    {
        id: 1,
        imgSrc: npmImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Bring your own libraries </span> and call 3rd party services
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    When building on top of Webiny, you can use any NPM library out there, as well
                    as you can connect and call any 3rd party API.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_DOWN,
        imageOnLeft: true
    },
    {
        id: 2,
        imgSrc: graphQLImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Create both GraphQL APIs </span>as well as HTTP services
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    With Webiny you can create new GraphQL APIs, that are registered with Apollo
                    Gateway. You can also create generic services that are invoked via an HTTP
                    request on a specified URL.
                </p>
            </Fragment>
        ),
        background: null,
        imageOnLeft: false
    },
    {
        id: 3,
        imgSrc: costImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Build with </span>less overhead
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Building and deploying microservices requires significant time. Webiny enables
                    you to have your services up and running in less time and with less effort.
                    Leaving time for more important things.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_UP,
        imageOnLeft: false
    },
    {
        id: 4,
        imgSrc: serverlessImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                Great performance with <span>serverless functions </span>
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
        imageOnLeft: false,
        className: "item--last"
    }
];
