import React from 'react';
import {graphql} from 'gatsby';
import BaseLayout from '../layouts/base';
import styled from 'react-emotion';
import {css} from 'emotion';

/*
TODO:
- add social media tags

*/

const BlogContainer = styled ('div') ({
  margin: '0 auto',
  width: '100%',
  maxWidth: 800,
});

const blogStyles = css`
h1,
h2,
p,
i,
a,
.first-letter,
.authorName a {
  color: rgba(0, 0, 0, 0.84);
  text-rendering: optimizeLegibility;
}

h1 {
  font-size: 48px;
  text-align: left;
  margin-bottom: 8px;
}

h2 {
  font-size: 26px;
  font-weight: 700;
  padding: 0;
  margin: 56px 0 -13px -1.883px;
  text-align: left;
  line-height: 34.5px;
  letter-spacing: -0.45px;
}

p, i, a {
  margin-top: 21px;
  font-size: 21px;
  letter-spacing: -0.03px;
  line-height: 1.58;
}

a {
  text-decoration: underline;
}

blockquote {
  font-size: 30px;
  font-style: italic;
  letter-spacing: -0.36px;
  line-height: 44.4px;
  overflow-wrap: break-word;
  margin: 55px 0 33px 0;
  /* text-align: center; */
  color: rgba(0, 0, 0, 0.68);
  padding: 0 0 0 50px;
}

code {
  font-size: 18px;
  background: rgba(0,0,0,.05);
  border-radius: 2px;
  padding: 3px 5px;
}

mark, .highlighted {
  background: #7DFFB3;
}

.first-letter {
  overflow-wrap: break-word;
  font-size: 60px;
  line-height: 60px;
  display: block;
  position: relative;
  float: left;
  margin: 0px 7px 0 -5px;
}

.subtitle {
  color: rgba(0, 0, 0, 0.54);
  margin: 0 0 24px 0;
}
`;

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
      <BlogContainer className={blogStyles}>
        <h1>{frontmatter.title}</h1>
        <div className="blog-post">
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{__html: html}}
          />
        </div>
      </BlogContainer>
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
