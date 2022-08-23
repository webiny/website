import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import Button from "../../ui/button";
import caseImg from "./assets/case-study.svg";
import highLightImg from "./assets/case-highlight.svg";
import arrowIcon from "./assets/arrow-white.svg";

const ctaBtn = css({
    maxWidth: 260,
    width: "260px !important",
    backgroundColor: theme.color.purple + "!important",

    "& img": {
        marginLeft: 15,
    },
});

const SlideItemPart = styled("div")({
    padding: 20,
});

const Feature = styled("div")(
    {
        display: "flex",
        position: "relative",
        backgroundColor: theme.color.white,
        boxShadow: "rgba(100,100,100,0.24) 2px 3px 15px",
        borderRadius: 8,
    },
    mq({
        width: ["auto", "100%"],
        alignItems: ["center", "stretch"],
        flexDirection: ["column", "row"],
    }),
);

const FeatureImagePart = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,

        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: [600, "none"],
        marginBottom: [0, 0],
    }),
);

const FeatureInfo = styled("div")(
    {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        padding: 20,

        "& h5": {
            fontSize: "1.5rem",
            marginBottom: 10,
        },

        "& .summary": {
            display: "grid",
            backgroundColor: "#F9F7FC",
            marginBottom: 25,
            padding: "20px 0",
            borderRadius: 8,

            "& .summary-item": {
                textAlign: "center",

                "&:last-child": {
                    border: "none",
                },

                "& p": {
                    maxWidth: 100,
                    margin: "0 auto",
                },

                "& p:first-child": {
                    fontSize: 25,
                    fontWeight: 700,
                    color: theme.color.purple,
                },

                "& p:nth-child(2)": {
                    fontSize: 16,
                },
            },
        },
    },
    mq({
        width: ["auto", "50%"],
        maxWidth: [600, "none"],
        marginBottom: [30, 0],

        "& .summary": {
            gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"],
            gridGap: [10, 0],

            "& .summary-item": {
                borderRight: ["none", "1px solid #E6D8FA"],
            },
        },
    }),
);

const actionPart = css(
    {
        display: "flex",
    },
    mq({
        alignItems: ["center", "flex-start"],
        justifyContent: ["center", "flex-start"],
    }),
);
const summaryList = [
    { number: "250+", title: "Number of Agents" },
    { number: "175k+", title: "Monthly Ticket Volume" },
    { number: "90%+", title: "CSAT" },
    { number: "6", title: "Departments Using Zendesk" },
];

const SlideItem = () => {
    return (
        <SlideItemPart>
            <Feature>
                <FeatureImagePart>
                    <img src={caseImg} alt="" />
                </FeatureImagePart>
                <FeatureInfo>
                    <h5>Hipcooks</h5>
                    <p>
                        Instacart was choosy when shopping for an innovative partner that would
                        allow it to customize support for twol distinct customer bases. Zendesk
                        worked so well, it started using the platform to support a third: internal
                        employees.
                    </p>
                    <div className="summary">
                        {summaryList.map((summary, index) => (
                            <div key={index} className="summary-item">
                                <p>{summary.number}</p>
                                <p>{summary.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className={actionPart}>
                        <Button type="primary" className={ctaBtn}>
                            Read case study <img src={arrowIcon} alt="" className="icon" />
                        </Button>
                    </div>
                </FeatureInfo>
            </Feature>
        </SlideItemPart>
    );
};

export default SlideItem;
