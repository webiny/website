import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Link } from "gatsby";
import theme from "../utils/theme";
import mq from "../utils/breakpoints";
import ContentContainer from "../ui/content-container";
import Newsletter from "./newsletter";
import FooterMenu from "./footerMenu";
import { trackGoToGithub, trackJoinSlack } from "../ui/functions";

import webinyLogo from "./assets/webiny-logo-with-icon-left-white.svg";
import GitHubIcon from "./assets/github-icon.svg";
import SlackIcon from "./assets/slack-icon.svg";
import TwitterIcon from "./assets/twitter-icon.svg";
import YoutubeIcon from "./assets/youtube-icon.svg";

const Wrapper = styled("div")(
    {
        backgroundColor: theme.color.footerBg,
        "--nl-text-color": "white",
        "--nl-text-align": "right",
    },
    mq({
        padding: ["16px 16px 20px 16px", "16px 25px 20px 25px", "50px 0 5px"],
    }),
);

const FlexDisplay = css(
    {
        maxWidth: "100%",
        justifyContent: "space-between",
        boxSizing: "border-box",
    },
    mq({
        display: ["block", "block", "flex"],
    }),
);

const Box = styled("div")(
    {
        boxSizing: "border-box",
    },
    mq({
        width: ["100%", "100%", "33%"],
    }),
);

const textRight = css(
    {},
    mq({
        textAlign: ["center", "center", "right"],
        marginTop: [20, 20, 0],
    }),
);

const Logo = styled("img")(
    {},
    mq({
        margin: ["0 auto 30px auto", "0 auto 30px auto", "0 0 25px 0"],
        display: ["block", "block", "inline"],
        maxHeight: ["62px", "62px", "50px"],
    }),
);

const IconList = styled("ul")(
    {
        listStyle: "none",
        display: "grid",
    },
    mq({
        gridTemplateColumns: ["repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(2, 1fr)"],
        width: ["190px", "190px", "85px"],
        margin: ["0 auto 0 auto", "0 auto 0 auto", "0 0 0 0"],
        columnGap: ["10px", "10px", "15px"],
    }),
);

const IconItem = styled("li")({
    width: "40px",
});

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
        borderTop: ["none", "none", "1px solid #3B3E45"],
        paddingTop: [0, 0, 25],
    }),
);

const Paragraph = styled("span")(
    {
        fontSize: "14px",
        color: "hsl(0,0%,86%)",
    },
    mq({
        display: ["none", "none", "block"],
    }),
);

const Footer = () => (
    <Wrapper>
        <FooterMenu />

        <Bottom>
            <ContentContainer className={FlexDisplay}>
                <Box>
                    <Logo src={webinyLogo} alt="Webiny Logo" />
                    <IconList>
                        <IconItem>
                            <a href="https://github.com/webiny/webiny-js" target="_blank" rel="noreferrer">
                                <img src={GitHubIcon} />
                            </a>
                        </IconItem>
                        <IconItem>
                            <a href="https://www.webiny.com/slack" target="_blank" rel="noreferrer">
                                <img src={SlackIcon} />
                            </a>
                        </IconItem>
                        <IconItem>
                            <a href="https://twitter.com/WebinyCMS" target="_blank" rel="noreferrer">
                                <img src={TwitterIcon} />
                            </a>
                        </IconItem>
                        <IconItem>
                            <a href="https://www.youtube.com/c/webiny" target="_blank" rel="noreferrer">
                                <img src={YoutubeIcon} />
                            </a>
                        </IconItem>
                    </IconList>
                    <Paragraph>Webiny Ltd © 2022</Paragraph>
                </Box>
                <Box className={textRight}>
                    <Newsletter />
                </Box>
            </ContentContainer>
        </Bottom>
    </Wrapper>
);

export default Footer;
