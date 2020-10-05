import React, { Fragment } from "react";

// assets
import reactComponentsImg from "./assets/react-components.svg";
import localDevelopmentImg from "./assets/local-env.svg";
import adminThemeImg from "./assets/admin-theme.svg";
import npmImg from "./assets/add-npm.svg";
import serverlessImg from "./assets/hosted-env.svg";
import jsImg from "./assets/js.svg";
import accessControlImg from "./assets/acl.svg";

const BG_VARIANT_UP = "UP_DOWN";
const BG_VARIANT_DOWN = "DOWN_UP";

export const FEATURES = [
    {
        id: 0,
        imgSrc: reactComponentsImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>A library of ready-made </span>
                React components
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    The given components make it easy to create simple and complex interfaces in no
                    time. Components are both designed and coded to seamlessly work together.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_UP,
        imageOnLeft: false,
    },
    {
        id: 1,
        imgSrc: localDevelopmentImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Local development </span>environment
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    With a simple command install Webiny locally on your machine. Develop using
                    favorite editor and environment, there are no magic black boxes here.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_DOWN,
        imageOnLeft: true,
    },
    {
        id: 2,
        imgSrc: adminThemeImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Admin theme </span>
                is included
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    The admin theme has all the required parts, from a clean-looking UI, navigation,
                    user account area, search and login form. Everything is customizable. By using
                    the given admin theme you’ll save yourself days if not weeks of coding.
                </p>
            </Fragment>
        ),
        background: null,
        imageOnLeft: false,
    },
    {
        id: 3,
        imgSrc: npmImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>Bring your own libraries </span>
                and call 3rd party services
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    When building on top of Webiny, you can use any NPM library out there, as well
                    as you can connect and call 3rd party API.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_DOWN,
        imageOnLeft: true,
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
        background: BG_VARIANT_UP,
        imageOnLeft: false,
    },
    {
        id: 5,
        imgSrc: jsImg,
        imgAlt: "",
        renderTitle: () => (
            <h3>
                <span>100% Javascript </span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    One language is all you need to know to build on top of Webiny. React on the
                    client-side and Node.js on the server-side.
                </p>
            </Fragment>
        ),
        background: BG_VARIANT_DOWN,
        imageOnLeft: true,
    },
    {
        id: 6,
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
        background: null,
        imageOnLeft: false,
        className: "item--last",
    },
];
