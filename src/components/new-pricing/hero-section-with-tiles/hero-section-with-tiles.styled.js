import styled from "@emotion/styled";

import Button from "../../ui/button";
import mq from "../../utils/breakpoints";

import heroBg from "../../../assets/new-homepage/hero/price-page-bg.svg";
import handleSliderIcon from "../../../assets/new-homepage/hero/handle-slider.svg";
import doneIcon from "../../../assets/new-homepage/hero/done-icon.svg";

export const HeroSection = styled("div")(
    {
        backgroundColor: "#fff",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + heroBg + ")",
    },
    mq({
        backgroundSize: ["1440px 100%", "1440px 100%", "100%"],
        backgroundPosition: [
            "bottom 647px right 50%",
            "bottom 183px right 50%",
            "bottom 367px right 50%",
        ],
    }),
);

export const HeroContainer = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    mq({
        padding: ["30px 16px", "30px 0px", "30px 0px"],
    }),
);
export const TilesContainer = styled("div")(
    { width: "100%", justifyContent: "center", display: "flex", color: "#44486C" },
    mq({
        flexDirection: ["column", "row", "row"],
        alignItems: ["center", "start", "start"],
    }),
);

export const MinorTileStyle = styled("div")(
    {
        background: "#fff",
        borderRadius: "6px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
        textAlign: "center",
        width: "100%",
    },
    mq({
        maxWidth: ["392px", "260px", "300px"],
        marginTop: ["0px", "56px", "65px"],
        height: ["411px", "420px", "411px"],
    }),
);
export const MainTileStyle = styled("div")(
    {
        height: "535px",
        borderRadius: "6px",
        background: "#fff",
        textAlign: "center",
        width: "100%",
    },
    mq({
        maxWidth: ["364px", "260px", "350px"],
    }),
);
export const GreenLabel = styled("div")({
    width: "135px",
    padding: "4px 0px 3px 0px",
    background: "#00CCB0",
    fontSize: "12px",
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#fff",
    marginLeft: "6px",
    borderRadius: "4px 4px 0px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "50%",
    top: "-26px",
    transform: "translate(50%, 0%)",
});
export const MainTileBorder = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        borderRadius: "10px",
        background: "rgba(250, 90, 40, 0.1)",
        position: "relative",
    },
    mq({
        maxWidth: ["364px", "260px", "350px"],
        border: ["14px solid transparent;", "5px solid transparent;", "15px solid transparent;"],
        margin: ["46px 16px", "0px 7px", "0px 25px"],
    }),
);
export const GrayBackground = styled("div")({
    background: "#F6F4F8",
    paddingBottom: "50px",
    borderRadius: "6px",
    overflow: "hidden",

    "&.right-tile": {
        paddingBottom: "40px",
    },
});

export const MainTileTitle = styled("h4")({
    textAlign: "center",
    margin: "0px",
    padding: "12px 0px 14px 0px",
    fontSize: "18px",
    fontWeight: "600",
    background: "#fff",
});
export const MinorTileTitle = styled("h4")({
    textAlign: "center",
    padding: "16px 0px 14px 0px",
    margin: "0px",
    fontSize: "18px",
    fontWeight: "600",
    background: "#fff",
});
export const ButtonPrimary = styled(Button)({
    marginTop: "-23px",
    "&.left-tile": {
        marginTop: "-25px",
    },
});
export const ButtonOutline = styled(Button)({
    marginTop: "-22px",
});

export const GrayBorder = styled("div")({
    borderTop: "3px solid #e6e6e6",
});
export const OrangerBorder = styled("div")({
    borderTop: "3px solid #FA5A28",
});
export const BorderContainer = styled("div")(
    {
        display: "flex",
        width: "100%",
        "&.main-border": {
            [GrayBorder]: {
                width: "100%",
            },
        },
        "&.orange-border": {
            [OrangerBorder]: {
                width: "100%",
            },
        },
        "&.gray-orange-border": {
            [GrayBorder]: {
                width: "100%",
            },
        },
    },
    mq({
        [OrangerBorder]: {
            width: ["140%", "270%", "150%"],
        },
        "&.gray-orange-border": {
            [OrangerBorder]: {
                width: ["45%", "65%", "65%"],
            },
        },
    }),
);
export const DollarIcon = styled("span")({
    fontWeight: "700",
    fontSize: "20px",
});
export const TilePrice = styled("h2")({
    fontSize: "48px",
    color: "#FA5A28",
    fontWeight: "700",
    marginTop: "-7px",
    marginBottom: "0px",
    marginRight: "3px",
    "&.left-tile": {
        fontSize: "32px",
        fontWeight: "700",
        marginTop: "32px",
        marginBottom: "00px",
    },
    "&.right-tile": {
        fontSize: "32px",
        marginTop: "-5px",
        marginBottom: "4px",
    },
});
export const Li = styled("li")(
    {
        listStyle: "none",
        marginBottom: "8px",
        fontSize: "14px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        whiteSpace: "nowrap",

        "::before": {
            content: "url(" + doneIcon + ")",
            color: "#4dd",
            width: "0.63em",
            height: "0.125em",
            position: "absolute",
            top: "-2px",
            left: -20,
        },
    },
    mq({
        marginRight: ["0px", "0px", "0px"],
    }),
);
export const Ul = styled("ul")({
    marginTop: "18px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    marginLeft: "20px",
    "&.right-tile": {
        marginTop: "15px",
    },
    "&.left-tile": {
        marginTop: "20px",
    },
});
export const HeroTitle = styled("h1")(
    {
        textAlign: "center",
        fontWeight: "700",
        marginBottom: "0px",
        color: "#000E1A",
    },
    mq({
        fontSize: ["36px", "46px", "56px"],
    }),
);
export const HeroSubTitle = styled("h3")(
    {
        textAlign: "center",
        fontWeight: "400",
        color: "#000E1A",
    },
    mq({
        marginTop: ["30px", "30px", "30px"],
        fontSize: ["20px", "20px", "24px"],
        marginBottom: ["35px", "53px", "70px"],
    }),
);
export const OrangeText = styled("span")({
    color: "#FA5A28",
});
export const P = styled("p")({
    fontSize: "12px",
    marginTop: "12px",
    marginBottom: "0px",
    "&.mounth": {
        marginTop: "-7px",
    },
    "&.forever": {
        fontSize: "14px",
        marginTop: "-3px",
        marginBottom: "-2px",
    },
    "&.right-tile": {
        marginTop: "27px",
        fontSize: "14px",
    },
    "&.users": {
        marginTop: "0px",
    },
});
export const Span = styled("span")({
    fontSize: "14px",
    fontWeight: "600",
});

