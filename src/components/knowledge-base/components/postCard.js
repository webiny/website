import { FeaturedBlogWrapper } from "../../blog/blog-styles";
import Img from "gatsby-image";
import React from "react";
import styled from "react-emotion";
// assets
import { navigate } from "gatsby";
import mq from "../../utils/breakpoints";
import theme from "../../utils/theme";

const PostCardWrapper = styled(FeaturedBlogWrapper)(
    {
        "& .text-container": {
            "& .author-wrapper": {
                "& .author__details": {
                    paddingLeft: 0,
                },
            },
        },
    },
    mq({
        "& .text-container": {
            "& .title": {
                fontSize: [theme.fontSize["3xl"], "2.5rem"],
            },
        },
    }),
);

export default ({ data }) => {
    // handle image transformation exceptions
    let FeatureImage = <img src={data.featureImage.publicURL} alt={data.title} />;
    if (data.featureImage.childImageSharp !== null) {
        FeatureImage = <Img fluid={data.featureImage.childImageSharp.fluid} alt={data.title} />;
    }

    return (
        <PostCardWrapper
            onClick={() => {
                navigate("/" + data.slug);
            }}
        >
            <div className={"media-container"}>{FeatureImage}</div>
            <div className={"text-container"}>
                <h2 className={"title"}>{data.title}</h2>
                <p className={"description"}>{data.description}</p>
                <div className={"author-wrapper"}>
                    <div className={"author__details"}>
                        <div>
                            <span className={"published"}>{data.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </PostCardWrapper>
    );
};
