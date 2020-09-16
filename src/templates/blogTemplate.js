import React from 'react';
import {graphql} from 'gatsby';
import BaseLayout from '../layouts/base';

/*
TODO:
- add social media tags

*/

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {markdownRemark} = data; // data.markdownRemark holds your post data
  const {frontmatter, html} = markdownRemark;
  return (
    <BaseLayout
      title={frontmatter.title}
      description={frontmatter.description}
      fixedHeader={false}
    >
      <div className="blog-post-container">
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{__html: html}}
          />
        </div>
      </div>
    </BaseLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        slug
        title
      }
    }
  }
`;
