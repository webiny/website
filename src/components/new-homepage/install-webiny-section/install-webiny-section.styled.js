import styled from "react-emotion";
import mq from "../../utils/breakpoints";
import Button from "../../ui/button";
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
export const ButtonPrimary = styled(Button)(
    {
        marginBottom: 15,
    },
    mq({
        marginTop: ["21px", "14px", "12px"],
        maxWidth: ["393px", "211px", "211px"],
    }),
);

export const Container = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 17px",
    "@media (max-width: 428px)": {
        padding: "0px 14px",
    },
});

export const DemoLink = styled("a")(
    {
        display: "flex",
        alignItems: "center",
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
    },
    mq({
        "& .demo-link": {
            marginTop: ["16px", "15px", "16px"],
        },
    }),
);

export const Title = styled.h2(
    {
        color: "#000E1A",
        fontWeight: "700",
        textAlign: "center",
        letterSpacing: ".003em",
        "@media (max-width: 428px)": {
            letterSpacing: ".0001em",
        },
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
