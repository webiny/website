import { FeaturedBlogWrapper } from "../blog-styles";
import Img from "gatsby-image";
import React from "react";
// assets
import AUTHOR_IMAGE from "../../../blogTemplates/assets/adrian.png";
import CircleIcon from "../assets/circle.inline.svg";

export default ({ data }) => {
    return (
        <FeaturedBlogWrapper
            onClick={() => {
                window.open(data.slug, "_blank", "noopener noreferrer");
            }}
        >
            <div className={"media-container"}>
                <Img fluid={data.featureImage.childImageSharp.fluid} />
            </div>
            <div className={"text-container"}>
                <h2 className={"title"}>{data.title}</h2>
                <p className={"description"}>{data.description}</p>
                <div className={"author-wrapper"}>
                    <div className={"author__profile"}>
                        <img className={"media"} src={AUTHOR_IMAGE} alt={data.author} />
                        <CircleIcon className={"icon"}/>
                    </div>
                    <div className={"author__details"}>
                        <div>
                            <span className={"author__name"}>{data.author}</span>
                        </div>
                        <div>
                            <span className={"published"}>4 Aug. 2018 </span>
                        </div>
                    </div>
                </div>
            </div>
        </FeaturedBlogWrapper>
    );
};
