import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Link from "gatsby-link";

import heroBg from "./assets/support-hero-bg.svg";
import arrow from "./assets/bullet-arrow.svg";
import docsIcon from "./assets/docs-icon.svg";
import faqIcon from "./assets/round-question_answer-24px.svg";
import bugIcon from "./assets/round-bug_report-24px.svg";
import communityIcon from "./assets/outline-chat_bubble-24px.svg";
import blogIcon from "./assets/medium-m-2.svg";
import supportIcon from "./assets/support-icon.svg";

const Hero = styled("section")(
  {
    width: "100%",
    background: "url(" + heroBg + ") no-repeat center top",
    color: "#fff",
    boxSizing: "border-box",
    textAlign: "center"
  },
  mq({
    padding: ["100px 20px 25px", "150px 0 25px"],
    marginBottom: [50, 100],
    backgroundSize: ["cover"],
    backgroundPosition: ["top", "bottom", "bottom"]
  })
);

const Title = styled("h1")({
  fontSize: theme.fontSize.h1,
  fontWeight: theme.fontWeight.semiBold,
  marginBottom: 25
});

const SubText = styled("p")(
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.regular,
    color: theme.color.white,
    textAlign: "center",
    margin: "0 20%",
    lineHeight: "150%",
    marginBottom: 50
  },
  mq({
    margin: ["20px 20px", "0 20% 40px 20%"]
  })
);

const Grid = styled("div")(
  {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
    "&.first": {
      marginTop: 100,
      marginBottom: 50
    }
  },
  mq({
    flexDirection: ["column", "row"],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ["25px 25px", 0],
    "&.first": {
      margin: [0, "100px 20px"]
    }
  })
);

const Cell = styled("div")(
  {
    boxSizing: "border-box",
    h3: {
      fontSize: theme.fontSize.h4,
      color: theme.color.black,
      marginTop: 0,
      fontWeight: theme.fontWeight.bold,
      display: "flex",
      alignItems: "center",
      img: {
        marginRight: 20,
        height: 32,
        "&.arrow": {
          marginLeft: 30,
          width: 10
        }
      }
    },
    p: {
      fontSize: theme.fontSize.paragraph,
      color: theme.color.black,
      lineHeight: "160%",
      paddingLeft: 53
    },
    a: {
      color: theme.color.primaryDark,
      letterSpacing: 0.5,
      fontWeight: theme.fontWeight.regular,
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  },
  mq({
    marginRight: [0, 50],
    width: ["100%", "33%"],
    ".image": {
      width: ["100%", "auto"]
    }
  })
);

const bodyStyle = css(
  {
    color: "#4A4A4A",
    marginBottom: 100,
    h2: {
      fontSize: 28,
      fontWeight: theme.fontWeight.semiBold,
      marginBottom: 40
    }
  },
  mq({
    h2: {
      textAlign: ["center", "left"]
    }
  })
);

const PremiumBox = styled("div")({
  background: "#F3FBF9",
  border: "2px solid " + theme.color.secondaryDark,
  borderRadius: 5,
  width: "100%",
  color: "#4A4A4A",
  fontSize: "14px",
  lineHeight: "140%",
  fontWeight: "normal",
  position: "relative",
  boxSizing: "border-box",
  padding: "10px 7px 10px 100px",
  minHeight: 80,
  textAlign: "left",
  p: {
    padding: 0,
    margin: 0
  },
  ".icon": {
    position: "absolute",
    textAlign: "center",
    fontWeight: theme.fontWeight.bold,
    top: 0,
    left: 0,
    height: "100%",
    width: 90,
    background: theme.color.secondaryDark,
    fontSize: 64,
    color: "#FFFFFF",
    lineHeight: "120%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ({ children, ...props }) => (
  <React.Fragment>
    <Hero {...props}>
      <ContentContainer>
        <Title>Support</Title>
        <SubText>
          In need of some support? Explore the options available below.
        </SubText>
      </ContentContainer>
    </Hero>
    <ContentContainer className={bodyStyle}>
      <h2>Resources</h2>
      <Grid>
        <Cell>
          <h3>
            <img src={docsIcon} />
            <a href="https://docs.webiny.com/">
              Documentation
              <img className={"arrow"} src={arrow} />
            </a>
          </h3>
          <p>
            Our documentation features many guides and tutorials to get you
            started. Exploring the docs is the best way to learn how to use
            Webiny.
          </p>
        </Cell>
        <Cell>
          <h3>
            <img src={faqIcon} />
            <a href="https://docs.webiny.com/faq">
              FAQ
              <img className={"arrow"} src={arrow} />
            </a>
          </h3>
          <p>
            Make sure to check the FAQ section, as we might have already
            answered your question there.
          </p>
        </Cell>
        <Cell>
          <h3>
            <img src={bugIcon} />
            <a href="https://github.com/Webiny/webiny-js/issues">
              Found a bug?
              <img className={"arrow"} src={arrow} />
            </a>
          </h3>
          <p>
            Something broke, not working properly? Have a look at the current
            issues on our GitHub, or report an new one.
          </p>
        </Cell>
      </Grid>
    </ContentContainer>
    <ContentContainer className={bodyStyle}>
      <h2>Community</h2>
      <Grid>
        <Cell>
          <h3>
            <img src={communityIcon} />
            <a href="https://community.webiny.com/">
              Community
              <img className={"arrow"} src={arrow} />
            </a>
          </h3>
          <p>
            Join the Webiny Community and get access to many smart people.
            You’ll also find a lot of valuable information and get the
            opportunity to ask fellow members questions.
          </p>
        </Cell>
        <Cell>
          <h3>
            <img src={blogIcon} />
            <a href="https://blog.webiny.com/">
              Blog
              <img className={"arrow"} src={arrow} />
            </a>
          </h3>
          <p>
            We blog often about Webiny and its capabilities, features and
            several other mainly technical topics. It’s a good place to explore.
          </p>
        </Cell>
        <Cell>
          <PremiumBox>
            <h3>Premium Support</h3>
            <div className={"icon"}>
              <img src={supportIcon} />
            </div>
            <p>
              Talk directly to the people that built Webiny. Get your problem
              resolved quickly.
              <br />
              <Link to="/contact-us">
                <strong>Contact us for more info.</strong>
              </Link>
            </p>
          </PremiumBox>
        </Cell>
      </Grid>
    </ContentContainer>
  </React.Fragment>
);
