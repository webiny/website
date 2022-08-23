import React from "react";
import styled from "react-emotion";
import { css } from "emotion";
import Button from "../../../ui/button";
import mq from "../../../utils/breakpoints";
import ArrowImage from "../assets/arrow.svg";
import LocationImage from "../assets/location.svg";
import LogoImage from "../assets/logo.svg";

const button = css(
    {
        margin: "30px 0 0 !important",
        border: "1px solid #00CCB0 !important",
        color: "#00CCB0 !important",
        width: "210px !important",
        "> img": {
            marginLeft: 10,
        },
    },
    mq({
        padding: [15, "14px 30px !important"],
    }),
);

const SideSection = styled("div")(
    {
        paddingLeft: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    mq({
        width: ["auto", "25%"],
        display: ["flex", "block"],
        maxWidth: [400, "25%"],
        margin: ["0 auto", 0],
    }),
);

const Logo = styled("div")({
    height: 62,
    width: 62,
    padding: 5,
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "rgba(100,100,100,0.24) 2px 3px 15px",
    marginBottom: 20,
});

const Title = styled("h5")({
    fontSize: "1.2rem",
    marginBottom: 15,
});

const Arrow = styled("img")({
    height: 9,
    marginLeft: 5,
});

const Location = styled("div")({
    display: "flex",
    alignItems: "center",

    "& img": {
        marginRight: 15,
    },
});

const SideContent = () => {
    return (
        <SideSection>
            <Logo>
                <img src={LogoImage} alt="logo" />
            </Logo>
            <Title>INSTACART</Title>
            <p>
                When they started email marketing, the Koia team used Mailchimp, which was a great
                way to get their feet wet with email campaigns. But as Koia experienced tremendous
                growth, they wanted a platform that could grow with them.
            </p>
            <Location>
                <img src={LocationImage} alt="" />
                <span>United States</span>
            </Location>
            <Button className={button} type="outline">
                Download PDF
                <Arrow alt="Submit" src={ArrowImage} />
            </Button>
        </SideSection>
    );
};

export default SideContent;
