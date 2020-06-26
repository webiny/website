import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import imgMicroservices from "./assets/microservices.svg";
import imgRightTool from "./assets/right-tool.svg";
import imgHosted from "./assets/hosted-env.svg";
import imgAcl from "./assets/acl.svg";
import imgHeadless from "./assets/headless.svg";
import imgCommunityTools from "./assets/community-tools.svg";

const BlockSection = styled("section")(
  {
    backgroundColor: theme.color.lightGray,
    borderTop: "1px solid " + theme.color.darkGray,
    borderBottom: "1px solid " + theme.color.darkGray,
  },
  mq({
    padding: [25, 50],
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
      marginBottom: 50,
    },
  },
  mq({
    flexDirection: ["column", "row"],
    marginLeft: [0, 0],
    marginRight: [0, 0],
    padding: ["0 25px", 0],
    "&.first": {
      margin: [0, "100px 0px"],
    },
  })
);

const Cell = styled("div")(
  {
    boxSizing: "border-box",
    flexBasis: "100%",
    backgroundColor: "#fff",
    border: "1px solid #E6E6E6",
    boxShadow: "0 2px 4px 0 rgba(30, 30, 30, 0.5)",
    borderRadius: 5,
    padding: 40,
    h3: {
      fontSize: 20,
      color: theme.color.black,
      marginBottom: 25,
      marginTop: 25,
      fontWeight: theme.fontWeight.regular,
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      img: {
        marginRight: 20,
      },
    },
    h4: {
      fontSize: 24,
      color: theme.color.primaryDark,
      marginTop: 25,
      textAlign: "center",
    },
    img: {
      display: "block",
      margin: "0 auto",
    },
    "&:last-child": {
      marginRight: "0 !important",
    },
  },
  mq({
    marginRight: [0, 75],
    marginBottom: [25, 0],
    minHeight: [400, 380],
    textAlign: ["center", "left"],
    ".image": {
      borderRadius: 5,
      width: ["100%", "630px"],
    },
    ".image-small": {
      borderRadius: 5,
      width: ["100%", "230px"],
    },
    h3: {
      justifyContent: ["center", "flex-start"],
    },
  })
);

const FirstBlocks = () => (
  <ContentContainer>
    <Grid>
      <Cell>
        <img
          className={"image-small"}
          src={imgCommunityTools}
          alt="imgCommunityTools"
        />
        <h4>Made for Developers</h4>
        <h3>
          We created Webiny with developers in mind. It's a single platform
          built with community accepted tools and libraries.
          <br />
          <br />
        </h3>
      </Cell>
      <Cell>
        <img className={"image-small"} src={imgMicroservices} alt="Explore" />
        <h4>Microservices architecture</h4>
        <h3>
          Webiny is built as a set of microservices using serverless
          technologies. Infinitive scale, zero maintenance.
          <br />
          <br />
        </h3>
      </Cell>
      <Cell>
        <img className={"image-small"} src={imgRightTool} alt="Storybook" />
        <h4>Full Customizable</h4>
        <h3>
          Webiny is open-source which allows you to modify, extend and adapt the
          system so it exactly fits your needs.
        </h3>
      </Cell>
    </Grid>
  </ContentContainer>
);

const SecondBlocks = () => (
  <ContentContainer>
    <Grid>
      <Cell>
        <img className={"image-small"} src={imgHeadless} alt="imgHeadless" />
        <h4>Multi-channel distribution</h4>
        <h3>
          The beauty of using a headless CMS is that your content becomes device
          and channel agnostic.
          <br />
          <br />
        </h3>
      </Cell>
      <Cell>
        <img className={"image-small"} src={imgHosted} alt="Explore" />
        <h4>Self-hosted serverless</h4>
        <h3>
          No need to make any tradeoffs between using a scaleable SaaS solution,
          or using a customizable open-source solution. Webiny is best of both.
          <br />
          <br />
        </h3>
      </Cell>
      <Cell>
        <img className={"image-small"} src={imgAcl} alt="Secure" />
        <h4>Secure</h4>
        <h3>
          Issue API tokens for users to use inside 3rd party applications and
          services.
        </h3>
      </Cell>
    </Grid>
  </ContentContainer>
);

class FirstBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BlockSection>
          <FirstBlocks />
        </BlockSection>
      </React.Fragment>
    );
  }
}

class SecondBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BlockSection>
          <SecondBlocks />
        </BlockSection>
      </React.Fragment>
    );
  }
}

export { FirstBlock, SecondBlock };
