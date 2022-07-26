import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
// Utils
import mq from "../utils/breakpoints";
import theme from "../utils/theme";
// assets
import rightArrow from "./assets/arrow-right.svg";
import downArrowWhite from "./assets/down-arrow-white.svg";
import { BANNER_HEIGHT } from "./banner";
import downArrowBlack from "./assets/down-arrow-black.svg";

export const DROPDOWN_LINK_HEIGHT = 18;

export const headerInnerContainer = css(
    {
        maxWidth: 1200,
        width: "100%",
        boxSizing: "border-box",
    },
    mq({
        width: ["100%", "100%"],
        padding: [0, "0 5px", 0],
    }),
);

export const WebinyLogo = styled("div")({
    padding: 0,
    lineHeight: "100%",
});

export const logoImage = css(
    mq({
        marginLeft: [20, 14, 0],
        height: [32, 32, 28],
        marginTop: [7],
    }),
);

export const Menu = styled("div")(
    {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        "& ul": {
            listStyle: "none",
            // display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
        },
        "& .menu--left": {
            "& li:first-child": {
                marginLeft: "46px",
            },
            "& li:nth-child(3)": {
                marginLeft: "15px",
            },
        },
        "& .menu--right": {
            marginTop: -20,
            "& li:first-child": {
                height: "24px",
            },
        },
    },
    mq({
        display: "none",
        "@media (min-width: 1000px)": {
            display: "flex",
        },
        "& ul": {
            display: ["none", "flex"],
        },
    }),
);

export const DropDown = styled("div")(
    {
        backgroundColor: theme.color.white,
        flexDirection: "column",
        textAlign: "left",
        borderRadius: 4,
        visibility: "hidden",
        boxSizing: "border-box",
        opacity: 0,
        cursor: "auto",
        transform: "translateY(2em) translateX(0%)",
        zIndex: "-1",
        transition: "all 0.1s ease-in-out 0s, visibility 0s linear 0.1s, z-index 0s linear 0.01s",
        // Make primary section span 100% width if there is only one column in DropDown content
        "&.one-row": {
            "& .section--primary": {
                width: "100%",
                position: "relative",
            },
        },
        "& .section--primary": {
            boxSizing: "border-box",
            width: "45%",
            height: "100%",
            padding: "0px",
            display: "grid",
            columnGap: "39px",
            rowGap: "10px",
            gridTemplateColumns: "320px auto",

            "& .spacer": {
                height: DROPDOWN_LINK_HEIGHT,
            },

            "&.has-border": {
                borderLeft: "1px solid #E3E3E3",
                paddingLeft: 26,
            },
        },
        "& .section--secondary":
            ({},
            mq({
                gridTemplateColumns: ["147px auto", "154px auto", "207px auto"],
            })),
    },
    mq({
        position: ["relative", "absolute"],
        display: ["none", "flex"],
        boxShadow: ["none", "0px 4px 16px rgba(0, 0, 0, 0.2)"],
        width: ["100%", "785px"],
        left: [0, -225],
        padding: ["20px 62px 27px 30px"],
        top: [25, 56],
        ".open": {
            display: "block",
        },
        "& .section--secondary": {
            display: ["none", "grid"],
        },
        "&.one-row": {
            width: ["100%", "740px"],
        },
        "&.two-rows": {
            width: ["550px", "580px", "646px"],
            padding: "20px 27px 33px 30px",
            "& .two-rows-background": {
                width: ["0px", "390px", "404px"],
                height: ["0px", "229px", "229px"],
                background: ["#fff", "#F6F4F8", "##F6F4F8"],
                position: ["static", "absolute", "absolute"],
                top: [5, 5, 5],
                right: [5, 5, 5],
            },
        },
    }),
);

export const DropDownTitle = styled("span")({
    fontFamily: "Source Sans Pro",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "-0.2px",
    textTransform: "uppercase",
    marginBottom: "20px",
    color: "#6A6E7C",
});

export const mobileMenuList = css({
    paddingLeft: "14px",
});

export const MobileMenu = styled("div")(
    {
        display: "flex",
        position: "absolute",
        top: "0px",
        right: "0px",
        height: "100vh",
        overflowY: "auto",
        width: "340px",
        listStyle: "none",
        boxSizing: "border-box",
        backgroundColor: "white",
        padding: 20,
        zIndex: "11",

        "& ul": {
            listStyle: "none",
        },
        [DropDown]: {
            transform: "translateY(0) translateX(0)",
            height: "auto",
            position: "relative",
            top: 0,
            "& .section--primary": {
                width: "100%",
                padding: 0,
            },
        },
    },
    mq({
        display: ["block", "none"],
    }),
);
export const MobileMenuBackground = styled("div")({
    "&.show-background": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.3)",
        top: 0,
        left: 0,
        "@media (min-width: 1000px)": {
            display: "none",
        },
    },
});

