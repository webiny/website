import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";

import sectionBg from "./assets/case-study-bg.svg";
import caseImg from "./assets/case-study.svg";
import highLightImg from "./assets/case-highlight.svg";
import arrowIcon from "./assets/arrow-white.svg";

const ctaBtn = css({
    maxWidth: 260,
    width: "260px !important",
    backgroundColor: theme.color.purple + "!important",

    "& img": {
        marginLeft: 15
    }
})

const containerClass = css(
    {
        maxWidth: 1200
    },
    mq({
        width: ["100%", "100%"],
    }),
)

const Section = styled("section")(
    {
        backgroundImage: "url(" + sectionBg + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 0,
        backgroundPosition: "top",
    },
    mq({
        padding: ["0px 15px 15px", "100px 15px 100px"],
    }),
)

const Title = styled("h3")(
    {
        margin: "30px auto",
        color: theme.color.black,
        fontSize: "3rem",
        fontWeight: 700,
        textAlign: "center",
        maxWidth: 458
    }
)

const CaseStudyPart = styled("div")(
    {
        display: "flex",
        padding: 20,
        backgroundColor: theme.color.white,
        boxShadow: "rgba(100,100,100,0.24) 2px 3px 15px",
        borderRadius: 8
    }
)

const CaseStudyImagePart = styled("div")(
    {
        width: "50%",

        "& img": {
            width: "100%"
        }
    }
)

const CaseStudyInfo = styled("div")(
    {
        width: "50%",
        paddingLeft: 20,

        "& h5": {
            fontSize: "1.5rem",
            marginBottom: 10
        },

        "& .summary": {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            backgroundColor: "#F9F7FC",
            marginBottom: 25,
            padding: "20px 0",

            "& .summary-item": {
                textAlign: "center",
                borderRight: "1px solid #E6D8FA",
                
                "&:last-child": {
                    border: "none"
                },

                "& p": {
                    maxWidth: 100,                    
                    margin: "0 auto"
                },

                "& p:first-child": {
                    fontSize: 25,
                    fontWeight: 700,                    
                    color: theme.color.purple
                },

                "& p:nth-child(2)": {
                    fontSize: 16                    
                }
            }
        }
    }
)

const summaryList = [
    {number: "250+", title: "Number of Agents"},    
    {number: "175k+", title: "Monthly Ticket Volume"},
    {number: "90%+", title: "CSAT"},
    {number: "6", title: "Departments Using Zendesk"},
]

const CaseStudy = () => {
    return (
        <Section>
            <ContentContainer className={containerClass}>
                <Title>Case Study</Title>
                <CaseStudyPart>
                    <CaseStudyImagePart>
                        <img src={caseImg} alt=""/>
                    </CaseStudyImagePart>                    
                    <CaseStudyInfo>
                        <h5>Hipcooks</h5>
                        <p>
                            Instacart was choosy when shopping for an innovative partner that would allow it to customize support for twol distinct customer bases.
                            Zendesk worked so well, it started using the platform to support a third: internal employees.
                        </p>
                        <div className="summary">
                            {
                                summaryList.map((summary, index) => 
                                    <div key={index} className="summary-item">
                                        <p>{summary.number}</p>
                                        <p>{summary.title}</p>
                                    </div>
                                )
                            }
                        </div>
                        <Button type="primary" className={ctaBtn}>
                            Read case study <img src={arrowIcon} alt="" className="icon" />
                        </Button>
                    </CaseStudyInfo>
                </CaseStudyPart>
            </ContentContainer>
        </Section>
    )
}

export default CaseStudy
