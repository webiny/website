import singleCommandImg from "./assets/single-command.svg";
import scaffoldImg from "./assets/scaffold.svg";
import deployProcessImg from "./assets/deploy-process.svg";

export const WEBINY_CLI_FEATURES = [
    {
        id: 0,
        title: "Create and deploy projects with a single command",
        body:
            "Use the Webiny CLI to bootstrap a project and deploy it to a serverless cloud within minutes. The CLI creates all the required resources like AWS Lambdas, S3, API Gateway, CDN and connects them together.",
        imageURL: singleCommandImg,
        imageAltText: "Create and deploy projects with a single command",
    },
    {
        id: 1,
        title: "Use scaffolding templates to expand your project",
        body:
            "You can read through several pages on how to create a new microservice, or you can just run the `webiny scaffold` command which will create one for you in seconds and hook it up with the rest of the system. Once created you can add your business logic to it and deploy it to your cloud.",
        imageURL: scaffoldImg,
        imageAltText: "Use scaffolding templates to expand your project",
        includeConnectors: true,
    },
    {
        id: 2,
        title: "Control your deploy process",
        body:
            "Webiny CLI comes with hooks as integration points. You can use these hooks to further expand the deploy process, like adding CI/CD support and syncing state files. The CLI is also pluginable, so you can build new functionality to optimise your development and deployment process even further.",
        imageURL: deployProcessImg,
        imageAltText: "Control your deploy process",
    },
];
