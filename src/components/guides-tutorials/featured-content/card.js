import React from "react";
import styled from "react-emotion";
// utils
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";

const Card = styled("div")(
    {
        boxSizing: "border-box",
        position: "relative",
        background: theme.color.white,
        boxShadow: "0px 0px 10px rgba(100, 100, 100, 0.2)",
        margin: "0px auto",
        padding: 8,
        transition: "transform 250ms ease-in-out",

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
                fontWeight: theme.fontWeight.semiBold
            }
        },

        "& .media-wrapper": {
            "& .media": {
                width: "100%"
            }
        },
        "& .text-wrapper": {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px 12px 12px",

            "& .author-wrapper": {
                display: "flex",
                alignItems: "flex-end",
                marginTop: -40,
                marginBottom: 10,

                fontSize: theme.fontSize.sm,
                fontWeight: theme.fontWeight.regular,
                color: theme.color.black,

                "& .author-wrapper__img": {
                    width: 73,
                    height: 73
                },
                "& .author-wrapper__name": {
                    marginLeft: 8,
                    textTransform: "capitalize"
                }
            },
            "& .title": {
                fontSize: theme.fontSize.sm,
                fontWeight: theme.fontWeight.semiBold,
                color: "#004A89",
                marginBottom: 12
            },
            "& .tags-wrapper": {
                "& .tag": {
                    boxSizing: "border-box",
                    padding: "2px 10px",
                    border: "1px solid #EAEAEA",
                    backgroundColor: "#FAFAFC",
                    textTransform: "uppercase",
                    fontSize: 9,
                    fontWeight: theme.fontWeight.semiBold,
                    color: "#313097",
                    marginRight: 8
                }
            }
        }
    },
    mq({
        width: ["90%", 256],
        height: ["auto", 279]
    })
);

const ContentCard = ({ bannerText, imgSrc, imgAlt, authorImgSrc, authorName, title, tags }) => {
    return (
        <Card className={"card"}>
            {bannerText && (
                <div className="banner-wrapper">
                    <span className="banner">{bannerText}</span>
                </div>
            )}
            <div className="media-wrapper">
                <img className="media" src={imgSrc} alt={imgAlt} />
            </div>
            <div className="text-wrapper">
                <div className="author-wrapper">
                    <img src={authorImgSrc} alt={authorName} className="author-wrapper__img" />
                    <span className="author-wrapper__name">{authorName}</span>
                </div>
                <p className="title">{title}</p>
                <div className="tags-wrapper">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default ContentCard;
