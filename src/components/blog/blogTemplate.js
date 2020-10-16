import React from "react";
import { graphql, Link } from "gatsby";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import BaseLayout from "../../layouts/base";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import ExternalLink from "../utils/ExternalLink";
import AuthorCard from "./components/AuthorCard";
import NewsletterFooter from "./components/NewsletterFooter";

const shortcodes = { ExternalLink };

const BlogContainer = styled("div")(
    {
        maxWidth: 960,
    },
    mq({
        margin: [25, "25px auto 100px auto"],
        width: ["auto", "100%"],
        img: {
            width: ["100%", "auto"],
            boxSizing: ["border-box", "border-box"],
            maxWidth: ["100vw", "100%"],
        },
    }),
);

const BlogHeader = styled("div")({
    width: "100%",
    maxWidth: 1200,
    marginTop: 25,
    margin: "0 auto",
    ".blog-header-inner": {
        width: "100%",
        marginTop: 25,
        a: {
            textDecoration: "none",
            color: theme.color.primaryDark,
            "&:hover": {
                textDecoration: "underline",
            },
        },
    },
});

const blogStyles = css(
    {
        "h1, h2, h3, p, i, a": {
            color: "rgba(0, 0, 0, 0.84)",
            textRendering: "optimizeLegibility",
        },
        h1: {
            fontSize: "4em",
            fontWeight: theme.fontWeight.bold,
            textAlign: "center",
            margin: "75px 0 50px 0",
            lineHeight: "1em",
        },
        ".blog-post-content": {
            h2: {
                fontSize: "2.3em",
                fontWeight: theme.fontWeight.semiBold,
            },
            h3: {
                fontSize: "2em",
                fontWeight: theme.fontWeight.semiBold,
            },
            h4: {
                fontSize: "1.8em",
                fontWeight: theme.fontWeight.semiBold,
            },
            p: {
                lineHeight: "165%",
                fontSize: "1.2em",
            },
            a: {
                textDecoration: "underline",
                color: theme.color.primaryDark,
                "&:hover": {
                    textDecoration: "none",
                },
            },
            img: {
                margin: "0 auto",
                display: "block",
                backgroundColor: "white", //fixes the issue with transparent PNGs
                border: "1px solid rgb(230, 230, 230)",
                boxShadow: "rgba(230, 230, 230, 0.5) 0px 2px 4px 0px !important",
                padding: 10,
                borderRadius: 2,
            },
            iframe: {
                margin: "0 auto",
                display: "block",
            },
            hr: {
                display: "block",
                unicodeBidi: "isolate",
                marginBlockStart: "0.5em",
                marginBlockEnd: "0.5em",
                marginInlineStart: "auto",
                marginInlineEnd: "auto",
                overflow: "hidden",
                borderStyle: "inset",
                borderWidth: "1px",
                margin: "50px auto",
                width: "90%",
                borderTop: "none",
                boxShadow: "none",
            },
            "ol, ul": {
                li: {
                    lineHeight: "165%",
                    fontSize: "1.2em",
                    marginBottom: 15,
                    marginLeft: 30,
                },
            },
            blockquote: {
                fontSize: "1.2em",
                fontStyle: "italic",
                letterSpacing: "-0.36px",
                lineHeight: "1.4em",
                overflowWrap: "break-word",
                margin: "55px 0 33px 0",
                color: "rgba(0, 0, 0, 0.68)",
                padding: "0 0 0 50px",
                borderLeft: "10px solid #ccc",
                "&:before": {
                    color: "#ccc",
                    content: "open-quote",
                    fontSize: "4em",
                    lineHeight: "0.1em",
                    marginRight: "0.25em",
                    verticalAlign: "-0.4em",
                },
            },
            code: {
                fontSize: "0.9em",
                background: "rgba(0,0,0,.05)",
                borderRadius: "2px",
                padding: "3px 5px",
                whiteSpace: "pre-wrap",
            },
            pre: {
                fontSize: "0.9em",
                display: "block",
                whiteSpace: "pre",
                wordBreak: "break-word",
                background: "rgba(0,0,0,.05)",
                padding: 15,
                marginBottom: 25,
                code: {
                    backgroundColor: "transparent",
                },
            },
            ".twitter-tweet": {
                margin: "0 auto",
            },
        },
    },
    mq({
        fontSize: [14, 18],
    }),
);

const HorizontalLine = styled("div")({
    width: "100%",
    height: 1,
    marginTop: 32,
    marginBottom: 24,
    backgroundColor: theme.color.darkGray,
});

const TagList = styled("div")(
    {
        "& .tag": {
            boxSizing: "border-box",
            padding: "2px 10px",
            border: "1px solid #EAEAEA",
            backgroundColor: "#FAFAFC",
            textTransform: "uppercase",
            fontSize: 9,
            fontWeight: theme.fontWeight.semiBold,
            color: "#313097",
            marginRight: 8,
            marginBottom: 5,
            display: "inline-block",
            cursor: "pointer",
            transition: "transform 200ms ease-in",

            "&:hover": {
                transform: "translateY(-2px)",
            },
        },
    },
    mq({
        "& .text": {
            fontSize: [theme.fontSize.base, theme.fontSize.xl],
            display: ["block", "inline-block"],
            marginRight: [0, 16],
            marginBottom: [8, 0],
        },
        "& .tag": {
            fontSize: [9, 12],
            marginRight: [8, 12],
            letterSpacing: ["0", "0.025em"],
        },
    }),
);

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const {
        mdx: { frontmatter, body },
    } = data; // data.markdownRemark holds your post data

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
                    <AuthorCard author={frontmatter.author} publishedDate={frontmatter.date} />
                </BlogHeader>
                <BlogContainer>
                    <div className="blog-post">
                        <div className="blog-post-content">
                            <MDXProvider components={shortcodes}>
                                <MDXRenderer>{body}</MDXRenderer>
                            </MDXProvider>
                        </div>
                    </div>
                    <HorizontalLine />
                    <TagList>
                        <span className={"text"}>Find more articles on the topic of:</span>
                        {Array.isArray(frontmatter.tags) &&
                            frontmatter.tags.map((tag, index) => (
                                <Link
                                    key={index}
                                    className="tag"
                                    to={"/blog"}
                                    state={{ query: tag }}
                                >
                                    {tag}
                                </Link>
                            ))}
                    </TagList>
                </BlogContainer>
                <NewsletterFooter />
            </div>
        </BaseLayout>
    );
}

export const pageQuery = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
            body
            frontmatter {
                author
                slug
                title
                description
                tags
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
