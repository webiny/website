import React, { Fragment } from "react";

// assets
import DropFilesVideo from "./assets/01-drop-files.mp4";
import ImageEditorVideo from "./assets/02-image-editor.mp4";
import SearchVideo from "./assets/03-search.mp4";
import TagsVideo from "./assets/04-tags.mp4";
import LazyLoadVideo from "./assets/05-lazy-load.mp4";
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
        title: "Cloud Native",
        body: "Designed to work with a cloud storage service like AWS S3."
    },
    {
        id: 2,
        title: "Data Optimized",
        body: "Handle large amounts of files and images in an optimal way."
    }
];

export const KEYNOTES = [
    {
        id: 0,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Integrated throughout all <span>Webiny apps</span>
            </p>
        )
    },
    {
        id: 1,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Built-in <span>image editor</span>
            </p>
        )
    },
    {
        id: 2,
        renderText: ({ className = "" }) => (
            <p className={className}>
                Select and upload a <span>single</span>, or <span>multiple</span> files in one go
            </p>
        )
    },
    {
        id: 3,
        renderText: ({ className = "" }) => (
            <p className={className}>
                <span>Tag files</span> for better search results
            </p>
        )
    },
    {
        id: 4,
        renderText: ({ className = "" }) => (
            <p className={className}>
                A component you can <span>integrate</span> into your own apps
            </p>
        )
    },
    {
        id: 5,
        renderText: ({ className = "" }) => (
            <p className={className}>
                It can work with any <span>3rd party storage</span> service
            </p>
        )
    }
];

export const FEATURES = [
    {
        id: 0,
        videoFile: DropFilesVideo,
        renderTitle: () => (
            <h3>
                <span>Just drop</span>&nbsp;your files
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    You can drop a single file, or multiple files at once. In case drag&drop is not
                    handy, you can use the upload button at the top to add your files.
                </p>
            </Fragment>
        ),
        background: grayRectImg,
        imageOnLeft: false
    },
    {
        id: 1,
        videoFile: ImageEditorVideo,
        renderTitle: () => (
            <h3>
                Built-in <span>image editor</span>
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Images are often the types of files that need that extra touch. With File
                    Manager, you can manipulate an image and apply different filter to it right
                    there from within the UI. It will create a copy of the original image, so you
                    never lose the source file.
                </p>
            </Fragment>
        ),
        background: false,
        imageOnLeft: true
    },
    {
        id: 2,
        videoFile: SearchVideo,
        renderTitle: () => (
            <h3>
                Find the <span>right files</span> with ease
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    There is an always-visible search bar at the top of the screen. Any word you
                    type in, the system will try to match against the file name, any of the tags or
                    the file label. This makes it easy to find the file you're looking for.
                </p>
            </Fragment>
        ),
        background: grayRectInvertedImg,
        imageOnLeft: false
    },
    {
        id: 3,
        videoFile: TagsVideo,
        renderTitle: () => (
            <h3>
                Tag and <span>organise</span> files
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    Tags are visible on the left side of the screen. They act similar to a folder.
                    Clicking a tag, will only show images that have that tag applied. You can always
                    create new tags by simply tagging an image.
                </p>
            </Fragment>
        ),
        background: false,
        imageOnLeft: true
    },
    {
        id: 4,
        videoFile: LazyLoadVideo,
        renderTitle: () => (
            <h3>
                <span>Don't worry</span> about how many files you have
            </h3>
        ),
        renderBody: () => (
            <Fragment>
                <p>
                    In some cases, when you have a big number of images, they can slow down the load
                    time it takes to display all that content on your screen. Often systems
                    introduce pagination to avoid that, but that's clumsy to use.
                </p>
                <p>
                    Webiny File Manager uses an infinitive scroll and lazy loading mechanism. This
                    way the content is displayed right away, and there is no need to click through
                    pages.
                </p>
            </Fragment>
        ),
        background: grayRectImg,
        imageOnLeft: false
    }
];
