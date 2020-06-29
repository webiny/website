import React from "react";
import styled from "react-emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import { css } from "emotion";
import ContentContainer from "../ui/content-container";
import PipeDriveForm from "./pd-form";

import pinkBg from "./assets/pink-rectangle.svg";

const wrapperClass = css(
  {
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundImage: "url(" + pinkBg + ")",

    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
  },
  mq({
    backgroundSize: ["cover", "cover"],
    paddingTop: [0, 0],
    paddingBottom: [0, 0],
    marginTop: [-110, -143],
  })
);

const contentContainerClass = css(
  {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 1200,
    marginTop: ["30px"],
  },
  mq({
    width: ["100%", "100%"],
    height: ["100%"],
    paddingTop: [80, 180],
    paddingBottom: [80, 146],
    marginBottom: [0, 0],
  })
);

const TextWrapper = styled("div")(
  {
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 60,
  },
  mq({
    paddingTop: [40, 0],
  })
);

const Title = styled("h2")({
  fontSize: 48,
  fontWeight: theme.fontWeight.bold,
  color: theme.color.white,
  lineHeight: "42px",
  textAlign: "center",
  paddingTop: 0,
  margin: 0,
});

class ScheduleTalk extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { refFromParent, ...restProps } = this.props;
    return (
      <section ref={refFromParent} {...restProps} className={wrapperClass}>
        <ContentContainer className={contentContainerClass}>
          <TextWrapper>
            <Title>Want to be a Speaker? Then register here!</Title>
          </TextWrapper>
          <PipeDriveForm formId={"f3bf9e8b525fdf5af948b0c54288c94f7489402"} />
        </ContentContainer>
      </section>
    );
  }
}

export default ScheduleTalk;
