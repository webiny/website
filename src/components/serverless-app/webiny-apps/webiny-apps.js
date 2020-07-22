import React, { Fragment } from "react";

import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";
// styles
import {
    HeroSection,
    containerClass,
    WebinyHallMarkImage,
    Wrapper,
    Title,
    SubTitle,
    FeatureWrapper,
    FeatureCard,
    ServerlessApp,
    ExploreAppsSection,
    ExploreAppsTitle,
    ExploreAppsTitleHighlight,
    ExploreAppsSubTitle,
    ContributeTitle,
    ContributeSection,
    ContributeTitleWrapper,
    contributeClass,
    ServerlessBenefitsSection,
    ServerlessBenefitTitle,
    ServerlessBenefitTitleHighlight,
    ServerBenefitsWrapper,
    BenefitBox,
    serverlessAppsRTLClass
} from "./webiny-apps-styles";

// assets
import webinyBg from "./assets/webiny-group.svg";
import ovalImg from "./assets/oval.svg";

// data
import { FEATURES, APPS, BENEFITS } from "./webiny-apps-data";

const WebinyApps = props => {
    return (
        <Fragment>
            <HeroSection {...props}>
                <ContentContainer className={containerClass}>
                    <WebinyHallMarkImage src={webinyBg} alt={""} />
                    <Wrapper>
                        <Title>Speed up the delivery time even more with Webiny apps!</Title>
                        <SubTitle>
                            On top of being a serverless development framework, Webiny also comes
                            with several FREE ready-made apps.
                        </SubTitle>
                    </Wrapper>
                    <FeatureWrapper>
                        {FEATURES.map(feature => (
                            <FeatureCard key={feature.id} {...feature}>
                                <img
                                    src={feature.imageSrc}
                                    alt={feature.imageAlt}
                                    className="card__img"
                                />
                                <h4 className="card__title">{feature.title}</h4>
                                <p className="card__body">{feature.body}</p>
                            </FeatureCard>
                        ))}
                    </FeatureWrapper>
                </ContentContainer>
            </HeroSection>
            <ExploreAppsSection>
                <ContentContainer className={containerClass}>
                    <Wrapper>
                        <ExploreAppsTitle>
                            Explore Webiny{" "}
                            <ExploreAppsTitleHighlight>Serverless Apps</ExploreAppsTitleHighlight>
                        </ExploreAppsTitle>
                        <ExploreAppsSubTitle>
                            Whether you are looking for a Headless CMS solution, ways to build
                            stunning landing pages, create forms or manage files, Webiny apps will
                            provide you with an out of the box solution and allow you to start
                            building your serverless project straight away.
                        </ExploreAppsSubTitle>
                    </Wrapper>
                    {APPS.map((app, index) => (
                        <ServerlessApp
                            key={app.id}
                            className={index % 2 !== 0 ? serverlessAppsRTLClass : ""}
                        >
                            <div className="text-content">
                                <h3 className="text-content__title">
                                    <span>{app.keyword}</span>&nbsp;{app.title}
                                </h3>
                                <p className="text-content__body">{app.body}</p>
                                <div className="text-content__action">
                                    <Button
                                        className={"button"}
                                        type={"secondary"}
                                        link={app.actionLink}
                                    >
                                        {app.actionLabel}
                                    </Button>
                                </div>
                            </div>
                            <div className="media-content">
                                <img src={ovalImg} alt="" className="media-content__img-bg" />
                                <img
                                    src={app.imgSrc}
                                    alt={app.imgAlt}
                                    className="media-content__img"
                                />
                            </div>
                        </ServerlessApp>
                    ))}
                </ContentContainer>
            </ExploreAppsSection>
            <ContributeSection>
                <ContentContainer className={contributeClass}>
                    <ContributeTitleWrapper>
                        <ContributeTitle>Interested in contributing an app?</ContributeTitle>
                        <Button
                            className={"button"}
                            type={"secondary"}
                            link={"mailto:sven@webiny.com"}
                        >
                            Get in touch
                        </Button>
                    </ContributeTitleWrapper>
                </ContentContainer>
            </ContributeSection>
            <ServerlessBenefitsSection>
                <ContentContainer className={containerClass}>
                    <Wrapper>
                        <ServerlessBenefitTitle>
                            All Webiny Apps Get the Full Spectrum of{" "}
                            <ServerlessBenefitTitleHighlight>
                                Serverless Benefits
                            </ServerlessBenefitTitleHighlight>{" "}
                            Out of the Box
                        </ServerlessBenefitTitle>
                    </Wrapper>
                    <ServerBenefitsWrapper>
                        {BENEFITS.map(benefit => (
                            <BenefitBox key={benefit.id} {...benefit}>
                                <img
                                    src={benefit.imgSrc}
                                    alt={benefit.imgAlt}
                                    className="benefit__img"
                                />
                                <h3 className="benefit__title">{benefit.title}</h3>
                            </BenefitBox>
                        ))}
                    </ServerBenefitsWrapper>
                </ContentContainer>
            </ServerlessBenefitsSection>
        </Fragment>
    );
};
export default WebinyApps;