export const ListTileContainer = styled("div")(
    {
        marginTop: "-20px",
    },
    mq({
        padding: ["0px 36px", "0px 20px", "0px 30px"],
        "&.right-tile": {
            padding: ["0px 54px", "0px 20px ", "0px 40px"],
        },
        "&.left-tile": {
            padding: ["0px 54px", "0px 20px", "0px 40px"],
        },
    }),
);
export const OptionalTitle = styled("h5")({
    fontSize: "14px",
    fontWeight: "700",
    textAlign: "left",
    marginTop: "9px",
});
export const InputCheckBox = styled("input")({
    position: "relative",
    display: "inline-block",
    width: "42px",
    height: "22px",
    margin: 0,
    verticalAlign: "top",
    background: "#FFC1AD",
    border: "1px solid #FFC1AD",
    borderRadius: "30px",
    outline: "none",
    cursor: "pointer",
    WebkitAppearance: "none",
    MozAppearancce: "none",
    appearance: "none",

    "&:after": {
        content: '""',
        display: "inline-block",
        position: "absolute",
        left: "2px",
        top: "1.5px",
        width: "16px",
        height: "16px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        transform: "translateX(0)",
        transition: "all .2s",
    },
    "&.toggle-on": {
        "&:after": {
            backgroundColor: "#FA5A28",
            left: "22px",
        },
    },
});
export const TogglerWrapper = styled("div")({
    marginTop: "10px",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    fontSize: "14px",
    textAlign: "left",
});
export const TogglerTextContainer = styled("div")({
    display: "flex",
    justifyContent: "start",
});
export const ToolTipText = styled.div({
    position: "absolute",
    top: "-45px",
    transform: "translateY(-50%)",
    left: "-120px",
    marginLeft: "15px",
    width: "200px",
    padding: "10px",
    whiteSpace: "normal",
    borderRadius: "10px",
    background: "#150B27",
    color: "#fff",
    textAlign: "left",
    display: "none",
});
export const ToolTip = styled.div({
    zIndex: "2",
    marginLeft: "6px",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&> img": {
        zIndex: "-2",
    },

    "&:hover": {
        [ToolTipText]: {
            display: "block",
        },
    },
});
export const TogglerTextBottomContainer = styled("div")(
    {
        display: "flex",
        justifyContent: "start",
    },
    mq({
        maxWidth: ["none", "138px", "none"],
        [ToolTip]: {
            alignItems: ["center", "start", "center"],
            marginTop: ["0px", "2px", "0px"],
        },
    }),
);
export const IconFree = styled("div")({
    width: "29px",
    height: "16px",
    background: "#00CCB0",
    fontSize: "10px",
    fontWeight: "700",
    color: "#fff",
    marginLeft: "0px",
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const RangeSlider = styled.div(
    props => ({
        "& .input-range": {
            margin: "0px auto",
            width: "100%",
            "& .input-range__track--background": {
                background: "#FFC1AD",
                height: "7px",
            },
            "& .input-range__slider-container": {
                transition: "unset",
            },
            "& .input-range__track--active": {
                background: "transparent",
            },
            "& .input-range__label--min > .input-range__label-container": {
                display: "none",
            },
            "& .input-range__label--max > .input-range__label-container": {
                fontSize: "12px",
                color: "#44486C",
                marginRight: "23px",
                display: props.visibleMaxValue && "none",
                ":after": {
                    content: "'+'",
                },
            },
            "& .input-range__slider-container  .input-range__label-container": {
                color: "#44486C",
                position: "absolute",
                top: "39px",
                left: "-4px",
                fontSize: "12px",
                display: "none",
            },

            "& .input-range__slider": {
                background: "#FA5A28",
                width: "20px",
                height: "20px",
                border: "none",
                "::before": {
                    content: "url(" + handleSliderIcon + ")",
                },
            },
        },
    }),
    mq({
        padding: ["0px 36px", "0px 20px", "0px 30px"],
    }),
);
export const PricePerMount = styled("p")({
    fontSize: "12px",
    fontWeight: "600",
    color: "#FA5A28",
    margin: "0px",
});
export const PriceWrapper = styled("div")(
    {
        marginTop: "12px",
        marginBottom: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    mq({
        padding: ["0px 36px", "0px 20px", "0px 30px"],
    }),
);
