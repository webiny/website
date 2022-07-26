import styled from "react-emotion";
import Img from "gatsby-image";

import mq from "../../utils/breakpoints";

import BackgroundImageDesktop from "../../../assets/new-homepage/product-overview/product-overview-bg.svg";
import BackgroundImageMobile from "../../../assets/new-homepage/product-overview/product-overview-bg.svg";
import { keyframes } from "styled-components";

export const H2 = styled.h2(
    {
        boxSizing: "border-box",
        maxWidth: "950px",
        fontWeight: 700,
        textAlign: "center",
        color: "#000E1A",
        marginBottom: 0,
        marginLeft: "16px",
        marginRight: "16px",

        "& span": {
            color: "#FA5A28",
        },
    },
    mq({
        marginTop: ["40px", "101px", "91px"],
        lineHeight: ["46px", "46px", "58px"],
        fontSize: ["36px", "36px", "48px"],
        marginLeft: [0, 0, "30px"],
        marginRight: [0, 0, "30px"],
    }),
);

export const P = styled.p(
    {
        maxWidth: "1152px",
        textAlign: "center",
        color: "#000E1A",
        marginBottom: 0,
        marginTop: "20px",
    },
    mq({
        fontSize: ["18px", "18px", "24px"],
        lineHeight: ["28px", "28px", "40px"],
        marginLeft: [0, 0, "30px"],
        marginRight: [0, 0, "30px"],
    }),
);

export const CollapsibleTriggerContainer = styled.div({
    display: "flex",
    alignItems: "start",

    "& .arrow-image": {
        marginTop: "7px",
    },

    "& .collapsible-title": {
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "23px",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: "9px",
        color: "#000E1A",
    },

    "& .collapsible-title-opened": {
        marginLeft: "5px",
        color: "#FA5A28",
    },

    "& .comming-soon": {
        position: "relative",
        paddingTop: "1px",
        paddingBottom: "2px",
        width: "52px",
        backgroundColor: "#00BF9E",
        borderRadius: "2px",
        fontSize: "8px",
        lineHeight: "10px",
        fontWeight: 600,
        color: "#fff",
        textAlign: "center",
        marginLeft: "10px",
        top: "7px",
    },
});

export const CollapsibleContainer = styled.div(
    {
        cursor: "pointer",
        paddingTop: "12",
        paddingRight: "9px",
        paddingLeft: "8px",

        "& .collapsible-content": {
            fontSize: "14px",
            lineHeight: "22px",
            margin: 0,
            color: "#000E1A",
            paddingLeft: "20px",
            paddingRight: "20px",
        },
    },
    props => ({ backgroundColor: props.backgroundColor, paddingBottom: props.paddingBottom }),
);

export const AccordionItemsContainer = styled.div(
    {
        backgroundColor: "#ffffff",
        display: "grid",
        position: "relative",
        rowGap: "8px",
        boxSizing: "border-box",
        paddingTop: "10px",
        paddingLeft: "9px",
        paddingRight: "10px",
        paddingBottom: "30px",
        borderRadius: "6px",
        boxShadow: "10px 0px 20px rgba(0, 0, 0, 0.15)",
    },
    mq({
        width: ["100%", "100%", "354px"],
    }),
);

export const PlusImg = styled.img(
    {
        position: "absolute",
        top: "-12px",
        left: "-12px",
    },
    mq({
        display: ["none", "none", "inline-block"],
    }),
);

export const AccordionContainer = styled("div")(
    {
        //opacity: 1,
        //transition: "opacity 0.5s ease-in-out",
        //zIndex: 1,
        /*
        "&:hover": {
            opacity: "1 !important",
            transition: "opacity 0.5s ease-in-out",
            //zIndex: 100,
        },
        */
    },
    mq({
        marginTop: ["19px", "38px", "25px"],
        position: ["static", "static", "absolute"],
        right: ["auto", "auto", "-25px"],
        top: ["auto", "auto", "450px"],
    }),
);

export const ContainerForImage = styled.div(
    {
        width: "100%",
        maxWidth: "1203px",
        position: "relative",
        /*
        "&:hover": {
            [AccordionContainer]: {
                opacity: "0.3",
            },
        },
        */
    },
    mq({
        "&> video": {
            borderRadius: ["15px", "25px", "25px"],
        },
        paddingLeft: ["16px", "16px", "30px"],
        paddingRight: ["16px", "16px", "30px"],
        marginTop: ["30px", "30px", "80px"],
        marginBottom: ["40px", "40px", "142px"],
    }),
);

export const ProductOverviewImg = styled(Img)(
    {
        boxSizing: "border-box",
        backgroundColor: "#f9d9cf",
        width: "100%",
    },
    mq({
        borderRadius: ["15px", "25px", "25px"],
        border: ["5px solid #f9d9cf", "14px solid #f9d9cf", "14px solid #f9d9cf"],
        boxShadow: [
            "0px 4px 10px rgba(0, 0, 0, 0.15)",
            "0px 4px 10px rgba(0, 0, 0, 0.15)",
            "0px 4px 20px rgba(0, 0, 0, 0.15)",
        ],
    }),
);

export const ProductOverviewVideo = styled("video")(
    {
        boxSizing: "border-box",
        borderRadius: "10px",
        backgroundColor: "#f9d9cf",
        width: "100%",
    },
    mq({
        border: ["5px solid #f9d9cf", "14px solid #f9d9cf", "14px solid #f9d9cf"],
        boxShadow: [
            "0px 4px 10px rgba(0, 0, 0, 0.15)",
            "0px 4px 10px rgba(0, 0, 0, 0.15)",
            "0px 4px 20px rgba(0, 0, 0, 0.15)",
        ],
    }),
);

export const ProductsOverviewContainer = styled.div(
    {
        display: "grid",
        alignContent: "start",
        justifyItems: "center",
        backgroundRepeat: "no-repeat",
    },
    mq({
        backgroundImage: [
            `url(${BackgroundImageMobile})`,
            `url(${BackgroundImageMobile})`,
            `url(${BackgroundImageDesktop})`,
        ],
        backgroundSize: ["1440px 100%", "cover", "cover"],
        backgroundPosition: ["top", "top", "top"],
        paddingLeft: ["16px", "16px", 0],
        paddingRight: ["16px", "16px", 0],
    }),
);

export const Preloader = styled.div({
    display: "inline-block",
    fontSize: 0,
    padding: 0,
    position: "absolute",
    top: "calc(50% - 16px)",
    left: "calc(50% - 16px)",
    zIndex: 1,
});
