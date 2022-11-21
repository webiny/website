import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import { Link } from "gatsby";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";
import { trackJoinSlack } from "../../ui/functions";
import roadmap from "./assets/publicroadmap.png"

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

const ButtonWrapper = styled("div")({
    display: "block",
    marginBottom: "55px",
    "&.first-child": {
        marginTop: "55px",
    }
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
                        WWe identified the following features as priorities thanks to the initial feedback we gathered from our clients, team and community. Roadmaps are living documents and ours is no difference. Now we are asking all of you to give us thumbs up or down and comment on these items to understand better what is important for you today. 
                    </Title>
                        <a href="https://github.com/orgs/webiny/projects/5/views/1"><img src={roadmap} alt="Public roadmap on GitHub" width="100%"/></a>
                </IntroWrapper>

                <ButtonWrapper>
                    <Button type={"primary"} link="https://github.com/webiny/webiny-js/discussions/categories/ideas">
                        Submit an idea for a new feature
                    </Button>
                </ButtonWrapper>
                <ButtonWrapper>
                    <div
                        onClick={() => {
                            trackJoinSlack({ placement: "roadmap" });
                        }}
                    >
                        <Button type={"outlineOrange"} link={"/slack"}>
                            Join the Community and suggest what we should prioritise next
                        </Button>
                    </div>
                </ButtonWrapper>
            </ContentContainer>
        </ProductRoadmapIntroSection>
    );
};

export default IntroComponent;
