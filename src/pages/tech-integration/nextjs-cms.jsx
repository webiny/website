import React, { useState } from "react";
import { graphql } from "gatsby";

import BaseLayout from "../../layouts/base";
import { 
  Article,
  BlogContainer,
  TutorialsGrid,
  BookADemoContainer,
  HeroWhyContainer,
  HeaderContainer,
  CodeFieldBorder,
  CodeField,
  Tile,
  TileLink,
  IntegrationsGrid,
} from '../../components/tech-integration/TechIntegration.styled'
import {
  ToolTip,
  ToolTipText,
  CodeFieldText 
} from "../../components/new-homepage/hero-section/hero.styled"
  import BlogCard from "../../components/blog/components/blog-card"
  import FeaturedBlog from "../../components/blog/components/featured-blog"
  import Button from "../../components/ui/button"
  import { 
    whyThisTech as GatsbyIntro,
    title as GatsbyTitle
} from "./gatsby-cms"

import NextJSLogo from "../../assets/nextjs.svg"
import GatsbyLogo from "../../assets/gatsby.svg"
import featuredImage from "../../assets/nextjs-cms-integration-webiny.png";
import logo from "../../assets/window-gatsby.svg";
import Step1 from "../../assets/step-1.svg";
import Step2 from "../../assets/step-2.svg";
import ClickInstall from "../../assets/1-click-gatsby-cloud.svg";
import WebinyWindow from "../../assets/window-webiny.svg";

export const title = "Next.js";
const description = "Gatsby is a React-based open source framework for creating websites.";
const introduction =
  "Building a dynamic, content-heavy site with <strong>Next.js</strong> and <strong>Webiny</strong> is easy to build, simple to use, secure and scalable.";
export const whyThisTech =
  "<p>Next.js is a React framework that lets you build hybrid static and server rendered applications with smart bundling, route pre-fetching, and TypeScript support built-in.</p>";
const integrationCopy =
  "<span className=hilightText>You can easily build a dynamic, content-heavy site with Gatsby and use Webiny</span> to decouple engineering needs from your marketing team using a highly-scalable, fault-tolerant Serverless service that scales in and out in seconds. Use a single Webiny instance to manage content for an unlimited number of websites. All under one tenant in your own security perimeter.";
const techBenefits = [
  "Combines static-site generation, deferred static generation, and intelligent page rendering",
  "Unified data layer that enables developers to easily combine data from different sources and render them alongside each other.",
  "Deploy and host on Content Delivery Networks, delivering content to visitors faster than traditional servers",
  "Statically generated sites have fewer vulnerabilities than traditional websites and monolithic platforms.",
];

