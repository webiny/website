import styled from "react-emotion";

import mq from "../../utils/breakpoints";

import bgDesktop from "../../../assets/new-homepage/open-source-benefits/bg-desktop.svg";
import bgTablet from "../../../assets/new-homepage/open-source-benefits/bg-tablet.svg";
import bgImageMobile from "../../../assets/new-homepage/open-source-benefits/bg-mobile.svg";

export const Container = styled.div(
    {
        display: "grid",
        alignContent: "start",
        justifyItems: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        backgroundPosition: "bottom",
        "@media (min-width: 699px)": {
            padding: "40px 16px 150px 16px",
        },
    },
    mq({
        backgroundImage: [`url(${bgImageMobile})`, `url(${bgTablet})`, `url(${bgDesktop})`],
        backgroundSize: ["1440px 100%", "100%", "100%"],
        padding: ["30px 16px", "40px 16px 150px 16px", "100px 124px 150px 124px"],
    }),
);

export const CodeSection = styled.div(
    {
        display: "grid",
        "& .code-section-width-wrapper": {
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
        },
    },
    mq({
        marginBottom: ["45px", "60px", "70px"],
        gridTemplateColumns: ["1fr", "1fr", "40% auto"],
        gap: ["30px", "30px", "75px"],
    }),
);

export const CodeSectionDescription = styled.div(
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        "& p": {
            margin: "0",

            "& span": {
                fontWeight: "bold",
            },
        },
        "@media (max-width: 836px)": {
            textAlign: "center",
        },
        "@media (max-width: 699px)": {
            textAlign: "start",
        },
    },
    mq({
        alignItems: ["normal", "center", "normal"],
        textAlign: [, "center", "start"],
    }),
);

export const CodeSectionLabel = styled.div({
    backgroundColor: "#00CCB01A",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "18px",
    textTransform: "uppercase",
    color: "#00CCB0",
    display: "inline-block",
    padding: "4px 16px",
    borderRadius: "6px",
});

export const CodeSectionTitle = styled.div({
    fontWeight: "bold",
    fontSize: "42px",
    lineHeight: "44px",
    color: "#FFFFFF",
    margin: "24px 0",

    "& span": {
        color: "#00CCB0",
    },
});

export const CodeSectionTabs = styled.div(
    {
        backgroundColor: "#150B27",
        borderRadius: "20px",
        overflow: "hidden",
        MozBackgroundClip: ["border", "padding", "content"],
        WebkitBackgroundClip: ["border", "padding", "content"],
        backgroundClip: ["border-box", "padding-box", "content-box"],
        filter: "drop-shadow(0px 0px 26px rgba(255, 255, 255, 0.15))",
        width: "100%",
        fontSize: "14px",
        lineHeight: "18px",

        "& .tabs-code": [
            {
                overscrollBehavior: "contain",
                overflowY: "auto",
                ".line-numbers": {
                    overscrollBehavior: "contain",
                    minHeight: "240px",
                },
                ".line-numbers-rows": {
                    left: -40,
                    "> span": {
                        whiteSpace: "nowrap",
                    },
                },
            },
            mq({
                height: ["300px", "350px", "350px"],
            }),
        ],

        "& ul": [
            {
                display: "grid",
                textAlign: "center",
            },
            mq({
                gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"],
            }),
        ],

        "& li:last-child,  li:nth-last-child(2):nth-child(odd)": {
            borderBottom: "normal",
        },

        "& li:nth-child(odd)": mq({
            borderRight: "1px solid #2B2D52",
        }),

        "& li": [
            {
                listStyle: "none",
                cursor: "pointer",
                backgroundColor: "#1B1625",
                padding: "10px",
            },
            mq({
                padding: ["14px 0", "12px 0"],
                borderLeft: ["0", "1px solid #2B2D52"],
                borderBottom: ["1px solid #2B2D52", "none"],
            }),
        ],

        "& li:first-child": {
            borderLeft: "0",
        },

        "& .isActiveTab": {
            borderBottom: "2px solid #00CCB0 !important",
        },
    },
    mq({
        maxWidth: ["100%", "100%", "900px"],
        border: ["5px solid rgba(255, 255, 255, 0.2)", "10px solid rgba(255, 255, 255, 0.2)"],
    }),
);

export const GridFramesContainer = styled.div(
    {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        "@media (max-width: 836px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
        },
        "@media (max-width: 699px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
        },
    },
    mq({
        gap: ["0 20px", "0 20px", "0 100px"],
    }),
);

export const Frame = styled.div(
    {},
    mq({
        margin: ["20px 0", "20px 0", "30px 0"],
    }),
);

export const FrameTitle = styled.div({
    marginTop: "20px",
    marginBottom: "20px",
});
export const FrameDescription = styled.p(
    {
        margin: "0px",
    },
    mq({
        fontSize: ["14px", "14px", "18px"],
    }),
);
export const FrameLink = styled.div({
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "26px",
    color: "#00CCB0",
    marginTop: "20px",

    "& a": {
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
            textDecoration: "underline",
        },
    },
});

export const CodeSectionExample = styled.div(
    props => ({
        opacity: props.show ? "1" : "0",
        "& pre": {
            zIndex: "-1",
        },
    }),
    mq({
        margin: ["13px 0 24px 0", "15px 0 31px 0", "15px 0 25px 0"],
        fontSize: ["12px", "14px"],
        lineHeight: ["30px", "20px"],
    }),
);
export const P = styled.p(
    mq({
        lineHeight: ["26px", "26px", "32px"],
        fontSize: ["16px", "16px", "20px"],
    }),
);
