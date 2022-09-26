import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "react-emotion";

import BaseLayout from "../../layouts/base";
import theme from "../../components/utils/theme";
import mq, { breakpoints } from "../../components/utils/breakpoints";
import {
  ToolTip,
  ToolTipText,
  CodeField,
  CodeFieldText,
  CodeFieldBorder } from "../../components/new-homepage/hero-section/hero.styled"
  import BlogCard from "../../components/blog/components/blog-card"
  import FeaturedBlog from "../../components/blog/components/featured-blog"
  import Button from "../../components/ui/button"

import RoundCheck from "../../assets/round-check.svg";
import backgroundImg from "../../assets/why-webiny/hero-section.svg";
import featuredImage from "../../assets/webiny-plus-gatsby.png";
import logo from "../../assets/window-gatsby.svg";
import Step1 from "../../assets/step-1.svg";
import Step2 from "../../assets/step-2.svg";
import ClickInstall from "../../assets/1-click-gatsby-cloud.svg";
import bgSwish from "../../assets/bg-swish.svg";
import WebinyWindow from "../../assets/window-webiny.svg";
import BookDemoBG from "../../assets/book-demo-bg.svg";

const Article = styled.article`
  .hilightText {
    color: ${theme.color.primaryDark};
  }
  .heading-link-anchor {
    display: none;
  }
  p,
  li {
    font-size: 20px;
  }
  .body {
    background: url(${bgSwish}), linear-gradient(180.16deg, #190930 10.29%, #311c57 33.91%);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    padding: 40px 0;

    .hilightText {
      color: ${theme.color.lightGreen};
    }
    a {
      color: ${theme.color.lightGreen};
      font-weight: bold;
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    }
    code {
      margin-bottom: 25px;
    }
    .step-icon {
      margin-top: 24px;
      max-width: 75px;
    }
    .lead {
      font-size: 24px;
    }
  }
  .benefits {
    ul {
      text-align: left;
      margin-inline-start: 20px;
    }
    ul > li {
      padding-inline-start: 16px;
      margin-block-end: 16px;

      ::marker {
        margin-block-start: 5px;
        content: url(${RoundCheck});
      }
    }
  }
  .step {
    text-align: center;

    img:not(.step-icon) {
      width: 20rem;
      border: 3px solid white;
      border-radius: 10px;
    }
  }
  @media (min-width: ${breakpoints[0]}px) {
    .why {
      display: flex;
      flex-direction: row;
      gap: 8rem;
      margin-bottom: 40px;

      & > * {
        flex: 1 1 0;
      }

      &.why-webiny {
        flex-direction: row-reverse;
      }
    }
    .benefits {
      display: flex;
      flex-direction: row;
      gap: 4rem;

      & > * {
        flex: 1 1 0;
      }
    }
    .step {
      display: flex;
      flex-direction: row;
      gap: 2rem;
      text-align: left;

      & > * {
        flex: 1 1 0;
      }
      & > *:not(:last-child) {
        align-self: flex-start;
      }
      & > *:last-child {
        align-self: center;
      }
    }
  }
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 25px;
  width: auto;
  text-align: left;

  deckgo-highlight-code: {
    border-radius: 28px;
    border: 16px solid rgba(255, 255, 255, 0.25);
    margin-bottom: "20px";
    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-font-size: 1.4em;
  }
  p {
    text-align: center;
  }
  h2,
  h3,
  h4 {
    font-weight: bold;
    text-align: center;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 36px;
  }
  h4 {
    font-size: 28px;
  }
  img {
    width: 100%;
  }
  .lead {
    text-align: left;
  }
  div[class*="FeaturedBlogWrapper"] {
    margin-top: 4rem;
  }

  @media (min-width: ${breakpoints[0]}px) {
    margin: 25px 15px 100px 15px;
    width: 100%;

    p {
      text-align: left;
    }
    h4 {
      font-size: 28px;
      text-align: left;
    }
    img {
      width: auto;
    }
    --deckgo-highlight-code-font-size: 1em;
  }
  @media (min-width: ${breakpoints[1]}px) {
    margin: 25px auto 100px auto;

    h2 {
      font-size: 48px;
    }
    h3 {
      font-size: 42px;
      text-align: left;
    }
    h4 {
      font-size: 28px;
    }
    img {
      width: 20rem;
    }
    .lead {
      text-align: center;
    }
  }
`;


