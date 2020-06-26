import React from "react";
import ContentContainer from "../ui/content-container";
import Footer from "../ui/layout/footer";
import Title from "../ui/layout/title";
import Header from "../ui/layout/header";
import { Grid, Cell } from "../ui/layout/layout";

import headerBg from "./assets/header-bg-microservices.svg";

import imgNpm from "./assets/microservices/add-npm.svg";
import imgGraphQL from "./assets/microservices/graphql-http.svg";
import imgHosted from "./assets/microservices/hosted-env.svg";
import imgMultiDeploy from "./assets/microservices/multi-deploy.svg";
import imgNoOverhead from "./assets/microservices/no-overhead.svg";
import imgSlsDeploy from "./assets/microservices/sls-deploy.svg";

const Microservices = () => (
  <React.Fragment>
    <Header bg={headerBg}>
      <Title>
        The Foundation That Makes It Easy to Build and Deploy Microservices
      </Title>
    </Header>
    <ContentContainer>
      <Grid right>
        <Cell title="Plugin based CLI">
          <p>
            Our CLI allows you to shape your workflow by writing simple plugins.
            Even the default Webiny deployment mechanism is a plugin! Use
            community plugins or write your own, expanding your toolkit has
            never been easier.{" "}
          </p>
        </Cell>
        <Cell>
          <img src={imgSlsDeploy} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <img src={imgNpm} />
        </Cell>
        <Cell title="Bring your own libraries and call 3rd party services">
          <p>
            When building on top of Webiny, you can use any NPM library out
            there, as well as you can connect and call any 3rd party API.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Create both GraphQL APIs as well as HTTP services">
          <p>
            With Webiny you can create new GraphQL APIs, that are registered
            with Apollo Gateway. You can also create generic services that are
            invoked via an HTTP request on a specified URL.
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
            Building and deploying microservices requires significant time.
            Webiny enables you to have your services up and running in less time
            and with less effort. Leaving time for more important things.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Great performance with serverless functions">
          <p>
            Webiny sites runs inside a serverless environment. That offers
            unlimited scalability so no matter the load. Your users will
            experience great performance. Serverless also eliminates the need to
            over provision and overpay for infrastructure.
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
