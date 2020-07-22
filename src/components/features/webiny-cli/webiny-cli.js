import React, { Fragment } from "react";
import styled from "react-emotion";

import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import rectangleBg from "./assets/cli-rectangle.svg";
import videoPreviewBg from "./assets/video-bg.svg";
import connectorImg from "./assets/connectors.svg";

import YTVideoComponent from "../../ui/layout/yt-video";
import PageBuilderDemoImg from "../../why-webiny/overview/assets/why-webiny-video-cover.png";

import { WEBINY_CLI_FEATURES } from "./webiny-cli-data";
import {
    FeatureCard,
    FeaturesWrapper,
    ImageWrapper,
    videoPreviewClass,
    overviewContainerClass,
    TitleHighlight,
    Title,
    SubTitle,
    OverviewSectionWrapper
} from "../features-styles";

const Section = styled("section")(
    {
        backgroundColor: theme.color.white,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom"
    },
    mq({
        backgroundSize: ["cover", "auto", "100%"],
        padding: ["0px 15px 0px", "0px 15px 0px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0
        }
    })
);

const CLIHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + rectangleBg + ")"
});

const WebinyCLI = props => {
    return (
        <Fragment>
            <Section {...props}>
                <ContentContainer className={overviewContainerClass}>
                    <OverviewSectionWrapper>
                        <Title>
                            Webiny <CLIHighlight>CLI</CLIHighlight>
                        </Title>
                        <SubTitle>
                            Quickly create projects and deploy them to the cloud. Easily manage
                            multiple environments for the same project.
                        </SubTitle>
                    </OverviewSectionWrapper>
                    <ImageWrapper>
                        <div className={videoPreviewClass}>
                            <iframe
                                src="https://www.youtube.com/embed/t0cP1qkQAUg"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </ImageWrapper>
                    <FeaturesWrapper>
                        {WEBINY_CLI_FEATURES.map(feature => (
                            <FeatureCard
                                key={feature.id}
                                className={feature.includeConnectors ? "connectors" : ""}
                            >
                                {feature.includeConnectors && (
                                    <img
                                        className={"feature-card__connector"}
                                        src={connectorImg}
                                        alt={""}
                                    />
                                )}
                                <img
                                    className={"feature-card__img"}
                                    src={feature.imageURL}
                                    alt={feature.imageAltText}
                                />
                                <h4 className={"feature-card__title"}>{feature.title}</h4>
                                <p className={"feature-card__body"}>{feature.body}</p>
                            </FeatureCard>
                        ))}
                    </FeaturesWrapper>
                </ContentContainer>
            </Section>
        </Fragment>
    );
};

export default WebinyCLI;
