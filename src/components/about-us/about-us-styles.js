import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
// assets
import contributorsBg from "./assets/about-contributors-bg.svg";
import heroBg from "./assets/about-hero-bg.svg";
import dotsBg from "./assets/dots.svg";
import goServerlessBg from "./assets/bgwaves.svg";

export const SectionWithBackground = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + heroBg + ")",
        backgroundRepeat: "no-repeat",
        //padding: "0px 15px",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
    },
    mq({}),
);

export const SectionWithWaves = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + goServerlessBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        padding: "0px 15px",
    },
    mq({}),
);

export const SectionWithDots = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundImage: "url(" + dotsBg + ")",
        backgroundRepeatX: "repeat",
        backgroundRepeatY: "no-repeat",
        backgroundPosition: "bottom",
        padding: "0px 15px",
    },
    mq({
        backgroundSize: ["cover", "contain"],
    }),
);

export const SectionWithGrayRectangle = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + contributorsBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        padding: "0px 15px",
    },
    mq({
        backgroundSize: ["cover"],
    }),
);

export const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
    },
    mq({
        padding: ["100px 15px", "80px 15px"],
    }),
);

export const TeamSection = styled("section")(
    {
        backgroundColor: theme.color.white,
    },
    mq({
        padding: ["0px 15px 100px", "0px 15px 80px"],
    }),
);

export const heroContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
        // For "WebinyHallMarkImage"
        overflow: "hidden",
    },
    mq({
        width: ["100%", "100%"],
        height: ["50vh", 404],
        padding: ["0px 0px", "0px 0px 0px"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
    }),
);

export const contributorsContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        padding: ["80px 0px", "120px 0px 80px"],
    }),
);

export const welcomeContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        padding: ["0px 0px", "0px 0px 0px"],
    }),
);

export const investorContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        height: ["50vh", 525],
        padding: ["0px 0px", "80px 0px 0px"],
    }),
);

export const mediaKitContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        height: ["auto", 600],
        padding: ["80px 0px", "80px 0px 0px"],
    }),
);

export const HeroSectionWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
    }),
);

export const WebinyHallMarkImage = styled("img")(
    {
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
    },
    mq({
        width: ["100%", "100%"],
        height: ["100%", "auto"],
        maxHeight: ["unset", 700],
    }),
);

export const Title = styled("h1")(
    {
        maxWidth: 768,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.white,
        textAlign: "center",
        lineHeight: "48px",
    },
    mq({
        margin: [0, "0px auto"],
    }),
);

export const TitleHighlight = styled("span")({
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

export const Text = styled("p")(
    {
        fontSize: theme.fontSize["2xl"],
        fontWeight: theme.fontWeight.regular,
        lineHeight: "34px",
        marginTop: 0,
        marginBottom: 26,
        color: theme.color.white,
        textAlign: "center",
    },
    mq({
        maxWidth: [337, 590],
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

export const ImageWrapper = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    position: "relative",
});

export const videoPreviewClass = css({
    position: "absolute",
    "& img": {
        width: "95%",
        transform: "translate(2%, -10%)",
    },
});

export const TeamWrapper = styled("div")(
    {
        width: "100%",
        maxWidth: 1000,
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(4, 1fr)"],
        gridGap: ["80px 0px", "50px 70px"],
    }),
);

export const ProfileCard = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px auto",
        width: "100%",
        maxWidth: 190,

        textAlign: "center",
        "& .profile__img": {
            //height: "100%",
            //width: "100%",
            height: 160,
            marginBottom: 8,
            //objectFit: "cover"
        },
        "& .profile__name": {
            marginBottom: 0,
            color: theme.color.black,
            fontSize: theme.fontSize["2xl"],
            fontWeight: theme.fontWeight.bold,
            justifyContent: "center",
        },
        "& .profile__title": {
            margin: "0px 0px 10px",
        },
        "& .profile__links": {
            listStyle: "none",
            display: "flex",

            "& .profile__link": {
                marginRight: 8,

                "& img": {
                    width: 20,
                    height: 20,
                },
            },
        },
        a: {
            color: theme.color.grayText,
            textDecoration: "underline",
            "&:hover": {
                color: theme.color.primaryDark,
            },
        },
    },
    mq({}),
);

export const TeamPath = styled("img")({
    width: "100%",
});

export const ContributorsWrapper = styled("div")(
    {
        width: "100%",
        maxWidth: 1000,
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"],
        gridGap: ["80px 0px", "60px 70px"],
    }),
);

export const ContributorCard = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px auto",
        width: "100%",
        maxWidth: 140,
        transition: "transform 250ms ease-out",
        cursor: "pointer",

        "&:hover": {
            transform: "translateY(-5px) scale(1.05)",
        },

        textAlign: "center",
        "& .card__img": {
            height: 140,
            width: 140,
            marginBottom: 20,
            borderRadius: 8,
        },
        "& .card__name": {
            marginBottom: 0,
            color: theme.color.black,
            fontSize: theme.fontSize.sm,
            fontWeight: theme.fontWeight.bold,
            justifyContent: "center",
        },
    },
    mq({}),
);

export const ButtonWrapper = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginTop: 50,

    "& .icon": {
        marginLeft: 16,
    },
});

export const TraitsWrapper = styled("div")(
    {
        width: "100%",
        maxWidth: 963,
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
        gridGap: ["40px 0px", "0px"],
    }),
);

export const TraitCard = styled("div")(
    {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "0px auto",
        width: "100%",
        maxWidth: 319,
        height: 210,
        backgroundColor: theme.color.lightGray,
        padding: 30,
        textAlign: "left",

        "& .card__img": {
            height: "auto",
            width: "auto",
            marginBottom: 20,
        },
        "& .card__title": {
            marginBottom: 0,
            color: theme.color.black,
            fontSize: theme.fontSize.lg,
            fontWeight: theme.fontWeight.bold,
            justifyContent: "center",
        },
    },
    mq({
        "&.spanTwoRows": {
            gridRow: ["", "2 / 4"],
            gridColumn: ["", "2"],
            padding: [0, 0],

            "& .card__img": {
                width: ["100%"],
                height: ["100%", "auto"],
                marginBottom: [0, 20],
                objectFit: ["cover"],
            },
        },
    }),
);

export const More = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1,
    boxSizing: "border-box",
    maxWidth: 900,
    width: "100%",
    padding: "60px 30px",
    backgroundColor: theme.color.white,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.0980392)",
    borderRadius: 12,

    "& .img": {
        maxWidth: 208,
    },
});

export const MediaCardWrapper = styled("div")(
    {
        width: "100%",
        maxWidth: 963,
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
        gridGap: ["40px 0px", "0px 30px"],
    }),
);

export const MediaKitCard = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.color.white,

        width: 303,
        height: 286,
        borderRadius: 8,
        transition: "transform 300ms ease-in",
        cursor: "pointer",

        "&:hover": {
            transform: "translateY(-10px) scale(1.05)",
        },

        "& .img": {
            width: "100%",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
        },

        "& .link": {
            fontSize: theme.fontSize.lg,
            textAlign: "center",
            padding: 24,
            color: theme.color.primaryDark,
        },
    },
    mq({
        margin: ["0 auto"],
    }),
);

export const FoundersVideoTitle = styled("h3")({
    width: "100%",
    textAlign: "center",
    paddingTop: 25,
    fontWeight: 700,
    fontSize: "1.125rem",
    marginBottom: 30,
});
