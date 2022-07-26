import React from "react";
import styled from "@emotion/styled";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Accordion from "./accordion-item";
import hightLightBg from "./assets/highlight-title.svg";

const FAQAccordionSection = styled("section")(
    {
        backgroundColor: theme.color.gray100,
        a: {
            color: theme.color.primaryDark,
        },
    },
    mq({
        padding: ["110px 15px 110px", "110px 15px"],
    }),
);

const Wrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
        marginBottom: [60],
    }),
);

const ServerlessBenefitTitle = styled("h1")(
    {
        maxWidth: 768,
        fontSize: theme.fontSize["5xl"],
        fontWeight: theme.fontWeight.bold,
        color: theme.color.black,
        textAlign: "center",
        lineHeight: "48px",
        margin: "60px 0px 0px",
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
        fontSize: [40, theme.fontSize["5xl"]],
    }),
);

const ServerlessBenefitTitleHighlight = styled("span")({
    backgroundImage: "url(" + hightLightBg + ")",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
});

const FAQAccordion = () => {
    const accordions = [
        {
            title: "Can I use Webiny for free?",
            children: (
                <p>
                    Yes, Webiny is completely free to use. Webiny is open-sourced under the MIT
                    license.
                </p>
            ),
        },
        {
            title: "How do I get started?",
            children: (
                <p>
                    Follow the{" "}
                    <a href="/docs/webiny/introduction/" target="_blank">
                        get started tutorial
                    </a>
                    .
                </p>
            ),
        },
        {
            title: "How do I get support for Webiny?",
            children: (
                <p>
                    For the enterprise users support is available directly from the code-team that
                    built Webiny.
                    <br />
                    <br />
                    For the open-source edition, only community support is available. Checkout our{" "}
                    <a href="/slack" target="_blank">
                        community slack
                    </a>{" "}
                    channel.
                </p>
            ),
        },
        {
            title: "Can I see a demo of Webiny in action?",
            children: (
                <p>
                    We don't host a public demo at this time. You're welcome to{" "}
                    <a href="/docs/webiny/introduction/" target="_blank">
                        install it yourself
                    </a>
                    , or{" "}
                    <a href="https://site.webiny.com/forms/product-demo" target="_blank">
                        book a call
                    </a>{" "}
                    with us and we'll prepare a demo for you.
                </p>
            ),
        },
        {
            title: "What are the main differences between Open source and Enterprise editions?",
            children: (
                <p>
                    Webiny Enterprise is designed for organizations which have a long term plan on
                    using, building and delivering solutions on top of Webiny.
                    <br />
                    <br />
                    Webiny Enterprise offers access to the core Webiny team which will help you with
                    project delivery and Webiny best-practices.
                    <br />
                    <br />
                    Webiny Enterprise ensures long-term product supportability and a safe migration
                    path for each new release.
                    <br />
                    <br />
                    Additional benefits are illustrated in the pricing table above, if you however
                    have any questions, you're welcome{" "}
                    <a href="https://site.webiny.com/forms/product-demo" target="_blank">
                        book a call
                    </a>{" "}
                    with us.
                </p>
            ),
        },
    ];
    return (
        <FAQAccordionSection>
            <ContentContainer>
                <Wrapper>
                    <ServerlessBenefitTitle>
                        Frequently Asked{" "}
                        <ServerlessBenefitTitleHighlight>Questions</ServerlessBenefitTitleHighlight>
                    </ServerlessBenefitTitle>
                </Wrapper>
                {accordions.map((item, index) => (
                    <Accordion key={index} item={item} />
                ))}
            </ContentContainer>
        </FAQAccordionSection>
    );
};

export default FAQAccordion;