export const NavBar = styled("div")(
    {
        margin: "0 auto",
        display: "flex",
        alignContent: "flex-end",
        justifyContent: "space-between",
        [MobileMenu]: {
            display: "none",
        },
    },
    mq({
        flexDirection: ["column", "row"],
        marginTop: [-10, 0],
        paddingTop: [10, 0],
        "&.mobile-opened": {
            justifyContent: ["flex-start", "space-between"],
            [MobileMenu]: {
                display: "block",
                "@media (min-width: 1000px)": {
                    display: "none",
                },
            },
        },
    }),
);

export const MenuItem = styled("li")(
    {
        textAlign: "left",
        cursor: "pointer",
        position: "relative",
        fontSize: 14,
        color: theme.color.black,
        // Make `Dropdown` visible
        "&:hover, &:focus": {
            [DropDown]: {
                visibility: "visible",
                display: "flex",
                opacity: 1,
                zIndex: 1,
                // left: 'calc(-50% - 25px)',
                transform: "translateY(1em) translateX(0%)",
                transitionDelay: "0s, 0s, 0.1s",
            },
        },
        ">a.link": {
            fontSize: theme.fontSize.sm,
            fontWeight: theme.fontWeight.bold,
            textDecoration: "none",
            color: theme.color.black,
            display: "inline-block",
            height: "42px",

            transition: "150ms color",
            "&:hover": {
                color: "#FA5A28",
            },
            "&:hover .arrow-icon path": {
                fill: "#FA5A28",
            },
        },
    },
    mq({
        marginLeft: [0, -4],
        marginBottom: [15, 0],
        marginTop: [0, -15],
        paddingBottom: [15, 15],
        paddingTop: [0, 15],
        borderBottom: ["1px solid " + theme.color.lightGray, "none"],
    }),
);

export const MenuItemMobile = styled("li")({
    position: "relative",
    fontFamily: "Source Sans Pro",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "23px",
    marginBottom: "20px",

    "& .mobile-link, & .link": {
        display: "block",
        color: "#000E1A",
        marginBottom: "16px",
    },
});

export const parentMenu = css(
    {
        paddingRight: 25,
        marginRight: -5,
        marginTop: "-3px !important",
        a: {
            color: "inherit",
            textDecoration: "none",
        },
        "&:hover": {
            opacity: 1,
        },
    },
    mq({
        marginBottom: [15, 0],
        paddingBottom: [15, 20],
    }),
);

export const DownArrow = styled("div")(
    {
        position: "absolute",
        width: 24,
        height: 24,
        background: "url(" + downArrowWhite + ") no-repeat",
        right: 0,
        color: "white",
    },
    mq({
        top: [-1, 14],
    }),
);

export const downArrowClass = css(
    {
        position: "absolute",
        right: 0,
        width: 24,
        height: 24,
        "& path": {
            fill: theme.color.black,
        },
    },
    mq({
        top: [-1, 14],
    }),
);

export const HeaderContainer = styled("header")(
    {
        left: 0,
        paddingTop: 15,
        paddingBottom: 15,
        width: "100%",
        transition: "all 500ms",
    },
    props => ({
        position: props.isSticky ? "sticky" : "absolute",
        backgroundColor: theme.color.white,
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.297995)",
        paddingTop: props.isSticky ? 10 : 20,
        paddingBottom: props.isSticky ? 10 : 20,
        top: props.hasBanner ? (props.hideBanner ? 0 : BANNER_HEIGHT) : 0,
        zIndex: props.hasBanner ? (props.hideBanner ? 102 : 100) : 100,
        [MenuItem]: {
            [DownArrow]: {
                background:
                    "url(" + (props.isSticky ? downArrowBlack : downArrowWhite) + ") no-repeat",
            },
        },
    }),
    mq({
        height: ["auto", 45],
    }),
);

export const dropdownArrow = css`
    position: absolute;
    background: #fff;
    border: 4px solid #fff;
    top: 0;
    left: 5%;
    z-index: -1;

    &:after,
    &:before {
        bottom: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    &:after {
        border-color: rgba(136, 183, 213, 0);
        border-bottom-color: #fff;
        border-width: 5px;
        margin-left: -5px;
    }

    &:before {
        border-color: rgba(194, 225, 245, 0);
        border-bottom-color: #fff;
        border-width: 11px;
        margin-left: -11px;
        left: 25px;
    }
`;

export const MobileMenuIcon = styled("img")(
    {
        zIndex: 100,
        position: "absolute",
        right: 16,
        cursor: "pointer",
        display: "block",
        "@media (min-width: 1000px)": {
            display: "none",
        },
    },
    mq({
        top: [25, 15],
    }),
);

export const githubMenu = css(
    {},
    mq({
        paddingTop: [5, 10],
    }),
);

export const buttonOutlinePrimary = css({
    backgroundColor: `${theme.color.white} !important`,
    color: `${theme.color.primaryDark} !important`,
    border: `solid 2px ${theme.color.primaryDark} !important`,
    padding: "12px 20px !important",
});

