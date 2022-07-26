import React from "react";
import styled from "react-emotion";
import mq from "../../utils/breakpoints";
import Img from "gatsby-image";

import { SubTitle, Title, Content, ArrowLinkWrapper, ArrowImage } from "./text-with-image.styled";

import arrow from "../../../assets/new-homepage/text-with-image/arrow.svg";

const TextWithImageWrapper = styled("div")(
    {
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#000E1A",

        "& .text-with-image-grid": {
            display: "grid",
            alignItems: "center",

            "& .image": {
                width: "100%",
                maxHeight: "500px",
                marginLeft: "auto",
                marginRight: "auto",
            },
        },
    },
    mq({
        paddingTop: ["40px", "40px", "80px"],
        paddingBottom: ["40px", "40px", "80px"],
        paddingLeft: ["16px", "16px", "124px"],
        paddingRight: ["16px", "16px", "124px"],

        "& .image": {
            maxWidth: ["310px", "310px", "650px"],
        },
        "& .text-with-image-grid": {
            "@media (max-width: 428px)": {
                gridTemplateAreas: [
                    `"image"
                    "content"`,
                    "none",
                ],
                gap: ["20px", "5px", "73px"],

                "& .image-container": {
                    gridArea: ["image", "auto"],
                },

                "& .content": {
                    gridArea: ["content", "auto"],
                },
            },
        },

        "& .left-image-grid": {
            "@media (max-width: 428px)": {
                gridTemplateColumns: "1fr",
            },
            gridTemplateColumns: [
                "minmax(200px, 370px) minmax(200px, 402px)",
                "auto 402px",
                "auto 467px",
            ],
        },

        "& .right-image-grid": {
            "@media (max-width: 428px)": {
                gridTemplateColumns: "1fr",
            },
            gridTemplateColumns: [
                "minmax(200px, 402px) minmax(200px, 370px)",
                "402px auto",
                "467px auto",
            ],
        },
    }),
);

const ArrowLink = ({ link, title }) => {
    return (
        <ArrowLinkWrapper target="_blank" href={link}>
            {title}
            <ArrowImage src={arrow} alt="arrow" />
        </ArrowLinkWrapper>
    );
};

const TextWithImage = ({
    image,
    subtitle,
    title,
    children,
    arrowLink,
    arrowTitle,
    isLeftImage,
}) => {
    return (
        <TextWithImageWrapper>
            {isLeftImage ? (
                <div className="text-with-image-grid left-image-grid">
                    <div className="image-container">
                        <Img
                            fluid={image}
                            className="image"
                            alt="text image"
                            imgStyle={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="content">
                        <SubTitle>{subtitle}</SubTitle>
                        <Title>{title}</Title>
                        <Content>{children}</Content>
                        <ArrowLink link={arrowLink} title={arrowTitle} />
                    </div>
                </div>
            ) : (
                <div className="text-with-image-grid right-image-grid">
                    <div className="content">
                        <SubTitle>{subtitle}</SubTitle>
                        <Title>{title}</Title>
                        <Content>{children}</Content>
                        <ArrowLink link={arrowLink} title={arrowTitle} />
                    </div>
                    <div className="image-container">
                        <Img
                            fluid={image}
                            className="image"
                            alt="text image"
                            imgStyle={{ objectFit: "contain" }}
                        />
                    </div>
                </div>
            )}
        </TextWithImageWrapper>
    );
};

export default TextWithImage;
