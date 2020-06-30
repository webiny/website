import React from "react";
import { css } from "emotion";
import mq from "../utils/breakpoints";
import Title from "../ui/layout/title";
import Subtitle from "../ui/layout/subtitle";
import Header from "../ui/layout/header";

import headerBg from "./assets/hero-bg.svg";

const heroStyle = css(
  {
    paddingBottom: "200px !important",
    padding: ["130px 20px 25px"]
  },
  mq({
    minHeight: ["auto", "auto", 650],
  })
);

const Hero = () => (
  <React.Fragment>
    <Header bg={headerBg} className={heroStyle}>
      <Title>Webiny Online Meetups</Title>
      <Subtitle>
        Attend our online knowledge-sharing sessions every Thursday, or sign up
        for the upcoming sessions. We are creating a knowledge database so our
        community members get involved in Webiny
      </Subtitle>
    </Header>
  </React.Fragment>
);

export default Hero;
