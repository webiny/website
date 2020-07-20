import React, { Fragment } from "react";
import styled from "react-emotion";

import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";

import rectangleBg from "./assets/apps-rectangle.svg";
import videoPreviewBg from "./assets/video-bg.svg";
import connectorImg from "./assets/connectors.svg";

import YTVideoComponent from "../../ui/layout/yt-video";
import PageBuilderDemoImg from "../../why-webiny/overview/assets/why-webiny-video-cover.png";

import { WEBINY_APPS_LIBRARIES_FEATURES } from "./webiny-apps-libraries-data";
import {
    FeatureCard as BaseFeatureCard,
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
        padding: ["0px 15px 0px", "0px 15px 110px"],
        "@media (min-width: 1460px)": {
            backgroundPosition: "bottom",
            paddingTop: 0
        }
    })
);

const CLIHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + rectangleBg + ")"
});

const FeatureCard = styled(BaseFeatureCard)({
    "& .feature-card__action": {
        textTransform: "uppercase",
        fontSize: theme.fontSize.sm,
        fontWeight: theme.fontWeight.bold,
        color: theme.color.purple
    }
});

const WebinyAppsLibraries = props => {
    return (
        <Fragment>
            <Section {...props}>
                <ContentContainer className={overviewContainerClass}>
                    <OverviewSectionWrapper>
                        <Title>
                            Webiny <CLIHighlight>Apps and Libraries</CLIHighlight>
                        </Title>
                        <SubTitle>
                            A user interface with a set of reusable React components.
                        </SubTitle>
                    </OverviewSectionWrapper>
                    <ImageWrapper>
                        <div className={videoPreviewClass}>
                            <img src={videoPreviewBg} alt={""} />
                        </div>
                        <YTVideoComponent img={PageBuilderDemoImg} id={"odotdrOOvJE"} />
                    </ImageWrapper>
                    <FeaturesWrapper>
                        {WEBINY_APPS_LIBRARIES_FEATURES.map(feature => (
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
                                {typeof feature.body === "function" ? (
                                    feature.body()
                                ) : (
                                    <p className={"feature-card__body"}>{feature.body}</p>
                                )}
                                <a
                                    className="feature-card__action"
                                    href={feature.actionLink}
                                    target={"_blank"}
                                >
                                    {feature.actionLabel}
                                </a>
                            </FeatureCard>
                        ))}
                    </FeaturesWrapper>
                </ContentContainer>
            </Section>
        </Fragment>
    );
};

export default WebinyAppsLibraries;