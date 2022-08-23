import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import Newsletter from "../footer/newsletter-formonly";
import heroBg from "../../assets/new-homepage/hero/price-page-bg.svg";

export const HeroSection = styled("div")(
    {
        backgroundColor: "#fff",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + heroBg + ")",
    },
    mq({
        backgroundSize: ["1440px 100%", "1440px 100%", "100%"],
        backgroundPosition: [
            "bottom 647px right 50%",
            "bottom 183px right 50%",
            "bottom 367px right 50%",
        ],
        minHeight: ["590px", "590px", "800px"],
    }),
);

export const HeroContainer = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    mq({
        padding: ["30px 16px", "30px 0px", "30px 0px"],
    }),
);

const Title = styled("h1")({
    fontSize: theme.fontSize.h1,
    fontWeight: theme.fontWeight.semiBold,
    marginTop: 62,
    marginBottom: 25,
});

const SubText = styled("p")(
    {
        fontSize: theme.fontSize.subText,
        fontWeight: theme.fontWeight.regular,
        color: theme.color.black,
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
        margin: "0 auto",
    },
});

export default ({ children, ...props }) => (
    <HeroSection>
        <HeroContainer>
            <Title>Sign up for our newsletter</Title>
            <SubText>
                We send around one email per month exclusively about Webiny. <br /> We don't share
                your email address with anyone else.
            </SubText>
            <FormWrapper>
                <Newsletter />
            </FormWrapper>
        </HeroContainer>
    </HeroSection>
);
