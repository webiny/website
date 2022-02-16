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
    },
    mq({
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
    },
    mq({
        alignItems: ["normal", "center", "normal"],
        textAlign: ["start", "center", "start"],
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

export const CodeSectionTabs = styled.div({
    backgroundColor: "#150B27",
    border: "10px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    MozBackgroundClip: ["border", "padding", "content"],
    WebkitBackgroundClip: ["border", "padding", "content"],
    backgroundClip: ["border-box", "padding-box", "content-box"],

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
});

export const GridFramesContainer = styled.div(
    { display: "grid" },
    mq({
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)"],
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

export const FrameLink = styled.div({
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "26px",
    color: "#00CCB0",
    marginTop: "20px",

    "& a": {
        textDecoration: "none",
        color: "inherit",
    },
});

export const CodeSectionExample = styled.div(
    props => ({
        opacity: props.show ? "1" : "0",
    }),
    mq({
        margin: ["13px 0 24px 0", "26px 0 31px 0", "26px 0 52px 0"],
    }),
);
