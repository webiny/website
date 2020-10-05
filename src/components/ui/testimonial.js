import React from "react";
import { Transition } from "react-transition-group";
import Swipe from "react-easy-swipe";
import { css } from "emotion";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

import navArrowImg from "./assets/testimonials-nav-arrow.svg";
import quoteImg from "./assets/testimonials-quote.svg";
import rightArrow from "./assets/testimonials-arrow-right-solid.svg";

const Container = styled("div")(
    {
        width: "100%",
        display: "flex",
        boxSizing: "border-box",
        position: "relative",
    },
    mq({
        padding: [20, 0],
    }),
);

const ControlsWrapper = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "50%",
    left: "0px",
    boxSizing: "border-box",
});

const ControlNavPrev = styled("div")({
    position: "absolute",
    left: 0,
    width: 35,
    height: 35,
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 1,
    "&:hover": {
        opacity: 0.8,
    },
});

const ControlNavNext = styled("div")({
    position: "absolute",
    right: 0,
    width: 35,
    height: 35,
    transform: "translateY(-50%) rotate(180deg)",
    cursor: "pointer",
    "&:hover": {
        opacity: 0.8,
    },
});

const InnerWrapper = styled("div")(
    {
        background: "#FFFFFF",
        boxShadow: "0 16px 32px 0 rgba(0,0,0,0.08)",
        display: "flex",
        minHeight: 450,
        borderRadius: 2,
        overflow: "hidden",
        alignItems: "center",
        zIndex: 2,
    },
    mq({
        flexDirection: ["column", "row"],
        width: ["auto", "auto"],
        margin: ["0 25px", "0 70px"],
        height: ["auto", "100%"],
    }),
);

const ImageContainer = styled("div")(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.color.footerBg,
        img: {
            maxWidth: "80%",
        },
    },
    mq({
        width: ["100%", "50%"],
        height: ["250px", "100%"],
    }),
);

const ContentContainer = styled("div")(
    {
        boxSizing: "border-box",
    },
    mq({
        width: ["100%", "50%"],
        padding: [15, 25],
    }),
);

const QuoteHolder = styled("div")(
    {},
    mq({
        background: ["none", "url(" + quoteImg + ") no-repeat"],
        fontSize: [18, 26],
        paddingTop: [10, 75],
    }),
);

const PersonHolder = styled("div")({
    marginTop: 15,
});

const Name = styled("div")({
    fontSize: 16,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.grayText,
});

const Position = styled("div")({
    fontSize: 14,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.grayText,
});

const linkStyle = css({
    color: theme.color.primaryDark,
    fontWeight: theme.fontWeight.semiBold,
    fontSize: 16,
    marginTop: 25,
    display: "block",
});

const Arrow = styled("img")({
    height: 9,
    marginLeft: 5,
});

const defaultStyle = {
    transform: "translateX(200px)",
    opacity: 0,
    transitionProperty: "transform, opacity",
    transitionTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    transitionDuration: "225ms",
    willChange: "opacity, transform",
};

const transitionStyles = {
    entering: { transform: "translateY(25px)", opacity: 0 },
    entered: { transform: "translateY(0px)", opacity: 1 },
};

class Testimonial extends React.Component {
    state = { items: [], activeItem: 0, isShown: true };

    setItems = items => {
        this.setState({ items });
    };

    componentDidMount() {
        this.setItems(this.props.items);
    }

    setActiveItem = index => {
        if (!this.state.isShown) {
            this.setState({ activeItem: index, isShown: true });
        } else {
            this.setState({ isShown: false }, () => {
                // check if next item is out of bound
                if (index > this.state.items.length - 1) {
                    index = 0;
                } else if (index < 0) {
                    index = this.state.items.length - 1;
                }
                this.setActiveItem(index);
            });
        }
    };

    render() {
        if (this.state.items.length < 1) {
            return null;
        }

        return (
            <Container>
                <ControlsWrapper>
                    <ControlNavPrev>
                        <img
                            src={navArrowImg}
                            onClick={() => {
                                this.setActiveItem(this.state.activeItem - 1);
                            }}
                        />
                    </ControlNavPrev>
                    <ControlNavNext>
                        <img
                            src={navArrowImg}
                            onClick={() => {
                                this.setActiveItem(this.state.activeItem + 1);
                            }}
                        />
                    </ControlNavNext>
                </ControlsWrapper>

                <Transition in={this.state.isShown} timeout={250} appear={true}>
                    {state => (
                        <Swipe
                            onSwipeLeft={() => {
                                this.setActiveItem(this.state.activeItem + 1);
                            }}
                            onSwipeRight={() => {
                                this.setActiveItem(this.state.activeItem - 1);
                            }}
                        >
                            <InnerWrapper style={{ ...defaultStyle, ...transitionStyles[state] }}>
                                <ImageContainer>
                                    <img src={this.state.items[this.state.activeItem].image} />
                                </ImageContainer>
                                <ContentContainer>
                                    <QuoteHolder>
                                        {this.state.items[this.state.activeItem].quote}
                                    </QuoteHolder>
                                    <PersonHolder>
                                        <Name>{this.state.items[this.state.activeItem].name}</Name>
                                        <Position>
                                            {this.state.items[this.state.activeItem].position}
                                        </Position>
                                        <Position>
                                            {this.state.items[this.state.activeItem].company}
                                        </Position>
                                    </PersonHolder>

                                    <a
                                        className={linkStyle}
                                        href={this.state.items[this.state.activeItem].reference}
                                        target="_blank"
                                    >
                                        Reference article
                                        <Arrow src={rightArrow} />
                                    </a>
                                </ContentContainer>
                            </InnerWrapper>
                        </Swipe>
                    )}
                </Transition>
            </Container>
        );
    }
}

export default Testimonial;
