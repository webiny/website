import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

const containerClass = css(
    {
        maxWidth: 1200,
    },
    mq({
        width: ["100%", "100%"],
    }),
);

const ProblemSolutionSection = styled("section")({
    margin: "150px 0 20px",
});

const ProblemSolutionPart = styled("div")(
    {
        width: "100%",
        backgroundColor: theme.color.backgroundGray,
    },
    mq({
        width: ["100%", "100%"],
        display: ["block", "flex"],
    }),
);

const SolutionItem = styled("div")(
    {
        width: "100%",

        "& h3": {
            fontWeight: 700,
            marginTop: 0,
        },

        "& ul": {
            listStyle: "none",
            "& li": {
                marginBottom: 10,
                position: "relative",
                paddingLeft: 25,

                "& span": {
                    position: "absolute",
                    top: 4,
                    left: 0,
                    height: 15,
                    width: 15,
                    backgroundColor: "#798099",
                    borderRadius: "50%",

                    "&:after": {
                        content: '" "',
                        position: "absolute",
                        top: 4,
                        left: 4,
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: theme.color.white,
                    },
                },
            },
        },
    },
    mq({
        width: ["auto", "50%"],
        padding: [25, 40],
    }),
);

const Summary = styled("div")(
    {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        marginBottom: 30,
    },
    mq({
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"],
    }),
);

const SummaryItem = styled("div")(
    {
        textAlign: "center",
        borderRight: "1px solid" + theme.color.purple,

        "& h3": {
            color: theme.color.purple,
            fontSize: "3.5rem",
            fontWeight: 700,
            margin: "0 0 10px",
        },

        "& p": {
            fontSize: "1.5rem",
            maxWidth: 250,
            margin: "0 auto 5px",
        },

        "&:last-child": {
            border: "none",
        },
    },
    mq({
        borderRight: ["none", "1px solid #7B39D9"],
        marginBottom: [30, 0],
    }),
);

const summaryList = [
    { number: "250+", title: "Number of Agents" },
    { number: "6", title: "Departments Using Zendesk" },
    { number: "175k+", title: "Monthly Ticket Volume" },
    { number: "90%+", title: "CSAT" },
];

const ProblemSolution = () => {
    return (
        <ProblemSolutionSection>
            <ContentContainer className={containerClass}>
                <Summary>
                    {summaryList.map((summary, index) => (
                        <SummaryItem key={index}>
                            <h3>{summary.number}</h3>
                            <p>{summary.title}</p>
                        </SummaryItem>
                    ))}
                </Summary>
                <ProblemSolutionPart>
                    <SolutionItem>
                        <h3>The Problem</h3>
                        <ul>
                            <li>
                                <span></span> Needed the ability to control the exact flow that
                                subscribers went through based on their interests and demographics
                            </li>
                            <li>
                                <span></span> Required a flexible platform that would give the
                                ability to create different customer engagement programs
                            </li>
                            <li>
                                <span></span> Wanted more visibility and insights into subscribers
                                to support sales and marketing
                            </li>
                        </ul>
                    </SolutionItem>
                    <SolutionItem>
                        <h3>The Solution</h3>
                        <ul>
                            <li>
                                <span></span> Created a loyalty program called, Koia Krew, where
                                customers complete missions to win prizes and receive benefits
                            </li>
                            <li>
                                <span></span> Dynamic segmentation gives the ability to send
                                personalized messages based on hobbies, locations, and store
                                preference
                            </li>
                            <li>
                                <span></span> Customer data is used to help the marketing team
                                develop ads based off of hobbies & interest, while the sales team
                                can target the most requested stores
                            </li>
                        </ul>
                    </SolutionItem>
                </ProblemSolutionPart>
            </ContentContainer>
        </ProblemSolutionSection>
    );
};

export default ProblemSolution;
