import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import rectangleBg from "./assets/great-experience-bg.svg";
import {
    TitleHighlight,
    Title as BaseTitle,
    FeatureCard as BaseFeatureCard,
} from "../features-styles";
import { FEATURES } from "./great-experience-data";

const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    },
    mq({
        backgroundSize: ["cover", "auto", "cover"],
        padding: ["0px 15px 110px", "40px 15px 110px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0,
        },
    }),
);

export const overviewContainerClass = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: 1200,
    padding: 0,
    position: "relative",
});

const Title = styled(BaseTitle)({
    marginBottom: 80,
});

const CLIHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + rectangleBg + ")",
});

const LogosWrapper = styled("div")(
    {
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
    }),
);

const FeatureCard = styled(BaseFeatureCard)(
    props => ({
        minHeight: 430,
        borderRadius: 0,

        borderLeft: props.borderLeft ? "1px solid #E2E2E2" : "",
        borderRight: props.borderRight ? "1px solid #E2E2E2" : "",
        borderBottom: props.borderBottom ? "1px solid #E2E2E2" : "",

        "& .feature-card__title": {
            fontSize: theme.fontSize["2xl"],
        },
        "& .feature-card__body": {
            fontSize: theme.fontSize.lg,
        },
    }),
    mq({
        width: ["95%", "100%", 352],
        height: ["auto", "auto"],
        borderColor: ["white", "#E2E2E2"],
    }),
);

const FeaturesForGreatExperience = props => {
    return (
        <Fragment>
            <Section {...props}>
                <ContentContainer className={overviewContainerClass}>
                    <Title>
                        Features which make developing with Webiny a{" "}
                        <CLIHighlight>great experience</CLIHighlight>
                    </Title>
                    <LogosWrapper>
                        {FEATURES.map(feature => (
                            <FeatureCard key={feature.id} {...feature}>
                                <img
                                    className="feature-card__img"
                                    src={feature.imageSrc}
                                    alt={feature.imageAlt}
                                />
                                <h4 className="feature-card__title">{feature.title}</h4>
                                <p className="feature-card__body">{feature.body}</p>
                            </FeatureCard>
                        ))}
                    </LogosWrapper>
                </ContentContainer>
            </Section>
        </Fragment>
    );
};

export default FeaturesForGreatExperience;
