import React, { useState } from "react";

import {
    Wrapper,
    Title,
    SubTitle,
    Accordion,
    AccordionItemWrapper,
} from "./frequently-asked-questions.styled";

const faqs = [
    {
        title: "Can I use Webiny for free?",
        children: (
            <p>
                Yes, Webiny is completely free to use. Webiny is open-sourced under the MIT license.
            </p>
        ),
    },
    {
        title: "How do I get started?",
        children: (
            <p>
                Follow the{" "}
                <a href="/docs/webiny/introduction/" target="_blank" rel="noreferrer">
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
                For the enterprise users support is available directly from the code-team that built
                Webiny.
                <br />
                <br />
                For the open-source edition, only community support is available. Checkout our{" "}
                <a href="/slack" target="_blank" rel="noreferrer">
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
                <a href="/docs/webiny/introduction/" target="_blank" rel="noreferrer">
                    install it yourself
                </a>
                , or{" "}
                <a href="/call/demo" target="_blank" rel="noreferrer">
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
                Webiny Enterprise ensures long-term product supportability and a safe migration path
                for each new release.
                <br />
                <br />
                Additional benefits are illustrated in the pricing table above, if you however have
                any questions, you're welcome{" "}
                <a href="/call/demo" target="_blank" rel="noreferrer">
                    book a call
                </a>{" "}
                with us.
            </p>
        ),
    },
    {
        title: "What kind of support do you offer?",
        children: (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et lacus volutpat,
                tristique magna sit amet, consequat tortor. Suspendisse faucibus sed velit at
                congue. In eu massa lobortis, feugiat mauris ut, convallis mi.
            </p>
        ),
    },
    {
        title: "What is included in Enterprise team training?",
        children: (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et lacus volutpat,
                tristique magna sit amet, consequat tortor. Suspendisse faucibus sed velit at
                congue. In eu massa lobortis, feugiat mauris ut, convallis mi.
            </p>
        ),
    },
    {
        title: "Do you offer consulting or professional services?",
        children: (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et lacus volutpat,
                tristique magna sit amet, consequat tortor. Suspendisse faucibus sed velit at
                congue. In eu massa lobortis, feugiat mauris ut, convallis mi.
            </p>
        ),
    },
    {
        title: "What about support regarding security questions?",
        children: (
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et lacus volutpat,
                tristique magna sit amet, consequat tortor. Suspendisse faucibus sed velit at
                congue. In eu massa lobortis, feugiat mauris ut, convallis mi.
            </p>
        ),
    },
];

const AccordionItem = ({ item }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <AccordionItemWrapper>
            <div className="title-wrapper">
                <div
                    className={`accordion-title ${isOpen ? "open" : ""}`}
                    onClick={() => setOpen(!isOpen)}
                >
                    <p>{item.title}</p>
                    <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z"
                            fill={isOpen ? "#FA5A28" : "black"}
                        />
                    </svg>
                </div>
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{item.children}</div>
            </div>
        </AccordionItemWrapper>
    );
};

const FrequentlyAskedQuestions = () => {
    return (
        <Wrapper>
            <Title>
                Frequently Asked <span>Questions</span>
            </Title>
            <SubTitle>
                Looking for answers? Here are some common questions we've been asked.
            </SubTitle>
            <Accordion>
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} item={faq} />
                ))}
            </Accordion>
        </Wrapper>
    );
};

export default FrequentlyAskedQuestions;
