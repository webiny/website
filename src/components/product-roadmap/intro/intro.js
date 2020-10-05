import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import { Link } from "gatsby";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";
import { trackJoinSlack } from "../../ui/functions";

import { TASKS } from "./intro-data";
import ArrowLeftIcon from "./assets/arrow.svg";

const ProductRoadmapIntroSection = styled("section")(
    {
        backgroundColor: theme.color.white,
    },
    mq({
        padding: ["0px 15px", "0"],
        "@media (min-width: 1460px)": {
            paddingTop: 0,
        },
    }),
);

const heroContainerClass = css(
    {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 1200,
        position: "relative",
    },
    mq({
        width: ["100%", "100%"],
        padding: ["75px 0px", "85px 0px"],
        "@media (min-width: 2000px)": {
            paddingBottom: 80,
        },
    }),
);

const IntroWrapper = styled("div")(
    {
        display: "flex",
        flexDirection: "column",
        marginBottom: 60,
    },
    mq({
        width: ["100%", 1100],
        alignItems: ["center"],
    }),
);

const Title = styled("h3")(
    {
        maxWidth: 908,
        fontSize: theme.fontSize["2xl"],
        fontWeight: theme.fontWeight.regular,
        color: theme.color.dark,
        textAlign: "center",
        lineHeight: "34px",
        marginBottom: 20,
        marginTop: 0,
        "& a": {
            color: theme.color.primaryDark,
            textDecoration: "none",
        },
    },
    mq({
        marginLeft: [0, "auto"],
        marginRight: [0, "auto"],
    }),
);

const Grid = styled("div")(
    {
        display: "grid",
        gridTemplateRows: ["repeat(2, 1fr)", "repeat(2, 1fr)"],
        gap: "40px 40px",
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"],
    }),
);

const Card = styled("div")(
    props => ({
        boxSizing: "border-box",

        backgroundColor: theme.color.white,
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.0941176)",
        borderRadius: 8,
        padding: "24px 30px",

        "& .tag": {
            display: "flex",
            marginBottom: 12,

            "& .tag__content": {
                backgroundColor: props.accent,

                color: theme.color.white,
                textTransform: "uppercase",
                fontSize: 12,
                fontWeight: theme.fontWeight.bold,

                padding: "4px 14px",
                borderRadius: 10,
            },
        },

        "& .content": {
            ".content__title": {
                margin: "0px 0px 6px",
                fontSize: theme.fontSize["2xl"],
                fontWeight: theme.fontWeight.bold,
            },
            ".content__body": {
                margin: "0px 0px 20px",
                fontSize: theme.fontSize["lg"],
                fontWeight: theme.fontWeight.regular,
            },
            ".content__action": {
                display: "flex",
                alignItems: "center",
                a: {
                    color: theme.color.purple,
                    fontSize: 14,
                    textTransform: "uppercase",
                    marginRight: 4,
                },
            },
        },
    }),
    mq({
        width: ["100%", 380],
        height: ["263px", 263],
    }),
);

const ButtonWrapper = styled("div")({
    margin: "55px 0px",
});

const IntroComponent = props => {
    return (
        <ProductRoadmapIntroSection {...props}>
            <ContentContainer className={heroContainerClass}>
                <IntroWrapper>
                    <Title>
                        Here at <Link to={"/"}>Webiny</Link>, we never stop upgrading our product
                        and we work with the community to identify what features they would like to
                        see implemented in future releases.
                    </Title>
                    <Title>
                        We identified the following features as priorities by our community and our
                        team is currently reviewing them.
                    </Title>
                </IntroWrapper>
                <Grid>
                    {TASKS.map(task => (
                        <Card key={task.id} accent={task.tag.accent}>
                            <div className={"tag"}>
                                <div className="tag__content">{task.tag.text}</div>
                            </div>
                            <div className="content">
                                <h3 className="content__title">{task.title}</h3>
                                <p className="content__body">{task.body}</p>
                                <div className="content__action">
                                    <a
                                        href={task.action.link}
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                    >
                                        {task.action.label}
                                    </a>
                                    <img src={ArrowLeftIcon} alt={""} />
                                </div>
                            </div>
                        </Card>
                    ))}
                </Grid>

                <ButtonWrapper>
                    <div
                        onClick={() => {
                            trackJoinSlack({ placement: "roadmap" });
                        }}
                    >
                        <Button type={"primary"} link={"/slack"}>
                            Join the Community and suggest what we should prioritise next
                        </Button>
                    </div>
                </ButtonWrapper>
            </ContentContainer>
        </ProductRoadmapIntroSection>
    );
};

export default IntroComponent;
