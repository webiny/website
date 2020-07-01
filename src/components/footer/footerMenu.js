import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Link from "gatsby-link";
import { trackGaConversion } from "../ui/functions";

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
    flexDirection: "column",
    flexDirection: "row",
    justifyContent: "space-between",
    color: theme.color.white,
    paddingBottom: 20,
  },
  mq({
    display: ["none", "flex"],
  })
);

const FooterMenu = () => (
  <ContentContainer className={footerMenu}>
    <MenuBlock>
      <SectionTitle>Developers</SectionTitle>
      <a href="https://docs.webiny.com/docs/get-started/quick-start">
        Getting Started
      </a>
      <a href="https://docs.webiny.com/">Documentation</a>
      <a href="https://github.com/webiny/webiny-js/blob/master/LICENSE">
        License
      </a>
      <a
        onClick={() => {
          trackGaConversion();
        }}
        href="https://github.com/webiny/webiny-js"
      >
        GitHub repository
      </a>
      <a href="https://github.com/webiny/webiny-js/blob/master/CONTRIBUTING.md">
        Contribute
      </a>
    </MenuBlock>
    <MenuBlock>
      <SectionTitle>Webiny</SectionTitle>
      <Link to="/why-serverless">Why Serverless?</Link>
      <Link to="/features">Features</Link>
      {/*<Link to="/features">Features</Link>*/}
      <a
        onClick={() => {
          trackGaConversion();
        }}
        href="https://github.com/webiny/webiny-js/projects/7"
      >
        Roadmap
      </a>
    </MenuBlock>
    <MenuBlock>
      <SectionTitle>Community</SectionTitle>
      <a href="https://community.webiny.com/">Forum</a>
      <a href="https://gitter.im/Webiny/webiny-js">Chat</a>
      <a href="https://blog.webiny.com/">Blog</a>

      <Link rel="prerender" to="/events">
        Events
      </Link>
      <Link to="/swag">SWAG</Link>
    </MenuBlock>
    <MenuBlock>
      <SectionTitle>Included Apps</SectionTitle>
      <Link rel="prerender" to="/serverless-app/headless-cms">
        Headless CMS
      </Link>
      <Link rel="prerender" to="/serverless-app/page-builder">
        Page Builder
      </Link>
      <Link rel="prerender" to="/serverless-app/form-builder">
        Form Builder
      </Link>
      <Link rel="prerender" to="/serverless-app/file-manager">
        File Manager
      </Link>
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
      <Link rel="prerender" to="/contact-us">
        Contact Us
      </Link>
      <Link rel="prerender" to="/support">
        Support
      </Link>
    </MenuBlock>
  </ContentContainer>
);

export default FooterMenu;
