import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../../utils/theme";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";

import background from "./assets/app-list-bg.svg";
import fileManager from "./assets/file-manager.jpg";
import formBuilder from "./assets/form-builder.jpg";
import headlessCms from "./assets/headless-cms-cover-graphql.png";
import pageBuilder from "./assets/webiny-visual-page-builder.png";

const wrapperClass = css(
  {
    background: "url(" + background + ") no-repeat left top",
    backgroundSize: "cover",
  },
  mq({
    marginTop: [0, 0],
    paddingTop: [0, 120],
    paddingBottom: [0, 50],
  })
);

const SubTitle = styled("h2")(
  {
    fontSize: theme.fontSize.h2,
    fontWeight: theme.fontWeight.semiBold,
    textAlign: "center",
    paddingTop: 50,
    marginBottom: 80,
  },
  mq({
    marginTop: [0, 25],
    marginLeft: [25, 0],
    marginRight: [25, 0],
    color: [theme.color.black, theme.color.white],
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
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.50)",
    borderRadius: 2,
    padding: "0 30px 30px 30px",
    h3: {
      fontSize: 24,
      color: theme.color.black,
      marginBottom: 25,
      marginTop: 0,
      fontWeight: theme.fontWeight.semiBold,
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
      marginTop: 0,
      textAlign: "center",
    },
    p: {
      fontSize: theme.fontSize.paragraph,
      color: theme.color.grayText,
      lineHeight: "160%",
      textAlign: "center",
    },
    img: {
      width: 263,
      height: 145,
      overflow: "hidden",
      margin: "0 -30px 25px -30px",
      borderBottom: "1px solid #E6E6E6",
    },
    "&:last-child": {
      marginRight: "0 !important",
    },
  },
  mq({
    marginRight: [0, 50],
    marginBottom: [25, 0],
    minHeight: [400, 380],
    textAlign: ["center", "left"],
    ".image": {
      border: "1px solid #E6E6E6",
      boxShadow: "0 4px 8px 0 rgba(209,209,209,0.50)",
      borderRadius: 5,
      width: ["100%", "630px"],
    },
    ".image-small": {
      border: "1px solid #E6E6E6",
      boxShadow: "0 2px 4px 0 rgba(209,209,209,0.50)",
      borderRadius: 5,
      width: ["100%", "330px"],
    },
    h3: {
      justifyContent: ["center", "flex-start"],
    },
  })
);

const ctaButton = css({
  marginBottom: 25,
  "&:last-child": {
    marginBottom: 0,
  },
});

class AppList extends React.Component {
  render() {
    return (
      <section {...this.props} className={wrapperClass}>
        <SubTitle>Explore Webiny Serverless Apps</SubTitle>

        <ContentContainer>
          <Grid>
            {this.props.exclude !== "headless-cms" && (
              <Cell>
                <img src={headlessCms} alt="Serverless Headless CMS" />
                <h4>Headless CMS</h4>
                <p>
                  GraphQL based headless CMS with powerful content modeling
                  features.
                </p>
                <Button
                  className={ctaButton}
                  link="/serverless-app/headless-cms"
                  type="outlineDark"
                >
                  Learn More
                </Button>
              </Cell>
            )}
            {this.props.exclude !== "page-builder" && (
              <Cell>
                <img src={pageBuilder} alt="Serverless Page Builder" />
                <h4>Page Builder</h4>
                <p>
                  For when you need a quick landing page created without any
                  coding.
                </p>
                <Button
                  className={ctaButton}
                  link="/serverless-app/page-builder"
                  type="outlineDark"
                >
                  Learn More
                </Button>
              </Cell>
            )}
            {this.props.exclude !== "form-builder" && (
              <Cell>
                <img src={formBuilder} alt="Serverless Form Builder" />
                <h4>Form Builder</h4>
                <p>
                  Create forms using a drag&drop interface and track how they
                  convert.
                </p>
                <Button
                  className={ctaButton}
                  link="/serverless-app/form-builder"
                  type="outlineDark"
                >
                  Learn More
                </Button>
              </Cell>
            )}
            {this.props.exclude !== "file-manager" && (
              <Cell>
                <img src={fileManager} alt="Serverless File Manager" />
                <h4>File Manager</h4>
                <p>
                  Upload, categorize, search and edit your files.
                  <br />
                  <br />
                </p>
                <Button
                  className={ctaButton}
                  link="/serverless-app/file-manager"
                  type="outlineDark"
                >
                  Learn More
                </Button>
              </Cell>
            )}
          </Grid>
        </ContentContainer>
      </section>
    );
  }
}

export default AppList;
