import styled from "react-emotion";
import { css } from "emotion";
import mq from "../utils/breakpoints";
import theme from "../utils/theme";
import rightArrow from "./assets/arrow-right.svg";
import downArrowWhite from "./assets/down-arrow-white.svg";
import { BANNER_HEIGHT } from "./banner";
import downArrowBlack from "./assets/down-arrow-black.svg";

export const HeaderContainer = styled("header")(
    {
        left: 0,
        paddingTop: 15,
        paddingBottom: 15,
        width: "100%",
        transition: "all 500ms"
    },
    props => ({
        position: props.isSticky ? "fixed" : "absolute",
        // TODO: We'll discuss about having transparent header
        // backgroundColor: props.isSticky ? "#fff" : "transparent",
        // boxShadow: props.isSticky && "0 0 1px 1px rgba(34,45,57,.15)",
        backgroundColor: theme.color.white,
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.297995)",
        paddingTop: props.isSticky ? 10 : 20,
        paddingBottom: props.isSticky ? 10 : 20,
        top: props.hasBanner ? (props.hideBanner ? 0 : BANNER_HEIGHT) : 0,
        zIndex: props.hasBanner ? (props.hideBanner ? 102 : 100) : 100,
        [MenuItem]: {
            // TODO: see how to handle sticky if necessary
            // color: props.isSticky ? "#000" : "#fff",
            // ["a." + linkStyle]: {
            //     color: props.isSticky ? "#000" : "#fff"
            // },
            [DownArrow]: {
                background:
                    "url(" + (props.isSticky ? downArrowBlack : downArrowWhite) + ") no-repeat"
            }
        }
    }),
    mq({
        height: ["auto", 45]
    })
);

export const headerInnerContainer = css(
    {
        maxWidth: 1200,
        width: "100%",
        boxSizing: "border-box"
    },
    mq({
        width: ["100%", "100%"],
        padding: [0, "0 5px", 0]
    })
);

export const WebinyLogo = styled("div")({
    padding: 0,
    lineHeight: "100%",
    zIndex: 100
});

export const logoImage = css(
    {},
    mq({
        paddingLeft: [20, 0],
        height: [28, 32],
        marginTop: [5]
    })
);

export const Menu = styled("div")(
    {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        "& ul": {
            listStyle: "none",
            //display: 'flex',
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
        },
        "& .menu--left": {},
        "& .menu--right": {
            "& li:last-child": {
                marginLeft: 16
            }
        }
    },
    mq({
        display: ["none", "flex"],
        "& ul": {
            display: ["none", "flex"]
        }
    })
);

export const DropDown = styled("div")(
    {
        height: 226,
        backgroundColor: theme.color.white,
        flexDirection: "row",
        textAlign: "left",
        borderRadius: 4,
        visibility: "hidden",
        boxSizing: "border-box",
        opacity: 0,
        left: 0,
        transform: "translateY(2em) translateX(0%)",
        zIndex: "-1",
        transition: "all 0.1s ease-in-out 0s, visibility 0s linear 0.1s, z-index 0s linear 0.01s",

        "& .section--primary": {
            boxSizing: "border-box",
            width: "45%",
            height: "100%",
            padding: "0px 10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "wrap",

            "& .link": {
                marginBottom: 8,
                position: "relative",
                color: theme.color.black,
                fontSize: theme.fontSize.sm,
                fontWeight: theme.fontWeight.regular,
                transition: "150ms color ease-in",

                "&::after": {
                    content: "url(" + rightArrow + ")",
                    position: "absolute",
                    right: -20,
                    opacity: 0,
                    transition: "opacity 150ms ease-in, transform 200ms linear 150ms"
                },
                "&:hover": {
                    color: theme.color.purple,
                    "&::after": {
                        opacity: 1,
                        transform: "translateX(5px)"
                    }
                }
            },

            "& .spacer": {
                height: DROPDOWN_LINK_HEIGHT
            }
        },
        "& .section--secondary": {
            boxSizing: "border-box",
            width: "55%",
            height: "100%",
            // display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderLeft: "1px solid #E3E3E3",
            paddingLeft: 26
        }
    },
    mq({
        position: ["relative", "absolute"],
        display: ["none", "flex"],
        boxShadow: ["none", "0px 4px 16px rgba(0, 0, 0, 0.2)"],
        width: ["100%", 800],

        padding: ["0 25px 10px 25px", 30],
        top: [25, 56],
        // TODO: Need to check what is this for?
        ".open": {
            display: "block"
        },
        "& .section--secondary": {
            display: ["none", "flex"]
        }
    })
);

