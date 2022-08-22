import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "emotion";
import videoBg from "./webiny-api/assets/video-bg.svg";

export const overviewContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        padding: ["75px 0px 0px", "85px 0px 0px"],
    }),
);

export const OverviewSectionWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
    }),
);

export const Title = styled("h1")(
    {
        position: "relative",
        maxWidth: 900,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 10,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

export const TitleHighlight = styled("span")({
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

export const SubTitle = styled("h3")(
    {
        fontSize: theme.fontSize["2xl"],
        fontWeight: theme.fontWeight.regular,
        lineHeight: "34px",
        marginTop: 0,
        marginBottom: 30,
        color: theme.color.black,
        textAlign: "center",
    },
    mq({
        maxWidth: [337, 870],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

export const ImageWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    position: "relative",
    marginTop: 60,
});

export const videoPreviewClass = css(
    {
        background: "url(" + videoBg + ")",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        margin: "0 auto",
        textAlign: "center",
        backgroundPosition: "bottom",
        iframe: {
            borderRadius: 5,
            boxShadow: "0 30px 60px -12px rgba(50,50,93,.25), 0 18px 36px -18px rgba(0,0,0,.3)",
            cursor: "pointer",
            transition: "opacity 0.3s",
            boxSizing: "border-box",
        },
    },
    mq({
        minHeight: ["auto", 570],
        iframe: {
            width: [350, 855, 855],
            height: [196, 480, 480],
        },
    }),
);

export const FeaturesWrapper = styled("div")(
    {
        display: "grid",
        gridTemplateRows: "repeat(1, 1fr)",

        width: "100%",
        position: "relative",
        margin: "150px 0px",
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
        gap: ["40px 75px", "40px", "40px 75px"],
    }),
);

export const FeatureCard = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative",
        backgroundColor: theme.color.white,
        borderRadius: 8,
        padding: "24px",
        textAlign: "center",

        "& .feature-card__img": {
            width: "100%",
            height: 160,
            maxWidth: 261,
        },

        "& .feature-card__title": {
            margin: "10px 0px 8px",
            maxWidth: 285,
            color: theme.color.black,
            fontSize: theme.fontSize.xl,
            fontWeight: theme.fontWeight.bold,
        },
        "& .feature-card__body": {
            margin: 0,
            color: theme.color.black,
            fontSize: theme.fontSize.base,
            fontWeight: theme.fontWeight.regular,
            "& a": {
                color: theme.color.primaryDark,
            },
        },
        "& .feature-card__connector": {
            position: "absolute",
            top: "-13%",
            zIndex: 1,
        },
    },
    mq({
        width: ["95%", "100%", 352],
        height: ["auto", 430],
        justifySelf: ["center"],

        "& .feature-card__connector": {
            display: ["none", "block"],
            width: ["auto", 400, "auto"],
        },
    }),
);
