import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

import questionExpand from "./assets/question-expand.svg";
import questionContract from "./assets/question-contract.svg";

const QuestionWrapper = styled("div")(
    {
        display: "block",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.color.white,
        border: "1px solid " + theme.color.darkGray,
        marginTop: -1,
        position: "relative",
        "&:last-child": {
            boxShadow: "0 2px 4px 0 rgba(222,222,222,0.50)",
        },
        transition: "225ms all ease",
    },
    props => ({
        [Answer]: {
            //display: props.expanded ? 'block' : 'none',
            height: props.expanded ? "auto" : 0,
            margin: props.expanded ? "0 25px 25px 25px" : 0,
            opacity: props.expanded ? 1 : 0,
            visibility: props.expanded ? "visible" : "hidden",
            //display: props.expanded ? 'block' : 'none',
        },
        [QuestionBlock]: {
            backgroundImage: "url(" + (props.expanded ? questionContract : questionExpand) + ")",
            color: props.expanded ? theme.color.primaryDark : "",
        },
        margin: props.expanded ? "10px 0" : "-1px 0 0 0",
    }),
);

const QuestionBlock = styled("p")(
    {
        display: "block",
        width: "auto",
        fontWeight: theme.fontWeight.semiBold,
        backgroundImage: "url(" + questionExpand + ")",
        backgroundPosition: "right 25px center",
        backgroundRepeat: "no-repeat",
        marginBottom: 0,
        cursor: "pointer",
    },
    mq({
        padding: ["25px 45px 25px 25px", 25],
    }),
);

const Answer = styled("div")({
    fontSize: theme.fontSize.paragraph,
    display: "block",
    width: "auto",
    height: 0,
    //transition: 'all 1s',
    overflow: "hidden",
    li: {
        margin: 15,
    },
    a: {
        color: theme.color.primaryDark,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
        },
    },
});

class Question extends React.Component {
    state = { expanded: false };
    toggle = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        return (
            <QuestionWrapper expanded={this.state.expanded}>
                <QuestionBlock onClick={this.toggle}>{this.props.title}</QuestionBlock>
                <Answer>{this.props.children}</Answer>
            </QuestionWrapper>
        );
    }
}

export default Question;
