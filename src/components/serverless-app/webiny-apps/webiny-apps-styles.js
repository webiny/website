import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
// assets
import heroBg from "./assets/webiny-apps-hero-bg.svg";
import rectangleBg from "./assets/serverless-bg.svg";
import contributeBg from "./assets/bg.svg";
import benefitsBg from "./assets/serverless-benefits-rectangle.svg";

export const HeroSection = styled("section")(
    {
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundImage: "url(" + heroBg + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
    },
    mq({
        padding: ["0px 15px 110px", "0px 15px"],
    }),
);

export const containerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        padding: ["75px 0px 0px", "85px 0px 110px"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
    }),
);

export const Wrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
        marginBottom: [60],
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
        marginBottom: 20,
        marginTop: 90,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

export const TitleHighlight = styled("span")({
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

export const SubTitle = styled("h3")(
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

export const WebinyHallMarkImage = styled("img")(
    {
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        height: "100%",
    },
    mq({
        width: ["100%", "100%"],
        maxHeight: ["unset", 856],
    }),
);

export const FeatureWrapper = styled("div")(
    {
        display: "grid",
        columnGap: 30,
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
        rowGap: [40, 40, 0],
    }),
);

export const FeatureCard = styled("div")(props => ({
    display: "flex",
    flexDirection: "column",
    width: 270,
    minHeight: 268,
    backgroundColor: "#6C2652",
    boxShadow: "2px 3px 15px rgba(100, 100, 100, 0.239216)",
    borderRadius: 4,
    padding: "10px 16px 16px",
    boxSizing: "border-box",
    textAlign: "center",

    "& .card__img": {
        width: "100%",
        height: 100,
        maxWidth: 120,
        margin: "0px auto",
    },

    "& .card__title": {
        margin: "10px 0px 8px",
        padding: props.extraPadding ? "0px 34px" : "",
        maxWidth: 250,
        color: theme.color.white,
        fontSize: theme.fontSize.xl,
        fontWeight: theme.fontWeight.bold,
    },
    "& .card__body": {
        margin: 0,
        padding: props.extraPadding ? "0px 10px" : "",
        color: theme.color.white,
        fontSize: theme.fontSize.base,
        fontWeight: theme.fontWeight.regular,
        "& a": {
            color: theme.color.primaryDark,
        },
    },
}));

export const ServerlessApp = styled("div")(
    props => ({
        boxSizing: "border-box",
        display: "flex",
        width: "100%",

        "& .text-content": {
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0px 60px 0px 0px",

            "& .text-content__title": {
                margin: "0px 0px 30px",
                fontSize: 42,
                fontWeight: theme.fontWeight.bold,
                color: theme.color.black,
                span: {
                    color: theme.color.purple,
                },
            },
            "& .text-content__body": {
                maxWidth: 388,
                margin: "0px 0px 40px",
                fontSize: theme.fontSize["2xl"],
                fontWeight: theme.fontWeight.regular,
                color: theme.color.black,
            },
            "& .text-content__action": {
                width: "100%",
            },
        },
        "& .media-content": {
            boxSizing: "border-box",
            position: "relative",
            display: "flex",

            "& .media-content__img": {
                width: "100%",
                backgroundImage: "url(" + props.imgSrc + ")",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.301961)",
            },
            "& .media-content__img-bg": {
                position: "absolute",
                zIndex: -1,
                top: 0,
                right: 0,
            },
        },
    }),
    mq({
        marginBottom: [120, 80, 120],
        flexDirection: ["column", "row"],
        "& .text-content": {
            width: ["100%", "40%"],
            padding: [0, "0px 60px 0px 0px"],
            marginBottom: [80, 0],
            "& .text-content__title": {
                margin: ["0px 0px 8px", "0px 0px 30px"],
            },
            "& .text-content__body": {
                margin: ["0px 0px 30px", "0px 0px 40px"],
            },
            "& .text-content__action .button": {
                width: ["100%", 217],
            },
        },
        "& .media-content": {
            width: ["100%", "60%"],
            "& .media-content__img": {
                height: [200, 400],
            },

            "& .media-content__img-bg": {
                width: ["80%", "auto"],
                transform: ["translate(0%, -12%)", "translate(20%, -12%)"],
            },
        },
    }),
);

export const serverlessAppsRTLClass = css(
    {
        "& .media-content": {
            "& .media-content__img-bg": {
                left: 0,
            },
        },
    },
    mq({
        flexDirection: ["column", "row-reverse"],
        "& .text-content": {
            padding: [0, "0px 0px 0px 60px"],
        },
        "& .media-content": {
            "& .media-content__img-bg": {
                transform: ["translate(0%, -12%)", "translate(-20%, -12%)"],
            },
        },
    }),
);

export const ExploreAppsSection = styled(HeroSection)({
    background: theme.color.white,
    overflow: "hidden",
});

export const ExploreAppsTitle = styled(Title)({
    color: theme.color.black,
});

export const ExploreAppsTitleHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + rectangleBg + ")",
});

export const ExploreAppsSubTitle = styled(SubTitle)(
    {
        color: theme.color.black,
        marginBottom: 100,
    },
    mq({
        maxWidth: [337, 890],
    }),
);

export const ContributeSection = styled(HeroSection)(
    {
        backgroundImage: "url(" + contributeBg + ")",
        backgroundPosition: "top",
    },
    mq({
        paddingTop: [110],
    }),
);

export const contributeClass = css(
    {},
    mq({
        height: ["100%", 460],
    }),
);

export const ContributeTitleWrapper = styled(Wrapper)(
    {
        height: "100%",
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
        "& .button": {
            width: 321,
            marginTop: 30,
        },
    },
    mq({
        width: ["100%", "100%"],
    }),
);

export const ContributeTitle = styled(Title)({
    maxWidth: 600,
    marginTop: 0,
});

export const ServerlessBenefitsSection = styled(HeroSection)(
    {
        background: theme.color.white,
        overflow: "hidden",
    },
    mq({
        paddingBottom: [0],
    }),
);

export const ServerlessBenefitTitle = styled(Title)(
    {
        color: theme.color.black,
        maxWidth: 950,
        margin: "60px 0px 0px",
    },
    mq({
        fontSize: [40, theme.fontSize["5xl"]],
    }),
);

export const ServerlessBenefitTitleHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + benefitsBg + ")",
});

export const ServerBenefitsWrapper = styled("div")(
    {
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"],
        rowGap: [40, 40, 0],
        margin: [0, "100px 0px"],
    }),
);

export const BenefitBox = styled("div")(
    props => ({
        display: "flex",
        flexDirection: "column",
        width: 328,
        boxSizing: "border-box",
        padding: "24px 40px",

        borderLeft: props.borderLeft ? "1px solid #E2E2E2" : "0px",
        borderRight: props.borderRight ? "1px solid #E2E2E2" : "0px",
        borderBottom: props.borderBottom ? "1px solid #E2E2E2" : "0px",

        "& .benefit__img": {},
        "& .benefit__title": {
            textAlign: "center",
            margin: "16px 0px 0px",
            fontWeight: theme.fontWeight.bold,
            fontSize: theme.fontSize["xl"],
        },
    }),
    mq({
        borderColor: [theme.color.white, theme.color.white, "#E2E2E2"],
    }),
);
