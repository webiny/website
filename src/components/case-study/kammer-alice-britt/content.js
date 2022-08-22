import {
    ContentWrapper,
    MainContent,
    Quote,
    SideContentItem,
    SideContentWrapper,
    StandoutSection,
} from "../components/content";

import React from "react";
import aliceBrittLogo from "./assets/ab-logo.png";
import kammerLogo2 from "./assets/vkb-logo.svg";
import screenshot from "./assets/vkb-case-study-cover.jpg";

const Content = props => {
    return (
        <ContentWrapper>
            <MainContent>
                <img src={screenshot} alt="" />
                <h3>Project</h3>
                <p>
                    More than half of those in need of care in Germany are cared for by relatives at
                    home. This is a mammoth task that usually places a great burden on those
                    involved. Instead of leaving caregiving relatives to deal with the flood of
                    information on their own, the insurance company Versicherungskammer created{" "}
                    <a href="https://pflegepartner.de" target="_blank" rel="noreferrer">
                        pflegepartner.de
                    </a>{" "}
                    - a platform that bundles the most important information and instructions.
                    Laying it out for the user on as few pages as possible, and explaining them in a
                    comprehensible way. Since it is difficult to estimate how many people will use
                    the platform and at what times, the platform must be highly performant. At the
                    same time, server capacities should not be unnecessarily reserved. This makes
                    the project a challenge from a technical perspective as well.
                </p>
                <h3>What was the challenge? </h3>
                <p>
                    The solution needs to be as future-proof and as flexible as possible - This was
                    the client requirement for the new platform from the very beginning. Knowing
                    that the platform is to be continuously expanded and developed, but without
                    being able to foresee in which direction Pflege Partner platform could actually
                    develop, one thing quickly became clear: an implementation on a traditional
                    content management system is not enough. After a proof of concept, the decision
                    was finally made in favour of a Headless CMS and Webiny, as the appropriate
                    provider.
                </p>
                <Quote author="Janek Hornung, OEV DevOps Engineer">
                    The various building blocks and the expected flexibility of the new platform
                    were particularly challenging.
                </Quote>
                <h3>How did Webiny provide the solution?</h3>
                <p>
                    Webiny Serverless CMS was a perfect fit for this challenging project and met all
                    the technical requirements. It is an open-source project that allows for maximum
                    flexibility. It works natively and serverless on top of the AWS infrastructure,
                    so it can scale infinitely. In addition, the system is a pleasure to use from a
                    development perspective. It is a cloud-native system that works serverless. This
                    means that you don't have to worry about performance, and you don't have to
                    worry about servers and configuring them.
                </p>
                <StandoutSection author="Britt Launspach, Alice Berger und Britt Launspach GbR (alice&britt)">
                    “We have already used Webiny very successfully in other projects. The system
                    convinced us with its modern architecture and flexibility. For this lighthouse
                    project, it was therefore immediately decided that Webiny would be the choice.”
                </StandoutSection>
                <h3>Conclusion</h3>
                <p>
                    The{" "}
                    <a href="https://pflegepartner.de" target="_blank" rel="noreferrer">
                        pflegepartner.de
                    </a>{" "}
                    project for the Versicherungskammer went live at the end of 2020. With this
                    launch, a new standard was set for the insurance group, and OEV successfully
                    implemented a lighthouse project with a perfect tech stack under the hood.
                </p>
            </MainContent>
            <SideContentWrapper downloadLink="/case-study/Webiny_Case_Study_VKB.pdf">
                <SideContentItem
                    logo={kammerLogo2}
                    title="Versicherungskammer"
                    location="Germany"
                    type="client"
                >
                    <p>
                        The Versicherungskammer Group combines 15 brands in Germany and abroad. The
                        Group offers all-round insurance protection for people and property, with a
                        particular focus on preventing damage. The comprehensive product range is
                        aimed at private customers, companies, farmers and institutions.
                    </p>
                </SideContentItem>

                <SideContentItem
                    logo={aliceBrittLogo}
                    title="Alice&Britt"
                    location="Germany"
                    type="client"
                >
                    <p>
                        alice&britt is a communication consultant company based in Düsseldorf. In
                        collaboration with a strong network of creative individuals and partners,
                        the company offers an extensive range of services from initial concept onto
                        the realization of the strategic goals. Employing communication as a tool,
                        the team aims to tackle the prevailing Care-Crisis in Germany.
                    </p>
                </SideContentItem>
            </SideContentWrapper>
        </ContentWrapper>
    );
};

export default Content;
