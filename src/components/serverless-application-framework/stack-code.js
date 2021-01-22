import React, { useState } from "react";
import styled from "react-emotion";
import { css } from "emotion";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import CodeTab from "./code";
import vectorIcon from "./assets/stack-highlight.svg";
import stackImg from "./assets/stack-icon.svg";
import architectureImg from "./assets/architecture-icon.svg";
import codeImg from "./assets/code-icon.svg";
import StackImage from "./assets/stack-image.svg";
import ArchitectureTab from "./architecture";

const StackCodeSection = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        backgroundPosition: "bottom",
    },
    mq({
        padding: ["60px 15px 80px", "120px 15px"],
    }),
);

const ContainerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
    }),
);

const Title = styled("h1")(
    {
        maxWidth: 654,
        fontSize: 48,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        marginBottom: 26,
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const TitleHighlight = styled("span")({
    backgroundImage: "url(" + vectorIcon + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const Description = styled("p")(
    {
        fontSize: 24,
        lineHeight: "40px",
        color: theme.color.black,
        margin: "0 auto",
        textAlign: "center",

        "& span": {
            color: theme.color.purple,
        },
    },
    mq({
        maxWidth: [360, 760],
    }),
);

const Navigate = styled("div")(
    {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 75,
        borderBottom: "1px solid #E7E8F0",

        "& .navigation-item": {
            textAlign: "center",
            cursor: "pointer",
            padding: "10px 0",
            borderBottom: `2px solid transparent`,

            "&.active": {
                borderBottom: `2px solid ${theme.color.purple}`,
                padding: "10px 0 10px",

                "& h5": {
                    color: theme.color.purple,
                },
            },

            "& h5": {
                color: "#292929",
                fontWeight: theme.fontWeight.semiBold,
                fontSize: 24,
                lineHeight: "30px",
            },

            "& p": {
                color: "#7B8097",
                fontWeight: theme.fontWeight.regular,
                fontSize: 16,
                lineHeight: "20px",
                margin: 0,
            },

            "& img": {
                height: 40,
            },
        },
    },
    mq({
        "& .navigation-item": {
            margin: ["0 10px", "0 30px"],
        },
    }),
);

const SlideSection = styled("div")(
    {
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
        "& img": {
            width: "100%",
            height: "100%",
        },
        "& .slide-content": {
            maxWidth: [450, "100%"],
            height: "120%",
            width: "100%",
        },
    },
    mq({
        height: ["100%", 700],
        "& .slide-content": {
            position: ["relative", "absolute"],
        },
    }),
);

const StackPart = styled("div")(
    {
        backgroundImage: "url(" + StackImage + ")",
        backgroundColor: theme.color.white,
        position: "relative",
        zIndex: 0,
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundPosition: "center",
        backgroundSize: "contain",
        "@media (max-width: 600px)": {
            height: 300,
        },
    },
    mq({
        height: [600, 885],
    }),
);

const containerClass = css({
    position: "relative",
    height: "100%",
});

const navigationList = [
    { id: 1, title: "Code", text: "How things work.", img: codeImg, selected: true },
    { id: 2, title: "Stack", text: "What's it made of.", img: stackImg, selected: false },
    {
        id: 3,
        title: "Architecture",
        text: "How are things connected.",
        img: architectureImg,
        selected: false,
    },
];

const StackCode = () => {
    const [navigateItems, setNavigateItems] = useState(navigationList);
    const [selectedNav, setSelectedNav] = useState(navigationList[0]);
    const updateNavigate = id => {
        setSelectedNav(navigationList.find(item => item.id === id));
        setNavigateItems(
            navigateItems.map(item => {
                if (item.id === id) {
                    return { ...item, selected: !item.selected };
                } else {
                    return { ...item, selected: false };
                }
            }),
        );
    };

    const renderContent = () => {
        switch (selectedNav.id) {
            case 1:
                return <CodeTab />;
            case 2:
                return <StackPart />;
            case 3:
                return <ArchitectureTab />;
            default:
                return null;
        }
    };

    return (
        <StackCodeSection>
            <ContentContainer className={ContainerClass}>
                <Title>
                    <TitleHighlight>Stack, architecture and code</TitleHighlight>
                </Title>
                <Description>
                    Webiny <span>Serverless Application Framework</span> was designed for many
                    different use-cases. You can modify its stack and architecture and adapt to the
                    needs of your project and your organization.{" "}
                </Description>
                <Navigate>
                    {navigateItems &&
                        navigateItems.map(item => (
                            <div
                                className={`navigation-item ${item.selected ? "active" : ""}`}
                                key={item.id}
                                onClick={() => updateNavigate(item.id)}
                            >
                                <img src={item.img} alt="" />
                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                            </div>
                        ))}
                </Navigate>
                <SlideSection>
                    <TransitionGroup className={containerClass}>
                        <CSSTransition key={selectedNav.id} timeout={600} classNames={"fade"}>
                            <div className="slide-content">{renderContent()}</div>
                        </CSSTransition>
                    </TransitionGroup>
                </SlideSection>
            </ContentContainer>
        </StackCodeSection>
    );
};

export default StackCode;
