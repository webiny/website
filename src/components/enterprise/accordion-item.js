import React, { useState } from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

const AccordionWrapper = styled("div")({
    borderBottom: "1px solid  #D8D8D8",

    "& .title-wrapper": {
        position: "relative",

        "& .accordion-title": {
            fontWeight: 600,
            cursor: "pointer",
            color: theme.color.black,
            padding: "1.5em 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            "&::before": {
                transform: "rotate(-90deg)",
                transition:
                    "transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1), -webkit-transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1)",
            },

            "&::after, &::before": {
                content: '" "',
                position: "absolute",
                left: 0,
                top: "48%",
                width: 22,
                height: 4,
                backgroundColor: theme.color.black,
            },

            "&.open": {
                color: theme.color.black,

                "&::before": {
                    content: '" "',
                    borderTop: 0,
                    transform: "rotate(0deg)",
                },
            },

            "& p": {
                margin: "0 0 0 35px",
            },
        },
    },

    "& .accordion-item": {
        overflow: "hidden",
        transition: "max-height 0.3s cubic-bezier(1,0,1,0)",
        height: "auto",
        maxHeight: 9999,

        "&.collapsed": {
            maxHeight: 0,
            transition: "max-height 0.35s cubic-bezier(0,1,0,1)",
        },

        ".accordion-content": {
            padding: "1.5em 2.5em",
            color: theme.color.black,
        },
    },
});

const Accordion = ({ item }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <AccordionWrapper>
            <div className="title-wrapper">
                <div
                    className={`accordion-title ${isOpen ? "open" : ""}`}
                    onClick={() => setOpen(!isOpen)}
                >
                    <p>{item.title}</p>
                </div>
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{item.children}</div>
            </div>
        </AccordionWrapper>
    );
};

export default Accordion;
