import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Newsletter from "./newsletter";
import FooterMenu from "./footerMenu";
import { trackGaConversion } from "../ui/functions";

import webinyLogo from "./assets/webiny-logo-with-icon-left-white.svg";

const Wrapper = styled("div")({
  backgroundColor: theme.color.footerBg,
  padding: "50px 0 5px",
  "--nl-text-color": "white",
  "--nl-text-align": "right",
});

const FlexDisplay = css(
  {
    justifyContent: "space-between",
  },
  mq({
    display: ["block", "flex"],
  })
);

const Box = styled("div")(
  {
    boxSizing: "border-box",
  },
  mq({
    width: ["100%", "33%"],
    padding: [20, 0],
  })
);

const textRight = css(
  {},
  mq({
    textAlign: ["center", "right"],
  })
);

const Logo = styled("img")(
  {},
  mq({
    margin: ["0 auto 20px auto", "0 0 25px 0"],
    display: ["block", "inline"],
    maxHeight: ["50px", "50px"],
  })
);

const Copy = styled("p")(
  {
    fontSize: theme.fontSize.footer,
    color: theme.color.darkGray,
  },
  mq({
    textAlign: ["center", "initial"],
  })
);

const linkStyle = css({
  color: theme.color.darkGray,
});

const Bottom = styled("div")(
  {
    width: "100%",
    clear: "both",
    lineHeight: "200%",
    marginTop: 25,
    marginBottom: 25,
  },
  mq({
    borderTop: ["none", "1px solid #3B3E45"],
    paddingTop: [0, 25],
  })
);

const Footer = () => (
  <Wrapper>
    <FooterMenu />

    <Bottom>
      <ContentContainer className={FlexDisplay}>
        <Box>
          <Logo src={webinyLogo} alt="Webiny Logo" />
          <Copy>
            Webiny free to use and released under the MIT open source license.
            <br />
            <a
              onClick={() => {
                trackGaConversion();
              }}
              className={linkStyle}
              href="https://github.com/webiny/webiny-js"
            >
              GitHub
            </a>{" "}
            /{" "}
            <a className={linkStyle} href="https://twitter.com/WebinyPlatform">
              Twitter
            </a>{" "}
            /{" "}
            <a className={linkStyle} href="https://www.youtube.com/c/webiny">
              YouTube
            </a>{" "}
            /{" "}
            <a className={linkStyle} href="https://www.webiny.com/slack">
              Slack
            </a>{" "}
            /{" "}
            <a className={linkStyle} href="https://blog.webiny.com">
              Blog
            </a>
            <br />
            Webiny Ltd © {new Date().getFullYear()}
          </Copy>
        </Box>
        <Box className={textRight}>
          <Newsletter />
        </Box>
      </ContentContainer>
    </Bottom>
  </Wrapper>
);

export default Footer;
