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
    P,
} from "./open-source-benefits.styled";

import ts from "../../../assets/new-homepage/open-source-benefits/frame-icons/ts.svg";
import okta from "../../../assets/new-homepage/open-source-benefits/frame-icons/okta.svg";
import multiple from "../../../assets/new-homepage/open-source-benefits/frame-icons/multiple.svg";
import graphQL from "../../../assets/new-homepage/open-source-benefits/frame-icons/graphQL.svg";
import rollouts from "../../../assets/new-homepage/open-source-benefits/frame-icons/rollouts.svg";
import recovery from "../../../assets/new-homepage/open-source-benefits/frame-icons/recovery.svg";
import arrow from "../../../assets/new-homepage/open-source-benefits/arrow.svg";

const pagePublishEvent = `// Add a \`ContextPlugin\` plugin to hook into the Page Builder events.
new ContextPlugin<PbContext>(async (context) => {
  // After a page was published, send a Slack message.
  context.pageBuilder.onAfterPagePublish.subscribe(
    async ({ publishedPage }) => {
      // Execute a custom function
      await sendMessageToSlack({
        id: publishedPage.id,
        title: publishedPage.title
      });
    }
  );
});`;

const newGraphQlResolver = `// Add a \`GraphQLSchemaPlugin\` plugin to extend the GraphQL schema.
new GraphQLSchemaPlugin({
  typeDefs: /* GraphQL */ \`
    extend type Query {
      myField: String!
    }
  \`,
  resolvers: {
    Query: {
      myField(root, args, context) {
        return "My field value!";
      }
    }
  }
});
`;

const changeAdminLogo = `import React from "react";
import { Admin, AddLogo } from "@webiny/app-serverless-cms";
​
// Import your logo image.
import logoPng from "./logo.png";
​
export const App = () => {
  return (
    <Admin>
      <AddLogo logo={<img src={logoPng} />} />
    </Admin>
  );
};​`;

const userAuthenticator = `// Add a \`ContextPlugin\` plugin to add a custom authenticator.
new ContextPlugin<SecurityContext>((context) => {
  context.security.addAuthenticator(async (token) => {
    // Verify the token.
    const tokenData = await verifyToken(token);
​
    // Return an Identity object.
    if (tokenData) {
      return {
        id: tokenData.sub,
        type: "custom-identity",
        displayName: tokenData.name
      };
    }
​
    return undefined;
  });
});`;

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
                    <a target="_blank" rel="noreferrer" href={link}>
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
                                    <Code language="javascript" code={newGraphQlResolver} />
                                </TabPanel>
                                <TabPanel>
                                    <Code language="javascript" code={changeAdminLogo} />
                                </TabPanel>
                                <TabPanel>
                                    <Code language="javascript" code={userAuthenticator} />
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
                    link="/docs/core-development-concepts/basics/tools-and-libraries"
                />
                <FrameContainer
                    image={okta}
                    title="OKTA integration"
                    description="AWS Cognito is the default IdP, but enterprise users can replace it with OKTA."
                    link="/docs/enterprise/okta-integration"
                />
                <FrameContainer
                    image={multiple}
                    title="Deploy to multiple environments"
                    description="Using Webiny CLI, you can propagate code through different environments, like dev, prod."
                    link="/docs/overview/features/multiple-environments"
                />
                <FrameContainer
                    image={graphQL}
                    title="Expandable GraphQL API"
                    description="Change existing GraphQL resolvers, or add new ones in a few lines of code."
                    link="/docs/core-development-concepts/extending-and-customizing/extend-graphql-api"
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
