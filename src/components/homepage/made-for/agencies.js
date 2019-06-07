import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import Wave from "../../ui/waves";
import Button from "../../ui/button";

import bullet from "./assets/bullet.svg";

const List = styled("ul")({
    boxSizing: "border-box",
    padding: 0,
    width: "100%"
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
        color: theme.color.primaryDark
    }
});

const Title = styled("h3")({
    marginTop: 0,
    padding: 0,
    fontSize: 24,
    fontWeight: theme.fontWeight.semiBold
});

const SubText = styled("p")(
    {
        fontSize: theme.fontSize.subText,
        fontWeight: theme.fontWeight.regular,
        textAlign: "left",
        lineHeight: "150%",
        maxWidth: 750
    },
    mq({
        margin: ["0 20px", "0 auto 50px auto"]
    })
);

const Bold = styled("span")({
    fontWeight: theme.fontWeight.bold
});

const Buttons = styled("div")(
    {
        display: "flex",
        marginBottom: 25
    },
    mq({
        justifyContent: ["space-around", "flex-start"]
    })
);

const ctaButton = css(
    {
        position: "relative",
        marginTop: 35
    },
    mq({
        marginRight: [0, "25px !important"],
        width: ["150px", "auto"]
    })
);

const Arrow = styled("img")({
    height: 10,
    marginLeft: 5
});

export default ({ children, ...props }) => (
    <React.Fragment>
        <Title>Digital agencies</Title>
        <SubText>
            We know what it means to operate an agency. We have been running one ourselves for
            several years. This showed us that agencies need more than just a new technology. They
            want one where they can talk to real humans behind it.
        </SubText>
        <List>
            <ListItem>
                <Bold>Partnership</Bold> - You will be treated as a partner, we know your business
                relies on us.
            </ListItem>
            <ListItem>
                <Bold>Time to market</Bold> - Webiny will get you faster to a finished project.
                Customers, and your margins, will love it.
            </ListItem>
            <ListItem>
                <Bold>All inclusive</Bold> - We aim to provide a premium service to our partners.
                With Webiny everything is included, from hosting, training, consultation, priority
                support and much more.
            </ListItem>
        </List>
        <Buttons>
            <Button className={ctaButton} link="/agency" type="outlineDark">
                See all agency features
            </Button>
            <Button className={ctaButton} link="/contact-us" type="dark">
                Talk to us
            </Button>
        </Buttons>
        <Wave />
    </React.Fragment>
);
