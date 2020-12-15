import CircleIcon from "../assets/circle.inline.svg";
import { FeaturedBlogWrapper } from "../blog-styles";
import Img from "gatsby-image";
import React from "react";
// assets
import authors from "./blogAuthors";
import { navigate } from "gatsby";

export default ({ data }) => {
    // handle image transformation exceptions
    let FeatureImage = <img src={data.featureImage.publicURL} alt={data.title} />;
    if (data.featureImage.childImageSharp !== null) {
        FeatureImage = <Img fluid={data.featureImage.childImageSharp.fluid} alt={data.title} />;
    }

    return (
        <FeaturedBlogWrapper
            onClick={() => {
                //window.open(data.slug, "_blank", "noopener noreferrer");
                navigate("/" + data.slug);
            }}
        >
            <div className={"media-container"}>{FeatureImage}</div>
            <div className={"text-container"}>
                <div className={"tags"}>
                    <span className={"tag"}>featured post</span>
                </div>
                <h2 className={"title"}>{data.title}</h2>
                <p className={"description"}>{data.description}</p>
                <div className={"author-wrapper"}>
                    <div className={"author__profile"}>
                        <img
                            className={"media"}
                            src={authors[data.author].avatar}
                            alt={authors[data.author].name}
                        />
                        <CircleIcon className={"icon"} />
                    </div>
                    <div className={"author__details"}>
                        <div>
                            <span className={"author__name"}>{authors[data.author].name}</span>
                        </div>
                        <div>
                            <span className={"published"}>{data.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </FeaturedBlogWrapper>
    );
};
