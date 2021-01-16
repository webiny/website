import React, { useState } from "react";
import styled from "react-emotion";
import { css } from "emotion";
import mq from "../utils/breakpoints";
import CodeSample from "./codesample";

const tabs = [
    {id: 1, text: "Define your infrastructure", selected: true},
    {id: 2, text: "Deploy your stack", selected: false},
    {id: 3, text: "Expand the GraphQL API", selected: false},
    {id: 4, text: "Check user permissions", selected: false},
]

const CodeTabPart = styled("div")(
    {
        maxWidth: 1000,
        margin: "0 auto",
        marginTop: 50,
        height: "100%"
    }
)

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
                backgroundColor: "#7979F7"
            },

            "& span": {
                fontSize: 18,
                lineHeight: "23px",
                color: "#D9DAE1"
            }
        }
    },
    mq({
        "& .tab-item": {
            "& span": {
                lineHeight: ["15px", "23px"],                            
                fontSize: [13, 18],
                color: "#D9DAE1"
            }
        }
    })
)

const TabContent = styled("div")(
    {
        padding: "25px 25px 0 25px",
        backgroundColor: "#2B2C55",
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10
    }
)

const CodeTab = () => {
    const [tabList, setTabList] = useState(tabs);
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const updateTab = (id) => {
        setSelectedTab(tabs.find(item => item.id === id));
        setTabList(tabList.map(item => {
            if(item.id === id) {
                return {...item, selected: !item.selected}
            } else {
                return {...item, selected: false}
            }
        }))
    }
    return (
        <CodeTabPart>
            <TabHeader>
                {
                    tabList.map(item => (
                        <div className={`tab-item ${item.selected ? "active" : ""}`} key={item.id} onClick={() => updateTab(item.id)} >
                            <span>{item.text}</span>
                        </div>
                    ))
                }
            </TabHeader>
            <TabContent>
                {
                    selectedTab.id === 1 && 
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
                }                
                {
                    selectedTab.id === 2 &&
                    <CodeSample language="shell">
                    {`(...)
    aws:apigatewayv2:Route graphql-post
    aws:apigatewayv2:Route graphql-options
 ~  aws:lambda:Function graphql-playground updated [diff: ~code]
    aws:lambda:Permission allow-graphql-get
    aws:lambda:Permission allow-cms-get
    aws:apigatewayv2:Integration graphql-get
    aws:apigatewayv2:Integration cms-get
    aws:apigatewayv2:Route graphql-get
    aws:apigatewayv2:Route cms-get
    pulumi:pulumi:Stack api-local
Outputs:
    apiUrl                  : "https://d3sog119w3roso.cloudfront.net"
    cognitoAppClientId      : "430l1k0cffpo06flldkvikk4si"
    cognitoUserPoolId       : "eu-central-1_B5ppNfJQl"
    region                  : "eu-central-1"
    updatePbSettingsFunction: "arn:aws:lambda:eu-central-1:674320871285:function:pb-update-settings-a49b55a"
Resources:
    ~ 2 updated
    65 unchanged
Duration: 20s
Permalink: file:///Users/adrian/dev/webiny-js/api/.pulumi/stacks/local.json
:tada: Done! Deploy finished in 137.774s.
:bulb: Running "hook-after-deploy" hook...
✔ Hook "hook-after-deploy" completed.
:sparkles:  Done in 139.31s.
➜  webiny-js git:(v5-cwp) ✗`}
</CodeSample>
                }
                {
                    selectedTab.id === 3 && 
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
                }
                {
                    selectedTab.id === 4 && 
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
                }
            </TabContent>
        </CodeTabPart>
    )
}

export default CodeTab