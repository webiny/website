import React from "react";
import ContentContainer from "../ui/content-container";
import Footer from "./components/footer";
import Title from "./components/title";
import Header from "./components/header";
import { Grid, Cell } from "./components/layout";

import headerBg from "./assets/header-bg-apis.svg";

import imgNpm from "./assets/microservices/add-npm.svg";
import imgGraphQL from "./assets/microservices/graphql-http.svg";
import imgHosted from "./assets/microservices/hosted-env.svg";
import imgMultiDeploy from "./assets/microservices/multi-deploy.svg";
import imgNoOverhead from "./assets/microservices/no-overhead.svg";
import imgSingleDeploy from "./assets/microservices/single-deploy.svg";

const Microservices = () => (
    <React.Fragment>
        <Header bg={headerBg}>
            <Title>Build microservices and deploy them in seconds with a single command</Title>
        </Header>
        <ContentContainer>
            <Grid left>
                <Cell>
                    <img src={imgSingleDeploy} />
                </Cell>
                <Cell title="CLI for automatic deployment">
                    <p>
                        Webiny CLI deploys your microservice to the Webiny Serverless Cloud using an
                        automated process. It’s a single command and your service is live almost
                        instantly.
                    </p>
                </Cell>
            </Grid>
            <Grid right>
                <Cell title="Deploy a single service or multiple services in a single command">
                    <p>
                        In some cases, you need to update only a particular service, in others a set
                        of services, and once in a while, you might need to update all of your
                        services. Webiny CLI makes it super easy to do just that.
                    </p>
                </Cell>
                <Cell>
                    <img src={imgMultiDeploy} />
                </Cell>
            </Grid>
            <Grid left>
                <Cell>
                    <img src={imgNpm} />
                </Cell>
                <Cell title="Bring your own libraries and call 3rd party services">
                    <p>
                        When building on top of Webiny, you can use any NPM library out there, as
                        well as you can connect and call any 3rd party API.
                    </p>
                </Cell>
            </Grid>
            <Grid right>
                <Cell title="Create both GraphQL APIs as well as HTTP services">
                    <p>
                        With Webiny you can create new GraphQL APIs, that are registered with Apollo
                        Gateway. You can also create generic services that are invoked via an HTTP
                        request on a specified URL.
                    </p>
                </Cell>
                <Cell>
                    <img src={imgGraphQL} />
                </Cell>
            </Grid>
            <Grid left>
                <Cell>
                    <img src={imgNoOverhead} />
                </Cell>
                <Cell title="Build with less overhead">
                    <p>
                        Building and deploying microservices requires significant time. Webiny
                        enables you to have your services up and running in less time and with less
                        effort leaving time for more important things.
                    </p>
                </Cell>
            </Grid>
            <Grid right>
                <Cell title="Host your microservices inside a managed serverless cloud">
                    <p>
                        Webiny Serverless Cloud hosts your microservices inside a managed cloud
                        which scales and removes you from the tasks of managing functions and
                        configuring API gateways, certificates and more.
                    </p>
                </Cell>
                <Cell>
                    <img src={imgHosted} />
                </Cell>
            </Grid>
        </ContentContainer>
        <Footer />
    </React.Fragment>
);

export default Microservices;
