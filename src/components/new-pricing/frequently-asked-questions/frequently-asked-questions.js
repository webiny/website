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
                Yes, you can! The Webiny Open Source edition is completely free to use, and it comes
                with an MIT license. The other option is the free tier that's included with the
                Webiny Business edition.
            </p>
        ),
    },
    {
        title: 'What is a "user" and how are they counted?',
        children: (
            <>
                <p>
                    A user is anyone who has access to Webiny CMS to manage content. This includes
                    users accessing the Admin Area through the user interface or via the API.
                </p>
                <p>
                    Users that only have access to Webiny Control Panel are not counted against your
                    user quota.
                </p>
                <p>
                    You can see exactly how many user seats are allocated to a specific Webiny
                    instance at any point in time.
                </p>
                <p>
                    You only pay for unique users. So, for example, if one user has access to 100
                    different websites inside the same Webiny instance, it will be counted as one
                    user seat as long as it uses the same credentials.
                </p>
                <p>
                    Additionally, we only count user seats inside the production environment. Usage
                    in other environments, including personal development environments, is not
                    counted against your usage.
                </p>
            </>
        ),
    },
    {
        title: "Why do I need to pay for the API calls if I'm self-hosting?",
        children: (
            <>
                <p>
                    Our goal with our pricing is to make Webiny affordable to everyone. Our guiding
                    thought is that our success is tied to our customer's success. Therefore, we
                    wanted a fair pricing model, one where the value our product provides is tied to
                    its cost and at the same time has a very low starting point with a free tier.
                </p>
                <p>
                    To get the price down of the self-hosted option, we opted for a
                    consumption-based pricing model based on user seats and API calls.
                </p>
                <p>
                    Instead of trying to guess the value of the product to a customer and have a
                    high starting price, we tied the value to those two factors.
                </p>
                <p>
                    Although you are responsible for paying the AWS hosting costs, if you are using
                    the product more, in terms of more API calls, you are getting more value from
                    it, and so are your end-users. It's like leasing a car, you have the car, but
                    you still pay to drive it per mile and need to put gas in it simultaneously.
                    Using the car less will mean lower leasing costs, and using it more, will
                    increase your bill.
                </p>
                <p>
                    The final thing to mention is that Webiny anonymously processes your API calls;
                    we don't see what data is transmitted; we only track the number of calls and
                    their performance. Based on that, we can alert you if things go wrong and
                    provide an overview of your AWS infrastructure cost.
                </p>
            </>
        ),
    },
    {
        title: "How do I know how many API calls I will need?",
        children: (
            <>
                <p>
                    Calculating the API usage depends on how you use Webiny and your users' access
                    patterns.
                </p>
                <p>
                    The best way to go about this is to start with the free tier account, which
                    includes 1M free API calls. Then, based on the initial usage data you gather,
                    you'll be able to estimate the total amount of API calls you might need over
                    time.
                </p>
                <p>
                    Webiny uses a GraphQL API, but we don't look at the complexity of your queries.
                    A single request to the API is always counted as one API request.
                </p>
            </>
        ),
    },
    {
        title: "Can I see a demo of Webiny in action?",
        children: (
            <p>
                We don't host a public demo at this time. You're welcome to{" "}
                <a href="/docs" target="_blank" rel="noreferrer">
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
        title: "Can I switch from the Open Source plan to Business, and later to Enterprise?",
        children: (
            <p>
                Yes, you can! The switch is easy to do without impacting your existing Webiny
                instance. You add or upgrade your project within Webiny Control Panel and redeploy
                your Webiny instance. Once the deployment is done, your instance will have access to
                the new features.
            </p>
        ),
    },
    {
        title: "Are there any other hidden costs?",
        children: (
            <p>
                No, it's just the user seats, API calls and the addons. No other hidden fees or
                surprises.
            </p>
        ),
    },
    {
        title: "What if I have more questions?",
        children: (
            <p>
                Just drop as an email: <a href="mailto:sales@webiny.com">sales@webiny.com</a>
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
