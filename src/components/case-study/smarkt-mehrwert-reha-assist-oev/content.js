import React from "react";

import {
    ContentWrapper,
    SideContentWrapper,
    SideContentItem,
    MainContent,
    Quote,
    StandoutSection,
} from "../components/content";

import smarktLogo from "./assets/smarkt-logo.png";
import rehaLogo from "./assets/reha-logo.png";
import screenshot from "./assets/oev-case-study-screenshot.jpg";

const Content = () => {
    return (
        <ContentWrapper>
            <MainContent>
                <img src={screenshot} />
                <h3>What was the challenge?</h3>
                <p>
                    OEV Online was tasked with developing an MVP as a value-added module, but with
                    the greatest technical flexibility. It was necessary for OEV Online to be able
                    to react quickly to changing conditions at any time during the development
                    phase. Even if it is “only” an MVP at first, it was important to choose an
                    architecture from the outset that would still be suitable after the MVP stage.
                </p>
                <Quote author="Nico Schönnagel, OEV solution architect">
                    We knew that requirements could change at any time, that the front-end had to be
                    flexible and the content had to be easily modifiable.
                </Quote>
                <h3>Approach to solving the problem</h3>
                <p>
                    OEV Online initially considered developing an application on the basis of the
                    architectural considerations itself. An Angular or React application on S3 for
                    full flexibility and in the backend a microservice architecture with Node.js.
                    For the management of the content, a separate solution would have been used.
                </p>
                <h3>How did Webiny provide the solution?</h3>
                <p>
                    Webiny provided the development team with the possibility to focus straightway
                    on the requirements for the customers. Webiny features an open-source headless
                    CMS hosted natively on top of the AWS serverless offering. Thus the system
                    fulfils exactly the requirements for modern architecture. Webiny comes with a
                    GraphQL API, which is used to communicate with the backend. Webiny takes full
                    advantages of the serverless infrastructure which in return provides a scalable
                    and cost-efficient solution. Finally, being also a headless solution, it meant
                    the choice of the frontend stack wasn't dictated by the CMS itself, which
                    provided the required flexibility OEV Online required.
                </p>
                <StandoutSection>
                    “Webiny fulfilled the requirements exactly and gave the development team the
                    possibility not to concentrate on the reproduction of a CMS system but to
                    implement the requirements for the customers.”
                </StandoutSection>
                <h3>Conclusion</h3>
                <p>
                    In OEV Online's example of www.s-pflegepartner.de, an MVP was developed using
                    Webiny, which ensures the stack can take the project beyond its current MVP
                    stage. At the same time Webiny, being a serverless solution, keeps the
                    infrastructure and maintenance cost in-line with the expectations of the
                    project's budget.
                </p>
                <Quote>
                    Even if it is only a matter of designing a small MVP for the time being, it is
                    worth thinking bigger.
                </Quote>
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
                    logo={smarktLogo}
                    title="S-MARKT & MEHRWERT"
                    location="Germany"
                    type="client"
                >
                    <p>
                        S-Markt & Mehrwert GmbH is a service company that is is a part of the
                        Sparkassen-Finanzgruppe. The company offers services for telephone and
                        electronic customer contact management, new media services and marketing
                        consulting.
                    </p>
                </SideContentItem>

                <SideContentItem
                    logo={rehaLogo}
                    title="REHA ASSIST"
                    location="Germany"
                    type="client"
                >
                    <p>
                        Reha Assist Deutschland GmbH provides rehabilitation services and
                        specialized in the care of the severely and severely disabled. They make it
                        possible to maintain mobility, clarify the care situation if necessary and
                        implement the joint decisions organizationally.
                    </p>
                </SideContentItem>
            </SideContentWrapper>
        </ContentWrapper>
    );
};

export default Content;