const NextJS = ({ data }) => {
  const hasOnlyOneArticle = data.allMdx.edges.length === 1
  const [copyButtonState, setCopyButtonState] = useState(false);
  return (
    <BaseLayout title={`${title} CMS`} description={description} fixedHeader={false} image={featuredImage}>
      <Article>
        <HeroWhyContainer>
          <HeaderContainer>
            <h1>
              Integrate {title} with <span className="hilightText">Webiny Headless CMS</span>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: introduction }} />
          </HeaderContainer>
        </HeroWhyContainer>
        <BlogContainer>
          <h3>
            <span className="hilightText">Why</span> {title}?
          </h3>
          <div className="why why-tech">
            <div className="content" dangerouslySetInnerHTML={{ __html: whyThisTech }} />
            <img src={logo} alt={`Stylized ${title} logo`} />
          </div>
          <div className="why why-webiny">
            <div className="content">
              <h3>
                <span className="hilightText">Why</span> Webiny?
              </h3>
              <p>
                <span className="hilightText">Webiny Headless CMS</span> contains everything an
                enterprise needs to build, manage and deliver content at scale.
              </p>
              <p>
                Webiny doesn't just manage your content, it also allows you to manage all of your
                projects centrally using built-in internationalization and multi-site features, and
                use advanced processes that support organization-wide collaboration.
              </p>
            </div>
            <img src={WebinyWindow} alt="Stylized Webiny logo" />
          </div>
          <h2>
            <span className="hilightText">{title} + Webiny</span> integration
          </h2>
          <p dangerouslySetInnerHTML={{ __html: integrationCopy }} />
          <div className="benefits">
            <div className="col1">
              <h3>
                {title} <span className="hilightText">Benefits</span>
              </h3>
              <ul>
                {techBenefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="col2">
              <h3>
                Webiny Headless CMS <span className="hilightText">Benefits</span>
              </h3>
              <ul>
                <li>Keep your data in your cloud, under your own security perimeter</li>
                <li>
                  Unlock greater performance by storing and delivering content closer to your users
                </li>
                <li>
                  Webiny runs on highly-scalable fault-tolerant serverless services that scale in
                  and out in seconds
                </li>
                <li>
                  Marketing teams have full control to create and manage content, landing pages,
                  files, and forms across multiple web properties
                </li>
                <li>
                  Webiny is open source, released under an MIT license, and architected for
                  extensibility
                </li>
              </ul>
            </div>
          </div>
        </BlogContainer>
        <div className="body">
        <BlogContainer>
          <h2>
            Building a Frontend With <span className="hilightText">{title}</span>
          </h2>
          <p className="lead">
            Learn how to build a frontend for Webiny Headless CMS with Next.JS starter.{" "}
          </p>
          <div className="step">
            <img src={Step1} alt="Step 1" className="step-icon" />
            <div className="content">
              <span className="hilightText">
                <h4>Install and Deploy Webiny</h4>
              </span>
              <p>
                Skip this step if you already have Webiny installed and deployed. Be sure to check
                out the{" "}
                <a href="https://www.webiny.com/docs/get-started/install-webiny#prerequisites">
                  prerequisites
                </a>{" "}
                for installing Webiny on your local machine.
              </p>
              <p>Then, create a new Webiny project by running the following command. If you get stuck or for more details,{" "}
                <a href="https://www.webiny.com/docs/get-started/install-webiny">
                  please see our documentation.
                </a>
              </p>
            </div>
            <div className="action">
              <CodeFieldBorder>
                    <CodeField>
                        <CodeFieldText>npx create-webiny-project my-webiny-project</CodeFieldText>
                        <ToolTip
                            onClick={() => {
                                setCopyButtonState(true);
                                setTimeout(() => setCopyButtonState(false), 2000);
                                navigator.clipboard.writeText(
                                    "npx create-webiny-project my-new-project",
                                );
                            }}
                            className={copyButtonState ? "stiky-tooltip" : ""}
                        >
                            <ToolTipText>{copyButtonState ? "Copied" : "Copy"}</ToolTipText>
                        </ToolTip>
                    </CodeField>
                </CodeFieldBorder>
            </div>
          </div>
          <div className="step">
            <img src={Step2} alt="Step 2" className="step-icon" />
            <div className="content">
              <span className="hilightText">
                <h4>Create a new Gatsby site</h4>
              </span>
              <p>
                Click on the button to deploy the project to Gatsby Cloud. Or follow the link to
                full instructions if you want to start locally.
              </p>
              <p>
                <a href="https://www.webiny.com/docs/headless-cms/integrations/gatsby">
                  Full instructions →
                </a>
              </p>
            </div>
            <div className="action">
              <a href="#">
                <img src={ClickInstall} alt="One click Gatsby install button" />
              </a>
            </div>
          </div>
        </BlogContainer>
        </div>
        {data.allMdx.edges.length > 0 && (
          <div className="postbody">
            <BlogContainer>
              <h2>
                Check out these tutorials on using<br/>
                <span className="hilightText">Webiny + {title}</span> on our blog
              </h2>
              {hasOnlyOneArticle ? (
                  <FeaturedBlog data={data.allMdx.edges[0].node.frontmatter} />
              ) : (
                <TutorialsGrid>
                  {data.allMdx.edges.map(({node}) => (
                  <BlogCard {...node.frontmatter} key={node.id} />
                ))}
                </TutorialsGrid>
              )}
            </BlogContainer>
          </div>
        )}
        <BlogContainer>
          <BookADemoContainer>
            <h2>Working on a larger project that requires a Headless CMS?</h2>
            <Button type="purple" link="https://site.webiny.com/forms/product-demo/">Book a Demo</Button>
          </BookADemoContainer>
        </BlogContainer>
      </Article>
      <BlogContainer>
        <h2>Other <span className="hilightText">Integrations</span></h2>
        <IntegrationsGrid>
            <Tile>
              <img src={NextJSLogo} alt="Next logo" />
              <div className="content">
                <h3>{title}</h3>
                <div dangerouslySetInnerHTML={{ __html: whyThisTech }}/>
                <TileLink href="/tech-integration/next-cms">Discover more &rarr;</TileLink>
              </div>
            </Tile>
            <Tile>
              <img src={GatsbyLogo} alt="Gatsby logo" />
              <div className="content">
                <h3>{GatsbyTitle}</h3>
                <div dangerouslySetInnerHTML={{ __html: GatsbyIntro }}/>
                <TileLink href="/tech-integration/next-cms">Discover more &rarr;</TileLink>
              </div>
            </Tile>
          </IntegrationsGrid>
      </BlogContainer>
    </BaseLayout>
  );
};

export default NextJS;

export const pageQuery = graphql`
  query TechNextQuery {
      allMdx(filter: {frontmatter: {tech: {in: "nextjs"}}}) {
        edges {
          node {
            id
            frontmatter {
              author
              description
              slug
              title
              featureImage {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
          }
        }
      }
    }
  }
`;
