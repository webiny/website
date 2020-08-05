import React, { Fragment, useEffect, useState } from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";

import videoPreviewBg from "./assets/video-preview-bg.svg";
import YTVideoComponent from "../ui/layout/yt-video";
import VideoCover from "./assets/hi-from-founders-cover.png";
import ContentContainer from "../ui/content-container";
import Button from "../ui/button";

// assets
import webinyBg from "./assets/webiny-bg.svg";
import welcomeRectImg from "./assets/about-welcome-rect.svg";
import storyRectImg from "./assets/about-stroy-rect.svg";
import teamRectImg from "./assets/about-team-rect.svg";
import teamPathImg from "./assets/about-team-path.svg";
import arrowIcon from "./assets/about-arrow.svg";
import valueRectImg from "./assets/about-value-rect.svg";
import investorImg from "./assets/e1-logo.png";
import circleBgImg from "./assets/about-circle-bg.svg";

// data
import { TEAM_MEMBERS, LINKS, TRAITS, MEDIA_KIT } from "./about-us-data";
// styles
import {
    Section,
    SectionWithBackground,
    heroContainerClass,
    WebinyHallMarkImage,
    HeroSectionWrapper,
    Title,
    welcomeContainerClass,
    TitleHighlight,
    Text,
    ImageWrapper,
    videoPreviewClass,
    SectionWithDots,
    ProfileCard,
    TeamWrapper,
    TeamPath,
    FoundersVideoTitle,
    SectionWithGrayRectangle,
    contributorsContainerClass,
    ContributorsWrapper,
    ContributorCard,
    ButtonWrapper,
    TraitsWrapper,
    TraitCard,
    More,
    investorContainerClass,
    SectionWithWaves,
    mediaKitContainerClass,
    MediaKitCard,
    MediaCardWrapper,
    TeamSection
} from "./about-us-styles";

const Contributors = () => {
    const [contributors, setContributors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/repos/webiny/webiny-js/contributors")
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setContributors(result);
            })
            .catch(error => {
                console.error(error);
                setError(true);
            });
    }, []);

    if (error) {
        return <p>Something went wrong!</p>;
    }

    if (loading) {
        return <p>Loading contributors...</p>;
    }

    return contributors
        .filter(filterWebinyTeam)
        .slice(0, 15)
        .map(contributor => (
            <ContributorCard
                key={contributor.id}
                onClick={() => {
                    window.open(contributor.html_url, "_blank", "noopener noreferrer");
                }}
            >
                <img src={contributor.avatar_url} alt={contributor.login} className="card__img" />
                <h5 className="card__name">{contributor.login}</h5>
            </ContributorCard>
        ));
};

const filterWebinyTeam = item =>
    !TEAM_MEMBERS.some(m => {
        return m.github && m.github.toLowerCase() === item.html_url.toLowerCase();
    });

const WelcomeTitle = styled(Title)({
    color: theme.color.black
});

const WelcomeTitleHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + welcomeRectImg + ")"
});

const WelcomeText = styled(Text)(
    {
        color: theme.color.black,
        marginTop: 20
    },
    mq({
        maxWidth: ["100%", 888]
    })
);

const StoryTitle = styled(Title)(
    {
        color: theme.color.black
    },
    mq({
        margin: ["0px auto 50px", "50px auto"]
    })
);

const StoryTitleHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + storyRectImg + ")"
});

const StoryText = styled(Text)(
    {
        color: theme.color.black,
        textAlign: "left"
    },
    mq({
        maxWidth: ["100%", 1110]
    })
);

const TeamTitle = styled(Title)(
    {
        color: theme.color.black
    },
    mq({
        margin: ["50px auto", "60px auto 50px"]
    })
);

const TeamTitleHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + teamRectImg + ")"
});

const ContributorsText = styled(Text)(
    {
        color: theme.color.black,
        fontWeight: theme.fontWeight.bold,
        "& span": {
            color: theme.color.primaryDark
        }
    },
    mq({
        margin: ["0px auto 50px", "0px auto 60px"]
    })
);

const TraitsTitleHighlight = styled(TitleHighlight)({
    backgroundImage: "url(" + valueRectImg + ")"
});

const TraitsText = styled(Text)(
    {
        color: theme.color.black
    },
    mq({
        margin: ["50px auto 0px", "70px auto 0px"],
        maxWidth: ["100%", 888]
    })
);

const InvestorTitle = styled(Title)(
    {
        color: theme.color.black
    },
    mq({
        margin: ["0px auto 0px", "0px auto"]
    })
);

const InvestorText = styled(Text)(
    {
        color: theme.color.black
    },
    mq({
        margin: ["0px auto 0px", "0px auto 24px"],
        maxWidth: ["100%", 888]
    })
);

