import styled from "@emotion/styled";
import Img from "gatsby-image";

import mq from "../../utils/breakpoints";

export const Container = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const ContentSection = styled.div(
    mq({
        marginTop: ["40px", "35px", "75px"],
        marginBottom: ["40px", "50px", "100px"],
    }),
);

export const H2 = styled.h2(
    {
        color: "#000E1A",
        fontSize: "24px",
        lineHeight: "30px",
        fontWeight: "bold",
        textAlign: "center",

        "& span": {
            backgroundColor: "#00CCB033",
            display: "inline-block",
        },
    },
    mq({
        marginTop: ["0px", "", ""],
    }),
);

export const CurlyBracketsSection = styled.div(
    {
        display: "grid",
        "@media (max-width: 390px)": {
            transform: "scale(0.8)",
        },
    },
    mq({
        gridTemplateColumns: ["50px 1fr 50px", "50px 660px 50px", "50px 700px 50px"],
    }),
);

export const CurlyBrackets = styled.div(
    {
        display: "flex",
        alignItems: "center",
        fontWeight: "300",
        fontSize: "150px",
        lineHeight: "190px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#44486C",
        userSelect: "none",
    },
    mq({
        marginTop: ["-20px", "-40px", "-40px"],
    }),
);

export const Content = styled.div(
    {
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        "& .stats-section:nth-child(1)": [
            {},
            mq({
                paddingLeft: ["", "", "30px"],
                paddingRight: ["", "", "60px"],
            }),
        ],
        "& .stats-section:nth-child(2)": [
            {},
            mq({
                order: ["1", "0"],
                borderLeft: ["none", "1px solid #E5E5E5"],
                borderRight: ["none", "1px solid #E5E5E5"],
                paddingLeft: ["", "", "55px"],
                paddingRight: ["", "", "55px"],
            }),
        ],
        "& .stats-section:nth-child(3)": [
            {},
            mq({
                borderBottom: ["1px solid #E5E5E5", "none"],
                borderTop: ["1px solid #E5E5E5", "none"],
                paddingRight: ["", "20px", "0px"],
                paddingLeft: ["", "0px", "15px"],
            }),
        ],
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)", " 200px 272px 231px"],
    }),
);

export const StatsSection = styled.div(
    mq({
        padding: ["15px 15px", "0 40px", "0 50px"],
        display: ["flex", "block", "block"],
    }),
);

export const StatsCount = styled.div(
    {
        fontWeight: "900",
        lineHeight: "30px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#00CCB0",
    },
    mq({
        fontSize: ["30px", "50px", "60px"],
        marginBottom: ["0", "15px"],
    }),
);

export const StatsText = styled.div(
    {
        lineHeight: "30px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#44486C",
    },
    mq({
        fontSize: ["14px", "16px"],
        marginLeft: ["10px", "0px"],
    }),
);

export const InvestorsSection = styled.div({
    display: "grid",
    justifyContent: "center",
});

export const H3 = styled.h3({
    fontSize: "16px",
    lineHeight: "20px",
    textTransform: "uppercase",
    color: "#44486C",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "25px",
    marginBottom: "15px",
});

export const InvestorsImage = styled.div(
    {
        display: "flex",
        justifyContent: "space-around",
        background: "#F6F4F8",
        borderRadius: "6px",
        maxWidth: "608px",
        "@media (max-width: 400px)": {
            zoom: "0.8",
        },

        "& > img": [
            {
                padding: "0",
            },
            mq({
                width: ["72px", "98px"],
                height: ["24px", "33px"],
                margin: ["0 9px", "0 25px"],
            }),
        ],
    },
    mq({
        padding: ["16px", "20px 0"],
    }),
);
