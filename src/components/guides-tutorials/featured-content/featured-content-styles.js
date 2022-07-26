import styled from "react-emotion";
import { css } from "emotion";
import mq from "../../utils/breakpoints";
import theme from "../../utils/theme";
// assets
import rectImg from "./assets/featured-rect.svg";
import chevron from "./assets/chevron.svg";

export const FeaturedContentSection = styled("section")(
    {
        width: "100%",
        boxSizing: "border-box",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        padding: "0px 15px",
        height: "100%",
    },
    mq({
        minHeight: ["auto", 404],
    }),
);

export const containerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        maxWidth: 1200,
        padding: "100px 0px",
    },
    mq({
        width: ["100%", "100%"],
        justifyContent: ["center", "space-between"],
    }),
);

export const Title = styled("h1")(
    {
        margin: "0px 0px 24px",

        color: theme.color.black,
        fontSize: theme.fontSize["4xl"],
        fontWeight: theme.fontWeight.semiBold,
        textAlign: "left",
    },
    mq({}),
);

export const TitleHighlight = styled("span")({
    backgroundImage: "url(" + rectImg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

export const TextContentWrapper = styled("div")(
    {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 40,
    },
    mq({}),
);

export const mediaWrapperClass = css(
    {
        display: "grid",
        width: "100%",

        ".fade-enter": {
            opacity: 0,
        },
        ".fade-enter.fade-enter-active": {
            opacity: 1,
            transition: "opacity 250ms ease-in",
        },
        ".fade-exit": {
            opacity: 1,
        },
        ".fade-exit.fade-exit-active": {
            opacity: 0,
            transition: "opacity 250ms ease-in",
        },
        ".fade-exit-done": {
            opacity: 0,
        },
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"],
        gridGap: ["40px 0px", "40px 44px", "40px 44px"],
    }),
);

export const SearchAndFilterWrapper = styled("div")(
    {
        boxSizing: "border-box",
        width: "100%",
        minHeight: 63,
        display: "flex",

        padding: 10,
        backgroundColor: theme.color.gray100,
    },
    mq({
        flexDirection: ["column", "row"],
        justifyContent: ["flex-start", "space-between"],
        marginBottom: [60],
    }),
);

export const SortBar = styled("div")(
    {
        boxSizing: "border-box",

        height: 44,
        backgroundColor: theme.color.white,

        "& .select-css": {
            display: "block",
            fontSize: theme.fontSize.sm,
            fontWeight: theme.fontWeight.regular,
            color: theme.color.black,
            lineHeight: "1.3",
            padding: 13,
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
            margin: "0",
            border: "none",
            "-moz-appearance": "none",
            "-webkit-appearance": "none",
            appearance: "none",
            backgroundColor: "#fff",
            backgroundImage: "url(" + chevron + ")",
            backgroundRepeat: "no-repeat, repeat",
            backgroundPosition: "right .7em top 50%, 0 0",
            backgroundSize: "1rem auto, 100%",
        },

        "& .select-css::-ms-expand": {
            display: "none",
        },

        "& .select-css:focus": {
            color: theme.color.dark,
            outline: "none",
        },

        "& .select-css option": {
            fontWeight: "normal",
        },
    },
    mq({
        width: ["100%", 287],
        marginBottom: [16, 0],
    }),
);

export const ResultInfo = styled("div")(
    {
        boxSizing: "border-box",
        height: 44,
        padding: 13,

        "& .text": {
            fontWeight: theme.fontWeight.regular,
            fontSize: theme.fontSize.base,
            color: theme.color.dark,

            "& span": {
                fontWeight: theme.fontWeight.bold,
            },
        },
    },
    mq({
        width: ["100%", 287],
        marginBottom: [16, 0],
    }),
);

export const SearchBar = styled("div")(
    {
        boxSizing: "border-box",
        height: 44,
        backgroundColor: theme.color.white,
        padding: 13,
        display: "flex",
        justifyContent: "space-between",

        "& input": {
            fontFamily: "Source Sans Pro",
            fontSize: theme.fontSize.sm,
            fontWeight: theme.fontWeight.regular,
            color: theme.color.black,
            border: "none",
            outline: "none",
            width: "100%",
        },

        "& input:focus~.icon": {
            "& path": {
                fill: theme.color.purple,
            },
        },
        "& .icon": {
            "& path": {
                fill: theme.color.black,
            },
        },
        "& .icon--close": {
            cursor: "pointer",
        },
    },
    mq({
        width: ["100%", 287],
    }),
);

export const ButtonWrapper = styled("div")({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 80,

    "& .button": {
        width: 192,
        border: "1px solid #EAEAEA",

        "& .icon": {
            marginLeft: 8,
        },
    },
});

export const NotFound = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        "& .not-found__text": {
            fontSize: theme.fontSize.lg,
            fontWeight: theme.fontWeight.semiBold,
            marginBottom: 24,
        },
        "& .not-found__img": {
            width: "100%",
            maxWidth: 128,
            marginBottom: 40,
        },
        "& .not-found__button": {},
    },
    mq({
        minHeight: ["auto", 350],
    }),
);
