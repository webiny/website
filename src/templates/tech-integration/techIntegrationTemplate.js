import React from "react";
import { graphql, Link } from "gatsby";
import styled from "react-emotion";
import { css } from "emotion";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
//   const {
//       mdx: { frontmatter, body },
//   } = data; // data.markdownRemark holds your post data

//   // handle image transformation exceptions
//   let featureImage = frontmatter.featureImage.publicURL;
//   if (frontmatter.featureImage.childImageSharp !== null) {
//       featureImage = frontmatter.featureImage.childImageSharp.fluid.src;
//   }
  
  console.log(data)

  return (
      <div>template</div>
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