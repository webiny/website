import React from 'react';
import {graphql, Link} from 'gatsby';
import BaseLayout from '../layouts/base';
import styled from 'react-emotion';
import {css} from 'emotion';
import theme from '../components/utils/theme';
import mq from '../components/utils/breakpoints';

import AuthorCard from './components/AuthorCard';
import NewsletterFooter from './components/NewsletterFooter';

/*
TODO:
- add social media tags [done]

*/

const BlogContainer = styled ('div') (
  {
    maxWidth: 960,
  },
  mq ({
    margin: [25, '0 auto 100px auto'],
    width: ['auto', '100%'],
    img: {
      width: ['100%', 'auto'],
      boxSizing: ['border-box', 'border-box'],
      maxWidth: ['100vw', '100%'],
    },
  })
);

const BlogHeader = styled ('div') ({
  width: '100%',
  maxWidth: 1200,
  marginTop: 25,
  margin: '0 auto',
  '.blog-header-inner': {
    width: '100%',
    marginTop: 25,
    a: {
      textDecoration: 'none',
      color: theme.color.primaryDark,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});

const blogStyles = css (
  {
    'h1, h2, h3, p, i, a': {
      color: 'rgba(0, 0, 0, 0.84)',
      textRendering: 'optimizeLegibility',
    },
    h1: {
      fontSize: '4em',
      fontWeight: theme.fontWeight.bold,
      textAlign: 'center',
      margin: '75px 0 50px 0',
      lineHeight: '1em',
    },
    h2: {
      fontSize: '2.3em',
      fontWeight: theme.fontWeight.semiBold,
    },
    h3: {
      fontSize: '2em',
      fontWeight: theme.fontWeight.semiBold,
    },
    h4: {
      fontSize: '1.8em',
      fontWeight: theme.fontWeight.semiBold,
    },
    p: {
      lineHeight: '165%',
      fontSize: '1.2em',
    },
    a: {
      textDecoration: 'underline',
      color: theme.color.primaryDark,
      '&:hover': {
        textDecoration: 'none',
      },
    },
    img: {
      margin: '0 auto',
      display: 'block',
    },
    iframe: {
      margin: '0 auto',
      display: 'block',
    },
    hr: {
      display: 'block',
      unicodeBidi: 'isolate',
      marginBlockStart: '0.5em',
      marginBlockEnd: '0.5em',
      marginInlineStart: 'auto',
      marginInlineEnd: 'auto',
      overflow: 'hidden',
      borderStyle: 'inset',
      borderWidth: '1px',
      margin: '50px auto',
      width: '90%',
      borderTop: 'none',
      boxShadow: 'none',
    },
    blockquote: {
      fontSize: '1.2em',
      fontStyle: 'italic',
      letterSpacing: '-0.36px',
      lineHeight: '1.4em',
      overflowWrap: 'break-word',
      margin: '55px 0 33px 0',
      color: 'rgba(0, 0, 0, 0.68)',
      padding: '0 0 0 50px',
      borderLeft: '10px solid #ccc',
      '&:before': {
        color: '#ccc',
        content: 'open-quote',
        fontSize: '4em',
        lineHeight: '0.1em',
        marginRight: '0.25em',
        verticalAlign: '-0.4em',
      },
    },
    code: {
      fontSize: '1em',
      background: 'rgba(0,0,0,.05)',
      borderRadius: '2px',
      padding: '3px 5px',
    },
  },
  mq ({
    fontSize: [14, 18],
  })
);

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {markdownRemark} = data; // data.markdownRemark holds your post data
  const {frontmatter, html} = markdownRemark;

  // handle image transformation exceptions
  let featureImage = frontmatter.featureImage.publicURL;
  if (frontmatter.featureImage.childImageSharp !== null) {
    featureImage = frontmatter.featureImage.childImageSharp.fluid.src;
  }

  return (
    <BaseLayout
      title={frontmatter.title}
      description={frontmatter.description}
      fixedHeader={false}
      image={featureImage}
    >
      <div className={blogStyles}>
        <BlogHeader>
          <div className="blog-header-inner">
            <Link to="/blog">← blog</Link>
          </div>
          <h1>{frontmatter.title}</h1>
          <AuthorCard
            author={frontmatter.author}
            publishedDate={frontmatter.date}
          />
        </BlogHeader>
        <BlogContainer>
          <div className="blog-post">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{__html: html}}
            />
          </div>
        </BlogContainer>
        <NewsletterFooter />
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
        description
        date(formatString: "MMMM DD, YYYY")
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
`;
