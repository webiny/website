import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";
import { trackGaConversion } from "../../ui/functions";

import heroBg from "./assets/hero-bg.svg";
import gitHubLogo from "./assets/github-logo.svg";
import bullet from "./assets/circle-check.svg";
import terminalImg from "./assets/terminal.svg";
import webinyLogo from "./assets/webiny-orange-logo.svg";

const heroContainer = css(
  {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: 1300,
  },
  mq({
    flexDirection: ["column", "row"],
    width: ["100%", 1200],
  })
);

const Hero = styled("section")(
  {
    width: "100%",
    maxWidth: 1300,
    margin: "0 auto",
    backgroundSize: "cover",
    color: theme.color.black,
    boxSizing: "border-box",
    position: "relative",
    backgroundColor: "#fff", //theme.color.lightGray
  },
  mq({
    textAlign: ["center", "left"],
    padding: ["100px 20px 25px", "150px 0 25px"],
    //height: ["auto", "calc(100vh - 100px)"],
    //minHeight: ["auto", 800],
    //maxHeight: ["auto", 750],
  })
);

const Title = styled("h1")(
  {
    fontSize: 48,
    fontWeight: theme.fontWeight.light,
    marginBottom: 25,
  },
  mq({
    textAlign: ["center", "left"],
  })
);

const LeftSide = styled("div")(
  {
    margin: "0 auto 15px auto",
    position: "relative",
  },
  mq({
    width: ["100%", "auto"],
  })
);

const RightSide = styled("div")(
  {},
  mq({
    textAlign: ["center", "left"],
    width: ["100%", 550],
    img: {
      maxHeight: [40],
    },
  })
);

const Buttons = styled("div")(
  {
    display: "flex",
    marginBottom: 25,
  },
  mq({
    justifyContent: ["space-around", "flex-start"],
  })
);

const ctaButton = css(
  {
    position: "relative",
    marginTop: 0,
    marginRight: "25px !important",
    "&:last-child": {
      marginRight: "0 !important",
    },
  },
  mq({
    width: ["150px !important", "auto !important"],
  })
);

const SubText = styled("p")(
  {
    fontSize: theme.fontSize.subText,
    fontWeight: theme.fontWeight.light,
    lineHeight: "25px",
    marginBottom: 35,
  },
  mq({
    textAlign: ["center", "left"],
  })
);

const GitHubLogo = styled("img")(
  {
    position: "relative",
    marginRight: 5,
  },
  mq({
    display: ["none", "block"],
  })
);

const List = styled("ul")(
  {
    boxSizing: "border-box",
    padding: 0,
    width: "100%",
    marginBottom: 25,
    display: "flex",
    flexWrap: "wrap",
  },
  mq({
    justifyContent: ["center", "space-between"],
  })
);

const ListItem = styled("li")({
  listStyle: "none",
  textAlign: "left",
  marginBottom: 15,
  marginRight: 25,
  background: "url(" + bullet + ") no-repeat left 2px",
  paddingLeft: 30,
  "&:last-child": {
    marginRight: 0,
  },
  a: {
    color: theme.color.secondaryDark,
  },
});

const Bold = styled("span")({
  fontWeight: theme.fontWeight.semiBold,
});

const TerminalBg = styled("div")(
  {
    left: 0,
    zIndex: 0,
    backgroundImage: "url(" + heroBg + ")",
    backgroundSize: "100%",
    backgroundPosition: "0px 0px",
    backgroundRepeat: "no-repeat",
    top: 90,
  },
  mq({
    position: ["relative", "absolute"],
    width: ["100%", 750],
    height: [300, 640],
  })
);

const TerminalWrapper = styled("div")(
  {
    background: "url(" + terminalImg + ") no-repeat",
    position: "absolute",
    zIndex: 2,
    backgroundSize: "100%",
    padding: "50px 0  0 50px",
    boxSizing: "border-box",
    height: 350,
    maxWidth: 450,
  },
  mq({
    width: ["100%", 450],
    left: ["50%", 150],
    transform: ["translate(-50%, -45%)", "translateY(-45%)"],
    top: [200, "55%"],
  })
);

const Code = styled("div")(
  {
    fontFamily: "monospace",
    color: theme.color.black,
    position: "absolute",
    zIndex: 3,
    ".comment": {
      color: theme.color.grayText,
    },
    textAlign: "left",
  },
  mq({
    fontSize: [12, 14],
    width: [310, 350],
  })
);

class HeroComponent extends React.Component {
  render() {
    return (
      <Hero {...this.props}>
        <TerminalWrapper>
          <Code>
            <span className="comment">#1: Install Webiny</span>
            <br />
            $ npx create-webiny-project new-project
            <br />
            <br />
            <span className="comment">#2: Deploy Webiny API</span>
            <br />
            $ yarn webiny deploy api
            <br />
            <br />
            <span className="comment">#3: Access your project</span>
            <br />
            $ yarn start
            <br />
            <br />
            <span className="comment">
              #4: Have fun and create amazing new things
            </span>
            <br />
          </Code>
        </TerminalWrapper>
        <TerminalBg />
        <ContentContainer className={heroContainer}>
          <LeftSide />
          <RightSide>
            <img src={webinyLogo} alt="Webiny logo" />
            <Title>The Easiest Way to Adopt Serverless</Title>

            <SubText>
              The way we build, deploy and operate the web is evolving. Webiny
              is a developer-friendly platform for building serverless
              applications.
            </SubText>

            <List>
              <ListItem>
                <Bold>Serverless</Bold>
              </ListItem>
              <ListItem>
                <Bold>Open-Source</Bold>
              </ListItem>
              <ListItem>
                <Bold>GraphQL API</Bold>
              </ListItem>
              <ListItem>
                <Bold>Self-Hosted</Bold>
              </ListItem>
            </List>

            <Buttons>
              <Button
                className={ctaButton}
                link="https://docs.webiny.com/"
                type="dark"
              >
                Get Started
              </Button>
              <div
                onClick={() => {
                  trackGaConversion();
                }}
              >
                <Button
                  className={ctaButton}
                  link="https://github.com/webiny/webiny-js"
                  type="outlineDark"
                  target="_blank"
                >
                  <GitHubLogo src={gitHubLogo} />
                  View on GitHub
                </Button>
              </div>
            </Buttons>
          </RightSide>
        </ContentContainer>
      </Hero>
    );
  }
}

export default HeroComponent;
