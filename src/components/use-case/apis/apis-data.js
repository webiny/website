import React, { Fragment } from "react";

// assets
import graphQLImg from "./assets/graphql.svg";
import microServicesImg from "./assets/microservices.svg";
import apolloImg from "./assets/apollo.svg";
import serverlessImg from "./assets/hosted-env.svg";
import accessControlImg from "./assets/acl.svg";

const BG_VARIANT_UP = "UP_DOWN";
const BG_VARIANT_DOWN = "DOWN_UP";

export const FEATURES = [
    {
        id: 0,
        imgSrc: graphQLImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Use GraphQL, </span>
                the better way to build APIs
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    GraphQL brings numerous benefits over REST. However, some of the setup and
                    configuration can be challenging. With Webiny, you’ll get a preconfigured
                    environment and you can start creating your GraphQL API right away.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_UP,
        imageOnLeft: false
    },
    {
        id: 1,
        imgSrc: microServicesImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                Take the <span>microservices approach </span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    It’s the latest and greatest that technology provides, but sometimes it's quite
                    hard to configure everything correctly. With Webiny you'll get the whole setup
                    included for all your services. We also made deploying services super easy.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_DOWN,
        imageOnLeft: true
    },
    {
        id: 2,
        imgSrc: apolloImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Apollo Federation </span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Having several APIs is usually a rule for any larger application. In many cases
                    this ends up being a monolithic structure. To avoid that, Webiny uses Apollo
                    Federation. It allows you to build your data graph using microservices
                    distributed across multiple functions.
                </p>
            </Fragment>
        ),
        background: null,
        imageOnLeft: false
    },
    {
        id: 3,
        imgSrc: accessControlImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                Built-in <span>access control layer</span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    The fine-grain ACL layer allows you to configure user access rights to the
                    smallest scope. You can also issue API tokens for users to use inside 3rd party
                    applications and services.
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