const TutorialsGrid = styled.div`
  margin-block-start: 4rem;
  display: grid;
  gap: 2rem;

  @media (min-width: ${breakpoints[0]}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${breakpoints[1]}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const BookADemoContainer = styled.aside`
  background: url(${BookDemoBG}) no-repeat center center;
  padding: 4rem;
  align-items: center;

  > a {
    max-width: 220px;
    margin: 1rem auto 0 auto;
  }

  @media(min-width: ${breakpoints[1]}px) {
    display: flex;
    flex-direction: row;

    > a {
      margin: 0 auto;
    }
  > h2 {
      margin-top: unset;
      margin-block-end: unset;
      max-width: 60rem;
      text-align: left;
    }
  }
`

export const HeroWhyContainer = styled.div(
  {
    textAlign: "center",
    margin: "0 auto",
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    backgroundPosition: "bottom",
  },
  mq({
    backgroundSize: ["none", "none", "cover"],
    marginBottom: ["50px", "50px", "50px"],

    h1: {
      fontSize: ["36px", "46px", "56px"],
      fontWeight: "bold",
    },
    p: {
      fontSize: ["20px", "24px"],
    },
  }),
);

const HeaderContainer = styled("div")(
  {
    textAlign: "center",
  },
  mq({
    margin: ["100px auto", "140px auto"],
    width: ["auto", "100%"],
    maxWidth: [960, 960, 738],
    h2: {
      textAlign: ["center"],
      fontSize: ["36px", "36px", "48px"],
    },
    img: {
      width: ["100%", "auto"],
      boxSizing: ["border-box", "border-box"],
      maxWidth: ["100vw", "100%"],
    },
  }),
);

const title = "Gatsby";
const description = "Gatsby is a React-based open source framework for creating websites.";
const introduction =
  "Building a dynamic, content-heavy site with <strong>Gatsby</strong> and <strong>Webiny</strong> is easy to build, simple to use, secure and scalable.";
const whyThisTech =
  "<p>The world's top-performing teams use <span className=hilightText>Gatsby</span> to deliver dynamic web pages with performance and security that scales.</p><p>Build a fast, secure, and powerful website using a React-based open-source framework and integrate different content, APIs and services seamlessly into one experience.</p>";
const integrationCopy =
  "<span className=hilightText>You can easily build a dynamic, content-heavy site with Gatsby and use Webiny</span> to decouple engineering needs from your marketing team using a highly-scalable, fault-tolerant Serverless service that scales in and out in seconds. Use a single Webiny instance to manage content for an unlimited number of websites. All under one tenant in your own security perimeter.";
const techBenefits = [
  "Build rich web experiences by combining data from anywhere",
  "Utilize a rich ecosystem of plugins instead of building from scratch",
  "Query data in components",
  "Load images progressively by displaying a placeholder image before loading the full heavyweight asset",
  "Scale high traffic sites safely across the world",
  "Enable modern browsers to load the right size of image assets given the viewport size through responsive images",
];

const gatsby = ({ data }) => {
  console.log(data)
  const hasOnlyOneArticle = data.allMdx.edges.length === 1
  const [copyButtonState, setCopyButtonState] = useState(false);
  return (
    <BaseLayout title={title} description={description} fixedHeader={false} image={featuredImage}>
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
            Building a Frontend With <span className="hilightText">GatsbyJS</span>
          </h2>
          <p className="lead">
            Learn how to build a frontend for Webiny Headless CMS with Gatsby starter.{" "}
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
              <p>Then, create a new Webiny project by running</p>
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
              <p>
                If you get stuck or for more details,{" "}
                <a href="https://www.webiny.com/docs/get-started/install-webiny">
                  please see our documentation.
                </a>
              </p>
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
    </BaseLayout>
  );
};

export default gatsby;

export const pageQuery = graphql`
  query TechGatsbyQuery {
      allMdx(filter: {frontmatter: {tech: {in: "gatsby"}}}) {
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
