import styled from "@emotion/styled";
import mq from "../../utils/breakpoints";

export const H2 = styled.h2(
    {
        color: "#000E1A",
        fontSize: "42px",
        lineHeight: "53px",
        fontWeight: "bold",
        textAlign: "center",
        maxWidth: "663px",
        marginBottom: "87px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "16px",
        paddingRight: "16px",

        "& span": {
            color: "#FA5A28",
        },

        "@media (max-width: 1240px)": {
            fontSize: "36px",
            lineHeight: "45px",
            marginBottom: "40px",
        },
    },
    mq({
        marginTop: ["45px", "45px", "50px"],
    }),
);

export const H4 = styled.h4({
    color: "#44486C",
    fontSize: "20px",
    lineHeight: "25px",
    fontWeight: "bold",
    margin: "0px",
});

export const H5 = styled.h5({
    color: "#44486C",
    fontSize: "18px",
    lineHeight: "23px",
    fontWeight: "bold",
    margin: "0px",
});

export const P = styled.p({
    color: "#44486C",
    fontSize: "14px",
    lineHeight: "18px",
    marginBottom: "0px",
    justifySelf: "Start",
});

export const WhyWebinyTableContainer = styled.div({
    marginLeft: "0 auto",
    marginRight: "0 auto",
    width: "100%",
    marginTop: "100px",
    marginBottom: "120px",
    "@media (max-width: 1240px)": {
        marginTop: "45px",
        marginBottom: "120px",
    },

    "& .why-webiny-table": {
        display: "grid",
        gridTemplateColumns: "455px auto",
        maxWidth: "1191px",
        paddingLeft: "16px",
        paddingRight: "16px",
        margin: "0 auto",

        "@media (max-width: 1240px)": {
            gridTemplateColumns: "402px auto",
            columnGap: "3px",
        },
    },

    "& .why-webiny-table-row-left": {
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "309px 147px",
        padding: "10px",
        boxSizing: "border-box",

        "@media (max-width: 1240px)": {
            gridTemplateColumns: "255px 147px",
        },
    },

    "& .why-webiny-table-row-right": {
        width: "735px",
        display: "grid",
        placeItems: "center",
        boxSizing: "border-box",
        gridTemplateColumns: "repeat(5, 147px)",
    },

    "& .background-grey": {
        backgroundColor: "#F6F4F8",
    },

    "& .background-white": {
        backgroundColor: "#fff",
    },

    "& .table-space": {
        marginTop: "60px",
    },

    "& .why-webiny-table-cell": {
        display: "grid",
        placeItems: "center",
        rowGap: "10px",
    },

    "& .text-center": {
        textAlign: "center",
    },

    "& .sticky-header": {
        position: "-webkit-sticky",
        position: "sticky",
        top: "65px",

        "@media (max-width: 836px)": {
            top: "61px",
        },
    },

    "& .changed-title": {
        justifySelf: "start",
        width: "100%",
    },

    "& .heading-height": {
        height: "46px",
        marginBottom: "30px",
    },

    "& .sticky-header-right": {
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        height: "46px",
    },

    "& .sticky-header-right-item": {
        flex: "1 0 147px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    "& .table-right-overflow": {
        overflowY: "hidden",
        overflowX: "auto",
    },

    "& .table-right-overflow::-webkit-scrollbar": {
        height: "5px",
        width: "5px",
    },

    "& .table-right-overflow::-webkit-scrollbar-track": {
        background: "#F6f4f8",
        borderRadius: "100px",
    },

    "& .table-right-overflow::-webkit-scrollbar-thumb": {
        backgroundColor: "#cccccc",
        borderRadius: "100px",
    },

    "& .row-bottom-spacing": {
        marginTop: "30px",
        marginBottom: "30px",
    },
});

export const Link = styled.a({
    display: "grid",
    placeItems: "center",
    rowGap: "10px",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: 700,
    color: "#000E1A",
    textDecoration: "underline",
    cursor: "pointer",

    "& span": {
        color: "#FA5A28",
        textDecoration: "underline",
        display: "block",
    },
});
