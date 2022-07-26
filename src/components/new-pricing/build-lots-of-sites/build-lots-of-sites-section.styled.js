import styled from "react-emotion";

import mq from "../../utils/breakpoints";

import Button from "../../ui/button";

import backgroundImgMobile from "../../../assets/new-pricing/build-lots-of-sites-bg-mobile.svg";
import backgroundImgDesktop from "../../../assets/new-pricing/build-lots-of-sites-bg-desktop.svg";

export const BuildLotsSection = styled.div({
    margin: "0 auto",
    padding: "0px 15px",
});

export const GridWrapper = styled.div(
    {
        display: "grid",
        alignItems: "center",
        margin: "0 auto",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundColor: "rgba(123,73,215,0.05)",
        borderRadius: "8px",
        marginBottom: "40px",
    },
    mq({
        backgroundImage: [
            `url(${backgroundImgMobile})`,
            `url(${backgroundImgMobile})`,
            `url(${backgroundImgDesktop})`,
        ],
        backgroundSize: ["none", "cover", "none"],
        marginTop: ["20px", "40px", "100px"],
        maxWidth: ["804px", "1190px", "1190px"],
        height: ["269px", "269px", "176px"],
    }),
);

export const ButtonPurple = styled(Button)(
    {
        height: "52px",
    },
    mq({
        marginTop: ["35px", "10px", "0px"],
        maxWidth: ["253px", "253px", "253px"],
    }),
);

export const FlexContainer = styled.div(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    mq({
        marginBottom: ["10px", "10px", "0px"],
        flexDirection: ["column", "column", "row"],
        paddingRight: ["0px", "0px", "110px"],
    }),
);

export const TitleContainer = styled.div(
    {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        color: "#000E1A",
    },
    mq({
        maxWidth: ["323px", "323px", "390px"],
        paddingLeft: ["0px", "0px", "40px"],
    }),
);

export const Title = styled.h2(
    {
        fontWeight: "700",
        letterSpacing: ".003em",
    },
    mq({
        marginBottom: ["10px", "20px", "0px"],
        marginTop: ["10px", "0px", "0px"],
        fontSize: ["36px", "36px", "48px"],
        lineHeight: ["40px", "40px", "60px"],
        textAlign: ["center", "center", "left"],
    }),
);

export const Subtitle = styled.h4(
    {
        fontWeight: "400",
    },
    mq({
        marginBottom: ["0px", "25px", "0px"],
        marginTop: ["0px", "0px", "0px"],
        fontSize: ["20px", "20px", "22px"],
        lineHeight: ["30px", "30px", "30px"],
        textAlign: ["center", "center", "left"],
    }),
);

export const PurpleText = styled.span({
    fontWeight: "700",
    color: "#7B49D7",
});
