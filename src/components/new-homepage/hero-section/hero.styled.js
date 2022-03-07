import styled from "react-emotion";
import { Link } from "gatsby";

import mq from "../../utils/breakpoints";
import Button from "../../ui/button";

import backgroundImg from "../../../assets/new-homepage/hero/home-hero-bg.svg";

export const HeroSection = styled("section")(
    {
        backgroundColor: "#fff",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundImage: "url(" + backgroundImg + ")",
    },
    mq({
        backgroundSize: ["1440px 100%", "cover", "cover"],
        backgroundPosition: ["bottom -67px right 50%;", "bottom", "bottom"],
        paddingBottom: ["40px", "90px", "100"],
    }),
);
export const ButtonPrimary = styled(Button)(
    {
        width: "100%",
        "@media (max-width: 405px)": {
            transform: "scale(0.9)",
        },
    },
    mq({
        maxWidth: ["391px", "211px", "211px"],
        marginTop: ["51px", "39px", "43px"],
    }),
);

export const HeroContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
});
export const RequestLink = styled(Link)({
    display: "flex",
    alignItems: "center",
    marginTop: "11px",
    border: "none",
    fontFamily: "Source Sans Pro",
    fontWeight: "bold",
    fontSize: "18px",
    letterSpacing: ".001em",
    color: "#000",
    transition: "100ms all",
    "&:hover": {
        textDecoration: "underline",
        transform: "translateY(-1px)",
    },
});

export const ImageArrow = styled("img")({
    marginLeft: "6px",
    marginTop: "2px",
});

export const Title = styled("h2")(
    {
        maxWidth: 800,
        fontWeight: 700,
        color: "#000",
        textAlign: "center",
    },
    mq({
        lineHeight: ["45px", "55px", "65px"],
        padding: ["0px 16px", "0px 0px", "0px 0px"],
        fontSize: ["36px", "46px", "56px"],
        marginTop: ["40px", "40px", "45px"],
    }),
);

export const SubTitle = styled("h3")(
    {
        fontWeight: 400,
        letterSpacing: ".002em",
        textAlign: "center",
        color: "#000",
    },
    mq({
        padding: ["0px 20px", "0px 20px", "0px 0px"],
        fontSize: ["18px", "20px", "24px"],
        marginBottom: ["24px", "30px", "39px"],
        marginTop: ["3px", "9px", "0px"],
        maxWidth: ["800px", "950px", "950px"],
        lineHeight: ["28px", "30px", "34px"],
    }),
);
export const Bold = styled("strong")({
    fontWeight: "bold",
    background: "#fee0cc",
});

export const CodeField = styled("div")(
    {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#150B27 ",
        color: "#fff",
        borderRadius: "10px",
        button: {
            background: "transparent",
        },
    },
    mq({
        width: ["360px", "515px", "515px"],
        padding: ["14px 10px 16px 11px", "13px 15px 12px 24px", "13px 15px 12px 24px"],
    }),
);

export const ToolTipText = styled.div(
    {
        position: "absolute",
        transform: "translateY(-50%)",
        marginLeft: "-20px",
        whiteSpace: "normal",
        borderRadius: "5px",
        background: "#292d3e",
        color: "#fff",
        textAlign: "center",
        top: "0px",
    },
    mq({
        fontSize: ["10px", "14px", "14px"],
        right: ["-8px", "-5px", "-5px"],
        padding: ["4px 8px", "5px 10px", "5px 10px"],
    }),
);
export const ToolTip = styled.div({
    zIndex: "2",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&> img": {
        zIndex: "-2",
    },
    "&.stiky-tooltip": {
        [ToolTipText]: {
            display: "block",
        },
    },
    "&:hover": {
        [ToolTipText]: {
            display: "block",
        },
    },
});

export const CodeFieldText = styled("span")(
    {
        color: "#fff",
        letterSpacing: ".11em",
    },
    mq({
        fontSize: ["14px", "18px", "18px"],
    }),
);
export const CodeFieldBorder = styled("div")(
    {
        borderRadius: "19px",
        background: "#ffeee9",
        "@media (max-width: 395px)": {
            zoom: "0.9",
        },
    },
    mq({
        border: ["6px solid #ffeee9", "10px solid #ffeee9", "10px solid #ffeee9"],
    }),
);

export const OrangeText = styled("span")({
    color: "#fa5a28",
});
export const LinesImageDesktop = styled("img")(
    mq({
        display: ["none", "block", "block"],
        width: ["641px", "641px", "792px"],
        marginBottom: ["18px", "20px", "5px"],
    }),
);

export const LinesImageMobile = styled("img")(
    {
        height: "369px",
    },
    mq({
        display: ["block", "none", "none"],
    }),
);

export const AdvantagesContainer = styled("div")(
    {
        margin: "0px 10px",
    },
    mq({
        display: ["grid", "flex", "flex"],
        gap: ["15px", "10px", "15px"],
        paddingTop: ["35px", "0px", "0px"],
    }),
);
export const AdvantagesContainerMobile = styled("div")({
    display: "flex",
    "@media (max-width: 395px)": {
        zoom: "0.9",
    },
});

export const AdvantageTileStyle = styled("div")(
    {
        boxShadow: "0px 0px 15px rgba(100, 100, 100, 0.239216)",
        background: "#fff",
        alignItems: "center",
        borderRadius: "6px",
    },
    mq({
        display: ["flex", "grid", "grid"],
        justifyContent: ["left", "center", "center"],
        height: ["60px", "132px", "132px"],
        width: ["283px", "150px", "180px"],
    }),
);
export const AdvantageTileTitle = styled("h4")(
    { textAlign: "center", color: "#000", margin: "0px" },
    mq({
        padding: ["0px 0px", "0px 30px", "0px 30px"],
        lineHeight: ["20px", "20px", "26px"],
        fontSize: ["18px", "16px", "20px"],
        fontWeight: ["400", "700", "700"],
        marginTop: ["0px", "5px", "0px"],
        marginBottom: ["0px", "20px", "10px"],
    }),
);
export const AdvantageTileImage = styled("img")(
    mq({
        margin: ["0px 15px 0px 10px", "19px auto 0px auto", "12px auto 0px auto"],
    }),
);
