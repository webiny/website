import React from "react";
import { graphql, Link } from "gatsby";
import styled from "react-emotion";
import { css } from "emotion";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import ExternalLink from "../../components/utils/ExternalLink";
import BaseLayout from "../../layouts/base";

const shortcodes = { ExternalLink };

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {
      mdx: { frontmatter, body },
  } = data;

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
      <div className="techintegration">
            <div className="techintegration-content">
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
            </div>
        </div>
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
          }
      }
  }
`;