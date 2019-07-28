import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";

import buttonArrow from "../assets/button-arrow.svg";

const Section = styled("section")(
    {
        backgroundColor: theme.color.lightGray
    },
    mq({
        padding: [25, 50]
    })
);

const flexContainer = css(
    {
        display: "flex"
    },
    mq({
        flexDirection: ["column", "row"]
    })
);

const Wrapper = styled("div")(
    {
        background: theme.color.white,
        border: "1px solid #E6E6E6",
        boxShadow: "0 2px 4px 0 rgba(209,209,209,0.50)",
        borderRadius: 5,
        boxSizing: "border-box",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        h4: {
            marginTop: 0
        }
    },
    mq({
        width: ["100%", "50%"],
        display: ["block", "flex"],
        padding: [20, "50px"],
        textAlign: ["center", "left"],
        marginBottom: [25, 0],
        "&:first-child": {
            marginRight: [0, 25]
        },
        "&:last-child": {
            marginLeft: [0, 25]
        }
    })
);

const Text = styled("p")({
    fontSize: 18,
    fontWeight: theme.fontWeight.regular,
    marginBottom: 20,
    textAlign: "center"
});

const Bold = styled("span")({
    fontWeight: theme.fontWeight.semiBold
});

const Arrow = styled("img")({
    height: 9,
    marginLeft: 5
});

class Footer extends React.Component {
    render() {
        return (
            <Section>
                <ContentContainer className={flexContainer}>
                    <Wrapper>
                        <h4>Ready to try it out?</h4>
                        <Text>
                            Let's start by creating your first website. <br />It's only gonna take a
                            minute.
                        </Text>
                        <Button type="primary" link="/pricing">
                            Quick Start
                        </Button>
                    </Wrapper>
                    <Wrapper>
                        <h4>Have more questions?</h4>
                        <Text>
                            Need help deciding and finding the right solution for you? Our sales
                            operatives are here to answer any questions.
                        </Text>
                        <Button type="dark" link="/pricing">
                            Talk to us
                        </Button>
                    </Wrapper>
                </ContentContainer>
            </Section>
        );
    }
}

export default Footer;
