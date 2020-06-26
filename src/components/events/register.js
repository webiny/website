import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "emotion";
import ContentContainer from "../ui/content-container";

import sectionBg from "./assets/register-to-event.jpg";
// import adminThemeIcon from './assets/admin-theme-icon.svg';
// import ssrIcon from './assets/ssr-icon.svg';
// import cssJsIcon from './assets/css-js-icon.png';
// import cliIcon from './assets/cli-icon.svg';
// import buildSitesAppsIcon from './assets/build-site-apps-icon.svg';
// import lambdaIcon from './assets/lambda-icon.svg';

const wrapperClass = css(
  {
    background: "url(" + sectionBg + ") no-repeat center top",
    backgroundSize: "cover",
  },
  mq({
    padding: ["0 15px 25px 15px", "25px 0 50px 0"],
  })
);

const SubTitle = styled("h2")({
  fontSize: 42,
  color: theme.color.white,
  textAlign: "center",
  paddingTop: 50,
  marginTop: 25,
  marginBottom: 25,
});

const SubTitleText = styled("p")({
  width: "100%",
  textAlign: "center",
  color: theme.color.white,
  fontSize: theme.fontSize.h3,
});

const FeatureList = styled("ul")(
  {
    margin: "50px auto 50px auto",
    color: theme.color.white,
    listStyle: "none",
    padding: 0,
    li: {
      display: "flex",
      alignItems: "center",
      fontSize: theme.fontSize.h4,
      marginBottom: 20,
      img: {
        display: "block",
        marginRight: 25,
        width: 50,
      },
      p: {
        marginBottom: 0,
      },
    },
  },
  mq({
    width: ["auto", 500],
  })
);

class Register extends React.Component {
  render() {
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>Speak at a Webiny Online Meetup</SubTitle>
        <SubTitleText>
          Build Websites, Apps and APIs With Webiny
          <br />
          As a Developer You Will Benefit From Several Features
        </SubTitleText>

        <FeatureList></FeatureList>

        <ContentContainer />
      </section>
    );
  }
}

export default Register;
