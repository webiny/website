import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import { css } from "emotion";
import ContentContainer from "../../ui/content-container";

import background from "./assets/gray-bg-with-bg.svg";
import quoteImg from "./assets/quote.svg";
import commentBubble from "./assets/comment-bubble.svg";

const wrapperClass = css({
    background: "url(" + background + ") no-repeat left top",
    backgroundSize: "cover",
    textAlign: "center",
    margin: "-150px auto 0 auto",
    padding: "200px 0 100px 0",
});

const SubTitle = styled("h2")({
    fontSize: 42,
    color: theme.color.black,
    textAlign: "center",
    paddingTop: 50,
    maxWidth: 750,
    margin: "25px auto",
});

const QuoteBox = styled("div")(
    {
        position: "relative",
        padding: "50px 20px 0px 50px",
        textAlign: "left",
        overflow: "hidden",
        p: {
            fontSize: 18,
            fontStyle: "italic",
        },
        ".quote-sign": {
            position: "absolute",
            top: 0,
            left: 0,
        },
        ".comment-bubble": {},
        span: {
            position: "absolute",
            left: 50,
            bottom: 10,
            fontSize: 18,
            fontWeight: theme.fontWeight.semiBold,
            color: theme.color.primaryDark,
        },
    },
    mq({
        width: ["auto", 300],
        marginTop: [25, 100],
    }),
);

const quoteList = css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
});

const Quote = ({ children, name, ...props }) => {
    return (
        <QuoteBox>
            <img src={quoteImg} alt="Quote sign" className={"quote-sign"} />
            <p>{children}</p>
            <img src={commentBubble} alt="Comment bubble" className={"comment-bubble"} />
            <span>{name}</span>
        </QuoteBox>
    );
};

class Testimonials extends React.Component {
    render() {
        return (
            <section {...this.props} className={wrapperClass}>
                <SubTitle>Some of the Feedback We’ve Been Getting</SubTitle>

                <ContentContainer className={quoteList}>
                    <Quote name={"@pierkarski"}>
                        Thank you for filling a much needed void. This is by far the best serverless
                        cms architecture out there.
                    </Quote>
                    <Quote name={"@kisg"}>
                        Thank you for all your great work on Webiny! It’s a beautiful piece of
                        software.
                    </Quote>
                    <Quote name={"@brett"}>
                        I truly believe this infrastructure is the future for web dev. Thanks for
                        the amazing tool you have built.
                    </Quote>
                    <Quote name={"@robotrekker"}>
                        You guys are awesome. Love, love, love this project.
                    </Quote>
                    <Quote name={"@tmikaeld"}>
                        My god. What you're building here beats everything I've seen in a looong
                        time.
                    </Quote>
                    <Quote name={"@dan"}>
                        Thank you for your great contribution to the open-source community. 🙂
                    </Quote>
                </ContentContainer>
            </section>
        );
    }
}

export default Testimonials;
