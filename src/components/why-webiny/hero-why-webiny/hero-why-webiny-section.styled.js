import styled from "react-emotion";

import mq from "../../utils/breakpoints";

import backgroundImg from "../../../assets/why-webiny/hero-section.svg";
import CardsBlockImgMobileMini from "../../../assets/why-webiny/cards-block-mobile-mini.svg";
import CardsBlockImgMobile from "../../../assets/why-webiny/cards-block-mobile.svg";
import CardsBlockImgDesktop from "../../../assets/why-webiny/cards-block-desktop.svg";

export const HeroWhyContainer = styled.div(
    {
        margin: "0 auto",
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundPosition: "bottom",
    },
    mq({
        backgroundSize: ["none", "none", "cover"],
        marginBottom: ["50px", "50px", "50px"],
    }),
);

export const ContentWrapper = styled.div(
    {
        margin: "0 auto",
    },
    mq({
        maxWidth: ["396px", "805px", "1140px"],
    }),
);

export const TitleContainer = styled.div(
    mq({
        marginTop: ["40px", "70px", "70px"],
        marginBottom: ["30px", "60px", "60px"],
    }),
);

export const Title = styled.h2(
    {
        textAlign: "center",
        fontWeight: "700",
        color: "#000E1A",
        marginTop: "0px",
    },
    mq({
        fontSize: ["36px", "46px", "66px"],
        lineHeight: ["46px", "56px", "65px"],
        marginBottom: ["30px", "30px", "30px"],
        paddingLeft: ["16px", "86px", "150px"],
        paddingRight: ["16px", "86px", "150px"],
    }),
);

export const Subtitle = styled.h4(
    {
        textAlign: "center",
        color: "#000E1A",
        marginTop: "0px",
        marginBottom: "0px",
    },
    mq({
        fontSize: ["20px", "20px", "24px"],
        lineHeight: ["30px", "30px", "34px"],
        paddingLeft: ["3px", "0px", "90px"],
        paddingRight: ["3px", "0px", "90px"],
    }),
);

export const OrangeText = styled.span({
    color: "#FA5A28",
});

export const BoldText = styled.span({
    fontWeight: 700,
});

export const ComplexityCardsWrap = styled.div(
    {
        margin: "0 auto",
        position: "relative",
        color: "#000E1A",
        backgroundRepeat: "no-repeat",
        "@media (max-width: 375px)": {
            zoom: 0.93,
        },
        "@media (max-width: 392px)": {
            backgroundImage: `url(${CardsBlockImgMobileMini})`,
            width: "375px",
        },
    },
    mq({
        backgroundImage: [
            `url(${CardsBlockImgMobile})`,
            `url(${CardsBlockImgDesktop})`,
            `url(${CardsBlockImgDesktop})`,
        ],
        width: ["392px", "676px"],
        height: ["137px", "236px"],
        marginBottom: ["73px", "127px", "100px"],
    }),
);

export const TextFirstCardWrap = styled.div(
    {
        display: "flex",
        alignItems: "center",
        position: "absolute",
    },
    mq({
        top: ["10px", "18px"],
        left: ["11px", "19px"],
        width: ["134px", "233px"],
        height: ["54px", "93px"],
    }),
);

export const TextFirstCard = styled.div(
    {
        fontWeight: 700,
    },
    mq({
        fontSize: ["12px", "20px", "20px"],
        lineHeight: ["15px", "25px", "25px"],
        paddingLeft: ["27px", "45px"],
        paddingRight: ["15px", "25px"],
    }),
);

export const TextSecondCardWrap = styled.div(
    {
        display: "flex",
        alignItems: "center",
        position: "absolute",
    },
    mq({
        top: ["10px", "18px"],
        right: ["11px", "19px"],
        width: ["134px", "233px"],
        height: ["54px", "93px"],
    }),
);

export const TextSecondCard = styled.div(
    {
        fontWeight: 700,
    },
    mq({
        fontSize: ["12px", "20px", "20px"],
        lineHeight: ["15px", "25px", "25px"],
        paddingLeft: ["15px", "25px"],
        paddingRight: ["27px", "45px"],
    }),
);

export const TextThirdCardWrap = styled.div(
    {
        display: "flex",
        alignItems: "center",
        position: "absolute",
    },
    mq({
        bottom: ["10px", "18px"],
        left: ["11px", "19px"],
        width: ["134px", "233px"],
        height: ["54px", "93px"],
    }),
);

export const TextThirdCard = styled.div(
    {
        fontWeight: 700,
    },
    mq({
        fontSize: ["12px", "20px", "20px"],
        lineHeight: ["15px", "25px", "25px"],
        paddingLeft: ["27px", "45px"],
        paddingRight: ["15px", "25px"],
    }),
);

export const TextFourthCardWrap = styled.div(
    {
        display: "flex",
        alignItems: "center",
        position: "absolute",
    },
    mq({
        bottom: ["10px", "18px"],
        right: ["11px", "19px"],
        width: ["134px", "233px"],
        height: ["54px", "93px"],
    }),
);

export const TextFourthCard = styled.div(
    {
        fontWeight: 700,
    },
    mq({
        fontSize: ["12px", "20px", "20px"],
        lineHeight: ["15px", "25px", "25px"],
        paddingLeft: ["15px", "25px"],
        paddingRight: ["27px", "45px"],
    }),
);
