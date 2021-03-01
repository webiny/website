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
        display: ["none", "flex"],
    }),
);

const FooterMenu = () => (
    <ContentContainer className={footerMenu}>
        <MenuBlock>
            <SectionTitle>Developers</SectionTitle>
            <a href="https://docs.webiny.com/">Documentation</a>
            <a
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
                onClick={() => {
                    trackGoToGithub({ placement: "footer-menu" });
                }}
                href="https://github.com/webiny/webiny-js/blob/master/docs/CONTRIBUTING.md"
            >
                Contribute
            </a>
        </MenuBlock>
        <MenuBlock>
            <SectionTitle>Webiny</SectionTitle>
            <Link to="/serverless-application-framework">
                Serverless Application
                <br />
                Framework
            </Link>
            <Link to="/serverless-cms">Serverless CMS</Link>
            <Link to="/enterprise">For Enterprise</Link>
            <Link to="/why-webiny">Why Webiny?</Link>
            <Link to="/partners">Webiny Partners</Link>
            <Link to="/roadmap">Roadmap</Link>
        </MenuBlock>
        <MenuBlock>
            <SectionTitle>Community</SectionTitle>
            <a href="https://www.webiny.com/slack">Slack Chat</a>
            <Link to="/blog">Blog</Link>
            <Link to="/swag">SWAG</Link>
            <Link to="/events">Events</Link>
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
            <Link rel="prerender" to="/guides/serverless-guide">
                Guide to Serverless
            </Link>
        </MenuBlock>
        <MenuBlock>
            <SectionTitle>Company</SectionTitle>
            <Link rel="prerender" to="/about-us">
                About Us
            </Link>
            <a href="https://careers.webiny.com">Careers</a>
            <Link rel="prerender" to="/privacy-policy">
                Privacy Policy
            </Link>
            <a href="mailto:sven@webiny.com">Contact Us</a>
        </MenuBlock>
    </ContentContainer>
);

export default FooterMenu;
