import styled from "react-emotion";

import mq from "../../utils/breakpoints";

export const Wrapper = styled.div(
    {
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "15px",
        paddingRight: "15px",
        color: "#000E1A",
        maxWidth: 804,
    },
    mq({
        //maxWidth: ["804px", "1035px", "1035px"],
        paddingBottom: ["36px", "52px", "132px"],
    }),
);

export const Title = styled.h2(
    {
        fontWeight: "700",
        textAlign: "center",
        letterSpacing: ".003em",

        "& span": {
            color: "#FA5A28",
        },
    },
    mq({
        marginTop: ["40px", "40px", "100px"],
        fontSize: ["36px", "36px", "48px"],
        lineHeight: ["46px", "45px", "60px"],
    }),
);

export const SubTitle = styled.p(
    {
        color: "#000E1A",
        textAlign: "center",
        marginBottom: 0,
    },
    mq({
        marginTop: ["20px", "30px", "30x"],
        fontSize: ["20px", "20px", "24px"],
        lineHeight: ["30px", "20px", "34px"],
    }),
);

export const Accordion = styled.div(
    mq({
        marginTop: ["8px", "12px", "86px"],
    }),
);

export const AccordionItemWrapper = styled("div")(
    {
        borderBottom: "1px solid #D9E2EC",

        "& .title-wrapper": {
            position: "relative",

            "& .accordion-title": {
                fontWeight: 700,
                cursor: "pointer",
                paddingTop: "32px",
                paddingBottom: "32px",
                paddingLeft: "19px",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                lineHeight: "25px",

                "& svg": {
                    minWidth: "12px",
                    marginTop: "7px",
                    marginLeft: "10px",
                    color: "#FA5A28",
                    transform: "rotate(0deg)",
                    transition:
                        "transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1), -webkit-transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1)",
                },

                "&.open": {
                    color: "#FA5A28",

                    "& svg": {
                        transform: "rotate(-180deg)",
                    },
                },

                "& p": {
                    margin: 0,
                },
            },
        },

        "& .accordion-item": {
            overflow: "hidden",
            //transition: "max-height 0.3s cubic-bezier(1,0,1,0)",
            //transition: "max-height 0.5s ease-in-out 0s",
            transition: ".5s ease",
            height: "auto",
            opacity: 1,
            maxHeight: "500px",

            "&.collapsed": {
                maxHeight: 0,
                transition: "0.3s ease",
                opacity: 0,
                //transitionTimingFunction: "ease-in",
                //transition: "max-height 1s",
            },

            ".accordion-content": {
                paddingBottom: "28px",
                paddingLeft: "19px",
                paddingRight: "11px",

                "& p": {
                    margin: "0 0 15px 0",
                    fontSize: "18px",
                    lineHeight: "28px",
                },

                "& a": {
                    color: "#FA5A28",
                },
            },
        },
    },
    mq({
        "& .accordion-title": {
            paddingRight: ["6px", "24px", "11px"],
        },
    }),
);
