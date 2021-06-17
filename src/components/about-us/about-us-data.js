import React from "react";
// assets
import profileSven from "./assets/Sven.png";
import profilePavel from "./assets/Pavel.png";
import profileAdrian from "./assets/Adrian.png";
import profileAshutosh from "./assets/Ashutosh.png";
import profileSwapnil from "./assets/swapnil.png";
import profileMislav from "./assets/Mislav.png";
import profileBruno from "./assets/Bruno.png";

import githubIcon from "./assets/github.svg";
import twitterIcon from "./assets/twitter.svg";
import linkedInIcon from "./assets/linkedin.svg";
import learningIcon from "./assets/learning-icon.svg";
import findTimeIcon from "./assets/find-time-icon.svg";
import loveAndRespectIcon from "./assets/love-respect-icon.svg";
import speakMindIcon from "./assets/speak-mind-icon.svg";
import motivatedIcon from "./assets/motivated-icon.svg";
import communicateIcon from "./assets/communicate-icon.svg";
import freedomIcon from "./assets/freedom-icon.svg";
import qualityWorkIcon from "./assets/quality-work-icon.svg";
import impactIcon from "./assets/impact-icon.svg";
import helpCommunityIcon from "./assets/help-community-icon.svg";
import webinyIcon from "./assets/about-webiny-rect.svg";
import webinyLogoImg from "./assets/mk-logo.svg";
import foundersImg from "./assets/mk-founders.png";
import productImg from "./assets/mk-product.png";

export const TEAM_MEMBERS = [
    {
        id: 0,
        name: "Sven Al Hamad",
        jobTitle: "CEO",
        github: "https://github.com/SvenAlHamad",
        twitter: "https://twitter.com/SvenAlHamad",
        linkedIn: "https://www.linkedin.com/in/svenalhamad",
        imgSrc: profileSven,
    },
    {
        id: 1,
        name: "Pavel Denisjuk",
        jobTitle: "CTO",
        github: "https://github.com/Pavel910",
        twitter: "https://twitter.com/paveldenisjuk",
        linkedIn: "https://www.linkedin.com/in/paveldenisjuk",
        imgSrc: profilePavel,
    },
    {
        id: 2,
        name: "Adrian Smijulj",
        jobTitle: "Core developer",
        github: "https://github.com/doitadrian",
        twitter: "https://twitter.com/doitadrian",
        linkedIn: "https://www.linkedin.com/in/adriansmijulj",
        imgSrc: profileAdrian,
    },
    {
        id: 5,
        name: "Ashutosh",
        jobTitle: "Full-stack developer",
        github: "https://github.com/Ashu96",
        twitter: "https://twitter.com/BhardwajAshu96",
        linkedIn: "https://www.linkedin.com/in/iamashutoshbhardwaj",
        imgSrc: profileAshutosh,
    },
    {
        id: 7,
        name: "Mislav Streicher",
        jobTitle: "Business development",
        linkedIn: "https://www.linkedin.com/in/mislavstreicher",
        imgSrc: profileMislav,
    },
    {
        id: 8,
        name: "Bruno Zorić",
        jobTitle: "Full-stack developer",
        github: "https://github.com/brunozoric",
        twitter: "https://twitter.com/snyder_hr",
        linkedIn: "https://www.linkedin.com/in/brunozoric",
        imgSrc: profileBruno,
    },
    {
        id: 9,
        name: "Swapnil M Mane",
        jobTitle: "Developer relations",
        github: "https://github.com/swapnilmmane",
        twitter: "https://twitter.com/swapnilmmane",
        linkedIn: "https://www.linkedin.com/in/swapnilmmane",
        imgSrc: profileSwapnil,
    },
];

export const LINKS = [
    {
        id: 0,
        name: "github",
        icon: githubIcon,
    },
    {
        id: 1,
        name: "linkedIn",
        icon: linkedInIcon,
    },
    {
        id: 2,
        name: "twitter",
        icon: twitterIcon,
    },
];

export const TRAITS = [
    {
        id: 0,
        text: "We are curious and will never stop learning.",
        icon: learningIcon,
    },
    {
        id: 1,
        text: "We always find time to help our fellow peers.",
        icon: findTimeIcon,
    },
    {
        id: 2,
        text: "We respect and treat others the same way we want to be treated.",
        icon: loveAndRespectIcon,
    },
    {
        id: 3,
        text: "Each one of us has a voice and is not afraid to speak their mind.",
        icon: speakMindIcon,
    },
    {
        id: 99,
        text: "",
        icon: webinyIcon,
        spanTwoRows: true,
    },
    {
        id: 4,
        text: "We are motivated by the problem we are solving and not just by money.",
        icon: motivatedIcon,
    },
    {
        id: 5,
        text:
            "We strive to communicate as much and as clearly as possible as this is the lifestream of successful remote working.",
        icon: communicateIcon,
    },
    {
        id: 6,
        text:
            "We value flexibility and freedom but also take on the responsibility and accountability for our work.",
        icon: freedomIcon,
    },
    {
        id: 7,
        text: "We deeply care about the quality of our work.",
        icon: qualityWorkIcon,
    },
    {
        id: 8,
        text:
            "We truly believe that our work has impact and that Webiny will become the future of web development.",
        icon: impactIcon,
    },
    {
        id: 9,
        text: "More than anything we are happy to help out a community member and make their day.",
        icon: helpCommunityIcon,
    },
];

export const MEDIA_KIT = [
    {
        id: 0,
        imgSrc: webinyLogoImg,
        imgAlt: "Webiny logo",
        actionLabel: () => (
            <span>
                Download <br /> webiny logo
            </span>
        ),
        actionLink: "https://drive.google.com/drive/u/2/folders/19BiuDSOrJ_H0HshmtQhsDGeslB-lVpom",
    },
    {
        id: 1,
        imgSrc: foundersImg,
        imgAlt: "Webiny founders",
        actionLabel: () => (
            <span>
                Download <br /> Founders Photo
            </span>
        ),
        actionLink: "https://drive.google.com/drive/u/2/folders/17ujXOoBMFwpyV4HtPUebeWs9_dZYF3u7",
    },
    {
        id: 2,
        imgSrc: productImg,
        imgAlt: "Product Screenshots",
        actionLabel: () => (
            <span>
                Download <br /> Product Screenshots
            </span>
        ),
        actionLink: "https://drive.google.com/drive/u/2/folders/1CThk-B2_hl2Tg_5vLTPHSSv6zyYLsnTz",
    },
];
