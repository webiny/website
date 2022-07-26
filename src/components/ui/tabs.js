import React from "react";
import { Transition } from "react-transition-group";
import ContentContainer from "./content-container";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

import arrow from "./assets/tabs-bullet-arrow.svg";

const TabsContainer = styled("div")(
    {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        boxSizing: "border-box",
    },
    mq({
        padding: [20, 0],
    }),
);

const TabsMenu = styled("ul")(
    {
        listStyle: "none",
    },
    mq({ width: ["100%", "auto"] }),
);

const TabsItemTitle = styled("h4")(
    {
        fontSize: theme.fontSize.subText,
        fontWeight: theme.fontWeight.semiBold,
        color: theme.color.black,
        transition: "color 250ms",
        marginBottom: 20,
    },
    mq({
        textAlign: ["center", "left"],
    }),
);

const TabsItemSubTitle = styled("p")(
    {
        lineHeight: "175%",
        color: theme.color.grayText,
        fontSize: theme.fontSize.navMenuSubItem,
        fontWeight: theme.fontWeight.regular,
    },
    mq({
        textAlign: ["center", "left"],
    }),
);

const TabsItemContainer = styled("a")({
    display: "block",
    cursor: "pointer",
    "&:hover": {
        [TabsItemTitle]: {
            textDecoration: "underline",
        },
    },
});

const TabsItem = styled("li")(
    {
        "&.active": {
            [TabsItemTitle]: {
                color: theme.color.primaryDark,
                fontWeight: theme.fontWeight.bold,
            },
            [TabsItemSubTitle]: {
                color: theme.color.black,
            },
            listStyleImage: "url(" + arrow + ")",
        },
        "&:last-child": {
            borderBottom: "none",
        },
    },
    mq({
        width: ["100%", 300],
        height: ["auto", "auto"],
        borderBottom: ["none", "1px solid " + theme.color.darkGray],
    }),
);

const TabsContentContainer = styled("div")(
    {
        position: "relative",
        background: theme.color.white,
        boxShadow: "0 2px 40px 10px rgba(152,152,152,0.50)",
        borderRadius: 8,
        position: "relative",
        boxSizing: "border-box",
        padding: 40,
        overflow: "hidden",
        position: "relative",
    },
    mq({
        width: ["100%", 850],
        height: ["auto", 550],
        marginTop: ["0", 20],
    }),
);

const defaultStyle = {
    transform: "translateX(200px)",
    opacity: 0,
    transitionProperty: "transform, opacity",
    transitionTimingFunction: "cubic-bezier(0, 0, .2, 1)",
    transitionDuration: "225ms",
    willChange: "opacity, transform",
};

const transitionStyles = {
    entering: { transform: "translateX(200px)", opacity: 0 },
    entered: { transform: "translateX(0px)", opacity: 1 },
};

class Tabs extends React.Component {
    state = { items: [], activeItem: 0, width: 0, isShown: true };

    setItems = items => {
        this.setState({ items });
    };

    componentDidMount() {
        this.setState({ width: window.innerWidth });
        window.addEventListener("resize", () => {
            this.setState({ width: window.innerWidth });
        });
        this.setItems(this.props.items);
    }

    setActiveItem = index => {
        if (!this.state.isShown) {
            this.setState({ activeItem: index, isShown: true });
        } else {
            this.setState({ isShown: false }, () => {
                this.setActiveItem(index);
            });
        }
    };

    renderDesktop = () => {
        return (
            <ContentContainer>
                <TabsContainer right={this.props.right}>
                    <TabsMenu>
                        {this.state.items.map((item, index) => {
                            return (
                                <TabsItem
                                    onClick={() => this.setActiveItem(index)}
                                    key={item.title}
                                    className={this.state.activeItem === index ? "active" : ""}
                                >
                                    <TabsItemContainer>
                                        <TabsItemTitle>{item.title}</TabsItemTitle>
                                        <TabsItemSubTitle>{item.subTitle}</TabsItemSubTitle>
                                    </TabsItemContainer>
                                </TabsItem>
                            );
                        })}
                    </TabsMenu>
                    <Transition in={this.state.isShown} timeout={250} appear={true}>
                        {state => (
                            <TabsContentContainer
                                style={{ ...defaultStyle, ...transitionStyles[state] }}
                            >
                                {this.state.items[this.state.activeItem].content}
                            </TabsContentContainer>
                        )}
                    </Transition>
                </TabsContainer>
            </ContentContainer>
        );
    };

    renderMobile = () => {
        return (
            <TabsContainer right={this.props.right}>
                <TabsMenu>
                    {this.state.items.map((item, index) => {
                        return (
                            <TabsItem key={item.title}>
                                <TabsItemContainer>
                                    <TabsItemTitle>{item.title}</TabsItemTitle>
                                    <TabsItemSubTitle>{item.subTitle}</TabsItemSubTitle>
                                    <TabsContentContainer>{item.content}</TabsContentContainer>
                                </TabsItemContainer>
                            </TabsItem>
                        );
                    })}
                </TabsMenu>
            </TabsContainer>
        );
    };

    render() {
        if (this.state.items.length < 1) {
            return null;
        }

        if (this.state.width < 1200) {
            return this.renderMobile();
        } else {
            return this.renderDesktop();
        }
    }
}

export default Tabs;
