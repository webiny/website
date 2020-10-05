import React from "react";
import uiPackageImg from "./assets/ui-package.svg";
import pluginImg from "./assets/everything-plugin.svg";
import storybookImg from "./assets/stroybook.svg";

export const WEBINY_ADMIN_UI_FEATURES = [
    {
        id: 0,
        title: "We've created a UI package for you so you don't need to bother with one",
        body:
            "When we say that with Webiny you can focus on your business logic right away, we truly mean it. Webiny comes with a built-in Admin UI. It has over 30 reusable React components you can use to build interfaces for your application. Everything can be fully stylised to fit your brand identity.",
        imageURL: uiPackageImg,
        imageAltText: "We've created a UI package for you so you don't need to bother with one",
    },
    {
        id: 1,
        title: "Everything is a plugin",
        body:
            "The built-in components are customisable through CSS and React. The admin theme is built as a set of plugins that you can extend and adapt. Even the simplest parts, like the Webiny logo in the header, are made as plugins you can change. This gives you full control over the look and feel.",
        imageURL: pluginImg,
        imageAltText: "Everything is a plugin",
        includeConnectors: true,
    },
    {
        id: 2,
        title: "Storybook is included",
        body: () => (
            <p className={"feature-card__body"}>
                Each UI component is available in our{" "}
                <a href={"https://storybook.webiny.com"} target={"_blank"}>
                    storybook
                </a>
                . You'll find the list of React props, implementation details and examples how to
                use the components.
            </p>
        ),
        imageURL: storybookImg,
        imageAltText: "Storybook is included",
    },
];
