import React, { useState } from "react";
import styled from "react-emotion";
import mq from "../utils/breakpoints";
import CodeSample from "./codesample";

const tabs = [
    { id: 1, text: "Define your infrastructure", selected: true },
    { id: 2, text: "Deploy your stack", selected: false },
    { id: 3, text: "Expand the GraphQL API", selected: false },
    { id: 4, text: "Check user permissions", selected: false },
];

const CodeTabPart = styled("div")({
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50,
    height: "100%",
});

const TabHeader = styled("div")(
    {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        background: "#434468",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

        "& .tab-item": {
            padding: "24px 0",
            textAlign: "center",
            cursor: "pointer",

            "&:first-child": {
                borderTopLeftRadius: 10,
            },

            "&:last-child": {
                borderTopRightRadius: 10,
            },

            "&.active": {
                backgroundColor: "#7979F7",
            },

            "& span": {
                fontSize: 18,
                lineHeight: "23px",
                color: "#D9DAE1",
            },
        },
    },
    mq({
        "& .tab-item": {
            "& span": {
                lineHeight: ["15px", "23px"],
                fontSize: [13, 18],
                color: "#D9DAE1",
            },
        },
    }),
);

const TabContent = styled("div")({
    padding: "25px 25px 0 25px",
    backgroundColor: "#2B2C55",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
});

const CodeTab = () => {
    const [tabList, setTabList] = useState(tabs);
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const updateTab = id => {
        setSelectedTab(tabs.find(item => item.id === id));
        setTabList(
            tabList.map(item => {
                if (item.id === id) {
                    return { ...item, selected: !item.selected };
                } else {
                    return { ...item, selected: false };
                }
            }),
        );
    };
    return (
        <CodeTabPart>
            <TabHeader>
                {tabList.map(item => (
                    <div
                        className={`tab-item ${item.selected ? "active" : ""}`}
                        key={item.id}
                        onClick={() => updateTab(item.id)}
                    >
                        <span>{item.text}</span>
                    </div>
                ))}
            </TabHeader>
            <TabContent>
                {selectedTab.id === 1 && (
                    <CodeSample language="javascript">
                        {`new aws.lambda.Function("graphql", {
                            runtime: "nodejs12.x",
                            handler: "handler.handler",
                            role: this.role.arn,
                            timeout: 30,
                            memorySize: 512,
                            code: new pulumi.asset.AssetArchive({
                                ".": new pulumi.asset.FileArchive("./code/graphql/build")
                            }),
                            vpcConfig: {
                                subnetIds: vpc.subnets.private.map(subNet => subNet.id),
                                securityGroupIds: [vpc.vpc.defaultSecurityGroupId]
                            }
                        })`}
                    </CodeSample>
                )}
                {selectedTab.id === 2 && (
                    <CodeSample language="shell">{`$ yarn webiny deploy
                        (...)

                        webiny success: Done! Deploy finished in 23.024s.
                        webiny info: Running "hook-after-deploy" hook...
                        webiny success: Default Page Builder app's settings updated.
                        webiny success: Hook "hook-after-deploy" completed.
                        webiny success: apps/website stack deployed successfully.

                        ➜ Main GraphQL API: https://xxxx.cloudfront.net/graphql
                        ➜ Admin app: https://xxxx.cloudfront.net
                        ➜ Public website:
                        - Website URL: https://xxxx.cloudfront.net
                        - Website preview URL: https://xxxx.cloudfront.net
                    `}</CodeSample>
                )}
                {selectedTab.id === 3 && (
                    <CodeSample language="javascript">
                        {`import { GraphQLSchemaPlugin } from "@webiny/handler-graphql/types";
                        export default {
                            type: "graphql-schema",
                            schema: {
                                typeDefs: "
                                    type Product {
                                        title: String
                                        price: Number
                                    }
                                    extend Query {  
                                        listProducts: [Product]
                                    }
                                ",
                                resolvers: {
                                    Query: {
                                        listProducts: () => {
                                            return [{ title: "A product", price: 129.99 }];
                                        }
                                    }
                                }
                            }
                        } as GraphQLSchemaPlugin;`}
                    </CodeSample>
                )}
                {selectedTab.id === 4 && (
                    <CodeSample language="javascript">
                        {`import { SecurityContext } from "@webiny/api-security/types";
                        import { NotAuthorizedError } from "@webiny/api-security";

                        export default async (id, context: SecurityContext) => {
                            // Check if the user is allowed to access products
                            const permission = context.security.getPermission("ecommerce.product");
                            if (!permission || !permission.rwd.includes("r")) {
                                throw new NotAuthorizedError();
                            }
                            // Load the product from DB
                            return await context.products.getProduct(id);
                        };`}
                    </CodeSample>
                )}
            </TabContent>
        </CodeTabPart>
    );
};

export default CodeTab;
