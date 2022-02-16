import styled from "react-emotion";

import mq from "../../utils/breakpoints";

import backgroundImg from "../../../assets/new-homepage/install-webiny-section/instal-webiby-bg.svg";

export const Wrapper = styled.div(
    {
        margin: "0 auto",
        display: "grid",
        alignItems: "center",
        backgroundColor: "#fff",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundPosition: "top",
    },
    mq({
        backgroundSize: ["1440px 100%", "1440px", "cover"],
        paddingBottom: ["40px", "65px", "80px"],
        marginTop: ["4px", "-12px", "-40px"],
    }),
);

export const Container = styled.div(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 17px",

        "& .orange-button": {
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: ".06em",
            color: "#fff",
            background: "#FA5A28",
            border: "none",
            borderRadius: "4px",
            textDecoration: "none",
            padding: "11px 0px",
            width: "100%",
            textAlign: "center",
        },
        "& .demo-link": {
            display: "flex",
            alignItems: "center",
            textDecoration: "underline",
            border: "none",
            fontFamily: "Source Sans Pro",
            fontWeight: "bold",
            fontSize: "18px",
            letterSpacing: ".001em",
            color: "#000",
        },
    },
    mq({
        "& .orange-button": {
            marginTop: ["21px", "14px", "12px"],
            maxWidth: ["393px", "211px", "211px"],
        },
        "& .demo-link": {
            marginTop: ["16px", "15px", "16px"],
        },
    }),
);

export const Title = styled.h2(
    {
        fontWeight: "700",
        textAlign: "center",
        letterSpacing: ".003em",
    },
    mq({
        maxWidth: ["488px", "366px", "488px"],
        marginTop: ["64px", "74px", "136px"],
        fontSize: ["36px", "36px", "48px"],
        lineHeight: ["45px", "45px", "60px"],
    }),
);

export const OrangeText = styled.span({
    color: "#fa5a28",
});
