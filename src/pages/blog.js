import React from 'react';
import {graphql, Link} from 'gatsby';

import BaseLayout from '../layouts/base';

const postCard = post => {
  // handle image transformation exceptions
  let featureImage = post.featureImage.publicURL;
  if (post.featureImage.childImageSharp !== null) {
    featureImage = post.featureImage.childImageSharp.fluid.src;
  }

  return (
    <div key={post.slug}>
      <img src={featureImage} />
      <h3>
        <Link to={'/' + post.slug}>{post.title}</Link>
      </h3>
      {post.description}<br />
      {post.author}
    </div>
  );
};

export default data => {
  const blogPosts = data.data.allMarkdownRemark.edges;

  return (
    <BaseLayout title="Webiny Serverless Blog">
      <div>
        {blogPosts.map (node => {
          return postCard (node.node.frontmatter);
        })}
      </div>
    </BaseLayout>
  );
};

export const listBlogsQuery = graphql`
query MyQuery {
    allMarkdownRemark (limit: 1000) {
      edges {
        node {
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
