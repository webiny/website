import styled from "react-emotion";
import Button from "../../ui/button";

export const ItemWrapper = styled.div(props => ({
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "25px",
    color: "#44486C",

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

    "& .button": {
        display: "table",
        width: "auto",
        padding: "14px 58px",
    },

    "& .plan-block-title": {
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "23px",
        marginBottom: "10px",
    },

    "& .item-plan-block": {
        marginTop: "30px",
    },

    "& .plan-items": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",

        "& p": {
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "18px",
            color: "#44486C",
        },
    },

    "& .plan-mark": {
        textAlign: "center",
    },

    "& .plan-items:nth-child(odd)": {
        backgroundColor: "#F6F4F8",
    },
}));

export const ButtonMobile = styled(Button)({
    width: "200px !important",
    padding: "12px 0px !important",
    height: "42px !important",
});

export const Arrow = styled.div(props => ({
    transform: props.showMenu && "rotate(180deg)",
}));
