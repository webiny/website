import styled from "react-emotion";

export const ItemWrapper = styled.div(props => ({
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "25px",
    color: "#44486C",
    paddingLeft: "17px",
    paddingRight: "17px",

    "& *": {
        margin: 0,
        padding: 0,
    },

    "& .collapsible-title-wrapper": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px 0",
        borderTop: props.border && "1px solid #D9E2EC",
    },

    "& .collapsible-title": {
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "25px",
    },

    "& .main-items-wrapper": {
        display: props.showMenu ? "block" : "none",
        marginBottom: "40px",
    },

    "& .plan-block-title-wrap": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    "& .plan-block-title": {
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "23px",
        marginBottom: "33px",
    },

    "& .plan-block-logo": {
        marginBottom: "33px",
        marginRight: "17px",
    },

    "& .item-plan-block": {
        marginTop: "7px",
        marginBottom: "60px",
    },

    "& .plan-items": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6.5px 11px",

        "& p": {
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "25px",
            color: "#44486C",
        },
    },

    "& .plan-mark": {
        textAlign: "center",
        marginRight: "11px",
    },

    "& .plan-items:nth-child(odd)": {
        backgroundColor: "#F6F4F8",
    },

    "& .text-right": {
        display: "grid",
        justifyItems: "end",
        textAlign: "right",
    },
}));

export const Arrow = styled.div(props => ({
    transform: props.showMenu && "rotate(180deg)",
    marginRight: "22px !important",
}));

export const P = styled.p({
    color: "#44486C",
    fontSize: "14px",
    lineHeight: "18px",
    marginBottom: "0px",
    justifySelf: "Start",
});

export const WhyWebinyTableMobileWrapper = styled.div({
    marginTop: "45px",
    marginBottom: "100px",
    "& .hr-line": {
        paddingLeft: "17px",
        paddingRight: "17px",
        height: "1px",
        border: "none",
        background: "#D9E2EC",
        backgroundClip: "content-box",
    },
});
