import React, { useState } from "react";
import { graphql } from "gatsby";
import GatsbyLink from "gatsby-link";

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
  OtherIntegrationsTitle,
  Hr,
  OtherIntegrationsContainer,
} from '../../components/tech-integration/TechIntegration.styled'
import {
  ToolTip,
  ToolTipText,
  CodeFieldText } from "../../components/new-homepage/hero-section/hero.styled"
  import BlogCard from "../../components/blog/components/blog-card"
  import FeaturedBlog from "../../components/blog/components/featured-blog"
  import Button from "../../components/ui/button"

import { 
  description as NextJSIntro,
  title as NextJSTitle
 } from "./nextjs-cms"
import { 
  description as GatsbyIntro,
  title as GatsbyTitle
 } from "./gatsby-cms"
 import { 
  description as VueJSIntro,
  title as VueJSTitle
 } from "./vuejs-cms"
 import { 
  description as FlutterIntro,
  title as FlutterTitle
} from "./flutter-cms"

import FlutterLogo from "../../assets/flutter-logotype.svg"
import VueJSLogo from "../../assets/vuejs-logotype.svg"
import NextJSLogo from "../../assets/nextjs.svg"
import GatsbyLogo from "../../assets/gatsby.svg"
import featuredImage from "../../assets/webiny-plus-gatsby.png";
import logo from "../../assets/window-gatsby.svg";
import Step1 from "../../assets/step-1.svg";
import Step2 from "../../assets/step-2.svg";
import Step3 from "../../assets/step-3.svg";
import WebinyWindow from "../../assets/window-webiny.svg";

export const title = "React";
export const description = "Gatsby integrates different content, APIs and services seamlessly into one experience.";
export const introduction =
  "Building user interfaces with <strong>React</strong> using <strong>Webiny</strong> as a data source using our GraphQL APIs makes for a declarative, clean and efficient codebase.";
const whyThisTech =
  "<p>React is so ubiquitous to the frontend development scene these days that the technology hardly needs an introduction. React makes it easy to create interactive UIs. It does this by creating a representation of the DOM, called the Virtual DOM, and updating only the right components when your data changes.</p>";
const integrationCopy =
  "<span className=hilightText>You can easily build a dynamic site or complex application with React and use Webiny</span> to decouple engineering needs from your marketing team using a highly-scalable, fault-tolerant Serverless service that scales in and out in seconds. Use a single Webiny instance to manage content for an unlimited number of websites. All under one tenant in your own security perimeter.";
const techBenefits = [
  "Declaratively create interactive UIs",
  "Build encapsulated components that manage their own state",
  "Easily pass rich data through your app and keep state out of the DOM",
  "Also render your UI on the server using Node",
];

const GatsbyCMS = ({ data }) => {
  const hasOnlyOneArticle = data?.allMdx?.edges?.length === 1
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
          <div className="why why-tech">
            <div className="content">
              <h3>
                <span className="hilightText">Why</span> {title}?
              </h3>
              <div dangerouslySetInnerHTML={{ __html: whyThisTech }} />
            </div>
            <img src={logo} alt={`Stylized ${title} logo`} />
          </div>
          </BlogContainer>
          <Hr />
          <BlogContainer>
          <div className="why why-webiny">
            <div className="content">
              <h3>
                <span className="hilightText">Why</span> Webiny?
              </h3>
              <p>
              <GatsbyLink to="/enterprise-serverless-cms/headless-cms" className="hilightText">Webiny Headless CMS</GatsbyLink> contains everything an
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
            Learn how to build a frontend for Webiny Headless CMS using React.{" "}
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
                                    "npx create-webiny-project my-webiny-project",
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
                <h4>Create a new {title} site</h4>
              </span>
              <p>
                Run the following command to create a React application bootstrapped with Facebook's Create React App tool.
              </p>
              <p><a href="https://reactjs.org/docs/create-a-new-react-app.html">Visit the React documentation to find out more</a>.</p>
            </div>
            <div className="action">
              <CodeFieldBorder>
                        <CodeField>
                            <CodeFieldText>npx create-react-app my-react-app</CodeFieldText>
                            <ToolTip
                                onClick={() => {
                                    setCopyButtonState(true);
                                    setTimeout(() => setCopyButtonState(false), 2000);
                                    navigator.clipboard.writeText(
                                        "npx create-react-app my-react-app",
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
            <img src={Step3} alt="Step 3" className="step-icon" />
            <div className="content">
              <span className="hilightText">
                <h4>Add and Configure React Apollo</h4>
              </span>
              <p>
                Add Apollo Client and <a href="https://www.apollographql.com/docs/react/get-started/">follow the instructions in the docs</a> to configure it to connect to Webiny's GraphQL API using the API URL and your API Token.
              </p>
              <p>
                <a href="https://www.webiny.com/docs/headless-cms/basics/using-graphql-api">
                Webiny API instructions →
                </a>
              </p>
            </div>
            <div className="action">
              <CodeFieldBorder>
                      <CodeField>
                          <CodeFieldText>npm install @apollo/client graphql</CodeFieldText>
                          <ToolTip
                              onClick={() => {
                                  setCopyButtonState(true);
                                  setTimeout(() => setCopyButtonState(false), 2000);
                                  navigator.clipboard.writeText(
                                      "npm install @apollo/client graphql",
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
        <OtherIntegrationsContainer>
          <BlogContainer>
            <OtherIntegrationsTitle>Other <span className="hilightText">Integrations</span></OtherIntegrationsTitle>
            <p className="integrations-lead">Webiny also supports other frontend technologies.</p>
            <IntegrationsGrid>
                <Tile>
                  <img src={GatsbyLogo} alt="Gatsby logo" />
                  <div className="content">
                    <h3 className="tiletitle">{GatsbyTitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: GatsbyIntro }}/>
                    <TileLink to="/integrations/gatsby-cms">Discover more &rarr;</TileLink>
                  </div>
                </Tile>
                <Tile>
                  <img src={NextJSLogo} alt="Next.JS logo" />
                  <div className="content">
                    <h3 className="tiletitle">{NextJSTitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: NextJSIntro }}/>
                    <TileLink to="/integrations/nextjs-cms">Discover more &rarr;</TileLink>
                  </div>
                </Tile>
                <Tile>
                  <img src={VueJSLogo} alt="Vue logo" />
                  <div className="content">
                    <h3 className="tiletitle">{VueJSTitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: VueJSIntro }}/>
                    <TileLink to="/integrations/vuejs-cms">Discover more &rarr;</TileLink>
                  </div>
                </Tile>
                <Tile>
                  <img src={FlutterLogo} alt="Flutter logo" />
                  <div className="content">
                    <h3 className="tiletitle">{FlutterTitle}</h3>
                    <p dangerouslySetInnerHTML={{ __html: FlutterIntro }}/>
                    <TileLink to="/integrations/flutter-cms">Discover more &rarr;</TileLink>
                  </div>
                </Tile>
              </IntegrationsGrid>
          </BlogContainer>
        </OtherIntegrationsContainer>
      </Article>
    </BaseLayout>
  );
};

export default GatsbyCMS;

export const pageQuery = graphql`
  query TechReactQuery {
      allMdx(filter: {frontmatter: {tech: {in: "react"}}}) {
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
