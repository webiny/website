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
        <Title>Enterprises</Title>
        <SubText>
            Standardize and bring together how your websites, applications, and APIs are developed.
            Empower your developers and make them more productive at their work.
        </SubText>
        <List>
            <ListItem>
                <Bold>Governance</Bold> - Control which teams have access to which properties. Fence
                off production access from staging and other environments.
            </ListItem>
            <ListItem>
                <Bold>Dedicate deployment</Bold> - A deployment with no other tenants. Ability to
                choose from any of the AWS regions, or use your own.
            </ListItem>
            <ListItem>
                <Bold>Cost & Scalability</Bold> - Embrace the benefits of serverless, with almost
                instant scale outs and tremendous cost savings, when compared to a traditional VPS.
            </ListItem>
        </List>
        <Buttons>
            <Button className={ctaButton} link="/enterprise" type="outlineDark">
                See all enterprise features
            </Button>
            <Button className={ctaButton} link="/contact-us" type="dark">
                Talk to us
            </Button>
        </Buttons>
        <Wave />
    </React.Fragment>
);
