import React from 'react';
import {graphql, Link} from 'gatsby';

import BaseLayout from '../layouts/base';

const postCard = post => {
  return (
    <div key={post.slug}>
      <img src={post.featureImage.publicURL} />
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
            featureImage{
                publicURL
              }
          }
        }
      }
    }
  }
`;
