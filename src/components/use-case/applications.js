import React from "react";
import ContentContainer from "../ui/content-container";
import Footer from "../ui/layout/footer";
import Title from "../ui/layout/title";
import Header from "../ui/layout/header";
import { Grid, Cell } from "../ui/layout/layout";

import headerBg from "./assets/header-bg-apps.svg";

import imgNpm from "./assets/apps/add-npm.svg";
import imgAdminTheme from "./assets/apps/admin-theme.svg";
import imgJs from "./assets/apps/js.svg";
import imgLocalEnv from "./assets/apps/local-env.svg";
import imgReactComp from "./assets/apps/react-components.svg";
import imgCli from "./assets/apps/webiny-cli.svg";
import imgHosted from "./assets/apps/hosted-env.svg";
import imgAcl from "./assets/apps/acl.svg";

const Applications = () => (
  <React.Fragment>
    <Header bg={headerBg}>
      <Title>Build Scalable Serverless Web Application in Less Time</Title>
    </Header>
    <ContentContainer>
      <Grid left>
        <Cell>
          <img src={imgReactComp} />
        </Cell>
        <Cell title="A library of ready-made React components">
          <p>
            The given components make it easy to create simple and complex
            interfaces in no time. Components are both designed and coded to
            seamlessly work together.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Local development environment">
          <p>
            With a simple command install Webiny locally on your machine.
            Develop using favorite editor and environment, there are no magic
            black boxes here.
          </p>
        </Cell>
        <Cell>
          <img src={imgLocalEnv} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <img src={imgAdminTheme} />
        </Cell>
        <Cell title="Admin theme is included">
          <p>
            The admin theme has all the required parts, from a clean-looking UI,
            navigation, user account area, search and login form. Everything is
            customizable. By using the given admin theme you’ll save yourself
            days if not weeks of coding.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Bring your own libraries and call 3rd party services">
          <p>
            When building on top of Webiny, you can use any NPM library out
            there, as well as you can connect and call 3rd party API.
          </p>
        </Cell>
        <Cell>
          <img src={imgNpm} />
        </Cell>
      </Grid>
      {/* 
            <Grid left>
                <Cell>
                    <img src={imgCli} />
                </Cell>
                <Cell title="Build & Deploy CLI">
                    <p>
                        If you ever tried configuring webpack, babel and other tools for your
                        development environment you’ll know it’s painful and time-consuming. With
                        Webiny this is all preconfigured for you. Also to deploy your project, it’s
                        a single command.
                    </p>
                </Cell>
            </Grid>
            */}
      <Grid left>
        <Cell>
          <img src={imgHosted} />
        </Cell>
        <Cell title="Great performance with serverless functions">
          <p>
            Webiny sites runs inside a serverless environment. That offers
            unlimited scalability so no matter the load. Your users will
            experience great performance. Serverless also eliminates the need to
            over provision and overpay for infrastructure.
          </p>
        </Cell>
      </Grid>
      <Grid left>
        <Cell title="100% Javascript">
          <p>
            One language is all you need to know to build on top of Webiny.
            React on the client-side and Node.js on the server-side.
          </p>
        </Cell>
        <Cell>
          <img src={imgJs} />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <img src={imgAcl} />
        </Cell>
        <Cell title="Built-in access control layer">
          <p>
            The fine-grain ACL layer allows you to configure user access rights
            to the smallest scope. You can also issue API tokens for users to
            use inside 3rd party applications and services.
          </p>
        </Cell>
      </Grid>
    </ContentContainer>
    <Footer />
  </React.Fragment>
);

export default Applications;
