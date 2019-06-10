import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import { css } from "emotion";
import mq from "../../utils/breakpoints";
import Button from "../../ui/button";
import ContentContainer from "../../ui/content-container";

import heroBg from "./assets/hero-bg.svg";
import superhero from "./assets/superhero.svg";
import bullet from "./assets/bullet.svg";

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

const SubText = styled("p")(
    {
        fontSize: theme.fontSize.subText,
        fontWeight: theme.fontWeight.light,
        lineHeight: "25px",
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
        width: ["100%", 400]
    })
);

const RightSide = styled("div")(
    {},
    mq({
        textAlign: ["center", "right"],
        width: ["100%", 600]
    })
);

const container = css(
    {},
    mq({
        display: ["block", "flex"]
    })
);

const Image = styled("img")(
    {
        transform: "scaleX(-1)"
    },
    mq({
        width: [250, "auto"],
        paddingRight: [0, 200],
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
                <Title>Made for developers</Title>
                <SubText>
                    We know who are the true superheroes behind every website. We made Webiny for
                    you.
                </SubText>
                <List>
                    <ListItem>
                        <Bold>Documented</Bold> - Our <a href="https://docs.webiny.com/">docs</a>{" "}
                        portal has tutorials for beginners and more advance coders.
                    </ListItem>
                    <ListItem>
                        <Bold>Customizable</Bold> - Webiny is meant to be built upon, adapt
                        everything from the UI to the API.
                    </ListItem>
                    <ListItem>
                        <Bold>Open source</Bold> - There are not magic black boxes here. Our code is
                        available on <a href="https://github.com/webiny/webiny-js">GitHub</a>
                        .
                    </ListItem>
                    <ListItem>
                        <Bold>100% JavaScript</Bold> - Just one language is all you need to know.
                    </ListItem>
                </List>
            </LeftSide>
            <RightSide>
                <Image src={superhero} alt="Agency Superhero" />
            </RightSide>
        </ContentContainer>
    </Hero>
);
