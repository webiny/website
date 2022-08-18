import React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";
import { navigate, Link } from "gatsby";
// utils
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import authors from "./blogAuthors";

const BlogCardWrapper = styled("div")(
    {
        boxSizing: "border-box",
        position: "relative",
        background: theme.color.white,
        boxShadow: "0px 0px 10px rgba(100, 100, 100, 0.2)",
        margin: "0px auto",
        padding: 8,
        transition: "transform 250ms ease-in-out",
        cursor: "pointer",

        "&:hover": {
            transform: "translateY(-10px) scale(1.05)",
        },

        "& .banner-wrapper": {
            "& .banner": {
                position: "absolute",
                left: "calc(50% - 60px)",
                top: -20,
                boxSizing: "border-box",
                backgroundColor: "#DCD207",
                padding: "8px 12px",
                borderRadius: "100px",
                textTransform: "uppercase",
                fontSize: 10,
                color: theme.color.black,
                fontWeight: theme.fontWeight.semiBold,
            },
        },

        "& .media-wrapper": {
            "& .gatsby-image-wrapper": {
                width: "100%",
                height: "100%",
            },
            "& .media": {
                width: "100%",
                objectFit: "cover",
            },
        },
        "& .text-wrapper": {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px 12px 40px",

            "& .author-wrapper": {
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
                marginTop: -40,
                marginBottom: 10,

                fontSize: theme.fontSize.sm,
                fontWeight: theme.fontWeight.regular,
                color: theme.color.black,

                "& .author-wrapper__img": {
                    width: 73,
                    height: 73,
                },
                "& .author-wrapper__name": {
                    marginLeft: 8,
                    textTransform: "capitalize",
                },
            },
            "& .title": {
                fontSize: theme.fontSize.sm,
                fontWeight: theme.fontWeight.semiBold,
                color: theme.color.black,
                // color: "#004A89",
                marginBottom: 12,
            },
            "& .description": {
                fontSize: theme.fontSize.sm,
                fontWeight: theme.fontWeight.regular,
                color: theme.color.darkPurple,
                // color: "#004A89",
                marginBottom: 35,
            },
            "& .tags-wrapper": {
                position: "absolute",
                bottom: "15px",
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
                },
            },
        },
    },
    mq({
        width: ["90%", 326],
        minHeight: ["auto", 345],
    }),
);

const BlogCard = ({
    author,
    description,
    slug,
    title,
    featureImage,
    bannerText, // TODO: We'll see
    tags,
}) => {
    return (
        <BlogCardWrapper
            className={"card"}
            onClick={() => {
                //window.open(slug, "_blank", "noopener noreferrer");
                navigate("/" + slug);
            }}
        >
            {bannerText && (
                <div className="banner-wrapper">
                    <span className="banner">{bannerText}</span>
                </div>
            )}
            <div className="media-wrapper">
                {featureImage.childImageSharp && featureImage.childImageSharp.fluid ? (
                    <Img
                        fluid={featureImage.childImageSharp && featureImage.childImageSharp.fluid}
                        alt={featureImage.name}
                    />
                ) : (
                    <img className="media" src={featureImage.publicURL} alt={featureImage.name} />
                )}
            </div>
            <div className="text-wrapper">
                <div className="author-wrapper">
                    <img
                        src={authors[author].avatar}
                        alt={authors[author].name}
                        className="author-wrapper__img"
                    />
                    <span className="author-wrapper__name">{authors[author].name}</span>
                </div>
                <Link to={"/" + slug} className="title">
                    {title}
                </Link>
                <p className="description">{description}</p>
                <div className="tags-wrapper">
                    {Array.isArray(tags) &&
                        tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                </div>
            </div>
        </BlogCardWrapper>
    );
};

export default BlogCard;
