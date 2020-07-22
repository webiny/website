import graphqlImg from "./assets/graphql.svg";
import apolloAPIGatewayImg from "./assets/apollo-gateway.svg";
import securedImg from "./assets/secured.svg";

export const WEBINY_API_FEATURES = [
    {
        id: 0,
        title: "GraphQL API layer you can expand",
        body:
            "Create new GraphQL schemas, register new microservices and let the built-in Apollo Federation connect it all together. Webiny includes security utilities so you can easily control who can access what. Each microservice runs in its own function and is ready to scale when you need it the most.",
        imageURL: graphqlImg,
        imageAltText: "GraphQL API layer you can expand"
    },
    {
        id: 1,
        title: "Unified GraphQL schema with Apollo Gateway",
        body:
            "Each microservice you create registers its queries and mutations with the central Apollo Gateway and exposes a unified GraphQL schema to the rest of the system. Our scaffolding templates make it quick and easy to create new services and expand your schema.",
        imageURL: apolloAPIGatewayImg,
        imageAltText: "Unified GraphQL schema with Apollo Gateway",
        includeConnectors: true
    },
    {
        id: 2,
        title: "Secured out of the box",
        body:
            "Security is a crucial layer in any application. Webiny includes a customizable security module you can use in your schemas. There is also a built-in UI to manage users, groups, roles and scopes.",
        imageURL: securedImg,
        imageAltText: "Secured out of the box"
    }
];
