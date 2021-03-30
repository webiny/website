import {
    ContentWrapper,
    MainContent,
    Quote,
    SideContentItem,
    SideContentWrapper,
    StandoutSection,
} from "../components/content";

import React from "react";
import aliceBrittLogo from "./assets/alice-britt-logo.png";
import kammerLogo2 from "./assets/kammer-logo-2.png";
import screenshot from "./assets/kammer-case-study-screenshot.png";

// import smarktLogo from "./assets/smarkt-logo.png";

const Content = props => {
    return (
        <ContentWrapper>
            <MainContent>
                <img src={screenshot} />
                <h3>What was the challenge?</h3>
                <p>
                    The solution needs to be as future-proof and as flexible as possible - This was
                    the client requirement for the new platform from the very beginning. Knowing
                    that the platform is to be continuously expanded and developed, but without
                    being able to foresee in which direction PflegePartner could actually develop,
                    one thing quickly became clear: an implementation on a traditional content
                    management system is not enough. After a proof of concept, the decision was
                    finally made in favor of a Headless CMS and Webiny, as the appropriate provider.
                    “The various building blocks and the expected flexibility of the new platform
                    were particularly challenging.” Janek Hornung, OEV DevOps Engineer
                </p>
                <Quote author="Janek Hornung, OEV DevOps Engineer">
                    The various building blocks and the expected flexibility of the new platform
                    were particularly challenging.
                </Quote>
                {/* <h3>Approach to solving the problem</h3>
                <p>
                    OEV Online initially considered developing an application on the basis of the
                    architectural considerations itself. An Angular or React application on S3 for
                    full flexibility and in the backend a microservice architecture with Node.js.
                    For the management of the content, a separate solution would have been used.
                </p> */}
                <h3>How did Webiny provide the solution?</h3>
                <p>
                    Webiny Serverless CMS was a perfect fit for this challenging project and met all
                    the technical requirements. It is an open source project that allows for the
                    maximum flexibility. It works natively and serverless on top of the AWS
                    infrastructure, so it can scale infinitely. In addition, the system is a
                    pleasure to use from a development perspective. It is a cloud native system that
                    works serverless. This means that you don't have to worry about performance, and
                    you don't have to worry about servers and configuring them. “We have already
                    used Webiny very successfully in other projects. The system convinced us with
                    its modern architecture and flexibility. For this lighthouse project, it was
                    therefore immediately decided that Webiny would be the choice.” Britt Launspach,
                    Alice Berger und Britt Launspach GbR (alice&britt)
                </p>
                <StandoutSection>
                    “Webiny fulfilled the requirements exactly and gave the development team the
                    possibility not to concentrate on the reproduction of a CMS system but to
                    implement the requirements for the customers.”
                </StandoutSection>
                <h3>Conclusion</h3>
                <p>
                    With pflegepartner.de, a project of the Versicherungskammer went live at the end
                    of 2020, with which not only the insurance group set new standards, but with
                    which OEV also successfully launched a lighthouse project with a perfect tech
                    stack under the hut.
                </p>
                {/* <Quote>
                    Even if it is only a matter of designing a small MVP for the time being, it is
                    worth thinking bigger.
                </Quote> */}
                <h3>What mattered most to OEV Online when choosing Webiny?</h3>
                <p>
                    Reasoning provided by - Nico Schönnagel, OEV solution architect: "We don’t like
                    servers (it’s unfair - maybe a little) but what we really like is serverless!
                    Thus we were looking for a Content Management System which is serverless so that
                    we don’t have to care about performance issues. Second, we love IaC, so it was
                    important to us that we get something where we could deploy the whole
                    infrastructure. Additionally, we wanted to be able to add fancy things to the
                    CMS and have it hosted in our own AWS environment. And last but not least, we
                    were looking for a headless CMS. So in the end, there was just one CMS which
                    survives ;)"
                </p>
            </MainContent>
            <SideContentWrapper downloadLink="/case-study/Webiny_Case_Study_S-MARKT-MEHRWERT.pdf">
                <SideContentItem
                    logo={kammerLogo2}
                    title="Versicherungskammer"
                    location="Germany"
                    type="client"
                >
                    <p>Desc for Kammer</p>
                </SideContentItem>

                <SideContentItem
                    logo={aliceBrittLogo}
                    title="Alice&Britt"
                    location="Germany"
                    type="client"
                >
                    <p>Desc for Alice&Britt</p>
                </SideContentItem>
            </SideContentWrapper>
        </ContentWrapper>
    );
};

export default Content;
