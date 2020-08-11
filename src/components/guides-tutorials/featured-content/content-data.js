// assets
import cardPlaceholderV1 from "./assets/easiest-way-to-adopt-serverless.png";
import authorHer from "./assets/her.png";
import cardPlaceholderV2 from "./assets/card-placehodler-v2.png";
import authorHim from "./assets/him.png";

export const REQUEST_TUTORIAL_LINK =
    "https://github.com/webiny/community/issues/new?assignees=&labels=&template=submit-a-request-for-a-tutorial-guide.md&title=%5BTOPIC%5D";

export const SUBMIT_TUTORIAL_LINK =
    "https://github.com/webiny/community/issues/new?assignees=&labels=&template=submit-a-tutorial-guide.md&title=%5BSUBMIT%5D";

export const TUTORIALS = [
    {
        id: 0,
        imgSrc: cardPlaceholderV1,
        imgAlt: "",
        authorImgSrc: authorHer,
        authorName: "Sophia Albert",
        title: "Webiny: Easiest way to adopt serverless",
        tags: ["graphql", "aws", "nodejs"],
        bannerText: "Official tutorial",
        link: "https://github.com/webiny/webiny-examples"
    },
    {
        id: 1,
        imgSrc: cardPlaceholderV2,
        imgAlt: "",
        authorImgSrc: authorHim,
        authorName: "Dan Abramov",
        title: "Build serverless with easy",
        tags: ["reactjs", "aws", "s3"],
        link: "https://github.com/webiny/webiny-examples"

    }
];

export const SORT_OPTIONS = [
    {
        id: -1,
        label: "Sort by",
        value: ""
    },
    {
        id: 0,
        label: "Latest tutorials",
        value: "latest"
    },
    {
        id: 1,
        label: "Most requested",
        value: "most_requested"
    }
];