export default () => (
    <Fragment>
        <SectionWithBackground>
            <ContentContainer className={heroContainerClass}>
                <WebinyHallMarkImage src={webinyBg} alt={""} />
                <HeroSectionWrapper>
                    <Title>Creating Tools and Solutions for the Serverless Era</Title>
                </HeroSectionWrapper>
            </ContentContainer>
        </SectionWithBackground>
        <Section>
            <ContentContainer className={welcomeContainerClass}>
                <WelcomeTitle>
                    Hello and <WelcomeTitleHighlight>welcome</WelcomeTitleHighlight>
                </WelcomeTitle>
                <WelcomeText>
                    At Webiny we have a mission to empower every developer to create serverless
                    applications and websites. We do that by providing tools, processes and
                    ready-made apps, and as a result, developers can create serverless applications
                    with ease.
                </WelcomeText>
            </ContentContainer>
        </Section>
        <SectionWithDots>
            <FoundersVideoTitle>Message from the founders (1min)</FoundersVideoTitle>
            <ImageWrapper>
                <div className={videoPreviewClass}>
                    <img src={videoPreviewBg} alt={""} />
                </div>
                <YTVideoComponent img={VideoCover} id={"iYyLS9r3uiQ"} />
            </ImageWrapper>
        </SectionWithDots>
        <Section>
            <ContentContainer className={welcomeContainerClass}>
                <StoryTitle>
                    Our <StoryTitleHighlight>story</StoryTitleHighlight>
                </StoryTitle>
                <StoryText>
                    Many moons ago, Webiny was just another digital agency. We were building
                    websites, fighting the technology and fixing bugs. Many bugs.
                </StoryText>
                <StoryText>
                    Eventually, we saw that the way we build and manage web applications is
                    changing. We saw that this “serverless trend" is actually not a trend, and is
                    here to stay. Even more than that, we now believe that in a few years time,
                    serverless will be the way most of the web is created.
                </StoryText>
                <StoryText>
                    With this belief, we decided to close down our service business and focus on a
                    mission to build an open-source framework for building serverless applications.
                    One that will become a foundation for all future serverless applications. One
                    that developers will see as a core part of their serverless stack.
                </StoryText>
                <StoryText>
                    Throughout the whole process we had one big North Star in our mind to guide us -
                    a community. A community of developers that we could support with Webiny and
                    that would join us on our mission, and help us achieve our goals. As a result,
                    we have released Webiny under the MIT open-source licence so everyone can use it
                    completely free of charge.
                </StoryText>
            </ContentContainer>
        </Section>
        <TeamSection>
            <ContentContainer className={welcomeContainerClass}>
                <TeamPath src={teamPathImg} alt={""} />
                <TeamTitle>
                    <TeamTitleHighlight>Team</TeamTitleHighlight>
                </TeamTitle>
                <TeamWrapper>
                    {TEAM_MEMBERS.map(member => (
                        <ProfileCard key={member.id}>
                            <img src={member.imgSrc} alt={member.name} className="profile__img" />
                            <h5 className="profile__name">{member.name}</h5>
                            <p className="profile__title">{member.jobTitle}</p>
                            <ul className="profile__links">
                                {LINKS.map(link => {
                                    if (
                                        typeof member[link.name] === "string" &&
                                        member[link.name].length > 0
                                    ) {
                                        return (
                                            <li key={link.id} className="profile__link">
                                                <a
                                                    href={member[link.name]}
                                                    target={"_blank"}
                                                    rel={"noopener noreferrer"}
                                                >
                                                    <img src={link.icon} alt="" />
                                                </a>
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                        </ProfileCard>
                    ))}
                </TeamWrapper>
            </ContentContainer>
        </TeamSection>
        <SectionWithGrayRectangle>
            <ContentContainer className={contributorsContainerClass}>
                <ContributorsText>
                    Assisted by our <span>Webiny community</span> and <span>contributors</span>
                </ContributorsText>
                <ContributorsWrapper>
                    <Contributors />
                </ContributorsWrapper>
                <ButtonWrapper>
                    <Button type={"primary"} link={"https://github.com/webiny/webiny-js"}>
                        And many more <img src={arrowIcon} alt="" className="icon" />
                    </Button>
                </ButtonWrapper>
            </ContentContainer>
        </SectionWithGrayRectangle>
        <Section>
            <ContentContainer className={welcomeContainerClass}>
                <TeamTitle>
                    Traits we <TraitsTitleHighlight>value</TraitsTitleHighlight>
                </TeamTitle>
                <TraitsWrapper>
                    {TRAITS.map(trait => (
                        <TraitCard
                            key={trait.id}
                            className={trait.spanTwoRows ? "spanTwoRows" : ""}
                        >
                            <img src={trait.icon} alt={""} className="card__img" />
                            <p className="card__title">{trait.text}</p>
                        </TraitCard>
                    ))}
                </TraitsWrapper>
                <TraitsText>
                    Our team is ever expanding, so if you have identified yourself in our values, we
                    would love to talk.
                </TraitsText>
                <ButtonWrapper>
                    <Button type={"dark"} link={"https://careers.webiny.com/"}>
                        view open positions <img src={arrowIcon} alt="" className="icon" />
                    </Button>
                </ButtonWrapper>
            </ContentContainer>
        </Section>
        <SectionWithDots>
            <ContentContainer className={investorContainerClass}>
                <ImageWrapper>
                    <div className={videoPreviewClass}>
                        <img src={circleBgImg} alt={""} />
                    </div>
                    <More>
                        <InvestorTitle>Our Investors</InvestorTitle>
                        <InvestorText>
                            We are proud to be backed by visionary investors
                        </InvestorText>
                        <img src={investorImg} alt="" className="img" />
                    </More>
                </ImageWrapper>
            </ContentContainer>
        </SectionWithDots>
        <SectionWithWaves>
            <ContentContainer className={mediaKitContainerClass}>
                <MediaCardWrapper>
                    {MEDIA_KIT.map(media => (
                        <MediaKitCard
                            key={media.id}
                            onClick={event => {
                                event.preventDefault();

                                window.open(media.actionLink, "_blank", "noopener noreferrer");
                            }}
                        >
                            <img src={media.imgSrc} alt={media.imgAlt} className="img" />
                            <a className={"link"} href={media.actionLink}>
                                {typeof media.actionLabel === "function" && media.actionLabel()}
                            </a>
                        </MediaKitCard>
                    ))}
                </MediaCardWrapper>
            </ContentContainer>
        </SectionWithWaves>
    </Fragment>
);
