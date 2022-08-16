import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Newsletter from "../footer/newsletter-formonly";

import heroBg from "./assets/contact-us-hero-bg.svg";

const Hero = styled("section")(
    {
        width: "100%",
        background: "url(" + heroBg + ") no-repeat center top",
        color: "#fff",
        boxSizing: "border-box",
        textAlign: "center",
    },
    mq({
        padding: ["100px 20px 25px", "150px 0 25px"],
        minHeight: ["auto", "700px"],
        marginBottom: [50, 100],
        backgroundSize: ["cover"],
        backgroundPosition: ["top", "top", "bottom"],
    }),
);

const Title = styled("h1")({
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginBottom: 25,
});

const SubText = styled("p")(
    {
        fontSize: theme.fontSize.subText,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.white,
        textAlign: "center",
        margin: "0 20%",
        lineHeight: "150%",
        marginBottom: 50,
    },
    mq({
        margin: ["20px 20px", "0 20% 40px 20%"],
    }),
);

const FormWrapper = styled("div")({
    ".form": {
        margin: "0 auto"
    }
})

export default ({ children, ...props }) => (
    <Hero {...props}>
        <ContentContainer>
            <Title>Sign up for our newsletter</Title>
            <SubText>
                We send around one email per month exclusively about Webiny. we don't share your email address with anyone else.
            </SubText>
            <FormWrapper>
                <Newsletter />
            </FormWrapper>
        </ContentContainer>
    </Hero>
);
