import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import Question from "./question";

const FaqContainer = styled("section")(
    {},
    mq({
        padding: [20, 0],
    }),
);

const Title = styled("h2")(
    {
        color: theme.color.black,
        fontSize: theme.fontSize.h2,
        marginBottom: 50,
        marginTop: 25,
    },
    mq({
        textAlign: ["center", "left"],
    }),
);

class Faq extends React.Component {
    render() {
        if (this.props.questions.length < 1) {
            return null;
        }

        return (
            <FaqContainer>
                <Title>{this.props.title}</Title>
                {this.props.questions.map((item, index) => {
                    return (
                        <Question key={item.question} title={item.question}>
                            {item.answer}
                        </Question>
                    );
                })}
            </FaqContainer>
        );
    }
}

export default Faq;
