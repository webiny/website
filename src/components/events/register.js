import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "emotion";

import Button from "../ui/button";
import ContentContainer from "../ui/content-container";

import sectionBg from "./assets/register-to-event.jpg";
import freeArrowIcon from "./assets/free.svg";
import demoIcon from "./assets/demo-icon.svg";

const wrapperClass = css(
  {
    background: "url(" + sectionBg + ") no-repeat center top",
    backgroundSize: "cover",
    padding: ["0 5px 5px 5px", "5px 0 20px 0"]
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

const ButtonWrapper = styled("div")({
  position: "relative",
  display: "flex",
  justifyContent: "center",
});

const FreeDemoImage = styled("img")(
  {
    position: "absolute",
    top: 25,
    right: -150,
  },
  mq({
    display: ["none", "block"],
  })
);

const ctaButton = css(
  {
    textTransform: "uppercase",
    padding: "10px 12px !important",
  },
  mq({
    width: ["230px !important"],
  })
);

const ScheduleTalkImage = styled("img")(
  {
    position: "relative",
    marginRight: 8,
  },
  mq({
    display: ["block"],
  })
);


class Register extends React.Component {
  render() {
    const { handleTalkClick, ...restProps } = this.props;
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>Speak at a Webiny Online Meetup</SubTitle>
        <SubTitleText>
          Build Websites, Apps and APIs With Webiny
          <br />
          Speak at a Webiny Online Meetup and share your ideas
        </SubTitleText>

        <FeatureList></FeatureList>
        <ButtonWrapper>
            <FreeDemoImage src={freeArrowIcon} />
            <Button
              onClick={handleTalkClick}
              className={ctaButton}
              type="secondary"
            >
              <ScheduleTalkImage src={demoIcon} />
              Become a speaker
            </Button>
          </ButtonWrapper>

        <ContentContainer />
      </section>
    );
  }
}

export default Register;
