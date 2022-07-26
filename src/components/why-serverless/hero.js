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
    },
    mq({
        minHeight: ["auto", "auto", 650],
    }),
);

const Hero = () => (
    <React.Fragment>
        <Header bg={headerBg} className={heroStyle}>
            <Title>Why Serverless?</Title>
            <Subtitle>
                Serverless is making big changes to how we operate, deploy, architect and run
                applications. There are many benefits that serverless brings, the ones below are
                just a few..
            </Subtitle>
        </Header>
    </React.Fragment>
);

export default Hero;
