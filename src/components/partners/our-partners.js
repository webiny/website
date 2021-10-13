import Button from "../ui/button";
import ContentContainer from "../ui/content-container";
import React from "react";
import arrowIcon from "./assets/arrow-default.svg";
import { css } from "emotion";
import mq from "../utils/breakpoints";
import startImg from "./assets/star.svg";
import styled from "react-emotion";
import theme from "../utils/theme";
import titleHightlightImage from "./assets/partner-highlight.svg";
import { OUR_PARTNERS_DATA } from "./our-partners-data";

const wrapperClass = css({
    position: "relative",
    paddingTop: 0,
    paddingBottom: 0,
});

const contentContainerClass = css(
    {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%"],
        paddingTop: [0, 80],
        paddingBottom: [0, 80],
        "&::before": {
            display: ["none", "block"],
            left: [0, "-10%", "-10%"],
        },
    }),
);

const visitSiteBtn = css(
    {
        maxWidth: 320,
        borderColor: "#ED4005 !important",
        color: "#ED4005 !important",

        "& img": {
            marginLeft: 15,
        },
    },
    mq({
        marginLeft: [0, "15px !important"],
    }),
);

const Feature = styled("div")(
    {
        width: "100%",
        display: "flex",
        alignItems: "center",
        position: "relative",
    },
    mq({
        flexDirection: ["column", "row"],
        paddingBottom: [2],
        "&:nth-child(odd)": {
            flexDirection: ["column", "row-reverse"],
        },
    }),
);

const FeatureImagePart = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    mq({
        width: [320, "50%"],
        maxWidth: [600, "none"],
        padding: [0, "0px 45px"],
        marginBottom: [30, 0],
    }),
);

const FeatureImageInner = styled("div")(
    {
        position: "relative",
        margin: "0 auto",
        boxShadow: "rgba(100,100,100,0.24) 2px 3px 15px",
        height: 130,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 8,
        boxSizing: "border-box",
        img: {
            maxWidth: "100%",
            height: "auto",
            maxHeight: "100px",
            objectFit: "contain",
        },
    },
    mq({
        maxWidth: ["auto", 350],
        minWidth: ["auto", "65%"],
        padding: ["30px", 30],
        width: ["100%", "auto"],
    }),
);

const FeatureInfo = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",

        "& .location": {
            color: "#4F4F4F",
            fontSize: 15,
        },

        "& .description": {
            cololr: "#000E1A",
            fontSize: 20,
        },
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: [600, "none"],
        padding: ["0px 30px", "0px 45px"],
        marginBottom: [30, 0],

        "& h3": {
            marginTop: [0, "0.7em"],
        },

        "&.border-right": {
            borderRight: ["none", "2px dashed #FA5A28"],
        },

        "&.border-left": {
            borderLeft: ["none", "2px dashed #FA5A28"],
        },
    }),
);

const RoundDot = styled("div")(
    {
        position: "absolute",
        width: 15,
        height: 15,
        backgroundColor: theme.color.white,
        border: "2px solid #FA5A28",
        borderRadius: 30,

        "&.right": {
            right: -10,
        },

        "&.left": {
            left: -11,
        },
    },
    mq({
        display: ["none", "block"],
    }),
);

const TopBorder = styled("div")(
    {
        width: 30,
        position: "absolute",
        border: "1px solid #FA5A28",
        top: 0,
        left: -17,
    },
    mq({
        display: ["none", "block"],
    }),
);

const Wrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
        marginBottom: [60],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 807,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        margin: "60px 0px 0px",
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
        fontSize: [40, theme.fontSize["5xl"]],
    }),
);

const ButtonGroup = styled("div")(
    {
        display: "flex",
        marginBottom: 30,

        "& a": {
            width: "200px !important",
        },
    },
    mq({
        flexDirection: ["column", "row"],
        alignItems: ["center", "flex-start"],
        justifyContent: ["center", "flex-start"],

        "& a:first-child": {
            marginBottom: [10, 0],
        },
    }),
);

const BottomMark = styled("div")(
    {
        position: "absolute",
        bottom: -90,
        padding: 10,
        borderRadius: 50,
        border: "2px dashed #FA5A28",
        left: -47,
        width: 65,
        height: 65,

        "& .inner": {
            width: 65,
            height: 65,
            backgroundColor: "#FA5A28",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,

            "& img": {
                width: 35,
            },
        },
        "&.right": {
            right: -45,
            left: "auto",
        },

        "&.left": {
            left: -45,
            right: "auto",
        },
    },
    mq({
        display: ["none", "block"],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + titleHightlightImage + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const sortAlphabetically = (a, b) => {
    return a.name.localeCompare(b.name, "en", { sensitivity: "base", ignorePunctuation: true });
};

const ServerLessAdvantage = () => {
    return (
        <section className={wrapperClass}>
            <ContentContainer className={contentContainerClass}>
                <Wrapper>
                    <Title>
                        Our <TitleHighlight>partners</TitleHighlight>
                    </Title>
                </Wrapper>
                {OUR_PARTNERS_DATA.sort(sortAlphabetically).map((partner, index) => (
                    <Feature key={index}>
                        <FeatureImagePart>
                            <FeatureImageInner>
                                <img src={partner.image} alt="partner iamge" />
                            </FeatureImageInner>
                        </FeatureImagePart>
                        <FeatureInfo className={index % 2 ? "border-right" : "border-left"}>
                            {index === 0 && <TopBorder />}
                            <h3>{partner.name}</h3>
                            <p className="location">{partner.location}</p>
                            <p className="description">{partner.description}</p>
                            <ButtonGroup>
                                <Button type="primary" link={"mailto:partners@webiny.com"}>
                                    Contact this Partner
                                </Button>
                                <Button
                                    link={partner.website}
                                    target="_blank"
                                    type="outline"
                                    className={visitSiteBtn}
                                >
                                    Visit Website <img src={arrowIcon} alt="" className="icon" />
                                </Button>
                            </ButtonGroup>
                            <RoundDot className={index % 2 ? "right" : "left"} />
                            {index === OUR_PARTNERS_DATA.length - 1 && (
                                <BottomMark className={index % 2 ? "right" : "left"}>
                                    <div className="inner">
                                        <img src={startImg} alt="" />
                                    </div>
                                </BottomMark>
                            )}
                        </FeatureInfo>
                    </Feature>
                ))}
            </ContentContainer>
        </section>
    );
};

export default ServerLessAdvantage;
