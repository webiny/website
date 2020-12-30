import React from "react"
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Accordion from "./accordion-item";
import hightLightBg from "./assets/highlight-title.svg"

const FAQAccordionSection = styled("section")(
    {
        backgroundColor: theme.color.gray100,
    },
    mq({
        padding: ["110px 15px 110px", "110px 15px"]
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
        {title: 'Can I use Webiny for free?', children: 'Can I use Webiny for free'},
        {title: 'How do I get started?', children: 'How do I get started?'},
        {title: 'How do I get support for Webiny?', children: 'How do I get support for Webiny?'},
        {title: 'Can I see a demo of Webiny in action?', children: 'Can I see a demo of Webiny in action?'},
        {title: 'What are the main differences between Open source and Enterprise editions?', children: 'What are the main differences between Open source and Enterprise editions?'},
        {title: 'What kind of support do you offer?', children: 'What kind of support do you offer?'},
        {title: 'What is included in Enterprise team training?', children: 'What is included in Enterprise team training?'},
        {title: 'Do you offer consulting or professional services?', children: 'Do you offer consulting or professional services?'},
        {title: 'What about support regarding security questions?', children: 'What about support regarding security questions?'},
    ]
    return (
        <FAQAccordionSection>
            <ContentContainer>
                <Wrapper>
                    <ServerlessBenefitTitle>
                        Frequently Asked {" "}
                        <ServerlessBenefitTitleHighlight>
                            Questions
                        </ServerlessBenefitTitleHighlight>                        
                    </ServerlessBenefitTitle>
                </Wrapper>
                {
                    accordions.map((item, index) => <Accordion key={index} item={item} />)
                }
            </ContentContainer>
        </FAQAccordionSection>
    )
}

export default FAQAccordion
