import React from "react";
import appsImg from "./assets/webiny-apps.svg";
import ssrImg from "./assets/ssr.svg";
import dbProxyImg from "./assets/db-proxy.svg";

export const WEBINY_APPS_LIBRARIES_FEATURES = [
    {
        id: 0,
        title: "Webiny Apps",
        body: () => (
            <p className={"feature-card__body"}>
                When you install Webiny, you will find{" "}
                <a
                    href={"/serverless-apps"}
                    target={"_blank"}
                >
                    several apps
                </a>{" "}
                pre-installed. Apps like Page Builder, Form Builder, File Manager and a Headless CMS
                are a great addition to any project.
            </p>
        ),
        imageURL: appsImg,
        imageAltText: "Webiny Apps"
    },
    {
        id: 1,
        title: "Server(less) side rendering",
        body:
            "We created a special library for what we call serverless side rendering. Serverless comes with unique challenges and one of them is doing SSR in such an environment. We've pioneered several approaches to get this right.",
        imageURL: ssrImg,
        imageAltText: "Server(less) side rendering",
        includeConnectors: true,
        actionLabel: "read more about it",
        actionLink: "https://blog.webiny.com/serverless-side-rendering-e1c0924b8da1"
    },
    {
        id: 2,
        title: "DB Proxy",
        body: () => (
            <p className="feature-card__body">
                Webiny has a database layer called Commodo. It's a set of{" "}
                <a href={"https://en.wikipedia.org/wiki/Higher-order_function"} target={"_blank"}>
                    higher order functions (HOFs){" "}
                </a>{" "}
                that let you define and compose rich data model objects. But there is also an
                extension to Commodo, a layer that manages database connections and pooling, as many
                databases don't play well with serverless functions.
            </p>
        ),
        imageURL: dbProxyImg,
        imageAltText: "DB Proxy",
        actionLabel: "read more about it",
        actionLink:
            "https://blog.webiny.com/using-aws-lambda-to-create-a-mongodb-connection-proxy-2bb53c4a0af4"
    }
];
