import React from "react";
import { graphql, Link } from "gatsby";
import styled from "react-emotion";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import RoundCheck from "../../assets/round-check.svg"

import theme from "../../components/utils/theme";
import mq from "../../components/utils/breakpoints";
import backgroundImg from "../../assets/why-webiny/hero-section.svg";
import bgSwish from "./assets/bg-swish.svg"

import ExternalLink from "../../components/utils/ExternalLink";
import BaseLayout from "../../layouts/base";

const shortcodes = { ExternalLink };

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
    }),
);

const Article = styled.article`
    .hilightText {
        color: ${theme.color.primaryDark};
    }
    .heading-link-anchor {
        display: none;
    }
    h1,
    h2 {
        font-weight: bold;
        font-size: 36px;
    }
    p,
    li {
        font-size: 20px;
    }
    ul {
        text-align: left;
    }
    ul > li {
        padding-inline-start: 16px;
        margin-block-end: 16px;

        ::marker {
            margin-block-start: 5px;
            content: url(${RoundCheck});
        }
    }
    .body {
        background: 
            url(${bgSwish}),
            linear-gradient(
                180.16deg,
                #190930 10.29%,
                #311C57 33.91%
            )
        ;
        background-repeat: no-repeat;
        background-size: cover;
        color: white;
        padding: 40px 0;

        .hilightText {
            color: ${theme.color.lightGreen};
        }
        a {
            color: ${theme.color.white};
            text-decoration: underline;
            text-decoration-skip-ink: auto;
        }
        code {
            margin-bottom: 25px;
        }
        .step-icon {
            max-width: 75px;
        }
    }
`

const BlogContainer = styled("div")(
    {
        maxWidth: 960,
    },
    mq({
        margin: [25, "25px auto 100px auto"],
        width: ["auto", "100%"],
        textAlign: ["center", "center", "left"],
        img: {
            width: ["100%", "auto"],
            boxSizing: ["border-box", "border-box"],
            maxWidth: ["100vw", "100%"],
        },
    }),
);

export default function Template({
  data,
}) {
  const {
      mdx: { frontmatter, body },
  } = data;

  const { title, introduction, whyThisTech, integrationCopy, techBenefits } = frontmatter

  // handle image transformation exceptions
  let featureImage = frontmatter.featuredImage.publicURL;
  if (frontmatter.featuredImage.childImageSharp !== null) {
      featureImage = frontmatter.featuredImage.childImageSharp.fluid.src;
  }

  return (
    <BaseLayout
        title={frontmatter.title}
        description={frontmatter.description}
        fixedHeader={false}
        image={featureImage}
    >
        <Article>
            <HeroWhyContainer>
                <BlogContainer>
                    <h1>Integrate { title } with <span className="hilightText">Webiny Headless CMS</span></h1>
                    <p dangerouslySetInnerHTML={{ __html: introduction }}/>
                </BlogContainer>
            </HeroWhyContainer>
            <BlogContainer>
                <h2><span className="hilightText">Why</span> {title}?</h2>
                <div dangerouslySetInnerHTML={{ __html: whyThisTech }}/>
                <h2><span className="hilightText">Why</span> Webiny?</h2>
                <p><span className="hilightText">Webiny Headless CMS</span> contains everything an enterprise needs to build, manage and deliver content at scale.</p>
                <p>Webiny doesn't just manage your content, it also allows you to manage all of your projects centrally using built-in internationalization and multi-site features, and use advanced processes that support organization-wide collaboration.</p>
                <h2><span className="hilightText">{title} + Webiny</span> integration</h2>
                <p dangerouslySetInnerHTML={{ __html: integrationCopy }} />
                <h2>{title} <span className="hilightText">Benefits</span></h2>
                <ul>{techBenefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                ))}</ul>
                <h2>Webiny Headless CMS <span class="hilightText">Benefits</span></h2>
                <ul>
                    <li>Keep your data in your cloud, under your own security perimeter</li>
                    <li>Unlock greater performance by storing and delivering content closer to your users</li>
                    <li>Webiny runs on highly-scalable fault-tolerant serverless services that scale in and out in seconds</li>
                    <li>Marketing teams have full control to create and manage content, landing pages, files, and forms across multiple web properties</li>
                    <li>Webiny is open source, released under an MIT license, and architected for extensibility</li>
                </ul>
                </BlogContainer>
                <div className="body">
                    <BlogContainer>
                        <MDXProvider components={shortcodes}>
                            <MDXRenderer>{body}</MDXRenderer>
                        </MDXProvider>
                    </BlogContainer>
                </div>
        </Article>
    </BaseLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
      mdx(frontmatter: { slug: { eq: $slug } })  {
          body
          frontmatter {
              title
              slug
              featuredImage {
                  publicURL
                  childImageSharp {
                      fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              logo {
                publicURL
                  childImageSharp {
                      fluid(maxWidth: 800) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
              description
              introduction
              integrationCopy
              techBenefits
              whyThisTech
          }
      }
  }
`;