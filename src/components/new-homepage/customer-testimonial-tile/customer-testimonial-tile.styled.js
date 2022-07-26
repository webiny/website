import styled from "react-emotion";

import mq from "../../utils/breakpoints";

import backgroundImg from "../../../assets/new-homepage/customer-testimonial-slider/tile-bg.svg";

export const TileWrapper = styled.div(
    {
        position: "relative",
        width: "285px",
        textAlign: "center",
        borderRadius: "4px",
        boxShadow: "10px 10px 50px 3px rgba(242, 232, 224, 0.8)",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundPosition: " top -30px right -40px;",
        backgroundSize: "125%",
        height: "100%",
        "& .tile-image": {
            width: "70px",
            height: "70px",
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, -25%)",
            borderRadius: "6px",
        },
    },
    mq({
        //height: ["276px", "276px", "300px"],
    }),
);
export const TileName = styled.h5({
    color: "#000E1A",
    marginTop: "-15px",
    fontSize: "22px",
    fontWeight: "700",
});
export const TilePosition = styled.p({
    color: "#44486C",
    margin: "0px",
    fontSize: "14px",
    fontWeight: "400",
});

export const StarBlock = styled.div(
    {
        display: "flex",
        gap: "4px",
        justifyContent: "center",
    },
    mq({
        margin: ["11px 0px 18px 0px", "11px 0px 18px 0px", "11px 0px 20px 0px"],
    }),
);

export const TileDescription = styled.p(
    {
        color: "#000E1A",
        textAlign: "left",
        fontWeight: "400",
        padding: "0px 40px  28px 28px",
        lineHeight: "24px",
        margin: "0px",
    },
    mq({
        fontSize: ["14px", "14px", "16px"],
    }),
);
