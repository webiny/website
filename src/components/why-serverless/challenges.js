import React from "react";
import { css } from "emotion";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import { Grid, Cell } from "../ui/layout/layout";

import sectionBg from "./assets/light-gray-bg.svg";
import imgRightTool from "./assets/right-tool.svg";
import imgWhereToStart from "./assets/where-to-start.svg";
import imgArchitecture from "./assets/architecture.svg";
import imgAcl from "./assets/acl.svg";
import imgLocalEnv from "./assets/local-env.svg";
import imgSsr from "./assets/ssr.svg";

const wrapperClass = css(
  {
    //background: 'url(' + sectionBg + ') no-repeat left top',
    backgroundSize: "contain",
    backgroundColor: "transparent",
  },
  mq({
    marginTop: [0, -200],
    paddingTop: [0, 200],
    paddingBottom: [25, 100],
  })
);

const SubTitle = styled("h2")(
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    color: theme.color.black,
    textAlign: "center",
    paddingTop: 50,
    margin: "25px auto 40px auto",
  },
  mq({
    width: ["100%", 675],
  })
);

const Bold = styled("span")({
  fontWeight: theme.fontWeight.bold,
});

const Challenges = () => (
  <section className={wrapperClass}>
    <SubTitle>
      There Are Some Challenges Going Serverless, but Webiny Helps Solve Those{" "}
    </SubTitle>
    <ContentContainer>
      <Grid left>
        <Cell>
          <img src={imgRightTool} alt="Right tools and processes" />
        </Cell>
        <Cell title="Right tools and processes">
          <p>
            <Bold>Challenge:</Bold> How do you structure your project, how do
            you deploy it, and how do you access it?
          </p>
          <p>
            <Bold>Solution:</Bold> Webiny has a ready-made structure that works
            for any type of project, be that a website, an app or an API. To
            deploy and access a project, Webiny comes with a CLI that automates
            that for you. It takes a single command line to deploy the project.
            Using a CDN URL that you get back, you can access the project.{" "}
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="Where to start?">
          <p>
            <Bold>Challenge:</Bold> Often jumping into new technology is scary.
            Especially if you need to go through a series of tutorials just to
            get to hello world.
          </p>
          <p>
            <Bold>Solution:</Bold> Webiny comes with several ready-made
            serverless apps with a simple install process. Right away you'll
            have a working app that you can interact with. It’s much more
            satisfying than having a hello world on your screen.{" "}
          </p>
        </Cell>
        <Cell>
          <img src={imgWhereToStart} alt="Where to start?" />
        </Cell>
      </Grid>

      <Grid left>
        <Cell>
          <img src={imgArchitecture} alt="What’s the right architecture?" />
        </Cell>
        <Cell title="What’s the right architecture?">
          <p>
            <Bold>Challenge:</Bold> What architecture should I use for my
            project and how do I put it in place?
          </p>
          <p>
            <Bold>Solution:</Bold> We architected and coded Webiny from ground
            up for the serverless environment. Your applications directly
            benefit by running on top of this stack. No need to experiment, lose
            time and learn the hard way. Use a proven and test solution.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="How do I manage users and their permissions?">
          <p>
            <Bold>Challenge:</Bold> Creating an ACL is hard. Doing one inside a
            serverless function has its own set of unique challenges.
          </p>
          <p>
            <Bold>Solution:</Bold> Webiny has a built-in ACL that comes with a
            GraphQL integration. It has the ability to create users, roles,
            groups, and API tokens. It's all controlled via a friendly user
            interface. The whole logic is running inside a dedicated serverless
            function.{" "}
          </p>
        </Cell>
        <Cell>
          <img
            src={imgAcl}
            alt="How do I manage users and their permissions?"
          />
        </Cell>
      </Grid>
      <Grid left>
        <Cell>
          <img src={imgSsr} alt="But my site requires server-side render" />
        </Cell>
        <Cell title="But my site requires server-side render">
          <p>
            <Bold>Challenge:</Bold> How do you do SSR inside a serverless
            function and get that full SEO value?
          </p>
          <p>
            <Bold>Solution:</Bold> Webiny comes with a dedicated function that
            handles SSR. No need to configure or install anything separately.
            Everything is already included and pre-configured for you.
          </p>
        </Cell>
      </Grid>
      <Grid right>
        <Cell title="How do I install and run everything locally?">
          <p>
            <Bold>Challenge:</Bold> A serverless function is a cloud-native
            service. So how do you replicate the whole setup on your local
            development environment?
          </p>
          <p>
            <Bold>Solution:</Bold> You don't. There are a plethora of services,
            and differences in them between the cloud providers. The only way to
            get a 1:1 environment is to deploy your functions and test them
            inside the cloud. Our development setup does just that. This way you
            can rest assured that what you test in development, is how it will
            behave in production.{" "}
          </p>
        </Cell>
        <Cell>
          <img
            src={imgLocalEnv}
            alt="How do I install and run everything locally?"
          />
        </Cell>
      </Grid>
    </ContentContainer>
  </section>
);

export default Challenges;
