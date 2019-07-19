import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import { css } from "emotion";
import mq from "../../utils/breakpoints";
import Button from "../../ui/button";
import ContentContainer from "../../ui/content-container";

import heroBg from "./assets/hero-bg.svg";
import heroImage from "./assets/man.svg";
import bullet from "./assets/bullet.svg";
import arrowImg from "./assets/gs-btn-arrow.svg";

const Hero = styled("section")(
    {
        width: "100%",
        background: "url(" + heroBg + ") no-repeat center top",
        backgroundColor: theme.color.lightGray,
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center"
    },
    mq({
        padding: ["100px 20px 25px", "150px 0 25px"],
        height: ["auto", "calc(100vh - 150px)"],
        minHeight: ["auto", 725],
        maxHeight: ["auto", 768],
        marginBottom: [0, 0],
        backgroundSize: ["cover"],
        backgroundPosition: ["top", "top", "bottom"]
    })
);

const Title = styled("h1")(
    {
        fontSize: theme.fontSize.h1,
        fontWeight: theme.fontWeight.semiBold,
        marginBottom: 40
    },
    mq({
        textAlign: ["center", "left"]
    })
);

const LeftSide = styled("div")(
    {},
    mq({
        textAlign: ["center", "left"],
        width: ["100%", 550]
    })
);

const RightSide = styled("div")(
    {},
    mq({
        textAlign: ["center", "right"],
        width: ["100%", "100%"]
    })
);

const container = css(
    {},
    mq({
        display: ["block", "flex"]
    })
);

const Image = styled("img")(
    mq({
        width: [250, "100%"],
        paddingRight: [0, 0],
        height: ["auto", 550]
    })
);

const List = styled("ul")({
    boxSizing: "border-box",
    padding: 0,
    width: "100%",
    marginBottom: 25
});

const ListItem = styled("li")({
    listStyle: "none",
    textAlign: "left",
    marginBottom: 15,
    background: "url(" + bullet + ") no-repeat left 2px",
    paddingLeft: 40,
    "&:last-child": {
        marginBottom: 0
    },
    a: {
        color: theme.color.secondaryDark
    }
});

const Bold = styled("span")({
    fontWeight: theme.fontWeight.bold
});

const Arrow = styled("img")({
    height: 10,
    marginLeft: 5
});

export default ({ children, ...props }) => (
    <Hero {...props}>
        <ContentContainer className={container}>
            <LeftSide>
                <Title>Deliver projects in less time by using the included components</Title>
                <List>
                    <ListItem>
                        <Bold>Visual Website Builder</Bold>
                        - Build pages by using a powerful drag&drop interface.
                    </ListItem>
                    <ListItem>
                        <Bold>Form Builder</Bold> - Easily create form to convert your visitors into
                        leads.
                    </ListItem>
                    <ListItem>
                        <Bold>Image Editor</Bold> - Using the included image editor you can
                        manipulate your images.
                    </ListItem>
                    <ListItem>
                        <Bold>File Manager</Bold> - Upload, organise and search your files.
                    </ListItem>
                    <ListItem>
                        <Bold>React components</Bold> - Expand Webiny and create your own apps by
                        reusing a set of ready-made React components.
                    </ListItem>
                </List>
                <Button link="/pricing" type="dark">
                    Get Started
                    <Arrow src={arrowImg} />
                </Button>
            </LeftSide>
            <RightSide>
                <Image src={heroImage} alt="Webiny Components" />
            </RightSide>
        </ContentContainer>
    </Hero>
);