export const MobileMenu = styled("div")(
    {
        paddingRight: 20,
        display: "flex",
        position: "relative",
        height: "calc(100vh - 80px)",
        overflowX: "scroll",
        width: "auto",
        margin: 15,
        listStyle: "none",
        boxSizing: "border-box",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5,

        "& ul": {
            listStyle: "none"
        },
        [DropDown]: {
            transform: "translateY(0) translateX(0)",
            height: "auto",
            position: "relative",
            top: 0,
            "& .section--primary": {
                width: "100%",
                padding: 0
            }
        }
    },
    mq({
        display: ["block", "none"]
    })
);

export const NavBar = styled("div")(
    {
        margin: "0 auto",
        display: "flex",
        alignContent: "flex-end",
        justifyContent: "space-between",
        [MobileMenu]: {
            display: "none"
        },
        "&.mobile-opened": {
            backgroundColor: theme.color.darkGray,
            height: "100vh",
            justifyContent: "flex-start",
            [MobileMenu]: {
                display: "block"
            }
        }
    },
    mq({
        flexDirection: ["column", "row"],
        marginTop: [-10, 0],
        paddingTop: [10, 0]
    })
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
                transitionDelay: "0s, 0s, 0.1s"
            }
        }
    },
    mq({
        marginLeft: [0, 30],
        marginBottom: [15, 0],
        marginTop: [0, -15],
        paddingBottom: [15, 15],
        paddingTop: [0, 15],
        borderBottom: ["1px solid " + theme.color.lightGray, "none"]
    })
);

export const parentMenu = css(
    {
        paddingRight: 25,
        marginRight: -5,
        a: {
            color: "inherit",
            textDecoration: "none"
        },
        "&:hover": {
            opacity: 1
        }
    },
    mq({
        marginBottom: [15, 0],
        paddingBottom: [15, 15]
    })
);

export const linkStyle = css({
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.bold,
    textDecoration: "none",
    color: theme.color.grayText,

    transition: "150ms color",
    "&:hover": {
        color: theme.color.black
    },
    "&:hover .arrow-icon path": {
        fill: theme.color.black
    }
});

export const DownArrow = styled("div")(
    {
        position: "absolute",
        width: 24,
        height: 24,
        background: "url(" + downArrowWhite + ") no-repeat",
        right: 0,
        color: "white"
    },
    mq({
        top: [-1, 14]
    })
);

export const downArrowClass = css(
    {
        position: "absolute",
        right: 0,
        width: 24,
        height: 24,
        "& path": {
            fill: theme.color.gray700
        }
    },
    mq({
        top: [-1, 14]
    })
);

export const DROPDOWN_LINK_HEIGHT = 18;

export const dropdownArrow = css`
    position: absolute;
    background: #fff;
    border: 4px solid #fff;
    top: 0px;
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
    }
`;

export const MobileMenuIcon = styled("img")(
    {
        zIndex: 100,
        position: "absolute",
        right: 20,
        top: 17
    },
    mq({
        display: ["block", "none"]
    })
);

export const githubMenu = css(
    {},
    mq({
        paddingTop: [5, 19]
    })
);

export const buttonOutlinePrimary = css({
    backgroundColor: `${theme.color.white} !important`,
    color: `${theme.color.primaryDark} !important`,
    border: `solid 2px ${theme.color.primaryDark} !important`,
    padding: "12px 20px !important"
});

export const Card = styled("div")({
    display: "flex",
    flexDirection: "column",
    width: 175,
    height: 152,
    backgroundColor: "white",

    "& .card__img": {
        width: "100%"
    },
    "& .card__title": {
        color: theme.color.black,
        fontSize: theme.fontSize.sm,
        fontWeight: theme.fontWeight.bold,
        margin: "10px 0px",
        textTransform: "capitalize"
    },
    "& .card__link": {
        color: theme.color.purple,
        fontSize: theme.fontSize.sm,
        fontWeight: theme.fontWeight.bold,
        textTransform: "uppercase",
        margin: "0px",

        "& .icon": {
            width: 18,
            marginLeft: 6,
            transition: "transform 150ms ease-in"
        }
    },

    "&:hover": {
        "& .card__link .icon": {
            transform: "translateX(6px)"
        }
    }
});
