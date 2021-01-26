import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import mq from "../../../utils/breakpoints";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import theme from "../../../utils/theme";

const containerClass = css({
    position: "relative",
});

const SlideSection = styled("div")({
    ".fade-enter": {
        opacity: 0,
    },
    ".fade-enter.fade-enter-active": {
        opacity: 1,
        transition: "opacity 200ms ease-in",
        transitionDelay: "200ms",
    },
    ".fade-exit": {
        opacity: 1,
    },
    ".fade-exit.fade-exit-active": {
        opacity: 0,
        transition: "opacity 200ms ease-in",
    },
    ".fade-exit-done": {
        opacity: 0,
    },
});

const SelectedItem = styled("div")(
    {
        zIndex: 1,
        boxSizing: "border-box",
        width: "100%",
        height: "100%",

        "& h4": {
            fontSize: 32,
            fontWeight: 700,
            lineHeight: "50px",
            color: theme.color.black,
            margin: "10px 0",
        },

        "& p": {
            fontSize: 18,
            lineHeight: "150%",
            color: theme.color.black,
        },

        "& img": {
            width: "100%",
        },

        "& h5": {
            fontWeight: "bold",
            fontSize: 26,
            lineHeight: "32px",
            marginBottom: 15,
        },

        "& ul": {
            display: "grid",
            listStyle: "none",
            padding: 0,

            "& li": {
                position: "relative",
                paddingLeft: 25,
                color: theme.color.black,
                fontSize: 18,
                lineHeight: "125%",

                "& span": {
                    position: "absolute",
                    top: 6,
                    left: 0,
                    height: 15,
                    width: 15,
                    backgroundColor: "#90C418",
                    borderRadius: "50%",

                    "&:after": {
                        content: '" "',
                        position: "absolute",
                        top: 4,
                        left: 4,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "white",
                    },
                },
            },
        },
    },
    mq({
        maxWidth: [450, "100%"],
        margin: ["10px auto 0", 0],
        flexDirection: ["column", "column"],
        padding: ["24px", "24px 36px"],
        position: ["relative", "absolute"],

        "& h4": {
            textAlign: ["center", "left"],
        },

        "& p": {
            textAlign: ["center", "left"],
        },

        "& ul": {
            gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
            gridGap: [0, 10],
        },
        "& img": {
            maxHeight: ["auto", "330px"],
        },
    }),
);

const SelectedNav = props => {
    const selectedNav = props.content;
    return (
        <SlideSection>
            <TransitionGroup className={containerClass}>
                <CSSTransition key={selectedNav.id} timeout={600} classNames={"fade"}>
                    <SelectedItem>
                        <img src={selectedNav.mainLogo} alt="" />
                        <h4 className="main-title">{selectedNav.title}</h4>
                        {selectedNav.description && (
                            <p className="description">{selectedNav.description}</p>
                        )}
                        <div>
                            {selectedNav.subtitle && <h5>{selectedNav.subtitle}</h5>}
                            {selectedNav.relatedList && (
                                <ul>
                                    {selectedNav.relatedList.map((item, index) => (
                                        <li key={index}>
                                            <span></span> {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </SelectedItem>
                </CSSTransition>
            </TransitionGroup>
        </SlideSection>
    );
};

export default SelectedNav;
