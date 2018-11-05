import React from "react";
import styled from "react-emotion";
import theme from "../../utils/theme";
import { css } from "emotion";
import mq from "../../utils/breakpoints";
import ContentContainer from "../../ui/content-container";
import Button from "../../ui/button";
import ReactTooltip from "react-tooltip";

import heroBg from "./assets/pricing-hero-bg.svg";
import pricingBullet from "./assets/pricing-bullet.svg";
import arrow from "./assets/gs-btn-arrow.svg";

const Hero = styled("section")(
  {
    width: "100%",
    background: "url(" + heroBg + ") no-repeat center top",
    color: "#fff",
    boxSizing: "border-box",
    textAlign: "center"
  },
  mq({
    padding: ["100px 20px 25px", "120px 0 25px"],
    height: ["auto", "calc(100vh - 150px)"],
    minHeight: ["auto", 700],
    maxHeight: ["auto", 768],
    marginBottom: [50, 100],
    backgroundSize: ["cover"],
    backgroundPosition: ["top", "top", "bottom"]
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

const PricingBoxWrapper = styled("div")({
  position: "relative",
  paddingTop: 85
});

const FreePrice = styled("div")({
  position: "absolute",
  background: "#FFFFFF",
  boxShadow: "0 2px 4px 0 rgba(233,233,233,0.50)",
  borderRadius: "50%",
  padding: 20,
  width: 150,
  height: 150,
  top: 0,
  left: "calc(50% - 95px)",
  fontSize: 80,
  color: theme.color.secondaryDark,
  fontWeight: theme.fontWeight.bold,
  lineHeight: "70%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end"
});

const FreePriceSubText = styled("span")({
  fontSize: theme.fontSize.subText,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.color.grayText
});

const PricingBox = styled("div")({
  background: theme.color.white,
  boxShadow: "0 2px 40px 10px rgba(152,152,152,0.50)",
  borderRadius: 8,
  padding: "130px 30px 30px",
  boxSizing: "border-box",
  maxWidth: 750,
  margin: "0 auto",
  color: theme.color.black
});

const ReasonWrapper = styled("div")(
  {
    justifyContent: "space-evenly",
    marginBottom: 25
  },
  mq({
    display: ["block", "flex"]
  })
);

const ReasonsList = styled("ul")(
  {},
  mq({
    width: ["100%", "40%"]
  })
);

const ReasonsItem = styled("li")(
  {
    listStyle: "none",
    paddingLeft: 40,
    marginBottom: 15,
    paddingRight: 0,
    textAlign: "left",
    cursor: "pointer"
  },
  mq({
    background: [
      "url(" + pricingBullet + ") no-repeat left 2px",
      "url(" + pricingBullet + ") no-repeat left 2px"
    ]
  })
);

const reasonsItemRight = css(
  {},
  mq({
    background: [
      "url(" + pricingBullet + ") no-repeat left 2px",
      "url(" + pricingBullet + ") no-repeat right 2px"
    ],
    textAlign: ["left", "right"],
    paddingLeft: [40, 0],
    paddingRight: [0, 40]
  })
);

const Bold = styled("span")({
  fontWeight: theme.fontWeight.bold
});

const button = css(
  {
    boxShadow: "0 2px 3px 0 rgba(160,160,160,0.50)",
    "> img": {
      marginLeft: 10
    }
  },
  mq({
    padding: [15, "14px 100px !important"]
  })
);

const Arrow = styled("img")({
  height: 9,
  marginLeft: 5
});

const TooltipContent = styled("div")({
  width: 150,
  textAlign: "center"
});

export default ({ children, ...props }) => (
  <Hero {...props}>
    <ContentContainer>
      <Title>Simple and Flexible Pricing</Title>
      <SubText>
        Get started with paid plans in seconds, or try the open source
        self-hosted version.
      </SubText>
      <PricingBoxWrapper>
        <FreePrice>
          $0
          <FreePriceSubText>/month</FreePriceSubText>
        </FreePrice>
        <PricingBox>
          <ReasonWrapper>
            <ReasonsList>
              <ReasonsItem
                className={reasonsItemRight}
                data-tip
                data-for="database-storage"
              >
                <Bold>100MB</Bold> MySQL DB storage
              </ReasonsItem>
              <ReasonsItem
                className={reasonsItemRight}
                data-tip
                data-for="api-requests"
              >
                <Bold>10k</Bold> API requests
              </ReasonsItem>
              <ReasonsItem
                className={reasonsItemRight}
                data-tip
                data-for="static-storage"
              >
                <Bold>10GB</Bold> static file storage
              </ReasonsItem>
              <ReasonsItem
                className={reasonsItemRight}
                data-tip
                data-for="deployments"
              >
                <Bold>100</Bold> deployments per month
              </ReasonsItem>
            </ReasonsList>
            <ReasonsList>
              <ReasonsItem data-tip data-for="your-domain">
                Your domain with HTTPS
              </ReasonsItem>
              <ReasonsItem data-tip data-for="custom-apps">
                Upload custom apps and packages
              </ReasonsItem>
              <ReasonsItem data-tip data-for="community-support">
                Community support
              </ReasonsItem>
              <ReasonsItem data-tip data-for="branding">
                Powered by Webiny branding
              </ReasonsItem>
            </ReasonsList>
          </ReasonWrapper>
          <Button className={button} type="primary">
            Get Started
            <Arrow alt="Get Started" src={arrow} />
            <br />
            <small>(No credit card required)</small>
          </Button>
        </PricingBox>

        <ReactTooltip id="database-storage" effect="solid">
          <TooltipContent>
            With Webiny you get your very own database where you can store your
            data.
          </TooltipContent>
        </ReactTooltip>
        <ReactTooltip id="api-requests" effect="solid">
          <TooltipContent>
            Your API requests are served by a dedicated Lambda function.
          </TooltipContent>
        </ReactTooltip>
        <ReactTooltip id="static-storage" effect="solid">
          <TooltipContent>
            Store all your static content, not just your application.
          </TooltipContent>
        </ReactTooltip>
        <ReactTooltip id="your-domain" effect="solid">
          <TooltipContent>
            Add your own domain, and we'll throw in a free SSL certificate.
          </TooltipContent>
        </ReactTooltip>
        <ReactTooltip id="custom-apps" effect="solid">
          <TooltipContent>
            Build and customize Webiny on your local machine, both the database
            and the code, and then upload it to your Webiny Cloud account and
            we'll host it for you.
          </TooltipContent>
        </ReactTooltip>
        <ReactTooltip id="community-support" effect="solid">
          <TooltipContent>
            Get support from our community members.
          </TooltipContent>
        </ReactTooltip>
        <ReactTooltip id="branding" effect="solid">
          <TooltipContent>
            Sites on the free package will have additional branding added to
            their site.
          </TooltipContent>
        </ReactTooltip>
        <ReactTooltip id="deployments" effect="solid">
          <TooltipContent>
            With webiny-cli you can deploy your customized Webiny code to your
            Lambda.
          </TooltipContent>
        </ReactTooltip>
      </PricingBoxWrapper>
    </ContentContainer>
  </Hero>
);
