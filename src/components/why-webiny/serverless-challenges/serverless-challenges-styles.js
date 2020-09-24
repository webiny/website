import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import { css } from "emotion";

import rectangleBg from "./assets/challenges-bg.svg";

export const WhyServerlessSection = styled("section")(
    {
        backgroundColor: theme.color.white,
    },
    mq({
        padding: ["0px 15px 110px", "0px 24px"],
        "@media (min-width: 1460px)": {
            paddingTop: 0,
        },
    }),
);

export const whyServerlessContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        padding: ["220px 0px 0px", "185px 0px"],
    }),
);

export const Title = styled("h1")(
    {
        position: "relative",
        maxWidth: 900,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.dark,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 24,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

export const TitleHighlight = styled("span")({
    backgroundImage: "url(" + rectangleBg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

export const SubTitle = styled("h3")(
    {
        fontSize: theme.fontSize.lg,
        fontWeight: theme.fontWeight.regular,
        lineHeight: "34px",
        marginTop: 0,
        marginBottom: 90,
        color: theme.color.dark,
        textAlign: "center",
        letterSpacing: "0.1px",
        "& span": {
            color: theme.color.purple,
            fontWeight: theme.fontWeight.bold,
        },
    },
    mq({
        maxWidth: [337, 856],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

export const SliderWrapper = styled("div")(
    {
        display: "flex",
        maxWidth: 1080,
        margin: "0 auto",

        ".fade-enter": {
            opacity: 0,
        },
        ".fade-enter.fade-enter-active": {
            opacity: 1,
            transition: "opacity 200ms ease-in",
            transitionDelay: "200ms",
        },
        ".fade-exit": {
            opacity: 1,
        },
        ".fade-exit.fade-exit-active": {
            opacity: 0,
            transition: "opacity 200ms ease-in",
        },
        ".fade-exit-done": {
            opacity: 0,
        },
    },
    mq({
        width: ["100%", "100%"],
        display: ["none", "flex"],
        flexDirection: ["column-reverse", "row"],
    }),
);

export const containerClass = css(
    {
        position: "relative",
        width: "100%",
        maxWidth: 820,
        borderRadius: 6,
        backgroundColor: theme.color.white,
        boxShadow: "rgba(100, 100, 100, 0.24) 2px 3px 15px",
    },
    mq({
        height: [600, 379],
        borderRight: ["none", `8px solid ${theme.color.primaryDark}`],
        borderTop: [`8px solid ${theme.color.primaryDark}`, "none"],
    }),
);

export const LeftSliderWrapper = styled("div")(
    {
        position: "absolute",
        display: "flex",

        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
    },
    mq({
        flexDirection: ["column", "row"],
        padding: ["24px", "24px 36px"],
    }),
);

export const RightSliderWrapper = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
    },
    mq({
        flexDirection: ["row", "column"],
    }),
);

export const TextContent = styled("div")({
    display: "flex",
    flexDirection: "column",
    maxWidth: 357,
    "& .title": {
        color: theme.color.black,
        fontSize: theme.fontSize["3xl"],
        fontWeight: theme.fontWeight.bold,
        marginBottom: 18,
    },
    "& .body": {
        color: theme.color.black,
        fontSize: theme.fontSize["base"],
        fontWeight: theme.fontWeight.regular,
        lineHeight: "150%",
    },
});

export const MediaContent = styled("div")(
    {
        "& img": {
            maxWidth: 254,
            maxHeight: 254,
        },
    },
    mq({
        display: ["flex", "block"],
        justifyContent: ["center"],
        marginTop: [24, 0],
    }),
);

export const SliderNav = styled("div")(
    {
        boxSizing: "border-box",
        width: 247,
        height: 50,
        padding: "13px 17px",
        marginBottom: 8,
        borderRadius: 8,
        marginLeft: -8,
        cursor: "pointer",

        display: "flex",
        alignItems: "center",

        backgroundColor: theme.color.gray100,
        color: theme.color.black,
        fontSize: theme.fontSize.lg,
        textAlign: "right",
        transition: "all 200ms ease-in",

        "&:last-child": {
            marginBottom: 0,
        },

        "&.active": {
            color: theme.color.white,
            backgroundColor: theme.color.primaryDark,
        },

        "& .icon": {
            justifyContent: "center",
            alignItems: "center",
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: theme.color.darkPurple,
            color: theme.color.white,
            textAlign: "center",
            fontWeight: theme.fontWeight.bold,
        },
    },
    mq({
        marginBottom: [0, 8],
        width: ["20%", 247],
        "& .icon": {
            display: ["flex", "none"],
        },
        "& span": {
            display: ["none", "inline-block"],
        },
        "&.active": {
            width: ["22%", 260],
            height: [50, 50],
        },
    }),
);

export const ContentWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

export const cardWrapperClass = css(
    {
        position: "relative",
        width: "95%",
        maxWidth: 820,
        borderRadius: 6,
        backgroundColor: theme.color.white,
        boxShadow: "rgba(100, 100, 100, 0.24) 2px 3px 15px",
    },
    mq({
        display: ["block", "none"],
        marginBottom: [30, 0],
        height: ["auto", 379],
        borderRight: ["none", `8px solid ${theme.color.primaryDark}`],
        borderTop: [`8px solid ${theme.color.primaryDark}`, "none"],
        "& .title": {
            marginTop: [0, "inherit"],
        },
    }),
);
