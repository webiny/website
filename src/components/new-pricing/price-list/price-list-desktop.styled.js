import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";

export const buttonOutlinePrimary = css({
    backgroundColor: `${theme.color.white} !important`,
    color: `${theme.color.primaryDark} !important`,
});

export const FlexWrapper = styled.div(
    {
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["306px 1fr", "302px 1fr", "350px 1fr"],
    }),
);
export const RightContainer = styled("div")(
    {
        width: "100%",
        display: "flex",
    },
    mq({
        gap: ["24px", "52px", "24px"],
    }),
);
export const LeftContainer = styled("div")({
    display: "flex",
    alignItems: "center",
});

export const MainWrapper = styled("div")({
    "& p": {
        fontSize: "14px",
        lineHeight: "18px",
        color: "#44486C",
        margin: "0",
    },
});

export const SubWrapper = styled("div")({
    width: "100%",
    textAlign: "center",

    "& h4": {
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "23px",
        color: "#44486C",
        marginBottom: "20px",
    },

    "& p": {
        maxWidth: 232,
        margin: "0 20px",
    },

    "&.with-button": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        "& .try-it-now-for-free_button": mq({
            display: ["none", "block", "block"],
        }),

        "& .try-it-now_button": mq({
            display: ["block", "block", "none"],
        }),

        a: [
            {
                display: "block",
                maxWidth: 200,
                minWidth: 116,
                padding: "12px 0",
            },
            mq({
                width: [116, 116, "100%"],
            }),
        ],
        h3: {
            marginTop: 0,
        },
    },

    "& .button-border-line": {
        maxWidth: "200px",
        border: `solid 2px ${theme.color.primaryDark} !important`,
    },
});

export const SubWrapperTable = styled("div")({
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& p": {
        maxWidth: 232,
        margin: "0",
        fontSize: "14px",
        lineHeight: "18px",
        color: "#44486C",
    },

    "&.with-button": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        a: {
            width: 200,
            display: "block",
        },
        h3: {
            marginTop: 0,
        },
    },
    "& .subList": {
        "& p:nth-child(2)": {
            fontSize: "12px",
            lineHeight: "15px",
            color: "#898B9E",
        },
    },
});

export const MainWrapperTitle = styled.h4({
    color: "#44486C",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "25px",
    margin: 0,
});

export const OddWrapper = styled.div(
    {
        "& > div": {
            padding: "10px",
        },
        "& > div:nth-child(odd)  ": {
            backgroundColor: "#F6F4F8",
        },
    },
    mq({
        marginBottom: ["30px", "30px", "60px"],
    }),
);

export const ButtonsWrapper = styled.div(props =>
    mq({
        marginBottom: ["8px", "8px", "28px"],
        marginTop: props.bottom && "50px",
    }),
);