export const Card = styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    backgroundColor: "white",
    cursor: "pointer",

    "& .blog-image": {
        marginRight: "16px",
        width: "100px",
        height: "57px",
    },
    "& .blog-text-container": {
        width: "236px",
        display: "flex",
        flexDirection: "column",
        marginTop: "-3px",
        "& .blog-title": {
            fontFamily: "Source Sans Pro",
            fontWeight: "bold",
            fontSize: "14px",
            lineHeight: "18px",
            letterSpacing: "-0.2px",
            color: "#000E1A",
            marginBottom: "8px",
            zIndex: "1",
        },
        "& .arrow-container": {
            zIndex: "1",
            "& .blog-subtitle": {
                color: "#FA5A28",
                marginRight: "10px",
                zIndex: "1",
            },
            img: {
                transition: "margin 250ms",
            },
        },
        "&:hover": {
            "& .arrow-container img": {
                marginLeft: "5px",
            },
        },
    },
});

export const horizontalLine = css`
    width: 1px;
    height: 38px;
    background-color: #e5e5e5;
    border: none;
    margin: 0 20px;
`;

export const verticalLine = css`
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background: #e5e5e5;
    border: none;
`;

export const headerButton = css`
    padding: 9px 13px 10px !important;
`;

export const ProductDropdownItem = styled("div")({
    display: "flex",

    "& .image--container": {
        marginRight: "15px",
        position: "relative",

        "& .coming--soon": {
            position: "absolute",
            top: "-4px",
            left: "3px",
            width: "42px",
            height: "10px",
            background: "#00CCB0",
            paddingLeft: "2px",
            borderRadius: "2px",
            fontWeight: "600",
            fontSize: "7px",
            lineHeight: "9px",
            color: "#FFFFFF",
        },
    },

    "& .label-arrow-container": {
        display: "flex",
        flexDirection: "row",

        "& img": {
            marginLeft: "10px",
            paddingBottom: "5px",
            transition: "margin 250ms",
        },
        "&:hover": {
            "span:first-child": {
                color: "#FA5A28",
                whiteSpace: "nowrap",
                overflow: "hidden",
            },
            "& img": {
                marginLeft: "15px",
                paddingBottom: "5px",
            },
        },
    },

    "& .text--container": {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        whiteSpace: "nowrap",
        overflow: "hidden",

        "& span:first-child": {
            marginBottom: "7px",
            fontFamily: "Source Sans Pro",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#000E1A",
        },

        "& span:last-child": {
            fontFamily: "Source Sans Pro",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "18px",
            letterSpacing: "-0.2px",
            color: "#6A6E7C",
        },

        "& .label-arrow-container": {
            display: "flex",
            flexDirection: "row",
        },
    },
});

export const ProductDropdownItemMobile = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",

    "& .image--container-mobile": {
        marginRight: "10px",
        position: "relative",

        "& img": {
            width: "30px",
        },

        "& .coming--soon": {
            position: "absolute",
            bottom: "7px",
            left: "40px",
            width: "39px",
            height: "9px",
            background: "#00CCB0",
            paddingLeft: "2px",
            borderRadius: "2px",
            fontWeight: "600",
            fontSize: "7px",
            lineHeight: "9px",
            color: "#FFFFFF",
        },
    },

    "& .add-margin": {
        marginTop: "-12px",
    },

    "& .label-arrow-container": {
        display: "flex",
        flexDirection: "row",

        "& span": {
            fontFamily: "Source Sans Pro",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#000E1A",
            marginRight: "10px",
            marginTop: "-5px",
        },
    },

    "& .text--container": {
        display: "flex",
        flexDirection: "column",
        position: "relative",

        "& span:first-child": {
            marginBottom: "7px",
            fontFamily: "Source Sans Pro",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#000E1A",
        },

        "& span:last-child": {
            fontFamily: "Source Sans Pro",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "18px",
            letterSpacing: "-0.2px",
            color: "#6A6E7C",
        },

        "& .label-arrow-container": {
            display: "flex",
            flexDirection: "row",
        },
    },
});

export const itemsParent = css(
    {
        display: "grid",
    },
    mq({
        rowGap: [5, 10],
    }),
);

export const TitleContainer = styled("div")({
    marginBottom: "18px",
    zIndex: "1",
    "& span:first-child":
        ({},
        mq({
            marginRight: [102, 102, 154],
        })),
});

export const ResourcesDropdownItem = styled("div")({
    display: "flex",
    "& .image--container": {
        marginRight: "15px",
    },
    "& .label--container": {
        "& .label": {
            marginRight: "10px",
            fontFamily: "Source Sans Pro",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#000E1A",
        },
        img: {
            transition: "margin 250ms",
        },
        "&:hover": {
            "& .label": {
                color: "#FA5A28",
            },
            "& img": {
                marginLeft: "5px",
            },
        },
    },
});

export const ResourcesDropdownItemMobile = styled("div")({
    display: "flex",
    "& .image--container": {
        marginRight: "10px",
    },
    "& .label": {
        marginRight: "10px",
        fontFamily: "Source Sans Pro",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#000E1A",
    },
});

export const FromTheBlogCOntainer = styled("div")({
    display: "grid",
    rowGap: "16px",
    paddingLeft: "30px",
});

export const MobileDownArrow = styled("img")({
    position: "absolute",
    top: "6px",
    left: "-15px",
    transform: "rotate(90deg)",
});
