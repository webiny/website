import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Link from "gatsby-link";
import { trackGoToGithub } from "../ui/functions";

const MenuBlock = styled("div")({
    width: "auto",
    display: "flex",
    flexDirection: "column",
    lineHeight: "30px",
    a: {
        color: theme.color.white,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
});

const SectionTitle = styled("span")({
    fontWeight: theme.fontWeight.bold,
    display: "inline-block",
    marginBottom: 15,
});

const footerMenu = css(
    {
        maxWidth: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        color: theme.color.white,
        paddingBottom: 20,
    },
    mq({
        display: ["none", "none", "flex"],
    }),
);

const FooterMenu = () => (
    <ContentContainer className={footerMenu}>
        <MenuBlock>
            <SectionTitle>Developers</SectionTitle>
            <a href="/docs/get-started/install-webiny">Install Webiny</a>
            <a
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                    trackGoToGithub({ placement: "footer-menu" });
                }}
                href="https://github.com/webiny/webiny-js/blob/master/LICENSE"
            >
                License
            </a>
            <a
                onClick={() => {
                    trackGoToGithub({ placement: "footer-menu" });
                }}
                href="https://github.com/webiny/webiny-js"
            >
                GitHub repository
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                    trackGoToGithub({ placement: "footer-menu" });
                }}
                href="https://github.com/webiny/webiny-js/blob/master/docs/CONTRIBUTING.md"
            >
                Contribute
            </a>
        </MenuBlock>
        <MenuBlock>
            <SectionTitle>Products</SectionTitle>
            <Link to="/enterprise-serverless-cms/headless-cms">Headless CMS</Link>
            <Link to="/enterprise-serverless-cms/page-builder">Page Builder</Link>
            <Link to="/enterprise-serverless-cms/file-manager">File Manager</Link>
            <Link to="/enterprise-serverless-cms/form-builder">Form Builder</Link>
            <a target="_blank" rel="noreferrer" href="/docs/overview/applications/control-panel">
                Control Panel
            </a>
            <a target="_blank" rel="noreferrer" href="/docs/overview/applications/apw">
                Publishing Workflow
            </a>
        </MenuBlock>
        <MenuBlock>
            <SectionTitle>Community</SectionTitle>
            <a target="_blank" rel="noreferrer" href="https://www.webiny.com/slack">
                Slack
            </a>
            <Link to="/blog">Blog</Link>
            <a target="_blank" rel="noreferrer" href="http://meetup.com/webiny/events/">
                Meetup
            </a>
            <Link to="/partners">Partners</Link>
            <Link to="/swag">SWAG</Link>
        </MenuBlock>
        <MenuBlock>
            <SectionTitle>Use Cases & Guides</SectionTitle>
            <Link rel="prerender" to="/use-case/serverless-websites">
                Build Serverless Websites
            </Link>
            <Link rel="prerender" to="/use-case/serverless-web-applications">
                Build Serverless Apps
            </Link>
            <Link rel="prerender" to="/use-case/serverless-graphql-api">
                Build Serverless APIs
            </Link>
            <Link rel="prerender" to="/use-case/microservices">
                Build Microservices
            </Link>
            <Link rel="prerender" to="/knowledge-base/headless-cms">
                Headless CMS Explained
            </Link>
            <Link rel="prerender" to="/knowledge-base">
                Knowledge Base
            </Link>
        </MenuBlock>
        <MenuBlock>
            <SectionTitle>Company</SectionTitle>
            <Link rel="prerender" to="/about-us">
                About Us
            </Link>
            <a target="_blank" rel="noreferrer" href="https://careers.webiny.com">
                Careers
            </a>
            <Link rel="prerender" to="/privacy-policy">
                Privacy Policy
            </Link>
            <a href="mailto:contact@webiny.com">Contact Us</a>
        </MenuBlock>
    </ContentContainer>
);

export default FooterMenu;
