import React, { Fragment } from "react";

// assets
import dragDropVideo from "./assets/01-page-builder.mp4";
import buildingBlocksVideo from "./assets/02-building-blocks.mp4";
import pageRevisionVideo from "./assets/03-page-revisions.mp4";
import pageElementVideo from "./assets/04-page-elements.mp4";
import seoVideo from "./assets/05-seo.mp4";
import navigationMenuVideo from "./assets/06-menu.mp4";
import organiseContentVideo from "./assets/07-page-categories.mp4";
import grayRectImg from "./assets/gray-rect.svg";
import grayRectInvertedImg from "./assets/grey-rectangle-inverted.svg";

export const HERO_FEATURES = [
    {
        id: 0,
        title: "Serverless & Self-hosted",
        body: "Quick and easy deployment using Webiny CLI.",
    },
    {
        id: 1,
        title: "Easy Theming",
        body: "Themes are created using JavaScript and SCSS.",
    },
    {
        id: 2,
        title: "Mobile responsive",
        body: "All the generated pages will look great on any device and screen size.",
    },
];

export const KEYNOTES = [
    {
        id: 0,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Great for building <span>landing</span> pages and <span>marketing</span> sites
            </p>
        ),
    },
    {
        id: 1,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Simple and <span>intuitive UI</span> that anyone can use
            </p>
        ),
    },
    {
        id: 2,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Expand the <span>capabilities</span> by developing <span>plugins</span>
            </p>
        ),
    },
    {
        id: 3,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Build your <span>own theme</span>
            </p>
        ),
    },
    {
        id: 4,
        renderText: ({ className = "" }) => (
            <p className={className}>
                All pages are <span>mobile responsive</span>
            </p>
        ),
    },
    {
        id: 5,
        renderText: ({ className = "" }) => (
            <p className={className}>
                <span>SEO</span> and <span>Social media</span> friendly
            </p>
        ),
    },
];

export const FEATURES = [
    {
        id: 0,
        videoFile: dragDropVideo,
        renderTitle: () => (
            <h3>
                <span>Drag & drop</span>&nbsp;page builder
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Unleash your creativity. Don’t constrain your content inside a "textarea".
                    Webiny features, not a text editor, but a full featured drag&drop builder.
                </p>
                <p>
                    This allows you to build more engaging pages and present your content in the way
                    it deserves. Your users will thank you.
                </p>
            </Fragment>
        ),
        background: grayRectImg,
        imageOnLeft: false,
    },
    {
        id: 1,
        videoFile: buildingBlocksVideo,
        renderTitle: () => (
            <h3>
                <span>Building blocks</span>&nbsp;included
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Often a CMS gives you the option to arrange your content in a crude and boring
                    way and your users will notice that. So, what good is a CMS if it’s not keeping
                    your users engaged?
                </p>
                <p>
                    To spin things around, Webiny features a set of built-in inspirational content
                    blocks. You can drop into your page and adjust them to fit your needs. It will
                    make every page a unique engaging experience.
                </p>
            </Fragment>
        ),
        background: false,
        imageOnLeft: true,
    },
    {
        id: 2,
        videoFile: pageRevisionVideo,
        renderTitle: () => (
            <h3>
                Page<span> revisions</span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Never lose sight of who changed what. Go back in time and restore previous
                    versions of a page. Work on new content drafts without publishing them until
                    ready.
                </p>
            </Fragment>
        ),
        background: grayRectInvertedImg,
        imageOnLeft: false,
    },
    {
        id: 3,
        videoFile: pageElementVideo,
        renderTitle: () => (
            <h3>
                <span>Page</span>&nbsp;elements
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Page builder features over 15 different elements you can add to a page. Create
                    rich experiences for your visitors. If an element is missing, it’s easy to
                    create one as they are simple React components. Each element controls its
                    presentation layer, as well as settings and configuration options.
                </p>
            </Fragment>
        ),
        background: false,
        imageOnLeft: true,
    },
    {
        id: 4,
        videoFile: seoVideo,
        renderTitle: () => (
            <h3>
                <span>SEO & social</span> media
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Control the SEO aspects of a page. Tags like page title, description, keywords
                    as well as any other. Page builder comes with a set of predefined OpenGraph
                    fields. They define how a page looks when share across different social media
                    sites.
                </p>
            </Fragment>
        ),
        background: grayRectInvertedImg,
        imageOnLeft: false,
    },
    {
        id: 5,
        videoFile: navigationMenuVideo,
        renderTitle: () => (
            <h3>
                <span>Navigation</span>&nbsp;menus
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Menus and navigation are crucial part of every site. Page builder includes a
                    module for building navigation menus. Insert pages, list of pages, or create a
                    sub-tree navigation. You can also add external links and control the arrangement
                    of menu items.
                </p>
            </Fragment>
        ),
        background: false,
        imageOnLeft: true,
    },
    {
        id: 6,
        videoFile: organiseContentVideo,
        renderTitle: () => (
            <h3>
                <span>Organize</span>&nbsp;your content
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    To better organise the content, each page belongs to a specific page category. A
                    page category defines which theme layout it will used to display the content.
                    Page categories also control the URL prefix used for all page in this group.
                    This makes the page URL look nice and structured.
                </p>
            </Fragment>
        ),
        background: grayRectImg,
        imageOnLeft: false,
    },
];
