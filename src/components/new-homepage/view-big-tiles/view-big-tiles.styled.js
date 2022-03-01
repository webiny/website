import styled from "react-emotion";

import mq from "../../utils/breakpoints";

export const ViewBigTilesContainer = styled.div(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px",
        justifyContent: "center",
    },
    mq({
        padding: ["16px 20px", "18px 20px", "57px 20px"],
    }),
);
export const ViewTileWrapper = styled.div(
    mq({
        display: ["grid", "grid", "flex"],
        gap: ["18px", "18px", "50px"],
    }),
);
export const Title = styled.h2(
    {
        color: "#000E1A",
        textAlign: "center",
        lineHeight: "44px",
        fontWeight: "700",
        maxWidth: "804px",
    },
    mq({
        marginBottom: ["22px", "34px", "49px"],
        fontSize: ["36px", "36px", "42px"],
        marginTop: ["15px", "15px", "13px"],
    }),
);

export const SubTitle = styled.h4({
    background: "#ffEFEa",
    color: "#FA5A28",
    fontSize: "14px",
    fontWeight: "600",
    padding: "5px 20px 5px 13px",
    borderRadius: "6px",
    letterSpacing: ".1px",
});
export const OrangeText = styled.span({ color: "#FA5A28" });

export const TileStyle = styled.div(
    {
        alignItems: "start",
        borderRadius: "10px",
        background: "#fff7f4",
    },
    mq({
        height: ["", "", "218px"],
        display: ["flex", "flex", "block"],
        gap: ["21px", "24px", "10px"],
        padding: ["16px 16px 14px 16px", "16px 16px 14px 16px", "30px 20px 37px 30px"],
    }),
);

export const TileBorder = styled.div(
    mq({
        maxWidth: ["520px", "550px", ""],
        borderRadius: ["20px", "16px", "20px"],
        boxShadow: [
            "0px 1px 10px rgba(0, 0, 0, 0.1)",
            "0px 1px 10px rgba(0, 0, 0, 0.1)",
            "0px 4px 20px rgba(0, 0, 0, 0.1)",
        ],
        border: ["5px solid #FFFFFF", "5px solid #FFFFFF", "10px solid #FFFFFF"],
        width: ["", "100%", "310px"],
    }),
);
export const TileTitle = styled.div(
    {
        color: "#000E1A",
        fontSize: "20px",
        fontWeight: "700",
    },
    mq({ marginTop: ["0px", "0px", "11px"] }),
);

export const TileLink = styled.a({
    display: "flex",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "700",
    color: "#FA5A28",
    textDecoration: "none",
});
export const TileDescription = styled.div(
    {
        color: "#000E1A",
        fontSize: "14px",
        fontWeight: "400",
        letterSpacing: ".01px",
    },
    mq({
        lineHeight: ["24px", "24px", "18px"],
        margin: ["18px 0px 18px 0px", "18px 0px 18px 0px", "19px 20px 16px 0px"],
    }),
);
