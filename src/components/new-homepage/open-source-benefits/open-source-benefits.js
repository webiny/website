import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Prism from "../../utils/prism/index";

import {
    Container,
    GridFramesContainer,
    Frame,
    FrameLink,
    FrameTitle,
    FrameDescription,
    CodeSection,
    CodeSectionLabel,
    CodeSectionTitle,
    CodeSectionDescription,
    CodeSectionTabs,
    CodeSectionExample,
    P
} from "./open-source-benefits.styled";

import ts from "../../../assets/new-homepage/open-source-benefits/frame-icons/ts.svg";
import okta from "../../../assets/new-homepage/open-source-benefits/frame-icons/okta.svg";
import multiple from "../../../assets/new-homepage/open-source-benefits/frame-icons/multiple.svg";
import graphQL from "../../../assets/new-homepage/open-source-benefits/frame-icons/graphQL.svg";
import rollouts from "../../../assets/new-homepage/open-source-benefits/frame-icons/rollouts.svg";
import recovery from "../../../assets/new-homepage/open-source-benefits/frame-icons/recovery.svg";
import arrow from "../../../assets/new-homepage/open-source-benefits/arrow.svg";

const pagePublishEvent = `// Before doing anything, let’s make sure the user is signed in.
const { authentication } = this.context;
 const identity = await authentication.getIdentity();
 if (!identity) {
  throw new Error(“Not Authenticated.”);
}

// We use ’mdbid’ (https://www.npmjs.com/package/mdbid) library to
// generate a random, unique, and sequential (sortable) ID for our  
// new identity
const id = mdbid();`;

const FrameContainer = ({ image, title, description, link }) => {
    return (
        <Frame>
            <img src={image} alt="icon" />
            <FrameTitle
                style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    lineHeight: "32px",
                    color: "#FFFFFF",
                }}
            >
                {title}
            </FrameTitle>
            <FrameDescription>{description}</FrameDescription>
            <FrameLink>
                {link ? (
                    <a href={link}>
                        Explore more <img src={arrow} />
                    </a>
                ) : (
                    "(coming soon)"
                )}
            </FrameLink>
        </Frame>
    );
};

const Code = ({ code, language }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        Prism.highlightAll();
        setShow(true);
    }, []);

    return (
        <CodeSectionExample show={show} className={`Code line-numbers`}>
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </CodeSectionExample>
    );
};

const OpenSourceBenefits = () => {
    return (
        <Container>
            <CodeSection>
                <CodeSectionDescription>
                    <div>
                        <CodeSectionLabel>OPEN SOURCE</CodeSectionLabel>
                    </div>
                    <CodeSectionTitle>
                        Customize, integrate, embed - harness the{" "}
                        <span>benefits of open source</span>
                    </CodeSectionTitle>
                    <P>
                        Being <span>open source is more than having</span> a public repo with a MIT
                        licence. Webiny has been architected with{" "}
                        <span>hooks, plugins and life cycle events</span> so you can customize{" "}
                        <span>every aspect of the platform</span> and make it work exactly how you
                        want it.
                    </P>
                </CodeSectionDescription>
                <div className="code-section-width-wrapper">
                    <CodeSectionTabs>
                        <Tabs>
                            <TabList selectedClassName="isActiveTab">
                                <Tab selectedClassName="isActiveTab">Page publish event</Tab>
                                <Tab selectedClassName="isActiveTab">New GraphQL Resolver</Tab>
                                <Tab selectedClassName="isActiveTab">Change Admin Logo</Tab>
                                <Tab selectedClassName="isActiveTab">Authenticate user</Tab>
                            </TabList>
                            <div className="tabs-code">
                                <TabPanel>
                                    <Code language="javascript" code={pagePublishEvent} />
                                </TabPanel>
                                <TabPanel>
                                    <Code language="javascript" code={`console.log("hello")`} />
                                </TabPanel>
                                <TabPanel>
                                    <Code language="javascript" code={`console.log("hello")`} />
                                </TabPanel>
                                <TabPanel>
                                    <Code language="javascript" code={`console.log("hello")`} />
                                </TabPanel>
                            </div>
                        </Tabs>
                    </CodeSectionTabs>
                </div>
            </CodeSection>
            <GridFramesContainer>
                <FrameContainer
                    image={ts}
                    title="Typescript support"
                    description="Type definitions across  the whole project to help you get around."
                    link="https://google.com"
                />
                <FrameContainer
                    image={okta}
                    title="OKTA integration"
                    description="AWS Cognito is the default IdP, but enterprise users can replace it with OKTA."
                    link="https://google.com"
                />
                <FrameContainer
                    image={multiple}
                    title="Deploy to multiple environment"
                    description="Using Webiny CLI you can propagate code trought different environments, like dev, prod."
                    link="https://google.com"
                />
                <FrameContainer
                    image={graphQL}
                    title="Expandable GraphQL API"
                    description="Change existing GraphQL resolvers, or add new ones in a few lines of code."
                    link="https://google.com"
                />
                <FrameContainer
                    image={rollouts}
                    title="Staged rollouts"
                    description="Roll out code changes to a sub-set of your users, and if needed, instantly roll-back."
                />
                <FrameContainer
                    image={recovery}
                    title="Point in time recovery"
                    description="Take a database snapshot and use it as a point in time recovery if needed."
                />
            </GridFramesContainer>
        </Container>
    );
};

export default OpenSourceBenefits;
